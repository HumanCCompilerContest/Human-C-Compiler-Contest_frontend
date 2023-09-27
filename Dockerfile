FROM node:18-alpine AS base

FROM base AS builder
WORKDIR /app

COPY . .
RUN yarn --frozen-lockfile --production
RUN yarn build

# Production image
FROM base AS runner
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["yarn", "start"]
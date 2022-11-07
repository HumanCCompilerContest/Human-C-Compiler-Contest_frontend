import Container from '@mui/material/Container'
import type { NextPage } from 'next'
import Head from 'next/head'

import HCCCTarget from '@/components/organisms/home/HCCCTarget'
import JoinCondition from '@/components/organisms/home/JoinCondition'
import MainVisual from '@/components/organisms/home/MainVisual'
import QandA from '@/components/organisms/home/QandA'
import Regulation from '@/components/organisms/home/Regulation'
import RequestedAbility from '@/components/organisms/home/RequestedAbility'
import Schedule from '@/components/organisms/home/Schedule'
import WhatHCCC from '@/components/organisms/home/WhatHCCC'
import BasicLayout from '@/components/templates/BasicLayout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | HCCC</title>
        <meta name='description' content='人間Cコンパイラーコンテスト' />
      </Head>

      <BasicLayout isHome>
        <MainVisual />
        <Container
          maxWidth='lg'
          sx={{
            padding: '2rem 0.5rem 10rem',
          }}
        >
          <Schedule sx={{ margin: '4rem 0 8rem' }} />
          <WhatHCCC sx={{ mb: { xs: '4rem', sm: '8rem' } }} />
          <HCCCTarget />
          <RequestedAbility />
          <JoinCondition />
          <Regulation />
          <QandA />
        </Container>
      </BasicLayout>
    </>
  )
}

export default Home

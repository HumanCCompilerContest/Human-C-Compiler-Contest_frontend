import Container from '@mui/material/Container'
import type { NextPage } from 'next'
import Head from 'next/head'

import BasicLayout from '@/components/templates/BasicLayout'
import MainVisual from '@/components/organisms/home/MainVisual'
import Regulation from '@/components/organisms/home/Regulation'
import RequestedAbility from '@/components/organisms/home/RequestedAbility'
import WhatHCCC from '@/components/organisms/home/WhatHCCC'
import QandA from '@/components/organisms/home/QandA'
import Schedule from '@/components/organisms/home/Schedule'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HCCC</title>
        <meta name='description' content='人間Cコンパイラーコンテスト' />
      </Head>

      <BasicLayout isHome>
        <MainVisual />
        <Container
          maxWidth='lg'
          sx={{
            padding: '2rem 0 10rem',
          }}
        >
          <Schedule />
          <WhatHCCC />
          <RequestedAbility />
          <Regulation />
          <QandA />
        </Container>
      </BasicLayout>
    </>
  )
}

export default Home

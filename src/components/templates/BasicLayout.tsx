import Container from '@mui/material/Container'

import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'

type BasicLayoutProps = {
  children: React.ReactNode
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children } = props
  return (
    <div style={{ height: '100%' }}>
      <Header />
      <Container sx={{ marginTop: '4rem' }}>{children}</Container>
      <Footer />
    </div>
  )
}

export default BasicLayout

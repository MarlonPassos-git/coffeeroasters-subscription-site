import type { NextPage } from 'next'
import { AboutUs } from './components/AboutUs'
import { OurCommitment } from './components/OurCommitment'

const Home: NextPage = () => {
  return (
    <>
      <AboutUs />
      <OurCommitment />
    </>
  )
}

export default Home

import type { NextPage } from 'next'
import { AboutUs } from './components/AboutUs'
import { OurCommitment } from './components/OurCommitment'
import { UncompromisingQuality } from './components/UncompromisingQuality'

const Home: NextPage = () => {
  return (
    <>
      <AboutUs />
      <OurCommitment />
      <UncompromisingQuality />
    </>
  )
}

export default Home

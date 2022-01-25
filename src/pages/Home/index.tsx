import type { NextPage } from 'next'
import { SectionGreatCoffe } from './components/SectionGreatCoffe'
import { SectionHowItWorks } from './components/SectionHowItWorks'
import { SectionOurCollection } from './components/SectionOurCollection'
import { SectionWhyChooseUs } from './components/SectionWhyChooseUs'

const Home: NextPage = () => {
  return (
    <>
      <SectionGreatCoffe />
      <SectionOurCollection />
      <SectionWhyChooseUs />
      <SectionHowItWorks />
    </>
  )
}

export default Home

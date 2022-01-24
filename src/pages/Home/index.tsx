import type { NextPage } from 'next'
import { SectionGreatCoffe } from './components/SectionGreatCoffe'
import { SectionOurCollection } from './components/SectionOurCollection'
import { SectionWhyChooseUs } from './components/SectionWhyChooseUs'

const Home: NextPage = () => {
  return (
    <>
      <SectionGreatCoffe />
      <SectionOurCollection />
      <SectionWhyChooseUs />
    </>
  )
}

export default Home

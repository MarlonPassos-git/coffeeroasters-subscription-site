import { Location } from "../location"
import { Container, WrapperLocations } from "./styled"

export function Locations() {

  return (
    <Container>
      <WrapperLocations>
        <Location
          img="./images/about/desktop/illustration-uk.svg"
          country="United Kingdom"
          address="68  Asfordby Rd"
          city="Alcaston  "
          district="SY6 1YA"
          phone="+44 1241 918425"
        />
        <Location
          img="./images/about/desktop/illustration-canada.svg"
          country="Canada"
          address="1528  Eglinton Avenue"
          city="Toronto"
          district="Ontario M4P 1A6"
          phone="+1 416 485 2997"
        />
        <Location
          img="./images/about/desktop/illustration-australia.svg"
          country="Australia"
          address="36 Swanston Street"
          city="Kewell"
          district="Victoria"
          phone="+61 4 99 629"
        />
      </WrapperLocations>
    </Container>
  )
} 
import { BenefitsItem } from "../BenefistItem";
import { Container } from "./styles";

export function BenefitsList() {

  return (
    <Container>
      <BenefitsItem
        img=".\images\home\desktop\icon-coffee-bean.svg"
        title="Best quality"
        paragraph="Discover an endless variety of the world’s best artisan coffee from each of our roasters."
      />
      <BenefitsItem
        title="Exclusive benefits"
        img=".\images\home\desktop\icon-gift.svg"
        paragraph="Special offers and swag when you subscribe, including 30% off your first shipment."
      />
      <BenefitsItem
        title="Free shipping"
        img=".\images\home\desktop\icon-truck.svg"
        paragraph="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
      />
    </Container>
  )
}
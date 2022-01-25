import { ReasonItem } from "../ReasonItem";
import { Container } from "./styles";

export function ReasonsList() {

  return (
    <Container>
      <ReasonItem
        number={'01'}
        title="Pick your coffee"
        paragraph="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
      />
      <ReasonItem
        number={'02'}
        title="Choose the frequency"
        paragraph="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."

      />
      <ReasonItem
        number={'03'}
        title="Receive and enjoy!"
        paragraph="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."

      />

    </Container>
  )
}
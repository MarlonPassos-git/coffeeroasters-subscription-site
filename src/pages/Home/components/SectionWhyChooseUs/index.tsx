import { BenefitsList } from "./BenefitsList";
import { Container, Paragraph, Title } from "./styled";

export function SectionWhyChooseUs() {

  return (
    <Container>
      <Title>
        Why choose us?
      </Title>
      <Paragraph>
        A large part of our role is choosing which particular coffees will be featured
        in our range. This means working closely with the best coffee growers to give
        you a more impactful experience on every level.
      </Paragraph>
      <BenefitsList />
    </Container>
  )
}
import { Button } from "../../../../components/Button";
import { Line } from "../../../../components/Line";
import { ReasonsList } from "./ReasonsList";
import { Container, Title } from "./styles";

export function SectionHowItWorks() {

  return (
    <Container>
      <Title>
        How it works
      </Title>
      <Line
        color='var(--pale-orange)'
      />
      <ReasonsList />
      <Button>
        Create your plan
      </Button>

    </Container>
  )
}
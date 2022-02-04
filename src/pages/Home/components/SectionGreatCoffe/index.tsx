import { Button } from "../../../../components/Button";
import { responsiveBackground } from "../../../../utils/responsiveBackground";
import { Container, Text, Title } from "./sectionGeatCoffe_styles";

export function SectionGreatCoffe() {

  return (
    <Container>
      <Title>
        Great coffee<br />made simple.
      </Title>
      <Text>
        Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
      </Text>
      <Button>
        Create your plan
      </Button>
    </Container>
  )
}
import { Container, Number, Paragraph, Title } from "./styles";

interface ReasonItemProps {
  number: string,
  title: string,
  paragraph: string,

}

export function ReasonItem({ number, title, paragraph }: ReasonItemProps) {

  return (
    <Container>
      <Number>
        {number}
      </Number>

      <Title>
        {title}
      </Title>

      <Paragraph>
        {paragraph}
      </Paragraph>
    </Container>
  )
}
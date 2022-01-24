import { Container, Img, Title, Paragraph } from "./styles";


interface BenefitsListProps {
  title: string;
  img: string;
  paragraph: string;
}

export function BenefitsItem({ title, img, paragraph }: BenefitsListProps) {

  return (
    <Container>
      <Img
        src={img}
        alt={title}
      />
      <Title>
        {title}
      </Title>

      <Paragraph>
        {paragraph}
      </Paragraph>
    </Container>
  )
}
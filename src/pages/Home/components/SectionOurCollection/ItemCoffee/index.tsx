import { Container, Description, Img, Title } from "./styles";


interface ItemCoffeeProps {
  img: string,
  name: string,
  description: string,
}

export function ItemCoffee({ img, name, description }: ItemCoffeeProps) {

  return (
    <Container>
      <Img
        src={img}
        alt={`${name} coffee`}
      />
      <Title>
        {name}
      </Title>
      <Description>
        {description}
      </Description>
    </Container>
  )
}


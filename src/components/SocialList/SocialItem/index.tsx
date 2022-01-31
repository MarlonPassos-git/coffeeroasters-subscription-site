import { Container, Img } from "./styles"

interface SocialItemProps {
  img: string;
}

export function SocialItem({ img }: SocialItemProps) {

  return (
    <Container>
      <a>
        <Img
          src={img}
          alt="Social"
        />
      </a>
    </Container>
  )
}
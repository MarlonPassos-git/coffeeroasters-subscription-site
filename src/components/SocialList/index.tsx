import { SocialItem } from "./SocialItem"
import { Container } from "./styles"

export function SocialList() {

  return (
    <Container>
      <SocialItem
        img="./images/shared/desktop/icon-facebook.svg"
      />
      <SocialItem
        img="./images/shared/desktop/icon-instagram.svg"
      />
      <SocialItem
        img="./images/shared/desktop/icon-twitter.svg"
      />
    </Container>
  )
}
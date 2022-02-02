import { Container, NavigatorItem } from "./navigatorMain_styles";
import Link from 'next/link'
export function NavigatorItens() {

  return (
    <Container>
      <Link href="/Home" passHref>
        <NavigatorItem>
          Home
        </NavigatorItem>
      </Link>
      <Link href="/About" passHref>
        <NavigatorItem>
          About Us
        </NavigatorItem>
      </Link>
      <Link href="/Subscribe" passHref>
        <NavigatorItem>
          Create Your Plan
        </NavigatorItem>
      </Link>
    </Container>
  )
}
import { NavigatorItens } from "../NavigatorItens"
import { SocialList } from "../SocialList"
import { Container, Logo } from "./styles"

export function Footer() {

    return (
        <Container>
            <Logo
                src="./images/logo_white.svg"
                alt="Logo coffeeroasters"
            />
            <NavigatorItens />
            <SocialList />

        </Container>
    )

}
import Link from "next/link"
import { NavigatorItens } from "../NavigatorItens"
import { SocialList } from "../SocialList"
import { Container, Logo } from "./styles"

export function Footer() {

    return (
        <Container>
            <Link href="/Home" passHref>
                <Logo
                    src="./images/logo_white.svg"
                    alt="Logo coffeeroasters"
                />
            </Link>
            <NavigatorItens />
            <SocialList />

        </Container>
    )

}
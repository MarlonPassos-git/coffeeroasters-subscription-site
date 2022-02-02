
import { Container, Logo } from "./header-styles";
import dynamic from 'next/dynamic'
import Link from "next/link";

export function Header() {
    const NavigationMain = dynamic(
        () => import('../NavigationMain/index'),
        { ssr: false }
    )

    return (
        <Container>
            <Link href="/Home" passHref>
                <Logo
                    src='./images/logo.svg'
                />
            </Link>


            <NavigationMain />

        </Container>
    )
}

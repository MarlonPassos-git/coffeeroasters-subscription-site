
import { Container, Logo } from "./header-styles";
import dynamic from 'next/dynamic'

export function Header() {
    const NavigationMain = dynamic(
        () => import('../NavigationMain/index'),
        { ssr: false }
    )

    return (
        <Container>
            <Logo
                src='./images/logo.svg'
            />
            <NavigationMain />

        </Container>
    )
}

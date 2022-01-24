import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { Container, HamburgerButton } from "./navigationMain-styles";
import Modal from 'react-modal';
import { modalBurgerMenuStyles } from "../../styles/modalBurgerMenu";
import { NavigatorItens } from "../NavigatorItens";
import { breakpoints } from "../../styles/variables";


export default function NavigatorMain() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth)
        })
    }, [])

    const MenuHamburger = (
        <>
            <HamburgerButton
                onClick={() => setIsOpen(!isOpen)}
            >
                {
                    isOpen ?
                        <CgClose color='var(--dark-grey-blue)' size='16px' /> :
                        <HiMenu color='var(--dark-grey-blue)' size='16px' />
                }
            </HamburgerButton>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                ariaHideApp={false}
                // @ts-ignore
                style={modalBurgerMenuStyles}
            >
                <NavigatorItens />
            </Modal>
        </>
    )

    return (
        <Container>
            {(screenWidth <= breakpoints._mobile) ? MenuHamburger : <NavigatorItens />}
        </Container>
    )
}
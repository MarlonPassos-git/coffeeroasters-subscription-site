import { createGlobalStyle  } from 'styled-components'
import { progressiveClamp, Rem } from 'progressive-size'

export const GlobalStyle = createGlobalStyle`

    :root {
        // Fonts
        --font-extra-large: ${progressiveClamp(40, 150)}; 
        --font-large: ${progressiveClamp(40, 72)}; 
        --font-medium: ${progressiveClamp(28, 40)};
        --font-small: ${progressiveClamp(28, 32)};
        --font-extra-small: ${Rem(24)};
        --font-text-standard: ${progressiveClamp(15, 16)};
        --font-navigation: ${Rem(12)};
        

        
        // Colors

        --dark-cyan: #0E8784;
        --light-cyan: #66D2CF;
        --dark-grey-blue: #333D4B;
        --pale-orange: #FDD6BA;
        --light-gream: #FEFCF7;
        --grey: #83888F;
        --very-dark-grayish-blue: #2C343E;

        // Spacing

        --spacing-container-padding: ${progressiveClamp(24, 80)};
    }

    body {
        font-family: 'Barlow', sans-serif;
        font-size: var(--font-small);
        background-color: var(--light-gream);

        display: flex;
        justify-content: center;

    }

    #__next {
        width: 100%;
        max-width: ${Rem(1440)};
        padding: 0 var(--spacing-container-padding);
        min-height: 100vh;
         display: grid;
        grid-template-rows: auto 1fr auto;
}

    }

    h1, h2, h3, h4, h5, h6 { 
        font-family: 'Fraunces', serif;
        font-weight: 900;
    }

    button {
        cursor: pointer;
        
    }
`
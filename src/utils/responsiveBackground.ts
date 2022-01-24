import { breakpoints } from "../styles/variables"

interface IReponsiveBackground { 
  mobile?: string;
  tablet?: string;
  desktop?: string;
}

export function reponsiveBackground({mobile, tablet, desktop}: IReponsiveBackground): string  { 

  let finalCSS = ''

  if (mobile) { 
    finalCSS += `
      background-image: url(${mobile});
    `
  }
  if (tablet) { 
    finalCSS += `
      @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
        background-image: url(${tablet});
      }
    `
  }
  if (desktop) {
    finalCSS += `
      @media (min-width: ${breakpoints.tablet}) {
        background-image: url(${desktop});
      }
    `
  }
  return finalCSS
}



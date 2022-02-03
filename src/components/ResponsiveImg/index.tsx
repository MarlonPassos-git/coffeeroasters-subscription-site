import { breakpoints } from "../../styles/variables";


interface ResponsiveImgProps {
  mobile: string
  desktop: string;
  tablet: string;
  alt: string;
}

export function ResponsiveImg({ mobile, desktop, tablet, alt }: ResponsiveImgProps) {

  return (
    <picture>
      <source media={`(min-width: ${breakpoints.tablet})`} srcSet={desktop} />
      <source media={`(min-width: ${breakpoints.mobile})`} srcSet={tablet} />
      <img src={mobile} alt={alt} />
    </picture>

  )
}
import { Container, Paragraph, Img, Title, PhoneNumber } from "./styled"

interface LocationProps {
  img: string,
  country: string,
  address: string,
  city: string,
  district: string,
  phone: string,
}

export function Location({
  img,
  country,
  address,
  city,
  district,
  phone,
}: LocationProps) {

  return (
    <Container>
      <Img src={img} />
      <Title>
        {country}
      </Title>
      <Paragraph>
        {address}
      </Paragraph>
      <Paragraph>
        {city}
      </Paragraph>
      <Paragraph>
        {district}
      </Paragraph>
      <PhoneNumber
        href={`tel:${phone}`}
      >
        {phone}
      </PhoneNumber>
    </Container>
  )
} 
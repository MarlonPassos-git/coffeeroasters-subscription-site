import { ResponsiveImg } from '../../../../components/ResponsiveImg';
import { Container, Paragraph, Title, WrapperTexts } from './styles';

export function UncompromisingQuality() {
  return (
    <Container>
      <ResponsiveImg
        alt='cup of coffee'
        mobile='./images/about/mobile/image-quality.jpg'
        tablet='./images/about/tablet/image-quality.jpg'
        desktop='./images/about/desktop/image-quality.jpg'
      />
      <WrapperTexts>
        <Title>
          Uncompromising quality
        </Title>
        <Paragraph>
          Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
        </Paragraph>
      </WrapperTexts>

    </Container>
  );
}
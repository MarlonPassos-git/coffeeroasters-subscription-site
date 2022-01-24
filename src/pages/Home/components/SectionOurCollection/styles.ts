import { progressiveClamp, Rem } from 'progressive-size/dist';
import styled from 'styled-components';
import { TitleAlternateBig } from '../../../../components/Texts/styles';
import { breakpoints } from '../../../../styles/variables';

export const Container = styled.section`
  display: grid;
  height: ${progressiveClamp(1561, 861)};
  grid-template-rows: min-content;
  align-content: center;
  justify-content: center;

  @media (min-width: ${breakpoints.mobile}) {

    & > * {
      grid-row: -1 / 1;
      grid-column: -1 / 1;

    }

    
  }
  
`

export const Title = styled(TitleAlternateBig)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: ${progressiveClamp(72, 196)};
  margin: 0 0 ${Rem(13)};

  &:after {
    content: '';
    background-image: linear-gradient(to bottom, rgba(254, 252, 247, 0), #fefcf7);
    position: absolute;
    position: absolute;
    left: 0;
    width: 100%;
    height: ${progressiveClamp(72, 196)};

  }


  @media (min-width: ${breakpoints.mobile}) { 
    margin-top: ${progressiveClamp(-68, -115, breakpoints._tablet)};
  }
  
`

export const CoffeeList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${progressiveClamp(48, 32, breakpoints._tablet)};

  @media (min-width: ${breakpoints.tablet}) { 
    flex-direction: row;
  }

  @media (min-width: ${breakpoints.mobile}) {
    column-gap: ${progressiveClamp(15, 30, breakpoints._tablet, breakpoints._desktop
    )};
    
  }

`




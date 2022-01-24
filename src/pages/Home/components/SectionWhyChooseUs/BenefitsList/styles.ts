import { Rem } from 'progressive-size/dist';
import styled from 'styled-components';
import { breakpoints } from '../../../../../styles/variables';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${Rem(30)};
  column-gap: ${Rem(24)};
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
  }

`



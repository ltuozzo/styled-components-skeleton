import styled from 'styled-components';
import { MediaQuery } from '../../../styles/config/mediaQuery';
import { respondTo } from '../../../styles/helpers/respondTo';

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;

  ${respondTo(MediaQuery.MEDIUM)} {
    max-width: 95vw;
  }

  ${respondTo(MediaQuery.X_LARGE)} {
    max-width: 90vw;
  }

  ${respondTo(MediaQuery.XX_LARGE)} {
    max-width: 84.5vw;
  }
`;

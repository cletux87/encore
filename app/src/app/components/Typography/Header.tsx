import styled from 'styled-components';
import { device } from '../theme/theme';

export const Header = styled.h2`
  font-style: normal;
  font-weight: 550;
  font-size: 20px;
  line-height: 26px;

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 31px;
  }
`;

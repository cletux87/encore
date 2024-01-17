import styled from 'styled-components';
import { device } from '../theme/theme';

export const textStyles = `
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 22.5px;
  }
`;

export const Text = styled.p`
  ${textStyles}
`;

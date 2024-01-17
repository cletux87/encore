import styled from 'styled-components';
import { device } from '../theme/theme';

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 11px;

  @media ${device.tablet} {
    gap: 20px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

const Title = styled.h1`
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: -10px;
  @media ${device.tablet} {
    font-size: 42px;
  }
`;

const SubTitle = styled.h2`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  @media ${device.tablet} {
    font-size: 28px;
  }
`;

const Content = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  @media ${device.tablet} {
    font-size: 20px;
    line-height: 140%;
  }
`;

interface PageHighlightProps {
  title: string;
  subtitle: string;
  content: string;
}

export const PageHighlight = ({
  title,
  subtitle,
  content,
}: PageHighlightProps) => {
  return (
    <RootContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </TitleContainer>
      <Content>{content}</Content>
    </RootContainer>
  );
};

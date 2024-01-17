import styled from 'styled-components';
import NewLogo from '../../../assets/new.svg';
import CheckLogo from '../../../assets/check.svg';
import TikTokLogo from '../../../assets/tiktok.svg';
import InstagramLogo from '../../../assets/instagram.svg';
import XLogo from '../../../assets/twitter.svg';

const RootContainer = styled.article<{ available: boolean }>`
  width: calc(100% - 30px);
  display: flex;
  padding: 15px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.encoreBeige};
  border: 1px solid ${(props) => props.theme.colors.encoreBeige};
  cursor: ${({ available }) => (available ? 'pointer' : 'normal')};
  opacity: ${({ available }) => (available ? '1' : '0.4')};

  &:hover {
    border: 1px solid
      ${({ available, theme }) =>
        available ? theme.colors.encoreDarkBlue : theme.colors.encoreBeige};
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TitleAndLogoContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Title = styled.h2`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 550;
  line-height: 125%;
`;

const Content = styled.p`
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
`;

export interface TaskCardProps {
  title: string;
  content?: string;
  isNew?: boolean;
  isDone?: boolean;
  adornment?: 'x' | 'tiktok' | 'instagram';
  available?: boolean;
  onClick?: () => void;
}

export const TaskCard = ({
  title,
  content,
  isNew = false,
  isDone = false,
  adornment,
  available = true,
  onClick,
}: TaskCardProps) => {
  const rightAdornment = (() => {
    if (isDone) {
      return { logo: CheckLogo, alt: 'Tick inside a green circle' };
    }
    if (isNew) {
      return {
        logo: NewLogo,
        alt: 'New word inside a box with peach color background',
      };
    }
    return null;
  })();

  const leftAdornment = (() => {
    if (adornment === 'instagram') {
      return {
        logo: InstagramLogo,
        alt: 'Instragram brand logo. It is a camera',
      };
    }
    if (adornment === 'tiktok') {
      return {
        logo: TikTokLogo,
        alt: 'Tiktok brand logo. It is a b similar to musical not',
      };
    }
    if (adornment === 'x') {
      return { logo: XLogo, alt: 'X brand logo. It is a letter X' };
    }
    return null;
  })();

  return (
    <RootContainer available={available} onClick={onClick}>
      <TitleContainer>
        <TitleAndLogoContainer>
          {leftAdornment && (
            <img src={leftAdornment.logo} alt={leftAdornment.alt} />
          )}
          <Title>{title}</Title>
        </TitleAndLogoContainer>
        <div>
          {rightAdornment && (
            <img src={rightAdornment.logo} alt={rightAdornment.alt} />
          )}
        </div>
      </TitleContainer>
      {content && (
        <ContentContainer>
          <Content>{content}</Content>
        </ContentContainer>
      )}
    </RootContainer>
  );
};

import styled from 'styled-components';
import { device } from '../theme/theme';

const RootContainer = styled.div`
  position: relative;
  border-radius: 50%;
  height: 90px;
  width: 90px;
  box-shadow: 0px 6px 41px rgba(0, 0, 0, 0.12);

  @media ${device.tablet} {
    width: 133px;
    height: 133px;
  }
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChartContainer = styled.div`
  --p: 90%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: conic-gradient(
    ${(props) => props.theme.colors.encoreDarkBlue} var(--p),
    ${(props) => props.theme.colors.encoreLightBlue} 0
  );
  position: relative;

  @media ${device.tablet} {
    width: 90px;
    height: 90px;
  }
`;

const AbsolutePercentageContainer = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    width: 70px;
    height: 70px;
  }
`;

const PercentageText = styled.span`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0.3px;
  font-weight: 600;

  @media ${device.tablet} {
    font-size: 22.5px;
    line-height: 100%;
    letter-spacing: 0.45px;
  }
`;

interface TaskCompletionProps {
  amount: number;
}

export const TaskCompletion = ({ amount }: TaskCompletionProps) => {
  if (amount < 0 || amount > 100) {
    return <div>Error value not supported</div>;
  }

  return (
    <RootContainer>
      <AbsoluteContainer>
        <ChartContainer style={{ '--p': `${amount}%` } as React.CSSProperties}>
          <AbsolutePercentageContainer>
            <PercentageText>{amount.toFixed(0)}%</PercentageText>
          </AbsolutePercentageContainer>
        </ChartContainer>
      </AbsoluteContainer>
    </RootContainer>
  );
};

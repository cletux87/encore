import styled from 'styled-components';
import { Text } from '../../components/Typography';

const RootContainer = styled.div`
  cursor: pointer;
`;

interface ResendButtonProps {
  onClick?: () => void;
}

export const ResendButton = ({ onClick }: ResendButtonProps) => {
  return (
    <RootContainer onClick={onClick}>
      <Text>
        <strong>Resend</strong>
      </Text>
    </RootContainer>
  );
};

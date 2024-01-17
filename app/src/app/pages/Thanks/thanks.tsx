import styled from 'styled-components';
import { CommonLayout } from '../../components/CommonLayout';
import { Header, Text } from '../../components/Typography';

const RootContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Thanks = () => {
  return (
    <CommonLayout>
      <RootContainer>
        <Header>This activation has ended.</Header>
        <Text>Thanks for your participation</Text>
      </RootContainer>
    </CommonLayout>
  );
};

import styled from 'styled-components';
import { CommonLayout } from '../../components/CommonLayout';
import { Header, Text } from '../../components/Typography';

const RootContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoMatch = () => {
  return (
    <CommonLayout>
      <RootContainer>
        <Header>Oops! Alley oop fail </Header>
        <Text>We did not find the page you are looking for!</Text>
      </RootContainer>
    </CommonLayout>
  );
};

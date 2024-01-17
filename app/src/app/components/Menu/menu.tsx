import styled from 'styled-components';
import { Text, Header } from '../Typography';
import { Button } from '../Button';
import { useAuthUserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const RootContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 25px 10px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.encoreBeige};
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
`;

const OptionContainer = styled.div`
  cursor: pointer;
`;

const options = [
  { label: 'Terms of Use', link: '#' },
  { label: 'Contact Encore', link: '#' },
  { label: 'Request Data Summary', link: '#' },
  { label: 'Request Data Removal', link: '#' },
];

export const Menu = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAuthUserContext();

  const handleLogout = () => {
    dispatch({ type: 'REMOVE_USER.SUCCESS' });
  };

  return (
    <RootContainer>
      <NameContainer>
        <Header>{state.user?.name}</Header>
        <Button onClick={handleLogout}>log out</Button>
      </NameContainer>
      <OptionsContainer>
        {options.map((option) => (
          <OptionContainer onClick={() => navigate(option.link)}>
            <Text>{option.label}</Text>
          </OptionContainer>
        ))}
      </OptionsContainer>
    </RootContainer>
  );
};

import { BrowserRouter } from 'react-router-dom';
import {
  AuthUserProvider,
  useAuthUserContext,
} from '../../context/UserContext';
import { Menu as MenuComp } from './menu';
import styled from 'styled-components';
import { useEffect } from 'react';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Comp = () => {
  const { dispatch } = useAuthUserContext();

  useEffect(() => {
    dispatch({
      type: 'SET_USER.SUCCESS',
      payload: { name: 'John Doe', email: 'a@a.com' },
    });
  }, []);

  return (
    <Div>
      <MenuComp />
    </Div>
  );
};

const Template = () => {
  return (
    <Div>
      <BrowserRouter>
        <AuthUserProvider>
          <div style={{ width: '400px' }}>
            <Comp />
          </div>
        </AuthUserProvider>
      </BrowserRouter>
    </Div>
  );
};

export default {
  title: 'Menu',
  component: MenuComp,
  parameters: {
    docs: {
      page: () => ({}),
    },
  },
};

export const Menu = Template.bind({});

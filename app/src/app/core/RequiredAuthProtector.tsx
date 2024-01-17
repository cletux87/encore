import { useEffect } from 'react';
import { To, useNavigate } from 'react-router-dom';
import { useAuthUserContext } from '../context/UserContext';

interface Props {
  children: JSX.Element;
  redirectTo: To;
}

export const RequireAuthProtector = ({ children, redirectTo }: Props) => {
  const { state, dispatch } = useAuthUserContext();
  const navigate = useNavigate();

  const isAuthenticated = !!state.isAuth;
  useEffect(() => {
    if (isAuthenticated) {
      return;
    }

    navigate(redirectTo);
  }, [isAuthenticated, dispatch, navigate, redirectTo]);

  return isAuthenticated ? children : null;
};

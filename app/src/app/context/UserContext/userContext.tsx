import React, { createContext, useContext, useReducer } from 'react';

type State = {
  user: User | null;
  isAuth?: boolean;
};

type User = {
  name?: string;
  email?: string;
};

const initialState: State = {
  user: null,
  isAuth: false,
};

const AuthUserStateContext = createContext<State | null>(null);
AuthUserStateContext.displayName = 'AuthUserStateContext';

const AuthUserUpdateContext = createContext<React.Dispatch<Action>>(() => null);
AuthUserUpdateContext.displayName = 'AuthUserUpdateContext';

type ActionType = 'SET_USER.SUCCESS' | 'REMOVE_USER.SUCCESS';

type BaseAction<
  Type extends ActionType,
  Payload = undefined,
> = Payload extends undefined
  ? { type: Type }
  : { type: Type; payload: Payload };

type Action =
  | BaseAction<'SET_USER.SUCCESS', User>
  | BaseAction<'REMOVE_USER.SUCCESS'>;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_USER.SUCCESS':
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };
    case 'REMOVE_USER.SUCCESS':
      return {
        ...state,
        isAuth: false,
        user: null,
      };
    default:
      throw new Error('Unexpected action: ' + action);
  }
};

interface Props {
  children: React.ReactNode;
}

function AuthUserProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthUserStateContext.Provider value={state}>
      <AuthUserUpdateContext.Provider value={dispatch}>
        {children}
      </AuthUserUpdateContext.Provider>
    </AuthUserStateContext.Provider>
  );
}

function useAuthUserState() {
  const context = useContext(AuthUserStateContext);
  if (!context) {
    throw new Error('useAuthUserState hook must be within an AuthUserProvider');
  }
  return context;
}

function useAuthUserUpdater() {
  const context = useContext(AuthUserUpdateContext);
  if (!context) {
    throw Error('useAuthUserUpdater hook must be within an AuthUserProvider');
  }
  return context;
}

function useAuthUserContext() {
  return { state: useAuthUserState(), dispatch: useAuthUserUpdater() };
}

export { AuthUserProvider, useAuthUserContext, User };

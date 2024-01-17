import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GetStarted } from '../pages/GetStarted/getStarted';
import { Goal } from '../pages/Goals';
import { NoMatch } from '../pages/NoMatch';
import { Thanks } from '../pages/Thanks';
import { RequireAuthProtector } from './RequiredAuthProtector';

export const ROUTES = {
  root: '/',
  challenge: '/challenge',
  thanks: '/thanks',
  rest: '*',
};

export const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTES.root} element={<GetStarted />} />
        <Route
          path={ROUTES.challenge}
          element={
            <RequireAuthProtector redirectTo={ROUTES.root}>
              <Goal />
            </RequireAuthProtector>
          }
        />
        <Route path={ROUTES.thanks} element={<Thanks />} />
        <Route path={ROUTES.rest} element={<NoMatch />} />
      </Routes>
    </Suspense>
  );
};

/** @jsxImportSource @emotion/react */
import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../../../shared/components/molecules/loader';
import getRoutesV1 from './v1';
import { LOADING } from '../../../shared/constants';
import { css } from '@emotion/react';
import { ROUTES } from '../../../shared/constants/routes';
import { HEADER_HEIGHT } from '../../../shared/constants/dimensions';
import Header from '../../../shared/components/organisms/header';
import AddTurfScreen from '../../add-turf/modules';


const HomePageLazyComponent = lazy(() => import('../../home/components'));
const AboutUsLazyComponent = lazy(() => import('../../about/components'));
const ContactLazyComponent = lazy(() => import('../../contact/components'));
const AllTurfPageLazyComponent=lazy(()=> import('../../home/components/All-turf/index'))
const TurfLazyComponent=lazy(()=>import('../../home/components/Micro-Turf-Page/index'));
export function AppProtectedRoutes() {
  return (
    <Fragment>
      <Header />
      <div
        css={css`
          height: calc(100% - ${HEADER_HEIGHT});
        `}
      >
        <div
          css={css`
            display: flex;
            flex: 1;
            position: relative;
            height: 100%;
          `}
        >
          <div
            css={css`
              flex: 1;
              overflow: hidden;
            `}
          >
            <Routes>{getRoutesV1()}</Routes>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export function AppUnprotectedRoutes() {
  return (
    <Routes>
      <Route
        key={ROUTES.ABOUT_US}
        path={ROUTES.ABOUT_US}
        element={
          <Suspense fallback={<Loader size={32} secondary={LOADING} />}>
            <AboutUsLazyComponent />
          </Suspense>
        }
      />
      <Route
        key={ROUTES.CONTACT}
        path={ROUTES.CONTACT}
        element={
          <Suspense fallback={<Loader size={32} secondary={LOADING} />}>
            <ContactLazyComponent />
          </Suspense>
        }
      />
      <Route
        key={ROUTES.ADD_TURF}
        path={ROUTES.ADD_TURF}
        element={
          <Suspense fallback={<Loader size={32} secondary={LOADING} />}>
            <AddTurfScreen />
          </Suspense>
        }
      />
      <Route
        key={ROUTES.HOME}
        path={ROUTES.HOME}
        element={
          <Suspense fallback={<Loader size={32} secondary={LOADING} />}>
            <HomePageLazyComponent />
          </Suspense>
        }
      />

<Route
        key={ROUTES.All_TURF}
        path={ROUTES.All_TURF}
        element={
          <Suspense fallback={<Loader size={32} secondary={LOADING} />}>
            <AllTurfPageLazyComponent />
          </Suspense>
        }
      />

<Route
        key='viewTurf/id'
        path='viewTurf/:turfName/:id'
        element={
          <Suspense fallback={<Loader size={32} secondary={LOADING} />}>
            <TurfLazyComponent />
          </Suspense>
        }
      />
      
    </Routes>

   
  );
}

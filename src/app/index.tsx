import { FC, Fragment, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Footer } from '../comps/Footer';

export const Content = styled.main`
`;

export const Component: FC<PropsWithChildren> = () => {
  return (
    <Fragment>
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Fragment>
  );
};

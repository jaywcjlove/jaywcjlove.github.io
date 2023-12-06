import { FC, Fragment, PropsWithChildren } from 'react';
import { Outlet, ScrollRestoration, NavLink, useNavigation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import Head from '@uiw/react-head';
import Progress from '@uiw/react-progress';
import logoSrc from '../assets/avatar.png';
import { ReactComponent as EMailIcon } from '../assets/mail.svg';
import { ReactComponent as TranslateIcon } from '../assets/translate.svg';
import { ReactComponent as TranslateCNIcon } from '../assets/translate-cn.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { Footer } from './Footer';

export const Wrapper = styled.div`
  max-width: 48rem;
  min-height: inherit;
  margin: 0 auto;
  padding: 4rem 2rem 10rem 2rem;
  @media (max-width: 590px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: 960px) {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }
  h1, h2 {
    font-weight: 900;
  }
  h1 {
    font-weight: 900;
    letter-spacing: -.05em;
    font-size: 2.8em;
    @media (max-width: 590px) {
      line-height: 1.05em;
      margin-bottom: 0rem;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }
    @media (max-width: 960px) {
      margin-bottom: 0rem;
      margin-top: 0rem;
    }
  }
  > * {
    margin-top: 0.75em;
    margin-bottom: 0.75em;
    font-size: 1.25rem;
    line-height: 1.8;
  }
`;

export const Header = styled.header`
  backdrop-filter: blur(0.4rem);
  margin: 0 auto;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Logo = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 0.725rem;
`;

export const HeaderMain = styled.main`
  max-width: 72rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.675rem;
  @media (max-width: 590px) {
    padding: 0.75rem;
  }
  > * {
    display: flex;
  }
`;

export const Content = styled.main`
  margin: 0 auto;
  min-height: calc(100vh - 5.75rem);
`;

export const Nav = styled.nav`
  user-select: none;
  display: flex;
  gap: 0.65rem;
  a {
    cursor: pointer;
    &.active {
      color: var(--color-fg-default);
    }
  }
  > * {
    display: flex;
    align-items: center;
  }
  > div {
    cursor: pointer;
    font-size: 1.1em;
    color: var(--color-fg-muted);
    transition: color 0.2s ease-in-out;
    &:hover {
      color: var(--color-fg-default);
    }
  }
`;

export const ProgressWrapper = styled.div<{ $opacity: number; }>`
  line-height: 0;
  opacity: ${({ $opacity }) => $opacity || 0};
  transition: all;
  transition-duration: 0.2s;
  position: absolute;
  z-index: 11;
  left: -2px;
  right: -2px;
  .w-progress-bg {
    background-color: #0f0f0ff0;
    &:before {
      background-color: transparent !important;
      display: none !important;
    }
  }
`;

export const Component: FC<PropsWithChildren> = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  return (
    <Fragment>
      <ProgressWrapper $opacity={navigation.state === 'loading' ? 1 : 0}>
        <Progress.Line percent={99.99} status="active" showText={false} style={{ lineHeight: 0 }} />
      </ProgressWrapper>
      <Head.Link rel="icon" href="/favicon.ico" />
      <Header>
        <HeaderMain>
          <NavLink to="/">
            <Logo src={logoSrc} alt="Wang Chujiang(王楚江) 小弟调调™" />
          </NavLink>
          <Nav>
            <NavLink to="/App">{t('menu.app')}</NavLink>
            <NavLink to="/projects">{t('menu.projects')}</NavLink>
            <NavLink to="/sponsor">{t('menu.sponsor')}</NavLink>
            <NavLink to="/about">{t('menu.about')}</NavLink>
            <NavLink to="/contact">
              <EMailIcon />
            </NavLink>
            <a href="https://github.com/jaywcjlove" target="_blank">
              <GithubIcon />
            </a>
            <div onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'cn' : 'en')}>
              {i18n.language === 'en' && <TranslateIcon />}
              {i18n.language === 'cn' && <TranslateCNIcon />}
            </div>
          </Nav>
        </HeaderMain>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer />
      <ScrollRestoration />
    </Fragment>
  );
};

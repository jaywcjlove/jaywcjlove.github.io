import { FC, Fragment, PropsWithChildren } from 'react';
import { Outlet, ScrollRestoration, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Head from '@uiw/react-head';
import logoSrc from '../assets/avatar.png';
import { ReactComponent as EMailIcon } from '../assets/mail.svg';
import { ReactComponent as TranslateIcon } from '../assets/translate.svg';
import { ReactComponent as TranslateCNIcon } from '../assets/translate-cn.svg';
import { Footer } from './Footer';
import { HeaderMain, Header, Logo, Nav, Content } from './Layout';


export const Component: FC<PropsWithChildren> = () => {
  const { t, i18n } = useTranslation();
  return (
    <Fragment>
      <Head.Link rel="icon" href="/favicon.ico" />
      <Header>
        <HeaderMain>
          <NavLink to="/">
            <Logo src={logoSrc} alt="Wang Chujiang(王楚江) 小弟调调™" />
          </NavLink>
          <Nav>
            <NavLink to="/projects">{t('menu.projects')}</NavLink>
            <NavLink to="/about">{t('menu.about')}</NavLink>
            <NavLink to="/contact">
              <EMailIcon />
            </NavLink>
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

import { FC, Fragment, PropsWithChildren } from 'react';
import { Outlet, ScrollRestoration, NavLink, useNavigation } from 'react-router-dom';
import Progress from '@uiw/react-progress';
import { useTranslation } from 'react-i18next';
import Head from '@uiw/react-head';
import logoSrc from '../assets/avatar.png';
import { ReactComponent as EMailIcon } from '../assets/mail.svg';
import { ReactComponent as TranslateIcon } from '../assets/translate.svg';
import { ReactComponent as TranslateCNIcon } from '../assets/translate-cn.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { Footer } from './Footer';
import { HeaderMain, Header, Logo, Nav, Content, ProgressWrapper } from './Layout';

export const Component: FC<PropsWithChildren> = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  return (
    <Fragment>
      <ProgressWrapper $opacity={navigation.state === 'loading' ? 1 : 0}>
        <Progress.Line percent={99.99} status="active" showText={false} style={{ lineHeight: 0 }} />
      </ProgressWrapper>
      <Header>
        <HeaderMain>
          <NavLink to="/">
            <Logo src={logoSrc} alt="Wang Chujiang(王楚江) 小弟调调™" />
          </NavLink>
          <Nav>
            <NavLink to="/App">{t('menu.app')}</NavLink>
            <NavLink to="/projects">{t('menu.projects')}</NavLink>
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

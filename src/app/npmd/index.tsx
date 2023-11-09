import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import Head from '@uiw/react-head';
import { Header } from '../comps/Header';
import { ReactComponent as Logo } from './npmd.svg';
import favicon from './npmd.svg';
import screenshots from './screenshots.png'

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation('npmd');
  return (
    <Header background="#642f2f">
      <Head.Title>NPMD {t('info')}</Head.Title>
      <Head.Link rel="icon" type="image/svg+xml" href={favicon} />
      <Header.Title>NPMD</Header.Title>
      <Header.Logo>
        <Logo width={224} />
      </Header.Logo>
      <Header.Detail>{t('detail')}</Header.Detail>
      <Header.AppStore to="/contact" />
      <Header.OpenSource to="/contact" />
      <Header.Giscus />
      <img src={screenshots} />
      <p>{t('info')}</p>
    </Header>
  );
}
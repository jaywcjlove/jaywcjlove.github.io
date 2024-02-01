import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import Head from '@uiw/react-head';
import { Header } from '../comps/Header';
import logo from './logo.png'
import screenshots1 from './screenshots-1.png'
import screenshots2 from './screenshots-2.png'

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation('create-custom-symbols');
  return (
    <Header background="#253386">
      <Head.Title>Create Custom Symbols {t('detail')}</Head.Title>
      <Head.Link rel="icon" type="image/png" href={logo} />
      <Header.Title>Create Custom Symbols</Header.Title>
      <Header.Logo>
        <img src={logo} width={224} />
      </Header.Logo>
      <Header.Detail>{t('detail')}</Header.Detail>
      <Header.AppStore target="_blank" to="https://apps.apple.com/app/create-custom-symbols/id6476924627" />
      <Header.Giscus />
      <img src={screenshots1} />
      <p>{t('info1')}</p>
      <img src={screenshots2} />
    </Header>
  );
}
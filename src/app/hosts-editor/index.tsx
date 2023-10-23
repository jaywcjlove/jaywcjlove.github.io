import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import Head from '@uiw/react-head';
import { Header } from '../comps/Header';
import { ReactComponent as Logo } from './hosts-editor.svg';
import favicon from './hosts-editor.svg';
import screenshots1 from './1.png'
import screenshots2 from './2.png'

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation('hosts-editor');
  return (
    <Header background="#292929">
      <Head.Title>Hosts Editor {t('info')}</Head.Title>
      <Head.Link rel="icon" type="image/svg+xml" href={favicon} />
      <Header.Title>Hosts Editor</Header.Title>
      <Header.Logo>
        <Logo width={224} />
      </Header.Logo>
      <Header.Detail>{t('detail')}</Header.Detail>
      <Header.AppStore to="/contact" />
      <Header.OpenSource to="/contact" />
      <Header.Giscus />
      <img src={screenshots1} />
      <img src={screenshots2} />
      <p>{t('info')}</p>
    </Header>
  );
}
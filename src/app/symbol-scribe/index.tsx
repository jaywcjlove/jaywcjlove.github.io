import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import Head from '@uiw/react-head';
import { Header } from '../comps/Header';
import { ReactComponent as Logo } from './symbol-scribe.svg';
import favicon from './symbol-scribe.svg';
import screenshots1 from './1.png'
import screenshots2 from './2.png'
import screenshots3 from './3.png'
import screenshots4 from './4.png'
import screenshots5 from './5.png'

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation('symbol-scribe');
  return (
    <Header background="#292929">
      <Head.Title>Symbol Scribe {t('info')}</Head.Title>
      <Head.Link rel="icon" type="image/svg+xml" href={favicon} />
      <Header.Title>Symbol Scribe</Header.Title>
      <Header.Logo>
        <Logo width={224} />
      </Header.Logo>
      <Header.Detail>{t('detail')}</Header.Detail>
      <Header.AppStore to="https://apps.apple.com/app/symbolscribe/id6470879005" />
      <Header.OpenSource to="/contact" />
      <Header.Giscus />
      <img src={screenshots1} />
      <img src={screenshots2} />
      <img src={screenshots3} />
      <img src={screenshots4} />
      <img src={screenshots5} />
      <p>{t('info')}</p>
    </Header>
  );
}
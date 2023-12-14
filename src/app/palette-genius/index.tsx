import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import Head from '@uiw/react-head';
import { Header } from '../comps/Header';
import paletteGenius from './palette-genius.png'
import screenshots1 from './screenshots-1.png'
import screenshots2 from './screenshots-2.png'
import screenshots3 from './screenshots-3.png'
import screenshots4 from './screenshots-4.png'
import screenshots5 from './screenshots-5.png'

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation('palette-genius');
  return (
    <Header background="#741D71">
      <Head.Title>PaletteGenius {t('detail')}</Head.Title>
      <Head.Link rel="icon" type="image/png" href={paletteGenius} />
      <Header.Title>PaletteGenius</Header.Title>
      <Header.Logo>
        <img src={paletteGenius} width={224} />
      </Header.Logo>
      <Header.Detail>{t('detail')}</Header.Detail>
      <Header.AppStore target="_blank" to="https://apps.apple.com/app/symbolscribe/id6472593276" />
      <Header.Giscus />
      <img src={screenshots1} />
      <img src={screenshots2} />
      <img src={screenshots3} />
      <img src={screenshots4} />
      <img src={screenshots5} />
      <p>{t('info')}</p>
      <p>{t('info1')}</p>
      <p>{t('info2')}</p>
      <p>{t('info3')}</p>
      <p>{t('info4')}</p>
    </Header>
  );
}
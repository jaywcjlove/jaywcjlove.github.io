import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import Head from '@uiw/react-head';
import { Header } from '../comps/Header';
import logo from './textsound-saver.png'
import screenshots1 from './screenshots-1.png'
import screenshots2 from './screenshots-2.png'

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation('textsound-saver');
  return (
    <Header background="#31467b">
      <Head.Title>TextSound Saver</Head.Title>
      <Head.Meta name="description" content={t('detail')} />
      <Head.Meta name="123" http-equiv="refresh" content="0;url=https://wangchujiang.com/TextSoundSaver/" />
      <Head.Link rel="icon" type="image/png" href={logo} />
      <Head.Meta name="twitter:creator" content="@jaywcjlove" />
      <Head.Meta name="twitter:title" content="TextSound Saver" />
      <Head.Meta name="twitter:description" content={t('detail')} />
      <Head.Meta name="twitter:image" content={screenshots2} />
      <Head.Meta name="twitter:image:src" content={screenshots2} />

      <Head.Meta property="og:image" content={screenshots2} />
      <Head.Meta property="og:image:alt" content={screenshots2} />
      <Head.Meta property="og:title" content="TextSound Saver" />
      <Head.Meta property="og:description" content={t('detail')} />

      <Header.Title>TextSound Saver</Header.Title>
      <Header.Logo>
        <img src={logo} width={224} />
      </Header.Logo>
      <Header.Detail>{t('detail')}</Header.Detail>
      <Header.OpenSource target="_blank" to="https://github.com/jaywcjlove/TextSoundSaver" />
      <Header.AppStore target="_blank" to="https://apps.apple.com/app/resumerevise/id6478511402" />
      <Header.Giscus />
      <img src={screenshots1} />
      <img src={screenshots2} />
      <p>{t('info')}</p>
    </Header>
  );
}
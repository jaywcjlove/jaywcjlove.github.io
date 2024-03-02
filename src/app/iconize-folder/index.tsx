import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import Head from '@uiw/react-head';
import { Header } from '../comps/Header';
import logo from './logo.png'

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation('textsound-saver');
  return (
    <Header background="#31467b">
      <Head.Title>Iconize Folder</Head.Title>
      <Head.Meta name="description" content={t('detail')} />
      <Head.Meta name="123" http-equiv="refresh" content="0;url=https://wangchujiang.com/IconizeFolder/" />
      <Head.Link rel="icon" type="image/png" href={logo} />
      <Head.Meta name="twitter:creator" content="@jaywcjlove" />
      <Head.Meta name="twitter:title" content="Iconize Folder" />
      <Head.Meta name="twitter:description" content={t('detail')} />
      <Head.Meta property="og:title" content="Iconize Folder" />
      <Head.Meta property="og:description" content={t('detail')} />

      <Header.Title>Iconize Folder</Header.Title>
      <Header.Logo>
        <img src={logo} width={224} />
      </Header.Logo>
      <Header.Detail>{t('detail')}</Header.Detail>
      <Header.OpenSource target="_blank" to="https://github.com/jaywcjlove/IconizeFolder" />
      {/* <Header.AppStore target="_blank" to="https://apps.apple.com/app/resumerevise/id6478511402" /> */}
      <Header.Giscus />
    </Header>
  );
}
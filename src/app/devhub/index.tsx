import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import Head from '@uiw/react-head';
import { Header } from '../comps/Header';
import devhub from './devhub.png'
import screenshots1 from './screenshots-1.png'
import screenshots2 from './screenshots-2.png'
import screenshots3 from './screenshots-3.png'
import screenshots4 from './screenshots-4.png'
import screenshots5 from './screenshots-5.png'
import screenshots6 from './screenshots-6.png'

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation('devhub');
  return (
    <Header background="#31467b">
      <Head.Title>DevHub</Head.Title>
      <Head.Meta name="description" content={t('detail')} />
      <Head.Link rel="icon" type="image/png" href={devhub} />
      <Head.Meta name="twitter:creator" content="@jaywcjlove" />
      <Head.Meta name="twitter:title" content="DevHub" />
      <Head.Meta name="twitter:description" content={t('detail')} />
      <Head.Meta name="twitter:image" content={screenshots1} />
      <Head.Meta name="twitter:image:src" content={screenshots1} />

      <Head.Meta property="og:image" content={screenshots1} />
      <Head.Meta property="og:image:alt" content={screenshots1} />
      <Head.Meta property="og:title" content="DevHub" />
      <Head.Meta property="og:description" content={t('detail')} />

      <Header.Title>DevHub</Header.Title>
      <Header.Logo>
        <img src={devhub} width={224} />
      </Header.Logo>
      <Header.Detail>{t('detail')}</Header.Detail>
      <Header.AppStore target="_blank" to="https://apps.apple.com/app/devhub/id6476452351" />
      <Header.OpenSource target="_blank" to="https://github.com/jaywcjlove/DevHub" />
      <Header.ProductHunt target="_blank" postId="436362" href="https://www.producthunt.com/posts/devhub-6?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-devhub&#0045;6" />
      <Header.Giscus />
      <img src={screenshots1} />
      <img src={screenshots2} />
      <p>{t('info1')}</p>
      <img src={screenshots3} />
      <p>{t('info2')}</p>
      <img src={screenshots4} />
      <img src={screenshots5} />
      <img src={screenshots6} />
    </Header>
  );
}
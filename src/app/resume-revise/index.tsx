import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import Head from '@uiw/react-head';
import { Header } from '../comps/Header';
import resumeRevise from './resume-revise.png'
import screenshots1 from './screenshots-1.png'
import screenshots2 from './screenshots-2.png'
import screenshots3 from './screenshots-3.png'
import screenshots4 from './screenshots-4.png'

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation('resume-revise');
  return (
    <Header background="#31467b">
      <Head.Title>Resume Revise</Head.Title>
      <Head.Meta name="description" content={t('detail')} />
      <Head.Link rel="icon" type="image/png" href={resumeRevise} />
      <Head.Meta name="twitter:creator" content="@jaywcjlove" />
      <Head.Meta name="twitter:title" content="Resume Revise" />
      <Head.Meta name="twitter:description" content={t('detail')} />
      <Head.Meta name="twitter:image" content={screenshots4} />
      <Head.Meta name="twitter:image:src" content={screenshots4} />

      <Head.Meta property="og:image" content={screenshots4} />
      <Head.Meta property="og:image:alt" content={screenshots4} />
      <Head.Meta property="og:title" content="Resume Revise" />
      <Head.Meta property="og:description" content={t('detail')} />

      <Header.Title>Resume Revise</Header.Title>
      <Header.Logo>
        <img src={resumeRevise} width={224} />
      </Header.Logo>
      <Header.Detail>{t('detail')}</Header.Detail>
      <Header.AppStore target="_blank" to="https://apps.apple.com/app/resumerevise/id6476400184" />
      <Header.ProductHunt target="_blank" postId="436395" href="https://www.producthunt.com/posts/resume-revise?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-resume&#0045;revise" />
      <Header.Giscus />
      <img src={screenshots1} />
      <img src={screenshots2} />
      <img src={screenshots3} />
      <img src={screenshots4} />
      <h2># {t('info1')}</h2>
      <p>{t('info2')}</p>
      <h2># {t('info3')}</h2>
      <p>{t('info4')}</p>
    </Header>
  );
}
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
      <Head.Title>Resume Revise {t('detail')}</Head.Title>
      <Head.Link rel="icon" type="image/png" href={resumeRevise} />
      <Head.Meta name="twitter:creator" content="@jaywcjlove" />
      <Head.Meta name="twitter:title" content="Resume Revise" />
      <Head.Meta name="twitter:description" content={t('detail')} />
      <Head.Meta name="twitter:image" content={screenshots4} />
      <Header.Title>Resume Revise</Header.Title>
      <Header.Logo>
        <img src={resumeRevise} width={224} />
      </Header.Logo>
      <Header.Detail>{t('detail')}</Header.Detail>
      <Header.AppStore target="_blank" to="https://apps.apple.com/app/symbolscribe/id6476400184" />
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
import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '../comps/Header';
import { ReactComponent as Logo } from './npmd.svg';
import screenshots from './screenshots.png'

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation('npmd');
  return (
    <Header background="#292929">
      <Header.Title>NPMD</Header.Title>
      <Header.Logo>
        <Logo width={224} />
      </Header.Logo>
      <Header.Detail>{t('detail')}</Header.Detail>
      <Header.AppStore href="https://github.com/jaywcjlove/npmd" />
      <Header.OpenSource href="https://github.com/jaywcjlove/npmd" />
      <Header.Giscus />
      <img src={screenshots} />
      <p>{t('info')}</p>
    </Header>
  );
}
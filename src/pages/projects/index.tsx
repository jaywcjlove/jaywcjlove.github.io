import { FC, Fragment, PropsWithChildren } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import styled from 'styled-components';
import { Wrapper } from '../../comps/Layout';
import {  ArticleCard } from './Card';
import data from './data.json';

const BoxWrapper = styled(Wrapper)`
  h2, > p {
    padding-left: 0.53rem;
  }
  > h2 {
    margin-top: 1.5rem;
  }
`

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation();
  return (
    <BoxWrapper>
      <h1>{t('projects.title')}</h1>
      <p>
        <Trans
          i18nKey="projects.info"
          components={{
            projects: <a href="https://github.com/search?q=user:jaywcjlove+user:uiwjs+user:tsbbjs+user:kktjs+user:antdpro+user:JSLite+archived:false&type=Repositories" target="_blank" />,
          }}
          default="I maintain <projects>many projects</projects>, including some very popular ones."
        />
      </p>
      {data.map((item, idx) => {
        return (
          <Fragment key={idx}>
            <h2>{item.title}</h2>
            <ArticleCard data={item.children} />
          </Fragment>
        );
      })}
    </BoxWrapper>
  );
};

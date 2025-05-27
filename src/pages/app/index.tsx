import type { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../comps/Layout';
import data from './data.json';

const AppWrapper = styled(Wrapper)``;

const Content = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const link = css`
  display: flex;
  gap: 0.54rem;
  padding: 0.65rem;
  border-radius: 0.33rem;
  background-color: rgba(var(--color-rgb) / 3%);
  &:hover {
    background-color: rgba(var(--color-rgb) / 6%);
  }
  img {
    width: 80px;
    height: 80px;
  }
  > section {
    display: flex;
    flex-direction: column;
  }
  h3, p {
    margin: 0;
  }
  h3 {
    line-height: 1.34rem;
    padding-top: 0.45rem;
    margin-bottom: 0.52rem;
  }
  p {
    font-size: 14px;
    opacity: 0.5;
    line-height: 1.04rem;
  }
  div {
    line-height: initial;
  }
`

const App = styled(Link)`
  ${link}
`;

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation('app');
  return (
    <AppWrapper>
      <h1>{t('title')}</h1>
      <Content>
        {data.map((item, idx) => {
          const isHttp = /^(https?:\/\/)?([\w.]+)\.([a-z]{2,})(\/\S*)?$/i.test(item.path)
          const props = {
            ...(isHttp ? { target: "_blank" } : {}),
          }
          return (
            <App key={idx} to={item.path} {...props}>
              <img src={item.icon} />
              <section>
                <h3>{t(`${item.name}`)}</h3>
                <p>{t(`${item.name}_`)}</p>
              </section>
            </App>
          );
        })}
      </Content>
    </AppWrapper>
  );
};

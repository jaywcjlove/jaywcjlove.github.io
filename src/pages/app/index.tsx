import type { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../comps/Layout';
import data from './data.json';

export const AppWrapper = styled(Wrapper)`
  padding: 5rem 0 8rem 0;
`;

export const AppContent = styled.main`
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
    margin-bottom: 0.22rem;
    font-size: 1.17rem;
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

export const App = styled(Link)`
  ${link}
  section {
    position: relative;
    width: 100%;
  }
  sup {
    position: absolute;
    right: -5px;
    top: -5px;
    font-size: 10px;
    line-height: 1;
    background-color: rgba(var(--color-rgb) / 12%);
    border-radius: 3px;
    padding: 1px 3px;
  }
`;

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation('app');
  return (
    <AppWrapper>
      <h1>{t('title')}</h1>
      <AppContent>
        {data.map((item, idx) => {
          const isHttp = /^(https?:\/\/)?([\w.]+)\.([a-z]{2,})(\/\S*)?$/i.test(item.path)
          const props = {
            ...(isHttp ? { target: "_blank" } : {}),
          }
          return (
            <App key={idx} to={item.path} {...props}>
              <img src={item.icon} />
              <section>
                <sup>{item.platform}</sup>
                <h3>{t(`${item.name}`)}</h3>
                <p>{t(`${item.name}_`)}</p>
              </section>
            </App>
          );
        })}
      </AppContent>
    </AppWrapper>
  );
};

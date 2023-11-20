import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../comps/Layout';
import data from './data.json';

const AppWrapper = styled(Wrapper)``;

const Content = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1rem;
`;
const App = styled(Link)`
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
`;

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation('app');
  return (
    <AppWrapper>
      <h1>{t('title')}</h1>
      <Content>
        {data.map((item, idx) => {
          return (
            <App key={idx} to={item.path}>
              <img src={item.icon} />
              <section>
                <h3>{item.name}</h3>
                <p>{t(`${item.name}`)}</p>
                <div>
                  {item.enabled === false && <TagName>{t("enabled")}</TagName>}
                </div>
              </section>
            </App>
          );
        })}
      </Content>
    </AppWrapper>
  );
};


const TagName = styled.span`
  font-size: 12px;
  background: var(--color-danger-fg);
  border-radius: 3px;
  color: var(--color-fg-default);
  padding: 1px 2px 2px 2px;
  line-height: 12px;
`;

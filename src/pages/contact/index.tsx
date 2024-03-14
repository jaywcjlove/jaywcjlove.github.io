import { FC, PropsWithChildren } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation, Trans } from 'react-i18next';
import { Wrapper } from '../../comps/Layout';
import { GiscusLayout } from '../../comps/Giscus';

const textclip = keyframes`
  to {
    background-position: 200% center;
  }
`;

export const Mail = styled.a`
  color: transparent;
  display: block;
  background-image: linear-gradient(
    -225deg,
    #331d82 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textclip} 2s linear infinite;
  display: inline-block;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 900;
  margin: 0;
  margin-top: 1rem;
  &::after {
    display: none;
  }
  &:hover {
    animation: none;
    background-image: linear-gradient(
      -225deg,
      #ff1361 0%,
      #44107a 29%,
      #ff1361 67%,
      #fff800 100%
    );
  }
`;

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <h1>{t('contact.title')}</h1>
      <Mail href="mailto:kennyiseeyou@gmail.com">
        kennyiseeyou@gmail.com
      </Mail>
      <p>
        <Trans i18nKey="contact.info">
          I value my time, so make it worth it, and <a href="https://www.google.com/search?q=succinct+emails" target="_blank">keep it succinct</a>.
        </Trans>
      </p>
      <GiscusLayout />
    </Wrapper>
  );
};

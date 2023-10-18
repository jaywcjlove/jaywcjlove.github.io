import styled from 'styled-components';
import type { FC, PropsWithChildren } from 'react';
import { Section, useStore } from './store';
import { Title, AppStore, OpenSource, HeroWavesWrapper, Detail, Logo } from './Comps';
import { Giscus, GiscusContent, } from './Giscus';
import { Button } from './Language';

interface HeaderProps {
  background?: string;
}

const InternalContent = styled.main`
  max-width: 48rem;
  margin: 0 auto;
  padding: 4rem 1rem 4rem 1rem;
  > p {
    font-size: 1.25rem;
    line-height: 1.8;
    margin-top: 1.2em;
    margin-bottom: 1.2em;
  }
  @media (max-width: 590px) {
    padding-top: 2rem;
    > p {
      font-size: 1.25rem;
      line-height: 1.3;
      margin-top: 1.2em;
      margin-bottom: 1.2em;
    }
  }
  img {
    max-width: 100%;
  }
`;

export const InternalHeader: FC<PropsWithChildren<HeaderProps>> = ({ children, background }) => {
  return (
    <Section initial={{ background }}>
      <Button />
      <Internal />
      <InternalContent>
        {children}
        <GiscusContent />
      </InternalContent>
    </Section>
  );
}

const Wrapper = styled.section<{ $bg?: string; }>`
  background-color: ${({ $bg }) => $bg ? $bg : 'var(--color-neutral-muted)'};
`;

const Content = styled.section`
  max-width: 72rem;
  min-height: 25rem;
  margin: 0 auto;
  padding: 8rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 590px) {
    padding: 4rem 1rem 0 1rem;
  }
  a {
    color: var(--color-fg-subtle);
    &:hover {
      color: var(--color-fg-muted);
    }
  }
`;

const Box = styled.div`
  display: flex;
  gap: 1rem;
`;

const Internal: FC<PropsWithChildren> = () => {
  const { title, logo, detail, background, appStore, openSource } = useStore();
  return (
    <Wrapper $bg={background}>
      <Content>
        {logo}
        {title}
        {detail}
        <Box>
        {openSource}{appStore}
        </Box>
      </Content>
      <HeroWavesWrapper />
    </Wrapper>
  );
}

type HeaderComponent = typeof InternalHeader & {
  Logo: typeof Logo;
  Title: typeof Title;
  Detail: typeof Detail;
  AppStore: typeof AppStore;
  OpenSource: typeof OpenSource;
  Giscus: typeof Giscus;
};

export const Header: HeaderComponent = InternalHeader as HeaderComponent;

Header.Title = Title;
Header.Logo = Logo;
Header.Detail = Detail;
Header.AppStore = AppStore;
Header.OpenSource = OpenSource;
Header.Giscus = Giscus;
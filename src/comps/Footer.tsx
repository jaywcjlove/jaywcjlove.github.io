import styled from "styled-components";
import { ReactComponent as SinaIcon } from '../assets/sina.svg';
import { ReactComponent as TwitterIcon } from '../assets/twitter.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as EMailIcon } from '../assets/mail.svg';

const Wrapper = styled.footer`
  border-top: 1px solid var(--color-border-default);
`;

const Main = styled.main`
  padding: 1.75rem 1rem 5rem 1rem;
  max-width: 72rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  section {
    display: flex;
    gap: 0.5rem;
    font-size: 1.125rem;
  }
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Main>
        <div>Hello World!</div>
        <section>
          <a href="https://weibo.com/pc175" target="_blank">
            <SinaIcon />
          </a>
          <a href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwangchujiang.com&twgr=kettanaito&screen_name=jaywcjlove&twterm=follow" target="_blank">
            <TwitterIcon />
          </a>
          <a href="https://github.com/jaywcjlove" target="_blank">
            <GithubIcon />
          </a>
          <a href="mailto:wowohoo@qq.com">
            <EMailIcon />
          </a>
        </section>
      </Main>
    </Wrapper>
  );
}
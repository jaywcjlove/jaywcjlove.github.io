import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Wrapper } from '../../comps/Layout';
import avatarSrc from '../../assets/avatar.png';
import { ReactComponent as EMailIcon } from '../../assets/mail.svg';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as SinaIcon } from '../../assets/sina.svg';

const SponsorWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1.2rem;
    margin-top: 0;
    margin-bottom: 0;
  }
  > * {
    margin-top: 0;
  }
  img {
    border-radius: 10%;
  }
  section {
    display: flex;
    gap: 1rem;
  }
`;

export const Component = () => {
  const { t } = useTranslation();
  return (
    <SponsorWrapper>
      <img src={avatarSrc} width="60" />
      <h1>小弟调调™</h1>
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
        <a href="mailto:kennyiseeyou@gmail.com">
          <EMailIcon />
        </a>
      </section>
      <p>
        {t("home.info")}
      </p>
    </SponsorWrapper>
  );
};

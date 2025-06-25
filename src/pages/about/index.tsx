import { FC, PropsWithChildren } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Wrapper } from '../../comps/Layout';
import { ReactComponent as PeerlistIcon } from '../../assets/peerlist.svg';
import { ReactComponent as RedditIcon } from '../../assets/reddit.svg';
import { ReactComponent as XIcon } from '../../assets/x.svg';
import { ReactComponent as BlueskyIcon } from '../../assets/bluesky.svg';
import { ReactComponent as GithubIcon } from '../../assets/github2.svg';
import { ReactComponent as WeiboIcon } from '../../assets/weibo.svg';
import { ReactComponent as NpmIcon } from '../../assets/npm.svg';
import { ReactComponent as SwiftpackageIcon } from '../../assets/swiftpackageindex.svg';
import { ReactComponent as DockerIcon } from '../../assets/docker.svg';
import { ReactComponent as ProducthuntIcon } from '../../assets/producthunt.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as ThreadsIcon } from '../../assets/threads.svg';
import { ReactComponent as MastodonIcon } from '../../assets/mastodon.svg';
import { ReactComponent as SubstackIcon } from '../../assets/substack.svg';
import { ReactComponent as LaunchigniterIcon } from '../../assets/launchigniter.svg';
import styled, { css } from 'styled-components';


const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  svg {
    font-size: 1.1rem;
  }
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.35em;
    line-height: 1.5;
  }
`;

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <h1>{t('about.title')}</h1>
      <p>{t('about.info')}</p>
      <p>
        <Trans
          i18nKey="about.info2"
          components={{
            repo: <a href="https://github.com/search?q=user:jaywcjlove+user:uiwjs+user:tsbbjs+user:kktjs+user:antdpro+user:JSLite+archived:false&type=Repositories" target="_blank" />,
            npm: <a href="https://www.npmjs.com/~wcjiang" target="_blank" />
          }}
          default="For nearly 10 years, I have been contributing to the open source community, with close to <repo>300 code repositories</repo> and publishing over <npm>500 packages</npm> through npm. In the past year, these packages have been downloaded nearly 60 million times on npm. Currently, I am on the verge of unemployment, having received almost no donations in the open source field. Nevertheless, I continue to dedicate my time and energy to contribute. Therefore, I plan to explore a career change within 1 to 2 years, but I will still actively participate in open source sharing. To me, it has become a habit as natural as brushing my teeth every morning. Open source sharing is an integral part of my life, and I am enthusiastic about giving back my knowledge and experience to the open source community."
        />
      </p>
      <p>{t('about.info3')}</p>
      <p>{t('about.info4')}</p>
      <h2>{t('about.subtitle')}</h2>
      <List>
        <li>
          <a href="https://github.com/jaywcjlove" target="_blank">
            <GithubIcon />
            Github
          </a>
        </li>
        <li>
          <a href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwangchujiang.com&twgr=kettanaito&screen_name=jaywcjlove&twterm=follow" target="_blank">
            <XIcon />
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.reddit.com/user/wcjiang/submitted/" target="_blank">
            <RedditIcon />
            Reddit
          </a>
        </li>
        <li>
          <a href="https://peerlist.io/jiang" target="_blank">
            <PeerlistIcon />
            Peerlist
          </a>
        </li>
        <li>
          <a href="https://bsky.app/profile/wangchujiang.com" target="_blank">
            <BlueskyIcon />
            Bluesky
          </a>
        </li>
        <li>
          <a href="https://jaywcjlove.substack.com" target="_blank">
            <SubstackIcon />
            Substack
          </a>
        </li>
        <li>
          <a href="https://www.threads.com/@wangchujiang" target="_blank">
            <ThreadsIcon />
            Threads
          </a>
        </li>
        <li>
          <a href="https://mastodon.social/@jaywcjlove" target="_blank">
            <MastodonIcon />
            Mastodon
          </a>
        </li>
        <li>
          <a href="https://weibo.com/pc175" target="_blank">
            <WeiboIcon />
            微博
          </a>
        </li>
        <li>
          <a href="https://www.npmjs.com/~wcjiang" target="_blank">
            <NpmIcon />
            npm
          </a>
        </li>
        <li>
          <a href="https://swiftpackageindex.com/jaywcjlove" target="_blank">
            <SwiftpackageIcon />
            Swift Package Index
          </a>
        </li>
        <li>
          <a href="https://hub.docker.com/u/wcjiang" target="_blank">
            <DockerIcon />
            Docker Hub
          </a>
        </li>
        <li>
          <a href="https://launchigniter.com/user/kennyiseeyou" target="_blank">
            <LaunchigniterIcon />
            LaunchIgniter
          </a>
        </li>
        <li>
          <a href="https://www.producthunt.com/@jaywcjlove" target="_blank">
            <ProducthuntIcon />
            Product Hunt
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/wangchujiang/" target="_blank">
            <InstagramIcon />
            Instagram
          </a>
        </li>
      </List>
    </Wrapper>
  );
};

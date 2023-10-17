import { FC, PropsWithChildren } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Wrapper } from '../../comps/Layout';

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
      <ul>
        <li>
          <a href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwangchujiang.com&twgr=kettanaito&screen_name=jaywcjlove&twterm=follow" target="_blank">Twitter</a>
        </li>
        <li>
          <a href="https://github.com/jaywcjlove" target="_blank">Github</a>
        </li>
        <li>
          <a href="https://github.com/jaywcjlove" target="_blank">微博</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/~wcjiang" target="_blank">npm</a>
        </li>
        <li>
          <a href="https://swiftpackageindex.com/jaywcjlove" target="_blank">Swift Package Index</a>
        </li>
        <li>
          <a href="https://hub.docker.com/u/wcjiang" target="_blank">Docker Hub</a>
        </li>
        <li>
          <a href="https://www.producthunt.com/@jaywcjlove" target="_blank">Product Hunt</a>
        </li>
      </ul>
    </Wrapper>
  );
};

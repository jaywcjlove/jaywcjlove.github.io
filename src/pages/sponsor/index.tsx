import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Wrapper } from '../../comps/Layout';
import { ReactComponent as PaypalIcon} from './paypal-color.svg';
import { ReactComponent as BuyMeACoffeeIcon} from './bmc-full-logo.svg';
import { ReactComponent as KoFiIcon} from './ko-fi.svg';

import afdian from './afdian.png'

const SponsorWrapper = styled(Wrapper)`
  padding: 5rem 0 8rem 0;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img + img {
    margin-left: 1rem;
  }
  ul {
    padding-left: 0.85em;
  }
  h2 {
    font: revert;
  }
  @media (max-width: 590px) {
    img + img {
      margin-left: 0;
    }
  }
`;

const SubTitle = styled.li`
  list-style: none;
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-left: -16px;
  padding: 5px 0;
  color: var(--color-fg-subtle);
`;

export const Component: FC<PropsWithChildren> = () => {
  const { t } = useTranslation();
  return (
    <SponsorWrapper>
      <h1>{t('sponsor.title')}</h1>
      <p>{t('sponsor.info')}</p>
      <a href="https://www.paypal.com/paypalme/kennyiseeyou" target="_blank">
        <PaypalIcon height={54} />
      </a>
      <a target="_blank" href="https://ko-fi.com/N4N45BF3C">
        <KoFiIcon height={34} />
      </a>
      <a href="https://www.buymeacoffee.com/jaywcjlove" target="_blank">
        <BuyMeACoffeeIcon height={32} />
      </a>
      <p>
        <img src="/sponsor-alipay.jpg" width="250" />
        <img src="/sponsor-weixin.jpg" width="250" />
      </p>
      <a href="https://afdian.net/a/jaywcjlove" target="_blank">
        <img src={afdian} height={54} />
      </a>
      <p>{t('sponsor.info2')}</p>
      <h2># {t('sponsor.supporters')}</h2>
      <p>{t('sponsor.thankful')}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 16 }}>
        <div style={{ lineHeight: '1.5rem' }}>
          <div>
            <a href="https://warp.dev/awesome-mac" target="_blank">
              <img src="/sponsor/warp-banner.png" width="250" />
            </a>
          </div>
          <div>
            <a href="https://warp.dev/awesome-mac"><b>Warp, the intelligent terminal for developers!</b></a>
          </div>
          <div style={{ lineHeight: '1rem' }}>
            <a href="https://warp.dev/awesome-mac" target="_blank" style={{ fontSize: 12 }}>Available for MacOS, Linux, & Windows</a>
          </div>
        </div>
        
        <div style={{ lineHeight: '1.5rem' }}>
          <div>
            <a href="https://tuple.app/awesome-mac" target="_blank">
              <img src="/sponsor/tuple.app.png" width="250" />
            </a>
          </div>
          <div>
            <a href="https://tuple.app/awesome-mac" target="_blank"><b>Tuple</b></a>
          </div>
          <div style={{ lineHeight: '1rem' }}>
            <a href="https://tuple.app/awesome-mac" target="_blank" style={{ fontSize: 12 }}>Tuple, the premier screen sharing app for developers on macOS and Windows.</a>
          </div>
        </div>

        <div style={{ lineHeight: '1.5rem' }}>
          <div>
            <a href="https://zenquery.app/?utm_source=github&utm_medium=referral&utm_campaign=awesome-mac" target="_blank">
              <img src="/sponsor/zenquery.png" width="250" />
            </a>
          </div>
          <div>
            <a href="https://zenquery.app/?utm_source=github&utm_medium=referral&utm_campaign=awesome-mac" target="_blank"><b>ZenQuery</b></a>
          </div>
          <div style={{ lineHeight: '1rem' }}>
            <a href="https://zenquery.app/?utm_source=github&utm_medium=referral&utm_campaign=awesome-mac" target="_blank" style={{ fontSize: 12 }}>Instant Q/A on your data files (CSV, JSON, Excel, Parquet)</a>
          </div>
        </div>

        <div style={{ lineHeight: '1.5rem' }}>
          <div>
            <a href="https://pawakalabs.com/products/fakey/" target="_blank">
              <img src="/sponsor/fakey.png" width="250" />
            </a>
          </div>
          <div>
            <a href="https://pawakalabs.com/products/fakey/" target="_blank"><b>Fakey - Manga Translator</b></a>
          </div>
          <div style={{ lineHeight: '1rem' }}>
            <a href="https://pawakalabs.com/products/fakey/" target="_blank" style={{ fontSize: 12 }}>Available for Android, iOS and browser extension</a>
          </div>
        </div>

        <a href="https://www.swifdoo.com/" target="_blank">
          <img src="/sponsor/SwifDooPDF.png" height={45} />
        </a>
      </div>

      <ul>
        <SubTitle>{t('sponsor.alipay')}</SubTitle>
        <li>*宣</li>
        <li>*祥</li>
        <li>*源</li>
        <li>*超</li>
        <li>**遥</li>
        <li>**烨</li>
        <li>**博</li>
        <li>**宣</li>
        <li>**博</li>
        <li>*杰</li>
        <li>**辉</li>
        <li>**龙</li>
        <li>**豪</li>
        <li>**浩</li>
        <li>*岩</li>
        <li>*杰</li>
        <li>**怡</li>
        <li>*源</li>
        <li>*睿</li>
        <li>**南</li>
        <li>*港</li>
        <li>*杰</li>
        <li>**明</li>
        <SubTitle>{t('sponsor.paypal')}</SubTitle>
        <li>Marmitt Fabrizio</li>
        <li>Seaton Eric</li>
        <li><a href="https://x.com/samzong_" target="_blank">Mjano Chin</a></li>
        <li>Lengauer</li>
        <li>Killip Alan</li>
        <li>Wagenknecht Eiko</li>
        <li>Chao Yi</li>
        <SubTitle>{t('sponsor.wechatpay')}</SubTitle>
        <li>陈昌永</li>
        <li>苏awa</li>
        <li>Limichange(cm)</li>
        <li>youdu</li>
        <li>哈哈憨憨</li>
        <li>ZYJ</li>
        <li>方抢鎗</li>
        <li>北登</li>
        <li>Darwish</li>
        <li>小武Alan</li>
        <li>邹银标</li>
        <li>C.</li>
        <li>西瓜爸爸</li>
        <li>懒猫 - 谢谢，新年快乐</li>
        <li>Innei</li>
        <li>梦轩</li>
        <li>鱼先森是个...</li>
        <li>Kevin®</li>
        <SubTitle>{t('sponsor.buymeacoffee')}</SubTitle>
        <li>Caine Brian</li>
        <li>Tyler Eason</li>
        <li>@basketball_gm</li>
        <li>Observed Observer</li>
        <li>VolFervor</li>
      </ul>
    </SponsorWrapper>
  );
};

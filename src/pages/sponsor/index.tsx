import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Wrapper } from '../../comps/Layout';
import { ReactComponent as PaypalIcon} from './paypal-color.svg';
import { ReactComponent as BuyMeACoffeeIcon} from './bmc-full-logo.svg';

const SponsorWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img + img {
    margin-left: 1rem;
  }
  @media (max-width: 590px) {
    img + img {
      margin-left: 0;
    }
  }
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
      <a href="https://www.buymeacoffee.com/jaywcjlove" target="_blank">
        <BuyMeACoffeeIcon height={54} />
      </a>
      <p>
        <img src="/sponsor-alipay.jpg" width="250" />
        <img src="/sponsor-weixin.jpg" width="250" />
      </p>
      <p>{t('sponsor.info2')}</p>
    </SponsorWrapper>
  );
};

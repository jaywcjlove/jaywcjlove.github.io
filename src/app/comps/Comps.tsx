import { type FC, type PropsWithChildren, type AnchorHTMLAttributes, useEffect } from 'react';
import { LinkProps, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useDispatch } from './store';
import { ReactComponent as HeroWaves } from '../../assets/hero-waves.svg';
import { ReactComponent as AppStoreIcon } from '../../assets/appstore.svg';
import { ReactComponent as OpenSourceIcon } from '../../assets/open-source.svg';

const TitleWrapper = styled.h3`
  font-size: 3.75rem;
  line-height: 1;
  margin-top: 1.83rem;
  margin-bottom: 0;
  svg {
    display: block;
  }
  @media (max-width: 590px) {
    font-size: 2.75rem;
  }
`;

export const Title: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch({ title: <TitleWrapper>{children}</TitleWrapper> }), [children]);
  return null;
}

const DetailWrapper = styled.p`
  font-size: 1.875rem;
  line-height: 2.25rem;
  max-width: 43rem;
  @media (max-width: 590px) {
    font-size: 1.675rem;
    line-height: 1.85rem;
  }
`;

export const Detail: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch({ detail: <DetailWrapper>{children}</DetailWrapper> }), [children]);
  return null;
}

const LogoWrapper = styled.div`
  width: 224px;
  height: 224px;
  > img, > svg {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 590px) {
    width: 184px;
    height: 184px;
  }
`;

export const Logo: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch({ logo: <LogoWrapper>{children}</LogoWrapper> }), [children]);
  return null;
}

interface AppStoreProps extends Partial<LinkProps>, AnchorHTMLAttributes<HTMLAnchorElement> {
  keyName?: string;
}

export const AppStore: FC<PropsWithChildren<AppStoreProps>> = (props) => {
  const { children = <AppStoreIcon />, keyName = 'appStore', to, ...reset } = props;
  let Comp: React.ReactNode;
  if (to) {
    Comp = (
      <Link to={to} {...reset}>{children}</Link>
    );
  } else {
    Comp = (
      <a target="_blank" {...reset}>{children}</a>
    );
  }
  const dispatch = useDispatch();
  useEffect(() => dispatch({
    [keyName]: Comp
  }), [props]);
  return null;
}

export const OpenSource: FC<PropsWithChildren<AppStoreProps>> = (props) => {
  return (
    <AppStore {...props} keyName="openSource">
      <OpenSourceIcon />
    </AppStore>
  );
}

interface ProductHuntProps extends Partial<LinkProps>, AnchorHTMLAttributes<HTMLAnchorElement> {
  keyName?: string;
  postId: string;
}

export const ProductHunt: FC<PropsWithChildren<ProductHuntProps>> = ({ postId, ...props}) => {
  return (
    <AppStore {...props} keyName="openSource">
      <img src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${postId}&theme=dark`} height={51} />
    </AppStore>
  );
}

const moveForever = keyframes`
  0% {
      transform: translate(-90px,0%);
  }

  100% {
      transform: translate(85px,0%);
  }
`;

const moveForever2 = keyframes`
  0% {
    transform: translate(-90px,0%);
  }

  100% {
    transform: translate(85px,0%);
  }
`;

const moveForever3 = keyframes`
  0% {
    transform: translate(85px,0%);
  }
  100% {
    transform: translate(-90px,0%);
  }
`;

export const HeroWavesWrapper = styled(HeroWaves)`
  display: block;
  width: 100%;
  height: 60px;
  z-index: 5;
  position: relative;
  margin-top: 2rem;
  @media (max-width: 590px) {
    height: 20px;
  }
  .wave3 use {
    animation: ${moveForever2} 6s linear infinite;
    animation-delay: -2s;
  }
  .wave2 use {
    animation-delay: -2s;
    animation: ${moveForever} 8s linear infinite;
  }
  .wave1 use {
    animation: ${moveForever3} 10s linear infinite;
    animation-delay: -2s;
  }
`;

import { type FC, useEffect, Fragment } from "react";
import { useTranslation } from 'react-i18next';
import { type GiscusProps, type AvailableLanguage } from '@giscus/react';
import { GiscusLayout } from '../../../comps/Giscus';
import { useDispatch, useStore } from './store';

export const Giscus: FC<Partial<GiscusProps>> = (props) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch({
    giscus: (
      <GiscusLanguage {...props} />
    )
  }), [props]);
  return null;
}

export const GiscusContent = () => {
  const { giscus } = useStore();
  return (
    <Fragment>{giscus}</Fragment>
  );
}

const GiscusLanguage: FC<Partial<GiscusProps>> = (props) => {
  const { i18n } = useTranslation();
  let language: AvailableLanguage = 'en';
  switch (i18n.language) {
    case 'cn': language = 'zh-CN'; break;
    case 'en':
    default: language = 'en'; break;
  }
  return (
    <GiscusLayout lang={language} {...props} />
  )
}

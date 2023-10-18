import { type FC } from "react";
import { useTranslation } from 'react-i18next';
import { type AvailableLanguage } from '@giscus/react';
import 'giscus';

export const GiscusLayout: FC<Partial<HTMLElementTagNameMap['giscus-widget']>> = (props) => {
  const { t, i18n } = useTranslation();
  let language: AvailableLanguage = 'en';
  switch (i18n.language) {
    case 'cn': language = 'zh-CN'; break;
    case 'en':
    default: language = 'en'; break;
  }
  return (
    <giscus-widget
      category="Q&A"
      categoryid="DIC_kwDOAW-L-s4CaOuV"
      strict="0"
      reactionsenabled="0"
      emitmetadata="0"
      inputposition="bottom"
      theme="dark"
      // lang="zh-CN"
      lang={language}
      loading="lazy"
      {...props}
      repo="jaywcjlove/jaywcjlove.github.io"
      repoid="MDEwOlJlcG9zaXRvcnkyNDA4NzU0Ng=="
      mapping="pathname"
    >
      <p>{t('loading')}</p>
    </giscus-widget>
  );
}

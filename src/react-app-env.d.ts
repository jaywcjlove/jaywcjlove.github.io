/// <reference types="react-scripts" />

import { type GiscusProps, type AvailableLanguage } from '@giscus/react';

class GiscusWidget extends HTMLElement {
  category?: GiscusProps['category'];
  categoryid?: GiscusProps['categoryId'];
  strict?: GiscusProps['strict'];
  reactionsenabled?: GiscusProps['reactionsEnabled'];
  emitmetadata?: GiscusProps['emitMetadata'];
  inputposition?: GiscusProps['inputPosition'];
  theme?: GiscusProps['theme'];
  lang?: AvailableLanguage;
  loading?: GiscusProps['loading'];
  repo?: GiscusProps['repo'];
  repoid?: GiscusProps['repoId'];
  mapping?: GiscusProps['mapping'];
}

declare global {
  interface HTMLElementTagNameMap {
    'giscus-widget': GiscusWidget;
  }
  interface GlobalEventHandlersEventMap { }
  namespace JSX {
    interface IntrinsicElements {
      'giscus-widget': Partial<GiscusWidget> | {
        style?: Partial<CSSStyleDeclaration> | React.CSSProperties;
        children?: React.ReactNode;
      };
    }
  }
}
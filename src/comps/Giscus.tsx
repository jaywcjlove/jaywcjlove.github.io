import { type FC } from "react";
import GiscusCommit, { type GiscusProps } from '@giscus/react';

export const GiscusLayout: FC<Partial<GiscusProps>> = (props) => {
  return (
    <GiscusCommit
      category="Q&A"
      categoryId="DIC_kwDOAW-L-s4CaOuV"
      strict="0"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="bottom"
      theme="dark"
      // lang="zh-CN"
      lang={props.lang || 'en'}
      loading="lazy"
      {...props}
      repo="jaywcjlove/jaywcjlove.github.io"
      repoId="MDEwOlJlcG9zaXRvcnkyNDA4NzU0Ng=="
      mapping="pathname"
    />
  )
}

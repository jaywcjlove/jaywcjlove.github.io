import { type FC, useEffect, Fragment } from "react";
import { GiscusLayout } from '../../comps/Giscus';
import { useDispatch, useStore } from './store';

export const Giscus: FC<Partial<HTMLElementTagNameMap['giscus-widget']>> = (props) => {
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

const GiscusLanguage: FC<Partial<HTMLElementTagNameMap['giscus-widget']>> = (props) => {
  return <GiscusLayout {...props} />;
}

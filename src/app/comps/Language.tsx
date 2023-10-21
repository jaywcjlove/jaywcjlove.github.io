import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { ReactComponent as TranslateIcon } from '../../assets/translate.svg';
import { ReactComponent as TranslateCNIcon } from '../../assets/translate-cn.svg';

const Wrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  user-select: none;
  font-size: 1.5rem;
`;

export const Button = () => {
  const { i18n } = useTranslation();
  return (
    <Wrapper onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'cn' : 'en')}>
      {i18n.language === 'en' && <TranslateIcon />}
      {i18n.language === 'cn' && <TranslateCNIcon />}
    </Wrapper>
  );
}

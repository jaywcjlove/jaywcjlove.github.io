import { FC, PropsWithChildren, createContext, useContext, useReducer } from 'react';

type InitialState = {
  background?: string;
  logo?: React.ReactNode;
  title?: React.ReactNode;
  detail?: React.ReactNode;
  appStore?: React.ReactNode;
  openSource?: React.ReactNode;
}

const initialState: InitialState = {}
export const Context = createContext(initialState);
export const useStore = () => {
  return useContext(Context);
};

type Dispatch = React.Dispatch<InitialState>;
const DispatchSection = createContext<Dispatch>(() => {});
DispatchSection.displayName = 'APP.Dispatch';

export function useDispatch() {
  return useContext(DispatchSection);
}

const reducer = (state: InitialState, action: InitialState) => ({
  ...state,
  ...action,
});

type SectionProps = {
  initial?: InitialState;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({ children, initial }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, ...initial });
  return (
    <Context.Provider value={state}>
      <DispatchSection.Provider value={dispatch}>
        {children}
      </DispatchSection.Provider>
    </Context.Provider>
  );
};

Section.displayName = 'APP.Section';

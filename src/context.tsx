import React from "react";

interface ContextProps {
  readonly trackingId: number;
}

interface ITownProviderProps {
  trackingId: number;
  children?: any;
}

export const YmContext = React.createContext<ContextProps>({
  trackingId: 0,
});

export const YmProvider: React.FC<ITownProviderProps> = (props) => {
  return (
    <YmContext.Provider value={{ trackingId: props.trackingId }}>
      {props.children}
    </YmContext.Provider>
  );
};
import React from 'react';
import { NextComponentType, NextPage } from 'next';
import { YmProvider } from './context';
import App from 'next/app';

export const withYm = (
  trackingId: number,
  Component: NextComponentType | App | any
) => {
  const Wrapper: NextPage = props => {
    return (
      <YmProvider trackingId={trackingId}>
        <Component {...props} />
      </YmProvider>
    );
  };

  if ('getInitialProps' in Component) {
    Wrapper.getInitialProps = Component.getInitialProps;
  }

  return Wrapper;
};

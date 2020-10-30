import React from 'react';
import { NextComponentType, NextPage } from 'next';
import { YmProvider } from './context';
import App from 'next/app';
import { InitOptions } from './types';
import { YmInitializer } from './init';

export const withYm = (
  trackingId: number,
  options: InitOptions,
  Component: NextComponentType | App | any
) => {
  const Wrapper: NextPage = props => {
    return (
      <YmProvider trackingId={trackingId}>
        <YmInitializer options={options} />
        <Component {...props} />
      </YmProvider>
    );
  };

  if ('getInitialProps' in Component) {
    Wrapper.getInitialProps = Component.getInitialProps;
  }

  return Wrapper;
};

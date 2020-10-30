import { useEffect } from 'react';
import { useYm } from './hook';
import { Router } from 'next/router';
import { InitOptions } from './types';

interface IYmInitializerProps {
  options: InitOptions;
}

export function YmInitializer({ options }: IYmInitializerProps) {
  const { init, hit } = useYm();

  useEffect(() => {
    init(options);
    hit();

    const handler = (url: string) => hit(url);
    Router.events.on('routeChangeComplete', handler);

    return () => Router.events.off('routeChangeComplete', handler);
  }, []);

  return null;
}

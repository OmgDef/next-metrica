import { InitOptions } from './types';
import loadYm from './loader';

const notBrowser =
  typeof window === 'undefined' || typeof document === 'undefined';

export function initYm(trackingId: number, options: InitOptions) {
  if (notBrowser) return;
  if (typeof window.ym === 'undefined') {
    loadYm();
  }

  window.ym(trackingId, 'init', options);
}

export function ym(...args: any[]) {
  if (notBrowser) return;

  if (typeof window.ym === 'undefined') {
    // tslint:disable-next-line: no-console
    return console.warn(
      'initYm must be called first or Yandex.Metrika should be loaded manually'
    );
  }

  return window.ym(...args);
}

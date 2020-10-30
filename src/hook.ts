import { useContext, useRef } from 'react';
import { YmContext } from './context';
import { ym, initYm } from './core';
import { HitOptions, InitOptions } from './types';

export function useYm(trackingId?: number) {
  const context = useContext(YmContext);
  const prevUrl = useRef('');
  const localId = trackingId || context.trackingId;

  const api = {
    trackingId: localId,
    init: (options: InitOptions) => {
      initYm(localId, options);
    },
    hit: (url?: string, options?: HitOptions) => {
      url = url || window.location.pathname + window.location.search;
      options = options || {};

      if (!options.referer && prevUrl.current) {
        options.referer = prevUrl.current;
      }

      ym(localId, 'hit', url, options);
      prevUrl.current = url;
    },
    method: (name: string, ...other: any[]) => {
      ym(localId, name, ...other);
    }
  };

  return api;
}

// @ts-nocheck

import { ChainId } from '@sigismund/sdk-core';
import { AlphaRouter } from '@sigismund/smart-order-router';
import { asSupportedChain } from 'constants/chains';
import { RPC_PROVIDERS } from 'constants/providers';
import {
  routers,
  CLIENT_SIDE_ROUTING_ALLOW_LIST,
} from './clientSideSmartOrderRouter';

export function getRouter(chainId: ChainId): AlphaRouter {
  const router = routers.get(chainId);
  if (router) return router;

  const supportedChainId = asSupportedChain(chainId);
  if (supportedChainId && CLIENT_SIDE_ROUTING_ALLOW_LIST.includes(chainId)) {
    const provider = RPC_PROVIDERS[supportedChainId];
    // const provider = new providers.JsonRpcProvider(
    //   'https://network.ambrosus-test.io'
    // );

    const router = new AlphaRouter({ chainId, provider });
    routers.set(chainId, router);
    return router;
  }

  throw new Error(`Router does not support this chain (chainId: ${chainId}).`);
}

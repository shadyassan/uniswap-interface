import { isNonJestDev } from 'utilities/src/environment';

export interface Config {
  appsflyerApiKey: string;
  appsflyerAppId: string;
  fiatOnRampApiUrl: string;
  moonpayApiKey: string;
  moonpayApiUrl: string;
  moonpayWidgetApiUrl: string;
  uniswapApiBaseUrl: string;
  uniswapApiKey: string;
  uniswapAppUrl: string;
  infuraProjectId: string;
  onesignalAppId: string;
  sentryDsn: string;
  simpleHashApiKey: string;
  simpleHashApiUrl: string;
  statSigProxyUrl: string;
  walletConnectProjectId: string;
  quicknodeBnbRpcUrl: string;
  unitagsApiUrl: string;
  tradingApiKey: string;
  tradingApiUrl: string;
  firebaseAppCheckDebugToken: string;
}

const _config: Config = {
  appsflyerApiKey: '',
  appsflyerAppId: '',
  fiatOnRampApiUrl: '',
  moonpayApiKey: '',
  moonpayApiUrl: '',
  moonpayWidgetApiUrl: '',
  uniswapApiBaseUrl: '',
  uniswapApiKey: '',
  uniswapAppUrl: '',
  infuraProjectId: '',
  onesignalAppId: '',
  sentryDsn: '',
  simpleHashApiKey: '',
  simpleHashApiUrl: '',
  statSigProxyUrl: '',
  walletConnectProjectId: '',
  quicknodeBnbRpcUrl: '',
  unitagsApiUrl: '',
  tradingApiKey: '',
  tradingApiUrl: '',
  firebaseAppCheckDebugToken: '',
};

export const config = Object.freeze(_config);

if (isNonJestDev) {
  // Cannot use logger here, causes error from circular dep
  // eslint-disable-next-line no-console
  console.debug('Using app config:', config);
}

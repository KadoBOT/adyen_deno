import { BinLookup } from "./binLookup.ts";
import { Checkout } from "./checkout.ts";
import { Modifications } from "./modifications.ts";
import { Recurring } from "./recurring.ts";

type APIKeyAuth = { apiKey: string };
type BasicAuth = { username: string; password: string };

export enum Environment {
  TEST = "TEST",
  LIVE = "LIVE",
}
export interface Config {
  environment: Environment.LIVE | Environment.TEST;
  endpoint: string;
  marketPayEndpoint: string;
  checkoutEndpoint: string;
  terminalApiCloudEndpoint: string;
  httpClient?: void;
}
export type ApiRequest = <T, U>(req: T, endpoint: string) => Promise<U>;

export enum ConfigOptions {
  ENDPOINT_TEST = "https://pal-test.adyen.com",
  ENDPOINT_LIVE = "https://pal-live.adyen.com",
  ENDPOINT_LIVE_SUFFIX = "-pal-live.adyenpayments.com",
  MARKETPAY_ENDPOINT_TEST = "https://cal-test.adyen.com/cal/services",
  MARKETPAY_ENDPOINT_LIVE = "https://cal-live.adyen.com/cal/services",
  API_VERSION = "v52",
  RECURRING_API_VERSION = "v49",
  MARKETPAY_ACCOUNT_API_VERSION = "v5",
  MARKETPAY_FUND_API_VERSION = "v5",
  MARKETPAY_HOP_API_VERSION = "v1",
  MARKETPAY_NOTIFICATION_API_VERSION = "v5",
  LIB_NAME = "adyen-deno-api-library",
  LIB_VERSION = "1.0.0",
  CHECKOUT_ENDPOINT_TEST = "https://checkout-test.adyen.com/checkout",
  CHECKOUT_ENDPOINT_LIVE_SUFFIX = "-checkout-live.adyenpayments.com/checkout",
  CHECKOUT_API_VERSION = "v52",
  BIN_LOOKUP_PAL_SUFFIX = "/pal/servlet/BinLookup/",
  BIN_LOOKUP_API_VERSION = "v50",
  TERMINAL_API_ENDPOINT_TEST = "https://terminal-api-test.adyen.com",
  TERMINAL_API_ENDPOINT_LIVE = "https://terminal-api-live.adyen.com",
  ENDPOINT_PROTOCOL = "https://",
}

type ClientProps =
  | {
    apiKey: string;
    environment: Environment.TEST;
    liveEndpointUrlPrefix?: string;
  }
  | {
    apiKey: string;
    environment: Environment.LIVE;
    liveEndpointUrlPrefix: string;
  };

export class Client {
  #config: Config & { apiKey: string };
  public binLookup: BinLookup;
  public checkout: Checkout;
  public modifications: Modifications;
  public recurring: Recurring;

  public constructor(props: ClientProps) {
    const options = this.getOptions(
      props.environment,
      props.liveEndpointUrlPrefix,
    );
    this.#config = { ...options, apiKey: props.apiKey };

    this.binLookup = new BinLookup(this.#config);
    this.checkout = new Checkout(this.#config);
    this.modifications = new Modifications(this.#config);
    this.recurring = new Recurring(this.#config);
  }

  private getOptions(
    environment: Environment,
    liveEndpointUrlPrefix?: string,
  ): Config {
    const isTest = environment === Environment.TEST;
    const config = {
      environment,
      endpoint: isTest
        ? ConfigOptions.ENDPOINT_TEST
        : ConfigOptions.ENDPOINT_LIVE,
      marketPayEndpoint: isTest ? ConfigOptions.MARKETPAY_ENDPOINT_TEST
      : ConfigOptions.MARKETPAY_ENDPOINT_LIVE,
      checkoutEndpoint: isTest ? ConfigOptions.CHECKOUT_ENDPOINT_TEST : "",
      terminalApiCloudEndpoint: isTest
        ? ConfigOptions.TERMINAL_API_ENDPOINT_TEST
        : ConfigOptions.TERMINAL_API_ENDPOINT_LIVE,
    };
    if (!isTest && liveEndpointUrlPrefix) {
      config.endpoint = this.setLiveEndpoint(
        liveEndpointUrlPrefix,
        ConfigOptions.ENDPOINT_LIVE_SUFFIX,
      ) as ConfigOptions;
      config.checkoutEndpoint = this.setLiveEndpoint(
        liveEndpointUrlPrefix,
        ConfigOptions.CHECKOUT_ENDPOINT_LIVE_SUFFIX,
      ) as ConfigOptions;
    }

    return config;
  }

  private setLiveEndpoint(prefix: string, suffix: string): string {
    return `${ConfigOptions.ENDPOINT_PROTOCOL}${prefix}${suffix}`;
  }
}

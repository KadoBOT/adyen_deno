import { ConfigOptions, Config, ApiRequest } from "./client.ts";
import { PaymentRequest } from "./typings/checkout/v52/model/paymentRequest.ts";
import { PaymentResponse } from "./typings/checkout/v52/model/paymentResponse.ts";
import { PaymentMethodsRequest } from "./typings/checkout/v52/model/paymentMethodsRequest.ts";
import { PaymentMethodsResponse } from "./typings/checkout/v52/model/paymentMethodsResponse.ts";
import { PaymentSetupRequest } from "./typings/checkout/v52/model/paymentSetupRequest.ts";
import { PaymentSetupResponse } from "./typings/checkout/v52/model/paymentSetupResponse.ts";
import { PaymentVerificationRequest } from "./typings/checkout/v52/model/paymentVerificationRequest.ts";
import { PaymentVerificationResponse } from "./typings/checkout/v52/model/paymentVerificationResponse.ts";
import { DetailsRequest } from "./typings/checkout/v52/model/detailsRequest.ts";
import { CreatePaymentLinkRequest } from "./typings/checkout/v52/model/createPaymentLinkRequest.ts";
import { CreatePaymentLinkResponse } from "./typings/checkout/v52/model/createPaymentLinkResponse.ts";
import { Service, ServiceConfig } from "./service.ts";
import { CheckoutUtilityRequest } from "./typings/checkoutUtility/v1/model/checkoutUtilityRequest.ts";
import { CheckoutUtilityResponse } from "./typings/checkoutUtility/v1/model/checkoutUtilityResponse.ts";

export class Checkout extends Service {
  #basePath: string;

  constructor(props: ServiceConfig) {
    super(props);
    this.#basePath =
      `${props.checkoutEndpoint}/${ConfigOptions.CHECKOUT_API_VERSION}`;
  }

  public payments(req: PaymentRequest): Promise<PaymentResponse> {
    const endpoint = `${this.#basePath}/payments`;
    return this.createRequest(req, endpoint);
  }

  public paymentMethods(
    req: PaymentMethodsRequest,
  ): Promise<PaymentMethodsResponse> {
    const endpoint = `${this.#basePath}/paymentMethods`;
    return this.createRequest(req, endpoint);
  }

  public paymentsLinks(
    req: CreatePaymentLinkRequest,
  ): Promise<CreatePaymentLinkResponse> {
    const endpoint = `${this.#basePath}/paymentLinks`;
    return this.createRequest(req, endpoint);
  }

  public paymentDetails(req: DetailsRequest): Promise<PaymentResponse> {
    const endpoint = `${this.#basePath}/payments/details`;
    return this.createRequest(req, endpoint);
  }

  public paymentSession(
    req: PaymentSetupRequest,
  ): Promise<PaymentSetupResponse> {
    const endpoint = `${this.#basePath}/paymentSession`;
    return this.createRequest(req, endpoint);
  }

  public paymentResult(
    req: PaymentVerificationRequest,
  ): Promise<PaymentVerificationResponse> {
    const endpoint = `${this.#basePath}/payments/result`;
    return this.createRequest(req, endpoint);
  }

  public originKeys(
    req: CheckoutUtilityRequest,
  ): Promise<CheckoutUtilityResponse> {
    const endpoint = `${this.#basePath}/originKeys`;
    return this.createRequest(req, endpoint);
  }
}

import { Service, ServiceConfig } from "./service.ts";
import { ConfigOptions } from "./client.ts";
import { ModificationRequest } from "./typings/payments/v52/model/modificationRequest.ts";
import { ModificationResult } from "./typings/payments/v52/model/modificationResult.ts";

export class Modifications extends Service {
  #basePath: string;

  constructor(props: ServiceConfig) {
    super(props)
    this.#basePath = `${props.endpoint}/pal/servlet/Payment/${ConfigOptions.API_VERSION}`
  }

  public capture(req: ModificationRequest): Promise<ModificationResult> {
    const endpoint = `${this.#basePath}/capture`
    return this.createRequest(req, endpoint)
  }

  public cancelOrRefund(req: ModificationRequest): Promise<ModificationResult> {
    const endpoint = `${this.#basePath}/cancelOrRefund`
    return this.createRequest(req, endpoint)
  }

  public refund(req: ModificationRequest): Promise<ModificationResult> {
    const endpoint = `${this.#basePath}/refund`
    return this.createRequest(req, endpoint)
  }

  public cancel(req: ModificationRequest): Promise<ModificationResult> {
    const endpoint = `${this.#basePath}/cancel`
    return this.createRequest(req, endpoint)
  }

  public technicalCancel(req: ModificationRequest): Promise<ModificationResult> {
    const endpoint = `${this.#basePath}/technicalCancel`
    return this.createRequest(req, endpoint)
  }

  public adjustAuthorisation(req: ModificationRequest): Promise<ModificationResult> {
    const endpoint = `${this.#basePath}/adjustAuthorisation`
    return this.createRequest(req, endpoint)
  }
}
import { Client, ConfigOptions } from "./client.ts"
import { ThreeDSAvailabilityRequest } from "./typings/binLookup/v50/model/threeDSAvailabilityRequest.ts"
import { ThreeDSAvailabilityResponse } from "./typings/binLookup/v50/model/threeDSAvailabilityResponse.ts"
import { CostEstimateRequest } from "./typings/binLookup/v50/model/costEstimateRequest.ts"
import { CostEstimateResponse } from "./typings/binLookup/v50/model/costEstimateResponse.ts"
import { Service, ServiceConfig } from "./service.ts"

export class BinLookup extends Service {
  #basePath: string;

  constructor(props: ServiceConfig) {
    super(props)
    this.#basePath = `${props.endpoint}${ConfigOptions.BIN_LOOKUP_PAL_SUFFIX}${ConfigOptions.BIN_LOOKUP_API_VERSION}`
  }

  public get3dsAvailability(req: ThreeDSAvailabilityRequest): Promise<ThreeDSAvailabilityResponse> {
    const endpoint = `${this.#basePath}/get3dsAvailability`
    return this.createRequest(req, endpoint);
  }

  public getCostEstimate(req: CostEstimateRequest): Promise<CostEstimateResponse> {
    const endpoint = `${this.#basePath}/getCostEstimate`
    return this.createRequest(req, endpoint);
  }
}
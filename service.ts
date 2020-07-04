import { ApiRequest, Config } from "./client.ts";
import { HttpClient } from "./httpClient.ts";

export type ServiceConfig = Config & { apiKey: string}
export class Service {
  #config: ServiceConfig

  constructor(config: ServiceConfig) {
    this.#config = config;
  }

  public createRequest: ApiRequest = (req, endpoint: string) => {
    const jsonString = JSON.stringify(req)
    const config = { apiKey: this.#config.apiKey }
    return HttpClient.request({ endpoint, body: jsonString, config })
  }
}
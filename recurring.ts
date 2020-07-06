import { Service, ServiceConfig } from "./service.ts";
import { ConfigOptions } from "./client.ts";
import { RecurringDetailsRequest } from "./typings/recurring/v49/model/recurringDetailsRequest.ts";
import { RecurringDetailsResult } from "./typings/recurring/v49/model/recurringDetailsResult.ts";
import { DisableRequest } from "./typings/recurring/v49/model/disableRequest.ts";
import { DisableResult } from "./typings/recurring/v49/model/disableResult.ts";

export class Recurring extends Service {
  #basePath: string;

  constructor(props: ServiceConfig) {
    super(props);
    this.#basePath =
      `${props.endpoint}/pal/servlet/Recurring/${ConfigOptions.RECURRING_API_VERSION}`;
  }

  public listRecurringDetails(
    req: RecurringDetailsRequest,
  ): Promise<RecurringDetailsResult> {
    const endpoint = `${this.#basePath}/listRecurringDetails`;
    return this.createRequest(req, endpoint);
  }

  public disable(
    req: DisableRequest,
  ): Promise<DisableResult> {
    const endpoint = `${this.#basePath}/disable`;
    return this.createRequest(req, endpoint);
  }
}

import {
  assert,
  assertNotEquals,
  assertStrContains,
  assertEquals,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Client, Environment } from "./client.ts";
import { RecurringDetailsRequest } from "./typings/recurring/v49/model/recurringDetailsRequest.ts";
import { Recurring } from "./typings/recurring/v49/model/recurring.ts";
import { createPaymentsCheckoutRequest } from "./checkout_test.ts";
import { ResponseAdditionalDataCommon } from "./typings/checkout/v52/model/responseAdditionalDataCommon.ts";

const { API_KEY, MERCHANT_ACCOUNT } = config();
const { checkout, recurring } = new Client(
  { apiKey: API_KEY, environment: Environment.TEST },
);

const recurringDetailsReq: RecurringDetailsRequest = {
  merchantAccount: MERCHANT_ACCOUNT,
  recurring: { contract: Recurring.ContractEnum.RECURRING },
  shopperReference: "shopperReference",
};

Deno.test("recurring details list", async function (): Promise<void> {
  const result = await recurring.listRecurringDetails(recurringDetailsReq);
  assert(result);
});

Deno.test("disable", async function (): Promise<void> {
  const { additionalData } = await checkout.payments(
    createPaymentsCheckoutRequest(),
  );
  const result = await recurring.disable({
    merchantAccount: MERCHANT_ACCOUNT,
    shopperReference: "shopperReference",
    recurringDetailReference: (additionalData! as ResponseAdditionalDataCommon)
      .recurringRecurringDetailReference,
  });
  assertEquals(result.response, "[all-details-successfully-disabled]");
});

import {
  assert,
  assertNotEquals,
  assertStrContains,
  assertEquals,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Client, Environment } from "./client.ts";
import { PaymentSetupRequest } from "./typings/checkout/v52/model/paymentSetupRequest.ts";

const { API_KEY, MERCHANT_ACCOUNT } = config();
const { checkout } = new Client(
  { apiKey: API_KEY, environment: Environment.TEST },
);

function createAmountObject(currency: string = "EUR", value: number = 1) {
  return { currency, value };
}

const commonPayment = {
  amount: createAmountObject(),
  countryCode: "NL",
  merchantAccount: MERCHANT_ACCOUNT,
  reference: "ORDER_REFERENCE",
};

function createPaymentsCheckoutRequest() {
  const paymentMethodDetails = {
    cvc: "737",
    expiryMonth: "03",
    expiryYear: "2030",
    holderName: "John Smith",
    number: "4111111111111111",
    type: "scheme",
  };

  return {
    ...commonPayment,
    paymentMethod: paymentMethodDetails,
    returnUrl: "https://your-company.com/...",
    enableRecurring: true,
    enableOneClick: true,
    shopperReference: "shopperReference",
    storePaymentMethod: true,
  };
}

Deno.test("payments", async function (): Promise<void> {
  const { pspReference } = await checkout.payments(
    createPaymentsCheckoutRequest(),
  );
  assert(pspReference?.length);
});

Deno.test("payment methods", async function () {
  const { paymentMethods } = await checkout.paymentMethods(
    { merchantAccount: MERCHANT_ACCOUNT },
  );
  assertNotEquals(paymentMethods?.length, 0);
});

Deno.test("payment link", async function () {
  const { reference, url } = await checkout.paymentsLinks(commonPayment);
  assertEquals(reference, "ORDER_REFERENCE");
  assertStrContains(url, "http");
});

Deno.test("payment session", async function () {
  const { paymentSession, recurringDetails } = await checkout.paymentSession({
    ...commonPayment,
    returnUrl: "https://example.com",
    channel: PaymentSetupRequest.ChannelEnum.Web,
    sdkVersion: "3.7.0",
  });
  assert(paymentSession);
  assertNotEquals(recurringDetails?.length, 0);
});

Deno.test("origin keys", async function () {
  const { originKeys } = await checkout.originKeys(
    { originDomains: ["https://example.com"] },
  );
  assertStrContains(
    originKeys?.["https://example.com" as keyof object]!,
    "pub.v2",
  );
});

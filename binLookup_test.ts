import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Client, Environment } from "./client.ts";

const { MERCHANT_ACCOUNT, API_KEY } = config()

const commonPayload = {
  merchantAccount: MERCHANT_ACCOUNT,
  cardNumber: "4111111111111111"
}
const { binLookup } = new Client({ apiKey: API_KEY, environment: Environment.TEST });

Deno.test("get 3ds availability", async function (): Promise<void> {
  const { binDetails } = await binLookup.get3dsAvailability({
    brands: ["visa"],
    ...commonPayload
  })
  assertEquals(binDetails?.issuerCountry, "NL")
})

Deno.test("get cost estimate", async function (): Promise<void> {
  const { resultCode } = await binLookup.getCostEstimate({
    amount: { currency: "EUR", value: 1 },
    ...commonPayload
  })
  assertEquals(resultCode, "Unsupported")
})
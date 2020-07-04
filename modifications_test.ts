import { unimplemented } from "https://deno.land/std/testing/asserts.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Client, Environment } from "./client.ts";

const { API_KEY, MERCHANT_ACCOUNT } = config()
const { modifications } = new Client({ apiKey: API_KEY, environment: Environment.TEST });

Deno.test({
  name: 'capture',
  fn: async function () {
    const stub = await modifications.capture
    unimplemented()
  },
  ignore: true
})

Deno.test({
  name: 'adjustAuthorisation', 
  fn: async function () {
    const stub = await modifications.adjustAuthorisation
    unimplemented()
  }, 
  ignore: true
})

Deno.test({
  name: 'cancel', 
  fn: async function () {
    const stub = await modifications.cancel
    unimplemented()
  }, 
  ignore: true
})

Deno.test({
  name: 'cancelOrRefund', 
  fn: async function () {
    const stub = await modifications.cancelOrRefund
    unimplemented()
  }, 
  ignore: true
})

Deno.test({
  name: 'refund', 
  fn: async function () {
    const stub = await modifications.refund
    unimplemented()
  }, 
  ignore: true
})

Deno.test({
  name: 'technicalCancel',
  fn: async function () {
    const stub = await modifications.technicalCancel
    unimplemented()
  }, 
  ignore: true
})
import { createClient } from "microcms-js-sdk"

// MicroCMSのクライアントを作成
export const microcms = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN ?? "",
  apiKey: process.env.MICROCMS_API_KEY ?? "",
 })
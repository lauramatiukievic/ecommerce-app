import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skPBGRJFw5FCM3IqFIzHALjPQVPSDGSisyMBmxYkETa576dQcmhGKLYpcqSnl6JmC3m1hLRApYRxpGgQcxhrh7ltvnmnU56yojec0Ff5DxCcdybNYND3fQIUFPNFFFETdDlwfOBvNvjEXQKtjXzB9YOQWU24eY66pvQr1JARyBOxJ5AFtL7I",
})

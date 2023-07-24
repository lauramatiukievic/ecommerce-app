import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "sk5y0YJOBaLRzuOCQvNEmtX8O1mqAY5CXnsTQ8KN25rW5ZCZhzK1R5Y8wh3qZvf1F5uCQpssFCY3mykNKB72vKO7S5cGwdIBhfjj49fcVJuTAs0DONJTTW3Qd6cbX6CkMdUInUBOHqCwSyXxKm07SNeLOeZu5O5uQO7H16h4EmQAC7uFOD1p",
})

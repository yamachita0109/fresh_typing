import axiod from "https://deno.land/x/axiod@0.26.1/mod.ts";

const ENDPOINT = "/api/advice";

interface Advice {
  id: number,
  advice: string
}

export async function get(): Promise<Advice> {
  const res = await axiod.get(ENDPOINT);
  return res.data;
}
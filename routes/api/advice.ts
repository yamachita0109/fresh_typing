import { HandlerContext } from "$fresh/server.ts";

interface Advice {
  slip: {
    id: number,
    advice: string
  }
}

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  const res = await fetch("https://api.adviceslip.com/advice");
  if (res.status === 404) {
    throw Error();
  }
  const advice: Advice = await res.json();
  return Response.json(advice.slip);
};
/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.png"
        class={tw`rounded-full h-50`}
        alt="logo"
      />
      <p class={tw`my-6`}>
        Let's Typing.
      </p>
      <Counter start={3} />
    </div>
  );
}

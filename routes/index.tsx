/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md text-center`}>
      <img
        src="/logo.png"
        class={tw`rounded-full h-64 flex items-center m-0 m-auto`}
        alt="logo"
      />
      <p class={tw`my-6`}>
        Let's Typing.
      </p>
      <Counter start={3} />
    </div>
  );
}

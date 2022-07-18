/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function Game() {
  const [active, setActive] = useState(false);
  const [question, setQuestion] = useState('-');
  const [num, setNum] = useState(0);
  const [timer, setTimer] = useState(0);

  const methods = {
    clickStart: () => {
      methods.startTimer()
      setActive(true);
    },

    startTimer: () => {
      const start = Date.now();
      const accum = 0
      setTimer(setInterval(() => { setNum(accum + (Date.now() - start) * 0.001) }, 10))
    },

    stopTimer: () => {
      clearInterval(timer)
    },
  }

  return (
    <div>
      <div class={tw`mb-10`}>
        <button
          class={tw`inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white
            bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0 disabled:bg-gray-300`}
          disabled={ active }
          onClick={ methods.clickStart }
        >
          Start.
        </button>
      <button onClick={ methods.stopTimer }>stop</button>
      </div>

      <div class={tw`mb-10`}>
        <strong class={tw`text-3xl font-thin leading-none text-neutral-600 lg:text-4xl`}>
          { num.toFixed(2) }
        </strong>
      </div>

      <div class={tw`mb-10`}>
        <strong class={tw`text-3xl font-thin leading-none text-neutral-600 lg:text-4xl`}>
          {{ question }}
        </strong>
      </div>
    </div>
  );
}
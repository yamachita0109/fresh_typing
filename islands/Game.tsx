/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { get } from "apis/advice.ts";
import { tw } from "@twind";

export default function Game() {
  const [active, setActive] = useState(false);
  const [question, setQuestion] = useState('-');
  const [num, setNum] = useState(0);
  const [timer, setTimer] = useState(0);

  const [flg, setFlg] = useState(false);

  const methods = {
    clickStart: async () => {
      setActive(true);
      const res = await get();
      setQuestion(res.advice);
      methods.startTimer();
    },

    inputForm: (e: InputEvent) => {
      const value = (e.target as HTMLInputElement).value;
      if (value !== question) return;
      methods.stopTimer();
      setActive(false);
    },

    startTimer: () => {
      const start = Date.now(), accum = 0;
      setTimer(setInterval(() => { setNum(accum + (Date.now() - start) * 0.001) }, 10));
    },

    stopTimer: () => {
      clearInterval(timer);
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
      </div>


      <div class={tw`mb-10`}>
        <strong class={tw`text-3xl font-thin leading-none text-neutral-600 lg:text-4xl`}>
          { num.toFixed(2) }
        </strong>
      </div>

      <div class={tw`mb-10`}>
        <strong class={tw`text-3xl font-thin leading-none text-neutral-600 lg:text-4xl`}>
          { question }
        </strong>
      </div>

      <div class={tw`mb-10`}>
        <input
          type="text"
          class={tw`relative outline-none rounded py-3 px-3 w-full bg-white shadow text-sm
            text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline`}
          placeholder="Let's Typing."
          disabled={ !active }
          onInput={ methods.inputForm }
        />
      </div>
    </div>
  );
}
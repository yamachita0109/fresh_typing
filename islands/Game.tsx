/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

const selectors = {
  startBtn: "prg-start-btn",
}

export default function Game() {
  return (
    <div>
      <button
        id={selectors.startBtn}
        class={tw`inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0 disabled:bg-gray-300`}
        disabled={ false }
        onClick={ methods.clickStart }
      >
        Start.
      </button>
    </div>
  );
}

const props = {
  isStaert: true,
}

const methods = {
  clickStart: (e) => {
    const btn: HTMLButtonElement = document.getElementById(selectors.startBtn)!;
    btn.disabled = true
    alert('start');
  }
}

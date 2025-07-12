import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Mobilidade", "Flexibilidade", "Dinamismo", "Locomoção"];

  return (
    <div className="flex flex-col justify-center items-center mx-auto max-h-screen px-4 text-center">
      <div className="text-neutral-700 dark:text-neutral-300">
        <h1 className="text-3xl font-bold relative inline-block">
          Congregue Com Mais<FlipWords words={words} />
          {/* Barra verde clara animada abaixo do nome */}
        </h1>

        <p className="mt-1 text-sm max-w-xl">
          Encontre igrejas da CCB próximas às estações de metrô em São Paulo
        </p>
      </div>
    </div>
  );
}

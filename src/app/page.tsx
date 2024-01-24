import Image from "next/image";

import letterData from './letterData.json'
import InputForm from "./components/InputForm";

interface LetterData {
  [key: string]: string[];
}

export default function Home() {

  let itemElements = []

  const spaceHolder = "    "

  // loop over 
  for (const lett in letterData) {
    const letter = letterData[lett]

    const itemElement = (
      <div key={lett} className="flex flex-col gap-0">
        {
          letter.map((row: string) => {
            return <p key={lett + row} className="whitespace-pre font-mono p-0 w-fit">{row}</p>
          })
        }
      </div>
    )

    itemElements.push(itemElement)
  }

  return (
    <main className="flex justify-center">
      <div className="bg-gray-100 flex flex-col p-3 w-[400px]">
        <InputForm />
        <div className="bg-slate-800 mt-4 p-4 rounded text-slate-300 text-xs flex flex-row gap-3.5 flex-wrap whitespace-pre">
          {itemElements}
        </div>
      </div>
    </main>
  );
}

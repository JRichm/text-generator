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
    <main className="flex bg-slate-900 justify-center min-h-screen">
      <div className="flex flex-col p-3 w-[800px]">
        <InputForm />
        <label className='text-white'>Available Characters:</label>
        <div className="bg-slate-800 p-4 rounded text-slate-300 text-xs flex flex-row gap-3.5 flex-wrap whitespace-pre">
          {itemElements}
        </div>
      </div>
    </main>
  );
}

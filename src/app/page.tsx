import Image from "next/image";

import letterData from './letterData.json'
import InputForm from "./components/InputForm";
import TextMenu from "./components/TextMenu";

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
            return <p key={lett + row} className="whitespace-pre font-mono p-0 w-fit block">{row}</p>
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
        <TextMenu itemElements={itemElements} />
      </div>
    </main>
  );
}

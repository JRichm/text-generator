"use client"

import { useState } from 'react'
import letterData from '../letterData.json'


interface LetterData {
    [key: string]: string[];
}

export default function InputForm() {

    const [userText, setUserText] = useState("")


    const ConvertText = (text: string) => {

        let color = "black"
        if (text == "") {
            text = "enter text"
            color = "slate-300"
        }

        return Array.from(text).map((char, index) => (
            <div key={index} className={`text-${color}`}>
                {(letterData as LetterData)[`${char}`]?.map((row, rowIndex) => (
                    <p key={rowIndex} className={`font-mono whitespace-pre text-[10px] leading-[10px] tracking-[-2px] block`}>{row}</p>
                ))}
            </div>
        ));
    };


    return (
        <div className="flex flex-col">
            <label className='text-white'>Text:</label>
            <input
                className="outline-none p-1 rounded"
                onChange={(e) => setUserText(e.target.value.toLowerCase())}
            ></input>
            <label className='text-white'>Sample:</label>
            <div className="w-full bg-white rounded min-h-[100px] h-fit p-4 flex flex-row flex-wrap gap-2 transition-all ">
                {ConvertText(userText)}
            </div>
        </div>
    );
}
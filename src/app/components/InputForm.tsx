"use client"

import { useState } from 'react'
import letterData from '../letterData.json'


interface LetterData {
    [key: string]: string[];
}

export default function InputForm() {

    const [userText, setUserText] = useState("")


    const ConvertText = (text: string) => {
        return Array.from(text).map((char, index) => (
            <div key={index}>
                {(letterData as LetterData)[`${char}`]?.map((row, rowIndex) => (
                    <p key={rowIndex} className='font-mono text-xs whitespace-pre'>{row}</p>
                ))}
            </div>
        ));
    };


    return (
        <div className="flex flex-col">
            <label>Text:</label>
            <input
                className="outline-none p-1 rounded"
                onChange={(e) => setUserText(e.target.value.toLowerCase())}
            ></input>
            <label>Sample:</label>
            <div className="w-full bg-white rounded min-h-[100px] h-fit p-1 flex flex-row flex-wrap gap-2 transition-all">
                {ConvertText(userText)}
            </div>
        </div>
    );
}
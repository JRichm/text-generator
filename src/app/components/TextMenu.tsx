"use client"

import React, { ReactNode, useState } from 'react';

interface TextMenuProps {
  itemElements: ReactNode; // Change the type to ReactNode
}


export default function TextMenu({ itemElements }: TextMenuProps) {

    const [activeTab, setTab] = useState('settings')

    return (
      <div>
        <div className="text-white flex flex-row gap-2 underline text-sm mt-3 mb-1">
          <label className="hover:cursor-pointer hover:text-slate-300 no-underline" onClick={e => setTab('settings')}>Text Settings</label>
          <label className="hover:cursor-pointer hover:text-slate-300 no-underline" onClick={e => setTab('chars')}>Available Characters</label>
        </div>

        {
            activeTab == 'chars' &&
                <div className="bg-slate-800 p-4 rounded text-slate-300 text-[10px] leading-[10px] tracking-[-2px] flex flex-row gap-3.5 flex-wrap whitespace-pre">
                    {itemElements}
                </div>
        }

        {
            activeTab == 'settings' &&
                <div className='bg-white rounded p-2 flex flex-row justify-evenly'>
                    <div className='w-full bg-slate-200 p-1 rounded-l'>
                        <span className='flex flex-row justify-between p-1'><p className='text-sm self-end'>font size</p><input className='outline-none rounded hover:bg-white focus:bg-white transition-all duration-200 text-right bg-white/25 p-1 border-b text-sm border-slate-300'></input></span>
                        <span className='flex flex-row justify-between p-1'><p className='text-sm self-end'>tracking</p><input className='outline-none rounded hover:bg-white focus:bg-white transition-all duration-200 text-right bg-white/25 p-1 border-b text-sm border-slate-300'></input></span>
                        <span className='flex flex-row justify-between p-1'><p className='text-sm self-end'>leading</p><input className='outline-none rounded hover:bg-white focus:bg-white transition-all duration-200 text-right bg-white/25 p-1 border-b text-sm border-slate-300'></input></span>
                    </div>
                    <div className='w-full bg-slate-200 p-1 rounded-r'>
                        <span className='flex flex-row justify-between p-1'><p className='text-sm self-end'>font color</p><input className='outline-none rounded hover:bg-white focus:bg-white transition-all duration-200 text-right bg-white/25 p-1 border-b text-sm border-slate-300'></input></span>
                        <span className='flex flex-row justify-between p-1'><p className='text-sm self-end'>background color</p><input className='outline-none rounded hover:bg-white focus:bg-white transition-all duration-200 text-right bg-white/25 p-1 border-b text-sm border-slate-300'></input></span>
                    </div>
                </div>
        }
      </div>
    )
}
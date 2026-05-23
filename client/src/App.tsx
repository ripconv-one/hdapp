import { useState } from 'react'
import Map from './maps/Maps'


function App() {

  return (
    <>
    <div className="bg-slate-800 grid min-h-screen grid grid-rows-[1fr_30px]">
      <div className="grid grid-cols-1 md:grid-cols-[300px_4fr_300px]">
        <div className="overflow-auto">left </div>
        <div className="grid grid-rows-[1fr_200px]">
          <div className="overflow-hidden h-full"><Map /></div>
          <div>center bottom</div>
        </div>
        <div className="overflow-hidden">right</div>
      </div>
      <footer className="bg-black text-white flex items-center justify-center">Footer</footer>
    </div>
    </>
  )
}

export default App

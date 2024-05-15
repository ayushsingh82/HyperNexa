import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";


function Home() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <section className=''>
        <div className='flex flex-row justify-between mt-[100px]'>
          <div>
            <h1 className='font-bold text-3xl'>Exploring Zero-Knowledge Proof System (ZKPSM)</h1>
            <p className='font-semibold text-2xl mt-[20px]'>⚡Importance of privacy and security in decentralized system!</p>
          </div>
          <div>
            <img className="h-[300px] w-[500px] border rounded-tr-3xl rounded-bl-3xl shadow-lg
    shadow-gray-500" src='https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </div>
        </div>

        <div className='border rouded-tl-3xl mt-[100px] mb-[50px]'>

          <div>
            <h1 className='font-medium text-4xl mt-[50px]'>Onboarding developers to build on Chainlink! little change</h1>
            <p className='text-xl mt-[40px] '>Do not worry about gas, just deploy!</p>
          </div>


          <div className='flex flex-row mt-[140px] mb-[40px]'>
            <div className='ml-[15px]'>
              <h1 className='text-3xl font-semibold'>Deploy on multiple chains</h1>
              <p className='text-xl  mt-[30px]'> Deploy your smart contracts under a <b>single address</b> on <b>multiple chains,</b> completely <b>gasless!</b></p>
              <button className='mt-[20px] bg-slate-300 border rounded-xl px-[15px]
     py-[15px] font-semibold text-xl'>
                <a href='/deploy'>Crosschain --&gt;</a></button>
            </div>
            <div>
              <img className="h-[300px] w-[500px] border rounded-tr-3xl rounded-bl-3xl shadow-lg ml-[60px]
      shadow-gray-500" src='https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>
          </div>

          <div className='flex flex-row mt-[140px] mb-[40px]'>
            <div>
              <img className="h-[300px] w-[500px] border rounded-tr-3xl rounded-bl-3xl shadow-lg ml-[55px]
     shadow-gray-500" src='https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>
            <div className='ml-[55px]'>
              <h1 className='text-3xl font-semibold'>Automation</h1>
              <p className='text-xl  mt-[30px]'> ... </p>
              <button className='mt-[20px] bg-slate-300 border rounded-xl px-[15px]
    py-[15px] font-semibold text-xl'>
                <a href='/explorer'>Automation --&gt;</a></button>
            </div>

          </div>

          <div className='flex flex-row mt-[140px] mb-[40px] justify-end gap-10'>
            <div className='ml-[15px]'>
              <h1 className='text-3xl font-semibold'>VRF</h1>
              <p className='text-xl  mt-[30px]'>...</p>
              <button className='mt-[20px] bg-slate-300 border rounded-xl px-[15px]
     py-[15px] font-semibold text-xl'>
                <a href='/deploy'>VRF --&gt;</a></button>
            </div>
            <div>
              <img className="h-[300px] w-[500px] border rounded-tr-3xl rounded-bl-3xl shadow-lg ml-[60px]
      shadow-gray-500" src='https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>
          </div>
        </div>

        <div className=''>
        <Accordion variant="shadow">
        <AccordionItem  className="text-blue-600 font-semibold" key="1" aria-label="Accordion 1" title="Accordion 1">
          {defaultContent}
        </AccordionItem>
        <AccordionItem className="text-blue-600 font-semibold" key="2" aria-label="Accordion 2" title="Accordion 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem className="text-blue-600 font-semibold" key="3" aria-label="Accordion 3" title="Accordion 3">
          {defaultContent}
        </AccordionItem>
      </Accordion>
        </div>

      </section>


    </div>
  )
}

export default Home

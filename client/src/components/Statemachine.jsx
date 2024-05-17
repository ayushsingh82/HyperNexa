import React from 'react'

function Statemachine() {
  return (
    <div>
     
    <div className='mt-[45px]'>
    <img src='statemachine2.png' alt='state machine'/> 
    </div>

    <div class="max-w-6xl mx-auto text-[#333] font-[sans-serif] mt-[100px]">
      <div class="bg-gray-50 max-sm:px-8 px-12 py-8 w-full rounded">
        <h1 class="text-4xl font-extrabold"> Primitives of Cryptography:
        </h1>
        <div class="my-6">
          <p class=" text-sm">Succinct Non-interactive Arguments of Knowledge, or Zero-Knowledge Proofs, are compact and effective methods of confirming the accuracy of computations without disclosing the underlying facts.
          </p>
        </div>
        <button type="button" class="px-6 py-3 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700">Get started now</button>
      </div>
      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="bg-[#333] text-white max-sm:px-8 px-12 py-8 w-full rounded">
          <h2 class="text-2xl font-bold">STARKs</h2>
          <div class="my-6">
            <p class=" text-sm">Expandable Transparent ARguments of Knowledge guarantee long-term security and scalability by providing transparent and post-quantum safe proofs.
            Verifiable Delay Functions (VDFs): Provide fairness in protocols that need time-locked proofs by guaranteeing that a computation takes a certain length of time.
            </p>
          </div>
          <button type="button" class="px-6 py-3 rounded text-sm tracking-wider font-semibold border-none outline-none bg-gray-600 hover:bg-gray-700">Learn more</button>
        </div>
        <div class="bg-gray-50 max-sm:px-8 px-12 py-8 w-full rounded">
          <h2 class="text-2xl font-bold">Transition State</h2>
          <div class="my-6">
            <p class=" text-sm">Deterministic State Transitions: Strict definitions and determinism of state transitions guarantee system consistency and predictability.
            Integration of Smart Contracts: Smart contracts operate safely and openly on the blockchain, enabling automated state transitions depending on specified parameters.
            Atomicity and Consistency: Guarantees atomic state transfers, maintaining system consistency, even when errors occur.</p>
          </div>
          <button type="button" class="px-6 py-3 rounded text-sm tracking-wider font-semibold border-none outline-none bg-gray-200 hover:bg-gray-300">Learn more</button>
        </div>
      </div>
    </div>

    <div className='flex flex-row gap-x-2 mt-[30px]'>
    <div className="bg-gray-800 shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] p-6 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex items-center">
        <h3 className="text-3xl font-bold text-white flex-1">Commitment Schemes</h3>
        <div className="bg-gray-900 w-14 h-14 flex items-center justify-center rounded-full cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 24 24">
            <g className="fill-yellow-400">
              <circle cx="12" cy="12" r="5" />
              <path fill="#f2b108"
                d="M21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM4 13H3a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1-.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1-.75.29zM5.64 19.36a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-.7.24zM12 5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zm0 17a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zM6.34 7.34a1 1 0 0 1-.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.29zm12.02 12.02a1 1 0 0 1-.7-.29l-.66-.71A1 1 0 0 1 18.36 17l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.24z"
                data-original="#f2b108" />
            </g>
          </svg>
        </div>
      </div>
      <p className="text-sm text-white my-8">Secure and private transactions are made possible by cryptographic approaches such as Pedersen commitments, which let one commit to a value while keeping it hidden.
      </p>
      <div className="flex items-center">
        <h3 className="text-lg font-bold text-white flex-1">Learn More</h3>
        <label className="relative cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked />
          <div
            className="w-11 h-3 flex items-center bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-0 peer-checked:after:-left-1 after:bg-gray-300 peer-checked:after:bg-[#007bff] after:border after:border-gray-300 peer-checked:after:border-[#007bff] after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#007bff]">
          </div>
        </label>
      </div>
    </div>
  
    <div className="bg-gray-800 shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] p-6 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex items-center">
        <h3 className="text-3xl font-bold text-white flex-1">Bulletproofs</h3>
        <div className="bg-gray-900 w-14 h-14 flex items-center justify-center rounded-full cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 24 24">
            <g className="fill-yellow-400">
              <circle cx="12" cy="12" r="5" />
              <path fill="#f2b108"
                d="M21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zM4 13H3a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1-.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1-.75.29zM5.64 19.36a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-.7.24zM12 5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zm0 17a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zM6.34 7.34a1 1 0 0 1-.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.29zm12.02 12.02a1 1 0 0 1-.7-.29l-.66-.71A1 1 0 0 1 18.36 17l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.24z"
                data-original="#f2b108" />
            </g>
          </svg>
        </div>
      </div>
      <p className="text-sm text-white my-8">More effective than conventional techniques, bulletproofs improve privacy with smaller proof volumes and faster verification times.
      </p>
      <div className="flex items-center">
        <h3 className="text-lg font-bold text-white flex-1">Learn More</h3>
        <label className="relative cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked />
          <div
            className="w-11 h-3 flex items-center bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-0 peer-checked:after:-left-1 after:bg-gray-300 peer-checked:after:bg-[#007bff] after:border after:border-gray-300 peer-checked:after:border-[#007bff] after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#007bff]">
          </div>
        </label>
      </div>
    </div>
  </div>
  
      
    </div>
  )
}

export default Statemachine

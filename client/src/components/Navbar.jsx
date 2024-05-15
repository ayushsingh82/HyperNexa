import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {

  return (
    <navbar>
      <div className='flex flex-row justify-between '>
        <h1 className='font-bold text-4xl text-blue-600'>HyperNexa⚡</h1>

        <div>
          <ul className='flex flex-row gap-x-10 font-semibold text-xl text-blue-600'>
            <li >
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/state-machine'>StateMachine</a>
            </li>
            <li>
              <a href='/zkpsm'>ZKPSM</a>
            </li>
            <li>
              <a href='/architecture'>Architecture</a>
            </li>
          </ul>
        </div>
        <ConnectButton chainStatus={'none'} showBalance={false} />
      </div>
    </navbar>
  );
}

export default Navbar;
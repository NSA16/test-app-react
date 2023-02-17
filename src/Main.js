import React from 'react';
import './App.css';
import ViewFailed from './ViewFailed';
import ViewSuccess from './ViewSuccess';
import ViewUpcoming from './ViewUpcoming';

function Main() {
  return (
    <div className="Main">
      <div>
        <div>
          <ViewUpcoming/>
        </div>
        <div>
          <ViewSuccess/>
        </div>
        <div>
          <ViewFailed/>
        </div>
        <div className='Footer'>
          End Of List.
        </div>
      </div>
    </div>
  );
}

export default Main;

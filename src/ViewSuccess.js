import React from 'react';
import { useState } from "react";
import spacex from './'



function ViewSuccess() {
  const [isVisible, setVisible] = useState(false);

  const onClick = () => setVisible(!isVisible);

  return (
    <div className='View'>
      <div>
        <h2 className='Title'>
            ViewSuccess
        </h2>
        <div className='buttonSuccess Title'>
          Success
        </div>
      </div>
      {isVisible? <Text /> : null}
      <button onClick={onClick}>{isVisible? 'Hide' : 'View'}</button>
    </div>
  );
}

const Text = () => <div className='Marites'>
  <div className='Tolits'><img src={'spacex.png'} width="100" height="50" /> </div>
  <div className='Tolits TextLang'>Not only was the cargo delivered to orbit 
  successfully after the 2:07 p.m. PDT launch via the first-ever 
  reflown Dragon, but SpaceX brought back home the first-stage rocket booster
   that propelled the whole apparatus outside the atmosphere.
</div>
</div>;

export default ViewSuccess;
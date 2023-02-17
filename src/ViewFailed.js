import React from 'react';
import { useState } from "react";



function ViewFailed() {
  const [isVisible, setVisible] = useState(false);

  const onClick = () => setVisible(!isVisible);

  return (
    <div className='View'>
      <div>
        <h2 className='Title'>
            ViewFailed
        </h2>
        <div className='buttonFailed Title'>
          Failed
        </div>
      </div>
      {isVisible? <Text /> : null}
      <button onClick={onClick}>{isVisible? 'Hide' : 'View'}</button>
    </div>
  );
}

const Text = () => <div className='Marites'>
<div className='Tolits'><img src={'spacex.png'} width="100" height="50" /> </div>
<div className='Tolits TextLang'>Not only was the cargo delivery failed but the boosters
and the main rocket almost did not land properly all the while smoke was coming out 
of them.
</div>
</div>;;

export default ViewFailed;
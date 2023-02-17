import React from 'react';
import { useState } from "react";



function ViewUpcoming() {
  const [isVisible, setVisible] = useState(false);

  const onClick = () => setVisible(!isVisible);

  return (
    <div className='View'>
      <div>
        <h2 className='Title'>
            ViewUpcoming
        </h2>
        <div className='buttonUpcoming Title'>
          Upcoming
        </div>
      </div>
      {isVisible? <Text /> : null}
      <button onClick={onClick}>{isVisible? 'Hide' : 'View'}</button>
    </div>
  );
}

const Text = () => <div className='Marites'>
<div className='Tolits'>No Leaked Image Yet </div>
<div className='Tolits TextLang'>No Marites Yet.</div>
</div>;

export default ViewUpcoming;
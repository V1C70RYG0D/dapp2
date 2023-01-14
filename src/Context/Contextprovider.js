import React, { useState } from 'react'
import DataContext from './datacontext';

const Contextprovider = (props) => {
    
const [follower, setFollower] = useState(0);

  return (
    <div>
      <DataContext.Provider value={{follower,setFollower}}>
        {props.children}
      </DataContext.Provider>
    </div>
  )
}

export default Contextprovider

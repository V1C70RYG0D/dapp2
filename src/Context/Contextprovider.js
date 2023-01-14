import React, { useState } from 'react'
import DataContext from './datacontext';

const Contextprovider = (props) => {

const [follower, setFollower] = useState(0);
const [edit, setEdit] = useState(false);
const [visible, setVisible] = useState(false);

  return (
    <div>
      <DataContext.Provider value={{follower,setFollower,edit,setEdit,visible,setVisible}}>
        {props.children}
      </DataContext.Provider>
    </div>
  )
}

export default Contextprovider

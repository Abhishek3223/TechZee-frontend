import React, { useState, useEffect, useContext } from 'react'
import ClassBox from '../components/classBox';
import { AllContext } from "../Context";

const Fav = () => {
  const [AllClasses, setAllClasses] = useState();
  const [Favlist, setfavList] = useState();

  const { GetRepel } = useContext(AllContext);

  const getFavList = async () => {
    const data = await GetRepel();
    setfavList(data);
  }

  useEffect(() => {
    getFavList();
  }, [])

  return (
    <div>


      {
        (AllClasses) ?
          (AllClasses.map((note) => {
            return <ClassBox key={note._id} data={note} />
          }))
          :
          (<div>
            <h1>nothing found</h1>
          </div>)
      }
    </div>
  )
}

export default Fav
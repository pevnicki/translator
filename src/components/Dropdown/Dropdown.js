import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

import {fetchLanguages, translatePosts} from "../../store/actions/actions";

const DropDown = () =>{

    const dispatch = useDispatch()
    const languages = useSelector((state)=>{
        return state.languages.languages
    })

    useEffect(() => {
        dispatch(fetchLanguages())
    }, []);

    const selectHandler = (event)=>{
        dispatch(translatePosts(event.target.value))
    }

  return (
           <select className="form-select"  aria-label="Select language" onChange={selectHandler} >
               {languages.map(item => (
                   <option
                       key={item.language}
                       value={item.language}
                   >
                       {item.language}
                   </option>
               ))}
           </select>
  );
}

export default DropDown

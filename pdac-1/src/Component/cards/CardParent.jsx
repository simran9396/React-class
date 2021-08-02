import React ,{useState,useEffect}from 'react'
import { Cardchild } from './Cardchild'
import { CardReducer } from '../../Reducer/CardReducer'
import { FormControl } from 'react-bootstrap'

export const CardParent = () => {
    const [emparr,setEmparr]=useState(CardReducer.Data)
    const[searchbox,setSearchbox]= useState("")

    useEffect(()=>{
      const filterArr=emparr.filter(
          (item)=>
        item.cardName.toLowerCase().includes(searchbox.toLowerCase())||
        item.cardAdress.toLowerCase().includes(searchbox.toLowerCase())||
        item.cardDetails.toLowerCase().includes(searchbox.toLowerCase())
        )
        
        if (searchbox==="") setEmparr(CardReducer.Data)
        else setEmparr(filterArr)
      setEmparr(filterArr)
    },[searchbox])

    return (
        <div>
            <FormControl
        type="text"
         onChange={(e)=>setSearchbox(e.target.value)}
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        style={{width:"300px",}}
      />
          
            {emparr.map((items)=>{
                
           return <Cardchild itemCurrent={items}/>
           
            })}
        </div>
    )
}

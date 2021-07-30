import React from 'react'
import { Cardchild } from './Cardchild'
import { CardReducer } from '../../Reducer/CardReducer'
import { FormControl } from 'react-bootstrap'

export const CardParent = () => {
    return (
        <div>
            <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        style={{width:"300px",align:"center"}}
      />
            {CardReducer.Data.map((items)=>{
                
           return <Cardchild itemCurrent={items}/>
           
            })}
        </div>
    )
}

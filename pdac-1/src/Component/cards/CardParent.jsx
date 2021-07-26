import React from 'react'
import { Cardchild } from './Cardchild'
import { CardReducer } from '../../Reducer/CardReducer'

export const CardParent = () => {
    return (
        <div>
            {CardReducer.Data.map((items)=>{
                
           return <Cardchild itemCurrent={items}/>
            })}
        </div>
    )
}

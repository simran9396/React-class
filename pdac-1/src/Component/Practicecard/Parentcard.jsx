import React from 'react'

import { Practicecardreducer   } from '../../Reducer/Practicecardreducer'
import { Childcard } from './Childcard'

export const Parentcard = () => {
    return (
        <div>
            {Practicecardreducer.Metadata.map((item)=>{
                return<Childcard itemtodisplay={item}/>
            })}
        </div>
    )
}

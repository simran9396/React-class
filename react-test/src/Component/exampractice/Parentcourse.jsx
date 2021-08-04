import React from 'react'
import { Childcourse } from './Childcourse'
import { Coursereducer } from './Coursereducer'

export const Parentcourse = () => {
    return (
        <div>
         {Coursereducer.Data.map((item)=>{
             return<Childcourse itemcurrent={item}/>
         })}
           </div>
           )
           }
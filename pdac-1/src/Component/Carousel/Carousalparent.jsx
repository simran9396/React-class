import React from 'react'
import { CarouselReducer } from '../../Reducer/CarouselReducer'
import { Carouselchild } from './Carouselchild'

export const Carousalparent = () => {
    return (
        <div>
            {CarouselReducer.Data.map((item)=>{

           return <Carouselchild CarosData={item}/>
            })}
        </div>
    )
}

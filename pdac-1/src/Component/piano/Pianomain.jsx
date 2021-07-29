import React from 'react'
import { Piano } from './Piano'
import {Card,Row,Col} from 'react-bootstrap'
// import { Audioplayer } from './Audioplayer'

export const Pianomain = () => {
    return (
        <div>
            <Card>
                <Row>
                    <Col md={"4"}>
                        <h2 style={{backgroundColor:"black",color:"white"}}>Low</h2>
                        <Piano/>
                    </Col>
                    <Col md={"4"}>
                        <h2 style={{backgroundColor:"black",color:"white"}}>Medium</h2>
                        <Piano/>
                    </Col>
                    <Col md={"4"}>
                        <h2 style={{backgroundColor:"black",color:"white"}}>High</h2>
                        <Piano/>
                    </Col>
                    {/* <Audioplayer/> */}
                </Row>
            </Card>
        </div>
    )
}

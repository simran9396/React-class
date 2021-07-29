import React from 'react'
import {Button,Row,Col,Card} from 'react-bootstrap'
import "./Audio.css"
export const Audioplayer = () => {
    const audio=new Audio("Images/song.mp3");
    const handleAudioplay=()=>{
        audio.play();
    }
    const handleAudiopause=()=>{
       audio.pause();
    }
    return (
        <div>
            <Card className='player'>   
              <Row>
                <Col></Col>
                <Col>
                  <Button onClick={handleAudioplay} className="Buttons">Play</Button>
               </Col>
               <Col>
                  <Button className="Buttons" onClick={handleAudiopause}>Stop</Button>
                </Col>
            <Col>
            <Button className="Buttons" onMouseDown={handleAudioplay} onMouseUp={handleAudiopause}>
                Piano

            </Button>
            </Col>
            </Row>
            </Card>

        </div>
    )
}

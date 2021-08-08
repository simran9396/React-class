import React from 'react'
import {Card,Row,Col,FormControl,InputGroup} from 'react-bootstrap'
// import {SearchIcon} from '@material-ui/core/Search'


export const Dict = () => {
    return (
        <div>
            <Card>
                <Row>
                    <Col md="6">
                        <Row>
                            <Col>
                            
                            <InputGroup className="mb-3">
                           {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
                             <FormControl placeholder="Search"/>
                             </InputGroup>

                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Card>
        </div>
    )
}

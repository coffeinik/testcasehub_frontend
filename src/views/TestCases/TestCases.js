import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    FormGroup,
    Input,
    Label,
    ListGroup,
    ListGroupItem,
    Row,
} from 'reactstrap';


class TestCases extends Component {
    render() {

        return (
            <div className="animated fadeIn mt-3">
                <Row>
                    <Col xs="12" sm="6">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i><strong>Test Cases</strong>
                            </CardHeader>
                            <CardBody>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem tag="button" type="button" className="list-group-item-action">Регистрация</ListGroupItem>
                                    <ListGroupItem tag="button" type="button" className="list-group-item-action">Регистрация на существующий email</ListGroupItem>
                                    <ListGroupItem tag="button" type="button" className="list-group-item-action">Регистрация на невалидный email</ListGroupItem>
                                </ListGroup>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6">
                        <Card>
                            <CardHeader>
                                <strong>New test case</strong>
                            </CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label htmlFor="company">Name</Label>
                                    <Input type="text" id="company" placeholder="Enter test case name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="vat">Prerequisites</Label>
                                    <Input type="textarea" id="prerequisites" placeholder="" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="vat">Steps</Label>
                                    <Input type="textarea" id="steps" placeholder="" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="street">Expected result</Label>
                                    <Input type="textarea" id="street" placeholder="" />
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" size="sm" color="primary">Submit</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default TestCases;
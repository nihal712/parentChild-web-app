import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <div className="content" >
          <Row>
            <Col md="5">
              <Card>
                <CardHeader>
                  <h5 className="title">Link your Bachua</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="8">
                        <FormGroup>
                          <label>Apne bete ka aadhar link karao</label>
                          <Input
                            placeholder="Enter Bachua ka AC. No."
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Connect Your Bachua
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="7">
              <Card className="card-user">
                <CardBody >
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/emilyz.jpg")}
                      />
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                  </div>
                  <div className="card-description"></div>
                </CardBody>

                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/emilyz.jpg")}
                      />
                      <h5 className="title">Emily</h5>
                    </a>
                  </div>
                  <div className="card-description"></div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;

import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleLogin from "react-google-login";
import "./CustLogin.css";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

export class CustLogin extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoginOpen: true, isSellerOpen: false };
  }
  showLoginBox() {
    this.setState({ isLoginOpen: true, isSellerOpen: false });
  }

  showSeallerBox() {
    this.setState({ isSellerOpen: true, isLoginOpen: false });
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <div class="container">
              <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm">
                  <Row>
                    <Col></Col>
                    <div className="Head">
                      <Col
                        className="controller1"
                        onClick={this.showSeallerBox.bind(this)}
                      >
                        <li className="active">
                          <a>NEW TO VYANRA</a>
                        </li>
                      </Col>
                      <Col
                        className="controller"
                        onClick={this.showLoginBox.bind(this)}
                      >
                        <li className="active">
                          <a>ALREADY REGISTERED</a>
                        </li>
                      </Col>
                    </div>
                    <hr />
                    <div>
                      {this.state.isLoginOpen && <LoginBox />}
                      {this.state.isSellerOpen && <SellerBox />}
                    </div>
                    <Col></Col>
                  </Row>
                </div>
                <div class="col-sm"></div>
              </div>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

class LoginBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <Col>
        <div class="container">
          <Form>
            <div className="center1">Sign in with</div>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="EMAIL ADDRESS*" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="PASSWORD*" />
            </Form.Group>
            <div className="d-grid gap-2 mt-2 mb-2">
              <Button
                variant="dark"
                type="submit"
                onClick={this.submitLogin.bind(this)}
              >
                SIGN IN
              </Button>
              <Form.Label className="center">Forgot password?</Form.Label>
            </div>

            <h5>
              <span>OR</span>
            </h5>

            <div className="d-grid gap-2 mt-2">
              <Button
                className="Prime"
                type="submit"
                width="100%"
                onClick={this.submitLogin.bind(this)}
              >
                <span>
                  <a href="#" className="fa fa-facebook"></a>
                </span>
                sign in With Facebook
              </Button>
            </div>
            <br />
            <div></div>
            <div className="d-grid gap-2 pl-2">
              <Button
                variant="light"
                type="submit"
                width="100%"
                onClick={this.submitLogin.bind(this)}
              >
                <span>
                  <a href="#" className="fa fa-google"></a>
                </span>
                Sign in with Google
              </Button>
              {/* 
              <span className="center4">
                <GoogleLogin buttonText="sign in with Google" />
              </span> */}
            </div>
          </Form>
        </div>
      </Col>
    );
  }
}

class SellerBox extends React.Component {
  render() {
    return <></>;
  }
}

export default CustLogin;

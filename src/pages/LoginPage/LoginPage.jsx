import React, { useState } from "react";
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./LoginPage.css";


const LoginPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
         <div className="bg">
        <div className="containerForm">
          <div className="d-flex justify-content-center">
            <Card style={{ width: "27rem", borderRadius: "50px", backgroundColor: "rgba(15, 66, 62, 0.8)" }}>
              <Card.Body>
                <img className="illustForm text-align-center" src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1669301664/MyNature/IllustForm_rwb3he.svg" />
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3 px-2">
                    <div className="groupFrom">
                      <Form.Group as={Col} md="12" controlId="validationUsername">
                        <Form.Label style={{ color: "white" }}>Email</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control type="email" placeholder="example@mail.com" aria-describedby="inputGroupPrepend" required />
                          <Form.Control.Feedback type="invalid">Pastikan email kamu benar !</Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </div>
                    <div className="groupForm">
                      <Form.Group as={Col} className="groupFrom" md="12" controlId="formPassword">
                        <Form.Label style={{ color: "white" }}>Password</Form.Label>
                        <Form.Control type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" required />
                        <Form.Control.Feedback type="invalid">Pastikan password kamu benar !</Form.Control.Feedback>
                      </Form.Group>
                    </div>
                  </Row>
                  <div className="buttonForm">
                    <button className="buttonSubmit">Masuk</button>
                  </div>

                  <div className="footerForm">
                    <p>
                      Belum punya akun?{" "}
                      <Link id="linkFooter" to="/register">
                        Daftar
                      </Link>
                    </p>
                  </div>
                </Form>
                <div className="text-center"></div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

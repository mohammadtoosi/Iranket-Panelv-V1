import React, { useState } from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import { ConfirmActions } from "../../redux/slice/confirm-mobile";
import auth from "../../routes/auth";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import ConfirmPhoneNumber from "./ConfirmPhoneNumber";

import iranketLogo from "../../assets/ket.jpg";

const SignUp = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const show = useSelector((state) => state.confirm.show);


    const onSubmit = (event) => {
        event.preventDefault();
    };

    const onSubmitForm = async () => {
        // const token = "b3c3c0c41d0223b9ff10c87b8acb65f5";
        setIsLoading(true);
        try {
            setIsLoading(true);
            const requestOptions = {
                method: "POST",

                body: JSON.stringify({
                    mobile: phoneNumber,
                    password: password,
                }),
            };
            const response = await fetch(auth.login, requestOptions);
            const data = await response.json();
            console.log(data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false);
        dispatch(ConfirmActions.toggleConfirmForm());
    };

    return (
        <Container className="d-flex justify-content-center align-items-center position-absolute start-0 end-0 top-0 bottom-0 mt-2">
            <Row className={`col-lg-4 border rounded p-4 ${show === true ? "d-none" : "" }`}>
                <div className="d-flex flex-column justify-content-center align-content-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <img
                            src={iranketLogo}
                            alt="iranket logo"
                            height="150"
                        />
                    </div>
                    <div className="d-flex justify-content-center align-items-center h5">
                        <p className="">ورود با رمز عبور</p>
                    </div>
                    <div className="">
                        <Form onSubmit={onSubmit}>
                        <Form.Group>
                                <Form.Label>شماره همراه</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(event) => {
                                        setPhoneNumber(event.target.value);
                                    }}
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>رمز عبور</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}
                                    required
                                />
                            </Form.Group>
                            <div className="col-lg-12 mt-3">
                                <Button
                                    variant="info w-100 text-white p-2"
                                    onClick={onSubmitForm}
                                    disabled={isLoading === true ? true : false}
                                >
                                    {isLoading === true ? (
                                        <Spinner
                                            className="mx-2"
                                            animation="border"
                                            size="sm"
                                        />
                                    ) : (
                                        ""
                                    )}
                                    تایید
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="mt-4">
                    <a
                        className="text-decoration-none"
                        href="/signin"
                    >
                        <i classNam="bi bi-box-arrow-in-left "></i>
                        ورود با کد یک بار مصرف
                    </a>
                </div>
                <div className="mt-2">
                    <a
                        className="text-decoration-none"
                        href="/reset-password"
                    >
                        <i classNam="bi bi-box-arrow-in-left "></i>
                        فراموشی رمز عبور
                    </a>
                </div>
            </Row>
            <div className={`${show === true ? "" : "d-none"}`}>
                <ConfirmPhoneNumber mobile={phoneNumber} />
            </div>
        </Container>
    );
};

export default SignUp;

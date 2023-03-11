import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ConfirmActions } from "../../redux/slice/confirm-mobile";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import auth from "../../routes/auth";

import iranketLogo from "../../assets/ket.jpg";

const ConfirmPhoneNumber = (props) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState();
    const [otp, setOTP] = useState();
    const onSubmit = (event) => {
        event.preventDefault();
    };

    const onSubmitForm = async () => {
        setIsLoading(true);
        //const token = "b3c3c0c41d0223b9ff10c87b8acb65f5";
        try {
            setIsLoading(true);
            const requestOptions = {
                method: "POST",

                body: JSON.stringify({
                    mobile: props.mobile,
                    code: otp,
                }),
            };
            const response = await fetch(auth.verify, requestOptions);
            const data = await response.json();
            console.log(data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false);
        console.log(otp);
    };

    const backClickHandler = () => {
        dispatch(ConfirmActions.toggleConfirmForm());
    }

    return (
        <Container className="d-flex justify-content-center align-items-center position-absolute start-0 end-0 top-0 bottom-0 mt-2">
            <Row className="col-lg-4 border rounded p-4">
                <div className="d-flex flex-column justify-content-center align-content-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <img
                            src={iranketLogo}
                            alt="iranket logo"
                            height="150"
                        />
                    </div>
                    <div className="d-flex justify-content-center align-items-center h5">
                        <p className="">تایید شماره موبایل</p>
                    </div>
                    <div className="">
                        <Form onSubmit={onSubmit}>
                            <Form.Group>
                                <Form.Label>کد 4 رقمی</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={otp}
                                    onChange={(event) => {
                                        setOTP(`${event.target.value}`);
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
                                    تایید شماره موبایل
                                </Button>
                            </div>
                            <div className="col-lg-12 mt-2">
                                <Button
                                    variant="info w-100 text-white p-2"
                                    onClick={backClickHandler}
                                >
                                    بازگشت
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="mt-4">
                    <a
                        className="text-decoration-none"
                        href="/login-with-password"
                    >
                        <i className="bi bi-box-arrow-in-left "></i>
                        ورود با رمز عبور
                    </a>
                </div>
            </Row>
        </Container>
    );
};

export default ConfirmPhoneNumber;

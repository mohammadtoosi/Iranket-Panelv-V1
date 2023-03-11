import React, { useState, useReducer } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ConfirmActions } from "../../redux/slice/confirm-mobile";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import ConfirmPhoneNumber from "./ConfirmPhoneNumber";

import auth from "../../routes/auth";

import iranketLogo from "../../assets/ket.jpg";

const initialRegisterValues = {
    firstName: "",
    lastName: "",
    gender: 1,
    phoneNumber: "",
    password: "",
    reenteredPassword: "",
};

const registerReducer = (state, action) => {
    switch (action.type) {
        case "first_name":
            return {
                ...state,
                firstName: action.value,
            };
        case "last_name":
            return {
                ...state,
                lastName: action.value,
            };
        case "gender":
            return {
                ...state,
                gender: action.value,
            };
        case "phone_number":
            return {
                ...state,
                phoneNumber: action.value,
            };
        case "password":
            return {
                ...state,
                password: action.value,
            };
        case "reentered_password":
            return {
                ...state,
                reenteredPassword: action.value,
            };
        default:
            break;
    }
};

const SignUp = () => {
    const rDispatch = useDispatch();
    const showOtpForm = useSelector((state) => state.confirm.show);
    const [isLoading, setIsLoading] = useState();
    const [state, dispatch] = useReducer(
        registerReducer,
        initialRegisterValues
    );

    const onInputChange = (type, value) => {
        dispatch({
            type: type,
            value: value,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
    };

    const onSubmitForm = async () => {
        const nInitialValue = {
            firstName: state.firstName,
            lastName: state.lastName,
            phoneNumber: state.phoneNumber,
            password: state.password,
            gender: state.gender,
        };

        const token = "b3c3c0c41d0223b9ff10c87b8acb65f5";

        try {
            setIsLoading(true);
            const requestOptions = {
                method: "POST",
                body: JSON.stringify({
                    firstName: nInitialValue.firstName,
                    lastName: nInitialValue.lastName,
                    gender: nInitialValue.gender,
                    mobile: nInitialValue.phoneNumber,
                    password: nInitialValue.password,
                }),
            };
            const response = await fetch(
                "https://app.iranket.com/api-suppliers/register",
                requestOptions
            );
            const data = await response.json();
            console.log(data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false);
        rDispatch(ConfirmActions.toggleConfirmForm());
    };

    return (
        <Container className="d-flex justify-content-center align-items-center position-absolute start-0 end-0 top-0 bottom-0">
            <Row className={`col-lg-4 border rounded p-4 ${showOtpForm === true ? "d-none" : ""}`}>
                <div className="d-flex flex-column justify-content-center align-content-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <img
                            src={iranketLogo}
                            alt="iranket logo"
                            height="150"
                        />
                    </div>
                    <div className="d-flex justify-content-center align-items-center h5">
                        <p className="">ثبت نام</p>
                    </div>
                    <div className="">
                        <Form onSubmit={onSubmit}>
                            <Form.Group>
                                <Form.Label>نام</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.firstName}
                                    onChange={(event) => {
                                        onInputChange(
                                            "first_name",
                                            event.target.value
                                        );
                                    }}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label>نام خانوادگی</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.lastName}
                                    onChange={(event) => {
                                        onInputChange(
                                            "last_name",
                                            event.target.value
                                        );
                                    }}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label>جنسیت</Form.Label>
                                <Form.Select
                                    value={state.gender}
                                    onChange={(event) => {
                                        onInputChange(
                                            "gender",
                                            event.target.value
                                        );
                                    }}
                                    required
                                >
                                    <option value="1">مرد</option>
                                    <option value="2">زن</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label>شماره موبایل</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.phoneNumber}
                                    onChange={(event) => {
                                        onInputChange(
                                            "phone_number",
                                            event.target.value
                                        );
                                    }}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label>رمز عبور</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={state.password}
                                    onChange={(event) => {
                                        onInputChange(
                                            "password",
                                            event.target.value
                                        );
                                    }}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label>تکرار رمز عبور</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={state.reenteredPassword}
                                    onChange={(event) => {
                                        onInputChange(
                                            "reentered_password",
                                            event.target.value
                                        );
                                    }}
                                    required
                                />
                                <Form.Text className="text-danger">
                                    {state.reenteredPassword !== state.password
                                        ? "لطفا رمز عبور خود را دوباره وارد کنید!"
                                        : ""}
                                </Form.Text>
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
                                    ثبت نام
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Row>
            <div className={`${showOtpForm === true ? "" : "d-none"}`}>
                <ConfirmPhoneNumber mobile={initialRegisterValues.phoneNumber} />
            </div>
        </Container>
    );
};

export default SignUp;

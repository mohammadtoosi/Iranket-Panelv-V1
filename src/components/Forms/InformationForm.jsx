import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Alert from "react-bootstrap/Alert";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const InformationForm = () => {
    return (
        <div className="">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>توضیحات برای ناظر</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                    <Form.Text className="text-muted">
                        اگر توضیحاتی برای تایید کننده و ناظر محصول دارید در این
                        قسمت درج کنید.
                    </Form.Text>
                </Form.Group>
            </Form>
        </div>
    );
};

export default InformationForm;

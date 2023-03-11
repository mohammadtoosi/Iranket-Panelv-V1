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

const BaseProductInformationForm = () => {
    const editor = useRef(null);
    const [content, setContent] = useState("");
    return (
        <div className="">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>عنوان محصول</Form.Label>
                    <Form.Control type="text" max={100} />
                    <Form.Text className="text-muted">
                        حداکثر ۱۰۰ کاراکتر کنید.
                    </Form.Text>
                </Form.Group>
                <div className="">
                    <Form>
                        <Form.Label>توضیحات کوتاه مشهد</Form.Label>
                        <JoditEditor
                            ref={editor}
                            value={content}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={(newContent) => {}}
                        />
                        <Form.Text className="text-muted">
                            توضیحات کوتاه محصول
                        </Form.Text>
                    </Form>
                </div>
                <div className="mt-3">
                    <Form>
                        <Form.Label>توضیحات کامل محصول</Form.Label>
                        <JoditEditor
                            ref={editor}
                            value={content}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={(newContent) => {}}
                        />
                        <Form.Text className="text-muted">
                            توضیحات کامل محصول
                        </Form.Text>
                    </Form>
                </div>
            </Form>
        </div>
    );
};

export default BaseProductInformationForm;

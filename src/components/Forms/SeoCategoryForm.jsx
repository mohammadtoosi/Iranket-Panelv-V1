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

const SeoCategoryForm = () => {
    return (
        <div className="">
            <Form>
                <div className="mt-2">
                    <Form.Label>دسته بندی پیشفرض محصول</Form.Label>
                    <Form.Select>
                        <option value="میگو جنوب">میگو جنوب</option>
                        <option value="ادویه جات و چاشنی ها">
                            ادویه جات و چاشنی ها
                        </option>
                        <option value="ماهی جنوب">ماهی جنوب</option>
                    </Form.Select>
                    <Form.Text className="text-muted">
                        دسته بندی پیش‌فرض، دسته بندی اصلی برای محصول شماست و به
                        طور پیش‎فرض در آن نمایش داده خواهد شد.
                    </Form.Text>
                </div>
                <div className="mt-3">
                    <Form.Label>عنوان متا</Form.Label>
                    <InputGroup>
                        <InputGroup.Text id="id70">70</InputGroup.Text>
                        <FormControl
                            type="text"
                            max={70}
                            aria-describedby="id70"
                        />
                    </InputGroup>
                    <Form.Text className="text-muted">
                        عنوان عمومی برای صفحه‎ی محصول و موتورهای جستجو. برای
                        استفاده از نام محصول، این گزینه را خالی رها کنید
                    </Form.Text>
                </div>
                <div className="mt-3">
                    <Form.Label>توضیحات متا</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>170</InputGroup.Text>
                        <FormControl type="text" max={170} />
                    </InputGroup>
                    <Form.Text className="text-muted">
                        این توضیح در نتایج موتور‌های جستجو نمایان خواهد شد. شما
                        به یک جمله که کوتاه تر از 145 کارکتر باشد، نیاز دارید
                        (با احتساب فاصله‎ها).
                    </Form.Text>
                </div>
                <div className="mt-3">
                    <Form.Label>URL اشنا</Form.Label>
                    <InputGroup>
                        <FormControl type="text" />
                        <InputGroup.Text>
                            <Button variant="success">
                                تولید خودکار نام از محصول
                            </Button>
                        </InputGroup.Text>
                    </InputGroup>
                    <Form.Text className="text-muted">
                        منظور نشانی اینترنتی محصول است که قابل خواندن برای انسان
                        میباشد. بهتر است این نشانی کوتاه و قابل مفهوم باشد.
                    </Form.Text>
                </div>
            </Form>
        </div>
    );
};

export default SeoCategoryForm;

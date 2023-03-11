import React, { useState, useRef, useMemo } from "react";

import Layout from "../components/Layouts/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Alert from "react-bootstrap/Alert";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import InformationForm from "../components/Forms/InformationForm";
import BaseProductInformationForm from "../components/Forms/BaseProductInformationForm";
import AmountsForm from "../components/Forms/AmountsForm";
import SeoCategoryForm from "../components/Forms/SeoCategoryForm";
import UploadPicturesForm from "../components/Forms/UploadPicturesForm";

const Products = () => {
    const [show, setShow] = useState(true);
    const editor = useRef(null);
    const [content, setContent] = useState("");

    return (
        <>
            <Layout />
            <Container>
                <Row className="mt-3" style={{ marginRight: "200px" }}>
                    {show && (
                        <Alert
                            variant="warning"
                            onClose={() => setShow(false)}
                            dismissible
                        >
                            برای دریافت آخرین اطلاع رسانی ها لطفا شماره همراه
                            خود را در بخش تنظیمات (ویرایش اطلاعات) وارد کنید.
                        </Alert>
                    )}
                </Row>
                <Row style={{ marginRight: "200px" }}>
                    <Col md={12} sm={12} xs={12}>
                        <Tabs defaultActiveKey="productList" id="unc-tab">
                            <Tab eventKey="productList" title="لیست محصولات">
                                <Container>
                                    <div className="mt-3">
                                        <Alert variant="info">
                                            <i class="bi bi-exclamation-square-fill mx-2"></i>
                                            همکاران گرامی توجه داشته باشید که
                                            تغییرات بخش «ویرایش محصول» با تایید
                                            ناظر اعمال میشود و ممکن است زمانبر
                                            باشد، اما «مدیریت موجودی» فوری و
                                            مستقیما توسط شما در فروشگاه اعمال
                                            میگردد.
                                        </Alert>
                                    </div>
                                    <Alert variant="info">
                                        رکوردی جهت نمایش وجود ندارد! در فروشگاه
                                        اعمال میگردد.
                                    </Alert>
                                </Container>
                            </Tab>
                            <Tab eventKey="noteList" title="فهرست پیشنویس ها">
                                <Container>
                                    <div className="mt-3">
                                        <Alert variant="info">
                                            رکوردی جهت نمایش وجود ندارد! در
                                            فروشگاه اعمال میگردد.
                                        </Alert>
                                    </div>
                                </Container>
                            </Tab>
                            <Tab
                                eventKey="addNewProduct"
                                title="افزودن محصول جدید"
                            >
                                <Container>
                                    <div className="mt-3">
                                        <Alert variant="info">
                                            در صورت ذخیره و تایید این محصول توسط
                                            ناظر ، محصول جدیدی ایجاد خواهد شد.
                                        </Alert>
                                    </div>
                                    <div className="">
                                        <Tab.Container
                                            id="left-tabs-example"
                                            defaultActiveKey="first"
                                        >
                                            <Row>
                                                <Col sm={3}>
                                                    <Nav
                                                        variant="pills"
                                                        className="flex-column"
                                                    >
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="first">
                                                                راهنما و توضیحات
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="second">
                                                                اطلاعات پایه
                                                                محصول
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="third">
                                                                دسته بندی و سئو
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="forth">
                                                                تصاویر
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="fiveth">
                                                                مقادیر
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="sixth">
                                                                ترکیب و موجودی
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="seventh">
                                                                ویژگی ها
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                </Col>
                                                <Col sm={9}>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="first">
                                                            <InformationForm />
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="second">
                                                            <BaseProductInformationForm />
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="third">
                                                            <SeoCategoryForm />
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="forth">
                                                            <UploadPicturesForm />
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="fiveth">
                                                            <AmountsForm />
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="sixth"></Tab.Pane>
                                                        <Tab.Pane eventKey="seventh"></Tab.Pane>
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Tab.Container>
                                    </div>
                                </Container>
                                <div className="d-flex justify-content-end align-items-end mt-3">
                                    <div className="mx-3">
                                        <Button variant="danger">
                                            <i class="bi bi-send-fill mx-2"></i>
                                            ارسال برای انتشار
                                        </Button>
                                    </div>
                                    <div className="">
                                        <Button variant="info">
                                            <i class="bi bi-bag-plus-fill mx-2"></i>
                                            ذخیره پیشنویس
                                        </Button>
                                    </div>
                                </div>
                                <br />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Products;

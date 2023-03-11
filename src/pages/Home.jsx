import React, { useState } from "react";

import Layout from "../components/Layouts/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import InfoCard from "../components/Card/InfoCard";
import { Line } from "react-chartjs-2";

const Home = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            <Layout />
            <Container>
                <Row style={{ marginRight: "200px" }} className="mt-3">
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
                <Row style={{ marginRight: "200px" }} className="mt-2">
                    <Col md={3} sm={12} xs={12}>
                        <InfoCard
                            icon={
                                <i
                                    class="bi bi-cart-plus-fill h1"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.6)",
                                    }}
                                ></i>
                            }
                            title="0 عدد"
                            description="تعداد سفارشات"
                            bg="#f86c6b"
                        />
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                        <InfoCard
                            icon={
                                <i
                                    class="bi bi-cart-fill h1"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.6)",
                                    }}
                                ></i>
                            }
                            title="0 عدد"
                            description="سفارشات تایید شده"
                            bg="#20a8d8"
                        />
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                        <InfoCard
                            icon={
                                <i
                                    class="bi bi-currency-dollar h1"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.6)",
                                    }}
                                ></i>
                            }
                            title="0 تومان"
                            description="درامد کل"
                            bg="#4dbd74"
                        />
                    </Col>
                    <Col md={3} sm={12} xs={12}>
                        <InfoCard
                            icon={
                                <i
                                    class="bi bi-cash h1"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.6)",
                                    }}
                                ></i>
                            }
                            title="0 تومان"
                            description="مبلغ باقی مانده"
                            bg="#63c2de"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;

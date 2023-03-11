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

const AmountsForm = () => {
    return (
        <Form>
            <div>
                <Form.Label>کد مرجع</Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted">
                    کد مرجع داخلی برای این محصول. کاراکترهای ویژه مجاز: .-_#
                </Form.Text>
            </div>
            <div className="mt-2">
                <Form.Label>بارکد EAN-13 یا JAN</Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted">
                    این نوع از کد محصول مخصوص اروپا و ژاپن است، اما به طور
                    گسترده به صورت بین المللی، استفاده می‌شود. این یک کد عالی
                    UPC است: همه‌ی محصولات که با یک EAN علامت گذاری شده‌اند، در
                    امریکای شمالی مورد قبول خواهند بود.
                </Form.Text>
            </div>
            <div className="mt-2">
                <Form.Label>بارکد UPC</Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted">
                    این نوع از کد محصول به صورت گسترده در ایالات متحده آمریکا،
                    کانادا، انگلستان، استرالیا، نیوزلند و در دیگر کشورها،
                    استفاده می‎شود.
                </Form.Text>
            </div>
            <div className="mt-2">
                <Form.Label>شابک</Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted">
                    شماره‌‌ی استاندارد بین‌المللی کتاب (ISBN) برای شناسایی
                    کتاب‌ها و نسخه‌های مختلف آن‌ها در سطح بین‌المللی استفاده
                    می‌شود.
                </Form.Text>
            </div>
            <hr />
            <div className="mt-1">
                <Form.Label>عرض بسته</Form.Label>
                <InputGroup>
                    <InputGroup.Text>سانتی متر</InputGroup.Text>
                    <FormControl type="text" />
                </InputGroup>
            </div>
            <div className="mt-2">
                <Form.Label>ارتفاع بسته</Form.Label>
                <InputGroup>
                    <InputGroup.Text>سانتی متر</InputGroup.Text>
                    <FormControl type="text" />
                </InputGroup>
            </div>
            <div className="mt-2">
                <Form.Label>عمق بسته</Form.Label>
                <InputGroup>
                    <InputGroup.Text>سانتی متر</InputGroup.Text>
                    <FormControl type="text" />
                </InputGroup>
            </div>
            <div className="mt-2">
                <Form.Label>وزن بسته</Form.Label>
                <InputGroup>
                    <InputGroup.Text>گرم</InputGroup.Text>
                    <FormControl type="text" />
                </InputGroup>
                <Form.Text className="text-muted">
                    مشخصات بسته محصول مانند عرض ، ارتفاع ، عمق و وزن بسته را با
                    دقت وارد کنید. این اطلاعات به منظور ارسال به مشتری مورد
                    استفاده قرار میگیرد.
                </Form.Text>
            </div>
        </Form>
    );
};

export default AmountsForm;

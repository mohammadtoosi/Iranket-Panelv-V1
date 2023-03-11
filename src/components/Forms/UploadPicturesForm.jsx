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

const UploadPicturesForm = () => {
    return (
        <div>
            <Alert variant="info">
                <i class="bi bi-card-image mx-2"></i>
                ابتدا این پیشنویس را ذخیره کنید تا امکان بارگذاری و ویرایش
                تصاویر را داشته باشید!
            </Alert>
        </div>
    );
};

export default UploadPicturesForm;

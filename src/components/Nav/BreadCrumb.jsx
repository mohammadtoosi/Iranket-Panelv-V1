import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const BreadCrumb = (props) => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href={props.firstHref}>
                {props.first}
            </Breadcrumb.Item>
            <Breadcrumb.Item href={props.secondHref}>
                {props.second}
            </Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default BreadCrumb;

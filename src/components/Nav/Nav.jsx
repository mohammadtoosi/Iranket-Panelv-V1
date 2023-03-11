import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    داشبورد
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item position-absolute start-0 top-0 mx-3 mt-2">
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown-basic"
                                >
                                    <span className="mx-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            fill="currentColor"
                                            className="bi bi-person-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                    </span>
                                    محمد امین صالحی
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{ textAlign: "right" }}>
                                    <Dropdown.Item
                                        href="#/action-1"
                                        style={{
                                            borderBottom: "1px solid gray",
                                        }}
                                    >
                                        <div className="d-flex">
                                            <div className="">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-person-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                            </div>
                                            <div className="mx-3">
                                                اطلاعات کاربری
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        <div className="d-flex">
                                            <div className="">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-power"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M7.5 1v7h1V1h-1z" />
                                                    <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
                                                </svg>
                                            </div>
                                            <div className="mx-3">خروج</div>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;

import React from "react";

const Sidebar = () => {
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark position-fixed end-0 h-100 col-lg-2"
        >
            <p
                className="d-flex align-items-center mb-2 mb-md-0 text-white text-decoration-none"
            >
                <span className="fs-5">مدیریت</span>
            </p>
            <hr />
            <ul className="nav nav-pills flex-column" style={{marginRight: "-50px"}}>
                <li className="nav-item">
                    <a href="/" className="nav-link active" aria-current="page">
                        <i className="bi bi-house-fill mx-2"></i>
                        داشبورد
                    </a>
                </li>
                <li>
                    <a href="/products" className="nav-link text-white">
                        <i className="bi bi-plus-circle mx-2"></i>
                        محصولات
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <i className="bi bi-list-ul mx-2"></i>
                        مدیریت موجودی
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <i className="bi bi-cart-fill mx-2"></i>
                        سفارش ها
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <i className="bi bi-currency-dollar mx-2"></i>
                        امور مالی
                    </a>
                </li>
                <hr />
                <li>
                    <a href="#" className="nav-link text-white">
                        <i className="bi bi-gear-fill mx-2"></i> سفارش ها
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <i className="bi bi-power mx-2"></i>
                        خروج
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

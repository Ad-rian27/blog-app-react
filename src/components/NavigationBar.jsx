import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavigationBar = () => {

    const navigate = useNavigate();

    const LogOut = () => {
        sessionStorage.clear();
        navigate("/");
    };

    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-dark shadow-sm py-3"
                style={{ backgroundColor: "#8B5E3C" }}
            >
                <div className="container">

                    <Link className="navbar-brand fw-bold fs-4" to="/">
                        Blog App
                    </Link>

                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center">

                            <li className="nav-item mx-2">
                                <Link
                                    className="btn btn-outline-light rounded-pill px-4 fw-semibold"
                                    to="/"
                                >
                                    SignUp
                                </Link>
                            </li>

                            <li className="nav-item mx-2 mt-2 mt-lg-0">
                                <Link
                                    className="btn btn-light rounded-pill px-4 fw-semibold"
                                    style={{ color: "#8B5E3C" }}
                                    to="/signin"
                                >
                                    SignIn
                                </Link>
                            </li>

                            <li className="nav-item mx-2 mt-2 mt-lg-0">
                                <Link
                                    className="btn btn-light rounded-pill px-4 fw-semibold"
                                    style={{ color: "#8B5E3C" }}
                                    to="/create"
                                >
                                    Create Post
                                </Link>
                            </li>

                            <li className="nav-item mx-2 mt-2 mt-lg-0">
                                <Link
                                    className="btn btn-light rounded-pill px-4 fw-semibold"
                                    style={{ color: "#8B5E3C" }}
                                    to="/viewall"
                                >
                                    View All
                                </Link>
                            </li>

                            <li className="nav-item mx-2 mt-2 mt-lg-0">
                                <Link
                                    className="btn btn-light rounded-pill px-4 fw-semibold"
                                    style={{ color: "#8B5E3C" }}
                                    to="/viewmyposts"
                                >
                                    View My Posts
                                </Link>
                            </li>

                            <li className="nav-item mx-2 mt-2 mt-lg-0">
                                <button
                                    onClick={LogOut}
                                    className="btn btn-success rounded-pill px-4 fw-semibold"
                                >
                                    Logout
                                </button>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default NavigationBar;
import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <Container>
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <img
                            height="100px"
                            src="https://i.ibb.co/JkNFQKC/1.png"
                            alt=""
                        />
                    </div>

                    <div className=" text-light mt-5 align-items-center justify-content-center">
                        <h4>Privacy Policy</h4>
                        <h4>Service</h4>
                        <h4>Blog</h4>
                    </div>
                    <div className="d-flex align-align-items-end justify-content-center my-5 fs-2 ">
                        <BsFacebook className="text-warning mx-2"></BsFacebook>
                        <FaInstagramSquare className="text-warning mx-2"></FaInstagramSquare>
                        <BsLinkedin className="text-warning mx-2"></BsLinkedin>
                        <SiTwitter className="text-warning mx-2"></SiTwitter>
                    </div>
                </div>
                <div className="text-center">
                    <p>
                        &copy; {new Date().getFullYear()} MARKVAST. All rights
                        reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;

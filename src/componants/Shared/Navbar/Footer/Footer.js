import React from 'react';
import logo from '../../../Assets/logo.png';

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img src={logo} alt="Logo" />
                    <p>Task List Services company</p>
                </div>
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">To-list</a>
                    <a class="link link-hover">Calnder</a>
                    <a class="link link-hover">Completed Task</a>
                    <a class="link link-hover">Home</a>
                </div>
                <div>
                    <span class="footer-title">Do-Task</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Services</a>
                </div>                
            </footer>
        </div>
    );
};

export default Footer;
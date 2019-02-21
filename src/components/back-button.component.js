import React, { Component } from 'react';
import './back-button.component.css';
import { Link } from 'react-router-dom';
export class BackButtonComponent extends Component {
    render() {
        return(
            <div className="back-button">
                <div className="container">
                    <Link to="/"
                        className="back-button__link">
                        <span className="back-button__icon">❮</span>
                        <span className="back-button__text">HOME</span>
                    </Link>
                </div>
            </div>
        );
    }
}
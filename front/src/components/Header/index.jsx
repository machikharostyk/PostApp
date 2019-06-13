import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../img/avatar.jpg';
import { Navbar } from 'react-bootstrap';
import style from './header.module.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <Link to="/">PostViewer</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <div className={style.userContainer}>
                            <div className={style.userAvatar}>
                                <img src={avatar} alt=""/>
                            </div>
                            <span>
                                Rostyk Machikha
                            </span>
                        </div>
                    </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
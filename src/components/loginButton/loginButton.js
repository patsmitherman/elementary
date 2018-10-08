import React from 'react';
import { Button } from 'reactstrap';
import styles from './loginButton.module.css';

const LoginButton = ({isAuthed, loginFunc, logoutFunc}) => {
    return (
        <div className={styles.wrapper}>
            {!isAuthed && (
            <Button onClick={loginFunc}>Login</Button>
            )}

            {isAuthed && (
            <Button onClick={logoutFunc}>Logout</Button>
            )}
        </div>
    )
};

export default LoginButton;
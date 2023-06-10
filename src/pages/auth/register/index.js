import classNames from 'classnames/bind';
import styles from './Register.module.scss';

import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';

const cx = classNames.bind(styles);

function Register() {
    // hook state
    const [isPassword, setIsPw] = useState(false);
    const [isConfirmPw, setIsConfirmPw] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPW, setConfirmPW] = useState('');
    const [checkbox, setCheckBox] = useState(true);

    // hook ref
    const firstNameRef = useRef(null);
    const lastNameref = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPWRef = useRef(null);
    const checkBoxRef = useRef(null);
    const logEmail = useRef(null);
    const logFirstName = useRef(null);
    const logLastName = useRef(null);
    const logPassword = useRef(null);
    const logConfirmPw = useRef(null);

    const validator = () => {
        if (!firstName) {
            firstNameRef.current.focus();
            logFirstName.current.style.display = 'inline';
            return false;
        } else {
            logFirstName.current.style.display = 'none';
        }

        if (!lastName) {
            lastNameref.current.focus();
            logLastName.current.style.display = 'inline';
            return false;
        } else {
            logLastName.current.style.display = 'none';
        }

        if (!validateEmail(email)) {
            emailRef.current.focus();
            logEmail.current.style.display = 'inline';
            return false;
        } else {
            logEmail.current.style.display = 'none';
        }

        if (!password) {
            passwordRef.current.focus();
            logPassword.current.style.display = 'inline';
            return false;
        } else {
            logPassword.current.style.display = 'none';
        }

        if (confirmPW !== password) {
            confirmPWRef.current.focus();
            logConfirmPw.current.style.display = 'inline';
            return false;
        } else {
            logConfirmPw.current.style.display = 'none';
        }

        return true;
    };

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
    };

    const submitRegister = () => {
        if (validator()) {
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPW('');
            alert('Success');
        }
    };
    return (
        <div className={cx('wrap')}>
            <div className={cx('box')}>
                <h1 className="text-center text-4xl">Register</h1>
                <div className="flex justify-around">
                    <div className={cx('group')}>
                        <div className={cx('item', 'item-name')}>
                            <div className={cx('name')}>
                                <input
                                    ref={firstNameRef}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    type="text"
                                    placeholder="First name"
                                />
                                <span ref={logFirstName} className={cx('item-log')} style={{ display: 'none' }}>
                                    Enter first name
                                </span>
                            </div>
                            <div className={cx('name')}>
                                <input
                                    ref={lastNameref}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    type="text"
                                    placeholder="Last name"
                                />
                                <span ref={logLastName} className={cx('item-log')} style={{ display: 'none' }}>
                                    Enter last name
                                </span>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <input
                                ref={emailRef}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter your email"
                            />
                            <span ref={logEmail} className={cx('item-log')} style={{ display: 'none' }}>
                                Please enter a valid email address
                            </span>
                        </div>
                        <div className={cx('item', 'password')}>
                            <input
                                className={cx('input-password')}
                                ref={passwordRef}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={isPassword ? 'text' : 'password'}
                                placeholder="Password"
                            />
                            <div className={cx('icon')}>
                                {isPassword ? (
                                    <EyeOutlined onClick={() => setIsPw(false)} />
                                ) : (
                                    <EyeInvisibleOutlined onClick={() => setIsPw(true)} />
                                )}
                            </div>
                            <span ref={logPassword} className={cx('item-log')} style={{ display: 'none' }}>
                                Please enter a password
                            </span>
                        </div>
                        <div className={cx('item', 'password')}>
                            <input
                                className={cx('input-password')}
                                ref={confirmPWRef}
                                value={confirmPW}
                                onChange={(e) => setConfirmPW(e.target.value)}
                                type={isConfirmPw ? 'text' : 'password'}
                                placeholder="Confirm password"
                            />
                            <div className={cx('icon')}>
                                {isConfirmPw ? (
                                    <EyeOutlined onClick={() => setIsConfirmPw(false)} />
                                ) : (
                                    <EyeInvisibleOutlined onClick={() => setIsConfirmPw(true)} />
                                )}
                            </div>
                            <span ref={logConfirmPw} className={cx('item-log')} style={{ display: 'none' }}>
                                Password confirm does not match
                            </span>
                        </div>
                        <div className={cx('item')}>
                            <Checkbox ref={checkBoxRef} checked={checkbox} onClick={() => setCheckBox(!checkbox)}>
                                <p>
                                    I agree all statements in <a href="/123">Terms of service</a>
                                </p>
                            </Checkbox>
                        </div>
                        <div className={cx('item')}>
                            <button className={cx('btn')} onClick={() => submitRegister()}>
                                Register
                            </button>
                        </div>
                        <div className={cx('register') + ' mt-5'}>
                            <h4>
                                Already have an account?
                                <Link to="/login">
                                    <span className="ml-3">Login now</span>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;

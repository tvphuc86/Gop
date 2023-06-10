import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import { useRef, useState } from 'react';
import googleIcon from '~/assets/icon/google.png';
import facebookIcon from '~/assets/icon/facebook.png';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    const [isPassword, setIsPw] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const logEmailReg = useRef(null);

    const validator = () => {
        if (!validateEmail(email)) {
            emailRef.current.focus();
            logEmailReg.current.style.display = 'inline';
            return false;
        } else {
            logEmailReg.current.style.display = 'none';
        }

        if (password === '') {
            passwordRef.current.focus();
            return false;
        }

        return true;
    };

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
    };

    const submitLogin = () => {
        if (validator()) {
            setEmail('');
            setPassword('');
            alert('Success');
        }
    };

    return (
        <div className={cx('wrap')}>
            <div className={cx('box')}>
                <h1 className="text-center text-4xl">Login</h1>
                <div className={cx('group')}>
                    <div className={cx('item')}>
                        <input
                            ref={emailRef}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter your email"
                        />
                        <span ref={logEmailReg} className={cx('item-log')} style={{ display: 'none' }}>
                            Please enter a valid email address
                        </span>
                    </div>
                    <div className={cx('item', 'password')}>
                        <input
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
                    </div>
                    <div className={cx('item')}>
                        <span className={cx('recovery')}>Recovery Password</span>
                    </div>
                    <div className={cx('item')}>
                        <button className={cx('btn')} onClick={() => submitLogin()}>
                            Sign In
                        </button>
                    </div>
                    <div className={cx('ruler-bar')}>
                        <div className={cx('ruler', 'left')}></div>
                        <span>Or</span>
                        <div className={cx('ruler', 'right')}></div>
                    </div>
                    <div className={cx('oauth2')}>
                        <img src={googleIcon} alt="icon google" />
                        <img src={facebookIcon} alt="icon facebook" />
                    </div>
                    <div className={cx('register')}>
                        <h4>
                            Not a member?
                            <Link to="/register">
                                <span className="ml-3">Register now</span>
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

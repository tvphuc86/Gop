import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrap')}>
            <h1 className="text-center">Footer Page</h1>
        </div>
    );
}

export default Footer;

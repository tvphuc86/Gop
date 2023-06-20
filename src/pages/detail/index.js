import classNames from 'classnames/bind';
import styles from './Detail.module.scss';

const cx = classNames.bind(styles);

function Detail() {
    return <div className={cx('wrap')}>Detail page</div>;
}

export default Detail;

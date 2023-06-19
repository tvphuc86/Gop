import styles from './UserNav.module.scss';
import classNames from 'classnames/bind';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

const cx = classNames.bind(styles);

function UserNav() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('user')}>
                <img
                    className={cx('avatar')}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&usqp=CAU"
                    alt=""
                />
            </div>
            <div className={cx('box')}>
                <div className={cx('item')}>item 1</div>
                <div className={cx('item')}>item 1</div>
                <div className={cx('item')}>item 1</div>
            </div>
        </div>
    );
}

export default UserNav;

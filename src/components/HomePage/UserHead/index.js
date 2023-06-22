import classNames from 'classnames/bind';
import styles from './UserHead.module.scss';
import { Avatar, Rate } from 'antd';

import avatar from '~/assets/images/Avatar_FB.jpg';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function UserHead() {
    return (
        <div className={cx('wrap')}>
            <Link to="/user/123">
                <div className={cx('user')}>
                    <Avatar size={40} src={<img src={avatar} alt="avatar" />} />
                    <div className={cx('infor')}>
                        <h1>Chung Phát Tiến</h1>
                        <div>
                            <Rate className={cx('rate')} disabled allowHalf defaultValue={2.5} />
                            <span className="px-2">2.5</span>
                        </div>
                    </div>
                    <div className={cx('coin')}>
                        <span>500 Coin</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default UserHead;

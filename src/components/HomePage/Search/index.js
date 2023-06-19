import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrap')}>
            <input className={cx('input')} type="text" />
            <div className={cx('btn-search')}>
                <SearchOutlined classname={cx('icon')} />
            </div>
        </div>
    );
}

export default Search;

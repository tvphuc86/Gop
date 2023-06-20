import Header from '~/components/Layout/Header';
import styles from './HomeLayout.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/components/Layout/Footer';

const cx = classNames.bind(styles);

function HomeLayout({ children }) {
    return (
        <div className={cx('wrap')}>
            <Header />
            <div className={cx('container') + ' md:container md:mx-auto'}>{children}</div>
            <Footer />
        </div>
    );
}

export default HomeLayout;

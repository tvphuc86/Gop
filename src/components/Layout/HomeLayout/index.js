import Header from '~/components/HomePage/Header';
import styles from './HomeLayout.module.scss';
import classNames from 'classnames/bind';
import Footer from '~/components/HomePage/Footer';

const cx = classNames.bind(styles);

function HomeLayout({ children }) {
    return (
        <div className={cx('wrap')}>
            <Header />
            <div className="md:container md:mx-auto">{children}</div>
            <Footer />
        </div>
    );
}

export default HomeLayout;

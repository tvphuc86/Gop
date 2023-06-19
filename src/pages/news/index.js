import classNames from 'classnames/bind';
import styles from './news.module.scss';

import { useState } from 'react';
import { Select, Slider, Input, Pagination } from 'antd';

import searchIcon from '~/assets/icon/magnifying-glass.png';

const cx = classNames.bind(styles);

function News() {
    const [priceValue, setPriceValue] = useState([0, 10000000]);

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    const onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    };

    return (
        <div className={cx('wrap')}>
            <div className="container">
                <div>
                    <h1 className={cx('heading-1') + ' text-center'}>NEW POSTS</h1>
                    <div className={cx('list')}>
                        <div className="grid grid-cols-4 gap-x-8 gap-y-12">
                            <div className={cx('item')}></div>
                            <div className={cx('item')}></div>
                            <div className={cx('item')}></div>
                            <div className={cx('item')}></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className={cx('heading-1') + ' text-center'}>ALL POSTS</h1>

                    <div className={cx('control')}>
                        <div className={cx('ct-item')}>
                            <p>Place</p>
                            <Select
                                showSearch
                                style={{
                                    width: 200,
                                }}
                                placeholder="Select Place"
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '')
                                        .toLowerCase()
                                        .localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={[
                                    {
                                        value: '1',
                                        label: 'Cần Thơ',
                                    },
                                    {
                                        value: '2',
                                        label: 'TP. HCM',
                                    },
                                ]}
                            />
                        </div>
                        <div className={cx('price')}>
                            <p>Price range</p>
                            <div className="flex items-center">
                                <span style={{ width: '70px' }}>{numberWithCommas(priceValue[0])}đ</span>
                                <div className={cx('slider')}>
                                    <Slider
                                        value={priceValue}
                                        range
                                        step={100000}
                                        min={0}
                                        max={10000000}
                                        defaultValue={[0, 10000000]}
                                        onChange={(e) => setPriceValue(e)}
                                    />
                                </div>
                                <span style={{ width: '70px' }}>{numberWithCommas(priceValue[1])}đ</span>
                            </div>
                        </div>
                        <div className={cx('search')}>
                            <Input placeholder="Search here" />
                            <img src={searchIcon} alt="" />
                        </div>
                    </div>
                    <div className={cx('list')}>
                        <div className="grid grid-cols-4 gap-x-8 gap-y-12">
                            <div className={cx('item')}></div>
                            <div className={cx('item')}></div>
                            <div className={cx('item')}></div>
                            <div className={cx('item')}></div>
                            <div className={cx('item')}></div>
                            <div className={cx('item')}></div>
                            <div className={cx('item')}></div>
                            <div className={cx('item')}></div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Pagination defaultCurrent={6} total={500} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;

import { useState, useEffect } from 'react';
import classes from './ProductGroup.module.scss';
import { useRecoilValue } from 'recoil';
import { useReadData } from '@/firebase/firestore';

const ProductGroupFilter = () => {
  const { readData, data = null, error: readError } = useReadData(`products`);
  useEffect(() => {
    readData();
  }, []);
  const dataL = data || [];

  return (
    <div className={classes.Group}>
      <div className={classes.GroupHeader}>
        <div className={classes.GroupHeaderTotalCount}>총 {dataL.length}건</div>
        <div className={classes.GroupHeaderButton}>
          <a className={classes.GroupHeaderButtonHot} href="#!">
            <span>추천순</span>
          </a>
          <svg
            fill="none"
            height="20"
            viewBox="0 0 14 20"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M6.9932 3.7002C8.73506 3.7002 10.3116 4.40557 11.4528 5.54565C12.5943 6.68594 13.3002 8.26111 13.3002 10.0002C13.3002 11.7393 12.5943 13.3145 11.4528 14.4547C10.3116 15.5948 8.73506 16.3002 6.9932 16.3002C5.25512 16.3002 3.68233 15.595 2.54387 14.4554C1.40457 13.315 0.700195 11.7395 0.700195 10.0002C0.700195 8.26087 1.40457 6.68541 2.54387 5.54497C3.68233 4.40537 5.25512 3.7002 6.9932 3.7002Z"
              fillRule="evenodd"
              stroke="#CCCCCC"
              strokeWidth="1.4"
            />
            <path
              d="M4.5 8.21081H5.77027C5.81351 7.55135 6.26216 7.12973 6.95946 7.12973C7.64054 7.12973 8.09459 7.53514 8.09459 8.0973C8.09459 8.58784 7.90383 8.86944 7.35576 9.22524L7.1973 9.32432C6.45135 9.76216 6.13784 10.2486 6.18649 11.0595L6.19189 11.427H7.44595V11.1189C7.44595 10.5838 7.64595 10.3081 8.35405 9.89189C9.08919 9.45405 9.5 8.87568 9.5 8.04865C9.5 6.85405 8.51081 6 7.02973 6C5.42432 6 4.54324 6.92973 4.5 8.21081ZM6.87838 14.0054C6.33784 14.0054 5.98108 13.6649 5.98108 13.1459C5.98108 12.6216 6.33784 12.2811 6.87838 12.2811C7.42973 12.2811 7.77568 12.6216 7.77568 13.1459C7.77568 13.6649 7.42973 14.0054 6.87838 14.0054Z"
              fill="#CCCCCC"
            />
          </svg>
          <span aria-hidden="true" className="divider__sort">
            |
          </span>
          <a className={classes.GroupHeaderButtonNew} href="#!">
            <span>신상품순</span>
          </a>
          <span aria-hidden="true" className="divider__sort">
            |
          </span>
          <a className={classes.GroupHeaderButtonSale} href="#!">
            <span>판매량순</span>
          </a>
          <span aria-hidden="true" className="divider__sort">
            |
          </span>
          <a className={classes.GroupHeaderButtonEvent} href="#!">
            <span>혜택순</span>
          </a>
          <span aria-hidden="true" className="divider__sort">
            |
          </span>
          <a className={classes.GroupHeaderButtonRow} href="#!">
            <span>낮은 가격순</span>
          </a>
          <span aria-hidden="true" className="divider__sort">
            |
          </span>
          <a className={classes.GroupHeaderButtonHigh} href="#!">
            <span>높은 가격순</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductGroupFilter;

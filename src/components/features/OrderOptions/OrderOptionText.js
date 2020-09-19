import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({ setOptionValue }) => (
  <div className={styles.component}>
    <input
      type="text"
      className={styles.input}
      onChange={(event) => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};
export default OrderOptionText;

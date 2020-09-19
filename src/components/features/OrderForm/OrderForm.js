import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import PageTitle from '../../common/PageTitle/PageTitle';
import OrderSummary from  '../../features/OrderSummary/OrderSummary';

const OrderForm = ({tripCost, options}) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <PageTitle text='Trip options' />
        <OrderSummary tripCost={tripCost} options={options}/>
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;

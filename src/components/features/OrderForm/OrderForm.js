import React from 'react';
import PropTypes from 'prop-types';
// import styles from './OrderFrom.scss';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOptions from '../OrderOptions/OrderOptions';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

const sendOrder = (options, tripCost, tripName, tripId, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const{contact, name} = options;

  if (name.length < 2) {
    window.alert('Place the correct name, please');
    return;
  }
  if (contact.length < 5) {
    window.alert('Place the correct contact, please');
    return;
  }

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;
  console.log(payload);
  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({tripCost, options, setOrderOption, tripName, tripId, countryCode}) => (
  <Row>
    {pricing.map((option) => (
      <Col md={4} key={option.id}>
        <OrderOptions
          currentValue={options[option.id]}
          {...option}
          setOrderOption={setOrderOption}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
      <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, countryCode)}>Order now!</Button>
    </Col>
  </Row>
);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  countryCode: PropTypes.string,
};
export default OrderForm;

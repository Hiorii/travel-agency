import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('render correct Link', () => {
    const exptectedLink = '/trip/abc';
    const expectedImg = 'image.jpg';
    const expectedAltImg = 'descripction';
    const component = shallow(
      <TripSummary
        id='abc'
        image={expectedImg}
        name={expectedAltImg}
      />
    );
    const renderedLink = component.find('Link').prop('to');
    expect(renderedLink).toEqual(exptectedLink);
    expect(component.find('img').prop('src').toEqual(expectedImg));
    expect(component.find('img').prop('alt').toEqual(expectedAltImg));
  });

  it('render correcr props name, cost and days', () => {
    const expectedName = 'someName';
    const expectedCost = '$ 100';
    const expectedDays = 1;
    const component = shallow(
      <TripSummary
        name = {expectedName}
        cost = {expectedCost}
        days = {expectedDays}
      />
    );
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span').text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details span').text()).toEqual(`from ${expectedDays}`);
  });

  it('throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('render correct tags', () => {
    const expectedTags = ['tag1', 'tag', 'tag3'];
    const component = shallow(
      <TripSummary
        tags={expectedTags}
      />
    );
    expect(component.find('tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('tags span').at(2).text()).toEqual(expectedTags[2]);
  });

  it('does not render tags if props tags is false', () => {
    const component = shallow(
      <TripSummary tags={[]} />
    );
    expect(component.hasClass('tags')).toBe(false);
  });

});

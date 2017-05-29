import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders the app component', () => {
    expect(component.length).to.equal(1);
  });

  it('renders a div', ()  => {
    console.log('component =', component);
  	expect(component.find('div').length).to.equal(1);
  })

});
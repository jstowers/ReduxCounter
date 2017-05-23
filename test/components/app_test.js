import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders the app component', () => {
    expect(component).to.exist;
  });

   it('app component length to equal 1', () => {
    expect(component.length).to.equal(1);
  });

});
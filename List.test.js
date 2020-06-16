import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import STORE from './store';

import List from './List';

describe('<List />', () => {
  it('renders with props', () => {
    // Create a DOM element to render the component into
    const div = document.createElement('div');

    // Pass required props in the usual way
    ReactDOM.render(
        <List 
          header="First List"
          cards={[
            {id: 'a', title: 'First card', content: 'lorem ipsum'},
            {id: 'd', title: 'Fourth card', content: 'lorem ipsum'}
          ]}
        />,
        div
    );
    // Clean up
    ReactDOM.unmountComponentAtNode(div);

  });

    it('renders this UI as expected', () => {
      // Render the component, as JSON
      const tree = renderer.create(<List 
        header="First List"
        cards={[
          {id: 'a', title: 'First card', content: 'lorem ipsum'},
          {id: 'd', title: 'Fourth card', content: 'lorem ipsum'}
        ]}
      />).toJSON();
      // Check whether it matches the previous snapshot
      // Stored in __snapshots__/List.test.js.snap
      expect(tree).toMatchSnapshot();
    });

});

// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`<List /> renders this UI as expected 1`] = `
<section
  className="List"
>
  <header
    className="List-header"
  >
    <h2>
      First List
    </h2>
  </header>
  <div
    className="List-cards"
  >
    <div
      className="Card"
    >
      <button
        type="button"
      >
        delete
      </button>
      <h3>
        First card
      </h3>
      <p>
        lorem ipsum
      </p>
    </div>
    <div
      className="Card"
    >
      <button
        type="button"
      >
        delete
      </button>
      <h3>
        Fourth card
      </h3>
      <p>
        lorem ipsum
      </p>
    </div>
    <button
      className="List-add-button"
      type="button"
    >
      + Add Random Card
    </button>
  </div>
</section>
`;
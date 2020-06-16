import React from "react";
import Card from "./Card";
import renderer from "react-test-renderer";

describe("<Card />", () => {
  it("renders with props", () => {
    // Create a DOM element to render the component
    const div = document.createElement("div");

    // Pass required props in the usual way
    ReactDOM.render(<Card title="First card" content="lorem ipsum" />, div);

    // Clean up
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders this UI as expected", () => {
    //Render the component, as JSON
    const tree = renderer
      .create(<Card title="First card" content="lorem ipsum" />)
      .toJSON();
    // Check whther it matches the previous snapshot
    // Store in ...
    expect(tree).toMatchSnapshot();
  });
});

// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`<Card /> renders this UI as expected 1`] = `
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
`;

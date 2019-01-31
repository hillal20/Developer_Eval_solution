import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import sinon from "sinon";
import Enzyme, { shallow, configure } from "enzyme";
import Renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<app/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("create  snapshot", () => {
    let element = Renderer.create(<App />);
    expect(element.toJSON()).toMatchSnapshot();
  });

  it("should not defer from snapshot", () => {
    let element = shallow(<App />);
    expect(element).toMatchSnapshot();
  });

  it("should state.total is NaN when component mount first time", () => {
    const expected = NaN;
    const component = shallow(<App />);
    const instance = component.instance();
    expect(parseInt(instance.state.total)).toEqual(expected);
  });
});

import React from "react";
import ReactDOM from "react-dom";
import MovieDetail from "../movieDetail/movieDetail.js";

import sinon from "sinon";
import Enzyme, { shallow, configure } from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("movieDetail.js", () => {
  it("rendering without crushing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MovieDetail />, div);
  });
  it("rendering without crushing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MovieDetail />, div);
  });
  it("create snap shot;'", () => {
    const element = renderer.create(<MovieDetail />);
    expect(element.toJSON()).toMatchSnapshot();
  });
  it("should not differ from snapshot", () => {
    let element = shallow(<MovieDetail />);
    expect(element).toMatchSnapshot();
  });
});

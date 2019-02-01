import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import sinon from "sinon";
import Enzyme, { shallow, configure } from "enzyme";
import Renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("index.js", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});

import React from "react";
import App from "./App";
import { shallow } from "enzyme";

test("renders learn react link", () => {
  console.log("hello");
  const wrapper = shallow(<App />);
  expect(wrapper.length).toBe(1);
});

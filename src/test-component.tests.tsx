import { mount, render } from "enzyme";
import toJson from "enzyme-to-json";
import { TestComponent } from "test-component";

describe("TestComponent", () => {
  it("should match the snapshot", () => {
    const wrapper = render(<TestComponent></TestComponent>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("find stuff", () => {
    const wrapper = mount(<TestComponent></TestComponent>);

    console.log(wrapper.debug());

    expect(wrapper.find("Button")).toHaveLength(1);
  });
});

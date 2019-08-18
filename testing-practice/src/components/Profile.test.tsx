import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile /> without Image interaction", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile name="한영수" age={29} />);
    expect(utils.container).toMatchSnapshot();
  });

  it("shows the props correctly", () => {
    const utils = render(<Profile name="한영수" age={29} />);
    utils.getByText("한영수");
    utils.getByText("29");
  });

  it("do not have img node", () => {
    const utils = render(<Profile name="한영수" age={29} />);
    const imageContainer = utils.getByTestId("imageWrapper");
    expect(imageContainer.childElementCount).toBe(0);
  });
});

describe("<Profile /> with Image interaction", () => {
  it("matches snapshot", () => {
    const utils = render(
      <Profile
        name="한영수"
        age={29}
        profileImgUrl="https://www.fillmurray.com/360/360"
      />
    );
    expect(utils.container).toMatchSnapshot();
  });

  it("have profile image node", () => {
    const utils = render(
      <Profile
        name="한영수"
        age={29}
        profileImgUrl="https://www.fillmurray.com/360/360"
      />
    );
    utils.getByAltText("프로필이미지");
  });
});

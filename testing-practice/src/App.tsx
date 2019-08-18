import React from "react";
import CircleProfile from "./components/Profile";

export default function App() {
  return (
    <div>
      <CircleProfile
        name="한영수"
        age={29}
        profileImgUrl="https://www.fillmurray.com/g/200/300"
      />

      <CircleProfile name="한종수" age={24} />
    </div>
  );
}

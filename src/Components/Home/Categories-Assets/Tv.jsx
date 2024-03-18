import React from "react";
import { Svg, Path, Rect, Defs, G, ClipPath } from "react-native-svg";

const TvIcon = () => (
  <Svg
    width="30"
    height="30"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clip-path="url(#clip0_209_5629)">
      <Path
        d="M5.84314 46.1745H54.1569C58.0443 46.1745 60 44.3101 60 40.3314V14.276C60 10.2973 58.0443 8.433 54.1569 8.433H5.84314C1.95525 8.433 0 10.2973 0 14.276V40.3314C0 44.3101 1.95525 46.1745 5.84314 46.1745ZM46.5401 52.495C46.5401 51.3127 45.5855 50.3579 44.4256 50.3579H15.5285C14.369 50.3579 13.4369 51.3127 13.4369 52.495C13.4369 53.6773 14.369 54.6322 15.5285 54.6322H44.4256C45.5855 54.6322 46.5401 53.6773 46.5401 52.495Z"
        fill="#40BFFF"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_209_5629">
        <Rect width="60" height="60" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default TvIcon;

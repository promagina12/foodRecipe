import * as React from "react";
import Svg, { Path } from "react-native-svg";
const VideoSVG = (props) => (
  <Svg
    fill="#000000"
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="-1 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    className="cf-icon-svg"
    {...props}
  >
    <Path
      d="M16.5 9.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-2.65-2.62-3.158 1.313V7.119a.802.802 0 0 0-.8-.8H3.654a.802.802 0 0 0-.8.8v4.662a.802.802 0 0 0 .8.8h6.238a.802.802 0 0 0 .8-.8v-1.074l3.159 1.312a.199.199 0 0 0 .295-.197V7.078a.199.199 0 0 0-.296-.197z"
      fill={props.color ?? "#303030"}
    />
  </Svg>
);
export default VideoSVG;

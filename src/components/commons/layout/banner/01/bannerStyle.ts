import styled from "@emotion/styled";
import * as M from "../../../../../commons/styles/mediaQueries";

export const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 350px;

  background-image: url("https://s3-alpha-sig.figma.com/img/be10/5f28/f3ddb930e605f9565fc9da9b3f49d213?Expires=1673222400&Signature=boLi883qu7jlDW50V1q8NMkkVTbWrpcaszYAdLBmSHFJIN20V4KK7OzyY2LiP8Er4YRPtNv722CCI8THZW-1qpiIA4IBla895qsisolKJG-gpheyh36ftssfo4kRJxx~jrhA97P1eSrFNpQUUNKg0wGjmT5ace7G19sY~FX5Tj5p9UI5h8d293bTzsnFGX-mNa1d-CgqN5d6mLowe~1mjSJfDu6ysWR01Jd3Ug-Ae9FkerUsEqQKINKDxdloZvCemt9PH-~y8DryBFpzw~3kvGDx9n-2clOQorTsWX04Lw68PwCeeYITa9erjJ4o3BpqdZ~-TU2IHQItFux8VxLYCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
  background-size: cover;
  background-position-y: 43%;

  ${M.mediaL} {
    overflow: hidden;
    height: 350px;
  }

  ${M.mediaM} {
    overflow: hidden;
    height: 350px;
  }
`;

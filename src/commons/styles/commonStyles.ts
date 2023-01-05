import styled from "@emotion/styled";

export const globalContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  overflow: hidden;
`;

export const LaptopContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  overflow: hidden;
`;

export const TabletContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 768px;
  overflow: hidden;
`;

export const TwoEllipsis = styled.div`
  overflow: hidden;
  line-height: 1.2em;
  max-height: 3.6em;
`;

export const OneEllipsis = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

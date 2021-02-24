import styled from "styled-components";

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;

  .full-screen-loader__wrapper {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: inherit;
    background: #3c5aa6;
    opacity: 0.5;
  }

  .full-screen-loader__dot-container {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .full-screen-loader__dot {
    width: 18px;
    height: 18px;
    border-radius: 100%;
    float: left;
    margin: 0 9px;
    transform: scale(0);
    background: #f7cb08;
    -webkit-animation: fx 1400ms ease-in-out infinite both 0ms;
            animation: fx 1400ms ease-in-out infinite both 0ms;
  }

  .full-screen-loader__dot:nth-child(1) {
    -webkit-animation: fx 1400ms ease-in-out infinite both -0.32s;
            animation: fx 1400ms ease-in-out infinite both -0.32s;
  }

  .full-screen-loader__dot:nth-child(2) {
    -webkit-animation: fx 1400ms ease-in-out infinite both -0.16s;
            animation: fx 1400ms ease-in-out infinite both -0.16s;
  }

  @-webkit-keyframes fx {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
  @keyframes fx {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`

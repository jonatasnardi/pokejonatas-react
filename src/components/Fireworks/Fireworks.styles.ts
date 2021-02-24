import styled from "styled-components";

export const FireworksWrapper = styled.div`
  > .before, > .after {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
    -moz-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    -webkit-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    -o-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    -ms-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  }

  > .after {
    -moz-animation-delay: 1.25s, 1.25s, 1.25s;
    -webkit-animation-delay: 1.25s, 1.25s, 1.25s;
    -o-animation-delay: 1.25s, 1.25s, 1.25s;
    -ms-animation-delay: 1.25s, 1.25s, 1.25s;
    animation-delay: 1.25s, 1.25s, 1.25s;
    -moz-animation-duration: 1.25s, 1.25s, 6.25s;
    -webkit-animation-duration: 1.25s, 1.25s, 6.25s;
    -o-animation-duration: 1.25s, 1.25s, 6.25s;
    -ms-animation-duration: 1.25s, 1.25s, 6.25s;
    animation-duration: 1.25s, 1.25s, 6.25s;
  }

  @-webkit-keyframes bang {
    to {
      box-shadow: -83px -349.6666666667px #7700ff, -47px -146.6666666667px #00ffe1, 7px -26.6666666667px #002fff, 98px -43.6666666667px #00d9ff, -248px 66.3333333333px #0084ff, 41px -80.6666666667px #3700ff, -210px -32.6666666667px #09ff00, 171px -99.6666666667px #00ff95, 189px -86.6666666667px #001eff, 138px -286.6666666667px #00a2ff, 172px -39.6666666667px #ffae00, -63px -166.6666666667px #1eff00, -93px -359.6666666667px #fffb00, 50px -126.6666666667px #00ffae, 18px -175.6666666667px #0015ff, 17px -43.6666666667px #fb00ff, 70px -63.6666666667px #0059ff, 12px 62.3333333333px #0011ff, -134px -140.6666666667px #ff0080, 149px -57.6666666667px #00ff55, -101px -294.6666666667px #00ff1a, 208px -382.6666666667px #ff0040, -6px -25.6666666667px #ea00ff, 28px 45.3333333333px blue, 239px -222.6666666667px #11ff00, 44px -336.6666666667px #1eff00, -60px -196.6666666667px #4800ff, 85px -213.6666666667px #84ff00, 213px -96.6666666667px #1e00ff, -90px 54.3333333333px #ff00ea, -176px -49.6666666667px #40ff00, 6px -67.6666666667px #b300ff, -212px -167.6666666667px #09ff00, 184px -61.6666666667px #00ff6a, -244px -111.6666666667px blue, -131px -50.6666666667px #00ffb3, 116px -81.6666666667px #d5ff00, 22px -39.6666666667px #4400ff, 240px -343.6666666667px #00ffb3, 239px -255.6666666667px #ff00f7, -211px -55.6666666667px #00ff7b, 127px -61.6666666667px #3c00ff, 226px -43.6666666667px #e100ff, -164px 49.3333333333px #ffdd00, 38px -301.6666666667px #ff0099, 127px 36.3333333333px #00ffaa, 35px -406.6666666667px #4000ff, -156px -126.6666666667px #e1ff00, 222px 60.3333333333px #0084ff, 18px 71.3333333333px #ff0055, -137px -311.6666666667px #0d00ff;
    }
  }
  @-moz-keyframes bang {
    to {
      box-shadow: -83px -349.6666666667px #7700ff, -47px -146.6666666667px #00ffe1, 7px -26.6666666667px #002fff, 98px -43.6666666667px #00d9ff, -248px 66.3333333333px #0084ff, 41px -80.6666666667px #3700ff, -210px -32.6666666667px #09ff00, 171px -99.6666666667px #00ff95, 189px -86.6666666667px #001eff, 138px -286.6666666667px #00a2ff, 172px -39.6666666667px #ffae00, -63px -166.6666666667px #1eff00, -93px -359.6666666667px #fffb00, 50px -126.6666666667px #00ffae, 18px -175.6666666667px #0015ff, 17px -43.6666666667px #fb00ff, 70px -63.6666666667px #0059ff, 12px 62.3333333333px #0011ff, -134px -140.6666666667px #ff0080, 149px -57.6666666667px #00ff55, -101px -294.6666666667px #00ff1a, 208px -382.6666666667px #ff0040, -6px -25.6666666667px #ea00ff, 28px 45.3333333333px blue, 239px -222.6666666667px #11ff00, 44px -336.6666666667px #1eff00, -60px -196.6666666667px #4800ff, 85px -213.6666666667px #84ff00, 213px -96.6666666667px #1e00ff, -90px 54.3333333333px #ff00ea, -176px -49.6666666667px #40ff00, 6px -67.6666666667px #b300ff, -212px -167.6666666667px #09ff00, 184px -61.6666666667px #00ff6a, -244px -111.6666666667px blue, -131px -50.6666666667px #00ffb3, 116px -81.6666666667px #d5ff00, 22px -39.6666666667px #4400ff, 240px -343.6666666667px #00ffb3, 239px -255.6666666667px #ff00f7, -211px -55.6666666667px #00ff7b, 127px -61.6666666667px #3c00ff, 226px -43.6666666667px #e100ff, -164px 49.3333333333px #ffdd00, 38px -301.6666666667px #ff0099, 127px 36.3333333333px #00ffaa, 35px -406.6666666667px #4000ff, -156px -126.6666666667px #e1ff00, 222px 60.3333333333px #0084ff, 18px 71.3333333333px #ff0055, -137px -311.6666666667px #0d00ff;
    }
  }
  @-o-keyframes bang {
    to {
      box-shadow: -83px -349.6666666667px #7700ff, -47px -146.6666666667px #00ffe1, 7px -26.6666666667px #002fff, 98px -43.6666666667px #00d9ff, -248px 66.3333333333px #0084ff, 41px -80.6666666667px #3700ff, -210px -32.6666666667px #09ff00, 171px -99.6666666667px #00ff95, 189px -86.6666666667px #001eff, 138px -286.6666666667px #00a2ff, 172px -39.6666666667px #ffae00, -63px -166.6666666667px #1eff00, -93px -359.6666666667px #fffb00, 50px -126.6666666667px #00ffae, 18px -175.6666666667px #0015ff, 17px -43.6666666667px #fb00ff, 70px -63.6666666667px #0059ff, 12px 62.3333333333px #0011ff, -134px -140.6666666667px #ff0080, 149px -57.6666666667px #00ff55, -101px -294.6666666667px #00ff1a, 208px -382.6666666667px #ff0040, -6px -25.6666666667px #ea00ff, 28px 45.3333333333px blue, 239px -222.6666666667px #11ff00, 44px -336.6666666667px #1eff00, -60px -196.6666666667px #4800ff, 85px -213.6666666667px #84ff00, 213px -96.6666666667px #1e00ff, -90px 54.3333333333px #ff00ea, -176px -49.6666666667px #40ff00, 6px -67.6666666667px #b300ff, -212px -167.6666666667px #09ff00, 184px -61.6666666667px #00ff6a, -244px -111.6666666667px blue, -131px -50.6666666667px #00ffb3, 116px -81.6666666667px #d5ff00, 22px -39.6666666667px #4400ff, 240px -343.6666666667px #00ffb3, 239px -255.6666666667px #ff00f7, -211px -55.6666666667px #00ff7b, 127px -61.6666666667px #3c00ff, 226px -43.6666666667px #e100ff, -164px 49.3333333333px #ffdd00, 38px -301.6666666667px #ff0099, 127px 36.3333333333px #00ffaa, 35px -406.6666666667px #4000ff, -156px -126.6666666667px #e1ff00, 222px 60.3333333333px #0084ff, 18px 71.3333333333px #ff0055, -137px -311.6666666667px #0d00ff;
    }
  }
  @-ms-keyframes bang {
    to {
      box-shadow: -83px -349.6666666667px #7700ff, -47px -146.6666666667px #00ffe1, 7px -26.6666666667px #002fff, 98px -43.6666666667px #00d9ff, -248px 66.3333333333px #0084ff, 41px -80.6666666667px #3700ff, -210px -32.6666666667px #09ff00, 171px -99.6666666667px #00ff95, 189px -86.6666666667px #001eff, 138px -286.6666666667px #00a2ff, 172px -39.6666666667px #ffae00, -63px -166.6666666667px #1eff00, -93px -359.6666666667px #fffb00, 50px -126.6666666667px #00ffae, 18px -175.6666666667px #0015ff, 17px -43.6666666667px #fb00ff, 70px -63.6666666667px #0059ff, 12px 62.3333333333px #0011ff, -134px -140.6666666667px #ff0080, 149px -57.6666666667px #00ff55, -101px -294.6666666667px #00ff1a, 208px -382.6666666667px #ff0040, -6px -25.6666666667px #ea00ff, 28px 45.3333333333px blue, 239px -222.6666666667px #11ff00, 44px -336.6666666667px #1eff00, -60px -196.6666666667px #4800ff, 85px -213.6666666667px #84ff00, 213px -96.6666666667px #1e00ff, -90px 54.3333333333px #ff00ea, -176px -49.6666666667px #40ff00, 6px -67.6666666667px #b300ff, -212px -167.6666666667px #09ff00, 184px -61.6666666667px #00ff6a, -244px -111.6666666667px blue, -131px -50.6666666667px #00ffb3, 116px -81.6666666667px #d5ff00, 22px -39.6666666667px #4400ff, 240px -343.6666666667px #00ffb3, 239px -255.6666666667px #ff00f7, -211px -55.6666666667px #00ff7b, 127px -61.6666666667px #3c00ff, 226px -43.6666666667px #e100ff, -164px 49.3333333333px #ffdd00, 38px -301.6666666667px #ff0099, 127px 36.3333333333px #00ffaa, 35px -406.6666666667px #4000ff, -156px -126.6666666667px #e1ff00, 222px 60.3333333333px #0084ff, 18px 71.3333333333px #ff0055, -137px -311.6666666667px #0d00ff;
    }
  }
  @keyframes bang {
    to {
      box-shadow: -83px -349.6666666667px #7700ff, -47px -146.6666666667px #00ffe1, 7px -26.6666666667px #002fff, 98px -43.6666666667px #00d9ff, -248px 66.3333333333px #0084ff, 41px -80.6666666667px #3700ff, -210px -32.6666666667px #09ff00, 171px -99.6666666667px #00ff95, 189px -86.6666666667px #001eff, 138px -286.6666666667px #00a2ff, 172px -39.6666666667px #ffae00, -63px -166.6666666667px #1eff00, -93px -359.6666666667px #fffb00, 50px -126.6666666667px #00ffae, 18px -175.6666666667px #0015ff, 17px -43.6666666667px #fb00ff, 70px -63.6666666667px #0059ff, 12px 62.3333333333px #0011ff, -134px -140.6666666667px #ff0080, 149px -57.6666666667px #00ff55, -101px -294.6666666667px #00ff1a, 208px -382.6666666667px #ff0040, -6px -25.6666666667px #ea00ff, 28px 45.3333333333px blue, 239px -222.6666666667px #11ff00, 44px -336.6666666667px #1eff00, -60px -196.6666666667px #4800ff, 85px -213.6666666667px #84ff00, 213px -96.6666666667px #1e00ff, -90px 54.3333333333px #ff00ea, -176px -49.6666666667px #40ff00, 6px -67.6666666667px #b300ff, -212px -167.6666666667px #09ff00, 184px -61.6666666667px #00ff6a, -244px -111.6666666667px blue, -131px -50.6666666667px #00ffb3, 116px -81.6666666667px #d5ff00, 22px -39.6666666667px #4400ff, 240px -343.6666666667px #00ffb3, 239px -255.6666666667px #ff00f7, -211px -55.6666666667px #00ff7b, 127px -61.6666666667px #3c00ff, 226px -43.6666666667px #e100ff, -164px 49.3333333333px #ffdd00, 38px -301.6666666667px #ff0099, 127px 36.3333333333px #00ffaa, 35px -406.6666666667px #4000ff, -156px -126.6666666667px #e1ff00, 222px 60.3333333333px #0084ff, 18px 71.3333333333px #ff0055, -137px -311.6666666667px #0d00ff;
    }
  }
  @-webkit-keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0;
    }
  }
  @-moz-keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0;
    }
  }
  @-o-keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0;
    }
  }
  @-ms-keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0;
    }
  }
  @keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0;
    }
  }
  @-webkit-keyframes position {
    0%, 19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }
    20%, 39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }
    40%, 59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }
    60%, 79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }
    80%, 99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
  @-moz-keyframes position {
    0%, 19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }
    20%, 39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }
    40%, 59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }
    60%, 79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }
    80%, 99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
  @-o-keyframes position {
    0%, 19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }
    20%, 39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }
    40%, 59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }
    60%, 79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }
    80%, 99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
  @-ms-keyframes position {
    0%, 19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }
    20%, 39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }
    40%, 59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }
    60%, 79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }
    80%, 99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
  @keyframes position {
    0%, 19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }
    20%, 39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }
    40%, 59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }
    60%, 79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }
    80%, 99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }

    
`
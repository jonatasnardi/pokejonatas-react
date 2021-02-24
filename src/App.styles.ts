import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './assets/images/bg.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background: #FFF;
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  .App {
    max-width: 1100px;
    width: 100%;
  }
`

export const ContainerInput = styled.div`
  left: 50%;
  position: relative;
  transform: translateX(-50%);
  margin-top: 10px;

  .search {
    width: 320px;
    margin: 0 auto;
  }
  .search .field {
    position: relative;
  }
  .search label {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAQAAAC1QeVaAAAAxElEQVR4AXXPIUuDcRDA4Zv4AUSwTLEKVoNlySyCYLO98CCsahGrX0AW/QhmBRHEJghLS4JFBBXDgrJi2In78w8v4v3S8XDh4nd0DTxLEzd2RC2EnrH07trQVDrXqbhs7FvfnBDWDKWTigOpL2oWvZpYKPjio1zVHEt7BdOtaLUtHRX8MmqjRjooeCVttPBOWi+4JT1aLaDjVLpU/5ytn840Dj1IaWSpYmi8yVlTF54qh9K8nn27usJK5fC3yvfhPx7a/AE9dYwDEfKrlAAAAABJRU5ErkJggg==) no-repeat 0 50%;
    color: #b2b2b2;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    transition: left 0.4s, transform 0.4s;
    padding-left: 1.25em;
    pointer-events: none;
  }
  .search .input-search {
    border: 1px solid #3c5aa6;
    border-radius: 4px;
    box-shadow: 0 1px 0 #bfbebf;
    display: block;
    font: 400 1em/1.5em sans-serif;
    padding: 0.5em 1.75em;
    width: 100%;
  }
  .search .input-search:focus + label, .search .input-search:valid + label {
    left: 0.5em;
    transform: translate(0, -50%);
  }
  .search .input-search:valid + label {
    text-indent: -9999px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #FFF;
  }

  .score {
    color: #FFF;
    font-size: 22px;
    margin: 0;
  }

  h1 {
    text-align: center;
  }

  .btn-search {
    display: block;
    cursor: pointer;
    width: 320px;
    background: #3c5aa6;
    border-radius: 4px;
    box-shadow: 0 1px 0 #bfbebf;
    height: 40px;
    color: #FFF;
    margin: 5px auto 0 auto;
    padding: 0 40px;
  }

.btn-all {
  background: #0f204a;
  margin: 5px auto 0 auto;
}

.btn-favorited {
  background: #f7cb08;
  color: #3c5aa6;
  margin: 5px auto 20px auto;
}
`
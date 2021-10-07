import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: #b3b0a2;

  .header {
    height: calc(20px + 3vw);
    min-height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10%;
    padding-right: 10%;
    background-color: #293747;
    h1 {
      font-size: calc(16px + 2vw);
      color: #b3b0a2;
    }
    button {
      background-color: #1a141b;
      color: #b3b0a2;
      border: none;
      border-radius: 5px;
      margin-left: 5px;
      padding: 5px;
    }
    button:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  li {
    width: 300px;
    border: 2px solid black;
    padding: 5px;
    margin: 10px;
    box-sizing: border-box;
    color: #b3b0a2;
    text-shadow: 2px 2px 2px black;
    background: rgba(12, 57, 60, 0.7);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(7px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  img {
    max-width: 100%;
    height: 200px;
  }
`;

export const NoDrinksContainer = styled.div`
  width: 100%;
  color: #b3b0a2;

  .header {
    height: calc(20px + 3vw);
    min-height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10%;
    padding-right: 10%;
    background-color: #293747;
    h1 {
      font-size: calc(16px + 2vw);
      color: #b3b0a2;
    }
    button {
      background-color: #1a141b;
      color: #b3b0a2;
      border: none;
      border-radius: 5px;
      margin-left: 5px;
      padding: 5px;
    }
    button:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }
  .noDrinksDivFather {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .noDrinksDiv {
    height: 200px;
    margin-top: 50px;
    padding: 50px;
    background: rgba(35, 35, 36, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: calc(16px + 2vw);
      margin-bottom: 10px;
    }
  }
`;

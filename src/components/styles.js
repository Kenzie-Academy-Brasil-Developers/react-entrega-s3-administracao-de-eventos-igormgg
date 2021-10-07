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
      margin-top: 1px;
    }

    button:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }

  .drinksDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      width: 300px;
      border: 2px solid black;
      padding: 5px;
      padding-top: 15px;
      padding-bottom: 15px;
      margin: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      color: #b3b0a2;
      text-shadow: 2px 2px 2px black;
      background: rgba(12, 57, 60, 0.7);
      backdrop-filter: blur(7px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);

      img {
        max-width: 50%;
        height: 200px;
      }

      h2 {
        font-weight: bold;
        margin-bottom: 10px;
      }

      h3 {
        font-weight: bold;
        margin-top: 10px;
      }

      h4 {
        font-weight: bold;
      }

      h5 {
        text-align: justify;
        text-indent: 30px;
        margin-top: 10px;
        margin-bottom: 15px;
      }

      button {
        background-color: #293747;
        color: #b3b0a2;
        border: none;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 5px;
      }

      button:hover {
        cursor: pointer;
        filter: brightness(0.9);
      }
    }
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
      text-shadow: 2px 2px 2px black;
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
    background: rgba(35, 35, 36, 0.7);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.9);
    backdrop-filter: blur(7px);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: calc(16px + 2vw);
      margin-bottom: 10px;
    }

    button {
      background-color: #0c393c;
      color: #b3b0a2;
      border: none;
      border-radius: 5px;
      padding: 10px;
      font-family: inherit;
      font-weight: bold;
    }

    button:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }
`;

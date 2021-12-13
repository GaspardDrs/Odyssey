import styled from 'styled-components';

const StyledMain = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  main {
    max-width: 960px;
    margin: 30px auto;
    h1,
    h2 {
      text-align: center;
    }
    label {
      display: block;
      margin-bottom: 0.5em;
    }
    .new-member-form {
      margin: 2em 0 4em 0;
      text-align: center;
    }
    .member-item {
      padding: 0.25em 0;

      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        li {
          list-style: none;
        }
      }
    }
  }
`;

export default StyledMain;

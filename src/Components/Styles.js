import { createGlobalStyle, keyframes } from 'styled-components';

// Define an animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    color: #333; /* Text color */
    background-color: #f4f4f4; /* Background color */
    overflow-x: hidden;
    animation: ${fadeIn} 1s ease-in; /* Apply fade-in animation */
  }

  h1, h2, h3, h4 {
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Additional styling */
  p {
    color: #666; /* Example paragraph text color */
  }

  button {
    background-color: #333;
    color: #f4f4f4;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #555;
    }
  }
`;

  

export default GlobalStyle;

import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.section`
  max-width: 600px;
  margin: 50px auto;
  padding: 0 30px;

  > form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    > button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 1rem;
      transition: background 0.2s;

      :hover {
        background: ${darken(0.05, '#3b9eff')};
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 1rem;
    transition: background 0.2s;

    :hover {
      background: ${darken(0.05, '#f64c75')};
    }
  }
`;

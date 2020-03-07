import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  > form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

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

    > a {
      color: #fff;
      margin-top: 10px;
      padding: 5px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

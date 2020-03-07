import styled from 'styled-components';

export const InputFiled = styled.input`
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: #fff;
  margin: 0 0 10px;

  &.has-error {
    border: 1px solid #ad1d1d;
  }

  &:focus {
    background: rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  + .error {
    align-self: flex-start;
    font-weight: bold;
    color: #ad1d1d;
    margin: 0 0 10px;
  }
`;

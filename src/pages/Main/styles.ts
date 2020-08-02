import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 20px 0 40px 0;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    padding: 5px 10px;
    border-radius: 4px;
    margin-bottom: 20px;
    height: 50px;
    width: 400px;
  }
  strong {
    margin-bottom: 10px;
  }
  button {
    margin-top: 20px;
    padding: 10px;
    height: 50px;
  }
`;

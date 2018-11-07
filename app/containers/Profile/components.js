import styled from 'styled-components';

export const FormWrapper = styled.div`
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  background: #f1f1f1;
`;

export const Label = styled.label`
  background: #ec1752;
  color: #fff;
  padding: 4px 16px;
`;

export const Input = styled.input`
  border: 1px solid #ec1752;
  border-bottom: 3px solid #ec1752;
  width: 100%;
  outline: none;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0);
  text-align: left;
  color: #ec1752;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: space-between;
  align-content: space-between;
`;

export const Title = styled.h1`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 30px;
  margin: auto;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 1.2em;
`;

export const FormGroup = styled.div`
  display: block;
  position: relative;
  height: auto;
  margin-right: 16px;
  margin-left: 16px;
  margin-bottom: 48px;
  width: 515px;
`;

export const FormFooter = styled.div`
  display: block;
  width: 100%;
  padding: 16px;
`;

export const Button = styled.button`
  background: #ec1752;
  padding: 8px 16px;
  color: #fff;
  margin-right: 8px;
  cursor: pointer;
`;

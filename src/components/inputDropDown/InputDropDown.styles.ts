import styled, { css, keyframes } from 'styled-components';

export const InputField = styled.div`
  max-width: 100%;
  position: relative;
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  color: #383e71;
  padding-left: 12px;
  margin-bottom: 8px;
`;

export const StyledInput = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 53px 0 53px;
  border: 1px solid #474747;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  font-style: normal;
  height: 65px;
  font-weight: normal;
  font-family: 'Poppins', sans-serif;
  background-color: transparent;
  color: #474747;

  &:focus {
    outline: none;
    border: 1px solid #474747;
    box-shadow: 0px 0px 7px #47474770;
    z-index: 2;
  }

  ${(props) =>
    props.error &&
    css`
      border: 1px solid #ff377f;
      box-sizing: border-box;
      border-radius: 8px;
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: #f6f6f6;
      cursor: not-allowed;
    `}
`;

export const InputError = styled.span`
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #ff377f;
  padding-left: 12px;
  margin-top: 8px;
`;

export const InputLoadingContainer = styled.div`
  position: absolute;
  top: 24px;
  right: 26px;
`;

export const InputIconContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const InputContainer = styled.div`
  position: relative;
`;

const spinnerBorder = () => keyframes`
    to {
      transform: rotate(360deg);
    }
`;

export const BasicLoading = styled.div`
  border: 3px solid #474747;
  animation: ${spinnerBorder} 0.75s linear infinite;
  border-right-color: transparent;
  border-radius: 50%;
  width: 14px;
  height: 14px;
`;

export const DropDown = styled.div`
  border: 1px solid #474747;
  border-radius: 4px;
  position: absolute;
  width: 100%;
  margin-top: 4px;
  max-height: 300px;
  background-color: #fff;
  overflow-y: auto;
`;

export const DropDownContainer = styled.div`
  padding: 20px;
`;

export const StyledOption = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  cursor: pointer;
  transition: background-color 150ms ease;
  color: #474747;
  font-family: 'Poppins', sans-serif;

  &:hover {
    background-color: #4747470d;
    border-radius: 4px;
  }
  svg {
    margin-right: 8px;
  }
`;

export const ButtonClearContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 18px;
  width: 32px;
  height: 32px;
  right: 20px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 200ms ease-out;

  &:hover {
    background-color: #47474726;
  }
`;

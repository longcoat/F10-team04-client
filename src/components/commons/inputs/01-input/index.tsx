import { UseFormRegisterReturn } from "react-hook-form";
import styled from "@emotion/styled";

interface IInputProps {
  placeholder?: string;
  readOnly?: boolean;
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input01(props: IInputProps) {
  return (
    <Input
      placeholder={props.placeholder}
      type={props.type}
      {...props.register}
      readOnly={props.readOnly}
    />
  );
}

const Input = styled.input`
  background-color: #353535;
  color: white;
  font-size: 23px;
  width: 500px;
  height: 70px;
  margin: 20px 0px;
  border-radius: 5px;
  padding-left: 20px;
  border: none;

  :focus {
    color: white;
    outline: none;
  }
`;

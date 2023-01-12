import { UseFormRegisterReturn } from "react-hook-form";
import styled from "@emotion/styled";

interface IInputProps {
  placeholder?: string;
  readOnly?: boolean;
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input00(props: IInputProps) {
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
   border: 1px solid #8b8b8b;
  border-radius: 16px;
  width: 242px;
  height: 63px;

  :focus {
    color: white;
    outline: none;
  }
`;

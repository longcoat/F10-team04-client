import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().required("이메일은 필수 입력입니다."),
  password: yup.string().required("비밀번호는 필수 입력입니다."),
});

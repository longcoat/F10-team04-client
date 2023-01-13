import * as yup from "yup";

export const schema = yup.object({
  title: yup
    .string()
    .required("제목은 필수 입력입니다."),
  sports: yup
    .string()
    .required("모집운동은 필수 입력입니다."),
    people: yup
    .string()
    .required("모집인원은 필수 입력입니다.")
});

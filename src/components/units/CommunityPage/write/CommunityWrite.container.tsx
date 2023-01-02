import CommunityWriteUI from "./CommunityWrite.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { schema } from "./CommunityWrite.validation";
import { gql } from "@apollo/client";
import { useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function CommunityWrite() {
  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    getValues,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  // 이미지=============
  const [imageUrl, setImageUrl] = useState<any[]>([]);
  const [imageFile, setImageFile] = useState<any[]>([]);
  // const [uploadFile] = useMutation<
  //   Pick<IMutation, "uploadFile">,
  //   IMutationUploadFileArgs
  // >(UPLOAD_FILE);
  // const onChangeImage = async (event: ChangeEvent<HTMLInputElement>) => {
  //   const file: any = event.target.files;
  //   const fileList = [...file];
  //   fileList.map(async (el) => {
  //     const fileReader = new FileReader(); // JS의 내장기능이다.
  //     fileReader.readAsDataURL(el);
  //     fileReader.onload = (data) => {
  //       // file을 다 읽으면 읽어진 결과물이 data로 들어오고 이 함수가 실행된다.
  //       if (typeof data.target?.result === "string") {
  //         const tempUrls = [data.target?.result];
  //         setImageUrl((prev) => [...prev, ...tempUrls]);
  //         // const tempFiles = [...imageFile, file];
  //         setImageFile((prev) => [...prev, el]); // uploadFile API에 보내기 위한 *File*
  //       }
  //     };
  //   });
  // };

  /* 수정화면에 기존 이미지 불러오기 */
  // useEffect(() => {
  //   if (props.data?.fetchUseditem.images?.length) {
  //     setImageUrl(
  //       props.data?.fetchUseditem.images.map(
  //         (el: string) => `https://storage.googleapis.com/${el}`
  //       )
  //     );
  //     setImageFile(props.data?.fetchUseditem.images);
  //   }
  //   // setImageFile(...props.data?.fetchUseditem.images)
  //   // setImageUrl([...props.data?.fetchUseditem.images]);
  // }, [props.data]);
  //===================================
  const onChangeContents = (value: string) => {
    // event가 들어오는 것이 아니다. html의 속성이 아닌 ReactQuill의 속성이기 때문이다. value가 바로 들어온다.
    setValue("contents", value === "<p><br></p>" ? "" : value); // setValue를 사용하면 register로 등록하지 않고 강제로 값을 넣어줄 수 있다.
    // onChange가 됐다고 react-hook-form에 알려주는 기능
    trigger("contents");
  };
  return <CommunityWriteUI register={register} />;
}

import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { checkValidationImage } from "./Uploads01.validation";
import Uploads01UI from "./Uploads01.presenter";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { boardImageState} from "../../../../commons/stores";
import { FETCH_USER_LOGGED_IN } from "../../layout/nav/nav.queries";

export default function Uploads00(props) {
  const [image, setImage] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  useEffect(() =>{
    if(data?.fetchUserLoggedIn.image?.imgUrl) {
      setImage(data?.fetchUserLoggedIn.image?.imgUrl)
    }
  },[data])
console.log(image)
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      setImage(result.data.uploadFile)
      console.log(result.data)
      props.onChangeImage(result.data.uploadFile);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.image}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}

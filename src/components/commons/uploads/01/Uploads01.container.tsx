import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { checkValidationImage } from "./Uploads01.validation";
import Uploads01UI from "./Uploads01.presenter";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { boardImageState} from "../../../../commons/stores";

export default function Uploads01(props) {
  const [image, setImage] = useRecoilState(boardImageState);
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

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
      fileUrl={image}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}

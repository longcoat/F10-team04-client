import { useMutation } from "@apollo/client";
import { ChangeEvent, useEffect, useRef } from "react";
import { checkValidationImage } from "./Uploads01.validation";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { boardImageState} from "../../../../commons/stores";
import Uploads03UI from "./Uploads01.presenter";

export default function Uploads03(props) {
  const [image, setImage] = useRecoilState(boardImageState);
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  useEffect(() =>{
    if(props.data) {
      setImage(props.data.fetchBoard.image?.imgUrl)
    }
  },[props.data])
console.log(image)
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      setImage(result.data.uploadFile)
      props.onChangeImage(result.data.uploadFile);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <Uploads03UI
      fileRef={fileRef}
      fileUrl={image}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}

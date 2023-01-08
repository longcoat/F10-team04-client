import { useMutation } from "@apollo/client";
import { ChangeEvent, useEffect, useRef } from "react";
import { checkValidationImage } from "./Uploads01.validation";
import Uploads01UI from "./Uploads01.presenter";
import { IUploads01Props } from "./Uploads01.types";
import { UPLOAD_FILES } from "./Uploads01.queries";
import { Modal } from "antd";

export default function Uploads02(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFiles] = useMutation(UPLOAD_FILES);
  const files = []

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    files.push(String(event.target.files?.[0].name))
    if (!file) return;

    try {
      const result = await uploadFiles({ variables: { files } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}

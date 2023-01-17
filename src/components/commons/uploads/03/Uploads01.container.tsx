import { useMutation } from "@apollo/client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { checkValidationImage } from "./Uploads01.validation";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { ReviewImagesState } from "../../../../commons/stores";
import Uploads03UI from "./Uploads01.presenter";
import { IUploads01Props, IUploads01UIProps } from "./Uploads01.types";

export default function Uploads03(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <Uploads03UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}

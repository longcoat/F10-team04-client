import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
  BackGround
} from "./Uploads01.styles";
import { IUploads01UIProps } from "./Uploads01.types";

export default function Uploads03UI(props: IUploads01UIProps) {
  return (
    <>
      {props.fileUrl ? (
        <BackGround>
        <UploadImage onClick={props.onClickUpload} src={props.fileUrl} />
        </BackGround>
      ) : (
        <BackGround>
        <UploadButton onClick={props.onClickUpload} type="button">
          <>+</>
        </UploadButton>
        </BackGround>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}

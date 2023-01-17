import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
  BackGround,
} from "./Uploads01.styles";
import { IUploads01UIProps } from "./Uploads01.types";

export default function Uploads03UI(props: any) {
  return (
    <>
      {props.fileUrl ? (
        <BackGround
          style={{
            backgroundImage: `url(https://storage.googleapis.com/${props.fileUrl[0].name})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <UploadButton onClick={props.onClickUpload} type="button">
            <>+</>
          </UploadButton>
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

import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
  ImgBox,
  BackGround,
} from "./Uploads01.styles";
import { IUploads01UIProps } from "./Uploads01.types";

export default function Uploads03UI(props: any) {
  return (
    <>
      {props.fileUrl ? (
        // <BackGround
        //   style={{backgroundImage: `url(${props.fileUrl})`, backgroundSize:"cover", backgroundPosition:"center"}}
        // >
        <UploadImage onClick={props.onClickUpload} src={`${props.fileUrl}`} />
      ) : (
        // </BackGround>
        <>
          <UploadButton onClick={props.onClickUpload} type="button">
            <>+</>
          </UploadButton>
        </>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}

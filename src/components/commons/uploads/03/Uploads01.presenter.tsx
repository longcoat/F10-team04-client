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
        <BackGround 
          style={{backgroundImage: `url(${props.fileUrl})`, backgroundSize:"cover", backgroundPosition:"center"}}
        >
        <UploadButton onClick={props.onClickUpload} type="button">
          <>+</>
        </UploadButton>
        </BackGround>
      ) : (
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

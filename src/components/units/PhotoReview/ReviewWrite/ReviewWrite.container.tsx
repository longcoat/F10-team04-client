import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import ReviewWriteUI from "./ReviewWrite.presenter";
import { CREATE_REVIEW_BOARD, UPLOAD_FILES } from "./ReviewWrite.qurey";


export default function ReviewWrite() {
    const [files, setFiles] = useState(["","",""]);
    const [sideImg, setSideImg] = useState([])
    const [imageStr, setImageStr] = useState([])
    const [content, setContent] = useState("")

    const [uploadFiles] = useMutation(UPLOAD_FILES);
    const [createReviewBoard] = useMutation(CREATE_REVIEW_BOARD);


    const onChangeFileUrls = (fileUrl: string, index: number) => {
        const newFileUrls = [...files];
        newFileUrls[index] = fileUrl;
        setFiles(newFileUrls);
    }
    const onClickSubmit = async () => {
        console.log(files)
    //         try {
    //   const result = await uploadFiles({ variables: { files } });
    //     console.log(result)
    // } catch (error) {
    //     if (error instanceof Error) Modal.error({ content: error.message });
    // }

    }

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    return(
        <ReviewWriteUI 
        sideImg={sideImg}
        files={files}
        imageStr={imageStr}
        onChangeContent={onChangeContent}
        onClickSubmit={onClickSubmit}
        onChangeFileUrls={onChangeFileUrls}
        />
    )
}
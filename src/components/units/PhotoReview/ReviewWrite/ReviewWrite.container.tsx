import { useState } from "react";
import ReviewWriteUI from "./ReviewWrite.presenter";


export default function ReviewWrite() {
    const [fileUrls, setFileUrls] = useState([""]);

    const onChangeFileUrls = (fileUrl: string, index: number) => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        setFileUrls(newFileUrls);
      };

    return(
        <ReviewWriteUI 
        fileUrls={fileUrls}
        onChangeFileUrls={onChangeFileUrls}
        />
    )
}
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { attendListIdState, reviewWriteModalState } from "../../../../commons/stores";
import ReviewWriteUI from "./ReviewWrite.presenter";
import { CREATE_REVIEW_BOARD, UPLOAD_FILES } from "./ReviewWrite.qurey";


export default function ReviewWrite() {
    const [reviewImage, setReviewImage] = useState(["","","","",""]);
    const [sideImg, setSideImg] = useState([])
    const [imageStr, setImageStr] = useState([])
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const [attendListId, setAttendListId] = useRecoilState(attendListIdState);
    const [isModalOpen, setIsModalOpen] = useRecoilState(reviewWriteModalState);


    const [uploadFiles] = useMutation(UPLOAD_FILES);
    const [createReviewBoard] = useMutation(CREATE_REVIEW_BOARD);


    const onChangeFileUrls = (fileUrl: string, index: number) => {
        const newFileUrls = [...reviewImage];
        newFileUrls[index] = fileUrl;
        setReviewImage(newFileUrls);
    }
    const onClickSubmit = async () => {
            try {
      const result = await createReviewBoard({ 
        variables: {
            attendListId: String(attendListId),
            createReviewBoardInput:{
                title,
                content,
                reviewImage
            }
        }
     });
        console.log(result)
        setIsModalOpen(false)
        alert("리뷰등록이 완료되었습니다.")
    } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
    }

    }

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    return(
        <ReviewWriteUI 
        sideImg={sideImg}
        files={reviewImage}
        imageStr={imageStr}
        onChangeContent={onChangeContent}
        onClickSubmit={onClickSubmit}
        onChangeFileUrls={onChangeFileUrls}
        />
    )
}
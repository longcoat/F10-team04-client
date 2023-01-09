import { useQuery } from "@apollo/client";
import { useState } from "react";
import ReviewUI from "./Review.presenter";
import { FETCH_ALL_REVIEW_BOARDS, FETCH_ALL_REVIEW_BOARD_IMAGES } from "./Review.query";

export default function Review() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data } = useQuery(FETCH_ALL_REVIEW_BOARD_IMAGES);
    const { data: aaa } = useQuery(FETCH_ALL_REVIEW_BOARDS);
    console.log(aaa)

    console.log(data)
    const onClickMore = () =>{
        setIsModalOpen(true);
    }
    const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    return(
        <ReviewUI
        isModalOpen={isModalOpen}
        onClickMore={onClickMore}
        handleOk={handleOk}
        handleCancel={handleCancel}
        />
    )
}
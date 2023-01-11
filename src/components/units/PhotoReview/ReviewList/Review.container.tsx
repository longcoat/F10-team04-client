import { useQuery } from "@apollo/client";
import { useState } from "react";
import ReviewUI from "./Review.presenter";
import { FETCH_ALL_REVIEW_BOARDS} from "./Review.query";

export default function Review() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviewId, setReviewId] = useState("")

    const { data } = useQuery(FETCH_ALL_REVIEW_BOARDS);

    const onClickMore = (reviewBoardId) => () =>{
      setReviewId(reviewBoardId)
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
        data={data}
        reviewId={reviewId}
        isModalOpen={isModalOpen}
        onClickMore={onClickMore}
        handleOk={handleOk}
        handleCancel={handleCancel}
        />
    )
}
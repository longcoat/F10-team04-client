import { useQuery } from "@apollo/client";
import { useState } from "react";
import ReviewUI from "./Review.presenter";
import { FETCH_ALL_REVIEW_BOARDS, FETCH_ALL_REVIEW_BOARD_IMAGE, FETCH_ALL_REVIEW_BOARD_IMAGES} from "./Review.query";

export default function Review() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviewId, setReviewId] = useState("")


    const { data } = useQuery(FETCH_ALL_REVIEW_BOARDS);
    const { data:images } = useQuery(FETCH_ALL_REVIEW_BOARD_IMAGES);
    const { data:image } = useQuery(FETCH_ALL_REVIEW_BOARD_IMAGE, {
      variables: { reviewBoardId: String(data?.fetchAllReviewBoards.id) },
    });
    console.log(images)


 
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
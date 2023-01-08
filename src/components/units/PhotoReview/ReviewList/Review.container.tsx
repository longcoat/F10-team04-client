import { useState } from "react";
import ReviewUI from "./Review.presenter";

export default function Review() {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
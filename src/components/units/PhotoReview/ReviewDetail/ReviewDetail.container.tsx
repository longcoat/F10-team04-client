import { useQuery } from "@apollo/client";
import ReviewWriteUI from "./ReviewDetail.presenter";
import { FETCH_ALL_REVIEW_BOARD_IMAGE, FETCH_REVIEW_BOARD } from "./ReviewDetail.query";

export default function ReviewDetail(props) {
    const image = []
    const { data } = useQuery(FETCH_REVIEW_BOARD, {
        variables: {
          reviewBoardId: String(props.reviewId),
        },
      });

      const { data:images } = useQuery(FETCH_ALL_REVIEW_BOARD_IMAGE, {
        variables: { reviewBoardId: String(props.reviewId) },
      });

      images?.fetchReviewBoardImage.forEach((el) => {
        if(el.isMain === true) {
          image.unshift(el.imgUrl)
        }else if(el.imgUrl !== "" && el.isMain === false) {
          image.push(el.imgUrl)
        }
      })
      console.log(image)
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <ReviewWriteUI
        settings={settings}
        image={image}
        data={data}
        />
    )
}
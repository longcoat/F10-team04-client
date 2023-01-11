import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { IMutation, IMutationLikeReviewBoardArgs, IQuery, IQueryFetchAllReviewBoardsArgs, IQueryFetchReviewBoardArgs, IQueryFetchReviewBoardImageArgs } from "../../../../commons/types/generated/types";
import ReviewWriteUI from "./ReviewDetail.presenter";
import { FETCH_ALL_REVIEW_BOARD_IMAGE, FETCH_REVIEW_BOARD, LiKE_REVIEW_BOARD } from "./ReviewDetail.query";

export default function ReviewDetail(props) {
    const image = []
    const { data } = useQuery<
    Pick<IQuery, "fetchReviewBoard">,
    IQueryFetchReviewBoardArgs
  >(FETCH_REVIEW_BOARD, {
        variables: {
          reviewBoardId: String(props.reviewId),
        },
      });
      console.log(data, props.reviewId)

      const { data:images } = useQuery<
      Pick<IQuery, "fetchReviewBoardImage">,
      IQueryFetchReviewBoardImageArgs
    >(FETCH_ALL_REVIEW_BOARD_IMAGE, {
        variables: { reviewBoardId: String(props.reviewId) },
      });

      const [likeReviewBoard] = useMutation<
      Pick<IMutation, "likeReviewBoard">,
      IMutationLikeReviewBoardArgs
    >(LiKE_REVIEW_BOARD);

      images?.fetchReviewBoardImage.forEach((el) => {
        if(el.isMain === true) {
          image.unshift(el.imgUrl)
        }else if(el.imgUrl !== "" && el.isMain === false) {
          image.push(el.imgUrl)
        }
      })
      console.log(image)

      const onClickHeart = async () => {
        try {
          const result = await likeReviewBoard({ 
            variables: {
              reviewBoardId : String(data.fetchReviewBoard.id)
            },refetchQueries: [
              {
                query: FETCH_REVIEW_BOARD,
                variables: { reviewBoardId: String(props.reviewId) },
              },
            ],
         });
         console.log(result)
            alert("리뷰등록이 완료되었습니다.")
        } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
        }
      }

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <ReviewWriteUI
        onClickHeart={onClickHeart}
        settings={settings}
        image={image}
        data={data}
        />
    )
}
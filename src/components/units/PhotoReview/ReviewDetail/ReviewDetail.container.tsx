import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { LoggedInUserId, reviewWriteModalState, ReviewDetailState } from "../../../../commons/stores";
import { IMutation, IMutationDeleteReviewBoardArgs, IMutationLikeReviewBoardArgs, IQuery, IQueryFetchAllReviewBoardsArgs, IQueryFetchReviewBoardArgs, IQueryFetchReviewBoardImageArgs } from "../../../../commons/types/generated/types";
import { FETCH_ALL_REVIEW_BOARDS } from "../ReviewList/Review.query";
import ReviewWriteUI from "./ReviewDetail.presenter";
import { DELETE_REVIEW_BOARD, FETCH_ALL_REVIEW_BOARD_IMAGE, FETCH_REVIEW_BOARD, LiKE_REVIEW_BOARD } from "./ReviewDetail.query";

export default function ReviewDetail(props) {
  const [isModalOpen, setIsModalOpen] = useRecoilState(ReviewDetailState);
  const [editModal, setEditModal] = useRecoilState(reviewWriteModalState);
  const [id, setId] = useRecoilState(LoggedInUserId);
    const image = []

    const [deleteReviewBoard] = useMutation<
    Pick<IMutation, "deleteReviewBoard">,
    IMutationDeleteReviewBoardArgs
  >(DELETE_REVIEW_BOARD);

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

      const onClickDelete = (reviewBoardId) => () => {
        try {
          void deleteReviewBoard({
            variables: {
              reviewBoardId: String(reviewBoardId),
            },
            refetchQueries: [{ query: FETCH_ALL_REVIEW_BOARDS }],
          });
          props.setIsModalOpen((prev) => !prev);
        } catch (error) {
          if (error instanceof Error) alert(error.message);
        }
    
      }
      const onClickEdit= () => {
        // setIsModalOpen(false)
        setEditModal(true)
      }
      const onCancel = () => {
        setEditModal(false)
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
        id={id}
        onClickEdit={onClickEdit}
        onCancel={onCancel}
        editModal={editModal}
        onClickDelete={onClickDelete}
        onClickHeart={onClickHeart}
        settings={settings}
        image={image}
        data={data}
        />
    )
}
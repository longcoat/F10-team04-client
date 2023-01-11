import { useQuery } from "@apollo/client";
import ReviewCommentListUI from "./ReviewCommentList.presenter";
import { FETCH_REVIEW_COMMENTS } from "./ReviewCommentList.query";

export default function ReviewCommentList(props){

    const { data, fetchMore } = useQuery(FETCH_REVIEW_COMMENTS, {
                 variables: { reviewBoardId: String(props.id) },
             });

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchReviewComments.length / 9) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchReviewComments == undefined) {
          return {
            fetchReviewComments: [...prev.fetchReviewComments],
          };
        }
        return {
            fetchReviewComments: [
            ...prev.fetchReviewComments,
            ...fetchMoreResult?.fetchReviewComments,
          ],
        };
      },
    });
  };
    return(
        <ReviewCommentListUI 
        onLoadMore={onLoadMore}
        data={data}
        />
    )
}
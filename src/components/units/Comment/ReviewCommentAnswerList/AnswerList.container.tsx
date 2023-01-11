import { useQuery } from "@apollo/client";
import { IQuery, IQueryFetchReviewNestedCommentsArgs } from "../../../../commons/types/generated/types";
import AnswerListUI from "./AnswerList.presenter";
import { FETCH_REVIEW_NESTED_COMMENTS } from "./AnswerList.query";

export default function AnswerList(props) {


    const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchReviewNestedComments">,
    IQueryFetchReviewNestedCommentsArgs
  >(FETCH_REVIEW_NESTED_COMMENTS, {
    variables: { reviewCommentId: String(props.el.id) },
  });

  console.log(data)

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchReviewNestedComments.length / 9) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchReviewNestedComments)
          return {
            fetchReviewNestedComments: [
              ...prev.fetchReviewNestedComments,
            ],
          };
        return {
            fetchReviewNestedComments: [
            ...prev.fetchReviewNestedComments,
            ...fetchMoreResult.fetchReviewNestedComments,
          ],
        };
      },
    });
  };
    return(
        <AnswerListUI
        data={data}
        onLoadMore={onLoadMore}
        />
    )
}
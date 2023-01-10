import { useQuery } from "@apollo/client";
import AnswerListUI from "./AnswerList.presenter";
import { FETCH_NESTED_COMMENTS } from "./AnswerList.query";

export default function AnswerList(props) {


    const { data, fetchMore } = useQuery(FETCH_NESTED_COMMENTS, {
    variables: { commentId: String(props.el.id) },
  });

  console.log(data)

  const onLoadMore = () => {
    if (!data) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchNestedComments.length / 9) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchNestedComments)
          return {
            fetchNestedComments: [
              ...prev.fetchNestedComments,
            ],
          };
        return {
            fetchNestedComments: [
            ...prev.fetchNestedComments,
            ...fetchMoreResult.fetchNestedComments,
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
import InfiniteScroll from "react-infinite-scroller";
import AnswerListItem from "./AnswerList.presenterItem";

export default function AnswerListUI(props: any) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchReviewNestedComments.map((el: any) => (
          <AnswerListItem
            key={el._id}
            el={el}
            onClickDelete={props.onClickDelete}
          />
        ))}
      </InfiniteScroll>
    </>
  );
}

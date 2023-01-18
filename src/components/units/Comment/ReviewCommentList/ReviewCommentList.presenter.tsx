import InfiniteScroll from "react-infinite-scroller";
import ReviewCommentListItem from "./ReviewCommentList.presenterItem";

export default function ReviewCommentListUI(props: any) {
  return (
    <>
      {/* <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={true}
      > */}
      <div>
        {props.data?.fetchReviewComments.map((el: any) => (
          <ReviewCommentListItem
            key={el.id}
            el={el}
            onClickDelete={props.onClickDelete}
          />
        ))}
      </div>
      {/* </InfiniteScroll> */}
    </>
  );
}

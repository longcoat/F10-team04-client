import InfiniteScroll from "react-infinite-scroller";
import ReviewCommentListItem from "./ReviewCommentList.presenterItem";

export default function ReviewCommentListUI(props){

    return(
        <>
         <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true} useWindow={true}>
        {props.data?.fetchReviewComments.map((el) => (
          <ReviewCommentListItem
            key={el.id}
            el={el}
            onClickDelete={props.onClickDelete}
          />
        ))}
      </InfiniteScroll>
        </>
    )
}
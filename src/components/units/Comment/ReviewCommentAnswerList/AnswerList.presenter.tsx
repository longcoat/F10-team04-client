import InfiniteScroll from "react-infinite-scroller";
import AnswerListItem from "./AnswerList.presenterItem";

export default function AnswerListUI(props) {
    return(
        <>
        <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchReviewNestedComments.map((el) => (
          <AnswerListItem key={el._id} el={el} onClickDelete={props.onClickDelete}/>
        ))}
      </InfiniteScroll>
      </>
    )
}
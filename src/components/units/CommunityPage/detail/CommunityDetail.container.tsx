import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommunityDetailUIPage from "./CommunityDetail.presenter";
import { FETCH_BOARD } from "./CommunityDetail.queries";

export default function CommunityDetailPage(props) {
  const router = useRouter()
  const { data } = useQuery(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(props.boardId),
      },
    }
  );
  console.log(props.boardId)
  return <CommunityDetailUIPage 
  data={data}  />;
}

import { HeartOutlined, SmileOutlined } from '@ant-design/icons'
import ReviewCommentWrite from '../../Comment/ReviewComment/reviewComment.container'
import * as S from './ReviewDetail.styles'

export default function ReviewWriteUI() {
    return(
        <S.Wrapper>
            <S.LeftSide></S.LeftSide>
            <S.RightSide>
                <S.DDD>
                <S.UserWrap>
                <SmileOutlined style={{paddingRight:"10px"}}/>
                <S.Name>이름</S.Name>
                </S.UserWrap>
                <S.Contents>
                    <S.Remark>remarkremarkremarkremarkremark</S.Remark>
                    <S.Content>contentcontentcontentcontentcontent</S.Content>
                    <S.CreatedAt>1분전</S.CreatedAt>
                    --댓글 리스트 무한 스크롤--
                </S.Contents>
                </S.DDD>
                <S.IconWrap>
                    <S.HeartLine>
                    <HeartOutlined />
                    </S.HeartLine>
                    <S.CountLine>좋아요 수</S.CountLine>
                </S.IconWrap>
                <ReviewCommentWrite />
            </S.RightSide>
        </S.Wrapper>
    )
}
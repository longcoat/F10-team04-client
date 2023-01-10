import { HeartOutlined, SmileOutlined } from '@ant-design/icons'
import { timeForToday } from '../../../../commons/library/utils2'
import { getDate } from '../../../../commons/library/utils'
import ReviewCommentWrite from '../../Comment/ReviewComment/reviewComment.container'
import * as S from './ReviewDetail.styles'
import ReviewCommentList from '../../Comment/ReviewCommentList/ReviewCommentList.container'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ReviewWriteUI(props) {
    return(
        <S.Wrapper>
            <S.LeftSide
            // style={{backgroundImage: `url(${props.image[0]})`}}
            >
                <S.CusSlider {...props.settings}>
                {props.image
                  .map((el: string) => (
                    <S.Div     key={el}>
                    <S.Img
                
                      src={`${el}`}
                      width="100%"
                      height="100%"
                    />
                    </S.Div>
                    // <div key={el}
                    // style={{backgroundImage:`url('${el}')`, backgroundColor:"#ffffff"}}
                    // >{el}</div>
                  ))}
                </S.CusSlider>
            </S.LeftSide>
            <S.RightSide>
                <S.DDD>
                <S.UserWrap>
                <SmileOutlined style={{paddingRight:"10px"}}/>
                <S.Name>{props.data?.fetchReviewBoard.user.nickname}</S.Name>
                </S.UserWrap>
                <S.Contents>
                    <S.Content>{props.data?.fetchReviewBoard.content}</S.Content>
                    <S.CreatedAt>{getDate(props.data?.fetchReviewBoard.createdAt)}</S.CreatedAt>
               <ReviewCommentList id={props.data?.fetchReviewBoard.id}/>
                </S.Contents>
                </S.DDD>
                <S.IconWrap>
                    <S.HeartLine>
                    <HeartOutlined />
                    <S.CountLine>{props.data?.fetchReviewBoard.like}</S.CountLine>
                    </S.HeartLine>
                </S.IconWrap>
                <ReviewCommentWrite id={props.data?.fetchReviewBoard.id}/>
            </S.RightSide>
        </S.Wrapper>
    )
}
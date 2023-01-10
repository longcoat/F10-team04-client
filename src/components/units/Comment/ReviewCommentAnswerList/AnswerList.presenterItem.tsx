import { timeForToday } from '../../../../commons/library/utils2'
import * as S from './AnswerList.styles'

export default function AnswerListItem(props) {
    return(
        <>
                 <S.Wrap>
                <S.IconWrap>

                </S.IconWrap>
                <S.ContentWrap>
                    <S.firstLine>
                        <S.user>{props.el.user.nickname}</S.user>
                        <S.content>{props.el.nestedComment}</S.content>
                    </S.firstLine>
                    <S.SecondLine>
                        <S.Date>{timeForToday(props.el.createdAt)}</S.Date>
                        {/* <S.ReplyBtn onClick={onClickAnswer}>답글 달기</S.ReplyBtn> */}
                    </S.SecondLine>
                </S.ContentWrap>           
            </S.Wrap>
        </>
    )
}
import { toFormData } from 'axios'
import { useState } from 'react';
import { timeForToday } from '../../../../commons/library/utils2'
import AnswerList from '../ReviewCommentAnswerList/AnswerList.container';
import CommentAnswerWriter from '../ReviewCommentAnswerWrite/AnswerWrite.container';
import * as S from './ReviewCommentList.styles'

export default function ReviewCommentListItem(props){
    const [isActive, setIsActive] = useState(false);

    const onClickAnswer = () => {
        setIsActive(prev => !prev)
    }
    return(
        <div key={props.key}>
            <S.Wrap>
                <S.IconWrap>

                </S.IconWrap>
                <S.ContentWrap>
                    <S.firstLine>
                        <S.user>{props.el.user.nickname}</S.user>
                        <S.content>{props.el.reviewComment}</S.content>
                    </S.firstLine>
                    <S.SecondLine>
                        <S.Date>{timeForToday(props.el.createdAt)}</S.Date>
                        <S.ReplyBtn onClick={onClickAnswer}>답글 달기</S.ReplyBtn>
                    </S.SecondLine>
                </S.ContentWrap>          
            </S.Wrap>
            {isActive && <CommentAnswerWriter el={props.el} />}
            <AnswerList el={props.el}/> 
        </div>
    )
}
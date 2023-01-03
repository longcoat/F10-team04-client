import { MessageOutlined } from '@ant-design/icons'
import * as S from './reviewComment.styles'

export default function ReviewCommentWriteUI() {
    return(
        <S.Wrapper>
            <MessageOutlined style={{fontSize:"25px"}}/>
            <S.Input
            placeholder='댓글 달기...'
            ></S.Input>
            <S.Btn>댓글 추가</S.Btn>
        </S.Wrapper>
    )
}
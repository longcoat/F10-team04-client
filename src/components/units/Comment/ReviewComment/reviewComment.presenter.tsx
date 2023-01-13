import { MessageOutlined } from '@ant-design/icons'
import * as S from './reviewComment.styles'

export default function ReviewCommentWriteUI(props) {
    return(
        <S.Wrapper>
            <MessageOutlined style={{fontSize:"25px"}}/>
            <S.Input
            onChange={props.onChangeContent}
            placeholder='댓글 달기...'
            value={props.content}
            ></S.Input>
            <S.Btn onClick={props.onClickSubmit}>댓글 추가</S.Btn>
        </S.Wrapper>
    )
}
import { SmileOutlined } from '@ant-design/icons'
import * as S from './ReviewWrite.styles'
import { v4 as uuidv4 } from "uuid";
import Uploads03 from '../../../commons/uploads/03/Uploads01.container';

export default function ReviewWriteUI(props) {
    return (
        <>
         <S.Wrapper>
            {/* <S.LeftSide></S.LeftSide> */}
            {props.files.map((el, index) => (
              <Uploads03
                key={uuidv4()}
                files={props.files}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
            <S.RightSide>
                <S.DDD>
                <S.UserWrap>
                <SmileOutlined style={{paddingRight:"10px"}}/>
                <S.Name>이름</S.Name>
                </S.UserWrap>
                <S.Contents>
                    <S.Content type='text' 
                    onChange={props.onChangeContent}
                    placeholder='내용을 입력하세요.'/>
                </S.Contents>
                </S.DDD>
                <button onClick={props.onClickSubmit}>등록</button>
            </S.RightSide>
        </S.Wrapper>
        </>
    )
}
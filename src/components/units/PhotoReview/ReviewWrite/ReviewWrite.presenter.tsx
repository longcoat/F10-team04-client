import { SmileOutlined } from '@ant-design/icons'
import * as S from './ReviewWrite.styles'
import { v4 as uuidv4 } from "uuid";
import Uploads03 from '../../../commons/uploads/03/Uploads01.container';


export default function ReviewWriteUI(props) {
    return (
        <>
         <S.Wrapper>
            {/* <S.LeftSide></S.LeftSide> */}
            {props.fileUrls.map((el, index) => (
            <Uploads03
              key={uuidv4()}
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
                    <S.Content>contentcontentcontentcontentcontent</S.Content>
                </S.Contents>
                </S.DDD>
            </S.RightSide>
        </S.Wrapper>
        </>
    )
}
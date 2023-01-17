import { SmileOutlined } from "@ant-design/icons";
import * as S from "./ReviewWrite.styles";
import { v4 as uuidv4 } from "uuid";
import Uploads03 from "../../../commons/uploads/03/Uploads01.container";

export default function ReviewWriteUI(props: any) {
  return (
    <>
      <S.Wrapper>
        {/* <S.LeftSide></S.LeftSide> */}
        <S.Img
          style={{
            backgroundImage: `url(${props.files[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></S.Img>
        <S.imagesBox>
          {props.files.map((el, index) => (
            <Uploads03
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.imagesBox>
        <S.RightSide>
          <S.DDD>
            <S.UserWrap>
              <SmileOutlined style={{ paddingRight: "10px" }} />
              <S.Name>이름</S.Name>
            </S.UserWrap>
            <S.Contents>
              <S.Content
                type="text"
                onChange={props.onChangeContent}
                placeholder="내용을 입력하세요."
              />
            </S.Contents>
          </S.DDD>
          <S.ButtonWrap>
            <S.Button onClick={props.onClickCs}>취소</S.Button>
            <S.Button onClick={props.onClickSubmit}>등록</S.Button>
          </S.ButtonWrap>
        </S.RightSide>
      </S.Wrapper>
    </>
  );
}

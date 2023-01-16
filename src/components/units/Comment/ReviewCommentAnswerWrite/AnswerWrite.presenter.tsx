import * as S from "./AnswerWrite.styles";

export default function AnswerWriteUI(props: any) {
  return (
    <>
      {props.isActive ? (
        <S.Back>
          <S.Wrapper>
            <S.contentsWrap>
              <S.Contents
                onChange={props.onChangeAnswer}
                placeholder="답글 달기..."
                value={props.contents}
              ></S.Contents>
              <S.Count_Btn>
                <S.Submit onClick={props.onClickWrite}>답글 등록</S.Submit>
              </S.Count_Btn>
            </S.contentsWrap>
          </S.Wrapper>
        </S.Back>
      ) : (
        ""
      )}
    </>
  );
}

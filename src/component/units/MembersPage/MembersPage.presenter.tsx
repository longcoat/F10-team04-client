import { SearchOutlined } from "@ant-design/icons";
import UserCard from "../../commons/userCard/01-userCard";
import * as S from "./MembersPage.styles";

export default function MembersUi(props) {
  return (
    <S.Wrapper>
      <S.SearchWrap>
        <S.SelectSide>
          <S.Category>
            <S.Ctg_title>지역</S.Ctg_title>
            <S.Select>
              <option>서울특별시</option>
              <option>세종특별시</option>
              <option>인천광역시</option>
              <option>대전광역시</option>
              <option>대구광역시</option>
              <option>부산광역시</option>
              <option>울산광역시</option>
              <option>광주광역시</option>
            </S.Select>
          </S.Category>
          <S.Category>
            <S.Ctg_title>운동 종목</S.Ctg_title>
            <S.Select>
              <option>런닝</option>
              <option>걷기</option>
              <option>풋살</option>
              <option>농구</option>
              <option>배드민턴</option>
              <option>테니스</option>
              <option>수영</option>
              <option>족구</option>
              <option>탁구</option>
              <option>야구</option>
            </S.Select>
          </S.Category>
          <S.Category>
            <S.Ctg_title>나이</S.Ctg_title>
            <S.Select>
              <option>10대</option>
              <option>20대</option>
              <option>30대</option>
              <option>40대</option>
              <option>50대</option>
              <option>60대 이상</option>
            </S.Select>
          </S.Category>
          <S.Category>
            <S.Ctg_title>운동 레벨</S.Ctg_title>
            <S.Select>
              <option>Beginner</option>
              <option>Amateur</option>
              <option>Pro</option>
            </S.Select>
          </S.Category>
        </S.SelectSide>
        <S.ButtonSide>
          <S.Button>검색하기</S.Button>
        </S.ButtonSide>
      </S.SearchWrap>
      {props.isNo ? (
        <S.NoSearch>
          <S.IconBox>
            <SearchOutlined style={{ color: "white", fontSize: "180px" }} />
          </S.IconBox>
          <S.H1>관련된 멤버가 없습니다.</S.H1>
          <S.P>다른 키워드로 검색해보세요!</S.P>
        </S.NoSearch>
      ) : (
        <S.ResultWrap>
          <S.ResultTitle>검색결과</S.ResultTitle>
          <S.Items>
            {props.data?.fetchUsers.map((el) => (
              <UserCard key={el.id} el={el} />
            ))}
          </S.Items>
        </S.ResultWrap>
      )}
    </S.Wrapper>
  );
}

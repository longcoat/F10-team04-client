import { SearchOutlined } from "@ant-design/icons";
import UserCard from "../../commons/userCard/01-userCard";
import * as S from "./MembersPage.styles";

const AreaOption = [
  {
    value: "",
    label: "모든 지역",
  },
  {
    value: "서울특별시",
    label: "서울특별시",
  },
  {
    value: "인천광역시",
    label: "인천광역시",
  },
  {
    value: "세종특별자치시",
    label: "세종특별자치시",
  },
  {
    value: "대전광역시",
    label: "대전광역시",
  },
  {
    value: "부산광역시",
    label: "부산광역시",
  },
  {
    value: "대구광역시",
    label: "대구광역시",
  },
  {
    value: "광주광역시",
    label: "광주광역시",
  },
  {
    value: "울산광역시",
    label: "울산광역시",
  },
  {
    value: "제주특별자치도",
    label: "제주특별자치도",
  },
];
const AgeOption = [
  {
    value: "",
    label: "모든 나이대",
  },
  {
    value: "10대",
    label: "10대",
  },
  {
    value: "20대",
    label: "20대",
  },
  {
    value: "30대",
    label: "30대",
  },
  {
    value: "40대",
    label: "40대",
  },
  {
    value: "50대",
    label: "50대",
  },
  {
    value: "60대 이상",
    label: "60대 이상",
  },
];
const FavOption = [
  {
    value: "",
    label: "모든 운동",
  },
  {
    value: "런닝",
    label: "런닝",
  },
  {
    value: "걷기",
    label: "걷기",
  },
  {
    value: "풋살",
    label: "풋살",
  },
  {
    value: "배드민턴",
    label: "배드민턴",
  },
  {
    value: "테니스",
    label: "테니스",
  },
  {
    value: "수영",
    label: "수영",
  },
  {
    value: "족구",
    label: "족구",
  },
  {
    value: "탁구",
    label: "탁구",
  },
  {
    value: "야구",
    label: "야구",
  },
];
const levelOption = [
  {
    value: "",
    label: "모든 레벨",
  },
  {
    value: "Beginner",
    label: "Beginner",
  },
  {
    value: "Amateur",
    label: "Amateur",
  },
  {
    value: "Pro",
    label: "Pro",
  },
];

export default function MembersUi(props) {
  return (
    <S.Wrapper>
      <S.SearchWrap>
        <S.SelectSide>
          <S.Category>
            <S.Ctg_title>지역</S.Ctg_title>
            <S.Selectbar>
              <S.SelectArea
                defaultValue={AreaOption[0]}
                style={{ width: "100%", borderRadius: "10px" }}
                options={AreaOption}
              />
            </S.Selectbar>
          </S.Category>
          <S.Category>
            <S.Ctg_title>최애 운동</S.Ctg_title>
            <S.Selectbar>
              <S.SelectArea
                defaultValue={FavOption[0]}
                style={{ width: "100%", borderRadius: "10px" }}
                options={FavOption}
              />
            </S.Selectbar>
          </S.Category>
          <S.Category>
            <S.Ctg_title>나이</S.Ctg_title>
            <S.Selectbar>
              <S.SelectArea
                defaultValue={AgeOption[0]}
                style={{ width: "100%", borderRadius: "10px" }}
                options={AgeOption}
              />
            </S.Selectbar>
          </S.Category>
          <S.Category>
            <S.Ctg_title>운동 레벨</S.Ctg_title>
            <S.Selectbar>
              <S.SelectArea
                defaultValue={levelOption[0]}
                style={{ width: "100%", borderRadius: "10px" }}
                options={levelOption}
              />
            </S.Selectbar>
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

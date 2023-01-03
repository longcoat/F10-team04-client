import { HomeFilled } from '@ant-design/icons'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import usePreventBodyScroll from '../../../commons/mouseScroll/mouseScroll'
import PhotoReviewCard from '../../../commons/photoReviewCard'
import * as S from './Review.styles'

let a = [{
    h: "축구",
    a: "10대",
    l: "서울",
    n: "가" 
               }, {
    h: "야구",
    a: "20대",
    l: "대구",
    n: "라" 
               }, {
    h: "농구",
    a: "30대",
    l: "부산",
    n: "다" 
               },{
    h: "축구",
    a: "20대",
    l: "대전",
    n: "라" 
               },{
    h: "축구",
    a: "30대",
    l: "포항",
    n: "차" 
               },{
    h: "축구",
    a: "10대",
    l: "대전",
    n: "아" 
               },{
    h: "축구",
    a: "20대",
    l: "울산",
    n: "자" 
               }]

export default function ReviewUI() {
    const { disableScroll, enableScroll } = usePreventBodyScroll();

    return(
        <>
        <S.Wrapper>
            <S.SideBar>
                <S.Logo>Rungether</S.Logo>
                <S.DDD>
                <S.ItemWrap>
                    <HomeFilled style={{fontSize: "20px"}}/>
                    <S.Item>HOME</S.Item>
                </S.ItemWrap>
                <S.ItemWrap>
                    <HomeFilled  style={{fontSize: "20px"}}/>
                    <S.Item>팔로잉</S.Item>
                </S.ItemWrap>
                <S.ItemWrap>
                    <HomeFilled  style={{fontSize: "20px"}}/>
                    <S.Item>팔로워</S.Item>
                </S.ItemWrap>
                </S.DDD>
            </S.SideBar>
      
                <S.Contents onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
                <ScrollMenu
                 onWheel={onWheel}
                >
                    {a.map((el) => (
                          
                            <PhotoReviewCard  key={el.n} el={el}/>
                    
                    ))}
                    </ScrollMenu>
                    </S.Contents>
        </S.Wrapper>
        </>
    )
}
function onWheel(apiObj, ev): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
  
    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }
  
    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  }
  
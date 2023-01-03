import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { FETCH_USERS } from "./MebersPage.query";
import MembersUi from "./MembersPage.presenter";

export default function Members() {
  const [isNo, setIsNo] = useState(false);
  const [Lo, setLo] = useState("")
  const [age, setAge] = useState("")
  const [level, setLevel] = useState("")
  const [fav, setFav] = useState("")
  const [Lo_R, setLo_R] = useState("")
  const [age_R, setAge_R] = useState("")
  const [level_R, setLevel_R] = useState("")
  const [fav_R, setFav_R] = useState("")
  // const { data } = useQuery(FETCH_USERS);
  const result = []

  // console.log(data);
  const onChangeLevel = (e) => {
    setLevel(e)
  }
  const onChangeLo = (e) => {
    setLo(e)
  }
  const onChangeAge = (e) => {
    setAge(e)
  }
  const onChangeFav = (e) => {
    setFav(e)
  }
  const onClickBtn = () => {
    setLo_R(Lo)
    setAge_R(age)
    setLevel_R(level)
    setFav_R(fav)
    if(result.length === 0) {
      setIsNo(true)
    }
}
  // data?.forEach((el)=> {
  //   if(el.h.includes(Lo_R) === true &&
  //     el.l.includes(age_R) === true &&
  //     el.a.includes(level_R) === true &&
  //     el.a.includes(fav_R) === true
  //     ) {
  //         result.push(el) 
  //     }
  // })

  return <MembersUi 
  isNo={isNo} 
  // data={data}
  onChangeLevel={onChangeLevel}
  onChangeLo={onChangeLo}
  onChangeAge={onChangeAge}
  onChangeFav={onChangeFav}
  onClickBtn={onClickBtn}
  />;
}

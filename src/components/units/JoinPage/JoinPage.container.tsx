import * as S from "./JoinPage.styles";
import { useRouter } from "next/router";
import { useState } from "react";
import JoinPageUi from "./JoinPage.presenter";
import { CHECK_NICKNAME, CHECK_TOKEN_EMAIL, CREATE_USER, SEND_TOKEN_TO_EMAIL } from "./joinPage.query";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";

export default function JoinPageA() {
  const router = useRouter()
  const [emailAct, setEmailAct] = useState(false)
  const [pwAct, setPwAct] = useState(false)
  const [pwCon, setPwCon] = useState(false)
  const [NicknameAct, setNickNameAct] = useState(false)
  const [pwAct1, setPwAct1] = useState(false)
  const [pwAct2, setPwAct2] = useState(false)
  const [pwAct3, setPwAct3] = useState(false)
  const [pwAct4, setPwAct4] = useState(false)
  const [nameAct, setNameAct] = useState(false)
  const [genderAct, setGenderAct] = useState(false)
  const [levelAct, setLevelAct] = useState(false)
  const [clickLeft, setClickLeft] = useState(false)
  const [clickRight, setClickRight] = useState(false)
  const [level1, setLevel1] = useState(false)
  const [level2, setLevel2] = useState(false)
  const [level3, setLevel3] = useState(false)
  const [sendEmail, setSendEmail] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCPassword] = useState("")
  const [nickname, setNickname] = useState("")
  const [name, setName] = useState("")
  const [age, setAge] = useState("10대")
  const [region, setRegion] = useState("서울특별시")
  const [prefer, setPrefer] = useState("런닝")
  const [gender, setGender] = useState("")
  const [grade, setGrade] = useState("")
  const [image, setImage] = useState("")
  const [token, setToken] = useState("")

const [createUser] = useMutation(CREATE_USER)
const [sendTokenToEmail] = useMutation(SEND_TOKEN_TO_EMAIL);
const [checkTokenEmail] = useMutation(CHECK_TOKEN_EMAIL);
const [checkNickName] = useMutation(CHECK_NICKNAME);

  const onChangeEmailToken = (e) => {
    setToken(e.target.value)
  }
  
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
    if(e.target.value !== "") {
      setEmailAct(true)
    }else{
      setEmailAct(false)
    }
  }
  const onChangePwCon = (e) => {
    setCPassword(e.target.value)
    if(e.target.value !== "") {
      setPwCon(true)
    }else{
      setPwCon(false)
    }
  }
  const onChangeNickName = (e) => {
    setNickname(e.target.value)
    if(e.target.value !== "") {
      setNickNameAct(true)
    }else{
      setNickNameAct(false)
    }
  }
  const onChangePw = (e) => {
    setPassword(e.target.value)
    if(e.target.value !== "") {
      setPwAct(true)
    }else{
      setPwAct(false)
    }
   if((e.target.value).match(/^(?=.*[a-zA-Z]).{0,16}$/)){
    setPwAct1(true)
   }else{
    setPwAct1(false)
   }
   if((e.target.value).match(/^(?=.*[0-9]).{0,16}$/)){
    setPwAct2(true)
   }else{
    setPwAct2(false)
   }
   if((e.target.value).match(/^(?=.*[!@#$%^*+=-]).{0,16}$/)){
    setPwAct3(true)
   }else{
    setPwAct3(false)
   }
   if((e.target.value).match(/^.{8,16}$/)){
    setPwAct4(true)
   }else{
    setPwAct4(false)
   }
  }
  const onChangeName =(e) => {
    setName(e.target.value)
    if(e.target.value !== "") {
      setNameAct(true)
    }else{
      setNameAct(false)
    }
  }
  const onClickLeft = (e) => {
    setGenderAct(true)
    if(!clickLeft){
      if(clickRight){
        setGender(e.target.innerText)
        setClickLeft(prev => !prev)
        setClickRight(prev => !prev)
      }else{
        setClickLeft(prev => !prev)
        setGender(e.target.innerText)
      }
    }
  }
  const onClickRight = (e) => {
    setGenderAct(true)
    if(!clickRight){
      if(clickLeft){
        setGender(e.target.innerText)
        setClickLeft(prev => !prev)
        setClickRight(prev => !prev)
      }
      else{
        setGender(e.target.innerText)
        setClickRight(prev => !prev)
      }
    }
  }
  const onClickLevel1 = (e) => {
    setLevelAct(true)
    if(!level1){
      if(level2) {
        setGrade(e.target.innerText)
        setLevel1(prev => !prev)
        setLevel2(prev => !prev)
      }else if(level3) {
        setGrade(e.target.innerText)
        setLevel1(prev => !prev)
        setLevel3(prev => !prev)
      }else{
        setGrade(e.target.innerText)
        setLevel1(prev => !prev)
      }
    }
  }
  const onClickLevel2 = (e) => {
    setLevelAct(true)
    if(!level2){
      if(level1) {
        setGrade(e.target.innerText)
        setLevel1(prev => !prev)
        setLevel2(prev => !prev)
      }else if(level3) {
        setGrade(e.target.innerText)
        setLevel2(prev => !prev)
        setLevel3(prev => !prev)
      }else{
        setGrade(e.target.innerText)
        setLevel2(prev => !prev)
      }
    }
  }
  const onClickLevel3 = (e) => {
    setLevelAct(true)
    if(!level3){
      if(level1) {
        setGrade(e.target.innerText)
        setLevel1(prev => !prev)
        setLevel3(prev => !prev)
      }else if(level2) {
        setGrade(e.target.innerText)
        setLevel2(prev => !prev)
        setLevel3(prev => !prev)
      }else{
        setGrade(e.target.innerText)
        setLevel3(prev => !prev)
      }
    }
  }
  const onChangeAge = (e) => {
    setAge(e)
  }
  const onChangeLo = (e) => {
    setRegion(e)
  }
  const onChangeFav = (e) => {
    setPrefer(e)
  }

  const onClickSendEmail = async () => {
    try{
      const result = await sendTokenToEmail({
        variables : {
          email
        }
      })
      setSendEmail(true)
      console.log(result)
    }catch (error){
      if (error instanceof Error) Modal.error({ content: error });
    }
  }

  const onClickCheckEmail = async () => {
    const result = await checkTokenEmail({
      variables : {
        email,
        token
      }
    })
    alert("이메일 인증이 완료되었습니다.")
  }

  const onClickCheckNickname = async () => {
    const result = await checkNickName({
      variables : {
        nickname
      }
    })
    console.log(result)
  }

  const onClickSubmit = async () => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email,
            nickname,
            password,
            cpassword,
            grade,
            region,
            prefer,
            age,
            gender,
            image
          },
        },
      });
      router.push(`/`);
      console.log(result);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error });
    }
  };


  return (
   <JoinPageUi
   sendEmail={sendEmail}
   emailAct={emailAct}
   pwAct={pwAct}
   pwAct1={pwAct1}
   pwAct2={pwAct2}
   pwAct3={pwAct3}
   pwAct4={pwAct4}
   pwCon={pwCon}
   nameAct={nameAct}
   NicknameAct={NicknameAct}
   genderAct={genderAct}
   levelAct={levelAct}
   clickLeft={clickLeft}
   clickRight={clickRight}
   level1={level1}
   level2={level2}
   level3={level3}
   email={email}
   password={password}
   cpassword={cpassword}
   nickname={nickname}
   token={token}
   onClickCheckNickname={onClickCheckNickname}
   onClickCheckEmail={onClickCheckEmail}
   onChangeEmailToken={onChangeEmailToken}
   onClickSendEmail={onClickSendEmail}
   onChangeAge={onChangeAge}
   onChangeLo={onChangeLo}
   onChangeFav={onChangeFav}
   onClickLevel1={onClickLevel1}
   onClickLevel2={onClickLevel2}
   onClickLevel3={onClickLevel3}
   onClickRight={onClickRight}
   onClickLeft={onClickLeft}
   onChangeName={onChangeName}
   onChangeEmail={onChangeEmail}
   onChangePwCon={onChangePwCon}
   onChangeNickName={onChangeNickName}
   onChangePw={onChangePw}
   onClickSubmit={onClickSubmit}
   />
  );
}

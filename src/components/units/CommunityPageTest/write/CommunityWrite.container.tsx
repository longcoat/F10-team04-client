import CommunityWriteUI from "./CommunityWrite.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { schema } from "./CommunityWrite.validation";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";



export default function CommunityWrite() {


  return (
    <CommunityWriteUI
      // onSubmit={onSubmit}
      // onClickImage={onClickImage}
      // onCompleteAddressSearch={onCompleteAddressSearch}
      // setAddress={setAddress}
      // address={address}
      // onClickUpdate={onClickUpdate}
      // isEdit={props.isEdit}
      // data={props.data}
      // hashArr={hashArr}
      // setHashArr={setHashArr}
    />
  );
}

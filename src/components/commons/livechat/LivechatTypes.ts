import { LegacyRef } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../commons/types/generated/types";

export interface IPropsLiveChat {
  userData?: Pick<IQuery, "fetchUserLoggedIn">;
  boardId?: string;
  data?: any;
}

export interface IFormValueChat {
  contents?: string;
}

export interface IPropsLiveChatUI {
  resultMsg: string[];
  userId?: string;
  register: UseFormRegister<{ contents: string }>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  data?: any;
  onClickSubmit: (data: IFormValueChat) => void;
  onKeyDown?: any;
  accessToken?: string;
  messagesEndRef?: LegacyRef<HTMLDivElement>;
}

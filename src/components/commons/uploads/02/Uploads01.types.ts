import { ChangeEvent, RefObject } from "react";

export interface IUploads01Props {
  index: number;
  fileUrl:  [];
  files: [];
  defaultFileUrl?: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface IUploads01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl:  [];
  files: [];
  defaultFileUrl?: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

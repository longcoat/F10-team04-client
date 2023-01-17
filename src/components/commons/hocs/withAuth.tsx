import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { modalWriteState } from "../../../commons/stores";

export const withAuth = (Component: any) => (props: any) => {
  const [ModalOpen, setModalOpen] = useRecoilState(modalWriteState);
  const router = useRouter();
  // 로그인 체크

  useEffect(() => {
    
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다!!!");
      void router.push("/login");
      setModalOpen(false)
    }
  });

  return <Component {...props} />;
};

import { useEffect } from "react";
import { authSelector } from "../../store/auth";
import { useRecoilState } from "recoil";

interface IsNaverLogin {
  setGetToken: any;
}

export default function NaverLogin() {
  const [, setUserInfo] = useRecoilState(authSelector);

  useEffect(() => {
    try {
      if (window.Kakao.isInitialized() && window.Kakao) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return <div id="naverIdLogin"></div>;
}

import { useEffect } from "react";
import { authSelector } from "../../store/auth";
import { useRecoilState } from "recoil";

export const naverLogout = () => {
  localStorage.removeItem("com.naver.nid.access_token");
  window.location.reload();
};

interface IsNaverLogin {
  setGetToken: any;
}

export default function NaverLogin() {
  const [, setUserInfo] = useRecoilState(authSelector);

  useEffect(() => {
    const { naver } = window;
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: "http://localhost:3000/account",
      isPopup: false,
      loginButton: { color: "green", type: 1, height: 40 },
    });
    naverLogin.init();

    async () => {
      await naverLogin.getLoginStatus((status: any) => {
        console.log(`login: ${status}`);
        if (status) {
          setUserInfo({
            user: { ...naverLogin.user },
          });
        }
      });
    };

    // if (!location.hash) return;
    // const token = location.hash.split("=")[1].split("&")[0];
    // localStorage.setItem("access_token", token);
  }, []);

  return <div id="naverIdLogin"></div>;
}

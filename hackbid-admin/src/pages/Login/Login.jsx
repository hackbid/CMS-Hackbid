import HeaderLogin from "./components/HeaderLogin.jsx";
import Loginform from "./components/Loginform.jsx";
import FooterLogin from "./components/FooterLogin.jsx";
import LoginCard from "./components/LoginCard.jsx";

export default function Login() {
  return (
    <>
      <div className="h-screen">
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
          <HeaderLogin />
          <LoginCard />
        </div>
      </div>
    </>
  );
}

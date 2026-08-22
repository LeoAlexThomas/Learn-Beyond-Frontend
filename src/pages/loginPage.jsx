import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-row gap-4 items-center justify-center h-full">
      <img
        src="/images/login_illustration.png"
        alt="Login Illustration"
        className="hidden md:block w-1/2 h-screen object-cover aspect-auto"
      />
      <div className="flex flex-col items-stretch justify-center p-4 md:h-full w-full max-w-full sm:max-w-[560px] mx-auto">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

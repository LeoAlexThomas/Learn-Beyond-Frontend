import RegisterForm from "../components/RegisterForm.jsx";

const RegisterPage = () => {
  return (
    <div className="flex flex-row gap-4 items-center justify-center h-full">
      <img
        src="/images/login_illustration.png"
        alt="Login Illustration"
        className="hidden lg:block w-1/2 h-screen object-cover aspect-auto"
      />
      <div className="flex flex-col items-stretch justify-center p-4 md:h-full w-full max-w-full sm:max-w-180 mx-auto">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;

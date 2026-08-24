import EmptyMessage from "../components/EmptyMessage";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";
import Loading from "../components/Loading";
import StudentProfileForm from "../components/StudentProfileForm";
import TutorProfileForm from "../components/TutorProfileForm";
import useFetchApiCall from "../hooks/fetchApiCall";

const HomePage = () => {
  const { data, isLoading, error, mutate } = useFetchApiCall({
    url: "/auth/me",
  });

  if (error) {
    return <ErrorMessage message={error.message ?? "Something went wrong"} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <EmptyMessage message="No data" />;
  }
  const userInfo = data.data.user;
  return (
    <section>
      <Header />
      {userInfo.isProfileCompleted ? null : (
        <div className="w-full max-w-300 mx-auto p-4">
          {userInfo.role === "student" && <StudentProfileForm />}
          {userInfo.role === "tutor" && <TutorProfileForm />}
        </div>
      )}
    </section>
  );
};

export default HomePage;

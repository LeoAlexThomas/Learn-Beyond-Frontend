import EmptyMessage from "../components/EmptyMessage";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";
import Loading from "../components/Loading";
import StudentProfileForm from "../components/StudentProfileForm";
import TutorProfileForm from "../components/TutorProfileForm";
import useFetchApiCall from "../hooks/fetchApiCall";
import HeroContent from "../components/HeroContent";
import PopularSubjects from "../components/PopularSubjects";
import PopularTutors from "../components/PopularTutors";

const HomePage = () => {
  // const { data, isLoading, error, mutate } = useFetchApiCall({
  //   url: "/auth/me",
  // });

  // if (error) {
  //   return <ErrorMessage message={error.message ?? "Something went wrong"} />;
  // }

  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (!data) {
  //   return <EmptyMessage message="No data" />;
  // }
  // const userInfo = data.data.user;
  return (
    <section className="min-h-screen flex flex-col gap-24">
      <div>
        <Header />
        <HeroContent />
      </div>
      {/* {userInfo.isProfileCompleted ? null : (
        <div className="w-full max-w-300 mx-auto p-4">
          {userInfo.role === "student" && <StudentProfileForm />}
          {userInfo.role === "tutor" && <TutorProfileForm />}
        </div>
      )} */}
      <PopularSubjects />
      <PopularTutors />
    </section>
  );
};

export default HomePage;

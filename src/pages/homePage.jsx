import Header from "../components/Header";
import HeroContent from "../components/HeroContent";
import PopularSubjects from "../components/PopularSubjects";
import PopularTutors from "../components/PopularTutors";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

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
      <div>
        <WhyChooseUs />
        <Footer />
      </div>
    </section>
  );
};

export default HomePage;

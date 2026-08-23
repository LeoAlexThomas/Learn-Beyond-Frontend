import EmptyMessage from "../components/EmptyMessage";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";
import Loading from "../components/Loading";
import StudentProfileForm from "../components/StudentProfileForm";
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

  return (
    <section>
      <Header />
      {data.data.user.isProfileCompleted ? null : (
        <div className="w-full max-w-300 mx-auto p-4">
          <StudentProfileForm />
        </div>
      )}
    </section>
  );
};

export default HomePage;

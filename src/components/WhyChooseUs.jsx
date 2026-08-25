import React, { Fragment } from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-accent">
      <div className="flex flex-col gap-8 items-center justify-center w-full max-w-300 mx-auto p-4">
        <h1 className="text-2xl sm:text-3xl font-Title font-bold text-background text-center">
          Why Choose Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Fragment key={"card-1"}>
            <Card
              title="Expert Tutors"
              description="Learn from skilled and experienced tutors."
            />
          </Fragment>
          <Fragment key={"card-2"}>
            <Card
              title="Flexible Scheduling"
              description="Book lessons at a time that works for you."
            />
          </Fragment>
          <Fragment key={"card-3"}>
            <Card
              title="Personalized Learning"
              description="Find tutors based on your subject and learning needs."
            />
          </Fragment>
          <Fragment key={"card-4"}>
            <Card
              title="Secure Payments"
              description="Pay for lessons safely and easily."
            />
          </Fragment>
          <Fragment key={"card-5"}>
            <Card
              title="Lesson Recordings"
              description="Access recorded lessons for future review."
            />
          </Fragment>
          <Fragment key={"card-6"}>
            <Card
              title="Trusted Reviews"
              description="Choose tutors with confidence through student ratings and feedback."
            />
          </Fragment>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-stretch w-full max-w-80 mx-auto p-4 bg-primary rounded-xl shadow-lg">
      <h4 className="text-xl sm:text-2xl font-Title font-bold text-background">
        {title}
      </h4>
      <p className="font-base text-background">{description}</p>
    </div>
  );
};

export default WhyChooseUs;

import { ReceiptIndianRupee, Star, StarIcon, User } from "lucide-react";
import React, { Fragment } from "react";
import { PrimaryButton, SecondaryButton } from "./Buttons";

const courseList = [
  {
    id: 1,
    title: "HTML",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Learn the basics of HTML to create web pages.",
    tutor: "John Doe",
    rating: 4.5,
    price: 99,
  },
  {
    id: 2,
    title: "CSS",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Learn the basics of CSS to style web pages.",
    tutor: "Jane Doe",
    rating: 4.2,
    price: 79,
  },
  {
    id: 3,
    title: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Learn the basics of JavaScript to create interactive web pages.",
    tutor: "John Doe",
    rating: 4.7,
    price: 89,
  },
  {
    id: 4,
    title: "React",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Learn the basics of React to build user interfaces.",
    tutor: "Jane Doe",
    rating: 4.3,
    price: 109,
  },
  {
    id: 5,
    title: "Node.js",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Learn the basics of Node.js to build server-side applications.",
    tutor: "John Doe",
    rating: 4.6,
    price: 99,
  },
  {
    id: 6,
    title: "Express.js",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Learn the basics of Express.js to build server-side applications.",
    tutor: "Jane Doe",
    rating: 4.4,
    price: 79,
  },
];

const PopularCourses = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full max-w-300 mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl font-Title font-bold text-primary">
        POPULAR COURSES
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {courseList.map((course) => (
          <Fragment key={course.id}>
            <CourseCard course={course} />
          </Fragment>
        ))}
      </div>
      <div className="w-full max-w-60">
        <SecondaryButton buttonLabel="View All" onClick={() => {}} fullWidth />
      </div>
    </div>
  );
};

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between items-start h-full gap-4">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold">{course.title}</h2>
      <p className="text-gray-600">{course.description}</p>
      <div className="flex gap-4 items-center justify-between w-full">
        <TextWithIcon
          icon={<User className="w-4 h-4 text-primary" />}
          text={`${course.tutor}`}
        />
        <TextWithIcon
          icon={<Star className="w-4 h-4 text-[#FDCC0D]" />}
          text={`${course.rating}`}
        />
        <TextWithIcon
          icon={<ReceiptIndianRupee className="w-4 h-4 text-primary" />}
          text={`${course.price}`}
        />
      </div>
      <PrimaryButton buttonLabel="Enroll Now" fullWidth onClick={() => {}} />
    </div>
  );
};

const TextWithIcon = ({ icon, text }) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      {icon}
      <p className="text-base">{text}</p>
    </div>
  );
};

export default PopularCourses;

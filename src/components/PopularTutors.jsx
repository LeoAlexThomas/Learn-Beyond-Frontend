import { Star, Verified } from "lucide-react";
import React, { Fragment } from "react";
import { SecondaryButton, TertiaryButton } from "./Buttons";
import { Link } from "react-router-dom";

// TutorProfile
// Example:
// │
// ├── user
// ├── headline
// ├── bio
// ├── subjects[]
// ├── qualifications[]
// ├── experience
// ├── hourlyRate
// ├── languages[]
// ├── profileImage
// ├── rating
// ├── totalReviews
// ├── totalLessons
// ├── isVerified
// └── timezone
// User 1 ───── 1 TutorProfile

const tutorList = [
  {
    _id: "6a8bd4f12203734988e686d0",
    user: {
      _id: "6a868f8acbb604742f969907",
      name: "Leoalex Thomas",
      email: "leoalex960@gmail.com",
      role: "tutor",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      isActive: false,
      isEmailVerified: false,
      isProfileCompleted: true,
      createdAt: "2026-08-20T05:24:26.664Z",
      updatedAt: "2026-08-20T05:24:26.664Z",
    },
    headline: "Need improvement in your skills you need extra",
    bio: "I am a student from USA and I am learning to code from scratch and I am very passionate about it. I am a student from USA and I am learning to code from scratch and I am very passionate about it. I am a student from USA and I am learning to code from scratch and I am very passionate about it.",
    subjects: ["Science", "English"],
    qualifications: ["PhD", "Masters"],
    experienceInYears: "5",
    hourlyRate: 400,
    languages: ["tn", "en"],
    profileImage:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    rating: 0,
    totalReviews: 0,
    totalLessons: 0,
    isVerified: false,
    timezone: "Indian/Christmas",
  },
  {
    _id: "6a8bd4f12203734988e686d1",
    user: {
      _id: "6a868f8acbb604742f969909",
      name: "Tester 1",
      email: "tester@gmail.com",
      role: "tutor",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      isActive: true,
      isEmailVerified: true,
      isProfileCompleted: true,
      createdAt: "2026-08-20T05:24:26.664Z",
      updatedAt: "2026-08-20T05:24:26.664Z",
    },
    headline:
      "Need improvement in your skills you need extra 2 All the best to you all of you",
    bio: "I am a student from USA and I am learning to code from scratch and I am very passionate about it. ",
    subjects: ["Science", "English", "Mathematics"],
    qualifications: ["PhD", "Masters", "SSLC"],
    experienceInYears: "2",
    hourlyRate: 200,
    languages: ["tn"],
    profileImage:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    rating: 5,
    totalReviews: 1000,
    totalLessons: 20,
    isVerified: true,
    timezone: "Indian/Christmas",
  },
  {
    _id: "6a8bd4f12203734988e686d2",
    user: {
      _id: "6a868f8acbb604742f96990a",
      name: "Tester 2",
      email: "tester@gmail.com",
      role: "tutor",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      isActive: true,
      isEmailVerified: true,
      isProfileCompleted: true,
      createdAt: "2026-08-20T05:24:26.664Z",
      updatedAt: "2026-08-20T05:24:26.664Z",
    },
    headline: "Need improvement in your skills you need extra 3",
    bio: "I am a student from USA and I am learning to code from scratch and I am very passionate about it. ",
    subjects: ["Science", "English"],
    qualifications: ["Masters", "SSLC"],
    experienceInYears: "2",
    hourlyRate: 200,
    languages: ["tn"],
    profileImage:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    rating: 4.5,
    totalReviews: 321,
    totalLessons: 10,
    isVerified: true,
    timezone: "Indian/Christmas",
  },
  {
    _id: "6a8bd4f12203734988e686d3",
    user: {
      _id: "6a868f8acbb604742f96990b",
      name: "Tester 3",
      email: "tester@gmail.com",
      role: "tutor",
      avatar:
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      isActive: true,
      isEmailVerified: true,
      isProfileCompleted: true,
      createdAt: "2026-08-20T05:24:26.664Z",
      updatedAt: "2026-08-20T05:24:26.664Z",
    },
    headline: "Need improvement in your skills you need extra 4",
    bio: "I am a student from USA and I am learning to code from scratch and I am very passionate about it. ",
    subjects: ["Science", "English", "Computer Science"],
    qualifications: ["Masters", "Bachelor"],
    experienceInYears: "1",
    hourlyRate: 100,
    languages: ["tn", "en"],
    profileImage:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    rating: 3.5,
    totalReviews: 321,
    totalLessons: 5,
    isVerified: true,
    timezone: "Indian/Christmas",
  },
];

const PopularTutors = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 items-center justify-center w-full max-w-300 mx-auto p-4">
        <h1 className="text-2xl sm:text-3xl font-Title font-bold text-primary">
          POPULAR TUTORS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tutorList.map((tutor) => (
            <Fragment key={tutor._id}>
              <TutorCard tutor={tutor} />
            </Fragment>
          ))}
        </div>
        <div className="w-full max-w-60">
          <SecondaryButton
            buttonLabel="View All"
            onClick={() => {}}
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

const TutorCard = ({ tutor }) => {
  return (
    <Link to={`/tutor/${tutor._id}`}>
      <div className="flex gap-4 items-start justify-center bg-white rounded-lg shadow-md p-4">
        <img
          src={tutor.profileImage}
          alt={tutor.user.name}
          className="w-26 h-28 object-cover rounded-lg"
        />
        <div className="flex flex-col gap-1 items-start justify-start w-full">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold line-clamp-1">
              {tutor.user.name}
            </h3>
            {tutor.isVerified && <Verified className="w-4 h-4 text-success" />}
          </div>
          <p className="text-base  line-clamp-2">{tutor.bio}</p>
          <div className="flex justify-between items-center gap-2 flex-wrap">
            <p className="text-base font-semibold text-accent">
              ₹{tutor.hourlyRate}/hour
            </p>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#FDCC0D]" />
              <p className="text-base font-semibold text-accent">
                {tutor.rating} ({tutor.totalReviews} reviews)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PopularTutors;

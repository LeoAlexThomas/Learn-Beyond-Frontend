import { Fragment } from "react";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="flex flex-col gap-6 justify-center w-full max-w-300 mx-auto p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Fragment key="quickLinks">
            <FooterLinks
              linkTitle="Quick Links"
              links={[
                {
                  title: "Home",
                  link: "/",
                },
                {
                  title: "Find Tutors",
                  link: "/searchTutors",
                },
                {
                  title: "About Us",
                  link: "/#about",
                },
                {
                  title: "Contact Us",
                  link: "/#contact",
                },
              ]}
            />
          </Fragment>
          <Fragment key="forStudents">
            <FooterLinks
              linkTitle="For Students"
              links={[
                {
                  title: "Browse Tutors",
                  link: "/searchTutors",
                },
                {
                  title: "Book Lessons",
                  link: "/bookLesson",
                },
                {
                  title: "My Lessons",
                  link: "/myProfile#myLessons",
                },
                {
                  title: "Payments",
                  link: "/myProfile#payments",
                },
              ]}
            />
          </Fragment>
          <Fragment key="forTutors">
            <FooterLinks
              linkTitle="For Tutors"
              links={[
                {
                  title: "Manage Lessons",
                  link: "/myProfile#myLessons",
                },
                {
                  title: "Availability",
                  link: "/myProfile#availability",
                },
                {
                  title: "Earnings",
                  link: "/myProfile#earnings",
                },
              ]}
            />
          </Fragment>
          <div className="flex flex-col gap-2 order-1">
            <h3 className="font-Title text-xl sm:text-2xl font-bold text-background ">
              Learn Beyond
            </h3>
            <p className="text-xs sm:text-sm text-background">
              Connecting students with trusted tutors for flexible, personalized
              online learning.
            </p>
            <div className="flex gap-2 items-center ">
              <p className="text-xs sm:text-sm text-background">Follow Us</p>
              <ul className="flex flex-row gap-2">
                <li>
                  <img
                    src="/images/facebook.png"
                    alt="Facebook"
                    className="w-6 h-6 object-cover"
                  />
                </li>
                <li>
                  <img
                    src="/images/whatsapp.png"
                    alt="Whatsapp"
                    className="w-6 h-6 object-cover"
                  />
                </li>
                <li>
                  <img
                    src="/images/linkedin.png"
                    alt="Linkedin"
                    className="w-6 h-6 object-cover"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-background text-center">
          © 2026 LearnBeyond. All rights reserved.
        </p>
      </div>
    </div>
  );
};

const FooterLinks = ({ linkTitle, links }) => {
  return (
    <div className={`flex flex-col gap-2 items-start`}>
      <h5 className="font-Title text-lg sm:text-xl font-bold text-background">
        {linkTitle}
      </h5>
      <ul className="flex flex-col text-base sm:text-lg text-background gap-1">
        {links.map((link) => (
          <li key={link.title} className="hover:underline hover:cursor-pointer">
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;

const HeroContent = () => {
  return (
    <div className="flex flex-row gap-4 items-center justify-start h-full w-full max-w-300 mx-auto relative">
      <img
        src="/images/hero_illustration_desktop.png"
        alt="Hero Illustration"
        className="object-cover z-0 hidden md:block"
      />
      <img
        src="/images/hero_illustration_mobile.png"
        alt="Hero Illustration"
        className="object-cover z-0 block md:hidden max-h-screen"
      />
      <div className="absolute top-1/5 flex flex-col gap-2 items-start justify-start p-4 h-full w-full max-w-125 z-10">
        <h1 className="text-2xl sm:text-3xl font-Title font-bold text-primary">
          Learn Beyond. Grow Without Limits
        </h1>
        <p className="text-base sm:text-lg font-medium text-accent">
          Learn More. Achieve More.
        </p>
        <p className="text-base sm:text-lg text-black pt-4">
          Connect with expert tutors, learn at your own pace, and build the
          skills you need to achieve your goals through personalized online
          learning.
        </p>
      </div>
    </div>
  );
};

export default HeroContent;

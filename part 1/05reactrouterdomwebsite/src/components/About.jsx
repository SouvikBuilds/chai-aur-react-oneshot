import React from "react";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-[30px] lg:gap-[60px] mt-[40px] lg:mt-[80px] pb-[60px] px-4">
      <img
        src="https://images.unsplash.com/photo-1657664050038-1e6f957de1a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGZhbWlseSUyMGltYWdlcyUyMHdpdGglMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
        alt="Not Found"
        className="h-[250px] md:h-[350px] lg:h-[400px] w-full max-w-[600px] object-cover rounded-lg"
      />

      <div className="flex flex-col gap-6 text-center lg:text-left max-w-2xl">
        <div className="flex flex-col gap-3">
          <h2 className="text-[24px] md:text-[30px] lg:text-[36px] font-bold leading-7 md:leading-8">
            React development is carried out by
          </h2>
          <h2 className="text-[24px] md:text-[30px] lg:text-[36px] font-bold leading-7 md:leading-8">
            Passionate Developer
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-sm md:text-base leading-5 md:leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
            voluptatem accusantium nemo perspiciatis delectus atque autem!
            Voluptatum tenetur beatae unde aperiam, repellat expedita
            consequatur! Officiis id consequatur atque doloremque!
          </p>
          <p className="text-sm md:text-base leading-5 md:leading-6">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

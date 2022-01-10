import React from "react";
import Footer from "./Footer";
const About = () => {
  return (
    <div>
      <div class="md:px-48 md:pt-8 pb-6 mx-auto container">
        <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 dark:bg-gray-800">
          <img
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFG9nFfXdfZyQ/profile-displayphoto-shrink_800_800/0/1622160860675?e=1646870400&v=beta&t=8UObGOAyEKbtUQmbuQJz3QeoUAJs-yaCfgm1osVwlZQ"
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “I'm currently studying computer engineering at Universidad
                Nacional de Córdoba.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">
                Córdoba, Argentina
              </div>
              <div class="text-gray-700 dark:text-gray-500">
                Software Engineer
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
      <Footer />
    </div>
  );
};

export default About;

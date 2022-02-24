import React from "react";
import Fade from "react-reveal/Fade";
import ContactLeft from "./Contact/ContactLeft";
import ContactRight from "./Contact/ContactRight";

function Contact() {
  return (
    <Fade>
      <div className="relative">
        {/* top titile */}
        <div className="text-3xl font-sans font-semibold">
          <p>Connect Our Via Socials</p>
        </div>

        {/* Homepage Content */}

        <div className="grid grid-col-1 gap-y-6 md:gap-y-0 mx-auto md:flex md:items-center md:justify-between z-50 pt-[50px]">
          <Fade delay={50}>
            <ContactLeft />
          </Fade>

          <Fade delay={70}>
            <ContactRight />
          </Fade>
        </div>
      </div>
    </Fade>
  );
}

export default Contact;

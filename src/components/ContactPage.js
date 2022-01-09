import React from "react";
import background from "../static/standardBG/standardBG.png";
import ContactCardWeb from "./ContactCardWeb";
import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <div className="h-full background-cover">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-9 mt-16 h-full">
        <div className="col-span-1 h-full mb-4 mt-16 lg:m-4 ">
          <ContactCardWeb name="Kontakt" />
        </div>
        <div className="col-span-1 h-full lg:m-4 ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

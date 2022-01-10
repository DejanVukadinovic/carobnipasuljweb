import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  emailjs.init("user_LtcAnDPSIdtl1fjPzHgkX");
  const form = useRef();

  const [display, setdisplay] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k2dllad",
        "template_yd3mq3x",
        form.current,
        process.env.REACT_APP_EMAILJS_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setdisplay(
            <div className="text-4xl text-primary text-center h-full flex items-center justify-center">
              <div className="p-4 bg-primary text-white rounded-xl">
                Vasa Poruka je uspjesno poslana
              </div>
            </div>
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    setdisplay(
      <React.Fragment>
        <div className="text-gray-700 font-bold text-3xl pb-4 text-center">
          Kontaktirajte Nas
        </div>
        <form
          class="bg-white shadow-md rounded px-4 lg:px-8 pt-6 pb-8 mb-4"
          ref={form}
          onSubmit={sendEmail}
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Ime
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Vase Ime"
              name="name"
            />
          </div>
          <div class="">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              E-Mail
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Vasa E-Mail adresa"
              name="email"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="company"
            >
              Ime Firme/Škole
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="company"
              type="text"
              placeholder="Ime Firme/Skole"
              name="company"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="message"
            >
              Poruka
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-xl"
              id="message"
              type="text"
              placeholder="Poruka"
              rows="10"
              name="message"
            />
          </div>

          <div class="flex items-center justify-between">
            <button
              className="border-primary border-2 w-full p-2 text-xl text-center rounded-2xl text-gray-200 bg-primary cursor-pointer hover:bg-white hover:text-primary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }, []);

  return (
    <div className="w-full h-full lg:p-4 lg:rounded-3xl mt-4 pt-8 lg:mt-0 lg:pt-0 border-primary border-t-2 lg:border-t-0">
      {display}
    </div>
  );
}

export default ContactForm;

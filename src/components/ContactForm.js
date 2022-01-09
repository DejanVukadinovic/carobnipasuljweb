import React from "react";

function ContactForm() {
  return (
    <div className="w-full h-full lg:p-4 lg:rounded-3xl mt-4 pt-8 lg:mt-0 lg:pt-0 border-primary border-t-2 lg:border-t-0">
      <div className="text-gray-700 font-bold text-3xl pb-4 text-center">
        Kontaktirajte Nas
      </div>
      <form>
        <form class="bg-white shadow-md rounded px-4 lg:px-8 pt-6 pb-8 mb-4">
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
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="workplace"
            >
              Ime Firme/Škole
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="workplace"
              type="text"
              placeholder="Ime Firme/Skole"
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
            />
          </div>

          <div class="flex items-center justify-between">
            <a className="border-primary border-2 w-full p-2 text-xl text-center rounded-2xl text-gray-200 bg-primary cursor-pointer">
              Submit
            </a>
          </div>
        </form>
      </form>
    </div>
  );
}

export default ContactForm;

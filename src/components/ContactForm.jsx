"use client"

import { useState } from "react";
import { linkBlue } from "./customStyles";

export default function ContactForm() {
  const [ submitMsg, setSubmitMsg ] = useState("")

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d11ab8bd-3ea2-43ac-bd0a-a803110b3a27");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      setSubmitMsg("Thanks for getting in contact with me. I'll get back to you as soon as I can. Oliver")
      console.log(result);
    }
    else {
      setSubmitMsg("Something went wrong. Please refresh the page and try again.")
    }
  }

return (
  <>
    {!submitMsg.length
    ?
    <form onSubmit={handleSubmit}>
    <input 
      className="border-2 border-blue-200 rounded my-2 p-2 w-full"
      type="text"
      name="name"
      placeholder="Your name"
      required
    />
    <input
      className="border-2 border-blue-200 rounded my-2 p-2 w-full"
      type="email"
      name="email"
      placeholder="Your email address"
      required
    />
    <input
      className="border-2 border-blue-200 rounded my-2 p-2 w-full"
      type="text"
      name="phone"
      placeholder="Your phone *optional"
    />
    <textarea
      rows={5}
      name="message"
      className="border-2 border-blue-200 rounded my-2 p-2 w-full"
      placeholder="Provide some details">
    </textarea>
    <button
      className={linkBlue} 
      type="submit">Get in touch</button>
  </form>
    :
      <p className="font-bold text-teal-500">{submitMsg}</p>
    }
    
  </>
);
}

import React, { useEffect, useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [allUserDetails, setAllUserDetails] = useState(() => {
    return JSON.parse(localStorage.getItem("allUserDetails")) || [];
  });

  useEffect(() => {
    localStorage.setItem("allUserDetails", JSON.stringify(allUserDetails));
  }, [allUserDetails]);

  const addDetails = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      alert("Please Fill The Details First");
      return;
    }

    if (contact.length !== 10) {
      alert("Contact Number Should Be 10 Digits Only");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    const userDetails = {
      userId: Date.now(),
      Name: name,
      Email: email,
      ContactNo: contact,
    };
    setAllUserDetails([...allUserDetails, userDetails]);
    alert("Your Details Saved Successfully ✅");

    setName("");
    setEmail("");
    setContact("");
  };
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mx-auto my-auto mt-[80px] md:mt-[190px] pb-[200px] px-4">
        <div className="flex flex-col items-start px-8 py-4 rounded-lg bg-[#f3f4f6] text-black w-full md:w-auto">
          <div className="heading flex flex-col items-start gap-2">
            <h2 className="text-[28px] md:text-[36px] font-extrabold leading-8">
              Get in touch:
            </h2>
            <p className="text-[16px] md:text-[20px] leading-7 font-[500]">
              Fill In The Form To Start The Conversation
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-[60px]">
            <div className="location flex flex-row items-center gap-3">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png"
                alt="Not Found"
                className="h-[40px]"
              />

              <p className="text-[16px] md:text-[20px] leading-6">
                Acme Inc, Street, <br /> State, Postal Code
              </p>
            </div>
            <div className="number flex flex-row items-center gap-3">
              <img
                src="https://cdn-icons-png.flaticon.com/128/159/159832.png"
                alt="Not Found"
                className="h-[40px]"
              />

              <p className="text-[16px] md:text-[20px] leading-6">
                +44 1234567890
              </p>
            </div>
            <div className="location flex flex-row items-center gap-3">
              <img
                src="https://cdn-icons-png.flaticon.com/128/542/542638.png"
                alt="Not Found"
                className="h-[40px]"
              />

              <p className="text-[16px] md:text-[20px] leading-6">
                info@acme.org
              </p>
            </div>
          </div>
        </div>

        <form
          action=""
          className="formGroup flex flex-col gap-[20px] w-full md:w-auto"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name=""
            id=""
            className="w-full md:w-[300px] px-5 py-2 rounded-lg border border-[#9e9e9e]"
            placeholder="Full Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name=""
            id=""
            className="w-full md:w-[300px] px-5 py-2 rounded-lg border border-[#9e9e9e]"
            placeholder="Email"
          />
          <input
            type="number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            name=""
            id=""
            className="w-full md:w-[300px] px-5 py-2 rounded-lg border border-[#9e9e9e]"
            placeholder="Telephone Number"
          />

          <button
            type="button"
            onClick={addDetails}
            className="text-white px-5 py-2 rounded-lg bg-red-500 active:bg-red-600 duration-300 cursor-pointer active:opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;

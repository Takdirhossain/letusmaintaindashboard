import React from "react";
import { Link } from "react-router-dom";
import Logoof from "../assets/logo (1).f830610ede8618ccafa5.png";

const Passwords = () => {
  return (
    <div>
      {" "}
      <nav class="border bg-white shadow-lg  ">
        <div className="max-w-screen-xl flex shadow-lg flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img src={Logoof} className="sizeimg" alt="" />
          </div>
        </div>
      </nav>
      <div class="bg-white rounded-lg mt-6 border-2 border-gray-900  p-6 max-w-sm mx-auto items-center justify-center ">
        <form>
          <p class=" font-medium text-3xl text-center mb-5 ">Login</p>

          <div class="mb-4">
            <label
              class="block font-medium text-2xl text-center mb-8"
              for="referralId"
            >
              Enter your Personal Key*
            </label>
            <div class="flex justify-center mb-4">
              <div class="flex ">
                <input
                  class="sr-only"
                  type="text"
                  id="referralId"
                  name="referralId"
                  maxlength="1"
                  inputmode="numeric"
                />
                <div class="flex items-center justify-center w-10 h-10 rounded border border-gray-400 mr-2">
                  <input
                    class="pin-input text-center w-full h-full text-2xl font-semibold appearance-none"
                    type="text"
                    name="pin1"
                    maxlength="1"
                    inputmode="numeric"
                    aria-label="Referral ID digit 1"
                  />
                </div>
                <div class="flex items-center justify-center w-10 h-10 rounded border border-gray-400 mr-2">
                  <input
                    class="pin-input text-center w-full h-full text-2xl font-semibold appearance-none"
                    type="text"
                    name="pin2"
                    maxlength="1"
                    inputmode="numeric"
                    aria-label="Referral ID digit 2"
                  />
                </div>
                <div class="flex items-center justify-center w-10 h-10 rounded border border-gray-400 mr-2">
                  <input
                    class="pin-input text-center w-full h-full text-2xl font-semibold appearance-none"
                    type="text"
                    name="pin3"
                    maxlength="1"
                    inputmode="numeric"
                    aria-label="Referral ID digit 3"
                  />
                </div>
                <div class="flex items-center justify-center w-10 h-10 rounded border border-gray-400 mr-2">
                  <input
                    class="pin-input text-center w-full h-full text-2xl font-semibold appearance-none"
                    type="text"
                    name="pin4"
                    maxlength="1"
                    inputmode="numeric"
                    aria-label="Referral ID digit 4"
                  />
                </div>
                <div class="flex items-center justify-center w-10 h-10 rounded border border-gray-400 mr-2">
                  <input
                    class="pin-input text-center w-full h-full text-2xl font-semibold appearance-none"
                    type="text"
                    name="pin5"
                    maxlength="1"
                    inputmode="numeric"
                    aria-label="Referral ID digit 5"
                  />
                </div>
                <div class="flex items-center justify-center w-10 h-10 rounded border border-gray-400">
                  <input
                    class="pin-input text-center w-full h-full text-2xl font-semibold appearance-none"
                    type="text"
                    name="pin6"
                    maxlength="1"
                    inputmode="numeric"
                    aria-label="Referral ID digit 6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center mb-4 justify-center ">
            <Link to="/partner">
              {" "}
              <button
                class="bg-blue-500  text-center  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Passwords;

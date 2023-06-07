import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ChatForm = () => {
  const [referralId, setReferralId] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPartner, setSelectedPartner] = useState("");
  const [message, setMessage] = useState("");
  const [data, setdata] = useState([]);
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/auth/admin/partnerinfo")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

  const handleCountryChange = (event) => {
    const selectedcountry = event.target.value;
    setSelectedCountry(selectedcountry)
    const countryfilter = data.filter(
      (item) => item.country === selectedcountry
    );
    setCountry(countryfilter);
  };

  const handleReferralIdChange = (event) => {
    const selectedreffer = event.target.value;
    setSelectedPartner(selectedreffer)
    const refferidfilter = country.filter(
      (item) => item.partnerId === selectedreffer
    );
    setReferralId(refferidfilter);
  };
  
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const data = {
      country:selectedCountry,
      rafferid:selectedPartner,
      message: message
    }
    console.log(data);
    fetch("http://localhost:5000/auth/admin/message", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
     })
     .then(res=>res.json())
     .then(data => {
      
      toast.success("data added success")
     }).catch(()=> {
      toast.error("This didn't work.")

     })
  };

  return (
    <>
      <div className="w-3/4 justify-center items-center ml-6 mr-6 mt-6">
        <div className="mt-5">
          <label
            htmlFor="country"
            className="block text-xl font-medium text-gray-700 mt-5"
          >
            Select Country:
          </label>
          <select
            id="country"
            onChange={(e) => handleCountryChange(e)}
            className="mt-1 block w-full py-2 px-6 border border-gray-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Select </option>
            {data?.map((dt) => (
              <>
                <option key={dt._id} value={dt?.country}>
                  {dt.country}
                </option>
              </>
            ))}

            {/* Add country options */}
          </select>
        </div>
        <div className="mt-5">
          <label
            htmlFor="channelPartner"
            className="block text-xl font-medium text-gray-700 mt-5"
          >
            Select Channel Partner:
          </label>
          <select
            id="referralId"
            onChange={(e) => handleReferralIdChange(e)}
            className="w-full px-4 py-2 border rounded"
          >
            <option>-- Select Referral ID --</option>
            {country?.map((dt) => (
              <>
                <option key={dt._id} value={dt?.partnerId}>
                  {dt?.partnerId}
                </option>
              </>
            ))}
          </select>
        </div>
        <p className="text-gray-900 text-2xl text-center mb-6 font-bold">
          New Message or Reply to Previous Chat
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-3/4 justify-center items-center"
        >
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="4"
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Type message..."
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <div className="flex items-center text-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex  items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatForm;

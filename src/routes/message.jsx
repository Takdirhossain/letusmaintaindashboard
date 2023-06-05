import React, { useState } from 'react';


const ChatForm = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedPartner, setSelectedPartner] = useState('');
  const [message, setMessage] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handlePartnerChange = (event) => {
    setSelectedPartner(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Country:', selectedCountry);
    console.log('Selected Partner:', selectedPartner);
    console.log('Message:', message);
  };

  return (
    <>

    <div className="w-3/4 justify-center items-center ml-6 mr-6 mt-6">
      <div className="mt-5">
        <label htmlFor="country" className="block text-xl font-medium text-gray-700 mt-5">
          Select Country:
        </label>
        <select
          id="country"
          className="mt-1 flex w-full mb-6 py-2 px-6 border border-gray-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">-- Select --</option>
          <option value="country1">Country 1</option>
          <option value="country2">Country 2</option>
          <option value="country3">Country 3</option>
          <option value="country4">Country 4</option>
        </select>
      </div>
      <div className="mt-5">
        <label htmlFor="channelPartner" className="block text-xl font-medium text-gray-700 mt-5">
          Select Channel Partner:
        </label>
        <select
          id="channelPartner"
          className="mt-1 flex w-full mb-6 py-2 px-6 border border-gray-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={selectedPartner}
          onChange={handlePartnerChange}
        >
          <option value="">-- Select --</option>
          <option value="partner1">1.Referral ID</option>
          <option value="partner2">2.Referral ID</option>
          <option value="partner3">3.Referral ID</option>
          <option value="partner4">4.Referral ID</option>
        </select>
      </div>
      <p className="text-gray-900 text-2xl text-center mb-6 font-bold">New Message or Reply to Previous Chat</p>

      <form onSubmit={handleSubmit} className="w-3/4 justify-center items-center">
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
              className="inline-flex text-center items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
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

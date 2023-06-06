import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Partner = () => {
  const [activeSelection, setActiveSelection] = useState(null);
  const [data, setdata] = useState([]);
  const [country, setCountry] = useState("");
  const [referralId, setReferralId] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [payment, setpayment] = useState("")
  const [paymentinfo, setpaymentinfo] = useState([])
  const[filterdpayment, setfilterdpayment] = useState([])
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [tableData, setTableData] = useState([
    { date: "", leadName: "", solutionType: "", premisesCategory: "" },
  ]);

  const [raffercountry, setraffercountry] = useState("");
  const [rafferid, setrafferid] = useState("");
  const [tableDatas, setTableDatas] = useState([
    {
      subscriptionDate: "",
      leadName: "",
      solutionType: "",
      commissionAmount: "",
      paymentMode: "",
    },
  ]);
  const handleClick = (text) => {
    setActiveSelection(text);
  };

  useEffect(() => {
    fetch("http://localhost:5000/auth/admin/partnerinfo")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  useEffect(()=> {
    fetch(`http://localhost:5000/auth/payment/${payment}`)
    .then((res) => res.json())
    .then((data) => setpaymentinfo(data));
  },[payment])


  const renderPartnerDashboard = () => {
    return (
      <>
        <div className="block justify-center items-center h-64  mt-1">
          <div className="text-4xl font-bold tracking-tight text-gray-900 mt-6">
            Welcome to the Partner Dashboard
          </div>
          <div className="text-xl text-center  text-blue-900 ">
            <Link to="/Message">Click here for Message Feature</Link>
          </div>
        </div>
      </>
    );
  };

  const renderListOfChannelPartner = () => {
    const handleCountryChange = (event) => {
      const selectedcountry = event.target.value;

      setShowForm(false);
      const countryfilter = data.filter(
        (item) => item.country === selectedcountry
      );
      setCountry(countryfilter);
    };

    const handleReferralIdChange = (event) => {
      const selectedreffer = event.target.value;
      const refferidfilter = country.filter(
        (item) => item.partnerId === selectedreffer
      );
      setReferralId(refferidfilter);
      setShowForm(true);
    };

    return (
      <div className="p-4">
        <div className="mr-6 mt-5">
          <label
            htmlFor="country"
            className="block text-xl font-medium text-gray-700 mb-5"
          >
            List of Channel Partner
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

        {country && (
          <div className="mt-4">
            <label htmlFor="referralId" className="block mb-2">
              Referral ID:
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
        )}

        {showForm && (
          <div className="mt-4">
            <div className="border border-gray-300 rounded-lg shadow-lg p-4">
              {referralId?.map((item) => (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-4">
                      <strong>Full Name*:</strong>
                      <span className="ml-2">{item.partnerId}</span>
                    </p>
                    <p className="mb-4">
                      <strong>Full Name*:</strong>
                      <span className="ml-2">{item.name}</span>
                    </p>

                    <p className="mb-4">
                      <strong>Email Address*:</strong> {item.email}
                    </p>

                    <p className="mb-4">
                      <strong>Business Name*:</strong> {item.businessName}
                    </p>

                    <p>
                      <strong>Country*:</strong> {item.country}
                    </p>
                  </div>

                  <div>
                    <p className="mb-4">
                      <strong>STATE*:</strong> {item.state}
                    </p>

                    <p className="mb-4">
                      <strong>City*:</strong> {item.city}
                    </p>

                    <p className="mb-4">
                      <strong>Zip code*:</strong> {item?.zip}
                    </p>

                    <p className="mb-4">
                      <strong> Business Category*:</strong> {item.Businesscate}
                    </p>

                    <p>
                      <strong>PHONE NUMBER*:</strong> {item.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderReferralHistory = () => {
    const handleCountryChange = (event) => {
      const selectedcountry = event.target.value;
      setraffercountry(event.target.value);
      setShowForm(false);
      const countryfilter = data.filter(
        (item) => item.country === selectedcountry
      );
      setCountry(countryfilter);
    };

    const handleReferralIdChange = (event) => {
      const selectedreffer = event.target.value;
      setrafferid(event.target.value);
      const refferidfilter = country.filter(
        (item) => item.partnerId === selectedreffer
      );
      setReferralId(refferidfilter);
      setShowForm(true);
    };

    const handalesubmit = (e) => {
      e.preventDefault()
      const  date = e.target.date.value 
      const  lead = e.target.lead.value 
      const  solution = e.target.solution.value 
      const  promices = e.target.promices.value 
      const  data = {
        country : raffercountry,
        rafferid: rafferid,
        date: date,
        lead: lead,
        solution: solution,
        promices: promices,
      }
     
     fetch("http://localhost:5000/auth/admin/addrafferhistory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
     })
     .then(res=>res.json())
     .then(data => {
      console.log(data)
      toast.success(data)
     })
    };

    return (
      <div>
        <div className="block w-full mb-5">
          <div className="mr-6 mt-5">
            <label
              htmlFor="country"
              className="block text-xl font-medium text-gray-700 mb-5"
            >
              Update CP Dashboard [Referral History]
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
          {country && (
            <div className="mt-5">
              <label
                htmlFor="referralId"
                className="block text-lg font-medium text-gray-700 mb-5"
              >
                Select Referral ID:
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
          )}

          <>
            <div class="max-w-md mx-auto bg-white p-8 border-gray-300 border rounded-md shadow-sm mt-20">
              <form onSubmit={handalesubmit}>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Date{" "}
                  </label>
                  <input
                    name="date"
                    type="date"
                  
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Name Of Lead
                  </label>
                  <input
                    name="lead"
                    type="text"
                    placeholder=" Name Of Lead"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Solution type
                  </label>
                  <input
                    name="solution"
                    type="text"
                    placeholder="Solution type"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Category Of Promices
                  </label>
                  <input
                    name="promices"
                    type="tel"
                    placeholder=" Category Of Promices"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  class="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </>
        </div>
      </div>
    );
  };

  const renderCommissionHistory = () => {
    const handleCountryChange = (event) => {
      const selectedcountry = event.target.value;
      setraffercountry(event.target.value);
      setShowForm(false);
      const countryfilter = data.filter(
        (item) => item.country === selectedcountry
      );
      setCountry(countryfilter);
    };

    const handleReferralIdChange = (event) => {
       const selectedreffer = event.target.value;
      setrafferid(event.target.value);
      const refferidfilter = country.filter(
        (item) => item.partnerId === selectedreffer
      );
      setReferralId(refferidfilter);
      setShowForm(true);
    };
   
   

    const handalesubmit = (e) => {
      e.preventDefault()
      const  date = e.target.date.value 
      const  lead = e.target.lead.value 
      const  solution = e.target.solution.value 
      const  promices = e.target.promices.value 
        const  data = {
        country : raffercountry,
        rafferid: rafferid,
        date: date,
        lead: lead,
        solution: solution,
        promices: promices,
      }
     fetch("http://localhost:5000/auth/admin/commisionhistory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
     })
     .then(res=>res.json())
     .then(data => {
      toast.success("Data Insert success")
     })
     
    };

    return (
      <div>
        <div className="block w-full mb-5">
          <div className="mr-6 mt-5">
            <label
              htmlFor="country"
              className="block text-xl font-medium text-gray-700 mb-5"
            >
              Update CP Dashboard [Commission History]
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
          {country && (
            <div className="mt-5">
              <label
                htmlFor="referralId"
                className="block text-lg font-medium text-gray-700 mb-5"
              >
                Select Referral ID:
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
          )}

         
            <>
              <div class="max-w-md mx-auto bg-white p-8 border-gray-300 border rounded-md shadow-sm mt-20">
              <form onSubmit={handalesubmit}>
                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Date{" "}
                  </label>
                  <input
                    name="date"
                    type="date"
                  
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Name Of Lead
                  </label>
                  <input
                    name="lead"
                    type="text"
                    placeholder=" Name Of Lead"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Solution type
                  </label>
                  <input
                    name="solution"
                    type="text"
                    placeholder="Solution type"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Category Of Promices
                  </label>
                  <input
                    name="promices"
                    type="tel"
                    placeholder=" Category Of Promices"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  class="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                  Submit
                </button>
              </form>
            </div>
              
            </>
         
        </div>
      </div>
    );
  };

  const renderPayoutMode = () => {
  
    const handleCountryChange = (event) => {
     const selectedcountry = event.target.value;
      setraffercountry(event.target.value);
      setShowForm(false);
      const countryfilter = data.filter(
        (item) => item.country === selectedcountry
      );
      setCountry(countryfilter);
    };

    const handleReferralIdChange = (event) => {
      const selectedreffer = event.target.value;
     
      setrafferid(event.target.value);
      const refferidfilter = country.filter(
        (item) => item.partnerId === selectedreffer
      );
      setReferralId(refferidfilter);
      setpayment(selectedreffer)
    };

    const handlePaymentOptionChange = (e) => {
    const paymentmethod = e.target.value 
    setSelectedPaymentOption(paymentmethod);
    const seleteedpayment = paymentinfo.filter(item => item.payment.paymenttype === paymentmethod)
    setfilterdpayment(seleteedpayment);
    setShowTable(true)
    };

  
    return (
      <div>
        <div className="block w-full mb-5">
          <div className="mr-6 mt-5">
            <label
              htmlFor="country"
              className="block text-xl font-medium text-gray-700 mb-5"
            >
              Current Payout Mode of C.P.
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
          {country && (
            <div className="mt-5">
              <label
                htmlFor="referralId"
                className="block text-lg font-medium text-gray-700 mb-5"
              >
                Select Referral ID:
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
          )}

           
            <div className="mt-5 mb-4 ">
              <label
                htmlFor="paymentOption"
                className="block text-lg font-medium text-gray-700 mb-5"
              >
                Select Payment Option:
              </label>
              <select
                id="paymentOption"
               
                onChange={(e)=>handlePaymentOptionChange(e)}
                className="mt-1 block w-full py-2 mb-6  px-6 border border-gray-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">-- Select Payment Option --</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="paypal">PayPal</option>
                <option value="paymentlink">Payment Link</option>
              </select>
            </div>
          

          {showTable && selectedPaymentOption === "Bank Transfer" && (
            <div className=" border-2 mt-2 border-graay-900 rounded-lg">
             {
              filterdpayment?.map(item=> <div className="bg-white rounded-md shadow-sm  p-6 mt-2">
              <h2 className="text-lg font-medium text-gray-700 mb-3">
                Bank Transfer Details:
              </h2>
              <p>
                <strong>{item}</strong> 
              </p>
              <p>
                <strong>Account Number:</strong> 1234567890
              </p>
              <p>
                <strong>Bank Name:</strong> ABC Bank
              </p>
              <p>
                <strong>Bank Address:</strong> 123 Main Street, City, Country
              </p>
              <p>
                <strong>SWIFT Code:</strong> ABCD1234
              </p>
              <p>
                <strong>IFSC Code:</strong> IFSC1234
              </p>
              <p>
                <strong>Mobile Number:</strong> 123-456-7890
              </p>
              <p>
                <strong>Your Address:</strong> 456 Suburb Street, City,
                Country
              </p>
            </div> )
             }
            </div>
          )}

          {showTable && selectedPaymentOption === "paypal" && (
            <div className="mt-5">
              <div className="bg-white rounded-md shadow-sm p-4">
                <h2 className="text-lg font-medium text-gray-700 mb-3">
                  PayPal Details:
                </h2>
                <p>
                  <strong>PayPal Email:</strong> johndoe@example.com
                </p>
                <p>
                  <strong>Account Name:</strong> John Doe
                </p>
                <p>
                  <strong>Address:</strong> 123 PayPal Street, City, Country
                </p>
              </div>
            </div>
          )}

          {showTable && selectedPaymentOption === "paymentlink" && (
            <div className="mt-5">
              <div className="bg-white rounded-md shadow-sm p-4">
                <h2 className="text-lg font-medium text-gray-700 mb-3">
                  Payment Link:
                </h2>
                <p>
                  <strong>Link:</strong> https://helloWorld!.com/
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className={`w-64 p-4 mx-auto  mt-3 border-gray-900 cursor-pointer text-gray-900 text-center bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
            activeSelection === "Partner Dashboard" ? "bg-blue-200" : ""
          }`}
          onClick={() => handleClick("Partner Dashboard")}
        >
          <h5 className="text-2xl font-bold  text-gray-900">
            Partner Dashboard
          </h5>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6 mb-5">
          <div
            className={`w-64 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
              activeSelection === "List of Channel Partner" ? "bg-blue-200" : ""
            }`}
            onClick={() => handleClick("List of Channel Partner")}
          >
            <h5 className="text-lg font-bold text-white">
              List of Channel Partner
            </h5>
            <p className="text-sm text-gray-300 mt-2">Click to view partners</p>
          </div>

          <div
            className={`w-64 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
              activeSelection === "Update CP Dashboard [Referral History]"
                ? "bg-blue-200"
                : ""
            }`}
            onClick={() =>
              handleClick("Update CP Dashboard [Referral History]")
            }
          >
            <h5 className="text-lg font-bold text-white">
              Update CP Dashboard [Referral History]
            </h5>
            <p className="text-sm text-gray-300 mt-2">
              Click to update referral history
            </p>
          </div>

          <div
            className={`w-64 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
              activeSelection === "Update CP Dashboard [Commission History]"
                ? "bg-blue-200"
                : ""
            }`}
            onClick={() =>
              handleClick("Update CP Dashboard [Commission History]")
            }
          >
            <h5 className="text-lg font-bold text-white">
              Update CP Dashboard [Commission History]
            </h5>
            <p className="text-sm text-gray-300 mt-2">
              Click to update commission history
            </p>
          </div>

          <div
            className={`w-68 p-4 cursor-pointer bg-gray-900 border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-900 ${
              activeSelection === "Current Payout Mode of C.P."
                ? "bg-blue-200"
                : ""
            }`}
            onClick={() => handleClick("Current Payout Mode of C.P.")}
          >
            <h5 className="text-lg font-bold text-white">
              Current Payout Mode of C.P.
            </h5>
            <p className="text-sm text-gray-300 mt-2">
              Click to view current payout mode
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/3 flex justify-center items-center mt-6 ">
        {activeSelection === "Partner Dashboard" && renderPartnerDashboard()}
        {activeSelection === "List of Channel Partner" &&
          renderListOfChannelPartner()}
        {activeSelection === "Update CP Dashboard [Referral History]" &&
          renderReferralHistory()}
        {activeSelection === "Update CP Dashboard [Commission History]" &&
          renderCommissionHistory()}
        {activeSelection === "Current Payout Mode of C.P." &&
          renderPayoutMode()}

        {activeSelection !== "Partner Dashboard" &&
          activeSelection !== "List of Channel Partner" &&
          activeSelection !== "Update CP Dashboard [Referral History]" &&
          activeSelection !== "Update CP Dashboard [Commission History]" &&
          activeSelection !== "Current Payout Mode of C.P." && (
            <div className="text-3xl">
              {/* Default component content */}
              <h1>Select above content</h1>
            </div>
          )}
      </div>
    </>
  );
};

export default Partner;

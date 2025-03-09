"use client";

import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shortUrl, setshortUrl] = useState("");
  const [generated, setgenerated] = useState("");

  const handleclick = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${result.shorturl}`);
        seturl("");
        setshortUrl("");

        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto max-w-lg bg-white shadow-lg rounded-3xl my-16 p-8 border border-purple-200">
      <p className="text-2xl font-bold text-center text-purple-500 mb-6">
        Generate Your Short URLs
      </p>

      <div className="flex flex-col gap-4">
        <input
          value={url}
          onChange={(e) => seturl(e.target.value)}
          className="border-2 border-purple-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          type="text"
          placeholder="Enter your URL"
        />
        <input
          value={shortUrl}
          onChange={(e) => setshortUrl(e.target.value)}
          className="border-2 border-purple-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          type="text"
          placeholder="Enter your preferred text for Shortened URL"
        />
      </div>

      <div className="flex flex-col items-center mt-6">
        <button
          onClick={handleclick}
          className="w-1/3 bg-purple-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-purple-700 transition-all"
        >
          Generate
        </button>

        {generated && (
          <div className="mt-6 p-4 bg-purple-100 border border-purple-300 rounded-lg text-center shadow-sm w-full">
            <span className="text-purple-700 font-semibold">
              Your Link:{" "}
              <Link
                href={generated}
                className="text-blue-600 font-bold underline hover:text-blue-800 transition-all"
              >
                {generated}
              </Link>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shorten;

// "use client";

// import Link from "next/link";
// import React, { useState } from "react";

// const Shorten = () => {
//   const [url, setUrl] = useState("");
//   const [shortUrl, setShortUrl] = useState("");
//   const [generated, setGenerated] = useState("");

//   const handleClick = async () => {
//     const raw = JSON.stringify({ url, shorturl: shortUrl });

//     try {
//       const response = await fetch("/api/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: raw,
//       });

//       const result = await response.json();
//       console.log("API Response:", result); // ✅ Debugging

//       if (result.success) {
//         setGenerated(result.shorturl); // ✅ API now returns the full URL
//         setUrl("");
//         setShortUrl("");
//         alert(result.message);
//       } else {
//         alert(result.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="mx-auto max-w-lg bg-white shadow-lg rounded-3xl my-16 p-8 border border-purple-200">
//       <p className="text-2xl font-bold text-center text-purple-500 mb-6">
//         Generate Your Short URLs
//       </p>

//       <div className="flex flex-col gap-4">
//         <input
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           className="border-2 border-purple-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
//           type="text"
//           placeholder="Enter your URL"
//         />
//         <input
//           value={shortUrl}
//           onChange={(e) => setShortUrl(e.target.value)}
//           className="border-2 border-purple-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
//           type="text"
//           placeholder="Enter your preferred text for Shortened URL"
//         />
//       </div>

//       <div className="flex flex-col items-center mt-6">
//         <button
//           onClick={handleClick}
//           className="w-1/3 bg-purple-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-purple-700 transition-all"
//         >
//           Generate
//         </button>

//         {generated && (
//           <div className="mt-6 p-4 bg-purple-100 border border-purple-300 rounded-lg text-center shadow-sm w-full">
//             <span className="text-purple-700 font-semibold">
//               Your Link:{" "}
//               <Link
//                 href={generated} // ✅ API now provides the full URL
//                 className="text-blue-600 font-bold underline hover:text-blue-800 transition-all"
//               >
//                 {generated}
//               </Link>
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Shorten;

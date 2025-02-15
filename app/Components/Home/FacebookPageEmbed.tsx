import React, { useEffect } from 'react';

const FacebookPageEmbed = () => {
  useEffect(() => {
    // Load the Facebook SDK script only once when the component is mounted
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex max-w-full">
      {/* Step 2: Embed the Facebook plugin */}
      <div
        className="fb-page w-full lg:w-[1000px] "
        data-href="https://web.facebook.com/1579776805484814?ref=embed_page"
        data-tabs="timeline"
        data-width="500" // Adjust width as per your requirement
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://web.facebook.com/1579776805484814?ref=embed_page"
          className="fb-xfbml-parse-ignore border-2 border-red-500"
        >
          <a href="https://web.facebook.com/1579776805484814?ref=embed_page" className="text-black">
            Mekedonia Homes
          </a>
        </blockquote>
      </div>

      {/* Optional: Add a follow section if needed */}
      <div className="flex flex-col pt-20 ">
        <p className="text-[#ED3604] text-7xl font-vidaloka pb-20">Follow us on Facebook</p>
        <button className="flex bg-blue-500 w-20 items-center justify-center gap-2 rounded font-bold text-base py-1">
          <svg
            height={16}
            width={16}
            viewBox="0 -0.5 21 21"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>like [#1386]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-219.000000, -760.000000)" fill="#ffffff">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M163,610.021159 L163,618.021159 C163,619.126159 163.93975,620.000159 165.1,620.000159 L167.199999,620.000159 L167.199999,608.000159 L165.1,608.000159 C163.93975,608.000159 163,608.916159 163,610.021159 M183.925446,611.355159 L182.100546,617.890159 C181.800246,619.131159 180.639996,620.000159 179.302297,620.000159 L169.299999,620.000159 L169.299999,608.021159 L171.104948,601.826159 C171.318098,600.509159 172.754498,599.625159 174.209798,600.157159 C175.080247,600.476159 175.599997,601.339159 175.599997,602.228159 L175.599997,607.021159 C175.599997,607.573159 176.070397,608.000159 176.649997,608.000159 L181.127196,608.000159 C182.974146,608.000159 184.340196,609.642159 183.925446,611.355159"
                      id="like-[#1386]"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>

          <p>Like</p>
        </button>
      </div>
    </div>
  );
};

export default FacebookPageEmbed;

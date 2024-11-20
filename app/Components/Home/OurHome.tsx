import React from 'react'

const OurHome = () => {
  return (
    <div className="w-[1100px] mx-auto flex gap-8 text-black justify-between items-center pt-36">
    <div className="flex gap-10">
    <img
        src="https://mekedoniahomes.org/wp-content/uploads/2023/02/photo_2021-11-28_20-49-57.jpg"
        alt="Mekedonia Homes"
        width={600}
        height= {500}
        className="image-from-distance"
      />
      <div>
        <h1 className="section section-1 text-7xl font-vidaloka text-[#ED3604] font-bold pb-2">Our Home is</h1>
        <p className=" section section-4 font-sans text-[#757272] text-base">
        dedicated to improving the lives of individuals facing various challenges such as the elderly, those with mental disabilities, physical impairments, visual impairments, and individuals who are bedridden. We strive to provide comprehensive support by offering basic services including food, clothing, shelter, hygiene facilities, medical care, education, and more to our residents living in our center. Our aim is to ensure that each resident has access to the resources they need to live a fulfilling and comfortable life.
        </p>

        <div className="flex pt-5 pb-10">
          <div>
            <svg height = "50" width = "50"
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)" stroke="#ed3604"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.54004 11.77L12 14L19 10.5M7.54004 11.77V17.77M7.54004 11.77L12 9.54004M7.54004 11.77L5 10.5M7.54004 17.77V21M7.54004 17.77L12 20L19 16.5V10.5M7.54004 17.77L5 16.5V10.5M19 10.5L22 9L12 4L2 9L5 10.5" stroke="#ed3604" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <h3 className="text-black font-vidaloka text-xl pt-3">We Love Humanity</h3>
            <p className="text-[#757272] text-base leading-relaxed">Providing encouragement and rehabilitation to develop the physical and mental capacities of disabled individuals.</p>
          </div>

          <div className="text-[#757272]">
            <svg width = "50" height = "50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.48877 6.00387C2.76311 7.24787 2.52428 8.97403 2.97014 10.7575C3.13059 11.3992 3.59703 12.2243 4.33627 13.174C5.06116 14.1052 5.9864 15.0787 6.96636 16.0127C8.90945 17.8648 11.0006 19.4985 12 20.254C12.5679 19.8247 13.4884 19.1118 14.5338 18.2364C14.7154 18.0844 14.9444 18 15.1812 18H15.2755C16.1864 18 16.6096 19.1044 15.9123 19.6905C14.7762 20.6456 13.7775 21.418 13.181 21.8683C12.4803 22.3974 11.5197 22.3974 10.819 21.8683C9.80433 21.1022 7.62583 19.4042 5.58648 17.4605C4.56733 16.4891 3.56585 15.4402 2.75806 14.4025C1.96461 13.3832 1.2924 12.2927 1.02986 11.2425C0.475714 9.02597 0.736884 6.75213 1.76121 4.99613C2.80291 3.21035 4.62017 2 6.99998 2C9.59038 2 11.0969 3.95772 11.8944 5.55278C11.9307 5.62535 11.9659 5.69784 12 5.77011C12.0341 5.69784 12.0693 5.62535 12.1056 5.55279C12.9031 3.95772 14.4096 2 17 2C19.3798 2 21.1971 3.21035 22.2388 4.99613C23.1118 6.49271 23.4305 8.36544 23.1625 10.2583C23.1008 10.6946 22.7141 11 22.2735 11C21.6284 11 21.169 10.3586 21.2387 9.71731C21.3774 8.44008 21.1371 7.07683 20.5112 6.00387C19.8029 4.78965 18.6202 4 17 4C15.5904 4 14.5969 5.04228 13.8944 6.44721C13.5569 7.12228 13.3275 7.80745 13.1823 8.33015C13.1102 8.58959 13.0602 8.80435 13.0286 8.95172C12.9167 9.47392 12.3143 9.5 12 9.5C11.6857 9.5 11.0823 9.46905 10.9714 8.95172C10.9398 8.80436 10.8898 8.58959 10.8177 8.33015C10.6725 7.80745 10.4431 7.12229 10.1056 6.44722C9.40308 5.04228 8.40956 4 6.99998 4C5.37979 4 4.19706 4.78965 3.48877 6.00387Z" fill="#f55d32"></path> <path d="M15.9191 9.60608C15.7658 9.24819 15.4186 9.01187 15.0294 9.00043C14.6402 8.98899 14.2797 9.20452 14.1056 9.55279L12.382 13H9C8.44771 13 8 13.4477 8 14C8 14.5523 8.44771 15 9 15H13C13.3788 15 13.725 14.786 13.8944 14.4472L14.9302 12.3757L17.0808 17.3939C17.2215 17.7221 17.5265 17.9504 17.881 17.9929C18.2355 18.0354 18.5858 17.8856 18.8 17.6L21.5 14H23C23.5523 14 24 13.5523 24 13C24 12.4477 23.5523 12 23 12H21C20.6852 12 20.3888 12.1482 20.2 12.4L18.2378 15.0163L15.9191 9.60608Z" fill="#f55d32"></path> </g></svg>                    
            <h3 className="text-black font-vidaloka text-xl pt-3">Medical Service</h3>
            <p className="text-lg">Providing medical and health check services to promote wellbeing</p>
          
          </div>
        </div>

        <a href = "#" className="bg-[#ed3604] hover:bg-[#e1ce0b] duration-300 px-12 rounded text-lg py-5 text-white">
              Explore More
        </a>


      </div>
    </div>
  </div>
  )
}

export default OurHome
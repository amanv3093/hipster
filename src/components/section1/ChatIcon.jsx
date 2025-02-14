import msg from "../../assets/168-r-br.svg"; // Replace with your custom image path

function ChatIcon() {
  return (
    <div className="fixed bottom-6 right-6">
      {/* Outer container */}
      <div className="relative">
        <div className="absolute -top-[32px] -left-[40px] rotate-[1deg] w-[8rem] h-[5rem]">
          <img src={msg} className="" />
        </div>

        {/* Chat Icon Circle */}
        <div className="bg-teal-600 h-16 w-16 rounded-full flex justify-center items-center shadow-lg relative">
          {/* Chat Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            height="24"
            width="24"
            fill="white"
            role="img"
            className="tawk-min-chat-icon text-white"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"
            />
          </svg>

          {/* Notification Badge */}
          <div className="absolute top-[1px] right-[3px] bg-red-800 h-5 w-5 rounded-full flex justify-center items-center text-xs text-white font-bold">
            1
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatIcon;

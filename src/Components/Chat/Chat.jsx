import React from "react";
import asaan from "../../assets/images/asaan.png";
import phone from "../../assets/images/phone.png";
import { FaSearch } from "react-icons/fa";
import { FaRegCommentDots, FaRegBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { TiMessageTyping } from "react-icons/ti";
import { HiDotsVertical } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { LuSend } from "react-icons/lu";
import pin from "../../assets/images/pin.png";

const Chat = () => {
  const chats = [
    {
      name: "Kristin Watson",
      subtitle: "Redmi 12C (4GB/128GB)",
      time: "12m",
      img: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Kristin Watson",
      subtitle: "Redmi 12C (4GB/128GB)",
      time: "12m",
      img: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Jane Cooper",
      subtitle: "Redmi 12C (4GB/128GB)",
      time: "8m",
      img: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Robert Fox",
      subtitle: "Redmi 12C (4GB/128GB)",
      time: "15m",
      img: "https://i.pravatar.cc/150?img=22",
    },
    {
      name: "Kristin Watson",
      subtitle: "Redmi 12C (4GB/128GB)",
      time: "12m",
      img: "https://i.pravatar.cc/150?img=47",
    },
  ];

  const messages = [
    { from: "other", text: "I'll Be There In 2 Mins", time: "10:43 PM" },
    { from: "other", text: "Aww", time: "10:43 AM" },
    { from: "me", text: "Haha Oh Man", time: "10:43 AM" },
    { from: "other", text: "Wow, This Is Really Epic😂😂", time: "10:43 AM" },
    { from: "me", text: "Omg, This Is Amazing", time: "10:44 AM" },
    { from: "me", text: "Perfect!", time: "10:45 AM" },
    { from: "me", text: "How Are You?", time: "10:45 AM" },
  ];

  return (
    <div className="main-div">
      <div className="flex flex-row ">
        <div className="min-h-screen bg-white px-6 py-8 text-white mt-2">
          <h3 className="text-black text-[36px] mb-5 font-bold mt-30">Inbox</h3>
          {/* Filters */}
          <div className="flex gap-4 mb-10 h-10">
            <button className="category-btn bg-[#2BBEF9]">All Chats</button>
            <button className="category-btn bg-[#2BBEF9]">Unread Chsts</button>
            <button className="category-btn bg-[#2BBEF9]">Important</button>
          </div>

          {/* Search */}
          <div className="bg-white rounded-full px-4 py-3 flex items-center gap-3 mb-6">
            <IoSearch className="text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search Messages"
              className="outline-none w-full text-black"
            />
          </div>

          {/* Chat List */}
          <div className="space-y-4 w-[30%] h-[10px]">
            {chats.map((chat, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-2xl shadow-md ${
                  {
                    true: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white",
                    false: "bg-white text-black",
                  }[chat.active ? true : false]
                }`}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={chat.img}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-[16px]">{chat.name}</h4>
                    <p
                      className={`text-[13px] ${
                        chat.active ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      {chat.subtitle}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-[12px] ${
                    chat.active ? "text-white/80" : "text-gray-400"
                  }`}
                >
                  {chat.time}
                </span>
              </div>
            ))}
          </div>

          <div className=" w-200  border-2 border-[#00000030] rounded-xl shadow-lg flex flex-col h-[700px] bg-white ml-100 -mt-80 mb-60 ">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b ">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-black">Usman Saeed</h4>
                  <p className="text-sm text-gray-500">
                    Last Active 3Hours Ago
                  </p>
                </div>
              </div>
              {/* <div className="flex gap-5">
          <button className="text-gray-600 ">💬</button>
          <button className="text-gray-600">📞</button>
          <button className="text-gray-600">✖</button>
        </div> */}

              <div className="flex items-center gap-4">
                {/* Message */}
                <TiMessageTyping
                  size={24}
                  className="text-black cursor-pointer"
                />

                {/* Phone */}
                <FaPhoneAlt size={22} className="text-black cursor-pointer" />

                {/* Dots Vertical */}
                <HiDotsVertical
                  size={22}
                  className="text-black cursor-pointer"
                />

                {/* Cross / Close */}
                <RxCross1 size={20} className="text-black cursor-pointer" />
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-end ${
                    msg.from === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.from === "other" && (
                    <img
                      src="https://i.pravatar.cc/150?img=12"
                      alt="User"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                  )}
                  <div
                    className={`p-2 rounded-xl max-w-[70%] text-sm ${
                      msg.from === "me"
                        ? "bg-blue-100 text-black rounded-br-none"
                        : "bg-gray-100 text-black rounded-bl-none"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="text-[10px] text-gray-400 ml-1">
                      {msg.time}
                    </span>
                  </div>
                  {msg.from === "me" && (
                    <img
                      src="https://i.pravatar.cc/150?img=5"
                      alt="Me"
                      className="w-8 h-8 rounded-full ml-2"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* wuestions and others button  */}
            <div className="w-full flex justify-center mt-4 gap-4">
              {/* First Button - Question */}
              <button className="w-[40%] bg-black text-white rounded-full py-2 font-medium">
                Question
              </button>

              {/* Second Button - Others */}
              <button className="w-[40%] !bg-white text-black border-[3px] border-black rounded-full py-2 font-medium">
                Others
              </button>
            </div>

            {/* Input Box */}
            <div className="flex items-center p-4 border-t gap-2">
              <img src={pin} alt="" className="w-5 h-5" />
              <input
                type="text"
                placeholder="Type A Message"
                className="flex-1 border rounded-full px-4 py-2 outline-none text-black"
              />
              <LuSend size={24} className="text-black cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

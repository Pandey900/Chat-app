import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmount)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome Johny Liver </p>
        <p>Select The Chat To Start Messaging</p>
        <TiMessages className="text-center text-3xl md:text-6xl" />
      </div>
    </div>
  );
};
// STARTED CODE FROM THE BEGINNING

// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//       <>
//         <div className="bg-slate-500 px-4 py-2 mb-2">
//           <span className="label-text">To</span>{" "}
//           <span className="text-gray-900 font-bold">Johny Liver</span>
//         </div>
//         <Messages />
//         <MessageInput />
//       </>
//     </div>
//   );
// };

// export default MessageContainer;

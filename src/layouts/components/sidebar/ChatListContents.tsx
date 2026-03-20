import { useGetChatList } from "../../hooks/useQuery/useGetChatList";

interface ChatListContentsProps {
  keyword: string;
}

const ChatListContents = ({ keyword }: ChatListContentsProps) => {
  const { data } = useGetChatList(0, 30, keyword);

  return (
    <>
      {data.content.map((chat) => (
        <button
          key={chat.id}
          type="button"
          className="w-full h-7.25 px-3.5 text-left text-h5-r text-list hover:text-list-blue truncate shrink-0 hover:bg-sub-blue rounded-[20px] active:scale-95 transition-colors cursor-pointer"
        >
          {chat.title}
        </button>
      ))}
    </>
  );
};

export default ChatListContents;

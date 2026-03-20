import { useGetChatList } from "../../hooks/useQuery/useGetChatList";
import useNavigation from "@/hooks/useNavigation";

interface ChatListContentsProps {
  keyword: string;
}

const ChatListContents = ({ keyword }: ChatListContentsProps) => {
  const { data } = useGetChatList(0, 30, keyword);
  const { goTo } = useNavigation();

  const handleChatClick = (id: number) => {
    goTo(`/chat/${id}`);
  };

  return (
    <>
      {data.content.map((chat) => (
        <button
          key={chat.id}
          type="button"
          onClick={() => handleChatClick(chat.id)}
          className="w-full h-7.25 px-3.5 text-left text-h5-r text-list hover:text-list-blue truncate shrink-0 hover:bg-sub-blue rounded-[20px] active:scale-95 transition-colors cursor-pointer"
        >
          {chat.title}
        </button>
      ))}
    </>
  );
};

export default ChatListContents;

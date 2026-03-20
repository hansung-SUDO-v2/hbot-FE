import { useParams } from "react-router-dom";
import useNavigation from "@/hooks/useNavigation";
import { useGetChatList } from "../../hooks/useQuery/useGetChatList";

interface ChatListContentsProps {
  keyword: string;
}

const ChatListContents = ({ keyword }: ChatListContentsProps) => {
  const { data } = useGetChatList(0, 30, keyword);
  const { chatId } = useParams(); // 현재 선택된 id
  const { goTo } = useNavigation();

  const handleChatClick = (id: number) => {
    goTo(`/chat/${id}`);
  };

  return (
    <>
      {data.content.map((chat) => {
        const isSelected = Number(chatId) === chat.id;

        return (
          <button
            key={chat.id}
            type="button"
            onClick={() => handleChatClick(chat.id)}
            className={`
              w-full h-7.25 px-3.5 text-left text-h5-r truncate shrink-0 rounded-[20px] active:scale-95 transition-colors cursor-pointer text-list 
              ${isSelected ? "text-list-blue bg-sub-blue" : "hover:text-list-blue hover:bg-sub-blue"}
            `}
          >
            {chat.title}
          </button>
        );
      })}
    </>
  );
};

export default ChatListContents;

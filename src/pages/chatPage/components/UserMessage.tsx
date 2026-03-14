interface UserMessageProps {
  content: string;
}

const UserMessage = ({ content }: UserMessageProps) => {
  return (
    <div className="flex justify-end">
      <div className="text-r-20 text-chat-text bg-bg-user px-8 py-2.5 rounded-tl-[2.25rem] rounded-tr-none rounded-br-[2.25rem] rounded-bl-[2.25rem] max-w-[80%]">
        {content}
      </div>
    </div>
  );
};

export default UserMessage;

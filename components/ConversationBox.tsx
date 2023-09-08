import React, { useState, useEffect } from "react";
import OpenAI from "openai";
import UserReply from "./UserReply";
import AssistantReply from "./AssistantReply";
import AssistantLoading from "./AssistantLoading";

interface ConversationBoxProps {
  message: OpenAI.Chat.ChatCompletionMessage;
  isLoading?: boolean;
}

const ConversationBox = ({ message, isLoading }: ConversationBoxProps) => {
  const [showLoading, setShowLoading] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      setShowLoading(false);
    }
  }, [isLoading]);

  return (
    <div className="flex flex-col gap-y-5 p-3">
      {message.role === "user" ?(
        <UserReply message={message} />
      )  : <AssistantReply message={message}/>}
      {showLoading && <AssistantLoading />}
    </div>
  );
};

export default ConversationBox;

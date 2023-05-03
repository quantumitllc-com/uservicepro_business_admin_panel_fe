import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";

import { useChatStore } from "store/chat";
import { IChatType } from "types/dashboard/chat";
import { useSocket } from "hooks/useSocket";

export const useChat = () => {
  const socket = useSocket();
  const [isLoading, setIsLoading] = useState(true);
  const { chats, setChats } = useChatStore(
    (state) => ({
      chats: state.chats,
      setChats: state.setChats,
    }),
    shallow
  );

  useEffect(() => {
    socket?.connect();
    socket?.on("chats", (chats: IChatType[]) => {
      if (Array.isArray(chats)) {
        setChats(chats);
      }
      setIsLoading(false);
    });

    return () => {
      socket?.off("chats");
      socket?.disconnect();
    };
  }, [socket]);

  return {
    chats,
    isLoading,
  };
};

import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { shallow } from "zustand/shallow";

import { getMessages } from "services/dashboard/chat";
import { useChatStore } from "store/chat";
import { useEffect, useState } from "react";
import { useSocket } from "hooks/useSocket";
import { getTokens } from "utils/getTokens";
import { IChatType } from "types/dashboard/chat";

export const useMessages = () => {
  const socket = useSocket();
  const tokens = getTokens();
  const {
    size,
    page,
    meta,
    // setChatId,
    setChats,
    chatId,
    setMessages,
    currentChat,
    messages,
    hasMore,
    setHasMore,
    setIncrementPage,
    setNewMessage,
    setLastUnreadMessage,
  } = useChatStore(
    (state) => ({
      size: state.size,
      page: state.page,
      meta: state.meta,
      setChatId: state.setChatId,
      setChats: state.setChats,
      chatId: state.chatId,
      setMessages: state.setMessages,
      currentChat: state.currentChat,
      messages: state.messages,
      hasMore: state.hasMore,
      setHasMore: state.setHasMore,
      setIncrementPage: state.setIncrementPage,
      setNewMessage: state.setNewMessage,
      setLastUnreadMessage: state.setLastUnreadMessage,
    }),
    shallow
  );
  const [message, setMessage] = useState("");

  const { isLoading, isFetching } = useQuery(
    ["messages", page, chatId],
    () => {
      return getMessages({ size, page, chatId });
    },
    {
      select: (data) => data.data,
      onError: (error: any) => {
        toast(error.message);
      },
      onSuccess: (data) => {
        if (data.meta.totalCount > 0) {
          setHasMore(true);
          setMessages(data);
        }
      },
      keepPreviousData: true,
    }
  );

  const handleNext = () => {
    if (!isFetching && !isLoading) {
      if (meta.totalCount > messages.length) {
        setIncrementPage();
      } else {
        setHasMore(false);
      }
    }
  };

  useEffect(() => {
    socket?.connect();

    socket?.emit("join", { chatId });
    socket?.on("msg", (msg) => {
      if (msg.chatId === chatId && msg.userId !== tokens.id) {
        // coming message
        setNewMessage([msg]);
        if (chatId) {
          setLastUnreadMessage(msg.message, chatId);
        }
      }
    });

    socket?.on("chats", (chats: IChatType[]) => {
      setChats(chats);
    });

    return () => {
      socket?.off("msg");
      socket?.off("chats");
      socket?.disconnect();
    };
  }, [chatId, socket]);

  return {
    handleNext,
    isLoading,
    chatId,
    setMessages,
    currentChat,
    messages,
    hasMore,
    message,
    setMessage,
  };
};

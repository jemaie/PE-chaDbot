import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { ChatSession, Message } from '@/types/chat';

export const useChatStore = defineStore('chat', () => {
  const sessions = ref<ChatSession[]>([]);
  const activeChatId = ref<string | null>(null);
  const isShortAnswer = ref<boolean>(true);

  const activeChat = computed(() => 
    sessions.value.find(session => session.id === activeChatId.value)
  );

  function createNewChat() {
    const newChat: ChatSession = {
      id: crypto.randomUUID(),
      title: 'New Chat',
      messages: [],
      actionablePoints: '',
      createdAt: new Date(),
      lastUpdated: new Date(),
      isEditing: false
    };
    sessions.value.push(newChat);
    activeChatId.value = newChat.id;
  }

  function deleteChat(chatId: string) {
    sessions.value = sessions.value.filter((session) => session.id !== chatId);

    if (activeChatId.value === chatId) {
      activeChatId.value = sessions.value.length ? sessions.value[0].id : null;
    }
  }

  function addMessage(message: Omit<Message, 'id'>, points?: string) {
    if (!activeChatId.value) {
      createNewChat();
    }
    
    const chat = sessions.value.find(s => s.id === activeChatId.value);
    if (chat) {
      chat.messages.push({
        ...message,
        id: crypto.randomUUID()
      });
      if (points) {
        chat.actionablePoints = points;
      }
      chat.lastUpdated = new Date();
    }
  }

  return {
    sessions,
    activeChatId,
    isShortAnswer,
    activeChat,
    createNewChat,
    deleteChat,
    addMessage
  };
}, {
  persist: true
});
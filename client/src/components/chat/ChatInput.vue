<script setup lang="ts">
import { ref } from 'vue';
import { useChatStore } from '../../stores/chat';
import { chatService } from '../../services/chatService.ts';

const chatStore = useChatStore();
const messageInput = ref('');

const sendMessage = async () => {
  if (!messageInput.value.trim()) return;

  chatStore.addMessage({
    content: messageInput.value,
    role: 'user',
    timestamp: new Date()
  });

  messageInput.value = '';

  const activeChat = chatStore.activeChat;
  const messageHistory = activeChat.messages.map((msg) => ({
      role: msg.role,
      content: msg.content
    }));

  await chatService.sendMessage(messageHistory, chatStore.detailedAnswer).then((res) => {
    chatStore.addMessage({
          content: res.data.message,
          role: 'assistant',
          timestamp: new Date()
        },
        res.data.actions
    );
  });

};
</script>

<template>
  <div class="border-t dark:border-gray-700 p-4">
    <div class="flex items-center gap-4">
      <button
        @click="chatStore.detailedAnswer = !chatStore.detailedAnswer"
        class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        :title="chatStore.detailedAnswer ? 'Change to Short Answer' : 'Change to Detailed Answer'"
      >
        <svg
          class="w-6 h-6"
          :class="{ 'text-blue-500': chatStore.detailedAnswer }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h8"
          />
        </svg>
      </button>

      <div class="flex-1 relative">
        <input
          v-model="messageInput"
          @keyup.enter="sendMessage"
          type="text"
          placeholder="Type your message..."
          class="w-full px-4 py-2 rounded-full border dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          @click="sendMessage"
          class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            class="w-5 h-5 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
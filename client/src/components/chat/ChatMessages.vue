<script setup lang="ts">
import { watch, ref } from 'vue';
import { useChatStore } from '../../stores/chat';
import MessageBubble from './MessageBubble.vue';

const chatStore = useChatStore();
const messagesContainer = ref<HTMLDivElement | null>(null);

watch(
  () => chatStore.activeChat?.messages,
  () => {
    setTimeout(() => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
      }
    }, 0);
  },
  { deep: true }
);
</script>

<template>
  <div
    ref="messagesContainer"
    class="flex-1 overflow-y-auto px-6 py-8"
  >
    <div class="max-w-4xl mx-auto w-full">
      <template v-if="chatStore.activeChat">
        <MessageBubble
          v-for="message in chatStore.activeChat.messages"
          :key="message.id"
          :message="message"
        />
      </template>
      <div v-else class="flex items-center justify-center h-full text-gray-500">
        Select a chat or start a new conversation
      </div>
    </div>
  </div>
</template>
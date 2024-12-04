<script setup lang="ts">
import type { Message } from '../../types/chat';

defineProps<{
  message: Message;
}>();
</script>

<template>
  <div
    class="flex mb-4"
    :class="message.sender === 'user' ? 'justify-end' : 'justify-start'"
  >
    <div
      class="max-w-[70%] rounded-lg px-4 py-2"
      :class="[
        message.sender === 'user'
          ? 'bg-blue-500 text-white'
          : 'bg-gray-100 dark:bg-gray-700',
      ]"
    >
      <p>{{ message.content }}</p>
      <span class="text-xs opacity-70 mt-1 block">
        {{ new Date(message.timestamp).toLocaleTimeString() }}
      </span>
    </div>
  </div>
</template>
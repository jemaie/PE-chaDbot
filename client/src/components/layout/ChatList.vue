<script setup lang="ts">
import {useChatStore} from '../../stores/chat.ts';

const chatStore = useChatStore();

const startEditing = (sessionId: string) => {
  const session = chatStore.sessions.find((session) => session.id === sessionId);
  if (session) {
    session.isEditing = true;
  }
};

const stopEditing = (sessionId: string, newTitle: string) => {
  const session = chatStore.sessions.find((session) => session.id === sessionId);
  if (session) {
    session.isEditing = false;
    session.title = newTitle.trim() || 'Untitled Chat';
  }
};
</script>

<template>
  <div
      v-for="session in chatStore.sessions"
      :key="session.id"
      @click="chatStore.activeChatId = session.id"
      class="px-4 py-2 cursor-pointer transition-colors"
      :class="{
          'bg-gray-200 dark:bg-gray-700': session.id === chatStore.activeChatId,
          'hover:bg-gray-100 dark:hover:bg-gray-700': session.id !== chatStore.activeChatId
        }"
  >
    <div class="group flex items-center justify-between">
      <div class="flex-1 min-w-0">
        <template v-if="session.id === chatStore.activeChatId">
          <h3
              v-if="!session.isEditing"
              class="font-medium truncate"
              @click.stop="session.id === chatStore.activeChatId && startEditing(session.id)"
          >
            {{ session.title }}
          </h3>
          <input
              v-else
              v-model="session.title"
              @blur="stopEditing(session.id, session.title)"
              @keyup.enter="stopEditing(session.id, session.title)"
              class="font-medium truncate w-full bg-gray-100 dark:bg-gray-700 border-b-2 border-blue-500 focus:border-blue-700 rounded-md px-1 py-1 outline-none transition duration-150"
          />
        </template>
        <h3 v-else class="font-medium truncate">{{ session.title }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ new Date(session.lastUpdated).toLocaleString() }}
        </p>
      </div>

      <button
          v-if="session.id === chatStore.activeChatId"
          @click="chatStore.deleteChat(session.id)"
          class="p-1.5 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-opacity duration-200"
      >
        <svg
            class="w-5 h-5 text-gray-600 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
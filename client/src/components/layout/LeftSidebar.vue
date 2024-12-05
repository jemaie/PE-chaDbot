<script setup lang="ts">
import ChatList from './ChatList.vue';
import { ref } from 'vue';
import { useChatStore } from '../../stores/chat';
import { useThemeStore } from '../../stores/theme';

const isExpanded = ref(true);
const chatStore = useChatStore();
const themeStore = useThemeStore();

const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <aside
    class="h-screen transition-all duration-300 bg-gray-50 dark:bg-gray-800"
    :class="{ 'w-64': isExpanded, 'w-16': !isExpanded }"
  >
    <div class="flex items-center p-4">
      <button
        @click="toggleSidebar"
        class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <svg
          class="w-6 h-6"
          :class="{ 'rotate-180': !isExpanded }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <template v-if="isExpanded">
        <button
          @click="chatStore.createNewChat"
          class="ml-4 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>

        <button
          @click="themeStore.toggleTheme"
          class="ml-auto p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="themeStore.isDark"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </template>
    </div>

    <div v-if="isExpanded" class="mt-4">
      <ChatList />
    </div>
  </aside>
</template>
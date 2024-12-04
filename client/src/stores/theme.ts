import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ThemeState } from '@/types/chat';

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref<boolean>(false);

  function toggleTheme() {
    isDark.value = !isDark.value;
    updateThemeClass();
  }

  function updateThemeClass() {
    document.documentElement.classList.toggle('dark', isDark.value);
  }

  return {
    isDark,
    toggleTheme,
  };
}, {
  persist: true
});
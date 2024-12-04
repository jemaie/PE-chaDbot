import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref<boolean>(true);

  function toggleTheme() {
    isDark.value = !isDark.value;
    updateThemeClass();
  }

  function updateThemeClass() {
    document.documentElement.classList.toggle('dark', isDark.value);
  }

  watch(isDark, () => {
    updateThemeClass();
  });

  updateThemeClass();

  return {
    isDark,
    toggleTheme,
  };
}, {
  persist: true
});
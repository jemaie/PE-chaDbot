import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLayoutStore = defineStore('layout', () => {
  const rightSidebarWidth = ref(300); // Default width in pixels
  const isDragging = ref(false);

  const updateSidebarWidth = (width: number) => {
    const minWidth = 200;
    const maxWidth = 600;
    rightSidebarWidth.value = Math.min(Math.max(width, minWidth), maxWidth);
  };

  return {
    rightSidebarWidth,
    isDragging,
    updateSidebarWidth,
  };
}, {
  persist: true
});
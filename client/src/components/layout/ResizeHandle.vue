<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useLayoutStore } from '../../stores/layout';

const layoutStore = useLayoutStore();
const handle = ref<HTMLDivElement | null>(null);

const startResize = (event: MouseEvent) => {
  event.preventDefault();
  layoutStore.isDragging = true;
  document.addEventListener('mousemove', handleResize);
  document.addEventListener('mouseup', stopResize);
  document.body.style.cursor = 'col-resize';
  document.body.style.userSelect = 'none';
};

const handleResize = (event: MouseEvent) => {
  if (!layoutStore.isDragging) return;
  
  const containerWidth = window.innerWidth;
  const newWidth = containerWidth - event.clientX;
  layoutStore.updateSidebarWidth(newWidth);
};

const stopResize = () => {
  layoutStore.isDragging = false;
  document.removeEventListener('mousemove', handleResize);
  document.removeEventListener('mouseup', stopResize);
  document.body.style.cursor = '';
  document.body.style.userSelect = '';
};

onUnmounted(() => {
  document.removeEventListener('mousemove', handleResize);
  document.removeEventListener('mouseup', stopResize);
});
</script>

<template>
  <div
    ref="handle"
    class="w-1 hover:w-2 h-full cursor-col-resize bg-transparent hover:bg-blue-500/20 transition-all duration-150 absolute left-0 top-0"
    @mousedown="startResize"
  >
    <div class="w-full h-full relative">
      <div
        class="absolute inset-y-0 -left-0.5 w-0.5 bg-gray-200 dark:bg-gray-700"
      />
    </div>
  </div>
</template>
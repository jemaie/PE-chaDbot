<script setup lang="ts">
import { useLayoutStore } from '../../stores/layout';
import ResizeHandle from './ResizeHandle.vue';

const layoutStore = useLayoutStore();
</script>

<template>
  <aside
    class="h-screen bg-gray-50 dark:bg-gray-800 overflow-hidden relative flex flex-col"
    :style="{ width: `${layoutStore.rightSidebarWidth}px` }"
  >
    <ResizeHandle />
    <div class="flex-1 overflow-y-auto p-6">
      <h2 class="text-xl font-bold mb-4 text-black dark:text-white">Information</h2>
      <div class="prose dark:prose-invert">
        <p>This is a static information panel that provides context and additional details about the current conversation.</p>
      </div>
    </div>
  </aside>
</template>
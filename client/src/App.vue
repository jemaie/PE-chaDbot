<script setup lang="ts">
import LeftSidebar from './components/layout/LeftSidebar.vue';
import RightSidebar from './components/layout/RightSidebar.vue';
import ChatMessages from './components/chat/ChatMessages.vue';
import ChatInput from './components/chat/ChatInput.vue';
import { useLayoutStore } from './stores/layout';

const layoutStore = useLayoutStore();
</script>

<template>
  <div 
    class="flex h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    :class="{ 'select-none': layoutStore.isDragging }"
  >
    <LeftSidebar />
    
    <main class="flex-1 flex flex-col min-w-0">
      <ChatMessages />
      <ChatInput />
    </main>

    <RightSidebar />
  </div>
</template>
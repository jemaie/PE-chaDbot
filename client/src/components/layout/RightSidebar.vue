<script setup lang="ts">
import { useChatStore } from '../../stores/chat';
import { useLayoutStore } from '../../stores/layout';
import ResizeHandle from './ResizeHandle.vue';

const layoutStore = useLayoutStore();
const chatStore = useChatStore();
</script>

<template>
  <aside
    class="h-screen bg-gray-50 dark:bg-gray-800 overflow-hidden relative flex flex-col"
    :style="{ width: `${layoutStore.rightSidebarWidth}px` }"
  >
    <ResizeHandle />
    <div class="flex-1 overflow-y-auto p-6">
      <h2 class="text-xl font-bold mb-4 text-black dark:text-white">Actionable Points</h2>
      <div v-if="chatStore.activeChat && chatStore.activeChat.actionablePoints" class="prose dark:prose-invert">
        <ol class="list-decimal pl-5">
          <li v-for="(point, index) in chatStore.activeChat.actionablePoints" :key="index" class="mb-1">
            {{ point }}
          </li>
        </ol>
      </div>
      <div v-else class="prose dark:prose-invert">
        <p>No actionable points available for this conversation yet.</p>
      </div>
    </div>
  </aside>
</template>
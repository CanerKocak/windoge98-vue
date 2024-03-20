<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  selectedProject: String
});
const emit = defineEmits(['selectProject']);

const projects = ref([
  { name: 'My NFTs', icon: 'user-icon.png' },
  { name: 'Cards', icon: 'cards-icon.png' },
  { name: 'MoonMerge', icon: 'moonmerge-icon.png' },
  { name: 'DogeSweeper', icon: 'dogesweeper-icon.png' },
]);

function selectProject(project: string) {
  emit('selectProject', project);
}
</script>

<template>
  <aside class="nft-project-tree">
    <ul>
      <li v-for="project in projects" :key="project.name" @click="selectProject(project.name)" :class="{selected: project.name === selectedProject}">
        <img :src="`./assets/${project.icon}`" :alt="`${project.name} icon`" class="project-icon">
        {{ project.name }}
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.nft-project-tree {
  width: 20%;
  background-color: #000080;
  padding: 5px;
  overflow-y: auto;
  color: #ffffff;
  border-right: 2px solid #000000;
  min-height: 100%;
  min-width: 150px;
}
.nft-project-tree ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nft-project-tree li {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 5px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nft-project-tree li.selected, .nft-project-tree li:hover {
  background-color: #008080;
}

.project-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.nft-project-tree {
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.nft-project-tree {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.nft-project-tree, .nft-project-tree ul, .nft-project-tree li {
  font-family: 'MS Sans Serif', sans-serif;
  font-size: 12px;
}
</style>

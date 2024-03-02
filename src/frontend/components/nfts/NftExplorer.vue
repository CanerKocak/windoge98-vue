<script setup lang="ts">
import { ref, watch } from 'vue';
import walletIcon from "../../assets/wallet.png";
import cardsIcon from "../../assets/playing_cards.png";
import moonMergeIcon from "../../assets/merge_icon.png";
import dogeSweeperIcon from "../../assets/dogesweeper.png";

const props = defineProps<{
  selectedProject: string;
}>();

const emit = defineEmits(['selectProject']);

const projects = ref([
  { name: 'My NFTs', icon: walletIcon },
  { name: 'Cards', icon: cardsIcon },
  { name: 'MoonMerge', icon: moonMergeIcon },
  { name: 'DogeSweeper', icon: dogeSweeperIcon },
]);

const selectedIndex = ref(0);

watch(() => props.selectedProject, (newVal) => {
  const index = projects.value.findIndex(project => project.name === newVal);
  selectedIndex.value = index;
});

const selectProject = (projectName: string) => {
  emit('selectProject', projectName);
};
</script>

<template>
  <aside class="nft-project-tree">
    <ul>
      <div class="selection-indicator" :style="{ top: `${selectedIndex * 48}px` }"></div>
      <li v-for="(project,) in projects" :key="project.name" @click="selectProject(project.name)"
        :class="{ selected: project.name === props.selectedProject }">
        <img :src="project.icon" :alt="`${project.name} icon`" class="project-icon">
        {{ project.name }}
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.selected {
  color: white;
  transition: 0.5s ease;
}
.nft-project-tree,
.nft-project-tree ul {
  position: relative;
  margin: 0;
  color: #000000;
  border-right: 2px solid #000000;
  min-height: 100%;
  padding: 0;
  width: 145px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-family: 'MS Sans Serif', sans-serif;
  font-size: 12px;
  animation: slideIn 0.5s ease-out;
  overflow: hidden;
}

.nft-project-tree li {
  display: flex;
  align-items: center;
  border-radius: 5px;
  list-style: none;
  position: relative;
  z-index: 1;
  height: 48px;
  cursor: url("../../assets/cursors/pointer.cur"), pointer;
}

.selection-indicator {
  position: absolute;
  left: 0;
  right: 0;
  height: 48px;
  background-color: #008080;
  transition: top 0.9s ease;
  z-index: 0;
}

.project-icon {
  width: 36px;
  height: 36px;
  margin-left: 5px;
  margin-right: 10px;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

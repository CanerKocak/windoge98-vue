<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useAuthStore } from "../auth"
import { storeToRefs } from "pinia";
import NftExplorer from "./nfts/NftExplorer.vue";
import NftCollection from "./nfts/NftCollection.vue";
import NftDetail from "./nfts/NftDetail.vue";

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);
const currentTab = ref("overview");
const selectedProject = ref("My NFTs");
const selectedNft = ref(null);

const selectNft = (nft: any) => {
  selectedNft.value = nft;
  currentTab.value = 'nftDetail';
};


watch(isAuthenticated, (value) => {
  if (value) {
    console.log("User is authenticated");
  }
});

onMounted(() => {
  if (!authStore.isReady) {
    authStore.init();
  }
});
</script>

<template>
    <header>
      <h1>Windoge Collections</h1>
      <nav>
        <button v-if="currentTab === 'nftDetail'" @click="currentTab = 'overview'">Back</button>
      </nav>
    </header>

    <div class="app-container">
      <NftExplorer :selectedProject="selectedProject" @selectProject="selectedProject = $event" />
      <transition name="fade" mode="out-in">
        <div class="content-container" :key="currentTab">
          <div v-if="currentTab === 'overview'" class="overview-container">
            <section class="main-content">
              <h1 class="project-title">{{ selectedProject }}</h1>
              <NftCollection @selectNft="selectNft" :selectedProject="selectedProject" />
            </section>
          </div>
          <NftDetail v-if="currentTab === 'nftDetail'" :nft="selectedNft" />
        </div>
      </transition>
    </div>

  <!-- <div v-else class="login-container">
    <button @click="authStore.login">Sign In</button>
  </div> -->

</template>


<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000080;
  color: white;
  height: 18px;
} h1 {
  margin: 0;
  font-size: 24px;
}

.project-title {
  margin-left: 20px;
  margin-bottom: 5px;
  margin-top: 7px;
  border-bottom: 2px solid black;
  transition: all 0.5s ease;
}

nav {
  display: flex;
  gap: 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to  {
  opacity: 0;
}

.app-container {
  display: flex;
  transition: all 0.5s ease;
}

.content-container {
  flex-grow: 1;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.overview-container {
  flex-direction: column;
  transition: all 0.5s ease;
}

.main-content {
  animation: slideIn 0.5s ease-out;
  max-height: 75vh;
  min-height: 75vh;
  overflow-y: auto;
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

button {
  cursor: pointer;
  margin: 10px 0;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #0056b3;
}

.login-container, .app-container, .nft-project-tree, .nft-gallery, .nft-item, .main-content, button {
  font-family: "MS Sans Serif", sans-serif;
  font-size: 10pt;
}

button {
  background-color: #0a64a0;
  border: 2px outset;
  color: #ffffff;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #083d6b;
}

.nft-project-tree, .nft-gallery {
  background-color: #c0c0c0;
}
</style>

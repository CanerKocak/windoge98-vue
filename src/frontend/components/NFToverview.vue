<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useAuthStore } from "../auth"
import { storeToRefs } from "pinia";

import nftsIcon from "../assets/nft_overview_icon.png";

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);
const whoami = ref("");
const userNfts = ref<{ id: number, name: string, imageUrl: string }[]>([]);
const currentTab = ref("overview");
const selectedProject = ref("Cards");

const mintNFT = async () => {
  console.log("Mint NFT not yet implemented");
};

const fetchUserNfts = async () => {
  if (isAuthenticated.value && authStore.nftActor) {
    userNfts.value = await authStore.nftActor.getUserNfts(whoami.value);
  }
};

watch(isAuthenticated, async (value) => {
  if (value && authStore.dogvertiserActor) {
    whoami.value = await authStore.dogvertiserActor.whoami();
    await fetchUserNfts();
  }
});

onMounted(async () => {
  if (authStore.isReady) {
    await fetchUserNfts();
  } else {
    await authStore.init();
  }
});

userNfts.value = [
  { id: 1, name: "NFT 1", imageUrl: nftsIcon } as { id: number, name: string, imageUrl: string },
  { id: 2, name: "NFT 2", imageUrl: nftsIcon } as { id: number, name: string, imageUrl: string },
  { id: 3, name: "NFT 3", imageUrl: nftsIcon } as { id: number, name: string, imageUrl: string },
];

</script>

<template>
  <div class="app-container">
    <div v-if="isAuthenticated">
      <div v-if="currentTab === 'overview'" class="overview-container">
        <aside class="nft-project-tree">
          <ul>
            <li @click="selectedProject = 'Cards'">Cards</li>
            <li @click="selectedProject = 'MoonMerge'">MoonMerge</li>
            <li @click="selectedProject = 'DogeSweeper'">DogeSweeper</li>
          </ul>
        </aside>
        <section class="main-content">
          <div class="project-content">
            <h2>{{ selectedProject }}</h2>
            <div class="nft-placeholder">
              <div class="placeholder-img">Soon</div>
              <div class="placeholder-img">Soon</div>
              <div class="placeholder-img">Soon</div>
              <div class="placeholder-img">Soon</div>
            </div>
          </div>
          <button @click="currentTab = 'myNfts'" class="my-nfts-button">My NFTs</button>
        </section>
      </div>
      <div v-else-if="currentTab === 'myNfts'" class="my-nfts-container">
        <button @click="currentTab = 'overview'">← Back to Overview</button>
        <h1>My NFTs</h1>
        <div class="nft-gallery">
          <div v-for="nft in userNfts" :key="nft.id" class="nft-item">
            <div class="nft-container">
              <img :src="nft.imageUrl" alt="NFT Image"/>
              <p>{{ nft.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="login-container">
      <button @click="authStore.login">Sign In</button>
    </div>
  </div>
</template>


<style scoped>
.overview-container, .my-nfts-container {
  display: flex;
  width: 100%;
}

.nft-project-tree {
  width: 20%;
  background-color: #f0f0f0;
  padding: 20px;
}

.nft-project-tree ul {
  list-style: none;
  padding: 0;
}

.nft-project-tree li {
  cursor: pointer;
  padding: 10px 0;
}

.main-content, .project-content {
  flex-grow: 1;
  padding: 20px;
}

.nft-placeholder {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
  padding: 20px;
}

.placeholder-img {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  border: 1px solid #bbb;
}

.nft-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.nft-item {
  width: 100px;
  height: 100px;
}

.my-nfts-button, button {
  cursor: pointer;
  margin: 10px 0;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

.my-nfts-button:hover, button:hover {
  background-color: #0056b3;
}

</style>

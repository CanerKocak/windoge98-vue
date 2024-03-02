<script setup lang="ts">
import { onMounted, ref, defineProps, watch } from 'vue';
import walletIcon from "../../assets/wallet.png";
import cardsIcon from "../../assets/playing_cards.png";
import moonMergeIcon from "../../assets/merge_icon.png";
import loadingIcon from "../../assets/loading.gif";

const emit = defineEmits(['selectNft']);

interface Nft {
  id: number;
  name: string;
  imageUrl: string;
}

const props = defineProps<{
  selectedProject: String;
}>();

const allNfts: Nft[] = [
  { id: 1, name: "NFT 1", imageUrl: walletIcon },
  { id: 2, name: "NFT 2", imageUrl: cardsIcon },
  { id: 3, name: "NFT 3", imageUrl: moonMergeIcon },
  { id: 1, name: "NFT 1", imageUrl: walletIcon },
  { id: 2, name: "NFT 2", imageUrl: cardsIcon },
  { id: 3, name: "NFT 3", imageUrl: moonMergeIcon },
  { id: 1, name: "NFT 1", imageUrl: walletIcon },
  { id: 2, name: "NFT 2", imageUrl: cardsIcon },
  { id: 3, name: "NFT 3", imageUrl: moonMergeIcon },
  { id: 1, name: "NFT 1", imageUrl: walletIcon },
  { id: 2, name: "NFT 2", imageUrl: cardsIcon },
  { id: 3, name: "NFT 3", imageUrl: moonMergeIcon },
];

const randomNfts = ref<Nft[]>([]);
const isLoading = ref(true);

const getRandomNfts = () => {
  isLoading.value = true;
  const nftsToShow = Math.random() < 0.5 ? 5 : 10;
  const nfts: Nft[] = [];
  for (let i = 0; i < nftsToShow; i++) {
    nfts.push({ id: i, name: `Loading... ${i+1}`, imageUrl: loadingIcon }); // Placeholder for loading
  }
  randomNfts.value = nfts; // Display loading placeholders

  setTimeout(() => {
    randomNfts.value = allNfts.slice(0, nftsToShow); // Replace with actual data after loading
    isLoading.value = false;
  }, 2000);
};

onMounted(() => {
  getRandomNfts();
});

watch(() => props.selectedProject, () => {
  getRandomNfts();
}, { immediate: true });
</script>

<template>
  <div class="nft-gallery">
    <div v-for="nft in randomNfts" :key="nft.id" class="nft-item">
      <div class="nft-container">
        <img :src="nft.imageUrl" alt="NFT Image" class="fade-in"/>
        <p>{{ isLoading ? 'Loading...' : nft.name }}</p>
      </div>  
    </div>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

img {
  width: 250px;
  height: 250px;
}

.nft-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
    padding: 20px;
    background-color: #0a0a0a;
    border-radius: 8px;
    overflow-y: auto;
}

.nft-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #000080, #008080);
    border: none;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: url("../../assets/cursors/pointer.cur"), pointer;
}

.nft-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.5);
}

.nft-container img {
    width: auto;
    height: 120px;
    padding: 10px;
    object-fit: cover;
}

.nft-container p {
    color: #00fffc;
    text-align: center;
    margin-top: 10px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
    font-weight: bold;
}

.fade-in {
    animation: fadeIn 1s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
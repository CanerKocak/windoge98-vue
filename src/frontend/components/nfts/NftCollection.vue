<script setup lang="ts">
import { defineProps, watch, ref, defineEmits} from 'vue';

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
  { id: 1, name: "NFT 1", imageUrl: import.meta.env.BASE_URL + 'nft1_overview_icon.png' },
  { id: 2, name: "NFT 2", imageUrl: import.meta.env.BASE_URL + 'nft2_overview_icon.png' },
  { id: 3, name: "NFT 3", imageUrl: import.meta.env.BASE_URL + 'nft3_overview_icon.png' },
];

const randomNfts = ref<Nft[]>([]);

const getRandomNfts = () => {
  const nftsToShow = Math.random() < 0.5 ? 5 : 10;
  const nfts: Nft[] = [];
  randomNfts.value = [];
  for (let i = 0; i < nftsToShow; i++) {
    const nftIndex = Math.floor(Math.random() * allNfts.length);
    nfts.push(allNfts[nftIndex]);
  }
  randomNfts.value = nfts;
};

watch(() => props.selectedProject, () => {
  getRandomNfts();
}, { immediate: true });
</script>


<template>
  <div class="nft-gallery">
    <div v-for="nft in randomNfts" :key="nft.id" class="nft-item" @click="() => emit('selectNft', nft)">
      <div class="nft-container">
        <img :src="nft.imageUrl" alt="NFT Image" class="fade-in"/>
        <p>{{ nft.name }}</p>
      </div>  
    </div>
  </div>
</template>

<style scoped>
.nft-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    overflow-y: auto;
    max-height: 375px;
    padding: 5px;
}

.nft-item {
    width: 150px;
    height: 200px;
    border: 2px solid #ffffff;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: pointer;
}

.nft-item:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.nft-container img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #000000;
    margin-bottom: 5px;
}

.nft-container p {
    color: #ffffff;
    text-align: center;
    margin: 0;
    font-family: 'MS Sans Serif', sans-serif;
    font-size: 12px;
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

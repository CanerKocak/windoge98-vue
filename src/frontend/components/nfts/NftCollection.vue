<script setup lang="ts">
import { onMounted, ref, Ref, defineProps, watch, defineEmits } from "vue";
import loadingIcon from "../../assets/loading.gif";
import { Actor, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import {
  idlFactory,
  canisterId as playingCardsCanisterId,
} from "../../../declarations/playing_cards";

interface Nft {
  id: string;
  name: string;
  imageUrl: string;
}

const props = defineProps<{
  selectedProject: string;
}>();

const emit = defineEmits(["selectNft"]);
const principalIdInput: Ref<string> = ref("");
const randomNfts: Ref<Nft[]> = ref([]);
const isLoading: Ref<boolean> = ref(false);

// Initialization logic for HttpAgent, (local development only)
const agent = new HttpAgent({ host: "http://localhost:8000" });
if (process.env.NODE_ENV !== "production") {
  // Fetch the root key for local replica
  await agent.fetchRootKey();
}

// create an actor to interact with the canister using the agent
const actor = Actor.createActor(idlFactory, {
  agent,
  canisterId: playingCardsCanisterId,
});

// Function to fetch random NFTs: logic for fetching and setting the NFTs
const getRandomNfts = async (): Promise<void> => {
  isLoading.value = true;
  randomNfts.value = Array.from(
    { length: Math.random() < 0.5 ? 5 : 10 },
    (_, i) => ({
      id: i.toString(),
      name: `Loading... ${i + 1}`,
      imageUrl: loadingIcon,
    }),
  );

  try {
    const tokens: string[] = await actor.getTokens() as string[];
    const fetchedNfts: Nft[] = await Promise.all(
      tokens.slice(0, randomNfts.value.length).map(async (token: string) => {
        let metadata: { name: string; imageUrl: string } = { name: "", imageUrl: "" };
        metadata = metadata as { name: string; imageUrl: string };
          await actor.getMetadata(token);
        return {
          id: token,
          name: metadata.name,
          imageUrl: metadata.imageUrl,
        };
      }),
    );

    randomNfts.value = fetchedNfts;
  } catch (error) {
    console.error("Error fetching NFTs:", error);
  } finally {
    isLoading.value = false;
  }
};

// Function to check if the user is a custodian; displays an alert with the result
const checkIsCustodian = async (): Promise<void> => {
  try {
    const isCustodian: boolean = await actor.is_custodian() as boolean;
    alert(`Is custodian: ${isCustodian}`);
  } catch (error) {
    console.error("Error checking is_custodian:", error);
    alert("Error checking is_custodian: " + (error as Error).message);
  }
};

onMounted(getRandomNfts);
watch(() => props.selectedProject, getRandomNfts, { immediate: true });
</script>

<template>
  <div>
    <div v-if="isLoading" class="loading-container">
      <img :src="loadingIcon" alt="Loading...">
    </div>
    <div v-else class="nft-gallery">
      <div v-for="nft in randomNfts" :key="nft.id" class="nft-item fade-in" @click="emit('selectNft', nft)">
        <div class="nft-container">
          <img :src="nft.imageUrl" :alt="nft.name">
          <p>{{ nft.name }}</p>
        </div>
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
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
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
  font-family: "Courier New", Courier, monospace;
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

<script setup lang="ts">
import { ref } from "vue";

const nftDetailVisible = ref(true);

const nft = {
  imageUrl: "path/to/mock-red-box-image.jpg",
  name: "Dummy Name",
  description: "A unique piece of digital art.",
  owner: "0x123456789",
  currentPrice: "275 EXE",
  bids: [
    { bidder: "0xa1b2c3", amount: "250 EXE" },
    { bidder: "0xd4e5f6", amount: "270 EXE" }
  ],
  priceHistory: [
    { date: "2023-03-01", price: "200 EXE" },
    { date: "2023-03-15", price: "75 EXE" }
  ],
};
</script>

<template>
  <transition name="slide-fade">
    <div v-if="nftDetailVisible" class="nft-detail-container">
      <div class="nft-image-container">
        <div class="nft-image" style="background-color: red; width: 150px; height: 200px;"></div>
      </div>
      <div class="nft-info">
        <h2>{{ nft.name }}</h2>
        <p v-if="nft.description">{{ nft.description }}</p>
        <p>Owner: Billy </p>
        <p>Current Price: 250 EXE</p>
        <div v-if="nft.bids && nft.bids.length" class="bids-section">
          <h3>Bids</h3>
          <ul>
            <li v-for="(bid, index) in nft.bids" :key="index">
              {{ bid.bidder }}: {{ bid.amount }}
            </li>
          </ul>
        </div>
        <div v-if="nft.priceHistory && nft.priceHistory.length" class="price-history-section">
          <h3>Price History</h3>
          <ul>
            <li v-for="(entry, index) in nft.priceHistory" :key="index">
              {{ entry.date }}: {{ entry.price }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.nft-detail-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 543px;
  max-width: 393px;
  overflow-y: auto;
}

.nft-image-container {
  flex: 1;
}

.nft-info {
  flex: 2;
  display: flex;
  flex-direction: column;
}

.nft-image {
  border-radius: 5px;
  margin-bottom: 15px;
}   

.bids-section, .price-history-section {
  margin-top: 15px;
}

.additional-info {
  margin-top: 15px;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  font-family: 'Courier New', Courier, monospace;
}

ul {
  list-style-type: none;
  padding: 0;
}

li, p {
  margin-bottom: 5px;
}

h2 {
  margin-bottom: 10px;
}
</style>

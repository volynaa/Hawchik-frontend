<template lang="pug">
HawHeaderIndex
.mainContainer
	router-view
</template>

<script setup>
import HawHeaderIndex from "@/components/header/HawHeaderIndex.vue";
</script>

<style scoped>
.mainContainer{
	display: grid;
	justify-content: center;
}
</style>

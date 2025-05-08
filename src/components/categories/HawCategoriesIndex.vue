<template lang="pug">
h1 Самый сезон
.categories
	.goods(v-for="item in listGoods" :key="item")
		.price {{item.price}}
		.name {{item.name}}
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useServerStore} from "@/config/stores/server.js";
const storeServer = useServerStore()
const listGoods = ref([])
async function $_haw_categories_index_load() {
	const res = await storeServer.request('GET', 'goods')
	if (res && res.err[0] === 200) {
		listGoods.value = res.data
	}
}
onMounted(()=> {
	$_haw_categories_index_load()
})
</script>

<style scoped>
.categories{
	display: flex;
	gap: 10px;
	.goods{
		width: 214px;
		height: 306px;
	}
}
</style>
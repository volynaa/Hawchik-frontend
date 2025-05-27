<template lang="pug">
h1 Самый сезон
.categories
	.goods(v-for="item in listGoods" :key="item")
		img(:src="item.photo")
		.containerPrice
			.price {{item.price}}₽
			.oldPrice {{item.oldPrice}}₽
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
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 24px 10px;
	.goods{
		display: flex;
		flex-direction: column;
		img{
			max-width: 214px;
			border-radius: 30px;
			background: rgba(190, 186, 186, 0.1);
		}
		.containerPrice{
			display: flex;
			gap: 5px;
			margin-top: 10px;
			.price{
				color: #ee4e2a;
				font-weight: 600;
				font-size: 18px;
			}
			.oldPrice {
				position: relative;
				color: #a1a0a0;
				font-style: italic;
				padding-right: 2px;
				font-size: 14px;
				margin-top: auto;
			}

			.oldPrice::after {
				content: '';
				position: absolute;
				top: 60%;
				left: -2px;
				right: -2px;
				height: 1px;
				background: #ff5252;
				transform: translateY(-50%) rotate(-5deg);
				transform-origin: left center;
			}
		}
	}
}
</style>
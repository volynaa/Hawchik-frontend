<template lang="pug">
.title Вода и напитки
.blockCategories
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Воды
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Соки и морсы
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Газировка и тоники
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Холодный чай и кофе
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Энергетики, пиво и вино
</template>

<script setup>
</script>

<style scoped>
.categories {
	&:nth-child(1) {
		width: 288px;
		background-image: url('/image/index/water/water.png');
	}
	&:nth-child(2) {
		background-image: url('/image/index/water/juices.png');
	}
	&:nth-child(3) {
		background-image: url('/image/index/water/soda.png');
	}
	&:nth-child(4) {
		background-image: url('/image/index/water/juices.png');
	}
	&:nth-child(5) {
		background-image: url('/image/index/water/beer.png');
	}
}
</style>
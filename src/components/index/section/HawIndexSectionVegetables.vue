<template lang="pug">
.title Овощной прилавок
.blockCategories
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Самый сезон
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Овощи, грибы и зелень
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Фрукты и ягоды
</template>

<script setup>
</script>

<style scoped>
.categories {
	width: 288px;
	&:nth-child(1) {
		background-image: url('/image/index/vegetables/season.png');
	}
	&:nth-child(2) {
		background-image: url('/image/index/vegetables/vegetables.png');
	}

	&:nth-child(3) {
		background-image: url('/image/index/vegetables/fruits.png');
	}
}
</style>
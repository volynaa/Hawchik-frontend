<template lang="pug">
.title Готовая еда
.blockCategories
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle «Есть горячее»
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Из ресторанов
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Основное меню
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Пекарня и кондитерская
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Кофейня
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Здоровый рацион
</template>

<script setup>
</script>

<style scoped>
.categories {
	&:nth-child(1) {
		background-image: url('/image/index/readyFood/hot.png');
	}
	&:nth-child(2) {
		background-image: url('/image/index/readyFood/restaurants.png');
	}

	&:nth-child(3) {
		background-image: url('/image/index/readyFood/mainMenu.png');
	}

	&:nth-child(4) {
		background-image: url('/image/index/readyFood/bakery.png');
	}

	&:nth-child(5) {
		background-image: url('/image/index/readyFood/coffee.png');
	}

	&:nth-child(6) {
		background-image: url('/image/index/readyFood/health.png');
	}
}
</style>
<template lang="pug">
.title Молочный прилавок
.blockCategories
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Молоко, масло и яйца
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Сыры
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Кефир, сметана, творого
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Йогурты и десерты
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Молочное для детей
</template>

<script setup>
</script>

<style scoped>
.categories {
	&:nth-child(1) {
		width: 288px;
		background-image: url('/image/index/milk/milk.png');
	}
	&:nth-child(2) {
		background-image: url('/image/index/milk/cheese.png');
	}
	&:nth-child(3) {
		background-image: url('/image/index/milk/kefir.png');
	}
	&:nth-child(4) {
		background-image: url('/image/index/milk/yogurt.png');
	}
	&:nth-child(5) {
		background-image: url('/image/index/milk/milkKids.png');
	}
}
</style>
<template lang="pug">
.title Для животных
.blockCategories
	router-link.categories(to="/categories/cat")
		.categoriesTitle Для кошек
	router-link.categories(to="categories?animals=Собака")
		.categoriesTitle Для собак
</template>

<script setup>
</script>

<style scoped>
.categories {
	width: 436px;
	&:nth-child(1) {
		background-image: url('/image/index/animal/cat.png');
	}
	&:nth-child(2) {
		background-image: url('/image/index/animal/dog.png');
	}
}
</style>
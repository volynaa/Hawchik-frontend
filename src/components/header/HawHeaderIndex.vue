<template lang="pug">
.blockHeader
	router-link(to="/")
		img(src="/image/header/hawchik.png" style="cursor:pointer")
	.burgerMenu
		.trait
		.trait
		.trait
	.lineSearch
		input(placeholder="Найти HaWchik")
		.leftBlockSearch
			img(src="/image/header/search.svg")
	.form-group.address
		img(src="/image/header/location.svg")
		| Укажите адрес доставки
	.form-group.basket
		img(src="/image/header/basket.svg")
		| Корзина
	.settings
		img(src="/image/header/settings.svg")
</template>

<script setup>

</script>

<style scoped>
.blockHeader{
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 100;
	height: 80px;
	width: 100%;
	border-bottom: solid 1px rgba(0, 0, 0, .05);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
	.burgerMenu {
		min-width: 16px;
		height: 16px;
		padding: 15px;
		border-radius: 16px;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: solid 1px hsla(30, 3%, 53%, .2);
		transition: 0.3s ease-in;
		&:hover{background: #ded8d8}
	}
	.trait {
		width: 100%;
		height: 2px;
		background-color: #21201f;
		border-radius: 2px;
		transition: 0.3s ease-in;
	}
	.trait + .trait {
		margin-top: 3px;
	}
	.lineSearch{
		display: flex;
		height: 48px;
		.leftBlockSearch{
			order: -1;
			width: 48px;
			background: #efecec;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 16px 0 0 16px;
			transition: 0.3s ease-in;
			border-style: solid;
			border-color: #efecec;
			border-width: 2px 0 2px 2px;
			img{
				width: 24px;
				height: 24px;
			}
		}
		input{
			background: #efecec;
			border-radius: 0 16px 16px 0;
			width: 35vw;
			font-size: 16px;
			line-height: 18px;
			transition: 0.3s ease-in;
			border-style: solid;
			border-color: #efecec;
			border-width: 2px 2px 2px 0;

			&::placeholder {
				font-weight: 600;
				color: #a8a5a5;
			}
			&:focus{
				outline: none;
				border-color: #dcdbdb;
				background: white;
				+ .leftBlockSearch{
					background: white;
					border-color: #dcdbdb;
				}

			}
		}
	}
	.form-group{
		height: fit-content;
		border-radius: 16px;
		padding: 15px;
		display: flex;
		gap: 10px;
		cursor: pointer;
		white-space: nowrap;
	}
	.address{
		background: #FCE000;
		transition: 0.3s ease-in;
		&:hover{background: #e0cf0d;}
	}
	.basket{
		background:  rgba(101, 92, 78, .1);
		transition: 0.3s ease-in;
		&:hover{background: rgba(0, 0, 0, 0.1)}
	}
	.settings{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		border-radius: 16px;
		transition: 0.3s ease-in;
		cursor: pointer;
		img{
			width: 24px;
			height: 24px;

		}
		&:hover{
			background: rgba(101, 92, 78, .1);
		}

	}
}
</style>
<template>
	<div class="login_container">
		<div class="login_box">
			<div class="avatar_box">
				<img src="@/assets/img/logo2.jpeg" alt />
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.login_container {
	background-color: #2b4b6b;
	height: 100%;

	.login_box {
		width: 450px;
		height: 300px;
		background-color: #fff;
		border-radius: 3px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		.avatar_box {
			width: 130px;
			height: 130px;
			border-radius: 50%;
			border: 1px solid #eee;
			padding: 10px;
			box-sizing: border-box;
			box-shadow: 0 0 10px #ddd;
			position: absolute;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: #fff;

			img {
				width: 100%;
				height: 108px;
				border-radius: 50%;
			}
		}
	}
}
</style>
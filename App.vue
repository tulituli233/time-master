<script>
export default {
	onLaunch: function () {
		console.log('App Launch')
		const token = uni.getStorageSync('token');
		if (!token) {
			uni.navigateTo({ url: '/subPackages/login/index/index' });
		}
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	}
}
</script>

<style>
@import "@/assets/css/iconfont.css";
</style>

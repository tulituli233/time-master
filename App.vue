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
		getApp().globalData.userInfo = uni.getStorageSync('userInfo');
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	},
	globalData: {
		// 定义全局变量
		userInfo: null
	},
}
</script>

<style>
@import "@/assets/css/iconfont.css";
</style>

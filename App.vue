<script>
export default {
	onLaunch: async function () {
		console.log('App Launch')
		const token = uni.getStorageSync('token');
		if (!token) {
			uni.navigateTo({ url: '/subPackages/login/index/index' });
		}

		// 获取屏幕宽高
		const screen = await this.getScreen();
		this.$store.dispatch('updateScreen', screen);
	},
	onShow: function () {
		getApp().globalData.userInfo = uni.getStorageSync('userInfo');
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	},
	methods: {
		// 获取屏幕宽高
		getScreen: () => {
			return new Promise((resolve, reject) => {
				uni.getSystemInfo({
					success: function (res) {
						resolve({ width: res.windowWidth, height: res.windowHeight });
					}
				});
			});
		}
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

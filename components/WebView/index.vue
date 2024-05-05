<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				url: '', // 地址
				title: '', // 标题
			}
		},
		onLoad(option) {
			// 外部传入的地址
			let tUrl = option.url
			delete option.url
			// 外部传入的标题
			this.title = option.__title__
			delete option.__title__

			// 外部传入的其他参数
			let tParams = ''
			for (const [key, value] of Object.entries(option)) {
				tParams += `&${key}=${value}`
			}
			// 拼接最终的地址
			this.url = tUrl + tParams
		},
		onReady() {
			// #ifdef APP-PLUS
			var currentWebview = this.$scope.$getAppWebview();
			setTimeout(() => {
				// 官网说每个页面都是一个webview，所以页面内的webview是它的子孩子
				let wv = currentWebview.children()[0]
				// 1. 先设置标题名为外部传入的标题，加载完成后更新标题（不传也可以，是为了防止加载完成后获取标题失败的情况）
				wv.setStyle({
					titleNView: {
						titleText: this.title,
						autoBackButton: true
					}
				})

				// 加载中状态
				wv.addEventListener('loading', function() {
					plus.nativeUI.showWaiting()
					// console.log(wv.getURL()) //获取url
					// console.log(wv.getTitle()) //获取标题
				}, false);

				// 加载完成状态 
				wv.addEventListener('loaded', () => {
					// 注入JS，此处是根目录下的static/injection/index.js
					wv.setJsFile('_www/static/injection/index.js')

					plus.nativeUI.closeWaiting();

					// 2. 获取页面自带的标题，下面的校验是因为客户不想暴漏url
					let title = wv.getTitle()
					title = /(http|https):\/\/([\w.]+\/?)\S*/.test(title) ? '' : title
					if (/(http|https):\/\/([\w.]+\/?)\S*/.test('http://' + title)) {
						title = ''
					}
					if (!title.trim()) return
					wv.setStyle({
						titleNView: {
							titleText: title,
						}
					})

					// 此处可以拦截窗口url请求，详见备注
					// wv.overrideUrlLoading({
					// 	mode: 'reject',
					// 	match: '.*'
					// }, function(e) {
					// 	console.log('reject url: ' + e.url);
					// });
				}, false);
			}, 200)
			// #endif
		},
	}
</script>


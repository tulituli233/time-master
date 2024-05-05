<!-- <template>
	<web-view ref="webview" src="https://sexinsex.net/bbs/thread-8908821-1-1.html"></web-view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
// plus.webView.currentWebview().setStyle({ top: '0px', height: '100%' })
onLoad(() => {
	// 监听WebView的load事件
	// this.$refs.webview.addEventListener('load', this.injectCSS);
	console.log('plus.webview', plus.webview);
})
</script>

<style lang="scss"></style> -->

<!-- <template>
	<view>
		<web-view ref="webview" src="https://sexinsex.net/bbs/thread-8908821-1-1.html"></web-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			cssCode: `
			/* 这里填写您要添加的CSS代码 */
			body {
			  background-color: #f5f5f5;
			}
		  `
		};
	},
	onLoad() {
		// 监听WebView的load事件
		this.$refs.webview.addEventListener('load', this.injectCSS);
	},
	methods: {
		injectCSS() {
			// 获取WebView的DOM元素
			const webview = this.$refs.webview;
			// 创建一个style元素
			const style = document.createElement('style');
			// 将CSS代码添加到style元素中
			style.innerHTML = this.cssCode;
			// 将style元素添加到WebView的DOM中
			webview.getWebViewContext().document.head.appendChild(style);
		}
	}
};
</script> -->

<!-- <template>
	<view>
		<web-view ref="webview" src="https://sexinsex.net/bbs/thread-8908821-1-1.html"></web-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			cssCode: `
			/* 这里填写您要添加的CSS代码 */
			body {
			  background-color: #f5f5f5;
			}
		  `
		};
	},
	onLoad() {
		// 监听WebView的load事件
		// this.$refs.webview.addEventListener('load', this.injectCSS);
		console.log(this.$refs.webview);
		// 获取WebView的DOM元素
		// setTimeout( async () => {
		// 	let height = await this.getElementHeightById('append_parent');
		// 	console.log(height);
		// }, 10000);
		// #ifdef APP-PLUS  
		var currentWebview = this.$scope.$getAppWebview() //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效，非v3编译模式使用this.$mp.page.$getAppWebview()  
		setTimeout(function () {
			wv = currentWebview.children()[0];
			wv.evalJS("alert(\"人民万岁\")");
		}, 1000); //如果是页面初始化调用时，需要延时一下  
		// #endif
	},
	methods: {
		getElementHeightById(elementId) {
			return new Promise((resolve, reject) => {
				const query = uni.createSelectorQuery().in(this);
				query.select('#' + elementId).boundingClientRect(data => {
					if (data) {
						const height = data.height;
						resolve(height);
					} else {
						reject();
					}
				}).exec();
			});
		},
		injectCSS() {
			// 获取WebView的DOM元素
			const webview = this.$refs.webview;
			// 创建一个style元素
			const style = document.createElement('style');
			// 将CSS代码添加到style元素中
			style.innerHTML = this.cssCode;
			// 将style元素添加到WebView的DOM中
			webview.getWebViewContext().document.head.appendChild(style);
		}
	}
};
</script> -->

<template>
	<view>
		<web-view src="https://sexinsex.net/bbs/thread-8908821-1-1.html"></web-view>
	</view>
</template>
<script>
var wv;//计划创建的webview
export default {
	onReady() {
		// #ifdef APP-PLUS
		var currentWebview = this.$scope.$getAppWebview() //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效
		setTimeout(function () {
			wv = currentWebview.children()[0]
			console.log('wv', wv);
			wv.evalJS("alert(1);")
			// wv.setStyle({ top: 150, height: 300 })
			// 注入css样式将id为sis_top-nav的元素的背景颜色设置为红色,字体颜色设置为白色
			// wv.evalJS("document.getElementById('sis_top-nav').style.backgroundColor = 'red'; document.getElementById('sis_top-nav').style.color = 'white';");
			//注入css样式将body元素的背景颜色设置为白色
			// wv.evalJS("document.getElementsByTagName('body')[0].style.backgroundColor = 'white';");
			// 注入css将所有元素的背景颜色设置为白色
			// wv.evalJS("document.getElementsByTagName('*').style.backgroundColor = 'white';");
			try {
				// 展示一个alert弹窗
				// wv.evalJS("alert(JSON.stringify(document.getElementsByTagName('*')));");
				// wv.evalJS("document.getElementById('sis_top-nav').style.backgroundColor = 'red'; document.getElementById('sis_top-nav').style.color = 'white';");
				wv.setCssText("*{ color: white!important; background-color: #000!important; }");
				// wv.setCssText('body{font-size:136px; text-align: justify;}');
				// setInterval(() => {
				// 	// wv.evalJS("alert(JSON.stringify(document.getElementsByTagName('*')));");
				// 	// wv.evalJS("document.getElementsByTagName('*').style.backgroundColor = 'white';");
				// }, 10000);
			} catch (error) {
				console.log(error);
			}
		}, 1000); //如果是页面初始化调用时，需要延时一下
		// #endif

		// // #ifdef APP-PLUS  
		// var currentWebview = this.$scope.$getAppWebview() //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效，非v3编译模式使用this.$mp.page.$getAppWebview()  
		// setTimeout(function () {
		// 	wv = currentWebview.children()[0];
		// 	wv.evalJS("alert(\"人民万岁\")");
		// }, 1000); //如果是页面初始化调用时，需要延时一下  
		// // #endif
	}
};
</script>

// 内置控制台--start
var __all_vconsole = document.querySelectorAll("script[data-type=vconsole]");
if (!__all_vconsole.length) {
	var __script_vconsole = document.createElement("script");
	__script_vconsole.type = "text/javascript";
	__script_vconsole.setAttribute('data-type', 'vconsole')
	__script_vconsole.src = "https://cdn.bootcdn.net/ajax/libs/vConsole/3.0.0/vconsole.min.js";
	__script_vconsole.onload = function(e) {
		var __all_newVConsole = document.querySelectorAll("script[data-type=newVConsole]");
		if (!__all_newVConsole.length) {
			var __script_newVConsole = document.createElement("script");
			__script_newVConsole.type = "text/javascript";
			__script_vconsole.setAttribute('data-type', 'newVConsole')
			__script_newVConsole.text = "var vConsole = new VConsole();";
			document.head.appendChild(__script_newVConsole);
		}
	}
	document.head.appendChild(__script_vconsole);
}
// 内置控制台--end

// 页面监听--start
// var __script_observer = document.createElement("script[data-type=observer]");
// __script_observer.type = "text/javascript";
// __script_observer.text = `
// `;
// document.body.appendChild(__script_observer);
// 上面这样创建可以找到当前script,以便有删除操作

// 创建一个观察器实例并传入回调函数
var __bodyNode = document.querySelector('body');
// 观察器的配置（需要观察什么变动）
var __config = {
	attributes: false, //目标节点的属性变化
	childList: true, //目标节点的子节点的新增和删除
	characterData: true, //如果目标节点为characterData节点(一种抽象接口,具体可以为文本节点,注释节点,以及处理指令节点)时,也要观察该节点的文本内容是否发生变化
	subtree: true, //目标节点所有后代节点的attributes、childList、characterData变化
};
var __observer = new MutationObserver(function(mutationsList, observer) {
	// Use traditional 'for loops' for IE 11
	for (let mutation of mutationsList) {
		console.log('====mutation：', mutation);
	}
});
// 以上述配置开始观察目标节点
__observer.observe(__bodyNode, __config);
// 页面监听--end


// 全局点击事件--start
document.addEventListener('click', e => {
	console.log('==========全局点击事件:', e);

	// var __script_a = document.createElement("a");
	// __script_a.src = "http://wap.baidu.com/";
	// __script_vconsole.setAttribute('data-type', 'a')
	// document.body.appendChild(__script_a);
})
// 全局点击事件--end

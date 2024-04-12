const getRootDir = () => {
	// 判断系统是否是安卓
	if (uni.getSystemInfoSync().platform !== "android") {
		plus.nativeUI.alert("这个组件只能在安卓下使用")
		return
	}

	// 导入原生类
	let environment = plus.android.importClass("android.os.Environment");

	// 判断sd卡是否挂载
	if (environment.getExternalStorageState() !== environment.MEDIA_MOUNTED) {
		plus.nativeUI.alert("SD卡没有挂载")
	}
	// 获取SD卡根目录
	let sdRoot = environment.getExternalStorageDirectory()
	console.log('sdRoot', sdRoot);
	let sdRootList = plus.android.invoke(sdRoot, "listFiles")
	console.log('sdRootList', sdRootList);
	// 定义自定义数据
	let sdRootPathList = []

	// by:tuli 根据文件和文件夹名称pathName = v.toString().split("/")进行排序
	let newSdRootList = sdRootList.sort((a, b) => {
		let pathNameA = a.toString().split("/");
		let pathNameB = b.toString().split("/");

		// 比较路径中每个部分的 Unicode 值进行排序
		for (let i = 0; i < Math.min(pathNameA.length, pathNameB.length); i++) {
			if (pathNameA[i] < pathNameB[i]) {
				return -1;
			} else if (pathNameA[i] > pathNameB[i]) {
				return 1;
			}
		}

		// 如果路径相同但长度不同，则长度较短的排在前面
		return pathNameA.length - pathNameB.length;
	});
	
	// 组合数据
	newSdRootList.forEach(v => {
		// 判断是否可见
		if (plus.android.invoke(v, "isHidden") == true) {
			return false
		}
		// console.log('v', v);
		let pathName = v.toString().split("/")
		// console.log('pathName', pathName);
		if (plus.android.invoke(v, "isDirectory") === true) {
			sdRootPathList.push({
				isDirectory: true,
				path: v,
				pathName: pathName[pathName.length - 1]
			})
		} else {
			sdRootPathList.push({
				isDirectory: false,
				path: v,
				pathName: pathName[pathName.length - 1]
			})
		}
	})
	return sdRootPathList
}


const getSubDir = path => {
	try {
		if (plus.android.invoke(path, "isDirectory") !== true) {
			return null
		}

		let pathList = plus.android.invoke(path, "listFiles")
		// 定义自定义数据
		let subPathList = []

		// 组合数据
		pathList.forEach(v => {
			// 判断是否可见
			if (plus.android.invoke(v, "isHidden") == true) {
				return false
			}
			let pathName = v.toString().split("/")
			if (plus.android.invoke(v, "isDirectory") === true) {
				subPathList.push({
					isDirectory: true,
					path: v,
					pathName: pathName[pathName.length - 1]
				})
			} else {
				subPathList.push({
					isDirectory: false,
					path: v,
					pathName: pathName[pathName.length - 1]
				})
			}
		})

		return subPathList

	} catch (e) {
		return null
	}

}


export default {
	getRootDir,
	getSubDir
}

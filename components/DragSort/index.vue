<template>
    <view class="drag-and-drop-sort-B" :style="[containerSize]">
        <template v-if="controlsPositionArray.length !== 0">
            <view v-for="(item, index) in controlsArray" :key="index" class="_item"
                :style="{ 'transition': (curretnControlsIndex === index ? 'initial' : '.3s'), 'z-index': (curretnControlsIndex === index ? 1 : 0), 'width': controlsSize.width + 'vw', 'height': controlsSize.height + 'px', 'top': controlsPositionArray[index].top + 'px', 'left': controlsPositionArray[index].left + 'px' }">
                <view class="drag-item" :style="{ 'width': dargItemSize.width + 'vw' }"
                    @longpress="handleLongpress($event, index)" @touchstart="handleTouchstart($event, index)"
                    @touchmove="handleTouchmove" @touchend="handleTouchend">
                    <!-- 插槽 -->
                    <slot :item="item"></slot>
                </view>
            </view>
        </template>
    </view>
</template>

<script>
export default {
    name: "DragSort",
    props: {
        // 容器大小
        containerSize: {
            type: Object,
            default: () => ({ wdith: '100vw', height: '100vh' }),
        },
        // 控件的大小
        controlsSize: {
            type: Object,
            default: () => ({ width: 0, height: 0 }),
        },
        dargItemSize: {
            type: Object,
            default: () => ({ width: 100 }),
        },
        // 数据列表
        controlsList: {
            type: Array,
            default: () => [],
        },
        // 拖拽方向横向还是纵向
        isHorizontal: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            // 控件列表
            controlsArray: [],
            // 每行最大存放的个数
            maxWidthCount: 1,
            // 控件的间距
            margin: {
                margin_x: 0,
                margin_y: 5,
            },
            // 记录所有控件的初始位置
            recordInitControlsPoisitonList: [],
            // 控件的数据
            controlsPositionArray: [],
            // 记录当前手指的位置
            recordPosition: {
                x: 0,
                y: 0,
            },
            // 记录当前操作的控件数据
            recordControlsPositionItem: {},
            // 当前操作的控件的下标
            curretnControlsIndex: -1,
            // 是否可以拖拽
            dragLock: false,
        };
    },
    mounted() {
        // 获取系统信息
        this.systemInfo = uni.getSystemInfoSync();
        // 获取控件列表
        this.controlsArray = this.controlsList;

        // 初始化控件的位置
        this.controlsPositionArray = this.initControlsPosition();
    },
    methods: {
        /** 初始化各个控件的位置 */
        initControlsPosition() {
            // 用于返回出去的新数组
            let tempArray = [];

            // 设置控件位置
            for (let i = 0, j = 0; i < this.controlsList.length; i++, j++) {
                let screenWidth = this.$store.state.Screen.width;
                const left = this.isHorizontal ? (j * (this.controlsSize.width / 100 * screenWidth + this.margin.margin_x) + this.margin.margin_x) : this.margin.margin_x;
                let top = this.isHorizontal ? this.margin.margin_y : (j * (this.controlsSize.height + this.margin.margin_y) + this.margin.margin_y);
                top = top + 10
                tempArray[i] = {
                    left,
                    top,
                }
            }

            // 记录数据 - 进行深拷贝
            this.recordInitControlsPoisitonList = [...tempArray];
            // 返回数据
            return tempArray;
        },

        /** 长按事件 */
        handleLongpress(event, index) {
            // 震动
            uni.vibrateShort();
            // 打开拖拽锁
            this.dragLock = true;
        },

        /** 处理手指触摸后移动 */
        handleTouchmove(event) {
            if (!this.dragLock) {
                return;
            }
            const { pageX, pageY } = event.touches[0];

            // 获取移动的差
            this.controlsPositionArray[this.curretnControlsIndex] = {
                left: this.controlsPositionArray[this.curretnControlsIndex].left + (pageX - this.recordPosition.x),
                top: this.controlsPositionArray[this.curretnControlsIndex].top + (pageY - this.recordPosition.y),
            }
            // 记录位置
            this.recordPosition = { x: pageX, y: pageY };
            // 判断当前移动的位置是否需要进行排序
            if (!this.isHorizontal) {
                // 向下移动
                if (this.curretnControlsIndex !== this.controlsPositionArray.length - 1 && this.controlsPositionArray[this.curretnControlsIndex].top > this.controlsPositionArray[this.curretnControlsIndex + 1].top) {
                    // 交换位置
                    this._handleChangeControlsPosition(0, this.curretnControlsIndex + 1);
                }
                // 向上移动
                else if (this.curretnControlsIndex !== 0 && this.controlsPositionArray[this.curretnControlsIndex].top < this.controlsPositionArray[this.curretnControlsIndex - 1].top) {
                    // 交换位置
                    this._handleChangeControlsPosition(0, this.curretnControlsIndex - 1);
                }
            } else {
                // 向右移动
                if (this.curretnControlsIndex !== this.controlsPositionArray.length - 1 && this.controlsPositionArray[this.curretnControlsIndex].left > this.controlsPositionArray[this.curretnControlsIndex + 1].left) {
                    // 交换位置
                    this._handleChangeControlsPosition(0, this.curretnControlsIndex + 1);
                }
                // 向左移动
                else if (this.curretnControlsIndex !== 0 && this.controlsPositionArray[this.curretnControlsIndex].left < this.controlsPositionArray[this.curretnControlsIndex - 1].left) {
                    // 交换位置
                    this._handleChangeControlsPosition(0, this.curretnControlsIndex - 1);
                }
            }
        },

        /** 处理手指触摸开始事件 */
        handleTouchstart(event, index) {
            const { pageX, pageY } = event.touches[0];

            // 记录一些数据
            this.curretnControlsIndex = index;
            this.recordPosition = { x: pageX, y: pageY };
            this.recordControlsPositionItem = this.controlsPositionArray[index];
        },

        /** 处理手指松开事件 */
        handleTouchend(event) {
            if (!this.dragLock) {
                return;
            }

            // 关闭拖拽锁
            this.dragLock = false;
            // 将操控的控件归位
            this.controlsPositionArray[this.curretnControlsIndex] = this.recordInitControlsPoisitonList[this.curretnControlsIndex];
            this.curretnControlsIndex = -1;
            this.$emit('success', this.controlsArray);
        },

        /**
         * 处理交换控件位置的方法 - 
         * @param {number} index	需要与第几个下标交换位置
         * */
        _handleChangeControlsPosition(type, index) {
            // 记录当前操控的控件数据
            let tempControls = this.controlsArray[this.curretnControlsIndex];

            // 设置原来位置的数据
            this.controlsArray[this.curretnControlsIndex] = this.controlsArray[index];
            // 将临时存放的数据设置好
            this.controlsArray[index] = tempControls;

            // 调整控件位置数据
            this.controlsPositionArray[index] = this.controlsPositionArray[this.curretnControlsIndex];
            this.controlsPositionArray[this.curretnControlsIndex] = this.recordControlsPositionItem;

            // 改变当前选中的位置
            this.curretnControlsIndex = index;

            // 记录新位置的数据
            this.recordControlsPositionItem = this.recordInitControlsPoisitonList[this.curretnControlsIndex];
        },
    }
}
</script>

<style scoped lang="scss">
.drag-and-drop-sort-B {
    position: fixed;

    ._item {
        position: absolute;
        display: flex;
        justify-content: center;

        .drag-item {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>
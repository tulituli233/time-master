<template>
    <view>
        <view class="btn" @click="doUtsAdd">
            Uts添加闹铃
        </view>
        <view class="btn" @click="doUtsDelete">
            Uts删除闹铃
        </view>
    </view>
</template>

<script>
    const app = getApp();

    import {
        alarmAdd,
        alarmDelete
    } from "@/uni_modules/laoqianjunzi-alarm"; 

    export default {
        data() {
            return {

            };
        },

        methods: {
            doUtsAdd() {

                let params = {
                    name : 'dida', //闹铃名称
                    weekday : '123456', //重复星期
                    hour : 10, //闹铃时
                    minutes : 14, //分钟
                    ringtone : 'https://jubaomusics.oss-cn-beijing.aliyuncs.com/%E4%B8%89%E5%8F%AA%E5%B0%8F%E7%8C%AA/%E4%B8%89%E5%8F%AA%E5%B0%8F%E7%8C%AA.mp3', //铃声
                }
                alarmAdd({
                    params:params,
                    success: (res) => {
                        console.log('success', res)

                    },
                    fail: (res) => {
                        console.log('fail', res)
                    },
                    complete: () => {
                        console.log('complete')
                    },
                })
            },
            doUtsDelete() {
                alarmDelete()
            },

        },
    };
</script>
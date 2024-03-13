<template>
    <view class="content">
        <view id="login" v-if="!isRegister">
            <view class="top">
                <view class="welcome">
                    Welcome
                </view>
                <view class="tip">
                    欢迎使用时间管家
                </view>
            </view>
            <view class="middle">
                <view class="input-box">
                    <input class="input" type="text" v-model="phone" placeholder-style="color:#ccc"
                        placeholder="请输入手机号" />
                </view>
                <view class="input-box">
                    <input class="input" type="text" v-model="password" placeholder-style="color:#ccc"
                        placeholder="请输入密码" />
                </view>
                <view class="register">
                    <view class="register-text" @click="isRegister = true">
                        注册
                    </view>
                </view>
                <view class="login">
                    <view class="login-btn" @click="login()">
                        <uni-icons type="arrow-right" size="40" color="#fff"></uni-icons>
                    </view>
                </view>
            </view>
        </view>
        <view id="register" v-else>
            <view class="back" @click="isRegister = false">
                <uni-icons type="arrow-left" size="30" color="#fff" @click="isRegister = false"></uni-icons>
            </view>
            <view class="top">
                <view class="title">
                    填写注册信息
                </view>
            </view>
            <view class="middle">
                <view class="input-box">
                    <input class="input" type="text" v-model="phone" placeholder-style="color:#ccc"
                        placeholder="请输入手机号" />
                </view>
                <view class="input-box">
                    <input class="input" type="text" v-model="newPassword" placeholder-style="color:#ccc"
                        placeholder="请输入密码" />
                </view>
                <view class="input-box">
                    <input class="input" type="text" v-model="confirmPassword" placeholder-style="color:#ccc"
                        placeholder="请再次输入密码" />
                </view>
                <view class="register">
                    <view class="register-btn" @click="register()">
                        注册
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
import { ref } from 'vue';
import { apiLogin, apiRegister } from '@/services/api/users';

const isRegister = ref(false);

const phone = ref('');
const password = ref('');

const login = () => {
    console.log('login', phone.value, password.value);
    if (!phone.value || !password.value) {
        let errorMessage = '';
        if (!phone.value) {
            errorMessage = '请输入手机号';
        } else if (!password.value) {
            errorMessage = '请输入密码';
        }

        uni.showToast({
            icon: 'error',
            title: errorMessage,
        })
        return;
    }
    apiLogin({
        Phone: phone.value,
        Password: password.value
    }).then(res => {
        console.log('res', res);
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        } else {
            console.log('res', res);
            uni.setStorageSync('userInfo', res.data)
            uni.setStorageSync('token', res.data.token)
            uni.switchTab({ url: '/pages/index/index' })
        }
    }).catch(err => {
        console.log('err', err);
    })
}

const newPassword = ref('');
const confirmPassword = ref('');

const register = () => {
    if (!phone.value || !newPassword.value || !confirmPassword.value || newPassword.value !== confirmPassword.value) {
        let errorMessage = '';
        if (!phone.value) {
            errorMessage = '请输入手机号';
        } else if (!newPassword.value) {
            errorMessage = '请输入密码';
        } else if (!confirmPassword.value) {
            errorMessage = '请再次输入密码';
        } else {
            errorMessage = '两次密码不一致';
        }

        uni.showToast({
            icon: 'error',
            title: errorMessage,
        });
        return;
    }
    apiRegister({
        Phone: phone.value,
        Password: newPassword.value
    }).then(res => {
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        } else {
            uni.showToast({
                icon: 'none',
                title: res.msg
            })
            isRegister.value = false
        }
    })
};
</script>

<style lang="scss" scoped>
.content {
    color: #fff;
    background-image: url('@/static/countdown-bg.png');
}

.middle {
    display: flex;
    flex-direction: column;
    align-items: center;

    .input-box {
        width: 600rpx;
        height: 100rpx;
        display: flex;
        align-items: center;
        justify-content: start;
        margin-bottom: 40rpx;
        padding-left: 40rpx;
        border-radius: 50rpx;
        background-color: rgba(255, 255, 255, 0.2);

        .input {
            font-size: 34rpx;
        }
    }
}

#login {
    display: flex;
    flex-direction: column;

    .top {
        padding: 160rpx 60rpx;

        .welcome {
            font-size: 60rpx;
            margin-bottom: 20rpx;
        }
    }

    .register {
        width: 550rpx;
    }

    .login {
        margin-top: 100rpx;

        .login-btn {
            width: 200rpx;
            height: 100rpx;
            line-height: 100rpx;
            text-align: center;
            border-radius: 50rpx;
            background-color: rgba(255, 255, 255, 0.2);
        }
    }

}

.back {
    padding: 40rpx;
}

#register {
    display: flex;
    flex-direction: column;

    .top {
        padding: 100rpx 60rpx;

        .title {
            font-size: 60rpx;
        }
    }

    .register {
        width: 550rpx;
        display: flex;
        justify-content: center;

        .register-btn {
            width: 200rpx;
            height: 100rpx;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50rpx;
            background-color: rgba(255, 255, 255, 0.2);
        }
    }
}
</style>
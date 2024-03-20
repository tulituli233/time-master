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
                    <input class="input" :type="passwordType" v-model="password" placeholder-style="color:#ccc"
                        placeholder="请输入密码" />
                    <view class="icon" @click="switchPasswordType">
                        <uni-icons :type="passwordType === 'password' ? 'eye-slash-filled' : 'eye-filled'" size="24"
                            color="#fff" />
                    </view>
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
                    <input class="input" :type="newPasswordType" v-model="newPassword" placeholder-style="color:#ccc"
                        placeholder="请输入密码" />
                    <view class="icon" @click="switchNewPasswordType">
                        <uni-icons :type="newPasswordType === 'password' ? 'eye-slash-filled' : 'eye-filled'" size="24"
                            color="#fff" />
                    </view>
                </view>
                <view class="input-box">
                    <input class="input" :type="confirmPasswordType" v-model="confirmPassword"
                        placeholder-style="color:#ccc" placeholder="请再次输入密码" />
                    <view class="icon" @click="switchConfirmPasswordType">
                        <uni-icons :type="confirmPasswordType === 'password' ? 'eye-slash-filled' : 'eye-filled'"
                            size="24" color="#fff" />
                    </view>
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
// #region 登录
const phone = ref('');
const password = ref('');
const passwordType = ref('password');
const switchPasswordType = () => {
    passwordType.value = passwordType.value === 'password' ? 'text' : 'password';
}

const isValidLoginParams = (params) => {
    let errorMessage = '';
    if (!params.Phone) {
        errorMessage = '请输入手机号'
    } else if (!params.Password) {
        errorMessage = '请输入密码'
    } else if (!/^1[3-9]\d{9}$/.test(params.Phone)) {
        errorMessage = '手机号格式错误'
    } else if (!/^[0-9A-Za-z]{6,18}$/.test(params.Password)) {
        errorMessage = '密码至少6到18位的数字或字母'
    }
    return {
        isValid: !errorMessage,
        errorMessage
    }
}

const login = () => {
    const params = {
        Phone: phone.value,
        Password: password.value
    };
    const result = isValidLoginParams(params);
    if (!result.isValid) {
        uni.showToast({
            icon: 'error',
            title: result.errorMessage,
        });
        return;
    }
    apiLogin(params).then(res => {
        console.log('res', res);
        if (res.code === 0 || !res.code) {
            uni.showToast({
                icon: 'error',
                title: res.msg || '网络异常'
            })
        } else {
            console.log('res', res);
            uni.setStorageSync('userInfo', res.data)
            getApp().globalData.userInfo = res.data
            uni.setStorageSync('token', res.data.token)
            uni.switchTab({ url: '/pages/index/index' })
        }
    }).catch(err => {
        console.log('err', err);
    })
}
// #endregion

// #region 注册
const newPassword = ref('');
const newPasswordType = ref('password');
const switchNewPasswordType = () => {
    newPasswordType.value = newPasswordType.value === 'password' ? 'text' : 'password';
}
const confirmPassword = ref('');
const confirmPasswordType = ref('password');
const switchConfirmPasswordType = () => {
    confirmPasswordType.value = confirmPasswordType.value === 'password' ? 'text' : 'password';
}

const isValid = (obj) => {
    let errorMessage = '';
    if (!obj.phone) {
        errorMessage = '请输入手机号';
    } else if (!obj.newPassword) {
        errorMessage = '请输入密码';
    } else if (!obj.confirmPassword) {
        errorMessage = '请再次输入密码';
    } else if (obj.newPassword !== obj.confirmPassword) {
        errorMessage = '两次密码不一致';
    } else if (!/^1[3-9]\d{9}$/.test(obj.phone)) {
        errorMessage = '手机号格式错误';
    } else if (!/^[0-9A-Za-z]{6,18}$/.test(obj.newPassword) || !/^[0-9A-Za-z]{6,18}$/.test(obj.confirmPassword)) {
        errorMessage = '密码至少6到18位的数字或字母';
    }
    return {
        isValid: !errorMessage,
        errorMessage
    };
};

const register = () => {
    const obj = {
        phone: phone.value,
        newPassword: newPassword.value,
        confirmPassword: confirmPassword.value
    };
    const result = isValid(obj);
    if (!result.isValid) {
        uni.showToast({
            icon: 'error',
            title: result.errorMessage,
        });
        return;
    }
    apiRegister({ Phone: obj.phone, Password: obj.newPassword }).then(res => {
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
// #endregion
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
        justify-content: space-between;
        margin-bottom: 40rpx;
        padding-left: 40rpx;
        border-radius: 50rpx;
        background-color: rgba(255, 255, 255, 0.2);

        .input {
            font-size: 34rpx;
        }

        .icon {
            padding: 40rpx;
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
        width: 600rpx;

        .register-text {
            width: 100rpx;
            padding: 20rpx;
        }
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
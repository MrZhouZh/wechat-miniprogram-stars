// pages/me/me.ts
Page<IMeOptionData, IMeOption>({

    /**
     * 页面的初始数据
     */
    data: {
        userPic: '',
        name: '',
        starslen: 0,
        collectLen: 0
    },

    getUserInfo() {
        wx.getStorage<WechatMiniprogram.UserInfo>({
            key: 'userInfo',
            success: res => {
                console.log(res)
                const { avatarUrl, nickName } = res.data
                this.setData({
                    userPic: avatarUrl,
                    name: nickName
                })
            }
        })
    },

    getUserProfile() {
        // 不能直接调用获取, 需要用户有触发行为, getUserProfile:fail can only be invoked by user TAP gesture.
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
            desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                console.log(res.userInfo)
                const { avatarUrl, nickName } = res.userInfo
                this.setData({
                    userPic: avatarUrl,
                    name: nickName,
                })
            },
            fail: reason => {
                console.log(reason, 'fail reason')
            }
        })
    },

    toMyPush() {
        wx.navigateTo({
            url: 'myPush/myPush'
        })
    },
    
    toWallet() {
        wx.navigateTo({
            url: 'wallet/wallet'
        })
    },
    
    toRank() {
        wx.navigateTo({
            url: 'ActiveStarsRank/ActiveStarsRank'
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

        // this.getUserProfile()

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})
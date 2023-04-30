// pages/message/message.ts
Page<IMessageOptionData, IMessageOption>({
    /**
     * 页面的初始数据
     */
    data: {
        tabs: [],
        activeTab: 0,
    },

    onTabChange(e) {
        const { activeTab } = this.data
        const currentTab = e.target.dataset.index
        if (currentTab === activeTab) return

        this.setData({
            activeTab: currentTab
        })
    },

    onSwiperChange(e) { 
        const currentSwiper = e.detail.current
        this.setData({
            activeTab: currentSwiper
        })
    },

    jumpToStarsInfo() {
        wx.navigateTo({
            url: '../message/starsInfo/starsInfo'
        })
    },

    jumpToMyMessage() {
        wx.navigateTo({
            url: '../message/myMessage/myMessage'
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        const initTabs: TTabItem[] = [
            { text: '动态' },
            { text: '与我相关' },
            { text: '私信' },
        ]

        this.setData({
            activeTab: 0,
            tabs: initTabs
        })

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
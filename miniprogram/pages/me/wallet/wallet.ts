// pages/me/wallet/wallet.ts
import { sleep, randomN } from '../../../utils/util'

Page<IWalletOptionData, IWalletOption>({

    /**
     * 页面的初始数据
     */
    data: {
        totalMoney: 0,
        operableMoney: 0,
        setMoney: 0
    },

    async getWalletMoney() {
        await sleep(1.5)

        this.setData({
            totalMoney: randomN(3000, 5000),
            operableMoney: randomN(1000, 2500),
            setMoney: randomN(1000, 2000)
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this.getWalletMoney()
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
// pages/main/createStar/createStar.ts
Page<ICreateStarOptionData, ICreateStarOption>({
    /**
     * 页面的初始数据
     */
    data: {
        starName: '',
        starpic: '',
        type: '',
        starIntro: '',
        info:[],
        activeIndex: 1,
        display: false,
        showList: [],
        starCategories: [],
    },

    chooseImage() {
        this.setData({
            display: true
        })
    },

    finishChoose() {
        this.setData({
            display: false
        })
    },

    bindStarNameInput(e) {
        this.setData({
            starName: e.detail.value,
        });
    },

    onStarIntro(e) {
        this.setData({
            starIntro: e.detail.value
        })
    },

    onPic(e) {
        const activeIndex = e.target.dataset.index
        if (activeIndex === this.data.activeIndex) return
        const newShowList = this.data.showList
            .map((item, idx) => {
                item = false
                if (idx === activeIndex) {
                    item = true
                }
                return item
            })
        this.setData({
            activeIndex,
            starpic: `../../../images/stars${activeIndex + 1}.png`,
            showList: newShowList
        })
    },

    onChooseCategory(e) {
        const activeIndex = e.target.dataset.index
        let type = this.data.type;
        const newStarCategories = this.data.starCategories
            .map((starCategory, idx) => {
                starCategory.bgColor = '#f5f6f8'
                starCategory.textColor = '#a2a3a7'
                if (idx === activeIndex) {
                    type = starCategory.text
                    starCategory.bgColor = '#14b392'
                    starCategory.textColor = '#fff'
                }
                return starCategory
            })
        this.setData({
            type,
            // starName: '',
            starCategories: newStarCategories
        })
    },

    toMain() {
        if (this.data.starName.trim() === "") {
            wx.showModal({
                content: '请输入星球名字',
                showCancel: false, // 不显示取消按钮
                confirmText: '确定'
            })
        } else if (this.data.type === ''){
            wx.showModal({
                content: '请选择星球属性',
                showCancel: false, // 不显示取消按钮
                confirmText: '确定'
            })
        } else {
            const { starName, starpic, type, starIntro } = this.data
            const newInfo: TCreateStarInfo[] = [{
                type,
                starpic: starpic.substring(3, starpic.length),
                starName,
                starIntro,
            }];
            this.data.info = newInfo.concat(this.data.info);
            wx.setStorage({
                key: 'info',
                data: this.data.info,
                success: () => {
                    wx.switchTab({
                        url:'../main'
                    });
                }
            });
        }
    },

    _initStarCategories() {
        const initStarCategories = [
            { text: '文艺', bgColor: '#f5f6f8', textColor: '#a2a3a7' },
            { text: '科技', bgColor: '#f5f6f8', textColor: '#a2a3a7' },
            { text: '时尚', bgColor: '#f5f6f8', textColor: '#a2a3a7' },
            { text: '娱乐', bgColor: '#f5f6f8', textColor: '#a2a3a7' },
            { text: '经济', bgColor: '#f5f6f8', textColor: '#a2a3a7' },
            { text: '教育', bgColor: '#f5f6f8', textColor: '#a2a3a7' },
            { text: '健康', bgColor: '#f5f6f8', textColor: '#a2a3a7' },
            { text: '生活', bgColor: '#f5f6f8', textColor: '#a2a3a7' },
        ]
        this.setData({
            starCategories: initStarCategories
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this._initStarCategories()
        this.setData({
            activeIndex: 0,
            starpic: '../../../images/stars1.png',
            showList: [true, false, false, false, false, false]
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        wx.getStorage({
            key: 'info',
            success: res => {
                this.setData({
                    info:res.data
                });
            }
        })
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
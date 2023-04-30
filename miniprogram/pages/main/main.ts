// pages/main.ts
Page<IMainOptionData, IMainOption>({
    /**
     * 页面的初始数据
     */
    data: {
      stars: [],
      newstars: [],
      showView: 0,
      display: false,
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
      this.getStarsInfo('')
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
      this._getNewStars()
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
      this._getNewStars()
    },
  
    _requestStarsInfo() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            stars: [
              {
                starpic: '../../images/stars1.png',
                starName: 'test',
                userName: 'somebody'
              }
            ]
          })
        }, 1500);
      })
    },
  
    async getStarsInfo(type: string) {
      console.log(type)
      const data = await this._requestStarsInfo()
      this.setData({
        stars: data.stars
      })
      // wx.request<StarsInfoResponse>({
      //   url: 'https://www.easy-mock.com/mock/5a236208e27b936ea88bdb14/starsdata/getUserInfo#!method=get',
      //   method: 'GET',
      //   data: { type },
      //   success: (res) => {
      //     const data = res.data.data[app.data.currentUser]
  
      //     this.setData({
      //       stars: data.stars
      //     })
      //   }
      // })
    },
  
    onCreateStar() {
        wx.navigateTo({
            url: 'createStar/createStar'
        })
    },
  
    _getNewStars() {
      wx.getStorage({
        key: 'info',
        success: res => {
          this.setData({
            newstars: res.data
          })
        }
      })
  
      if (this.data.newstars.length > 0) {
        this.setData({
          display: true
        })
      }
    },
  })
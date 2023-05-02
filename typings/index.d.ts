/// <reference path="./types/index.d.ts" />

interface IAppOption {
    globalData: {
      userInfo?: WechatMiniprogram.UserInfo,
    }
    userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}

interface StarItem {
    starpic: string
    starName: string
    userName: string
}
  
type StarsInfoResponse = WechatMiniprogram.RequestSuccessCallbackResult<{
    stars: StarItem[]
}[]>
  
interface IMainOptionData {
    stars: StarItem[],
    newstars: StarItem[],
    showView: number,
    display: boolean,
}
  
interface IMainOption {
    data: IMainOptionData
    
    /**
     * 获取星球信息
     * 
     * @param type
     */
    getStarsInfo: (type: string) => void
    
    /**
     * 跳转至 创建星球页
     */ 
    onCreateStar: () => void
  
    /**
     * 获取新星球数据, 并设置展示
     */
    _getNewStars: () => void
  
    _requestStarsInfo: () => Promise<{ stars: StarItem[] }>
}

type TCreateStarInfo = {
    starName: string
    starpic: string
    type: string
    starIntro: string
}

type TStarCategoryItem = {
    text: string
    bgColor: string
    textColor: string
}

interface ICreateStarOptionData {
    starName: string
    starpic: string
    starIntro: string
    type: string
    info: TCreateStarInfo[]
    activeIndex: number
    display: boolean
    showList: boolean[]
    starCategories: TStarCategoryItem[]
}

interface ICreateStarOption {
    data: ICreateStarOptionData,

    /**
     * 初始化星球类目
     */
    _initStarCategories: () => void

    /**
     * 选择图片
     */
    chooseImage: () => void
    
    /**
     * 选择完成 关闭遮罩层
     */
    finishChoose: () => void
    
    /**
     * 输入星球名字
     */
    bindStarNameInput: (e: WechatMiniprogram.Input) => void

    /**
     * 星球简介
     */
    onStarIntro: (e: WechatMiniprogram.TextareaInput) => void

    /**
     * 选择要的背景图片
     */
    onPic: (e: WechatMiniprogram.BaseEvent) => void

    /**
     * 更改选择的按钮的样式
     */
    onChooseCategory: (e: WechatMiniprogram.BaseEvent) => void
    
    /**
     * 完成创建 跳转到主页面
     */
    toMain: () => void
}


type TTabItem = {
    text: string
}
interface IMessageOptionData {
    tabs: TTabItem[]
    activeTab: number
}

interface IMessageOption {
    data: IMessageOptionData

    /**
     * 点击 Tab 切换
     */
    onTabChange: (e: WechatMiniprogram.BaseEvent) => void

    // 滑动切换
    onSwiperChange: (e: WechatMiniprogram.SwiperChange) => void

    /**
     * 跳转至我
     */
    jumpToStarsInfo: () => void

    /**
     * 跳转至私信页
     */
    jumpToMyMessage: () => void
}

interface IMeOptionData {
    userPic: string
    name: string
    starslen: number
    collectLen: number
}

interface IMeOption {
    data: IMeOptionData

    getUserInfo: () => void
    
    getUserProfile: () => void

    toMyPush: () => void

    toWallet: () => void

    toRank: () => void
}

interface IWalletOptionData {
    totalMoney: number,
    operableMoney: number,
    setMoney: number
}

interface IWalletOption {
    data: IWalletOptionData
    
    /**
     * 获取用户钱包信息
     */
    getWalletMoney: () => void
}

interface IMyPushOptionData {
    name: string
    pic: string
}

interface IMyPushOption {
    data: IMyPushOptionData

    /**
     * 获取用户信息 名称/头像
     */
    getUserInfo: () => void
}
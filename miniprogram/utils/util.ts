export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

/**
 * 延迟运行
 * @param ms default: 3
 */
export const sleep = (ms: number = 3) =>
    new Promise(resolve => setTimeout(resolve, ms * 1000))

/**
 * 随机一个区间的数字
 * @param min 最小值
 * @param max 最大值
 */
export const randomN = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min
}

// const _baseUrl = 'http://musicapi.duapp.com/api.php'
const _baseUrl2 = 'https://api.imjad.cn/cloudmusic/'
export default {
  getPlayListByWhere (cat, order, offset, total, limit) {
    return _baseUrl2 + '?type=playlist&id=374755836'
  },
  getLrc (id) {
    return _baseUrl2 + '?type=lyric&id=' + id
  },
  getSong (id) {
    return _baseUrl2 + '?type=song&id=' + id
  },
  getPlayListDetail (id) {
    return _baseUrl2 + '?type=playlist&id=' + id
  },
  getMv (id) {
    return _baseUrl2 + '?type=mv&id=' + id
  },
  search (words) {
    return _baseUrl2 + '?type=search&s=' + words
  }
}

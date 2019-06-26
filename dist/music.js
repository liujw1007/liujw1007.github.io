const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
     {
        name: '花火が瞬く夜に',
        artist: '羽翀',
        url: 'http://pt1i69mxu.bkt.clouddn.com/%E7%BE%BD%E7%BF%80-%E8%8A%B1%E7%81%AB.mp3',
        cover: 'http://pt1i69mxu.bkt.clouddn.com/video/%E9%9D%92%E6%B5%B7-20.jpg',
      },
      {
        name: '往后余生',
        artist: '王贰浪',
        url: 'http://pt1i69mxu.bkt.clouddn.com/%E7%8E%8B%E8%B2%B3%E6%B5%AA%20-%20%E5%BE%80%E5%BE%8C%E9%A4%98%E7%94%9F%EF%BC%88COVER%20%E9%A6%AC%E8%89%AF%EF%BC%89%E3%80%8E%E5%BF%83%E5%BA%95%E6%BA%AB%E6%9F%94%E6%98%AF%E4%BD%A0%EF%BC%8C%E7%9B%AE%E5%85%89%E6%89%80%E8%87%B4%E4%B9%9F%E6%98%AF%E4%BD%A0%E3%80%82%E3%80%8F%E3%80%90%E5%8B%95%E6%85%8B%E6%AD%8C%E8%A9%9ELyrics%E3%80%91.mp3',
        cover: 'http://pt1i69mxu.bkt.clouddn.com/video/%E9%9D%92%E6%B5%B7-20.jpg',
      },
      {
        name: "青海之行",
        artist: '娃娃',
        url: 'http://pt1i69mxu.bkt.clouddn.com/%E9%9D%92%E6%B5%B7%E4%B9%8B%E8%A1%8C.mp3',
        cover: 'http://pt1i69mxu.bkt.clouddn.com/video/%E9%9D%92%E6%B5%B7-20.jpg',
      }
      
    ]
});
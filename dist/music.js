const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
     {
        name: '花火が瞬く夜に',
        artist: '羽翀',
        url: 'http://music.163.com/song/media/outer/url?id=434902428.mp3',
        cover: 'https://i.loli.net/2019/12/17/1Feta9RCAxG7IpP.jpg',
      },
      {
        name: '往后余生',
        artist: '马良',
        url: 'http://music.163.com/song/media/outer/url?id=557584888.mp3',
        cover: 'https://i.loli.net/2019/12/17/RbpYxhDrkidwgAM.jpg',
      },
      {
        name: "Rain after summer",
        artist: '羽翀',
        url: 'http://music.163.com/song/media/outer/url?id=430685732.mp3',
        cover: 'https://i.loli.net/2019/12/17/2Qb5lqFxmrCGOph.jpg',
      }
      
    ]
});
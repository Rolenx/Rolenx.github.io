document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('rotating-content');
    const images = [
      { url: '/img/about_img/titanfall2.jpg', tips: '第九艺术', title: 'TitanFall2', bottom: '协议三：保护铁驭' },
      { url: '/img/about_img/sea.jpg', tips: '我的图片集', title: '见证生活', bottom: '如生命般的谜团' },
      // 添加更多图片和文字
    ];
    let currentIndex = 0;
  
    function updateContent() {
      const { url, tips, title, bottom } = images[currentIndex];
      content.style.background = `url(${url}) top / cover no-repeat`;
      content.querySelector('.author-content-item-tips').textContent = tips;
      content.querySelector('.author-content-item-title').textContent = title;
      content.querySelector('.content-bottom .tips').textContent = bottom;
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    setInterval(updateContent, 5000); // 每5秒轮换一次
  });
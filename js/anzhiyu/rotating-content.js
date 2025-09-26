document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('rotating-content');
    const images = [
      { url: '/img/about_img/titanfall2.jpg', tips: '第九艺术', title: '协议三：保护铁驭', bottom: 'TitanFall 2' },
      { url: '/img/about_img/cyberpunk2077.jpg', tips: '第九艺术', title: '以我残躯化烈火', bottom: 'CyberPunk 2077' },
      { url: '/img/about_img/assassins_creed.jpg', tips: '第九艺术', title: '万物皆虚，万事皆允', bottom: 'Assassin\'s Creed' },
      { url: '/img/about_img/riden.jpg', tips: '第九艺术', title: '我要你知道，开膛手杰克回来了！', bottom: 'Metal Gear Rising: Revengeance' },
      { url: '/img/about_img/detroit_become_human.jpg', tips: '第九艺术', title: 'RA9', bottom: 'Detroit: Become Human' },
      { url: '/img/about_img/seker0.jpg', tips: '第九艺术', title: '犹豫就会败北', bottom: 'Sekiro: Shadows Die Twice' },
      { url: '/img/about_img/death_stranding.jpg', tips: '第九艺术', title: 'Don\'t be so serious', bottom: 'Death Stranding' },
    
      
      // 添加更多图片和文字
    ];
    let currentIndex = 0;
  
    function updateContent() {
      const { url, tips, title, bottom } = images[currentIndex];
      const nextIndex = (currentIndex + 1) % images.length;
      const nextImage = images[nextIndex];
  
      // 设置当前背景图层
      content.style.backgroundImage = `url(${url}), url(${nextImage.url})`;
      content.style.transition = 'background-image 0.5s ease-in-out';
      content.querySelector('.author-content-item-tips').textContent = tips;
      content.querySelector('.author-content-item-title').textContent = title;
      content.querySelector('.content-bottom .tips').textContent = bottom;
  
      setTimeout(() => {
        content.style.backgroundImage = `url(${nextImage.url})`;
        content.querySelector('.author-content-item-tips').textContent = nextImage.tips;
        content.querySelector('.author-content-item-title').textContent = nextImage.title;
        content.querySelector('.content-bottom .tips').textContent = nextImage.bottom;
        currentIndex = nextIndex;
      }, 500); // 500ms 与 CSS 过渡时间匹配
    }
  
    setInterval(updateContent, 5000); // 每5秒轮换一次
  });
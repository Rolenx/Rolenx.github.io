var posts=["2024/11/06/Hello/","2025/01/23/入坑机娘浅谈/","2024/12/29/人与手机/","2023/06/28/本科发展规划/","2025/01/27/漫游深大/","2025/01/16/办理护照/","2025/02/09/Ori-and-Blind-Forest-游玩简评/","2025/02/17/第一次剪视频/","2023/10/19/关于学习模式的讨论/","2025/02/18/我的日记/","2025/02/25/四天四夜重庆行/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["2024/11/06/welcome/","2024/11/06/Hello/","2025/01/23/入坑机娘浅谈/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
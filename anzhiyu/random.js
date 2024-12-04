var posts=["2024/11/06/welcome/","2024/11/06/Hello/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
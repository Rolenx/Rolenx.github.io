var posts=["2025/01/16/welcome/","2024/11/06/Hello/","2025/01/23/入坑机娘浅谈/","2024/12/29/人与手机/","2023/06/28/本科发展规划/","2025/01/27/漫游深大/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
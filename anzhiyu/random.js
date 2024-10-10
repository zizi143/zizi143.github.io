var posts=["2024/08/24/hello-world/","2024/09/01/拉康派精神分析 1/","2024/10/10/【实用主义】电子书资源 /"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
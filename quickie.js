function getsnippet(code) {
  var js = "!function(e,a,t,n,c,o,s){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,o=a.createElement(t),s=a.getElementsByTagName(t)[0],o.async=1,o.src=n,s.parentNode.insertBefore(o,s)}(window,document,\"script\",\"\/\/www.google-analytics.com\/analytics.js\",\"ga\"),ga(\"create\",\"" + code + "\",\"auto\"),ga(\"send\",\"pageview\");";
  var snippet = "<script>" + '\n' + js + '\n' + "</script>";
  
  return snippet;
}

function addsnippet(code) {
  var js = "!function(e,a,t,n,c,o,s){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,o=a.createElement(t),s=a.getElementsByTagName(t)[0],o.async=1,o.src=n,s.parentNode.insertBefore(o,s)}(window,document,\"script\",\"\/\/www.google-analytics.com\/analytics.js\",\"ga\"),ga(\"create\",\"" + code + "\",\"auto\"),ga(\"send\",\"pageview\");";
  var snippet = '\n' + js + '\n';
  
  var script = document.createElement('script');
  script.innerHTML = snippet;
  
  document.getElementsByTagName('head')[0].appendChild(script);
}

function getsnippet(code) {
  var js = "(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\r\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r\n  })(window,document,\'script\',\'\/\/www.google-analytics.com\/analytics.js\',\'ga\');\r\n\r\n  ga(\'create\', \'" + code + "\', \'auto\');\r\n  ga(\'send\', \'pageview\');";
  var snippet = "<script>" + '\n' + js + '\n' + "</script>";
  
  return snippet;
}

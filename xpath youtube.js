//Siyah Muhafiz Web Browser Console XPath Kullanımı Youtube\\
//-------------------------------------------------\\
                   //Ham Hali Kullanımı\\
//--------------------------------------------------\\
//Örnek:
//-------------------------------------------------------
//$x("//a[@class='yt-simple-endpoint style-scope ytd-grid-video-renderer']")[0].getAttribute('href');


var syhmhz = new Array();
for (var i = 0; i < $x("//a[@class='yt-simple-endpoint style-scope ytd-playlist-video-renderer']").length; i++) 
{
  syhmhz.push($x("//a[@class='yt-simple-endpoint style-scope ytd-playlist-video-renderer']")[i].getAttribute('href'));
}
 for (var j = 0; j < syhmhz.length; j++) 
{
  document.write("https://www.youtube.com"+syhmhz[j]+"<br>");
}

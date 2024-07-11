document.addEventListener('DOMContentLoaded', function() {
    const topBtn = document.querySelector('.top-btn');
    const downloadBtn = document.querySelector('.download-button');
    const bottomBtn = document.querySelector('.bottom-btn');
    if (topBtn) {
      topBtn.addEventListener('click', () => DownSoft('topBtn'));
    }
    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => DownSoft('downloadBtn'));
    }
    if (bottomBtn) {
      bottomBtn.addEventListener('click', () => DownSoft('bottomBtn'));
    }
  
    function DownSoft() {
        var u = navigator.userAgent;
        // iOS
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        // Android
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
  
        // Begin get channel code from clipboard
        let gameId = getQueryVariable("from_gameid");
        let code = getQueryVariable("channelCode");
        let copyObj = {
            from_gameid: gameId,
            channelCode: code
        };
        let copyStr = JSON.stringify(copyObj);
        copyText(copyStr, function () {
            console.log('copy successful', copyStr);
        });
        // End get channel code from clipboard
  
        let fbclid = getQueryVariable("fbclid");
        var golink = "";
        console.log('fbclid', fbclid);
        if (fbclid && fbclid.length > 1) {
            // Channel APK this URL
            golink = "https://xjpklccossyd06.zxcvrfrec.com/Rummytry/RummyTry-channel-9000000.apk";
        } else {
            golink = "https://xjpklccossyd06.zxcvrfrec.com/Rummytry/RummyTry-channel-9000000.apk";
        }
  
        if (isiOS) {
            // If not have iOS link, comment out this line
            window.location.href = "https://xjpklccossyd06.zxcvrfrec.com/Rummytry/RummyTry-channel-9000000.apk";
        } else if (isAndroid) {
            window.location.href = golink;
        } else {
            window.location.href = golink;
        }
    }
  
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] === variable) {
                return pair[1];
            }
        }
        return false;
    }
  
    function copyText(text, callback) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            var successful = document.execCommand('copy');
            if (successful) {
                callback();
            } else {
                console.error('Copying text command was unsuccessful');
            }
        } catch (err) {
            console.error('Error in copying text: ', err);
        }
        document.body.removeChild(textArea);
    }
  });
  
  
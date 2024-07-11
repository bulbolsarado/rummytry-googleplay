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

    function DownSoft(buttonId) {
        var u = navigator.userAgent;
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;

        let gameId = getQueryVariable("from_gameid");
        let code = getQueryVariable("channelCode");
        let copyObj = {
            from_gameid: gameId,
            channelCode: code
        };
        let copyStr = JSON.stringify(copyObj);

        copyText(copyStr, function(success) {
            if (success) {
                console.log('Copy successful:', copyStr);
            } else {
                console.error('Copy failed');
            }
        });

        let fbclid = getQueryVariable("fbclid");
        var golink = "https://xjpklccossyd06.zxcvrfrec.com/Rummytry/RummyTry-channel-9000000.apk";
        console.log('fbclid', fbclid);

        if (isiOS) {
            window.location.href = golink;
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
        // First, try using the modern Clipboard API
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                console.log('Copied to clipboard successfully using Clipboard API');
                callback(true);
            }).catch(err => {
                console.error('Failed to copy using Clipboard API:', err);
                fallbackCopyText(text, callback);
            });
        } else {
            // Fallback to older method if Clipboard API is not supported
            fallbackCopyText(text, callback);
        }
    }

    function fallbackCopyText(text, callback) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.style.position = 'fixed';  // Prevent scrolling to bottom of page in Microsoft Edge.
        textArea.style.opacity = '0';       // Make textarea invisible.

        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            if (successful) {
                console.log('Copied to clipboard successfully using execCommand');
                callback(true);
            } else {
                console.error('Copying text command was unsuccessful');
                callback(false);
            }
        } catch (err) {
            console.error('Error in copying text using execCommand:', err);
            callback(false);
        }

        document.body.removeChild(textArea);
    }
});

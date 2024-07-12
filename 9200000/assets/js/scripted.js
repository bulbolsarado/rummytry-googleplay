document.getElementById('downloadApk').addEventListener('click', function() {
    const apkUrl = 'https://appsvip.s3.ap-south-1.amazonaws.com/rummmytry.apk'; // Replace with your APK URL

    const anchor = document.createElement('a');
    anchor.href = apkUrl;
    anchor.download = 'rummmytry.apk'; // Optional: name the downloaded file
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Prompt the user to install the APK
    promptInstall(apkUrl);
});

function promptInstall(apkUrl) {
    // Create a link element and set its href to the APK URL
    const link = document.createElement('a');
    link.href = apkUrl;

    // Simulate a click on the link
    link.click();

    // This method only prompts the user to install the APK,
    // users still need to confirm the installation manually.
}

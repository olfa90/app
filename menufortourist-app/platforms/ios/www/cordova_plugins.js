cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/de.appplant.cordova.plugin.hidden-statusbar-overlay/www/hidden-statusbar-overlay.js",
        "id": "de.appplant.cordova.plugin.hidden-statusbar-overlay.HiddenStatusbarOverlay",
        "clobbers": [
            "plugin.statusbarOverlay"
        ]
    },
    {
        "file": "plugins/hu.dpal.phonegap.plugins.SpinnerDialog/www/spinner.js",
        "id": "hu.dpal.phonegap.plugins.SpinnerDialog.SpinnerDialog",
        "merges": [
            "window.plugins.spinnerDialog"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.globalization/www/GlobalizationError.js",
        "id": "org.apache.cordova.globalization.GlobalizationError",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.globalization/www/globalization.js",
        "id": "org.apache.cordova.globalization.globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "de.appplant.cordova.plugin.hidden-statusbar-overlay": "1.2.0",
    "hu.dpal.phonegap.plugins.SpinnerDialog": "0.3.0",
    "org.apache.cordova.globalization": "0.3.0",
    "org.apache.cordova.splashscreen": "0.3.2",
    "org.apache.cordova.inappbrowser": "0.5.1"
}
// BOTTOM OF METADATA
});
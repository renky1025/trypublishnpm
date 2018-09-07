/**
* @Method: Returns the plural form of any noun.
* @Param {any}
* @Return {boolean}
*/
class UtilTools {
    // 通过 constructor 判断
    isArray(value:any) {
        return value && typeof value == 'object' && value.constructor === Array
    }
    // 通过instanceof 判断判断
    isArray_instanceof(value:any) {
        return value && typeof value == 'object' && value instanceof Array
    }
    // 通过 toString 判断
    isArray_tostring(value:any) {
        return Array.isArray(value) || (typeof value == 'object' && Object.prototype.toString.call(value) === '[object Array]')
    }
    // 判断是否是对象
    isObject(value: any) {
        return value != null && typeof value === 'object' && Object.prototype.toString.call(value) === '[object Object]'
    }

    // 判断是否安卓
    isAndroid() {
        return /Android/i.test(navigator.userAgent) || /Linux/i.test(navigator.appVersion);
    }
    // 判断是否ios
    isIOS () {
        return (/ipad|iphone/i.test(navigator.userAgent));
    }
    // 判断是否是Safari
    isSafari() {
        return (/msie|applewebkit.+safari/i.test(navigator.userAgent));
    }
    // 判断是否在微信
    isWeixin() {
        return /MicroMessenger/i.test(navigator.userAgent);
    }
}

export const utilTools = new UtilTools()
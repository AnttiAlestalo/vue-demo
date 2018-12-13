export default {
    methods: {
        jsStrRight: function(str1, str2) {
            if (str1 === undefined) return "";
            let i = str1.lastIndexOf(str2);
            let iLen = str2.length;
            if (i < 0 || (i + iLen) === str1.length) {
                return "";
            } else {
                return str1.substring(i + iLen, str1.length);
            }
        },
        jsLeft(str, n) {
            if (str === undefined || n <= 0) {
                return "";
            } else if (n > str.length) {
                return str;
            } else {
                return str.substring(0, n);
            }
        }
    }
}
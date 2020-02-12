import util = require('util');

/**
 * 常用功能
 */
export default class ValueUtils {
    /**
     * 返回非空字符串，非字符串返回""
     * @param value 数据
     */
    static notNullStr(value: any): string {
        switch (typeof value) {
            case 'string':
                return value;
            case 'object':
                return value === null ? '' : util.inspect(value);
            case 'boolean':
            case 'number':
            case 'bigint':
                return value.toString();
            default:
                return '';
        }
    }

    /**
     * 字符串左补齐
     * @param str 源字符串
     * @param length 返回最小长度
     * @param padding 补齐字符
     */
    static padLeft(str: string, length: number, padding: string = '0') {
        if (length <= 0 || str.length >= length) {
            return str;
        }

        return (Array(length).join(padding) + str).slice(length * -1);
    }

}


import util = require('util');

/**
 * 常用功能
 */
export default class ValueUtils {
    /**
     * 返回非空字符串，非字符串返回""
     * @param value 数据
     */
    public static notNullStr(value: any): string {
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
}


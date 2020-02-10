import ValueUtils from './utils/value';
import { IApiMessage, IReturnValue, MessageCode } from './interface/IComModel';

/**
 * 构造通用返回数据模型
 * @param message 返回消息
 * @param success 是否成功
 * @param data 返回数据
 * @param code 返回代码
 */
export function makeReturnValue(message: string, success: boolean = false, data?: any, code?: string | number): IReturnValue {
    return {
        success: success !== false,
        message: ValueUtils.notNullStr(message),
        data,
        code
    };
}

/**
 * 把IApiMessage转换成IReturnValue
 * @param apiMessage IApiMessage
 */
export function toReturnValue(apiMessage: IApiMessage): IReturnValue {
    const retMsg: IReturnValue = {
        success: apiMessage.return_code === MessageCode.success && apiMessage.result_code === MessageCode.success,
        message: apiMessage.result_msg || apiMessage.return_msg,
        code: apiMessage.result_code || apiMessage.return_code
    }

    if (retMsg.success) {
        retMsg.data = apiMessage;
    }
    return retMsg;
}

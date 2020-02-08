import ValueUtils from './utils/value';
import { IApiMessage, IReturnValue, MessageCode } from './interface/IComModel';

/**
 * 构造通用接口交互模型
 * @param retMsg 业务处理消息
 * @param retCode 接口交互代码
 * @param resCode 业务处理代码
 * @param resMsg 接口交互消息
 * @param resData 业务处理返回数据
 */
export function makeApiMessage(retMsg: string, retCode: MessageCode = MessageCode.fail, resCode?: string | number, resMsg?: string, resData?: [string, string | number][]): IApiMessage {
    let data: any = {};

    // 仅当交互成功时res才有效
    if (retCode === MessageCode.success) {
        data.result_code = resCode;
        data.result_msg = resMsg;
        if (Array.isArray(resData)) {
            resData.forEach(item => {
                data[item[0]] = item[1];
            });
        }
    }

    data.return_code = retCode;
    data.return_msg = ValueUtils.notNullStr(retMsg);

    return data;
}

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
        success: false,
        message: apiMessage.result_msg || apiMessage.return_msg,
        code: apiMessage.result_code || apiMessage.return_code
    }

    if (apiMessage.return_code === MessageCode.success) {
        delete apiMessage.return_code;
        delete apiMessage.return_msg;
        retMsg.data = apiMessage;
    }
    return retMsg;
}

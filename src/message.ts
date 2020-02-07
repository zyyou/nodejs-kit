import ValueUtils from './utils/value';
import { IApiMessage, IReturnMessage, MessageCode } from './interface/IMessage';

/**
 * 构造通用接口交互对象
 * @param retMsg 业务处理消息
 * @param retCode 接口交互代码
 * @param resCode 业务处理代码
 * @param resMsg 接口交互消息
 * @param resData 业务处理返回数据
 */
export function makeApiMessage(retMsg: string, retCode: MessageCode = MessageCode.fail, resCode?: string, resMsg?: string, resData?: [string, string | number][]): IApiMessage {
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
 * 构造通用返回消息
 * @param message 处理消息
 * @param success 是否处理成功
 * @param data 返回数据
 * @param code 返回代码
 */
export function makeReturnMessage(message: string, success: boolean = false, data?: any, code?: string): IReturnMessage {
    return {
        success: success !== false,
        message: ValueUtils.notNullStr(message),
        data,
        code
    };
}

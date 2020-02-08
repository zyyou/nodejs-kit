
/**
 * 消息代码
 */
export enum MessageCode {
    /**
     * 失败
     */
    fail = 'FAIL',
    /**
     * 成功
     */
    success = 'SUCCESS',
    /**
     * 处理中
     */
    process = 'PROCESS',
}

/**
 * 通用返回消息，可用于函数返回
 */
export interface IReturnValue {
    /**
     * 是否处理成功
     */
    success: boolean;
    /**
     * 返回消息
     */
    message?: string;
    /**
     * 返回数据
     */
    data?: any;
    /**
     * 返回代码
     */
    code?: string | number;
}

/**
 * API响应消息，对外接口消息协议
 */
export interface IApiMessage {
    /**
     * 接口交互状态码
     */
    return_code: MessageCode;
    /**
     * 接口交互消息
     */
    return_msg?: string;
    /**
     * 业务处理状态码
     */
    result_code?: string | number;
    /**
     * 业务处理消息
     */
    result_msg?: string;
}


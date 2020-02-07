
import * as nkit from '../dist';
import { IReturnMessage, IApiMessage, MessageCode } from '../dist';

const data: IReturnMessage = nkit.makeReturnMessage('akdjlaflsjflsakjfsajflsjf');

const resData: [string, string | number][] = [
    ['val1', '值'],
    ['val2', 123],
    ['val3', undefined]
]

const d2: IApiMessage = nkit.makeApiMessage('adfsdfs', MessageCode.success, 'a', 'b', resData);


console.log('ValueUtils.notNullStr null', nkit.Utils.ValueUtils.notNullStr(null));

console.log('interface', data, d2);


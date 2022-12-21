// export default 로 선언된 클래스는 import할 때 이름을 지정할 수 없다선
import MyLogger from './logger2.mjs';
const logger = new MyLogger('info');
logger.log('야옹');
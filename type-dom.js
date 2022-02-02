const a = document.getElementsByTagName('a');

const queryObj = {};
const search = window.location.search;
search.replace(/([^&=?]+)=([^&]+)/g,(m, $1, $2) => {
	queryObj[$1] = decodeURIComponent($2);
});

// 方式一：http://127.0.0.1:5500/xss/index.html?code=javascript:alert(%27%E5%93%88%E5%93%88%E5%93%88%20%E5%A4%A7%E7%AC%A8%E8%9B%8B%27);
a.href = queryObj.code;

// const script = document.createElement('script');
// script.async = true;
// script.type = 'text/javascript';
// script.src = 'remote.js';
// var s = document.getElementsByTagName('script')[0];
// s.parentNode.insertBefore(script, s);
/**
 * 方式二：直接通过 url 中的 script 加载恶意脚本
 * http://127.0.0.1:5500/xss/index.html?code=javascript:const%20script%20=%20document.createElement(%27script%27);%20script.async%20=%20true;%20script.type%20=%20%27text/javascript%27;%20script.src%20=%20%27remote.js%27;%20var%20s%20=%20document.getElementsByTagName(%27script%27)[0];%20s.parentNode.insertBefore(script,%20s);
 */




/**
 *  这种攻击方式，用户不需要使用任何的操作就能被攻击
 *  document.write(queryObj.name)
	http://127.0.0.1:5500/xss/index.html?code=%3Cscript%3Ewindow.alert(1)%3C/script%3E
 */

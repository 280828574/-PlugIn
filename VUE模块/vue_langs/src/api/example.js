import http from './http';

export default {
    // 登录
    login: opts => {
        const url = '/login.html';
        const data = {
            username: opts.username || ''
        };
        return http.post(url, data);
    },
    // 注销登录
    logout: opts => {
        const url = '/logout.html';
        const params = {
            username: opts.username || ''
        };
        return http.get(url, params);
    }
};

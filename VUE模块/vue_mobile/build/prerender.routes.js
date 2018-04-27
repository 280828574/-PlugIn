'use strict';

import apiSomeapi from '../src/api/someapi';

const urlTemplate = [
    {
        template: '/router/is/:me',
        generate: async () => {
            const res = await apiSomeapi.xxx({ arg1: 'xxx', arg1: 'xxx' });
            if (res.success) {
                return res.data.list.map(el => `/router/is/${el.id}`);
            }
        }
    }
];

const generateHandle = urlTemplate => {
    const generateList = urlTemplate.map(async item => {
        return await item.generate();
    });
    return Promise.all(generateList).then(list => {
        return [].concat(...list);
    });
};

module.exports = async () => {
    return await generateHandle(urlTemplate);
};

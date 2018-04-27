/**
 * 对象深拷贝
 * @param {*Object} obj 需要拷贝的对象
 * @return {*Object}
 */
const deepClone = obj => {
    let str = '';
    let newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
        return;
    } else if (window.JSON) {
        str = JSON.stringify(obj); // 系列化对象
        newobj = JSON.parse(str); // 还原
    } else {
        for (var i in obj) {
            newobj[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
        }
    }
    return newobj;
};

/**
 * 判断对象是否为空
 * @param {*Object} obj 需要判断的对象
 * @return {*Boolen} 为空返回true,不为空返回false
 */
const isEmpty = obj => {
    if (typeof obj !== 'object') {
        return;
    } else if (window.JSON) {
        if (JSON.stringify(obj) !== '{}' && JSON.stringify(obj) !== '[]') {
            return false;
        }
    } else if (Object.keys) {
        if (Object.keys(obj).length !== 0) {
            return false;
        }
    } else {
        for (let key in obj) {
            return false;
        }
    }
    return true;
};

/**
 * 生成父子树
 * @param {*Array} list 需要拷贝的对象
 * @param {*Number} pid 树根节点
 * @return {*Map}
 */
const arrToTree = (list, pid = 0) => {
    let tree = [];
    list.forEach(item => {
        let tmp = deepClone(item);
        if (Number(item.pid) === Number(pid)) {
            tmp['children'] = arrToTree(list, item.id);
            tree.push(tmp);
        }
    });
    return tree;
};

/**
 * 将数组转化为对象
 * @param {*Array} list 需要转化的数组
 * @param {*String} key 生成map的key
 * @return {*Map}
 */
const arrToMap = (list, key) => {
    let map = {};

    let listTemp = deepClone(list);

    listTemp.forEach(item => {
        map[item[key]] = item;
    });

    return map;
};

// 去除数组空字符
const arrNoEmpty = (arr) => {
    return arr.filter(t => t !== undefined && t !== null && t !== '');
};

export default {
    deepClone,
    isEmpty,
    arrToTree,
    arrToMap,
    arrNoEmpty
};

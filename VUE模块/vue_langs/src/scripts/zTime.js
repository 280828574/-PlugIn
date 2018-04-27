/**
 * 格式化时间
 */
const format = dateObj => {
    const format = num => {
        return num < 10 ? `0${num}` : num;
    };
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    let day = dateObj.getDate();
    let hour = dateObj.getHours();
    let minute = dateObj.getMinutes();
    let second = dateObj.getSeconds();
    return `${year}-${format(month)}-${format(day)} ${format(hour)}:${format(minute)}:${format(second)}`;
};

export default {
    format
};

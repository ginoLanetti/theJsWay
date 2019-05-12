const circumference = r => {
    const result = 2 * Math.PI * r;
    return result;
}
const area = r => {
   const result = Math.PI * (r * r);
   return result;
}

module.exports.circumference = circumference;
module.exports.area = area;
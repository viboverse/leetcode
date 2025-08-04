/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.replaceAll(".", "[.]");
};

console.log(defangIPaddr("1.1.1.1"));

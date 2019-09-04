/**
 * https://leetcode-cn.com/problems/defanging-an-ip-address/
 * 
 * 1108. IP 地址无效化
 * 
 * Easy
 * 
 * 72ms 81.93%
 * 33.7mb 100.00%
 */
const defangIPaddr = address => {
  return address.replace(/\./g, '[.]');
}
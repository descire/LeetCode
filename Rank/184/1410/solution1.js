/**
 *  https://leetcode-cn.com/problems/html-entity-parser/submissions/
 * 
 * HTML 实体解析器
 * 
 * Medium
 * 
 * 220ms 100.00%
 * 93.1mb 100.00%
 */
const entityParser = function(text) {
  let ans = '';
  let preIndex = 0;
  text.replace(/&quot;|&apos;|&amp;|&gt;|&lt;|&frasl;|/g, (match, startIndex) => {
    ans += text.slice(preIndex, startIndex);
    switch(match) {
      case '&quot;':
        ans += '"';
        break;
      case '&apos;':
        ans += "'";
        break;
      case '&amp;':
        ans += "&";
        break;
      case '&gt;':
        ans += '>';
        break;
      case '&lt;':
        ans += '<';
        break;
      case '&frasl;':
        ans += '/';
        break;
      default:
        ans += '';
    }
    preIndex = startIndex + match.length;
  })

  return ans;
};
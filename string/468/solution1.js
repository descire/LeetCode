/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const isDigit = (str) => !Number.isNaN(Number.parseInt(str, 10));

const validIPAddress = queryIP => {
    if (queryIP.indexOf('.') >= 0) {
        let last = -1;
        for (let i = 0; i < 4; i++) {
            const current = i === 3 ? queryIP.length : queryIP.indexOf('.', last + 1);

            if (current < 0 || current - last  - 1 < 1 || current - last - 1 > 3) {
                return 'Neither';
            }

            let address = 0;
            for (let j = last + 1; j < current; j++) {
                if (!isDigit(queryIP[j])) {
                    return 'Neither';
                }
                address = address * 10 + (queryIP[j].charCodeAt() - '0'.charCodeAt());
            }

            if (address > 255 || (address > 0 && queryIP[last + 1].charCodeAt() === '0'.charCodeAt()) || (address === 0 && current - last - 1 > 1)) {
                return 'Neither';
            }
            last = current;
        }
        return 'IPv4';
    }

    let last = -1;
    for (let i = 0; i < 8; i++) {
        const current = (i === 7 ? queryIP.length : queryIP.indexOf(':', last + 1));
        if (current < 0 || current - last - 1 < 1 || current - last - 1 > 4) {
            return "Neither";
        }
        for (let j = last + 1; j < current; ++j) {
            if (!isDigit(queryIP[j]) && !('a' <= queryIP[j].toLowerCase() && queryIP[j].toLowerCase() <= 'f')) {
                return "Neither";
            }
        }
        last = current;
    }

    return 'IPv6';
}
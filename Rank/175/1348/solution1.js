/**
 * https://leetcode-cn.com/problems/tweet-counts-per-frequency/
 * 
 * 1348. 推文计数
 * 
 * Medium
 * 
 * 592ms 54.17%
 * 53.9mb 100.00%
 */
const TweetCounts = function () {
  this.recordList = {};
  
}

TweetCounts.prototype.recordTweet = function(tweetName, time) {
  if (!this.recordList[tweetName]) {
    this.recordList[tweetName] = [time];
  } else {
    this.recordList[tweetName].push(time);
  }
}

TweetCounts.prototype.getTweetCountsPerFrequency = function(freq, tweetName, startTime, endTime) {
  const listForTweetName = this.recordList[tweetName] || [];
  let delta;
  switch(freq) {
    case 'minute':
      delta = 60;
      break;
    case 'hour':
      delta = 60 * 60;
      break;
    case 'day':
      delta = 60 * 60 * 24;
  }
  let ans = []

  for (let i = 0; startTime + i * delta < Math.min(startTime + (i + 1) * delta, endTime + 1); i++) {
    const minTime = startTime + i * delta;
    const maxTime = Math.min(startTime + (i + 1) * delta, endTime + 1);
    let count = 0;
    for (let j = 0, max = listForTweetName.length; j < max; j++) {
      if (listForTweetName[j] >= minTime && listForTweetName[j] < maxTime) {
        count++;
      }
    }
    ans.push(count);
  }
  return ans;
}
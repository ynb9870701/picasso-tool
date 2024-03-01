# 工具库介绍

这个工具库提供了一些常用的 JavaScript 函数，可用于开发中各种场景的实用工具。以下是包含在这个库中的工具函数：

## 工具函数列表

1. **随机数生成器**
   - 函数名：`getRandomNumber(min, max)`
   - 描述：生成指定范围内的随机整数。

2. **日期格式化函数**
   - 函数名：`formatDate(date)`
   - 描述：将日期对象格式化为长格式日期字符串。

3. **数组去重函数**
   - 函数名：`uniqueArray(arr)`
   - 描述：从数组中移除重复项。

4. **URL 参数解析函数**
   - 函数名：`parseURLParams(url)`
   - 描述：解析 URL 中的查询参数，并返回一个对象。

5. **字符串逆转函数**
   - 函数名：`reverseString(str)`
   - 描述：反转输入字符串。

## 如何使用

你可以将这些函数复制到你的项目中，然后根据需要调用它们。例如：

```javascript
const randomNumber = getRandomNumber(1, 100);
console.log("随机数:", randomNumber);

const formattedDate = formatDate(new Date());
console.log("格式化后的日期:", formattedDate);

const uniqueItems = uniqueArray([1, 2, 3, 3, 4, 5, 5]);
console.log("去重后的数组:", uniqueItems);

const urlParams = parseURLParams("http://example.com/?foo=bar&baz=qux");
console.log("解析后的URL参数:", urlParams);

const reversedString = reverseString("Hello, World!");
console.log("反转后的字符串:", reversedString);

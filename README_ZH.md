# eslint-plugin-call-func-with-return

调用指定的函数时，必须使用 `return` 语句。

## 安装

首先，需要安装 [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

接下来，安装 `eslint-plugin-call-func-with-return`:

```
$ npm install eslint-plugin-call-func-with-return --save-dev
```


## 使用

在 `.eslintrc` 或者 `.eslintrc.js` 文件的 `plugins` 对象中，添加 `call-func-with-return`（可以省略 `eslint-plugin-` 的前缀）：

```json
{
    "plugins": [
        "call-func-with-return"
    ]
}
```

然后，在 `.eslintrc` 或者 `.eslintrc.js` 文件的 `rules` 对象中，添加相应的规则：

```json
{
    "rules": {
        "call-func-with-return/call-func-with-return": ["error", ["jsonRet", "xmlRet"]]
    }
}
```






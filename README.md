# eslint-plugin-call-func-with-return

[中文文档](./README_ZH.md)

Call specified functions with return statement.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-call-func-with-return`:

```
$ npm install eslint-plugin-call-func-with-return --save-dev
```


## Usage

Add `call-func-with-return` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "call-func-with-return"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "call-func-with-return/call-func-with-return": [2, ["jsonRet", "xmlRet"]]
    }
}
```






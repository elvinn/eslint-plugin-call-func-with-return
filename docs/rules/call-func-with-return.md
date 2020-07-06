# call specified functions with return statement (call-func-with-return)

Call specified functions with return statement.


## Rule Details

Examples of **incorrect** code for this rule:

```js
function jsonRet(data = {}, retCode, retMessage) {
    return {
        data,
        retCode,
        retMessage,
    }
}

function main() {
    jsonRet({ author: 'elvinn' }); // error
}

```

Examples of **correct** code for this rule:

```js

function jsonRet(data = {}, retCode, retMessage) {
    return {
        data,
        retCode,
        retMessage,
    }
}

function main() {
    return jsonRet({ author: 'elvin' }); // ok
}

```

### Options

1. string[]: function name list, like: `['jsonRet', 'xmlRet']`

/**
 * @fileoverview call specified functions with return statement
 * @author elvinn
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/call-func-with-return'),

    RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('call-func-with-return', rule, {

    valid: [
        {
            code: 'function foo() { return jsonRet() }',
            options: [['jsonRet']]
        },
        {
            code: 'function foo() { xmlRet() }',
            options: [['jsonRet']]
        },
        {
            code: 'function foo() { return jsonRet() }',
            options: [['jsonRet', 'xmlRet']]
        },
        {
            code: 'function foo() { return xmlRet() }',
            options: [['jsonRet', 'xmlRet']]
        }
    ],

    invalid: [
        {
            code: 'function foo() { jsonRet() }',
            output: 'function foo() { return jsonRet() }',
            options: [['jsonRet']],
            errors: [{
                message: 'jsonRet should be called with return',
            }]
        },
        {
            code: 'function foo() { xmlRet() }',
            output: 'function foo() { return xmlRet() }',
            options: [['jsonRet', 'xmlRet']],
            errors: [{
                message: 'xmlRet should be called with return',
            }]
        }
    ]
});

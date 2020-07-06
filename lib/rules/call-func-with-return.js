/**
 * @fileoverview call specified functions with return statement
 * @author elvinn
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'call specified functions with return statement',
            category: 'Possible Errors',
            recommended: true
        },
        fixable: 'code',
        // the rule options schema
        schema: [
            {
                type: 'array',
                items: {
                    'type': 'string'
                },
                description: 'function name list'
            }
        ]
    },

    create: function(context) {
        var functionNameList = context.options[0];
        if (!functionNameList || !functionNameList.length) {
            return
        }

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            'CallExpression:exit': (node) => {
                if (functionNameList.indexOf(node.callee.name) === -1) {
                    return;
                }

                if (node.parent.type === 'ReturnStatement') {
                    return;
                }

                return context.report({
                    node,
                    message: node.callee.name + ' should be called with return',
                    fix: function(fixer) {
                        return fixer.insertTextBefore(node, "return ");
                    }
                })
            },
        };
    }
};

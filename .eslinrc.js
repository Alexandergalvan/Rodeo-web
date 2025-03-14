module.exports = {
  rules: {
    "custom/use-client-directive": {
      create(context) {
        return {
          Program(node) {
            const sourceCode = context.getSourceCode();
            const firstToken = sourceCode.getFirstToken(node);
            if (firstToken.value !== '"use client"') {
              context.report({
                node,
                message: 'Este archivo debe comenzar con `"use client";`',
              });
            }
          },
        };
      },
    },
  },
};

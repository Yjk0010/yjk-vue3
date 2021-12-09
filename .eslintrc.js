module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
    indent: [2, 2], //强制缩进
    'no-var': 1,
    camelcase: 2, //驼峰命名
    eqeqeq: 2, //必须使用全等
    // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': [2, 'never'],
    // if while function 后面的{必须与if在同一行。
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    'comma-dangle': [2, 'always-multiline'],
    // 控制逗号在行尾出现还是在行首出现 last行尾 first行首
    'comma-style': [2, 'last'],
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    'computed-property-spacing': [2, 'never'],
    // if else while for do后面的代码块是否需要{ }包围，参数：
    curly: [2, 'all'],
    // switch语句强制default分支，也可添加 // no default 注释取消此次警告
    'default-case': 2,
    // 强制object.key 中 . 的位置
    'dot-location': [2, 'property'],
    // 文件末尾强制换行
    'eol-last': 2,
    // 使用 === 替代 ==
    eqeqeq: [2, 'smart'],
    'no-alert': 1, //禁止使用alert confirm prompt
    'no-class-assign': 2, //禁止给类赋值
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-continue': 0, //禁止使用continue
    'no-delete-var': 2, //不能对var声明的变量使用delete操作符
    'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2, //函数参数不能重复
    'no-duplicate-case': 2, //switch中的case标签不能重复
    'no-empty': 2, //块语句中的内容不能为空
    'no-eval': 1, //禁止使用eval
    'no-ex-assign': 2, //禁止给catch语句中的异常参数赋值
    'no-func-assign': 2, //禁止重复的函数声明
    'no-implicit-coercion': 1, //禁止隐式转换
    'no-implied-eval': 2, //禁止使用隐式eval
    'no-invalid-regexp': 2, //禁止无效的正则表达式
    'no-irregular-whitespace': 2, //不能有不规则的空格
    'no-iterator': 2, //禁止使用__iterator__ 属性
    'no-label-var': 2, //label名不能与var声明的变量名相同
    'no-labels': 2, //禁止标签声明
    'no-lone-blocks': 2, //禁止不必要的嵌套块
    'no-loop-func': 1, //禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
    'no-mixed-requires': [0, false], //声明时不能混用声明类型
    'no-mixed-spaces-and-tabs': [2, false], //禁止混用tab和空格
    'linebreak-style': [0, 'windows'], //换行风格
    'no-multi-spaces': 1, //不能用多余的空格
    'no-multi-str': 2, //字符串不能用\换行
    'no-multiple-empty-lines': [1, { max: 2 }], //空行最多不能超过2行
    'no-native-reassign': 2, //不能重写native对象
    'no-negated-in-lhs': 2, //in 操作符的左边不能有!
    'no-nested-ternary': 0, //禁止使用嵌套的三目运算
    'no-new': 1, //禁止在使用new构造一个实例后不赋值
    'no-new-func': 1, //禁止使用new Function
    'no-new-wrappers': 2, //禁止使用new创建包装实例，new String new Boolean new Number
  },
  globals: {
    defineProps: 'readonly',
  },
};

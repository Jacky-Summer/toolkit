/**
 * Prettier 配置
 * refer: https://prettier.io/docs/en/options.html
 */

export const prettierConfig = (extendConfig?: {
  [option in string]: unknown;
}) => {
  return {
    /** 单行最大字符数 */
    printWidth: 120,
    /** tab缩进空格为2  */
    tabWidth: 2,
    /** 使用空格代替tab缩进 */
    useTabs: false,
    /** 使用单引号 */
    singleQuote: true,
    /** jsx标签多行属性写法时，反尖括号换行放置 */
    jsxBracketSameLine: false,
    /** 箭头函数单个参数的情况是否省略括号 */
    arrowParens: "always",
    /** 行尾换行符 <lf|crlf|cr|auto> */
    endOfLine: "lf",
    /** 行末尾逗号 <es5|none|all> */
    trailingComma: "es5",
    /** 每行末尾自动添加分号 */
    semi: false,
    /** 在对象前后添加空格 */
    bracketSpacing: true,
    /** 注释格式化 */
    commentFormat: true,
    /** 自定义配置 */
    ...extendConfig,
  };
};

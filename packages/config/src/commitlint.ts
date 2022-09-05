/**
 * @格式 type(scope?): subject
 * @build 修改项目构建配置相关
 * @ci 修改项目持续集成流程
 * @docs 文档更新
 * @feat 新增功能
 * @fix bug修复
 * @perf 性能优化
 * @refactor 重构
 * @style 不影响程序逻辑的代码修改(去掉空格、改变缩进、增删分号等)
 * @test 测试
 * @revert 回滚某个更早之前的提交
 * @chore 不属于以上类型的其他类型(日常事务)
 * @前缀 'type-enum': [2, 'always',  ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']]
 * @scope必须小写 [2, 'always', 'lower-case']
 */
export const commitlintConfig = () => {
  return {
    extends: ['@commitlint/config-conventional'],
    rules: {
      /** @前缀 */
      'type-enum': [
        2,
        'always',
        ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
      ],
      /** @scope必须小写 */
      'scope-case': [2, 'always', 'lower-case'],
    },
  }
}

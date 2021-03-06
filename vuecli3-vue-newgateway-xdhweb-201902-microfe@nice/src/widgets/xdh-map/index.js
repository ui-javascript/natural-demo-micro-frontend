export default () => ({
  // 需要加载的组件. 应当是一个 Promise
  component: import('./xdh-map.vue'),
  // loading 时应当渲染的组件
  loading: {
    template: '<div class="xdh-async-component xdh-map__loading">正在努力加载中...</div>'
  },
  // 出错时渲染的组件
  error: {
    template: '<div class="xdh-async-component xdh-map__error">地图加载发生错误！请尝试刷新页面。</div>'
  },
  // 渲染 loading 组件前的等待时间。默认：100ms.
  delay: 100,
  // 最长等待时间。超出此时间则渲染 error 组件。默认：Infinity
  timeout: 10 * 1000
});

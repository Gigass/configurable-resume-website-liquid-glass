# DR-001: 如何正确使用“液态玻璃”组件

- **Created:** 2025-07-18T03:02:37.6NZ
- **When:** 当需要创建一个具有“液态玻璃”视觉效果的容器时。
- **Bad:**
  ```vue
  <!-- 错误示范：仅使用基础的 backdrop-filter -->
  <template>
    <div class="simple-blur-card">...</div>
  </template>
  <style>
  .simple-blur-card {
    backdrop-filter: blur(10px);
    background: rgba(36,36,36,0.6);
  }
  </style>
  ```
- **Good:**
  ```vue
  <!-- 正确示范：使用标准的多层结构和SVG滤镜 -->
  <template>
    <!-- 1. 必须定义SVG滤镜 (ID需唯一) -->
    <svg width="0" height="0">
      <filter id="glass-distortion-unique-id">
        <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" ... />
        <feDisplacementMap in="SourceGraphic" ... />
      </filter>
    </svg>

    <!-- 2. 必须使用四层结构 -->
    <div class="liquidGlass-wrapper">
      <div class="liquidGlass-effect" style="filter: url(#glass-distortion-unique-id)"></div>
      <div class="liquidGlass-tint"></div>
      <div class="liquidGlass-shine"></div>
      <div class="liquidGlass-text">
        <!-- 你的内容放在这里 -->
      </div>
    </div>
  </template>
  ```
- **Why:** 简单的`backdrop-filter`只能实现静态的“毛玻璃”效果。本项目追求的是带有动态扭曲感的“液态玻璃”，这必须通过SVG滤镜和多层叠加来实现。遵循此规则可以确保全站视觉风格的高度统一和高级质感。
- **Source:** [`P-001_Liquid_Glass_UI.md`](./../PROCESS/P-001_Liquid_Glass_UI.md) 
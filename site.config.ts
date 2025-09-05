import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'blueflameli.github.io',
  lang: 'zh-CN',
  title: 'Blueflame的小站',
  subtitle: '又一个划水的站点',
  author: {
    avatar: 'https://img.blueflame.org.cn/images/2025/09/05/68badbf0f008e.jpg',
    name: 'Blueflame',
  },
  description: '一个二次元技术宅',
  favicon: '/favicon.ico',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/BlueflameLi',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/BlueflameLi',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/12570204',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
  ],

  comment: {
    enable: true,
  },

  encrypt: {
    enable: true,
  },

  vanillaLazyload: {
    enable: true,
  },

  mediumZoom: { enable: true },

  search: {
    enable: false,
  },

  statistics: {
    enable: true,
    readTime: {
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },
})

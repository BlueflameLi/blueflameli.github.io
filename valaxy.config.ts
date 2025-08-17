import type { ThemeUserConfig } from 'valaxy-theme-sakura'
import { defineValaxyConfig } from 'valaxy'
import { addonMeting } from 'valaxy-addon-meting'
import { addonBangumi } from 'valaxy-addon-bangumi'
import { addonVercount } from 'valaxy-addon-vercount'
import pkg from './package.json'
// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<ThemeUserConfig>({
  // site config see site.config.ts

  theme: 'sakura',

  themeConfig: {
    ui: {
      primary: '#fe9500',

      toggleDarkButton: {
        lightIcon: 'i-line-md-moon-alt-to-sunny-outline-loop-transition',
        darkIcon: 'i-line-md-sunny-outline-to-moon-loop-transition',
      },
      pinnedPost: {
        icon: 'i-fa-anchor',
      },
      postList: {
        icon: 'i-fa-envira',
      },
      scrollDown: {
        icon: 'i-fa-chevron-down',
      },
    },
    hero: {
      title: 'Blueflame的小站',
      motto: '又一个划水的站点',
      urls: [
        'https://img.blueflame.org.cn/images/2022/08/01/62e7ad8f22620.jpg',
      ],
      // playerUrl: 'https://valaxy-theme-sakura.s3.bitiful.net/PV/Original PV Little love song MONGOL 800 cover by Amatsuki.mp4',
      style: 'filter-dim',
      // fixedImg: true,
      typewriter: true,
      // enableHitokoto: true,

    },
    pagination: {
      animation: true,
      infiniteScrollOptions: {
        preload: true,
      },
    },
    postList: {
      text: 'Discovery',

      isImageReversed: true,
      // defaultImage: ['https://www.dmoe.cc/random.php?random', 'https://www.loliapi.com/acg/pc/?random'],
      defaultImage: ['https://www.dmoe.cc/random.php?random', 'https://img.xjh.me/random_img.php?random?type=bg&return=302'],
    },
    postFooter: {
      navigationMerge: true,
    },
    // pages: [
    //   {
    //     name: '我的小伙伴们',
    //     url: '/links/',
    //     icon: 'i-ri-genderless-line',
    //     color: 'dodgerblue',
    //   },
    //   {
    //     name: '喜欢的女孩子',
    //     url: '/girls/',
    //     icon: 'i-ri-women-line',
    //     color: 'hotpink',
    //   },
    // ],

    navbar: [
      {
        icon: 'i-fa-fort-awesome',
        locale: 'menu.home',
        link: '/',
        animated: 'animation-hvr-grow',
      },
      {
        icon: 'i-line-md-folder-twotone',
        locale: 'menu.categories',
        link: '/categories',
        animated: 'animation-hvr-grow',
      },
      {
        icon: 'i-fa-archive',
        locale: 'menu.archives',
        link: '/archives',
        animated: 'animation-hvr-grow',
      },
      {
        icon: 'i-fa-film',
        text: '番剧',
        // locale: 'menu.anime',
        link: '/anime',
        animated: 'animation-hvr-grow',
      },
      {
        icon: 'i-fa-edit',
        text: '留言板',
        link: '/comment',
        animated: 'animation-hvr-grow',
      },
      {
        text: '友情链接',
        icon: 'i-fa-chain',
        link: '/links',
        animated: 'animation-hvr-icon-buzz-out',
        // items: [
        //   {
        //     text: 'GitHub',
        //     icon: 'i-line-md-github-twotone',
        //     link: 'https://github.com/WRXinYue/valaxy-theme-sakura',
        //   },
        //   {
        //     text: 'Discord',
        //     icon: 'i-line-md-discord-twotone',
        //     link: 'https://discord.gg/sGe4U4p4CK',
        //   },
        //   {
        //     text: 'Valaxy →',
        //     icon: 'i-ri-cloud-fill',
        //     link: 'https://github.com/YunYouJun/valaxy',
        //   },
        // ],
      },
      {
        text: pkg.author.name,
        icon: 'i-line-md-hazard-lights-filled',
        link: pkg.author.url,
        target: '_blank',
        animated: 'animation-hvr-icon-bounce',
      },
      {
        text: '关于',
        icon: 'i-fa-leaf',
        link: pkg.author.url,
        target: '_blank',
        animated: 'animation-hvr-icon-bounce',
      },
      {
        text: 'RSS',
        icon: 'i-fa-feed',
        link: '/atom.xml',
        target: '_blank',
        animated: 'animation-hvr-icon-up',
      },
    ],

    navbarOptions: {
      title: ['Blueflame', 'の', '小站'],
      subTitle: '又一个划水的站点',
      offset: 0,
      invert: ['home'],
      showMarker: false,
      autoHide: ['home'],
    },
    sidebar: [
      {
        text: '🌈',
        locale: 'menu.home',
        link: '/',
      },
      {
        text: '🗂️',
        locale: 'menu.archives',
        link: '/archives/',
      },
      {
        text: '📂',
        locale: 'menu.categories',
        link: '/categories/',
      },
      {
        text: '🏷️',
        locale: 'menu.tags',
        link: '/tags/',
      },
      {
        text: '🎯 清单',

        items: [
          {
            text: '电影 🎞️',
            link: '/movie',
          },
          {
            text: '番剧 🍨',
            link: '/anime',
          },
          {
            text: '游戏 🎮',
            link: '/game',
          },
          {
            text: '歌单 🎵',
            link: '/music',
          },
        ],
      },
      {
        text: '📝 留言板',
      },
      {
        text: '🍻 朋友圈',
      },
      {
        text: '❤️ 打赏',
      },
      {
        text: '📌',
        locale: 'menu.about',
      },
    ],
    sidebarOptions: {
      position: 'left',
    },
    footer: {
      since: 2019,
      icp: '先空着',
      icon: {
        img: '/favicon.ico',
        animated: true,
        url: 'blueflameli.github.io',
        title: 'Blueflame',
      },
    },
    tags: {
      rainbow: true,
    },
    scrollToTop: true,
    scrollIndicator: true,
    scrollLock: false,
  },

  unocss: { safelist },
  addons: [
    addonMeting({
      global: true,
      props: {
        id: '872489358',
        server: 'netease',
        type: 'playlist',
      },
      options: {
        autoHidden: true,
        animationIn: true,
        lyricHidden: true,
      },
    }),
    addonBangumi({
      api: 'https://yi_xiao_jiu-bangumi.web.val.run',
      bilibiliUid: '12570204',
      bgmUid: '859746',
    }),
    addonVercount({
      api: 'cn'
    }),
  ]
})

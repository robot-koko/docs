import { defineConfig } from 'vitepress';
import { Icon } from "@iconify/vue";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  title: "ROBOTKOKO博客",
  description: "机械与电子的完美结合，专注于雕刻机和3D打印，载算法如溪，物生机似链",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '机械', link:'/mechanical/index'},
      { text: '电子', link: '/electronical/index' },
      { text: "控制", link:'/autocontrol/index'},
      { text: "工具", link:'/tools/index'}
    ],

    sidebar: {
      '/mechanical/':[
      {
        text: 'm Examples',
        items: [
          
          { text: 'Markdown Examples', link: '/mechanical/index' }
        ]
      }],
      '/electronical/':[
      {
        text: 'E Examples',
        items: [
          
          { text: 'Electronical Examples', link: '/electronical/index' }
        ]
      }],
      '/autocontrol/':[
      {
        text: 'A Examples',
        items: [

          { text: 'Autocontrol Examples', link: '/autocontrol/index' }
        ]
      }],
        '/tools/':[
      {
        text: 'Tool Examples',
        items: [

          { text: 'Tools for Examples', link: '/tools/index' }
        ]
      }],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

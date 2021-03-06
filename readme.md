
 ## 极客学院第十一周作业说明
### buju目录 
- #### 一个用来测试html布局的测试文件
   - ##### [index演示屏幕大小不同，演示不同](https://github.com/gwolf999/job11/blob/master/buju/index.html)
   - ##### [index01演示三列布局并在中间模块中测试绝对定位、相对定位、浮动的区别](https://github.com/gwolf999/job11/blob/master/buju/index01.html)
- #### 参考资料
  - ##### [30个你必须熟记的CSS选择器](http://colobu.com/2015/03/10/the-30-css-selectors-you-must-memorize/) 
### jkxy_less目录
- #### 题目：利用less或者sass改善极客学院首页CSS
  - ##### 编写Gulp或FIS脚本对Sass或者Less进行编译
  - ##### 符合性能优化标准进行压缩合并以及充分利用Less或Sass优势少写代码
- #### 重点步骤
  - ##### cmd 环境下服务器端安装，c:\Program Files\nodejs>npm install -g less// *npm install less安装失败,一定要在nodejs下的npm目录中进行全局安装*

  - ##### 在CMD环境下进入文件工作目录：cd C:\phpStudy\htdoc\jk_web\job11\jkxy_less
  - ##### 在CMD环境下执行lessc jkxy_header.less>jkxy_header.css
  - ##### 全局安装Gulp包： npm install -g gulp  然后，在项目里面安装Gulp： npm install --save-dev gulp 
- #### 参考资料
  - ##### [Gulp：任务自动管理工具:阮一峰](http://javascript.ruanyifeng.com/tool/gulp.html)--有语法简单介绍，易懂！多任务执行语句可行
  - ##### [gulp详细入门教程](http://www.ydcss.com/archives/18) --很全并且目录内其他文章可参考;内有详细的安装及各种原理解释；
  - ##### [Gulp入门教程](http://markpop.github.io/2014/09/17/Gulp%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B/) --有多任务执行案例！*多任务执行语句有误*
  - ##### [前端构建工具gulpjs的使用介绍及技巧](http://www.cnblogs.com/2050/p/4198792.html) --内有各种正则使用及插件用法
  - ##### [**我又重新认识了Gulp--原理讲解**](http://trickyedecay.me/archives/17/)--  **从原理上讲解了gulp执行过程**
  - ##### [**Gulp的执行顺序原理讲解**](http://trickyedecay.me/archives/9/)--   **本作业的执行顺序就是参考此，并成功。前面的教材有误！**
  - ##### [九个Console命令，让js调试更简单](https://github.com/dwqs/blog/issues/32)
- #### 备注
**收获：用less编写各种页面通用组件（含各种状态），在html页面上用组合方式追加！
通用的显块的字体颜色及背景阴影变化不错(如下：)！要搭建自己的库！**

``` less
&:hover {
            color: #35b558;
            box-shadow: 0 2px 6px #ccc; //添加阴影
        }
```


要重新复习：[一小时可以学会网页布局的专题讲座](http://zhibo.jikexueyuan.com/jiuye?p=6267fc99caa3953b772b4f844859ae8d&r=0fad34143f34c0ed40c0929c8dbd4c01&u=65906VlYtW8w5fa3r4cpo0VkZfAINpvkBGMnvMN1CeJn6BZoiFjfsJsHUiRP4ezpuULOu8w43zHw0YG0u*2*FQATsV1Q1hITE4NJxSM4D6tyFynmlrsmrgZu21qHTDk5AeuSRJtJuZqA)

### BusStopSign目录
- #### 题目：利用less或sass编写公交站牌
![enter description here][1]
- #### 重点步骤
  - ##### 用马克鳗做好颜色标记
- #### 参考资料
  - ##### [Flex 布局教程：语法篇:阮一峰](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)--有语法简单介绍，易懂！
  - ##### [Flex 布局教程：实例篇:阮一峰](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html) 


----------
2017年05月07日 14时16分42秒
git@github.com:gwolf999/job11.git


 


  [1]: ./images/%E5%85%AC%E4%BA%A4%E8%BD%A6%E7%AB%99%E7%89%8C2.jpg "公交车站牌2.jpg"

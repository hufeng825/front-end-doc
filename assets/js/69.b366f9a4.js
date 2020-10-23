(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{507:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#css规范中对-bfc-的描述"}},[t._v("CSS规范中对 BFC 的描述")])]),s("li",[s("a",{attrs:{href:"#mdn-对-bfc-的描述"}},[t._v("MDN 对 BFC 的描述")]),s("ul",[s("li",[s("a",{attrs:{href:"#特别说明：-display-flow-root"}},[t._v("特别说明：display: flow-root")])])])]),s("li",[s("a",{attrs:{href:"#张鑫旭对-bfc-的描述"}},[t._v("张鑫旭对 BFC 的描述")])]),s("li",[s("a",{attrs:{href:"#bfc到底是什么？"}},[t._v("BFC到底是什么？")]),s("ul",[s("li",[s("a",{attrs:{href:"#功能1：-爸爸管儿子：父元素包住所有子元素"}},[t._v("功能1： 爸爸管儿子：父元素包住所有子元素")])]),s("li",[s("a",{attrs:{href:"#功能2：-兄弟之间划清界限：两个bfc之间划清界限"}},[t._v("功能2： 兄弟之间划清界限：两个BFC之间划清界限")])])])]),s("li",[s("a",{attrs:{href:"#功能三：-阻止margin合并"}},[t._v("功能三： 阻止margin合并")]),s("ul",[s("li",[s("a",{attrs:{href:"#如何回答面试官"}},[t._v("如何回答面试官")])])])])])]),s("p"),t._v(" "),s("p",[t._v("[TOC]")]),t._v(" "),s("h1",{attrs:{id:"七、bfc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、bfc","aria-hidden":"true"}},[t._v("#")]),t._v(" 七、BFC")]),t._v(" "),s("h2",{attrs:{id:"css规范中对-bfc-的描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css规范中对-bfc-的描述","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS规范中对 BFC 的描述")]),t._v(" "),s("p",[t._v("http://www.ayqy.net/doc/css2-1/visuren.html#block-formatting")]),t._v(" "),s("p",[t._v("9.4.1 块格式化上下文")]),t._v(" "),s("p",[t._v("浮动，绝对定位元素，非块盒的块容器（例如，inline-blocks，table-cells和table-captions）和'overflow'不为'visible'的块盒会为它们的内容建立一个新的块格式化上下文")]),t._v(" "),s("p",[t._v("在一个块格式化上下文中，盒在竖直方向一个接一个地放置，从包含块的顶部开始。两个兄弟盒之间的竖直距离由'margin'属性决定。同一个块格式化上下文中的相邻块级盒之间的竖直margin会合并")]),t._v(" "),s("p",[t._v("在一个块格式化上下文中，每个盒的left外边（left outer edge）挨着包含块的left边（对于从右向左的格式化，right边挨着）。即使存在浮动（尽管一个盒的行盒可能会因为浮动收缩），这也成立。除非该盒建立了一个新的块格式化上下文（这种情况下，该盒自身可能会因为浮动变窄）")]),t._v(" "),s("h2",{attrs:{id:"mdn-对-bfc-的描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mdn-对-bfc-的描述","aria-hidden":"true"}},[t._v("#")]),t._v(" MDN 对 BFC 的描述")]),t._v(" "),s("p",[s("strong",[t._v("块格式化上下文（Block Formatting Context，BFC）")]),t._v(" 是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。")]),t._v(" "),s("p",[t._v("下列方式会创建"),s("strong",[t._v("块格式化上下文")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("根元素或包含根元素的元素")]),t._v(" "),s("li",[t._v("浮动元素（元素的 float 不是 none）")]),t._v(" "),s("li",[t._v("绝对定位元素（元素的 position 为 absolute 或 fixed）")]),t._v(" "),s("li",[t._v("行内块元素（元素的 display 为 inline-block）")]),t._v(" "),s("li",[t._v("表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）")]),t._v(" "),s("li",[t._v("表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）")]),t._v(" "),s("li",[t._v("匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）")]),t._v(" "),s("li",[t._v("overflow 值不为 visible 的块元素")]),t._v(" "),s("li",[t._v("display 值为 flow-root 的元素")]),t._v(" "),s("li",[t._v("contain 值为 layout、content或 strict 的元素")]),t._v(" "),s("li",[t._v("弹性元素（display为 flex 或 inline-flex元素的直接子元素）")]),t._v(" "),s("li",[t._v("网格元素（display为 grid 或 inline-grid 元素的直接子元素）")]),t._v(" "),s("li",[t._v("多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）")]),t._v(" "),s("li",[t._v("column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中")])]),t._v(" "),s("p",[t._v("创建了块格式化上下文的元素中的所有内容都会被包含到该BFC中。"),s("strong",[t._v("除了被包含于创建新的块级格式化上下文的后代元素内的元素。")])]),t._v(" "),s("p",[t._v("块格式化上下文对浮动定位（参见 float）与清除浮动（参见 clear）都很重要。浮动定位和清除浮动时只会应用于同一个BFC内的元素。浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动。外边距折叠（Margin collapsing）也只会发生在属于同一BFC的块级元素之间。")]),t._v(" "),s("p",[t._v("https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context")]),t._v(" "),s("h3",{attrs:{id:"特别说明：display-flow-root"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特别说明：display-flow-root","aria-hidden":"true"}},[t._v("#")]),t._v(" 特别说明："),s("code",[t._v("display: flow-root")])]),t._v(" "),s("p",[t._v("CSS最新属性， 可是使DIV标签触发BFC，而没有其他任何副作用。")]),t._v(" "),s("h2",{attrs:{id:"张鑫旭对-bfc-的描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#张鑫旭对-bfc-的描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 张鑫旭对 BFC 的描述")]),t._v(" "),s("p",[t._v("http://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/")]),t._v(" "),s("p",[t._v("BFC全称”Block Formatting Context”, 中文为“块级格式化上下文”。啪啦啪啦特性什么的，一言难尽，大家可以自行去查找，我这里不详述，免得乱了主次，总之，记住这么一句话：BFC元素特性表现原则就是，内部子元素再怎么翻江倒海，翻云覆雨都不会影响外部的元素。所以，避免margin穿透啊，清除浮动什么的也好理解了。")]),t._v(" "),s("h2",{attrs:{id:"bfc到底是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc到底是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" BFC到底是什么？")]),t._v(" "),s("ol",[s("li",[t._v("我不知道什么是 BFC")]),t._v(" "),s("li",[t._v("但是你写出样式，我就知道这是不是 BFC")])]),t._v(" "),s("p",[t._v("BFC 就是这样的东西（堆叠上下文也是）")]),t._v(" "),s("ol",[s("li",[t._v("它没有定义")]),t._v(" "),s("li",[t._v("它只有特性/功能")])]),t._v(" "),s("h3",{attrs:{id:"功能1：-爸爸管儿子：父元素包住所有子元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能1：-爸爸管儿子：父元素包住所有子元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能1： 爸爸管儿子：父元素包住所有子元素")]),t._v(" "),s("p",[t._v("用 BFC 包住浮动元素。(可以达到清除浮动的效果，但是不是清除浮动，.clearfix 才是清除浮动）")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token style language-css"}},[t._v("\n    "),s("span",{attrs:{class:"token selector"}},[t._v(".dad")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("border")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("overflow")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token selector"}},[t._v(".son")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v("height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("width")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("background")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v("float")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dad"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("son"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- http://js.jirengu.com/xumij/1/edit --\x3e")]),t._v("\n")])])]),s("p",[t._v("还有：")]),t._v(" "),s("p",[t._v("BFC会包含所有的子元素， 如果子元素中有BFC，那么久只包含到这个子元素， 子元素BFC里面有子元素自己去管。（MDN）")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token style language-css"}},[t._v("\n    "),s("span",{attrs:{class:"token selector"}},[t._v(".dad")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("border")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("position")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token selector"}},[t._v(".son")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v("height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 250px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("width")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("background")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v("float")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("margin-top")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token selector"}},[t._v(".grandson")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v("height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("width")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("margin-top")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("background")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dad"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("son"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("grandson"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("11"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- http://js.jirengu.com/xumij/3/edit --\x3e")]),t._v("\n")])])]),s("p",[t._v("效果：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------------+\n|                              dad  |\n+---------------------------+       |\n||  son                     |       |\n|---------------------------+       |\n|-----------------------------------+\n+----------------------+\n|     grandson         |\n+----------------------+\n\n")])])]),s("h3",{attrs:{id:"功能2：-兄弟之间划清界限：两个bfc之间划清界限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能2：-兄弟之间划清界限：两个bfc之间划清界限","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能2： 兄弟之间划清界限：两个BFC之间划清界限")]),t._v(" "),s("p",[t._v("BFC会和浮动元素不产生任何交集，顺着浮动边缘形成自己的封闭上下文。BFC会自动填满除去浮动内容以外的剩余空间，这就是自适应布局。")]),t._v(" "),s("p",[t._v("用 float + div 做左右自适应布局")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token style language-css"}},[t._v("\n    "),s("span",{attrs:{class:"token selector"}},[t._v(".one")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v("border")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid red"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v("margin-right")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v("width")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v("height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v("float")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token selector"}},[t._v(".two")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v("border")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v("height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token property"}},[t._v("overflow")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("one"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("two"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- http://js.jirengu.com/zenem/1/edit --\x3e")]),t._v("\n")])])]),s("p",[t._v("这里想要在两个元素有间距，在BFC中加"),s("code",[t._v("margin-left")]),t._v("需要大于100px才会生效，要么在float元素中加"),s("code",[t._v("margin-right")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"功能三：-阻止margin合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能三：-阻止margin合并","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能三： 阻止margin合并")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token style language-css"}},[t._v("\n    "),s("span",{attrs:{class:"token selector"}},[t._v(".dad")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("outline")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("overflow")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token selector"}},[t._v(".son")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("border")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid red"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("margin-top")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dad"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("son"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- http://js.jirengu.com/podub/1/edit --\x3e")]),t._v("\n")])])]),s("h3",{attrs:{id:"如何回答面试官"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何回答面试官","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何回答面试官")]),t._v(" "),s("ol",[s("li",[t._v("千万别解释什么是 BFC，一解释就错")]),t._v(" "),s("li",[t._v("用上面的例子回答什么是 BFC")])])])}],!1,null,null,null);o.options.__file="007-BFC.md";a.default=o.exports}}]);
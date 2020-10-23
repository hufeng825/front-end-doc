(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{385:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p"),t._m(0),a("p"),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("整理自：https://zh-hans.reactjs.org/docs/render-props.html")]),t._v(" "),a("p",[t._v("术语 "),a("a",{attrs:{href:"https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce",target:"_blank",rel:"noopener noreferrer"}},[t._v("“render prop”"),a("OutboundLink")],1),t._v(" 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术。")]),t._v(" "),a("p",[t._v("具有 render prop 的组件接受一个返回 React 元素的函数，并在组件内部通过调用此函数来实现自己的渲染逻辑。")]),t._v(" "),t._m(2),a("p",[t._v("使用 render prop 的库有 "),a("a",{attrs:{href:"https://reacttraining.com/react-router/web/api/Route/render-func",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Router"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://github.com/paypal/downshift",target:"_blank",rel:"noopener noreferrer"}},[t._v("Downshift"),a("OutboundLink")],1),t._v(" 以及 "),a("a",{attrs:{href:"https://github.com/jaredpalmer/formik",target:"_blank",rel:"noopener noreferrer"}},[t._v("Formik"),a("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("举个例子，假设我们有一个 "),a("code",[t._v("<Cat>")]),t._v(" 组件，它可以呈现一张在屏幕上追逐鼠标的猫的图片。我们或许会使用 "),a("code",[t._v("<Cat mouse="+t._s(t.x,t.y))]),t._v(" prop 来告诉组件鼠标的坐标以让它知道图片应该在屏幕哪个位置。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("关于 render prop 一个有趣的事情是你可以使用带有 render prop 的常规组件来实现大多数"),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/higher-order-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("高阶组件"),a("OutboundLink")],1),t._v(" (HOC)。 例如，如果你更喜欢使用 "),a("code",[t._v("withMouse")]),t._v(" HOC而不是 "),a("code",[t._v("<Mouse>")]),t._v(" 组件，你可以使用带有 render prop 的常规 "),a("code",[t._v("<Mouse>")]),t._v(" 轻松创建一个：")]),t._v(" "),t._m(11),a("p",[t._v("因此，你可以将任一模式与 render prop 一起使用。")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("重要的是要记住，render prop 是因为模式才被称为 "),a("em",[t._v("render")]),t._v(" prop ，你不一定要用名为 "),a("code",[t._v("render")]),t._v(" 的 prop 来使用这种模式。事实上， "),a("a",{attrs:{href:"https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce",target:"_blank",rel:"noopener noreferrer"}},[a("em",[t._v("任何")]),t._v("被用于告知组件需要渲染什么内容的函数 prop 在技术上都可以被称为 “render prop”"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),a("p",[t._v("你将在 "),a("a",{attrs:{href:"https://github.com/chenglou/react-motion",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-motion"),a("OutboundLink")],1),t._v(" 的 API 中看到此技术。")]),t._v(" "),a("p",[t._v("由于这一技术的特殊性，当你在设计一个类似的 API 时，你或许会要直接地在你的 propTypes 里声明 children 的类型应为一个函数。")]),t._v(" "),t._m(17),t._m(18),t._v(" "),a("p",[t._v("如果你在 render 方法里创建函数，那么使用 render prop 会抵消使用 "),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/react-api.html#reactpurecomponent",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("React.PureComponent")]),a("OutboundLink")],1),t._v(" 带来的优势。因为浅比较 props 的时候总会得到 false，并且在这种情况下每一个 "),a("code",[t._v("render")]),t._v(" 对于 render prop 将会生成一个新的值。")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),a("p",[t._v("为了绕过这一问题，有时你可以定义一个 prop 作为实例方法，类似这样：")]),t._v(" "),t._m(22),t._m(23)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-一个例子"}},[this._v("1. 一个例子")])]),s("li",[s("a",{attrs:{href:"#_2-使用-props-而非-render"}},[this._v("2. 使用 Props 而非 render")])]),s("li",[s("a",{attrs:{href:"#_3-render-props-会破坏react-purecomponent"}},[this._v("3. Render Props 会破坏React.PureComponent")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"render-props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#render-props","aria-hidden":"true"}},[this._v("#")]),this._v(" Render Props")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DataProvider")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("render")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("Hello ")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-一个例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-一个例子","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 一个例子")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("一个组件"),s("code",[this._v("<Mouse>")]),this._v("，封装了所有关于监听 "),s("code",[this._v("mousemove")]),this._v(" 事件和存储鼠标 (x, y) 位置的行为，但其仍不是真正的可复用。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("首先, 你或许会像这样，尝试在 "),s("code",[this._v("<Mouse>")]),this._v(" 内部的渲染方法渲染 "),s("code",[this._v("<Cat>")]),this._v(" 组件。这种方法适用于我们的特定用例，但我们还没有达到以可复用的方式真正封装行为的目标。现在，每当我们想要鼠标位置用于不同的用例时，我们必须创建一个新的组件（本质上是另一个 "),s("code",[this._v("<MouseWithCat>")]),this._v(" ），它专门为该用例呈现一些东西.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这也是 render prop 的来历：相比于直接将 "),s("code",[this._v("<Cat>")]),this._v(" 写死在 "),s("code",[this._v("<Mouse>")]),this._v(" 组件中，并且有效地更改渲染的结果，我们可以为 "),s("code",[this._v("<Mouse>")]),this._v(" 提供一个函数 prop 来动态的确定要渲染什么 —— 一个 render prop。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Cat")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mouse "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mouse"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/cat.jpg"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" position"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'absolute'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" left"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mouse"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" top"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mouse"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Mouse")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("constructor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("super")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token function-variable function"}},[t._v("handleMouseMove")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" event"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      y"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" event"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'100vh'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("onMouseMove")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleMouseMove"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n        ")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token comment"}},[t._v("/*\n          使用 `render`prop 动态决定要渲染的内容，而不是给出一个 <Mouse> 渲染结果的静态表示\n        */")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n        ")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n      ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MouseTracker")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n        ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("移动鼠标!")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n        ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Mouse")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("render")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mouse "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Cat")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("mouse")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mouse"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n      ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("现在，我们提供了一个 "),s("code",[this._v("render")]),this._v(" 方法 让 "),s("code",[this._v("<Mouse>")]),this._v(" 能够动态决定什么需要渲染，而不是克隆 "),s("code",[this._v("<Mouse>")]),this._v(" 组件然后硬编码来解决特定的用例。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("更具体地说，"),s("strong",[this._v("render prop 是一个用于告知组件需要渲染什么内容的函数 prop。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这项技术使我们共享行为非常容易。要获得这个行为，只要渲染一个带有 "),s("code",[this._v("render")]),this._v(" prop 的 "),s("code",[this._v("<Mouse>")]),this._v(" 组件就能够告诉它当前鼠标坐标 (x, y) 要渲染什么。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 如果你出于某种原因真的想要 HOC，那么你可以轻松实现")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 使用具有 render prop 的普通组件创建一个！")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("withMouse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Component"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("extends")]),t._v(" React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Mouse")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("render")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mouse "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Component")]),t._v(" "),a("span",{attrs:{class:"token spread"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("...")]),a("span",{attrs:{class:"token attr-value"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token attr-value"}},[t._v("props")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("mouse")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mouse"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-使用-props-而非-render"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-props-而非-render","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 使用 Props 而非 render")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("尽管之前的例子使用了 "),s("code",[this._v("render")]),this._v("，我们也可以简单地使用 "),s("code",[this._v("children")]),this._v(" prop！")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Mouse")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("children")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mouse "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("鼠标的位置是 ")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mouse"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token plain-text"}},[t._v("，")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mouse"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("记住，"),s("code",[this._v("children")]),this._v(" prop 并不真正需要添加到 JSX 元素的 “attributes” 列表中。相反，你可以直接放置到元素的"),s("em",[this._v("内部")]),this._v("！")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Mouse")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n  ")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mouse "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("鼠标的位置是 ")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mouse"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token plain-text"}},[t._v("，")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mouse"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Mouse")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("Mouse"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("propTypes "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PropTypes"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("func"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-render-props-会破坏react-purecomponent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-render-props-会破坏react-purecomponent","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Render Props 会破坏React.PureComponent")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("例如，继续我们之前使用的 "),a("code",[t._v("<Mouse>")]),t._v(" 组件，如果 "),a("code",[t._v("Mouse")]),t._v(" 继承自 "),a("code",[t._v("React.PureComponent")]),t._v(" 而不是 "),a("code",[t._v("React.Component")]),t._v("，我们的例子看起来就像这样：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Mouse")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PureComponent")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 与上面相同的代码......")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MouseTracker")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n        ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("Move the mouse around!")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n        ")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token comment"}},[t._v("/* 这是不好的！ 每个渲染的 `render` prop的值将会是不同的。 */")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n        ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Mouse")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("render")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mouse "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Cat")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("mouse")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mouse"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n      ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("在这样例子中，每次 "),a("code",[t._v("<MouseTracker>")]),t._v(" 渲染，它会生成一个新的函数作为 "),a("code",[t._v("<Mouse render>")]),t._v(" 的 prop，因而在同时也抵消了继承自 "),a("code",[t._v("React.PureComponent")]),t._v(" 的 "),a("code",[t._v("<Mouse>")]),t._v(" 组件的效果！")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MouseTracker")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 定义为实例方法，`this.renderTheCat`始终")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 当我们在渲染中使用它时，它指的是相同的函数")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("renderTheCat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mouse"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Cat")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("mouse")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mouse"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n        ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("Move the mouse around!")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n        ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Mouse")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("render")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("renderTheCat"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n      ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你无法静态定义 prop（例如，因为你需要关闭组件的 props 和/或 state），则 "),s("code",[this._v("<Mouse>")]),this._v(" 应该扩展 "),s("code",[this._v("React.Component")]),this._v("。")])}],!1,null,null,null);e.options.__file="017-render-props.md";s.default=e.exports}}]);
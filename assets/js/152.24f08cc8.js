(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{387:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p"),t._m(0),a("p"),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("整理转载自："),a("a",{attrs:{href:"https://www.zhihu.com/people/morgancheng",target:"_blank",rel:"noopener noreferrer"}},[t._v("程墨Morgan"),a("OutboundLink")],1),t._v("的两篇文章：")]),t._v(" "),a("p",[t._v("https://zhuanlan.zhihu.com/p/25954470")]),t._v(" "),a("p",[t._v("https://zhuanlan.zhihu.com/p/26069727")]),t._v(" "),a("p",[t._v("setState的关键点:")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("这几个关键点其实是相互关联的，一个一个说吧。")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("在React中，一个组件中要读取当前状态用是访问this.state，但是更新状态却是用this.setState，不是直接在this.state上修改，为什么呢？")]),t._v(" "),t._m(4),a("p",[t._v("因为this.state说到底只是一个对象，单纯去修改一个对象的值是没有意义的，去驱动UI的更新才是有意义的，想想看，如果只是改了this.state这个对象，但是没有让React组件重新绘制一遍，那有什么用？你可以尝试在代码中直接修改this.state的值，会发现的确能够改变状态，但是却不会引发重新渲染。")]),t._v(" "),t._m(5),a("p",[t._v("所以，需要用一个函数去更改状态，这个函数就是setState，当setState被调用时，能驱动组件的更新过程，引发componentDidUpdate、render等一系列函数的调用。")]),t._v(" "),a("p",[t._v("因为setState并不会立刻修改this.state的值，所以下面的code可能产生很不直观的结果。")]),t._v(" "),t._m(6),a("p",[t._v("直观上来看，当上面的incrementMultiple函数被调用时，组件状态的count值被增加了3次，每次增加1，那最后count被增加了3，但是，实际上的结果只给state增加了1。")]),t._v(" "),a("p",[t._v("原因并不复杂，就是因为调用this.setState时，并没有立即更改this.state，所以this.setState只是在反复设置同一个值而已，上面的code等同下面这样。")]),t._v(" "),t._m(7),a("p",[t._v("currentCount就是一个快照结果，重复地给count设置同一个值，不要说重复3次，哪怕重复一万次，得到的结果也只是增加1而已。")]),t._v(" "),a("p",[t._v("既然this.setState不会立即修改this.state的值，那在什么时候修改this.state的值呢？这就要说一下React的更新生命周期。")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("setState调用引起的React的更新生命周期函数4个函数（比修改prop引发的生命周期少一个componentWillReceiveProps函数），这4个函数依次被调用。")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("当shouldComponentUpdate函数被调用的时候，this.state没有得到更新。")]),t._v(" "),a("p",[t._v("当componentWillUpdate函数被调用的时候，this.state依然没有得到更新。")]),t._v(" "),a("p",[t._v("直到render函数被调用的时候，this.state才得到更新。")]),t._v(" "),a("p",[t._v("(或者，当shouldComponentUpdate函数返回false，这时候更新过程就被中断了，render函数也不会被调用了，这时候React不会放弃掉对this.state的更新的，所以虽然不调用render，依然会更新this.state。）")]),t._v(" "),a("p",[t._v("如果你没兴趣去记住React的生命周期（虽然你应该记住），那就可以简单认为，直到下一次render函数调用时（或者下一次shouldComponentUpdate返回false时）才得到更新的this.state。")]),t._v(" "),a("p",[t._v("不管你喜欢不喜欢，反正this.state就是不会再this.setState调用之后立刻更新。")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("比如下面的代码。")]),t._v(" "),t._m(11),a("p",[t._v("连续调用了两次this.setState，但是只会引发一次更新生命周期，不是两次，因为React会将多个this.setState产生的修改放在一个队列里，缓一缓，攒在一起，觉得差不多了再引发一次更新过程。")]),t._v(" "),a("p",[t._v("在每次更新过程中，会把积攒的setState结果合并，做一个merge的动作，所以上面的代码相当于这样。")]),t._v(" "),t._m(12),a("p",[t._v("如果每一个this.setState都引发一个更新过程的话，那就太浪费了！")]),t._v(" "),a("p",[t._v("对于开发者而言，也可以放心多次调用this.setState，每一次只要关注当前修改的那一个字段就行，反正其他字段会合并保留，丢不掉。")]),t._v(" "),a("p",[t._v("所以，合并多次this.setState调用更改的状态这个API设计决定也不错。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("如果我们按照教科书般的方式来使用React，基本上不会触及所谓的“除此之外”情况。")]),t._v(" "),a("p",[t._v("再说为什么会这样：")]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("上面的介绍是不是有点枯燥？我希望不要太枯燥，如果你不关心缘由，那就直接记住结论就行了。")]),t._v(" "),a("p",[t._v("为了展示效果，我们来看一段代码：")]),t._v(" "),a("p",[t._v("http://js.jirengu.com/yonew/5/edit?html,js,output")]),t._v(" "),t._m(16),a("p",[t._v("Increment按钮使用最正规的onClick方式处理点击事件。")]),t._v(" "),a("p",[t._v("Increment Raw通过***addEventListener***处理点击事件。")]),t._v(" "),a("p",[t._v("Increment Later通过***setTimeout***来处理点击事件。")]),t._v(" "),a("p",[t._v("通过点击三个不同的按钮，我们可以看到不同的行为。")]),t._v(" "),a("p",[t._v("点击Increment，先输出没有更新的this.state，然后render函数被执行，可见this.state的更新是异步的，更新过程也是在setState执行之后才引发。")]),t._v(" "),a("p",[t._v("但是如果点击Increment Raw或者Increment Later，就是先执行render函数，然后输输出更新过的this.state，可见，this.state被同步更新了，而且在setState函数执行过程中更新过程就已经完成了。")]),t._v(" "),a("p",[t._v("你还希望setState同步更新this.state吗？")]),t._v(" "),a("p",[t._v("上面的试验很清楚地显示，同步更新this.state的话，每一次调用setState都会引发同步的更新过程，这会更新过程很频繁，也就会导致性能问题。")]),t._v(" "),a("p",[t._v("所以说，虽然React具有让setState同步更新this.state的功能，我们还是避免这种使用方式。")]),t._v(" "),a("p",[t._v("别用这招，我们可以了解一种工具，但是并不表示我们就应该使用它。")]),t._v(" "),t._m(17),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25954470",target:"_blank",rel:"noopener noreferrer"}},[t._v("setState：这个API设计到底怎么样"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/26069727",target:"_blank",rel:"noopener noreferrer"}},[t._v("setState何时同步更新状态"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-setstate不会立刻改变react组件中state的值"}},[this._v("1.setState不会立刻改变React组件中state的值")])]),s("li",[s("a",{attrs:{href:"#_2-setstate通过引发一次组件的更新过程来引发重新绘制"}},[this._v("2.setState通过引发一次组件的更新过程来引发重新绘制")])]),s("li",[s("a",{attrs:{href:"#_3-多次setstate函数调用产生的效果会合并"}},[this._v("3. 多次setState函数调用产生的效果会合并")])]),s("li",[s("a",{attrs:{href:"#_4-setstate何时同步更新状态"}},[this._v("4. setState何时同步更新状态")])]),s("li",[s("a",{attrs:{href:"#参考资料"}},[this._v("参考资料")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"react中setstate说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react中setstate说明","aria-hidden":"true"}},[this._v("#")]),this._v(" react中setState说明")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("setState不会立刻改变React组件中state的值；")]),this._v(" "),s("li",[this._v("setState通过引发一次组件的更新过程来引发重新绘制；")]),this._v(" "),s("li",[this._v("多次setState函数调用产生的效果会合并。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-setstate不会立刻改变react组件中state的值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-setstate不会立刻改变react组件中state的值","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.setState不会立刻改变React组件中state的值")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//读取状态")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" count "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count；\n"),a("span",{attrs:{class:"token comment"}},[t._v("//更新状态")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" count "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("）；\n"),a("span",{attrs:{class:"token comment"}},[t._v("//无意义")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" count "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("forceUpdate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("incrementMultiple")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("incrementMultiple")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" currentCount "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" currentCount "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" currentCount "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" currentCount "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-setstate通过引发一次组件的更新过程来引发重新绘制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-setstate通过引发一次组件的更新过程来引发重新绘制","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.setState通过引发一次组件的更新过程来引发重新绘制")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("shouldComponentUpdate")])]),this._v(" "),s("li",[s("p",[this._v("componentWillUpdate")])]),this._v(" "),s("li",[s("p",[this._v("render")])]),this._v(" "),s("li",[s("p",[this._v("componentDidUpdate")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-多次setstate函数调用产生的效果会合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-多次setstate函数调用产生的效果会合并","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 多次setState函数调用产生的效果会合并")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("updateName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("FirstName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Morgan'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("LastName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Cheng'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("updateName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("FirstName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Morgan'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LastName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Cheng'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4-setstate何时同步更新状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-setstate何时同步更新状态","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. setState何时同步更新状态")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在React中，"),s("strong",[this._v("如果是由React引发的事件处理（比如通过onClick引发的事件处理），调用setState不会同步更新this.state，除此之外的setState调用会同步执行this.state")]),this._v("。所谓“除此之外”，指的是绕过React通过addEventListener直接添加的事件处理函数，还有通过setTimeout/setInterval产生的异步调用。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在React的setState函数实现中，会根据一个变量***isBatchingUpdates*"),s("strong",[this._v("判断是直接更新this.state还是放到队列中回头再说，而")]),this._v("*isBatchingUpdates***默认是false，也就表示setState会同步更新this.state，但是，有一个函数*"),s("strong",[this._v("batchedUpdates*")]),this._v("，这个函数会把***isBatchingUpdates***修改为true，而当React在调用事件处理函数之前就会调用这个*"),s("strong",[this._v("batchedUpdates*")]),this._v("，造成的后果，就是由React控制的事件处理过程setState不会同步更新this.state。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("constructor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("super")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("arguments"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClick "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClick"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("bind")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClickLater "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClickLater"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("bind")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 在onClick函数中，我们调用setState函数，然后在console.log上输出this.state，由此判断setState是否同步更新了this.state。")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("onClick")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setState")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'# this.state'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("onClickLater")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("onClick")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("componentDidMount")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#btn-raw'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'click'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClick"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 在render函数中，我们用console.log输出一个信息，通过render函数是否被执行，我们能够判断更新过程是否发生了，然后我们用三个按钮分别代表三种事件处理方式。")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#enter render'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("button onClick"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClick"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Increment"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("button id"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"btn-raw"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Increment Raw"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("button onClick"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClickLater"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Increment Later"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nReactDOM"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("App "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#container'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);e.options.__file="015-react的setState说明.md";s.default=e.exports}}]);
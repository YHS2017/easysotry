(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24c033f2"],{"2d3b":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"layout"},[i("div",{staticClass:"header"},[i("div",{staticClass:"back",on:{click:t.back}},[t._v("返回")]),i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"searchinput",attrs:{type:"text"},domProps:{value:t.keywords},on:{change:t.searchbooks,input:function(s){s.target.composing||(t.keywords=s.target.value)}}}),i("img",{staticClass:"searchicon",attrs:{src:a("eaf1"),alt:""},on:{click:t.searchbooks}})])]),i("div",{staticClass:"content"},[""==t.keywords||0==t.searchlist.length?i("div",{staticClass:"recommend"},[i("div",{staticClass:"panel"},[i("div",{staticClass:"panel-title"},[t._v("男生必看")]),i("div",{staticClass:"panel-content"},t._l(t.manlist,(function(s){return i("div",{key:s._id,staticClass:"book",on:{click:function(a){return t.bookinfo(s._id)}}},[i("img",{staticClass:"bookcover",attrs:{src:s.cover}}),i("div",{staticClass:"bookinfo"},[i("div",{staticClass:"bookname"},[t._v(t._s(s.title))]),i("div",{staticClass:"booktag"},[t._v(t._s(s.majorCate))]),i("div",{staticClass:"bookscore"},[t._v(t._s(s.rating.score)+"分")])])])})),0)]),i("div",{staticClass:"panel"},[i("div",{staticClass:"panel-title"},[t._v("女生热门")]),i("div",{staticClass:"panel-content"},t._l(t.womenlist,(function(s){return i("div",{key:s._id,staticClass:"book",on:{click:function(a){return t.bookinfo(s._id)}}},[i("img",{staticClass:"bookcover",attrs:{src:s.cover}}),i("div",{staticClass:"bookinfo"},[i("div",{staticClass:"bookname"},[t._v(t._s(s.title))]),i("div",{staticClass:"booktag"},[t._v(t._s(s.majorCate))]),i("div",{staticClass:"bookscore"},[t._v(t._s(t.NumtoFixed(s.latelyFollower))+"万热度")])])])})),0)]),i("div",{staticClass:"panel"},[i("div",{staticClass:"panel-title"},[t._v("主编力荐")]),i("div",{staticClass:"panel-content"},t._l(t.otherlist,(function(s){return i("div",{key:s._id,staticClass:"book",on:{click:function(a){return t.bookinfo(s._id)}}},[i("img",{staticClass:"bookcover",attrs:{src:s.cover}}),i("div",{staticClass:"bookinfo"},[i("div",{staticClass:"bookname"},[t._v(t._s(s.title))]),i("div",{staticClass:"booktag"},[t._v(t._s(s.majorCate))]),i("div",{staticClass:"bookscore"},[t._v(t._s(t.NumtoFixed(s.latelyFollower))+"万热度")])])])})),0)])]):i("div",{staticClass:"searchlist"},[i("div",{staticClass:"panel"},[i("div",{staticClass:"panel-title"},[t._v(t._s("共计"+t.searchlist.length+"条记录"))]),i("div",{staticClass:"panel-content"},t._l(t.searchlist,(function(s){return i("div",{key:s._id,staticClass:"searchitem",on:{click:function(a){return t.bookinfo(s._id)}}},[i("img",{staticClass:"bookcover",attrs:{src:t.getrealeurl(s.cover)}}),i("div",{staticClass:"iteminfo"},[i("div",{staticClass:"itemname"},[t._v(t._s(s.title))]),i("div",{staticClass:"itemintro"},[t._v(t._s(s.shortIntro))]),i("div",{staticClass:"itemcat"},[t._v(t._s(s.cat))]),i("div",{staticClass:"itemauthor"},[t._v(t._s(s.author)+"分")])])])})),0)])])])])},o=[],e=(a("fb6a"),a("b680"),a("ac1f"),a("5319"),a("bc3a")),c=a.n(e),n={data:function(){return{manlist:[],womenlist:[],otherlist:[],keywords:"",searchlist:[]}},methods:{NumtoFixed:function(t){return(t/1e4).toFixed(1)},getrealeurl:function(t){return"//statics.zhuishushenqi.com/agent/"+encodeURIComponent(t.replace("/agent/",""))},back:function(){this.$router.back()},bookinfo:function(t){this.$router.push({path:"/Book",query:{bookid:t}})},searchbooks:function(){var t=this;""!==this.keywords&&c.a.get("http://novel.kele8.cn/search?keyword="+this.keywords).then((function(s){t.searchlist=s.data.books}))}},mounted:function(){var t=this;c.a.get("https://b.zhuishushenqi.com/category/page?node=&sex=male&page=1&groupid=&pl=ios&tabType=jx").then((function(s){t.manlist=s.data.data[3].books.slice(0,6),t.womenlist=s.data.data[4].books.slice(0,6),t.otherlist=s.data.data[5].books.slice(0,6),parseFloat()}))}},l=n,r=(a("ac8c"),a("2877")),d=Object(r["a"])(l,i,o,!1,null,"03d9d831",null);s["default"]=d.exports},7691:function(t,s,a){},ac8c:function(t,s,a){"use strict";var i=a("7691"),o=a.n(i);o.a},fb6a:function(t,s,a){"use strict";var i=a("23e7"),o=a("861d"),e=a("e8b5"),c=a("23cb"),n=a("50c4"),l=a("fc6a"),r=a("8418"),d=a("b622"),v=a("1dde"),u=a("ae40"),k=v("slice"),C=u("slice",{ACCESSORS:!0,0:0,1:2}),h=d("species"),b=[].slice,f=Math.max;i({target:"Array",proto:!0,forced:!k||!C},{slice:function(t,s){var a,i,d,v=l(this),u=n(v.length),k=c(t,u),C=c(void 0===s?u:s,u);if(e(v)&&(a=v.constructor,"function"!=typeof a||a!==Array&&!e(a.prototype)?o(a)&&(a=a[h],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return b.call(v,k,C);for(i=new(void 0===a?Array:a)(f(C-k,0)),d=0;k<C;k++,d++)k in v&&r(i,d,v[k]);return i.length=d,i}})}}]);
//# sourceMappingURL=chunk-24c033f2.b29e9a85.js.map
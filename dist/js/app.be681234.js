(function(e){function i(i){for(var r,s,c=i[0],o=i[1],l=i[2],I=0,v=[];I<c.length;I++)s=c[I],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&v.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(i);while(v.length)v.shift()();return n.push.apply(n,l||[]),t()}function t(){for(var e,i=0;i<n.length;i++){for(var t=n[i],r=!0,c=1;c<t.length;c++){var o=t[c];0!==a[o]&&(r=!1)}r&&(n.splice(i--,1),e=s(s.s=t[0]))}return e}var r={},a={app:0},n=[];function s(i){if(r[i])return r[i].exports;var t=r[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,i,t){s.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,i){if(1&i&&(e=s(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var r in e)s.d(t,r,function(i){return e[i]}.bind(null,r));return t},s.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(i,"a",i),i},s.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=i,c=c.slice();for(var l=0;l<c.length;l++)i(c[l]);var u=o;n.push([0,"chunk-vendors"]),t()})({0:function(e,i,t){e.exports=t("56d7")},"15f8":function(e,i,t){"use strict";t("d58b")},"17b5":function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAnFBMVEXIEC7///8BIWnFABjrvcHx8/YAHmgGKnHICSvKKD0AAGAACmIAHGfHACWSnLjGACD88vPLGDegqMDyztPfhZCYobv55ejdf4ojOHbWXm0ABmEpPXn3+fzxy9DXYnD66uzFABQaMXL11drEAA3UUmMeNXXr7fLTTV8AEmYAGGgEJ24SLXCKlbTY3ObceYbhi5bRQlbOLETYa3jEAASI6syOAAAGxUlEQVR4nO3de1faTBAH4AVqSIOIQNHCi8ULVoHWXvz+3+1NtEoum2SSucVz5veXPaXu5HExS5LOuu1try7rxS4K+nwZnR3H+hy6ioSfj688GzGWFESPZyfvQ53/8hUzvvs9d+Pn3/WAvVnACNg5vmC1WxwHOr+8nvjwHua9XvLFc/KFImDH+OB4L3xgwD4TYKf4gtXpYv0+yMaPd/3mldNUAewQXx5vUIn3zgcG3K/oATvDF6yCNN6XOrwUXwK41QHsCF+w6jfEy/CpAXaCLxgB8Ab5d2j+BRDA9WxICtgBvnZ4Bb4XQMBCmhRQnS8Y7QF4vonlqRE4Aw9kgMp8ebwJGC/mCyfFgoVnoCofBi/m21yO/YByM1CRD4Q3KbdwyeJQGVCNLxgNIXhX5QDu5R/qAirx4fH+8ZUCXi8lAFX4gtUBjffOlwB6TyIwwBsUoAIfDV7Md7woiAFcYGagOF8Rz3PcALze2mWvMGBmYOurMcJ8dHizvQui9Kn74ouTBxTlI8Q7RIFLrutnAOVnoCBfEFHi9fvu9ZsOM4CoGXjaXb48nne10QDvH58yoBBfEN1Q4b2/y5z/J4P6HXjfEFCEL8FLrTJI8FJ8ioACfIR4mWNz2UEOqUHEANn5uPByfPmBUIBfwYDMfKfRPRNegU8FkJUPhreE4HmOp8CnAMjIx4vn5RMHZOPjxivhSwDvM4BTTkAmvjye99MUBO+k/BhK+AgBT2b/1QCy8J1GX9nxKvjyPz1GQAY+QrzK2iv4gIADNCA5Xxbvgg2vhk8IkJgPhDegwKvlKxbjPQvjAEn5BOptwidQECGfLB6Ij70oMj5pPCAfc2FEfPJ4YD7W4kj4NPAa8DEWSMCng9eIj61INJ8WXkM+pkKRfHp4jflYikXxaeK14GMoGMGni9eKj/wzZWs+oc/k1HzEgFE7vkgdrzUf6SWhw482fD/2UtcjOfgor+b+bMP3kwgPfkeQlq84A1vfS2jDl8ITuZ1Kz0d4M6Y1nyZezBcgsyvewS9kArkJ3YrvBa8Q+JMQ2KN3Q3T2j9m38J9pMS4EHFBjvvh3XugZbPoXdMJ43OOP3Z1Q5Ps6Vdm5Pxt6vvONfyjAOOvvJAfu6kcSTYtTh2aMDxXjQ8X4UDE+VIwPFeNDxfhQMT5U3KdO5WpazTe90q4wGzfoVir1Yj/t+nKprtZisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrF89Gg/o5TLR3vCSvsJuWw+3PN92s9n5vLRni7VLiAX40PF+FAxPlSMDxXjQ8X4UDE+VD4aH8l/6c/0MihLSYuDbOcBEr6SFgfpkah6GVB30ijL/K+v50U4vbyg55svQ+cZ7E9qLKpOGrR9XEoP6Ntg7OnvEubwyN688+XE208mNV7Sx2WH7uNC2UWoCq9IMXEFPMLffTFgcUyXA8R3EcLhgd62cDzSU0cJ4JgSkKyDGgIP3UENAajVQY1s5pH072sEGOYA5fv3EeIRdY/UASToXYrEI+tdqgGI7pyLxiPsnNsQMMQDIvs2E+CR9m2WBkR1DSfBI+4aXg7orQkJiOhZT1Yocc96ScDWOyYQFkm+Y4IcYMv9OkgLZNivQwqw1W4xxMWx7BYjA9hiryLywpj2KmpYZ9mJDcvH/lNl2ymrtNZmKwMMn8C6inGfNm7ARrsENsSDfixi3SWQF7DBHpVMeOx7VHICgndIZcMT2CGVDxC4Py8jnsj+vCjA5vvzIvCa308Q2R2aBxCwNzkzntje5AjAJnuTC+Mx8vEDFvjE8Vj5uAFzfAp4zHxQwNtv1/WA9/ljyvAF0YEKrzCQHh90UpQBPlUcl0sPcljUP+pDjifAxwfojgMo4YnwkQLeREGOL4iGGLzjRjrJN296w0WE7xWw/hhLAEM/oFPHE+ODvsNAgIdXQJd80z0dXlB3CJp89IBOHU+ULwZcUQK6U208YT5SwL1rvc4bpPEWh1VbPHE+MODSCzhOA9Y+WQ/Bm90g8BT46ABr+OZbAB5m5inxUQFW8ongKfHFgCPIcq0asIJPCE+NDw54VwpYyieGp8iXAEKWbV7AeOXxtCnhm28917/yeEMSPFU+JGDo5QPh0cy8JKp8OEAPn+jMS6LMhwIE4l2z4XWALwHsQwC3BcD8C2rxerM9KV4n+FoDZv/Ss8aJ8Z448TrClyykWwCq43WGLwEMmgI2wuu3vqpSlc7wJYCQK1C32+c3K++UlMTrFF9jwJc/PHjx7jJ4ARNex/gSwN2i1u8NUB2vc3xgwIcYcP7w7FtNu1/pi6E7RrwO8iX3RB7PALc1l/8DKhDhs8wFtDgAAAAASUVORK5CYII="},"25fe":function(e,i,t){e.exports=t.p+"img/es.1578e5df.png"},"4c15":function(e,i,t){e.exports=t.p+"img/ja.8a521794.png"},5325:function(e,i,t){"use strict";t("6b32")},"56d7":function(e,i,t){"use strict";t.r(i);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"app"}},[t("Content")],1)},n=[],s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("section",[t("header",[t("section",{staticClass:"container"},[t("div",{staticClass:"row justify-content-center align-items-center"},[e._m(0),t("div",{staticClass:"col-6"},[t("Search",{attrs:{placeholder:"Cerca un film..."},on:{getData:e.getData}})],1)])])]),t("main",[t("div",{staticClass:"container"},[t("div",{staticClass:"row my-2"},[e.active&&e.searchMovie.length>0?t("h2",[e._v(" Movies "+e._s(e.searchMovie.length)+" risultati ")]):t("h1",[e._v("Nessun risultato per Movies")]),e._l(e.searchMovie,(function(e){return t("div",{key:e.id,staticClass:"col-3 my-3"},[t("Card",{staticClass:"shadow",attrs:{cardMovie:e}})],1)}))],2)]),t("div",{staticClass:"container"},[t("div",{staticClass:"row my-2"},[e.active&&e.searchSeries.length>0?t("h2",[e._v(" Series "+e._s(e.searchSeries.length)+" risultati ")]):t("h1",[e._v("Nessun risultato per Series")]),e._l(e.searchSeries,(function(e){return t("div",{key:e.id,staticClass:"col-3 my-3"},[t("Card",{staticClass:"shadow",attrs:{cardSeries:e}})],1)}))],2)])])])},c=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"col-6"},[t("h1",[e._v("Boolflix")])])}],o=(t("99af"),function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"search-bar text-center"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.query,expression:"query",modifiers:{trim:!0}}],attrs:{placeholder:e.placeholder,type:"text"},domProps:{value:e.query},on:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.sendInput.apply(null,arguments)},input:function(i){i.target.composing||(e.query=i.target.value.trim())},blur:function(i){return e.$forceUpdate()}}}),t("button",{staticClass:"m-3",on:{click:e.sendInput}},[e._v("Search")])])}),l=[],u={name:"Search",data:function(){return{query:""}},props:["placeholder"],methods:{sendInput:function(){this.$emit("getData",this.query),this.query=""}}},I=u,v=t("2877"),f=Object(v["a"])(I,o,l,!1,null,"bbe541d6",null),g=f.exports,d=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"card"},[e.cardMovie?t("div",{staticClass:"card-movie overflow-auto"},[t("img",{staticClass:"w-100 h-100 poster",attrs:{src:e.getCover(e.cardMovie.poster_path),alt:"cover"}}),t("div",{staticClass:"card-movie-info text-center"},[t("h3",[e._v(e._s(e.cardMovie.title))]),t("h5",[e._v(e._s(e.cardMovie.original_title))]),t("p",[e._v(e._s(e.cardMovie.original_language))]),t("img",{staticStyle:{width:"50px"},attrs:{src:e.getFlag(e.cardMovie.original_language),alt:"flag"}}),t("p",[e._v(e._s(Math.ceil(e.cardMovie.vote_average/2)))]),e._l(5,(function(i,r){return t("i",{key:r,staticClass:"fas fa-star",class:e.getStars(r,Math.ceil(e.cardMovie.vote_average/2))?"starred":""})})),t("p",[e._v(e._s(e.cardMovie.overview))])],2)]):t("div",{staticClass:"card-series overflow-auto"},[t("img",{staticClass:"w-100 h-100 poster",attrs:{src:e.getCover(e.cardSeries.poster_path),alt:"cover"}}),t("div",{staticClass:"card-series-info text-center"},[t("h3",[e._v(e._s(e.cardSeries.name))]),t("h5",[e._v(e._s(e.cardSeries.original_name))]),t("p",[e._v(e._s(e.cardSeries.original_language))]),t("img",{staticStyle:{width:"50px"},attrs:{src:e.getFlag(e.cardSeries.original_language),alt:"flag"}}),t("p",[e._v(e._s(Math.ceil(e.cardSeries.vote_average/2)))]),e._l(5,(function(i,r){return t("i",{key:r,staticClass:"fas fa-star",class:e.getStars(r,Math.ceil(e.cardSeries.vote_average/2))?"starred":""})})),t("p",[e._v(e._s(e.cardSeries.overview))])],2)])])},p=[],A={name:"Card",data:function(){return{}},props:["cardMovie","cardSeries"],methods:{getFlag:function(e){switch(e.toLowerCase()){case"it":return t("e33f");case"en":return t("17b5");case"es":return t("25fe");case"ja":return t("4c15");default:return""}},getCover:function(e){return e?"https://image.tmdb.org/t/p/w342".concat(e):"https://www.altavod.com/assets/images/poster-placeholder.png"},getStars:function(e,i){if(i>e)return!0}}},h=A,C=(t("5325"),Object(v["a"])(h,d,p,!1,null,"0533b740",null)),m=C.exports,w=t("bc3a"),y=t.n(w),M={name:"Content",components:{Search:g,Card:m},data:function(){return{apiKey:"c52f6a9d71fd6172aee943d2c2d89147",searchMovie:[],searchSeries:[],query:"",active:!1}},methods:{getData:function(e){e?(this.query=e,this.active=!0,this.getMovie(),this.getSeries()):this.searchMovie=this.searchSeries=[]},getMovie:function(){var e=this;y.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(this.apiKey,"&language=it_IT&query=").concat(this.query)).then((function(i){e.searchMovie=i.data.results})).catch((function(e){console.log(e)}))},getSeries:function(){var e=this;y.a.get("https://api.themoviedb.org/3/search/tv?api_key=".concat(this.apiKey,"&language=it_IT&query=").concat(this.query)).then((function(i){e.searchSeries=i.data.results})).catch((function(e){console.log(e)}))}}},S=M,b=(t("15f8"),Object(v["a"])(S,s,c,!1,null,"4d42b4f8",null)),E=b.exports,j={name:"App",components:{Content:E}},x=j,O=(t("5c0b"),Object(v["a"])(x,a,n,!1,null,null,null)),_=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,i,t){"use strict";t("9c0c")},"6b32":function(e,i,t){},"9c0c":function(e,i,t){},d58b:function(e,i,t){},e33f:function(e,i){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.be681234.js.map
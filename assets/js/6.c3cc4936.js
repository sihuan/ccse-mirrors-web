(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{327:function(t,e,s){},472:function(t,e,s){"use strict";s(327)},474:function(t,e,s){"use strict";s(48),s(71);var n=s(323);function a(t,e,s){var n=[];!function t(e,s){for(var n=0,a=e.length;n<a;n++)"group"===e[n].type?t(e[n].children||[],s):s.push(e[n])}(e,n);for(var a=0;a<n.length;a++){var i=n[a];if("page"===i.type&&i.path===decodeURIComponent(t.path))return n[a+s]}}var i={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,s=this.$page.frontmatter.prev;return!1===s?void 0:s?Object(n.k)(this.$site.pages,s,this.$route.path):(t=this.$page,e=this.sidebarItems,a(t,e,-1))},next:function(){var t,e,s=this.$page.frontmatter.next;return!1===s?void 0:s?Object(n.k)(this.$site.pages,s,this.$route.path):(t=this.$page,e=this.sidebarItems,a(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,s=t.editLinks,n=t.docsDir,a=void 0===n?"":n,i=t.docsBranch,r=void 0===i?"master":i,o=t.docsRepo,c=void 0===o?e:o;return c&&s&&this.$page.relativePath?this.createEditLink(e,c,a,r,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,s,a,i){return/bitbucket.org/.test(t)?(n.i.test(e)?e:t).replace(n.a,"")+"/src"+"/".concat(a,"/")+(s?s.replace(n.a,"")+"/":"")+i+"?mode=edit&spa=0&at=".concat(a,"&fileviewer=file-view-default"):(n.i.test(e)?e:"https://github.com/".concat(e)).replace(n.a,"")+"/edit"+"/".concat(a,"/")+(s?s.replace(n.a,"")+"/":"")+i}}},r=(s(472),s(26)),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"page"},[t._t("top"),t._v(" "),s("Content",{staticClass:"theme-default-content"}),t._v(" "),s("footer",{staticClass:"page-edit"},[t.editLink?s("div",{staticClass:"edit-link"},[s("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),s("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?s("div",{staticClass:"last-updated"},[s("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),s("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?s("div",{staticClass:"page-nav"},[s("p",{staticClass:"inner"},[t.prev?s("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?s("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?s("span",{staticClass:"next"},[t.next?s("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.a=o.exports},491:function(t,e,s){var n={"./af":331,"./af.js":331,"./ar":332,"./ar-dz":333,"./ar-dz.js":333,"./ar-kw":334,"./ar-kw.js":334,"./ar-ly":335,"./ar-ly.js":335,"./ar-ma":336,"./ar-ma.js":336,"./ar-sa":337,"./ar-sa.js":337,"./ar-tn":338,"./ar-tn.js":338,"./ar.js":332,"./az":339,"./az.js":339,"./be":340,"./be.js":340,"./bg":341,"./bg.js":341,"./bm":342,"./bm.js":342,"./bn":343,"./bn-bd":344,"./bn-bd.js":344,"./bn.js":343,"./bo":345,"./bo.js":345,"./br":346,"./br.js":346,"./bs":347,"./bs.js":347,"./ca":348,"./ca.js":348,"./cs":349,"./cs.js":349,"./cv":350,"./cv.js":350,"./cy":351,"./cy.js":351,"./da":352,"./da.js":352,"./de":353,"./de-at":354,"./de-at.js":354,"./de-ch":355,"./de-ch.js":355,"./de.js":353,"./dv":356,"./dv.js":356,"./el":357,"./el.js":357,"./en-au":358,"./en-au.js":358,"./en-ca":359,"./en-ca.js":359,"./en-gb":360,"./en-gb.js":360,"./en-ie":361,"./en-ie.js":361,"./en-il":362,"./en-il.js":362,"./en-in":363,"./en-in.js":363,"./en-nz":364,"./en-nz.js":364,"./en-sg":365,"./en-sg.js":365,"./eo":366,"./eo.js":366,"./es":367,"./es-do":368,"./es-do.js":368,"./es-mx":369,"./es-mx.js":369,"./es-us":370,"./es-us.js":370,"./es.js":367,"./et":371,"./et.js":371,"./eu":372,"./eu.js":372,"./fa":373,"./fa.js":373,"./fi":374,"./fi.js":374,"./fil":375,"./fil.js":375,"./fo":376,"./fo.js":376,"./fr":377,"./fr-ca":378,"./fr-ca.js":378,"./fr-ch":379,"./fr-ch.js":379,"./fr.js":377,"./fy":380,"./fy.js":380,"./ga":381,"./ga.js":381,"./gd":382,"./gd.js":382,"./gl":383,"./gl.js":383,"./gom-deva":384,"./gom-deva.js":384,"./gom-latn":385,"./gom-latn.js":385,"./gu":386,"./gu.js":386,"./he":387,"./he.js":387,"./hi":388,"./hi.js":388,"./hr":389,"./hr.js":389,"./hu":390,"./hu.js":390,"./hy-am":391,"./hy-am.js":391,"./id":392,"./id.js":392,"./is":393,"./is.js":393,"./it":394,"./it-ch":395,"./it-ch.js":395,"./it.js":394,"./ja":396,"./ja.js":396,"./jv":397,"./jv.js":397,"./ka":398,"./ka.js":398,"./kk":399,"./kk.js":399,"./km":400,"./km.js":400,"./kn":401,"./kn.js":401,"./ko":402,"./ko.js":402,"./ku":403,"./ku.js":403,"./ky":404,"./ky.js":404,"./lb":405,"./lb.js":405,"./lo":406,"./lo.js":406,"./lt":407,"./lt.js":407,"./lv":408,"./lv.js":408,"./me":409,"./me.js":409,"./mi":410,"./mi.js":410,"./mk":411,"./mk.js":411,"./ml":412,"./ml.js":412,"./mn":413,"./mn.js":413,"./mr":414,"./mr.js":414,"./ms":415,"./ms-my":416,"./ms-my.js":416,"./ms.js":415,"./mt":417,"./mt.js":417,"./my":418,"./my.js":418,"./nb":419,"./nb.js":419,"./ne":420,"./ne.js":420,"./nl":421,"./nl-be":422,"./nl-be.js":422,"./nl.js":421,"./nn":423,"./nn.js":423,"./oc-lnc":424,"./oc-lnc.js":424,"./pa-in":425,"./pa-in.js":425,"./pl":426,"./pl.js":426,"./pt":427,"./pt-br":428,"./pt-br.js":428,"./pt.js":427,"./ro":429,"./ro.js":429,"./ru":430,"./ru.js":430,"./sd":431,"./sd.js":431,"./se":432,"./se.js":432,"./si":433,"./si.js":433,"./sk":434,"./sk.js":434,"./sl":435,"./sl.js":435,"./sq":436,"./sq.js":436,"./sr":437,"./sr-cyrl":438,"./sr-cyrl.js":438,"./sr.js":437,"./ss":439,"./ss.js":439,"./sv":440,"./sv.js":440,"./sw":441,"./sw.js":441,"./ta":442,"./ta.js":442,"./te":443,"./te.js":443,"./tet":444,"./tet.js":444,"./tg":445,"./tg.js":445,"./th":446,"./th.js":446,"./tk":447,"./tk.js":447,"./tl-ph":448,"./tl-ph.js":448,"./tlh":449,"./tlh.js":449,"./tr":450,"./tr.js":450,"./tzl":451,"./tzl.js":451,"./tzm":452,"./tzm-latn":453,"./tzm-latn.js":453,"./tzm.js":452,"./ug-cn":454,"./ug-cn.js":454,"./uk":455,"./uk.js":455,"./ur":456,"./ur.js":456,"./uz":457,"./uz-latn":458,"./uz-latn.js":458,"./uz.js":457,"./vi":459,"./vi.js":459,"./x-pseudo":460,"./x-pseudo.js":460,"./yo":461,"./yo.js":461,"./zh-cn":462,"./zh-cn.js":462,"./zh-hk":463,"./zh-hk.js":463,"./zh-mo":464,"./zh-mo.js":464,"./zh-tw":465,"./zh-tw.js":465};function a(t){var e=i(t);return s(e)}function i(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=491},499:function(t,e,s){},500:function(t,e,s){},501:function(t,e,s){},539:function(t,e,s){"use strict";s(499)},540:function(t,e,s){"use strict";s(500)},541:function(t,e,s){var n=s(193),a=s(186),i=s(542),r=s(546);t.exports=function(t,e){if(null==t)return{};var s=n(r(t),(function(t){return[t]}));return e=a(e),i(t,s,(function(t,s){return e(t,s[0])}))}},542:function(t,e,s){var n=s(110),a=s(543),i=s(104);t.exports=function(t,e,s){for(var r=-1,o=e.length,c={};++r<o;){var u=e[r],l=n(t,u);s(l,u)&&a(c,i(u,t),l)}return c}},543:function(t,e,s){var n=s(544),a=s(104),i=s(108),r=s(76),o=s(51);t.exports=function(t,e,s,c){if(!r(t))return t;for(var u=-1,l=(e=a(e,t)).length,p=l-1,h=t;null!=h&&++u<l;){var d=o(e[u]),j=s;if("__proto__"===d||"constructor"===d||"prototype"===d)return t;if(u!=p){var v=h[d];void 0===(j=c?c(v,d,h):void 0)&&(j=r(v)?v:i(e[u+1])?[]:{})}n(h,d,j),h=h[d]}return t}},544:function(t,e,s){var n=s(545),a=s(106),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,s){var r=t[e];i.call(t,e)&&a(r,s)&&(void 0!==s||e in t)||n(t,e,s)}},545:function(t,e,s){var n=s(194);t.exports=function(t,e,s){"__proto__"==e&&n?n(t,e,{configurable:!0,enumerable:!0,value:s,writable:!0}):t[e]=s}},546:function(t,e,s){var n=s(187),a=s(547),i=s(549);t.exports=function(t){return n(t,i,a)}},547:function(t,e,s){var n=s(105),a=s(548),i=s(188),r=s(189),o=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)n(e,i(t)),t=a(t);return e}:r;t.exports=o},548:function(t,e,s){var n=s(192)(Object.getPrototypeOf,Object);t.exports=n},549:function(t,e,s){var n=s(190),a=s(550),i=s(109);t.exports=function(t){return i(t)?n(t,!0):a(t)}},550:function(t,e,s){var n=s(76),a=s(191),i=s(551),r=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return i(t);var e=a(t),s=[];for(var o in t)("constructor"!=o||!e&&r.call(t,o))&&s.push(o);return s}},551:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var s in Object(t))e.push(s);return e}},552:function(t,e,s){"use strict";s(501)},558:function(t,e,s){"use strict";s.r(e);var n=s(473),a=s(474),i=s(475),r=(s(10),s(12),s(15),{data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;s.e(4).then(s.t.bind(null,556,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}}),o=(s(539),s(26)),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.comp?s(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,u=(s(540),Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?s("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?s("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,s(195),s(79)),l=s.n(u),p=s(541),h=s.n(p),d={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return h()(this.$props,l.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},j=(Object(o.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports,s(323)),v=s(321),f=s.n(v),g={components:{Page:a.a,Sidebar:i.a,Navbar:n.a,Pagination:c},data:function(){return{isSidebarOpen:!1}},computed:{newsPosts:function(){return this.$pagination.pages},shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(j.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{displayDate:function(t){return f()(t).format("YYYY-MM-DD")},toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},m=(s(552),Object(o.a)(g,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?s("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),s("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),s("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),s("main",{staticClass:"news-index-page"},[s("div",{staticClass:"page-content-container"},[s("h1",{staticClass:"page-title"},[s("v-icon",{attrs:{name:"radio"}}),t._v(" What's Up?\n      ")],1),t._v(" "),s("ul",t._l(t.$pagination.pages,(function(e){return s("li",[s("div",{staticClass:"news-preview"},[e.excerpt?s("div",{domProps:{innerHTML:t._s(e.excerpt)}}):s("Content",{attrs:{"page-key":e.key}})],1),t._v(" "),s("div",{staticClass:"post-meta"},[e.frontmatter.author?s("v-icon",{attrs:{name:"user"}}):t._e(),t._v(" "+t._s(e.frontmatter.author)+"\n            "),e.frontmatter.author?s("span",[t._v("  ")]):t._e(),t._v(" "),e.frontmatter.date?s("v-icon",{attrs:{name:"calendar"}}):t._e(),t._v(" "+t._s(t.displayDate(e.frontmatter.date))+"\n            "),s("router-link",{staticClass:"read-more",attrs:{to:e.path}},[t._v("Read More "),s("v-icon",{attrs:{name:"arrow-right-circle"}})],1)],1)])})),0)]),t._v(" "),s("div",{staticClass:"page-nav-container"},[s("Pagination")],1)])],1)}),[],!1,null,null,null));e.default=m.exports}}]);
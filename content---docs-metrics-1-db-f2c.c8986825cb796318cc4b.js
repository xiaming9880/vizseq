(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));a(58),a(31),a(22),a(23),a(59),a(0);var n=a(158);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={id:"metrics",title:"Built-In Metrics",sidebar_label:"Built-In Metrics"},o=[{value:"N-gram-based",id:"n-gram-based",children:[]},{value:"Embedding-based",id:"embedding-based",children:[]}],c={rightToc:o},p="wrapper";function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"n-gram-based"},"N-gram-based"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"BLEU (",Object(n.b)("a",r({parentName:"li"},{href:"https://www.aclweb.org/anthology/P02-1040"}),"Papineni et al., 2002"),"): ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/mjpost/sacreBLEU"}),"sacreBLEU")," implementation"),Object(n.b)("li",{parentName:"ul"},"NIST (",Object(n.b)("a",r({parentName:"li"},{href:"http://www.mt-archive.info/HLT-2002-Doddington.pdf"}),"Doddington, 2002"),"): ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/nltk/nltk%3E"}),"NLTK")," implementation"),Object(n.b)("li",{parentName:"ul"},"METEOR (",Object(n.b)("a",r({parentName:"li"},{href:"https://www.aclweb.org/anthology/W05-0909"}),"Banerjee et al., 2005"),"): ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/nltk/nltk"}),"NLTK")," implementation"),Object(n.b)("li",{parentName:"ul"},"TER (",Object(n.b)("a",r({parentName:"li"},{href:"http://mt-archive.info/AMTA-2006-Snover.pdf"}),"Snover et al., 2006"),")"),Object(n.b)("li",{parentName:"ul"},"RIBES (",Object(n.b)("a",r({parentName:"li"},{href:"https://www.aclweb.org/anthology/D10-1092"}),"Isozaki et al., 2010"),"): ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/nltk/nltk"}),"NLTK")," implementation"),Object(n.b)("li",{parentName:"ul"},"chrF (",Object(n.b)("a",r({parentName:"li"},{href:"https://www.aclweb.org/anthology/W15-3049"}),"Popovi\u0107 et al., 2015"),"): ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/mjpost/sacreBLEU"}),"sacreBLEU")," implementation"),Object(n.b)("li",{parentName:"ul"},"GLEU (",Object(n.b)("a",r({parentName:"li"},{href:"https://arxiv.org/pdf/1609.08144.pdf"}),"Wu et al., 2016"),"): ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/nltk/nltk"}),"NLTK")," implementation"),Object(n.b)("li",{parentName:"ul"},"ROUGE (",Object(n.b)("a",r({parentName:"li"},{href:"https://www.aclweb.org/anthology/W04-1013"}),"Lin, 2004"),"): ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/Diego999/py-rouge"}),"py-rouge")," implementation"),Object(n.b)("li",{parentName:"ul"},"CIDEr (",Object(n.b)("a",r({parentName:"li"},{href:"https://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Vedantam_CIDEr_Consensus-Based_Image_2015_CVPR_paper.pdf"}),"Vedantam et al., 2015"),"): ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/tylin/coco-caption/tree/master/pycocoevalcap/cider"}),"pycocoevalcap")," implementation"),Object(n.b)("li",{parentName:"ul"},"WER (",Object(n.b)("a",r({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Word_error_rate%3E"}),"Word Error Rate"),")")),Object(n.b)("h2",{id:"embedding-based"},"Embedding-based"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"LASER (",Object(n.b)("a",r({parentName:"li"},{href:"https://arxiv.org/pdf/1812.10464.pdf"}),"Artetxe and Schwenk, 2018"),"): official ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/facebookresearch/LASER"}),"LASER")," implementation"),Object(n.b)("li",{parentName:"ul"},"BERTScore (",Object(n.b)("a",r({parentName:"li"},{href:"https://arxiv.org/pdf/1904.09675.pdf"}),"Zhang et al., 2019"),"): official ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/Tiiiger/bert_score"}),"BERTScore")," implementation")))}l.isMDXComponent=!0},158:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},c=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),b=o(a),m=n,h=b[c+"."+m]||b[m]||l[m]||i;return a?r.a.createElement(h,Object.assign({},{ref:t},p,{components:a})):r.a.createElement(h,Object.assign({},{ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:n,o[1]=c;for(var m=2;m<i;m++)o[m]=a[m];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);
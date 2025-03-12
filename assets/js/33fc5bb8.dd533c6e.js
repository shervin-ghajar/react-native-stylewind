"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[867],{2966:(e,t,a)=>{a.d(t,{A:()=>l});a(4344);var s=a(6777),n=a(4669),r=a(612);function l(e){let{items:t,component:a=n.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(s.in,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},3867:(e,t,a)=>{a.d(t,{A:()=>l});a(4344);var s=a(3189),n=a(4228),r=a(612);function l(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(n.A,{permalink:a,title:(0,r.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,r.jsx)(n.A,{permalink:l,title:(0,r.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},4228:(e,t,a)=>{a.d(t,{A:()=>l});a(4344);var s=a(1271),n=a(9513),r=a(612);function l(e){const{permalink:t,title:a,subLabel:l,isNext:i}=e;return(0,r.jsxs)(n.A,{className:(0,s.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},4669:(e,t,a)=>{a.d(t,{A:()=>C});a(4344);var s=a(1271),n=a(6777),r=a(612);function l(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var i=a(9513);const o={title:"title_Sto7"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,n.e7)(),{permalink:c,title:d}=a,g=l?"h1":"h2";return(0,r.jsx)(g,{className:(0,s.A)(o.title,t),children:l?d:(0,r.jsx)(i.A,{to:c,children:d})})}var d=a(3189),g=a(232),u=a(8975);const h={container:"container_sEU7"};function m(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,g.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,n.e7)(),{date:l,readingTime:i}=a,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.A)(h.container,"margin-vert--md",t),children:[(0,r.jsx)(p,{date:l,formattedDate:(c=l,o.format(new Date(c)))}),void 0!==i&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(m,{readingTime:i})]})]});var c}var b=a(5442);const A={authorCol:"authorCol_GzW5",imageOnlyAuthorRow:"imageOnlyAuthorRow_Zk8W",imageOnlyAuthorCol:"imageOnlyAuthorCol_pS6S"};function f(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,n.e7)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,r.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",i?A.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.A)(!i&&(o?"col col--12":"col col--6"),i?A.imageOnlyAuthorCol:A.authorCol),children:(0,r.jsx)(b.A,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(j,{}),(0,r.jsx)(f,{})]})}var N=a(1828),T=a(9822);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:l}=(0,n.e7)();return(0,r.jsx)("div",{id:l?N.LU:void 0,className:(0,s.A)("markdown",a),children:(0,r.jsx)(T.A,{children:t})})}var _=a(8446),P=a(6225),k=a(8185);function y(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function R(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(i.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(y,{})})}function U(){const{metadata:e,isBlogPostPage:t}=(0,n.e7)(),{tags:a,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,g=!t&&o,u=a.length>0;if(!(u||g||i))return null;if(t){const e=!!(i||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.A)("row","margin-top--sm",_.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(k.A,{tags:a})})}),e&&(0,r.jsx)(P.A,{className:(0,s.A)("margin-top--sm",_.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.A)("col",{"col--9":g}),children:(0,r.jsx)(k.A,{tags:a})}),g&&(0,r.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":u}),children:(0,r.jsx)(R,{blogPostTitle:l,to:e.permalink})})]})}function C(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,n.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(l,{className:(0,s.A)(i,a),children:[(0,r.jsx)(v,{}),(0,r.jsx)(w,{children:t}),(0,r.jsx)(U,{})]})}},7592:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});a(4344);var s=a(1271),n=a(3482),r=a(8446),l=a(8804),i=a(9513),o=a(6777),c=a(5614),d=a(3867),g=a(2241),u=a(2966),h=a(5442),m=a(612);function p(e){let{author:t}=e;const a=(0,l.wI)(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n.be,{title:a}),(0,m.jsx)(g.A,{tag:"blog_authors_posts"})]})}function x(){const{authorsListPath:e}=(0,o.x)();return(0,m.jsx)(i.A,{href:e,children:(0,m.jsx)(l.np,{})})}function j(e){let{author:t,items:a,sidebar:s,listMetadata:n}=e;return(0,m.jsxs)(c.A,{sidebar:s,children:[(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(h.A,{as:"h1",author:t}),t.description&&(0,m.jsx)("p",{children:t.description}),(0,m.jsx)(x,{})]}),0===a.length?(0,m.jsx)("p",{children:(0,m.jsx)(l.Y4,{})}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("hr",{}),(0,m.jsx)(u.A,{items:a}),(0,m.jsx)(d.A,{metadata:n})]})]})}function b(e){return(0,m.jsxs)(n.e3,{className:(0,s.A)(r.G.wrapper.blogPages,r.G.page.blogAuthorsPostsPage),children:[(0,m.jsx)(p,{...e}),(0,m.jsx)(j,{...e})]})}},8185:(e,t,a)=>{a.d(t,{A:()=>o});a(4344);var s=a(1271),n=a(3189),r=a(8949);const l={tags:"tags_ATHZ",tag:"tag__xSb"};var i=a(612);function o(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(r.A,{...e})},e.permalink)))})]})}},8804:(e,t,a)=>{a.d(t,{Y4:()=>g,ZD:()=>i,np:()=>d,uz:()=>c,wI:()=>o});a(4344);var s=a(3189),n=a(232),r=a(612);function l(){const{selectMessage:e}=(0,n.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function i(e){const t=l();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){const t=l();return(0,s.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const c=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,r.jsx)(s.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function g(){return(0,r.jsx)(s.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},8949:(e,t,a)=>{a.d(t,{A:()=>i});a(4344);var s=a(1271),n=a(9513);const r={tag:"tag_b3O8",tagRegular:"tagRegular_qwyN",tagWithCount:"tagWithCount_qgKF"};var l=a(612);function i(e){let{permalink:t,label:a,count:i,description:o}=e;return(0,l.jsxs)(n.A,{href:t,title:o,className:(0,s.A)(r.tag,i?r.tagWithCount:r.tagRegular),children:[a,i&&(0,l.jsx)("span",{children:i})]})}}}]);
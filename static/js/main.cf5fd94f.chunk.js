(this["webpackJsonpcrypto-ws"]=this["webpackJsonpcrypto-ws"]||[]).push([[0],{238:function(e,t,c){},313:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(26),i=c.n(s),a=c(68),u=c(317),o=c(316),b=c(114),l=c.n(b),j={getCurrencies:"https://api.exchange.bitcoin.com/api/2/public/ticker",websocket:"wss://api.exchange.bitcoin.com/api/2/ws/public"},h=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){fetch(j.getCurrencies).then((function(e){return e.json()})).then((function(e){return e.filter((function(e){return e.symbol.match(/\w+?USD/)}))})).then(r)}),[]),{currencies:c}},m=c(142),d=c.n(m),f=c(141),p=c.n(f),O=function(e){var t=p()(j.websocket,{onMessage:function(t){return e(JSON.parse(t.data))},share:!0}).sendJsonMessage;return{subscribe:Object(n.useCallback)((function(e){var c=e.ticker;t({method:"subscribeTicker",params:{symbol:c}})}),[t]),unsubscribe:Object(n.useCallback)((function(e){var c=e.ticker;t({method:"unsubscribeTicker",params:{symbol:c}})}),[t])}},k=c(32),x=Object(n.memo)((function(e){var t=e.id,c=Object(n.useState)(null),r=Object(a.a)(c,2),s=r[0],i=r[1],u=Object(n.useCallback)((function(e){"ticker"===e.method&&e.params.symbol===t&&i(e.params.last)}),[t]),o=O(u),b=o.subscribe,l=o.unsubscribe;return Object(n.useEffect)((function(){return b({ticker:t}),function(){return l({ticker:t})}}),[t,b,l]),s?"$"+s:Object(k.jsx)(d.a,{style:{width:100,height:16},size:"small",active:!0,shape:"round"})})),g=(c(238),c(239),function(){var e=Object(n.useState)(1),t=Object(a.a)(e,2),c=t[0],r=t[1],s=h().currencies,i=Object(n.useMemo)((function(){return{current:c,onChange:r,pageSize:10,size:"small",showSizeChanger:!1}}),[c]);return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(u.a.Title,{className:"header",children:"\u041a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u0432\u0430\u043b\u044e\u0442"}),Object(k.jsxs)(o.a,{dataSource:s,className:"currencies-table",pagination:i,rowKey:function(e){return e.symbol},children:[Object(k.jsx)(l.a,{title:"\u041a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u0430",render:function(e,t){return Object(k.jsx)(u.a.Text,{children:t.symbol.replace(/USD/,"")})},dataIndex:"id"},"name"),Object(k.jsx)(l.a,{title:"\u041a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0430 (USD)",render:function(e,t){return Object(k.jsx)(x,{id:t.symbol})}},"quotation")]})]})});i.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(g,{})}),document.getElementById("root"))}},[[313,1,2]]]);
//# sourceMappingURL=main.cf5fd94f.chunk.js.map
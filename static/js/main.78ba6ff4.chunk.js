(this["webpackJsonpweather-check"]=this["webpackJsonpweather-check"]||[]).push([[0],{38:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(14),o=c.n(r),s=c(3),i=c(4),j=c.n(i),u=c(0),b=function(e){var t=e.weatherProp;return console.log("weatherProp",t),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{children:["Temperature: ",t.main.temp]}),Object(u.jsxs)("p",{children:["Feels like: ",t.main.feels_like]}),Object(u.jsxs)("p",{children:["Humidity: ",t.main.humidity]}),Object(u.jsxs)("p",{children:["Pressure: ",t.main.pressure]})]})},l=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),o=Object(s.a)(r,2),i=o[0],l=o[1],p=Object(n.useState)({}),O=Object(s.a)(p,2),h=O[0],d=O[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j()("http://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&appid=").concat("8a711f92f9811ab059272b4607202f92","&units=metric")).then((function(e){d(e.data),l(!0)}))},children:[Object(u.jsx)("input",{type:"text",placeholder:"your city",value:c,onChange:function(e){return a(e.target.value)}}),Object(u.jsx)("button",{children:"ok"})]}),i&&Object(u.jsx)("p",{children:c}),i&&Object(u.jsx)(b,{weatherProp:h})]})},p=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),i=o[0],b=o[1],p=Object(n.useState)({}),O=Object(s.a)(p,2),h=O[0],d=O[1];return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=String(e.coords.latitude),c=String(e.coords.longitude);a(t),b(c)}))}),[]),Object(n.useEffect)((function(){c&&i&&j()("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(c,",").concat(i,"&key=").concat("AIzaSyAubfp1QYaJqBFGaBVr_PMOzjG70VrB9YU")).then((function(e){d(e)}))}),[c,i]),console.log("CL",h),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l,{})})};var O=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(p,{})})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.78ba6ff4.chunk.js.map
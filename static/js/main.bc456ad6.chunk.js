(this["webpackJsonpweather-check"]=this["webpackJsonpweather-check"]||[]).push([[0],{77:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(5),i=n.n(a),s=n(3),o=n(7),j=n(6),u=n.n(j),d="8a711f92f9811ab059272b4607202f92",l="AIzaSyAubfp1QYaJqBFGaBVr_PMOzjG70VrB9YU",h="https://api.openweathermap.org",b="https://maps.googleapis.com/maps/api/geocode",p=function(e){return u()("".concat(h,"/data/2.5/onecall?lat=").concat(e.lat,"&lon=").concat(e.lon,"&exclude=dayli&appid=").concat(d)).then((function(e){return e}))},O=n(8),f=n.n(O),m=n(1),x=273.15,g=function(e){var t=e.weatherProp,n=e.forecastProp;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Weather for search city:"}),Object(m.jsx)("p",{children:t.name}),Object(m.jsx)("h2",{children:"Todays weather"}),Object(m.jsxs)("p",{children:["Temperature: ",Math.round(t.main.temp)," \xb0C"]}),Object(m.jsxs)("p",{children:["Feels like: ",Math.round(t.main.feels_like)," \xb0C"]}),Object(m.jsxs)("p",{children:["Humidity: ",t.main.humidity," %"]}),Object(m.jsxs)("p",{children:["Pressure: ",t.main.pressure," mb"]}),Object(m.jsxs)("p",{children:["Description: ",t.weather[0].description]}),Object(m.jsx)("h1",{children:"Forecast"}),n.daily.map((function(e){var t=f()(Number("".concat(e.dt,"000"))).format("dddd D MMM");return Object(m.jsxs)("li",{children:[Object(m.jsxs)("p",{children:["day: ",t]}),Object(m.jsxs)("p",{children:["temperature: ",Math.round(e.temp.day-x)," \xb0C"]}),Object(m.jsxs)("p",{children:["feels like: ",Math.round(e.feels_like.day-x)," ","\xb0C"]}),Object(m.jsxs)("p",{children:["weather: ",e.weather[0].description]}),Object(m.jsxs)("p",{children:["wind speed: ",e.wind_speed," m/s"]})]},e.dt)}))]})},y=function(e){var t=e.type,n=e.message,c=void 0===n?"":n,r=e.title,a=void 0===r?"":r,i=e.timeOut,s=void 0===i?2e3:i,j=e.callback,u=void 0===j?function(){}:j,d=e.priority,l=void 0!==d&&d;return o.NotificationManager[t.toLowerCase()](c,a,s,u,l)},w=n(21),v=n(22),S=n(25),k=n(24),M=n(23),F=n.n(M),C=function(e){Object(S.a)(n,e);var t=Object(k.a)(n);function n(){return Object(w.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(m.jsx)(F.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80,timeout:3e3})}}]),n}(r.a.Component),P=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(s.a)(a,2),j=i[0],O=i[1],f=Object(c.useState)(!1),x=Object(s.a)(f,2),w=x[0],v=x[1],S=Object(c.useState)(!1),k=Object(s.a)(S,2),M=k[0],F=k[1],P=Object(c.useState)({}),_=Object(s.a)(P,2),B=_[0],D=_[1],E=Object(c.useState)({}),T=Object(s.a)(E,2),N=T[0],Y=T[1],J=Object(c.useState)({}),q=Object(s.a)(J,2),z=q[0],A=q[1];return Object(c.useEffect)((function(){z.lat&&z.lon&&p(z).then((function(e){Y(e.data),F(!0)}))}),[z]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(!0),function(e){return u.a.get("".concat(h,"/data/2.5/weather?q=").concat(e,"&appid=").concat(d,"&units=metric")).then((function(e){return e}))}(n).then((function(e){(function(e){return u()("".concat(b,"/json?address=").concat(e,"&key=").concat(l)).then((function(e){return e}))})(n).then((function(e){var t=e.data.results[0].geometry.location;A({lat:String(t.lat),lon:String(t.lng)})})),D(e.data),v(!0)})).catch((function(e){switch(e.response.status){case 404:y({type:"warning",message:"enter proper name of the city"});break;case 400:y({type:"warning",message:"enter the name of the city"});break;default:return}})),r("")},children:[Object(m.jsx)("input",{type:"text",placeholder:"your city",value:n,onChange:function(e){return r(e.target.value)}}),Object(m.jsx)("button",{children:"ok"})]}),j&&Object(m.jsx)(m.Fragment,{children:w&&M?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(g,{weatherProp:B,forecastProp:N})}):Object(m.jsx)(C,{})}),Object(m.jsx)(o.NotificationContainer,{})]})},_=273.15,B=function(e){var t=e.weatherProp,n=e.forecastProp;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:"Weather for your current location:"}),Object(m.jsx)("p",{children:t.name}),Object(m.jsx)("h2",{children:"Todays weather"}),Object(m.jsxs)("p",{children:["Temperature: ",Math.round(t.main.temp)," \xb0C"]}),Object(m.jsxs)("p",{children:["Feels like: ",Math.round(t.main.feels_like)," \xb0C"]}),Object(m.jsxs)("p",{children:["Humidity: ",t.main.humidity," %"]}),Object(m.jsxs)("p",{children:["Pressure: ",t.main.pressure," mb"]}),Object(m.jsxs)("p",{children:["Description: ",t.weather[0].description]}),Object(m.jsx)("h1",{children:"Forecast"}),n.daily.map((function(e){var t=f()(Number("".concat(e.dt,"000"))).format("dddd D MMM");return Object(m.jsxs)("li",{children:[Object(m.jsxs)("p",{children:["day: ",t]}),Object(m.jsxs)("p",{children:["temperature: ",Math.round(e.temp.day-_)," \xb0C"]}),Object(m.jsxs)("p",{children:["feels like: ",Math.round(e.feels_like.day-_)," ","\xb0C"]}),Object(m.jsxs)("p",{children:["weather: ",e.weather[0].description]}),Object(m.jsxs)("p",{children:["wind speed: ",e.wind_speed," m/s"]})]},e.dt)}))]})},D=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(s.a)(a,2),o=i[0],j=i[1],O=Object(c.useState)(!1),f=Object(s.a)(O,2),x=f[0],g=f[1],y=Object(c.useState)(!1),w=Object(s.a)(y,2),v=w[0],S=w[1],k=Object(c.useState)({}),M=Object(s.a)(k,2),F=M[0],_=M[1],D=Object(c.useState)(""),E=Object(s.a)(D,2),T=E[0],N=E[1],Y=Object(c.useState)({}),J=Object(s.a)(Y,2),q=J[0],z=J[1];return Object(c.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=String(e.coords.latitude),n=String(e.coords.longitude);r(t),j(n)}))}),[]),Object(c.useEffect)((function(){n&&o&&(function(e,t){return u()("".concat(b,"/json?latlng=").concat(e,",").concat(t,"&key=").concat(l)).then((function(e){return e}))}(n,o).then((function(e){N(e.data.results[0].address_components[3].long_name)})),p({lat:n,lon:o}).then((function(e){z(e.data),S(!0)})))}),[n,o]),Object(c.useEffect)((function(){var e,t;n&&o&&(e=n,t=o,u.a.get("".concat(h,"/data/2.5/weather?lat=").concat(e,"&lon=").concat(t,"&appid=").concat(d,"&units=metric")).then((function(e){return e.data}))).then((function(e){_(e),g(!0)}))}),[n,o]),Object(m.jsxs)(m.Fragment,{children:[!T&&Object(m.jsx)("p",{children:"Please allow Your current location for correct forecast"}),Object(m.jsxs)("p",{children:["Your current location: ",T]}),Object(m.jsx)(P,{}),x&&v?Object(m.jsx)(B,{weatherProp:F,forecastProp:q}):Object(m.jsx)(C,{})]})};var E=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(D,{})})};n(74),n(75);i.a.render(Object(m.jsx)(E,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.bc456ad6.chunk.js.map
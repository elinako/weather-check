(this["webpackJsonpweather-check"]=this["webpackJsonpweather-check"]||[]).push([[0],{12:function(e,t,a){e.exports={input:"SearchCityStyles_input__2WmdV",form:"SearchCityStyles_form__1OC1x",submitButton:"SearchCityStyles_submitButton__29D8N"}},28:function(e,t,a){e.exports={loader:"LoaderStyles_loader__4obYH"}},3:function(e,t,a){e.exports={headSearchTitle:"WeatherSearchCityStyles_headSearchTitle__gJC48",localSearchName:"WeatherSearchCityStyles_localSearchName__1IRls",titleSearchDiv:"WeatherSearchCityStyles_titleSearchDiv__avF0H",searchCityWrapper:"WeatherSearchCityStyles_searchCityWrapper__1qkvh",titleSection:"WeatherSearchCityStyles_titleSection__21fIP",searchCityContainer:"WeatherSearchCityStyles_searchCityContainer__15p_1",digits:"WeatherSearchCityStyles_digits__1FWcL",digitsWeather:"WeatherSearchCityStyles_digitsWeather__1ScZA",forecastContainer:"WeatherSearchCityStyles_forecastContainer__2Huic",dayName:"WeatherSearchCityStyles_dayName__ma8Ju",footer:"WeatherSearchCityStyles_footer__2EkIh",currentWeatherContainer:"WeatherSearchCityStyles_currentWeatherContainer__1eObN",forecastWrapper:"WeatherSearchCityStyles_forecastWrapper__1m5Kk"}},4:function(e,t,a){e.exports={headTitle:"WeatherCurrentStyles_headTitle__aLp-Y",localName:"WeatherCurrentStyles_localName__fIM60",titleDiv:"WeatherCurrentStyles_titleDiv__1pq4r",currentCityWrapper:"WeatherCurrentStyles_currentCityWrapper__1U2Ju",titleSection:"WeatherCurrentStyles_titleSection__23bE9",currentWeatherContainer:"WeatherCurrentStyles_currentWeatherContainer__SMZ3k",digits:"WeatherCurrentStyles_digits__2W3bS",digitsWeather:"WeatherCurrentStyles_digitsWeather__3SBoW",forecastContainer:"WeatherCurrentStyles_forecastContainer__1XFRG",dayName:"WeatherCurrentStyles_dayName__1A6Bz",forecastWrapper:"WeatherCurrentStyles_forecastWrapper__1AXuq"}},8:function(e,t,a){e.exports={locationNotific:"MainPageStyles_locationNotific__2CU56",title:"MainPageStyles_title__2kf2q",cityName:"MainPageStyles_cityName__Cyc0u",searchContainer:"MainPageStyles_searchContainer__g6B-T"}},82:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),s=a(7),n=a.n(s),i=a(5),l=a(10),o=a(9),h=a.n(o),d="b5f4af9bd0360f2f5e5a78c939e97323",j="AIzaSyAubfp1QYaJqBFGaBVr_PMOzjG70VrB9YU",u="https://api.openweathermap.org",p="https://maps.googleapis.com/maps/api/geocode",b=function(e){return h()("".concat(u,"/data/2.5/onecall?lat=").concat(e.lat,"&lon=").concat(e.lon,"&exclude=dayli&appid=").concat(d)).then((function(e){return e}))},m=a(11),O=a.n(m),_=a(3),f=a.n(_),y=a(0),x=273.15,S=function(e){var t=e.weatherProp,a=e.forecastProp;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:f.a.titleSearchDiv,children:Object(y.jsxs)("p",{className:f.a.headSearchTitle,children:["Weather for search city:",Object(y.jsx)("span",{className:f.a.localSearchName,children:t.name})]})}),Object(y.jsxs)("div",{className:f.a.searchCityWrapper,children:[Object(y.jsxs)("div",{className:f.a.searchCityContainer,children:[Object(y.jsx)("h2",{className:f.a.titleSection,children:"Todays weather"}),Object(y.jsxs)("p",{children:["Temperature:"," ",Object(y.jsxs)("span",{className:f.a.digits,children:[Math.round(t.main.temp)," \xb0C"]})]}),Object(y.jsxs)("p",{children:["Feels like:"," ",Object(y.jsxs)("span",{className:f.a.digits,children:[Math.round(t.main.feels_like)," \xb0C"]})]}),Object(y.jsxs)("p",{children:["Humidity:",Object(y.jsxs)("span",{className:f.a.digits,children:[" ",t.main.humidity," %"]})]}),Object(y.jsxs)("p",{children:["Pressure:",Object(y.jsxs)("span",{className:f.a.digits,children:[" ",t.main.pressure," mb"]})]}),Object(y.jsxs)("p",{children:["Description:",Object(y.jsxs)("span",{className:f.a.digits,children:[" ",t.weather[0].description]})]})]}),Object(y.jsxs)("div",{className:f.a.forecastWrapper,children:[Object(y.jsx)("h2",{className:f.a.titleSection,children:"Forecast"}),Object(y.jsx)("div",{className:f.a.forecastContainer,children:a.daily.map((function(e){var t=O()(Number("".concat(e.dt,"000"))).format("dddd D MMM");return Object(y.jsxs)("li",{children:[Object(y.jsx)("span",{className:f.a.dayName,children:t}),Object(y.jsxs)("p",{children:["temperature:"," ",Object(y.jsxs)("span",{className:f.a.digits,children:[Math.round(e.temp.day-x)," \xb0C"]})]}),Object(y.jsxs)("p",{children:["feels like:"," ",Object(y.jsxs)("span",{className:f.a.digits,children:[Math.round(e.feels_like.day-x)," \xb0C"]})]}),Object(y.jsxs)("p",{children:["weather:",Object(y.jsxs)("span",{className:f.a.digitsWeather,children:[" ",e.weather[0].description]})]}),Object(y.jsxs)("p",{children:["wind speed:",Object(y.jsxs)("span",{className:f.a.digits,children:[" ",e.wind_speed," m/s"]})]})]},e.dt)}))})]})]}),Object(y.jsx)("div",{className:f.a.footer,children:"apr 2021"})]})},N=function(e){var t=e.type,a=e.message,c=void 0===a?"":a,r=e.title,s=void 0===r?"":r,n=e.timeOut,i=void 0===n?2e3:n,o=e.callback,h=void 0===o?function(){}:o,d=e.priority,j=void 0!==d&&d;return l.NotificationManager[t.toLowerCase()](c,s,i,h,j)},C=a(25),g=a(26),W=a(30),v=a(29),w=a(27),k=a.n(w),M=a(28),F=a.n(M),P=function(e){Object(W.a)(a,e);var t=Object(v.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(y.jsx)(k.a,{className:F.a.loader,type:"TailSpin",color:"#00BFFF",height:80,width:80,timeout:3e3})}}]),a}(r.a.Component),D=a(12),T=a.n(D),B=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(!1),n=Object(i.a)(s,2),o=n[0],m=n[1],O=Object(c.useState)(!1),_=Object(i.a)(O,2),f=_[0],x=_[1],C=Object(c.useState)(!1),g=Object(i.a)(C,2),W=g[0],v=g[1],w=Object(c.useState)({}),k=Object(i.a)(w,2),M=k[0],F=k[1],D=Object(c.useState)({}),B=Object(i.a)(D,2),E=B[0],Y=B[1],q=Object(c.useState)({}),I=Object(i.a)(q,2),J=I[0],A=I[1];return Object(c.useEffect)((function(){J.lat&&J.lon&&b(J).then((function(e){Y(e.data),v(!0)}))}),[J]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(!0),function(e){return h.a.get("".concat(u,"/data/2.5/weather?q=").concat(e,"&appid=").concat(d,"&units=metric")).then((function(e){return e}))}(a).then((function(e){(function(e){return h()("".concat(p,"/json?address=").concat(e,"&key=").concat(j)).then((function(e){return e}))})(a).then((function(e){var t=e.data.results[0].geometry.location;A({lat:String(t.lat),lon:String(t.lng)})})),F(e.data),x(!0)})).catch((function(e){switch(e.response.status){case 404:N({type:"warning",message:"enter proper name of the city"});break;case 400:N({type:"warning",message:"enter the name of the city"});break;default:return}})),r("")},className:T.a.form,children:[Object(y.jsx)("input",{className:T.a.input,type:"text",placeholder:"please enter city name",value:a,onChange:function(e){return r(e.target.value)}}),Object(y.jsx)("button",{className:T.a.submitButton,children:"OK"})]}),o&&Object(y.jsx)(y.Fragment,{children:f&&W?Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(S,{weatherProp:M,forecastProp:E})}):Object(y.jsx)(P,{})}),Object(y.jsx)(l.NotificationContainer,{})]})},E=a(4),Y=a.n(E),q=273.15,I=function(e){var t=e.weatherProp,a=e.forecastProp;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:Y.a.titleDiv,children:Object(y.jsxs)("p",{className:Y.a.headTitle,children:["Weather for your current location:"," ",Object(y.jsx)("span",{className:Y.a.localName,children:t.name})]})}),Object(y.jsxs)("div",{className:Y.a.currentCityWrapper,children:[Object(y.jsxs)("div",{className:Y.a.currentWeatherContainer,children:[Object(y.jsx)("h2",{className:Y.a.titleSection,children:"Todays weather"}),Object(y.jsxs)("p",{children:["Temperature:",Object(y.jsxs)("span",{className:Y.a.digits,children:[" ",Math.round(t.main.temp)," \xb0"," "]})]}),Object(y.jsxs)("p",{children:["Feels like:",Object(y.jsxs)("span",{className:Y.a.digits,children:[" ",Math.round(t.main.feels_like)," \xb0C"," "]})]}),Object(y.jsxs)("p",{children:["Humidity:"," ",Object(y.jsxs)("span",{className:Y.a.digits,children:[t.main.humidity," %"]})]}),Object(y.jsxs)("p",{children:["Pressure:",Object(y.jsxs)("span",{className:Y.a.digits,children:[t.main.pressure," mb"]})]}),Object(y.jsxs)("p",{children:["Description:",Object(y.jsxs)("span",{className:Y.a.digits,children:[" ",t.weather[0].description]})]})]}),Object(y.jsxs)("div",{className:Y.a.forecastWrapper,children:[Object(y.jsx)("h2",{className:Y.a.titleSection,children:"Forecast"}),Object(y.jsx)("div",{className:Y.a.forecastContainer,children:a.daily.map((function(e){var t=O()(Number("".concat(e.dt,"000"))).format("dddd D MMM");return Object(y.jsxs)("li",{children:[Object(y.jsx)("p",{children:Object(y.jsx)("span",{className:Y.a.dayName,children:t})}),Object(y.jsxs)("p",{children:["temperature:",Object(y.jsxs)("span",{className:Y.a.digits,children:[Math.round(e.temp.day-q),"\xb0C"]})]}),Object(y.jsxs)("p",{children:["feels like:",Object(y.jsxs)("span",{className:Y.a.digits,children:[Math.round(e.feels_like.day-q)," \xb0C"]})]}),Object(y.jsxs)("p",{children:["weather:"," ",Object(y.jsxs)("span",{className:Y.a.digitsWeather,children:[e.weather[0].description," "]})," "]}),Object(y.jsxs)("p",{children:["wind speed:"," ",Object(y.jsxs)("span",{className:Y.a.digits,children:[" ",e.wind_speed," m/s"," "]})]})]},e.dt)}))})]})]})]})},J=a(8),A=a.n(J),H=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(""),n=Object(i.a)(s,2),l=n[0],o=n[1],m=Object(c.useState)(!1),O=Object(i.a)(m,2),_=O[0],f=O[1],x=Object(c.useState)(!1),S=Object(i.a)(x,2),N=S[0],C=S[1],g=Object(c.useState)({}),W=Object(i.a)(g,2),v=W[0],w=W[1],k=Object(c.useState)(""),M=Object(i.a)(k,2),F=M[0],D=M[1],T=Object(c.useState)({}),E=Object(i.a)(T,2),Y=E[0],q=E[1];return Object(c.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=String(e.coords.latitude),a=String(e.coords.longitude);r(t),o(a)}))}),[]),Object(c.useEffect)((function(){a&&l&&(function(e,t){return h()("".concat(p,"/json?latlng=").concat(e,",").concat(t,"&key=").concat(j)).then((function(e){return e}))}(a,l).then((function(e){D(e.data.results[0].address_components[3].long_name)})),b({lat:a,lon:l}).then((function(e){q(e.data),C(!0)})))}),[a,l]),Object(c.useEffect)((function(){var e,t;a&&l&&(e=a,t=l,h.a.get("".concat(u,"/data/2.5/weather?lat=").concat(e,"&lon=").concat(t,"&appid=").concat(d,"&units=metric")).then((function(e){return e.data}))).then((function(e){w(e),f(!0)}))}),[a,l]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("h2",{className:A.a.title,children:["Weather ",Object(y.jsx)("span",{})," Check"]}),!F&&Object(y.jsx)("p",{className:A.a.locationNotific,children:"Please allow Your current location for correct forecast"}),F&&Object(y.jsxs)("h3",{className:A.a.cityName,children:["Your current location: ",F]}),_&&N?Object(y.jsx)(I,{className:A.a.weatherCardCurrent,weatherProp:v,forecastProp:Y}):Object(y.jsx)(P,{className:A.a.loader}),Object(y.jsxs)("div",{className:A.a.searchContainer,children:[Object(y.jsx)("p",{children:"You can search for the weather in any city:"}),Object(y.jsx)(B,{})]})]})};var L=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(H,{})})};a(79),a(80);n.a.render(Object(y.jsx)(L,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.6d4d7a00.chunk.js.map
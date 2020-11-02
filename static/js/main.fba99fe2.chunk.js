(this["webpackJsonpstrava-club-challenge"]=this["webpackJsonpstrava-club-challenge"]||[]).push([[0],{11:function(t,e,a){t.exports=a(19)},16:function(t,e,a){},17:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var i,d=a(0),n=a.n(d),r=a(9),s=a.n(r),l=(a(16),a(10)),c=(a(17),a(4)),u=a(1),o=a(6);!function(t){t[t.ascending=0]="ascending",t[t.descending=1]="descending"}(i||(i={}));var m=function(t){var e=t.startOrder,a=t.onToggle,r=t.children,s=Object(d.useState)(e||i.descending),l=Object(o.a)(s,2),c=l[0],u=l[1];return n.a.createElement("span",{className:"table-header-filter",onClick:function(){a&&a(c);var t=c===i.ascending?i.descending:i.ascending;u(t)}},r," \u25be")},_=a(2),h=a.n(_),p=(a(8),function(t){var e=t.athletes;function a(t){return 0!==t?"".concat(t/1e3):""}return n.a.createElement(n.a.Fragment,null,e.map((function(t,e){return n.a.createElement("tr",{key:t.id},n.a.createElement("td",null,t.name),n.a.createElement("td",null,function(t){var e=t.split(":")[0],a=t.split(":")[1],i=t.split(":")[2];return h.a.duration({seconds:parseInt(i),minutes:parseInt(a),hours:parseInt(e)}).format("h[h] m[m] s[s]")}(t.distance_this_week.total_time)),n.a.createElement("td",null,a(t.distance_this_week.run)),n.a.createElement("td",null,a(t.distance_this_week.bike)),n.a.createElement("td",null,a(t.distance_this_week.others)),n.a.createElement("td",null,t.can_participate?n.a.createElement("span",{style:{color:"green"}},"\u2713"):"Not yet"))})))});function y(t){var e=t.athletes,a=Object(d.useState)(e),r=Object(o.a)(a,2),s=r[0],l=r[1],c=Object(d.useCallback)((function(t){var a=e.sort((function(e,a){var d=e.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase(),n=a.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();if(t===i.ascending){if(d>n)return 1;if(d<n)return-1}if(t===i.descending){if(d<n)return 1;if(d>n)return-1}return 0}));l(Object(u.a)(a))}),[e]);return Object(d.useEffect)((function(){c(i.ascending)}),[c]),n.a.createElement(n.a.Fragment,null,n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement(m,{onToggle:c},"Name")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var a=e.sort((function(e,a){var d=e.distance_this_week.total_time,n=a.distance_this_week.total_time,r=d.split(":")[0],s=d.split(":")[1],l=d.split(":")[2],c=n.split(":")[0],u=n.split(":")[1],o=n.split(":")[2],m=h.a.duration({seconds:parseInt(l),minutes:parseInt(s),hours:parseInt(r)}),_=h.a.duration({seconds:parseInt(o),minutes:parseInt(u),hours:parseInt(c)});if(t===i.ascending){if(m>_)return 1;if(m<_)return-1}if(t===i.descending){if(m<_)return 1;if(m>_)return-1}return 0}));l(Object(u.a)(a))}},"Total time")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var a=e.sort((function(e,a){var d=e.distance_this_week.run,n=a.distance_this_week.run;if(t===i.ascending){if(d>n)return 1;if(d<n)return-1}if(t===i.descending){if(d<n)return 1;if(d>n)return-1}return 0}));l(Object(u.a)(a))}},"Run distance (km)")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var a=e.sort((function(e,a){var d=e.distance_this_week.bike,n=a.distance_this_week.bike;if(t===i.ascending){if(d>n)return 1;if(d<n)return-1}if(t===i.descending){if(d<n)return 1;if(d>n)return-1}return 0}));l(Object(u.a)(a))}},"Bike distance (km)")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var a=e.sort((function(e,a){var d=e.distance_this_week.others,n=a.distance_this_week.others;if(t===i.ascending){if(d>n)return 1;if(d<n)return-1}if(t===i.descending){if(d<n)return 1;if(d>n)return-1}return 0}));l(Object(u.a)(a))}},"Other distance (km)")),n.a.createElement("th",null,n.a.createElement(m,{startOrder:i.ascending,onToggle:function(t){var a=e.sort((function(e,a){if(t===i.ascending){if(e.can_participate)return-1;if(a.can_participate)return 1}if(t===i.descending){if(e.can_participate)return 1;if(a.can_participate)return-1}return 0}));l(Object(u.a)(a))}},"Is eligible?")))),n.a.createElement("tbody",null,n.a.createElement(p,{athletes:s}))))}var k=function(){var t=c.athletes,e=c.date_from,a=c.date_to,i=c.last_updated;return n.a.createElement("div",{className:"app container"},n.a.createElement("h5",{className:"header-last_updated"},"Last updated: ",i&&n.a.createElement(l.a,{datetime:i,locale:"fr_CA"})),n.a.createElement("h1",{className:"header-title"},"nventive Strava Challenge"),n.a.createElement("blockquote",null,n.a.createElement("p",null,n.a.createElement("em",null,"To be eligible for the weekly draw, a participant must, at least, do 3 hours and 30 min of physical activity."))),n.a.createElement("p",{style:{marginBottom:"1rem"}},n.a.createElement("b",null,e)," to ",n.a.createElement("b",null,a)),n.a.createElement("div",{className:"table"},n.a.createElement(y,{athletes:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},4:function(t){t.exports=JSON.parse('{"athletes":[{"id":"14753279","name":"Bernard Chhun","activities":[{"id":"4275682366","athlete_id":"14753279","datetime":"2020-11-02 12:54:36","distance":1570,"duration":"0:22:08","type":"unknown"},{"id":"4266974335","athlete_id":"14753279","datetime":"2020-10-31 14:06:46","distance":0,"duration":"1:02:00","type":"unknown"},{"id":"4261949694","athlete_id":"14753279","datetime":"2020-10-30 11:53:28","distance":1950,"duration":"0:27:09","type":"unknown"},{"id":"4258184790","athlete_id":"14753279","datetime":"2020-10-29 11:56:08","distance":1620,"duration":"0:22:10","type":"unknown"},{"id":"4253996405","athlete_id":"14753279","datetime":"2020-10-28 11:55:17","distance":1710,"duration":"0:21:51","type":"unknown"},{"id":"4252155748","athlete_id":"14753279","datetime":"2020-10-27 22:37:37","distance":0,"duration":"0:31:14","type":"unknown"},{"id":"4249639330","athlete_id":"14753279","datetime":"2020-10-27 11:54:02","distance":1930,"duration":"0:24:45","type":"unknown"},{"id":"4245617388","athlete_id":"14753279","datetime":"2020-10-26 11:54:59","distance":1610,"duration":"0:21:37","type":"unknown"},{"id":"4244149712","athlete_id":"14753279","datetime":"2020-10-25 22:41:21","distance":0,"duration":"0:17:25","type":"unknown"},{"id":"4243858320","athlete_id":"14753279","datetime":"2020-10-25 16:37:58","distance":1800,"duration":"0:25:27","type":"unknown"},{"id":"4237579128","athlete_id":"14753279","datetime":"2020-10-24 14:08:56","distance":0,"duration":"1:26:00","type":"unknown"},{"id":"4234611306","athlete_id":"14753279","datetime":"2020-10-23 23:25:45","distance":0,"duration":"0:27:11","type":"unknown"},{"id":"4233965660","athlete_id":"14753279","datetime":"2020-10-23 19:04:13","distance":1000,"duration":"0:13:40","type":"unknown"},{"id":"4233506201","athlete_id":"14753279","datetime":"2020-10-23 16:44:48","distance":3100,"duration":"0:17:03","type":"unknown"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":8820,"total_time":"3:30:46"},"can_participate":true},{"id":"53857703","name":"Yves Prince","activities":[{"id":"4274101948","athlete_id":"53857703","datetime":"2020-11-02 00:08:20","distance":2440,"duration":"0:28:27","type":"run"},{"id":"4269133753","athlete_id":"53857703","datetime":"2020-11-01 00:32:52","distance":1130,"duration":"0:12:40","type":"run"},{"id":"4264172842","athlete_id":"53857703","datetime":"2020-10-30 23:12:39","distance":1630,"duration":"0:19:03","type":"run"},{"id":"4260453274","athlete_id":"53857703","datetime":"2020-10-29 23:08:08","distance":1600,"duration":"0:19:13","type":"run"},{"id":"4256522778","athlete_id":"53857703","datetime":"2020-10-28 22:34:28","distance":2260,"duration":"0:26:39","type":"run"},{"id":"4252365527","athlete_id":"53857703","datetime":"2020-10-27 22:36:21","distance":1870,"duration":"0:20:42","type":"run"},{"id":"4248076034","athlete_id":"53857703","datetime":"2020-10-26 22:29:00","distance":1790,"duration":"0:19:00","type":"run"},{"id":"4244248325","athlete_id":"53857703","datetime":"2020-10-25 23:10:54","distance":1310,"duration":"0:14:14","type":"run"},{"id":"4238822348","athlete_id":"53857703","datetime":"2020-10-24 20:34:50","distance":2350,"duration":"0:26:49","type":"run"},{"id":"4234939393","athlete_id":"53857703","datetime":"2020-10-24 01:04:11","distance":2450,"duration":"0:26:41","type":"run"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":10280,"bike":0,"others":0,"total_time":"1:57:17"},"can_participate":false},{"id":"34665862","name":"William-Jos\xe9 Simard-Touzet","activities":[{"id":"4273679892","athlete_id":"34665862","datetime":"2020-11-01 21:07:10","distance":2850,"duration":"0:41:55","type":"walk"},{"id":"4260546924","athlete_id":"34665862","datetime":"2020-10-29 23:36:58","distance":3830,"duration":"0:49:08","type":"walk"},{"id":"4252390981","athlete_id":"34665862","datetime":"2020-10-27 23:31:30","distance":3970,"duration":"0:51:57","type":"walk"},{"id":"4238806106","athlete_id":"34665862","datetime":"2020-10-24 20:43:50","distance":0,"duration":"0:35:00","type":"walk"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":10650,"total_time":"2:23:00"},"can_participate":false},{"id":"55385678","name":"Quentin Auvray","activities":[{"id":"4273616794","athlete_id":"55385678","datetime":"2020-11-01 17:38:49","distance":7310,"duration":"1:36:00","type":"walk"},{"id":"4268670049","athlete_id":"55385678","datetime":"2020-10-31 20:09:29","distance":0,"duration":"1:35:00","type":"workout"},{"id":"4263901680","athlete_id":"55385678","datetime":"2020-10-30 20:23:49","distance":0,"duration":"1:59:00","type":"workout"},{"id":"4263914929","athlete_id":"55385678","datetime":"2020-10-30 19:46:55","distance":0,"duration":"0:15:00","type":"walk"},{"id":"4256459523","athlete_id":"55385678","datetime":"2020-10-28 21:38:23","distance":0,"duration":"1:43:00","type":"workout"},{"id":"4255988391","athlete_id":"55385678","datetime":"2020-10-28 19:49:13","distance":0,"duration":"0:12:00","type":"walk"},{"id":"4255992715","athlete_id":"55385678","datetime":"2020-10-27 22:17:36","distance":0,"duration":"0:14:00","type":"walk"},{"id":"4238966335","athlete_id":"55385678","datetime":"2020-10-24 20:27:52","distance":0,"duration":"1:52:00","type":"workout"},{"id":"4238611999","athlete_id":"55385678","datetime":"2020-10-24 18:05:52","distance":5550,"duration":"1:06:00","type":"walk"},{"id":"4234546118","athlete_id":"55385678","datetime":"2020-10-23 21:00:54","distance":0,"duration":"2:24:00","type":"workout"},{"id":"4234578198","athlete_id":"55385678","datetime":"2020-10-23 16:39:11","distance":0,"duration":"0:12:00","type":"walk"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":7310,"total_time":"7:34:00"},"can_participate":true},{"id":"30050927","name":"David .","activities":[{"id":"4273403942","athlete_id":"30050927","datetime":"2020-11-01 19:51:10","distance":3020,"duration":"0:30:12","type":"walk"},{"id":"4272369569","athlete_id":"30050927","datetime":"2020-11-01 15:52:57","distance":2000,"duration":"0:22:31","type":"walk"},{"id":"4272225732","athlete_id":"30050927","datetime":"2020-11-01 15:13:36","distance":2860,"duration":"0:33:57","type":"walk"},{"id":"4268341534","athlete_id":"30050927","datetime":"2020-10-31 18:53:09","distance":5970,"duration":"1:01:00","type":"walk"},{"id":"4263367401","athlete_id":"30050927","datetime":"2020-10-30 18:20:21","distance":4470,"duration":"0:43:44","type":"walk"},{"id":"4259698053","athlete_id":"30050927","datetime":"2020-10-29 18:04:03","distance":9350,"duration":"1:36:00","type":"walk"},{"id":"4252026184","athlete_id":"30050927","datetime":"2020-10-27 19:43:10","distance":25770,"duration":"0:50:05","type":"bike"},{"id":"4243627910","athlete_id":"30050927","datetime":"2020-10-25 19:15:31","distance":2840,"duration":"0:28:51","type":"walk"},{"id":"4242274897","athlete_id":"30050927","datetime":"2020-10-25 14:36:38","distance":1890,"duration":"0:17:52","type":"walk"},{"id":"4241993430","athlete_id":"30050927","datetime":"2020-10-25 13:47:03","distance":1870,"duration":"0:18:24","type":"walk"},{"id":"4235106892","athlete_id":"30050927","datetime":"2020-10-24 04:39:30","distance":320,"duration":"0:03:18","type":"run"},{"id":"4235106796","athlete_id":"30050927","datetime":"2020-10-24 04:26:16","distance":130,"duration":"0:01:23","type":"run"},{"id":"4235045894","athlete_id":"30050927","datetime":"2020-10-24 03:44:23","distance":500,"duration":"0:04:58","type":"run"},{"id":"4235037449","athlete_id":"30050927","datetime":"2020-10-24 03:38:55","distance":340,"duration":"0:02:58","type":"run"},{"id":"4233976958","athlete_id":"30050927","datetime":"2020-10-23 18:33:22","distance":25950,"duration":"0:50:11","type":"bike"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":25770,"others":27670,"total_time":"5:37:29"},"can_participate":true},{"id":"57495632","name":"Elisabeth Dupuis","activities":[{"id":"4273351017","athlete_id":"57495632","datetime":"2020-11-01 19:25:25","distance":5970,"duration":"0:38:29","type":"unknown"},{"id":"4273174504","athlete_id":"57495632","datetime":"2020-11-01 18:05:14","distance":2620,"duration":"0:57:04","type":"unknown"},{"id":"4238626444","athlete_id":"57495632","datetime":"2020-10-24 19:32:26","distance":2730,"duration":"0:25:28","type":"unknown"},{"id":"4238499521","athlete_id":"57495632","datetime":"2020-10-24 18:12:39","distance":2700,"duration":"0:59:03","type":"unknown"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":8590,"total_time":"1:35:33"},"can_participate":false},{"id":"6063898","name":"Max Cantin","activities":[{"id":"4273171710","athlete_id":"6063898","datetime":"2020-11-01 18:26:32","distance":3660,"duration":"0:23:59","type":"run"},{"id":"4273136299","athlete_id":"6063898","datetime":"2020-11-01 17:00:35","distance":3000,"duration":"0:35:00","type":"walk"},{"id":"4267736812","athlete_id":"6063898","datetime":"2020-10-31 15:21:43","distance":62980,"duration":"1:53:00","type":"unknown"},{"id":"4256160720","athlete_id":"6063898","datetime":"2020-10-28 20:51:49","distance":30630,"duration":"0:53:20","type":"unknown"},{"id":"4238539497","athlete_id":"6063898","datetime":"2020-10-24 18:11:18","distance":39290,"duration":"1:19:00","type":"bike"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":3660,"bike":0,"others":96610,"total_time":"3:45:19"},"can_participate":true},{"id":"55618908","name":"Jesse Sopel","activities":[{"id":"4272455771","athlete_id":"55618908","datetime":"2020-11-01 16:02:08","distance":1490,"duration":"0:19:12","type":"walk"},{"id":"4272458109","athlete_id":"55618908","datetime":"2020-11-01 14:00:17","distance":0,"duration":"1:30:00","type":"unknown"},{"id":"4268234375","athlete_id":"55618908","datetime":"2020-10-31 18:55:35","distance":1990,"duration":"0:25:21","type":"walk"},{"id":"4263582534","athlete_id":"55618908","datetime":"2020-10-30 19:59:29","distance":1800,"duration":"0:20:39","type":"walk"},{"id":"4260294052","athlete_id":"55618908","datetime":"2020-10-29 19:15:43","distance":0,"duration":"1:30:00","type":"unknown"},{"id":"4255946667","athlete_id":"55618908","datetime":"2020-10-28 20:30:49","distance":1330,"duration":"0:16:19","type":"walk"},{"id":"4252459624","athlete_id":"55618908","datetime":"2020-10-27 19:20:00","distance":0,"duration":"1:30:00","type":"unknown"},{"id":"4247373668","athlete_id":"55618908","datetime":"2020-10-26 20:17:07","distance":740,"duration":"0:10:40","type":"walk"},{"id":"4243591851","athlete_id":"55618908","datetime":"2020-10-25 19:08:16","distance":1790,"duration":"0:22:22","type":"walk"},{"id":"4234271026","athlete_id":"55618908","datetime":"2020-10-23 21:19:09","distance":1310,"duration":"0:15:04","type":"walk"},{"id":"4234272588","athlete_id":"55618908","datetime":"2020-10-23 19:30:29","distance":0,"duration":"1:30:00","type":"unknown"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":7350,"total_time":"6:02:11"},"can_participate":true},{"id":"53741353","name":"Virginie jacques nadeau","activities":[{"id":"4268892249","athlete_id":"53741353","datetime":"2020-10-31 19:43:30","distance":7670,"duration":"1:51:00","type":"walk"},{"id":"4263881377","athlete_id":"53741353","datetime":"2020-10-30 18:40:27","distance":11520,"duration":"2:42:00","type":"walk"},{"id":"4260346101","athlete_id":"53741353","datetime":"2020-10-29 22:05:48","distance":4570,"duration":"0:54:10","type":"walk"},{"id":"4252064124","athlete_id":"53741353","datetime":"2020-10-27 22:06:38","distance":2430,"duration":"0:31:37","type":"walk"},{"id":"4247791235","athlete_id":"53741353","datetime":"2020-10-26 21:28:52","distance":3250,"duration":"0:36:43","type":"walk"},{"id":"4243917218","athlete_id":"53741353","datetime":"2020-10-25 18:01:28","distance":7420,"duration":"1:34:00","type":"walk"},{"id":"4239188346","athlete_id":"53741353","datetime":"2020-10-24 19:47:58","distance":10130,"duration":"1:44:00","type":"walk"},{"id":"4234288997","athlete_id":"53741353","datetime":"2020-10-23 19:16:36","distance":8000,"duration":"1:50:00","type":"walk"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":29440,"total_time":"6:35:30"},"can_participate":true},{"id":"63991138","name":"Janet Fan","activities":[{"id":"4268656262","athlete_id":"63991138","datetime":"2020-10-31 20:22:16","distance":3430,"duration":"0:41:16","type":"walk"},{"id":"4264009507","athlete_id":"63991138","datetime":"2020-10-30 20:52:05","distance":3480,"duration":"0:45:08","type":"walk"},{"id":"4260732689","athlete_id":"63991138","datetime":"2020-10-30 01:40:09","distance":1010,"duration":"0:12:31","type":"walk"},{"id":"4256990782","athlete_id":"63991138","datetime":"2020-10-29 03:01:04","distance":1400,"duration":"0:15:22","type":"walk"},{"id":"4256559792","athlete_id":"63991138","datetime":"2020-10-28 23:39:44","distance":0,"duration":"0:15:00","type":"walk"},{"id":"4256557286","athlete_id":"63991138","datetime":"2020-10-28 22:22:38","distance":1270,"duration":"0:15:18","type":"walk"},{"id":"4252692880","athlete_id":"63991138","datetime":"2020-10-28 02:22:36","distance":0,"duration":"0:15:00","type":"walk"},{"id":"4252047398","athlete_id":"63991138","datetime":"2020-10-27 19:36:53","distance":3590,"duration":"0:42:46","type":"walk"},{"id":"4248017843","athlete_id":"63991138","datetime":"2020-10-26 23:02:53","distance":2440,"duration":"0:30:08","type":"walk"},{"id":"4244300279","athlete_id":"63991138","datetime":"2020-10-25 18:26:04","distance":9730,"duration":"1:12:00","type":"walk"},{"id":"4243368107","athlete_id":"63991138","datetime":"2020-10-25 18:05:33","distance":0,"duration":"0:20:00","type":"walk"},{"id":"4238948960","athlete_id":"63991138","datetime":"2020-10-24 21:09:44","distance":2530,"duration":"0:40:18","type":"walk"},{"id":"4234631560","athlete_id":"63991138","datetime":"2020-10-23 23:26:58","distance":1390,"duration":"0:16:31","type":"walk"},{"id":"4234414135","athlete_id":"63991138","datetime":"2020-10-23 21:00:17","distance":4610,"duration":"0:57:32","type":"walk"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":16620,"total_time":"3:52:29"},"can_participate":true},{"id":"33346446","name":"Laura C\xf4t\xe9","activities":[{"id":"4267885026","athlete_id":"33346446","datetime":"2020-10-31 16:48:06","distance":33500,"duration":"1:01:00","type":"unknown"},{"id":"4256130063","athlete_id":"33346446","datetime":"2020-10-28 20:46:20","distance":33410,"duration":"0:59:24","type":"unknown"},{"id":"4238342412","athlete_id":"33346446","datetime":"2020-10-24 17:23:37","distance":32180,"duration":"1:00:00","type":"unknown"},{"id":"4234319294","athlete_id":"33346446","datetime":"2020-10-23 20:58:47","distance":27920,"duration":"0:58:02","type":"unknown"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":66910,"total_time":"2:00:24"},"can_participate":false},{"id":"18551446","name":"JM L","activities":[{"id":"4267720793","athlete_id":"18551446","datetime":"2020-10-31 16:34:12","distance":3520,"duration":"0:25:30","type":"unknown"},{"id":"4246432053","athlete_id":"18551446","datetime":"2020-10-26 15:50:05","distance":16330,"duration":"0:35:06","type":"unknown"},{"id":"4236808532","athlete_id":"18551446","datetime":"2020-10-24 12:46:07","distance":10920,"duration":"0:26:09","type":"unknown"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":19850,"total_time":"1:00:36"},"can_participate":false},{"id":"54439103","name":"Julie Lortie-Pelletier","activities":[{"id":"4267502272","athlete_id":"54439103","datetime":"2020-10-31 15:23:52","distance":5210,"duration":"1:04:00","type":"walk"},{"id":"4267504010","athlete_id":"54439103","datetime":"2020-10-30 19:45:00","distance":0,"duration":"0:20:01","type":"run"},{"id":"4259092374","athlete_id":"54439103","datetime":"2020-10-29 16:34:12","distance":1370,"duration":"0:16:57","type":"walk"},{"id":"4256836207","athlete_id":"54439103","datetime":"2020-10-29 00:05:06","distance":3380,"duration":"0:46:01","type":"walk"},{"id":"4242594956","athlete_id":"54439103","datetime":"2020-10-25 14:34:55","distance":5320,"duration":"1:10:00","type":"walk"},{"id":"4241148189","athlete_id":"54439103","datetime":"2020-10-24 19:30:00","distance":0,"duration":"0:20:00","type":"walk"},{"id":"4237902664","athlete_id":"54439103","datetime":"2020-10-24 15:44:03","distance":3780,"duration":"0:49:56","type":"walk"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":9960,"total_time":"2:26:59"},"can_participate":false},{"id":"5493967","name":"Rene Charbonneau","activities":[{"id":"4267000780","athlete_id":"5493967","datetime":"2020-10-31 14:34:45","distance":6380,"duration":"0:35:35","type":"run"},{"id":"4260233126","athlete_id":"5493967","datetime":"2020-10-29 21:48:49","distance":7130,"duration":"0:41:22","type":"run"},{"id":"4250620664","athlete_id":"5493967","datetime":"2020-10-27 16:12:42","distance":5630,"duration":"0:35:13","type":"run"},{"id":"4243078891","athlete_id":"5493967","datetime":"2020-10-25 16:17:02","distance":4270,"duration":"0:54:02","type":"walk"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":19140,"bike":0,"others":0,"total_time":"1:52:10"},"can_participate":false},{"id":"70596342","name":"F\xe9lix-Olivier Beauchamp","activities":[{"id":"4274085123","athlete_id":"70596342","datetime":"2020-10-31 10:00:15","distance":0,"duration":"1:00:00","type":"swim"},{"id":"4263979513","athlete_id":"70596342","datetime":"2020-10-30 22:17:52","distance":2180,"duration":"0:24:57","type":"walk"},{"id":"4260253885","athlete_id":"70596342","datetime":"2020-10-29 22:03:07","distance":2810,"duration":"0:35:19","type":"walk"},{"id":"4258012221","athlete_id":"70596342","datetime":"2020-10-29 02:00:23","distance":0,"duration":"1:15:00","type":"unknown"},{"id":"4256304220","athlete_id":"70596342","datetime":"2020-10-28 21:55:31","distance":2710,"duration":"0:38:35","type":"walk"},{"id":"4247705154","athlete_id":"70596342","datetime":"2020-10-26 21:47:57","distance":1680,"duration":"0:23:44","type":"walk"},{"id":"4243624021","athlete_id":"70596342","datetime":"2020-10-25 19:25:06","distance":1290,"duration":"0:18:10","type":"walk"},{"id":"4238108702","athlete_id":"70596342","datetime":"2020-10-24 11:30:02","distance":0,"duration":"1:00:00","type":"swim"},{"id":"4233443544","athlete_id":"70596342","datetime":"2020-10-23 16:32:30","distance":1040,"duration":"0:15:50","type":"walk"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":9380,"total_time":"4:17:35"},"can_participate":true},{"id":"57677238","name":"Adam Hammes","activities":[{"id":"4263964716","athlete_id":"57677238","datetime":"2020-10-30 21:59:36","distance":2690,"duration":"0:25:04","type":"run"},{"id":"4247893434","athlete_id":"57677238","datetime":"2020-10-26 22:30:22","distance":2990,"duration":"0:28:11","type":"run"},{"id":"4243700198","athlete_id":"57677238","datetime":"2020-10-25 16:04:40","distance":8240,"duration":"2:10:00","type":"run"},{"id":"4238987029","athlete_id":"57677238","datetime":"2020-10-24 19:08:39","distance":6660,"duration":"1:44:00","type":"run"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":5680,"bike":0,"others":0,"total_time":"0:53:15"},"can_participate":false},{"id":"53862382","name":"Gabriel L\xe9tourneau","activities":[{"id":"4260795642","athlete_id":"53862382","datetime":"2020-10-30 01:52:09","distance":6500,"duration":"0:42:05","type":"run"},{"id":"4256717343","athlete_id":"53862382","datetime":"2020-10-29 00:24:08","distance":5240,"duration":"0:29:08","type":"run"},{"id":"4239201242","athlete_id":"53862382","datetime":"2020-10-24 23:26:09","distance":6400,"duration":"0:40:03","type":"run"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":11740,"bike":0,"others":0,"total_time":"1:11:13"},"can_participate":false},{"id":"68910626","name":"Sasa Krsmanovic","activities":[{"id":"4255796025","athlete_id":"68910626","datetime":"2020-10-28 18:47:17","distance":1470,"duration":"0:15:31","type":"walk"},{"id":"4248344270","athlete_id":"68910626","datetime":"2020-10-27 01:51:44","distance":0,"duration":"0:40:00","type":"workout"},{"id":"4255797863","athlete_id":"68910626","datetime":"2020-10-26 02:16:43","distance":4710,"duration":"0:22:20","type":"run"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":4710,"bike":0,"others":1470,"total_time":"1:17:51"},"can_participate":false},{"id":"53751402","name":"Julie Rose","activities":[{"id":"4255812940","athlete_id":"53751402","datetime":"2020-10-27 21:15:00","distance":0,"duration":"0:30:00","type":"workout"},{"id":"4234327049","athlete_id":"53751402","datetime":"2020-10-23 21:32:29","distance":2110,"duration":"0:27:18","type":"walk"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":0,"total_time":"0:30:00"},"can_participate":false},{"id":"53650739","name":"Benjamin Cartier","activities":[{"id":"4243860691","athlete_id":"53650739","datetime":"2020-10-25 19:58:22","distance":2610,"duration":"0:16:05","type":"unknown"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false},{"id":"62603443","name":"Agnes Zitte","activities":[{"id":"4243730785","athlete_id":"62603443","datetime":"2020-10-25 18:36:35","distance":1910,"duration":"0:35:37","type":"unknown"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false},{"id":"64307664","name":"Martin Gagnon","activities":[{"id":"4234286637","athlete_id":"64307664","datetime":"2020-10-23 21:25:57","distance":1320,"duration":"0:14:28","type":"run"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false},{"id":"42892218","name":"Aur\xe9lie Sa\xeez","activities":[{"id":"4234247702","athlete_id":"42892218","datetime":"2020-10-23 20:39:58","distance":5680,"duration":"0:31:22","type":"run"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false},{"id":"53663769","name":"Mathieu Tremblay","activities":[{"id":"4233953740","athlete_id":"53663769","datetime":"2020-10-24 01:00:35","distance":1670,"duration":"0:22:01","type":"unknown"}],"distance_this_week":{"monday":"2020-10-26","sunday":"2020-11-01","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false}],"last_updated":"2020-11-02 08:25:47.630229","date_from":"2020-10-26","date_to":"2020-11-01"}')}},[[11,1,2]]]);
//# sourceMappingURL=main.fba99fe2.chunk.js.map
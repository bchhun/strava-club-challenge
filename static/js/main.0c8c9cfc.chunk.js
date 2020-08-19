(this["webpackJsonpstrava-club-challenge"]=this["webpackJsonpstrava-club-challenge"]||[]).push([[0],{11:function(t,e,i){t.exports=i(19)},16:function(t,e,i){},17:function(t,e,i){},19:function(t,e,i){"use strict";i.r(e);var a,d=i(0),n=i.n(d),r=i(9),s=i.n(r),u=(i(16),i(10)),c=(i(17),i(4)),l=i(1),o=i(6);!function(t){t[t.ascending=0]="ascending",t[t.descending=1]="descending"}(a||(a={}));var m=function(t){var e=t.startOrder,i=t.onToggle,r=t.children,s=Object(d.useState)(e||a.descending),u=Object(o.a)(s,2),c=u[0],l=u[1];return n.a.createElement("span",{className:"table-header-filter",onClick:function(){i&&i(c);var t=c===a.ascending?a.descending:a.ascending;l(t)}},r," \u25be")},_=i(2),h=i.n(_),p=(i(8),function(t){var e=t.athletes;function i(t){return 0!==t?"".concat(t/1e3):""}return n.a.createElement(n.a.Fragment,null,e.map((function(t,e){return n.a.createElement("tr",{key:t.id},n.a.createElement("td",null,t.name),n.a.createElement("td",null,function(t){var e=t.split(":")[0],i=t.split(":")[1],a=t.split(":")[2];return h.a.duration({seconds:parseInt(a),minutes:parseInt(i),hours:parseInt(e)}).format("h[h] m[m] s[s]")}(t.distance_this_week.total_time)),n.a.createElement("td",null,i(t.distance_this_week.run)),n.a.createElement("td",null,i(t.distance_this_week.bike)),n.a.createElement("td",null,i(t.distance_this_week.others)),n.a.createElement("td",null,t.can_participate?n.a.createElement("span",{style:{color:"green"}},"\u2713"):"Not yet"))})))});function y(t){var e=t.athletes,i=Object(d.useState)(e),r=Object(o.a)(i,2),s=r[0],u=r[1],c=Object(d.useCallback)((function(t){var i=e.sort((function(e,i){var d=e.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase(),n=i.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();if(t===a.ascending){if(d>n)return 1;if(d<n)return-1}if(t===a.descending){if(d<n)return 1;if(d>n)return-1}return 0}));u(Object(l.a)(i))}),[e]);return Object(d.useEffect)((function(){c(a.ascending)}),[c]),n.a.createElement(n.a.Fragment,null,n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement(m,{onToggle:c},"Name")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var i=e.sort((function(e,i){var d=e.distance_this_week.total_time,n=i.distance_this_week.total_time,r=d.split(":")[0],s=d.split(":")[1],u=d.split(":")[2],c=n.split(":")[0],l=n.split(":")[1],o=n.split(":")[2],m=h.a.duration({seconds:parseInt(u),minutes:parseInt(s),hours:parseInt(r)}),_=h.a.duration({seconds:parseInt(o),minutes:parseInt(l),hours:parseInt(c)});if(t===a.ascending){if(m>_)return 1;if(m<_)return-1}if(t===a.descending){if(m<_)return 1;if(m>_)return-1}return 0}));u(Object(l.a)(i))}},"Total time")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var i=e.sort((function(e,i){var d=e.distance_this_week.run,n=i.distance_this_week.run;if(t===a.ascending){if(d>n)return 1;if(d<n)return-1}if(t===a.descending){if(d<n)return 1;if(d>n)return-1}return 0}));u(Object(l.a)(i))}},"Run distance (km)")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var i=e.sort((function(e,i){var d=e.distance_this_week.bike,n=i.distance_this_week.bike;if(t===a.ascending){if(d>n)return 1;if(d<n)return-1}if(t===a.descending){if(d<n)return 1;if(d>n)return-1}return 0}));u(Object(l.a)(i))}},"Bike distance (km)")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var i=e.sort((function(e,i){var d=e.distance_this_week.others,n=i.distance_this_week.others;if(t===a.ascending){if(d>n)return 1;if(d<n)return-1}if(t===a.descending){if(d<n)return 1;if(d>n)return-1}return 0}));u(Object(l.a)(i))}},"Other distance (km)")),n.a.createElement("th",null,n.a.createElement(m,{startOrder:a.ascending,onToggle:function(t){var i=e.sort((function(e,i){if(t===a.ascending){if(e.can_participate)return-1;if(i.can_participate)return 1}if(t===a.descending){if(e.can_participate)return 1;if(i.can_participate)return-1}return 0}));u(Object(l.a)(i))}},"Is eligible?")))),n.a.createElement("tbody",null,n.a.createElement(p,{athletes:s}))))}var k=function(){var t=c.athletes,e=c.date_from,i=c.date_to,a=c.last_updated;return n.a.createElement("div",{className:"app container"},n.a.createElement("h5",{className:"header-last_updated"},"Last updated: ",a&&n.a.createElement(u.a,{datetime:a,locale:"fr_CA"})),n.a.createElement("h1",{className:"header-title"},"nventive Strava Challenge"),n.a.createElement("blockquote",null,n.a.createElement("p",null,n.a.createElement("em",null,"To be eligible for the weekly draw, a participant must, at least, do 3 hours and 30 min of physical activity."))),n.a.createElement("p",{style:{marginBottom:"1rem"}},n.a.createElement("b",null,e)," to ",n.a.createElement("b",null,i)),n.a.createElement("div",{className:"table"},n.a.createElement(y,{athletes:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},4:function(t){t.exports=JSON.parse('{"athletes":[{"id":"53741353","name":"Virginie jacques nadeau","activities":[{"id":"3936934908","athlete_id":"53741353","datetime":"2020-08-19 16:42:45","distance":3800,"duration":"0:37:17","type":"run"},{"id":"3933384157","athlete_id":"53741353","datetime":"2020-08-18 22:49:34","distance":2260,"duration":"0:21:46","type":"run"},{"id":"3933243054","athlete_id":"53741353","datetime":"2020-08-18 22:12:02","distance":1550,"duration":"0:15:09","type":"run"},{"id":"3923888344","athlete_id":"53741353","datetime":"2020-08-16 19:22:49","distance":8250,"duration":"1:17:00","type":"run"},{"id":"3913584432","athlete_id":"53741353","datetime":"2020-08-14 21:50:08","distance":1470,"duration":"0:10:52","type":"run"},{"id":"3909846492","athlete_id":"53741353","datetime":"2020-08-14 01:16:25","distance":2270,"duration":"0:22:14","type":"run"},{"id":"3909718414","athlete_id":"53741353","datetime":"2020-08-13 21:55:32","distance":7540,"duration":"1:07:00","type":"run"},{"id":"3909718432","athlete_id":"53741353","datetime":"2020-08-13 00:29:50","distance":3930,"duration":"4:06:00","type":"run"},{"id":"3894873224","athlete_id":"53741353","datetime":"2020-08-10 21:36:55","distance":11200,"duration":"1:28:00","type":"run"},{"id":"3890527574","athlete_id":"53741353","datetime":"2020-08-09 22:49:58","distance":6760,"duration":"1:07:00","type":"run"},{"id":"3884662298","athlete_id":"53741353","datetime":"2020-08-08 15:00:40","distance":3000,"duration":"1:05:00","type":"run"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":34660,"bike":0,"others":0,"total_time":"8:31:06"},"can_participate":true},{"id":"6063898","name":"Max Cantin","activities":[{"id":"3936415838","athlete_id":"6063898","datetime":"2020-08-19 15:43:48","distance":4690,"duration":"0:20:31","type":"run"},{"id":"3922574349","athlete_id":"6063898","datetime":"2020-08-16 14:08:36","distance":55180,"duration":"1:56:00","type":"bike"},{"id":"3912817214","athlete_id":"6063898","datetime":"2020-08-14 16:53:13","distance":32350,"duration":"0:58:10","type":"bike"},{"id":"3908973191","athlete_id":"6063898","datetime":"2020-08-13 18:53:17","distance":59690,"duration":"1:56:00","type":"bike"},{"id":"3884085097","athlete_id":"6063898","datetime":"2020-08-08 16:51:33","distance":34320,"duration":"1:06:00","type":"bike"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":147220,"others":0,"total_time":"4:50:10"},"can_participate":true},{"id":"56823873","name":"Josee Barrette","activities":[{"id":"3935505501","athlete_id":"56823873","datetime":"2020-08-19 11:47:30","distance":3200,"duration":"0:34:45","type":"run"},{"id":"3935269310","athlete_id":"56823873","datetime":"2020-08-18 20:12:01","distance":1690,"duration":"0:20:31","type":"run"},{"id":"3928547617","athlete_id":"56823873","datetime":"2020-08-17 11:53:43","distance":1490,"duration":"0:21:10","type":"run"},{"id":"3935273667","athlete_id":"56823873","datetime":"2020-08-13 18:35:30","distance":5480,"duration":"0:39:14","type":"run"},{"id":"3908410739","athlete_id":"56823873","datetime":"2020-08-08 16:29:35","distance":1060,"duration":"0:10:31","type":"run"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":5480,"bike":0,"others":0,"total_time":"0:39:14"},"can_participate":false},{"id":"63991138","name":"Janet Fan","activities":[{"id":"3934053970","athlete_id":"63991138","datetime":"2020-08-19 03:54:09","distance":1030,"duration":"0:08:52","type":"run"},{"id":"3933447467","athlete_id":"63991138","datetime":"2020-08-18 22:04:41","distance":4940,"duration":"0:49:59","type":"run"},{"id":"3932304651","athlete_id":"63991138","datetime":"2020-08-18 18:26:16","distance":960,"duration":"0:08:52","type":"run"},{"id":"3928745947","athlete_id":"63991138","datetime":"2020-08-18 01:15:36","distance":1760,"duration":"0:15:11","type":"run"},{"id":"3923387470","athlete_id":"63991138","datetime":"2020-08-16 15:11:27","distance":10620,"duration":"1:54:00","type":"run"},{"id":"3918735974","athlete_id":"63991138","datetime":"2020-08-15 21:41:00","distance":1740,"duration":"0:17:18","type":"run"},{"id":"3913860559","athlete_id":"63991138","datetime":"2020-08-14 22:09:00","distance":2370,"duration":"0:46:01","type":"run"},{"id":"3913500680","athlete_id":"63991138","datetime":"2020-08-14 20:55:00","distance":2630,"duration":"0:27:05","type":"run"},{"id":"3910199505","athlete_id":"63991138","datetime":"2020-08-14 05:16:56","distance":2040,"duration":"0:20:53","type":"run"},{"id":"3905116397","athlete_id":"63991138","datetime":"2020-08-13 01:37:11","distance":1220,"duration":"0:12:57","type":"run"},{"id":"3904619932","athlete_id":"63991138","datetime":"2020-08-12 21:58:44","distance":2070,"duration":"0:20:18","type":"run"},{"id":"3902297249","athlete_id":"63991138","datetime":"2020-08-12 13:01:01","distance":1790,"duration":"0:19:16","type":"run"},{"id":"3899690016","athlete_id":"63991138","datetime":"2020-08-11 22:00:07","distance":3490,"duration":"0:34:31","type":"run"},{"id":"3895143462","athlete_id":"63991138","datetime":"2020-08-11 01:14:04","distance":1400,"duration":"0:13:29","type":"run"},{"id":"3889032325","athlete_id":"63991138","datetime":"2020-08-09 16:01:37","distance":3050,"duration":"0:29:50","type":"run"},{"id":"3884886739","athlete_id":"63991138","datetime":"2020-08-08 21:27:49","distance":1440,"duration":"0:15:04","type":"run"},{"id":"3884886712","athlete_id":"63991138","datetime":"2020-08-08 20:50:22","distance":1230,"duration":"0:12:29","type":"run"},{"id":"3884304938","athlete_id":"63991138","datetime":"2020-08-08 17:28:33","distance":6190,"duration":"1:01:00","type":"run"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":29370,"bike":0,"others":0,"total_time":"5:25:48"},"can_participate":true},{"id":"53857703","name":"Yves Prince","activities":[{"id":"3933757696","athlete_id":"53857703","datetime":"2020-08-18 23:29:41","distance":4500,"duration":"0:51:12","type":"run"},{"id":"3928630212","athlete_id":"53857703","datetime":"2020-08-18 00:34:22","distance":1000,"duration":"0:11:43","type":"run"},{"id":"3924048506","athlete_id":"53857703","datetime":"2020-08-16 23:21:56","distance":1020,"duration":"0:11:23","type":"run"},{"id":"3919031040","athlete_id":"53857703","datetime":"2020-08-16 00:37:58","distance":1030,"duration":"0:10:34","type":"run"},{"id":"3913943111","athlete_id":"53857703","datetime":"2020-08-14 23:54:30","distance":1950,"duration":"0:21:39","type":"run"},{"id":"3909759836","athlete_id":"53857703","datetime":"2020-08-13 23:52:54","distance":2430,"duration":"0:27:08","type":"run"},{"id":"3905079300","athlete_id":"53857703","datetime":"2020-08-13 00:02:02","distance":1110,"duration":"0:11:56","type":"run"},{"id":"3900033036","athlete_id":"53857703","datetime":"2020-08-12 00:04:50","distance":1100,"duration":"0:12:20","type":"run"},{"id":"3895092328","athlete_id":"53857703","datetime":"2020-08-11 00:06:09","distance":1900,"duration":"0:22:28","type":"run"},{"id":"3890460163","athlete_id":"53857703","datetime":"2020-08-09 23:23:13","distance":2960,"duration":"0:31:34","type":"run"},{"id":"3885221697","athlete_id":"53857703","datetime":"2020-08-08 23:28:47","distance":2590,"duration":"0:29:23","type":"run"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":10540,"bike":0,"others":0,"total_time":"1:57:28"},"can_participate":false},{"id":"57677238","name":"Adam Hammes","activities":[{"id":"3933636830","athlete_id":"57677238","datetime":"2020-08-19 00:12:08","distance":1360,"duration":"0:15:22","type":"run"},{"id":"3928706642","athlete_id":"57677238","datetime":"2020-08-18 00:40:36","distance":3890,"duration":"0:43:14","type":"run"},{"id":"3923816792","athlete_id":"57677238","datetime":"2020-08-16 20:06:03","distance":4240,"duration":"0:58:34","type":"run"},{"id":"3918561249","athlete_id":"57677238","datetime":"2020-08-15 18:44:30","distance":4430,"duration":"1:38:00","type":"run"},{"id":"3905121460","athlete_id":"57677238","datetime":"2020-08-13 00:13:05","distance":2930,"duration":"0:46:38","type":"run"},{"id":"3899267426","athlete_id":"57677238","datetime":"2020-08-11 19:19:50","distance":5110,"duration":"1:07:00","type":"run"},{"id":"3884148223","athlete_id":"57677238","datetime":"2020-08-08 15:34:02","distance":3140,"duration":"2:26:00","type":"run"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":16710,"bike":0,"others":0,"total_time":"4:30:12"},"can_participate":true},{"id":"53751402","name":"Julie Rose","activities":[{"id":"3933258553","athlete_id":"53751402","datetime":"2020-08-18 22:19:34","distance":1570,"duration":"0:19:43","type":"walk"},{"id":"3923184932","athlete_id":"53751402","datetime":"2020-08-16 18:10:25","distance":2560,"duration":"0:29:20","type":"walk"},{"id":"3906686095","athlete_id":"53751402","datetime":"2020-08-13 11:31:12","distance":2370,"duration":"0:25:33","type":"walk"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":0,"others":4930,"total_time":"0:54:53"},"can_participate":false},{"id":"33346446","name":"Laura C\xf4t\xe9","activities":[{"id":"3932882607","athlete_id":"33346446","datetime":"2020-08-18 19:29:41","distance":32080,"duration":"1:09:00","type":"bike"},{"id":"3923799540","athlete_id":"33346446","datetime":"2020-08-15 15:43:26","distance":48780,"duration":"1:44:00","type":"bike"},{"id":"3904268824","athlete_id":"33346446","datetime":"2020-08-12 20:25:35","distance":7740,"duration":"0:39:52","type":"run"},{"id":"3894646432","athlete_id":"33346446","datetime":"2020-08-10 20:45:08","distance":49180,"duration":"1:37:00","type":"bike"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":7740,"bike":97960,"others":0,"total_time":"4:00:52"},"can_participate":true},{"id":"55618908","name":"Jesse Sopel","activities":[{"id":"3932875716","athlete_id":"55618908","datetime":"2020-08-18 20:19:29","distance":1240,"duration":"0:15:24","type":"walk"},{"id":"3928135359","athlete_id":"55618908","datetime":"2020-08-17 21:29:23","distance":1320,"duration":"0:18:58","type":"walk"},{"id":"3923718003","athlete_id":"55618908","datetime":"2020-08-16 20:38:18","distance":1800,"duration":"0:24:02","type":"walk"},{"id":"3922307505","athlete_id":"55618908","datetime":"2020-08-16 14:00:29","distance":0,"duration":"1:25:00","type":"unknown"},{"id":"3917742944","athlete_id":"55618908","datetime":"2020-08-15 17:10:36","distance":1880,"duration":"0:22:53","type":"walk"},{"id":"3913464275","athlete_id":"55618908","datetime":"2020-08-14 21:06:32","distance":1900,"duration":"0:21:20","type":"walk"},{"id":"3908971633","athlete_id":"55618908","datetime":"2020-08-13 20:27:27","distance":1810,"duration":"0:24:41","type":"walk"},{"id":"3904285390","athlete_id":"55618908","datetime":"2020-08-12 21:00:14","distance":1230,"duration":"0:15:01","type":"walk"},{"id":"3899568839","athlete_id":"55618908","datetime":"2020-08-11 21:44:52","distance":2300,"duration":"0:29:22","type":"walk"},{"id":"3899402673","athlete_id":"55618908","datetime":"2020-08-11 20:00:52","distance":0,"duration":"1:25:00","type":"unknown"},{"id":"3894255441","athlete_id":"55618908","datetime":"2020-08-10 20:05:03","distance":1920,"duration":"0:25:50","type":"walk"},{"id":"3889307352","athlete_id":"55618908","datetime":"2020-08-09 17:44:36","distance":1850,"duration":"0:23:31","type":"walk"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":0,"others":12840,"total_time":"5:33:09"},"can_participate":true},{"id":"30050927","name":"David .","activities":[{"id":"3935532122","athlete_id":"30050927","datetime":"2020-08-18 19:26:40","distance":0,"duration":"0:34:02","type":"workout"},{"id":"3931409097","athlete_id":"30050927","datetime":"2020-08-18 14:56:01","distance":3680,"duration":"0:39:20","type":"walk"},{"id":"3923203542","athlete_id":"30050927","datetime":"2020-08-16 16:18:51","distance":8230,"duration":"1:48:00","type":"walk"},{"id":"3919446549","athlete_id":"30050927","datetime":"2020-08-16 01:19:21","distance":860,"duration":"0:10:16","type":"walk"},{"id":"3917191176","athlete_id":"30050927","datetime":"2020-08-15 15:18:16","distance":0,"duration":"0:34:19","type":"workout"},{"id":"3912454785","athlete_id":"30050927","datetime":"2020-08-14 15:34:03","distance":25700,"duration":"0:46:27","type":"bike"},{"id":"3908660769","athlete_id":"30050927","datetime":"2020-08-13 18:54:04","distance":0,"duration":"0:31:50","type":"workout"},{"id":"3903260750","athlete_id":"30050927","datetime":"2020-08-12 16:58:54","distance":1540,"duration":"0:15:41","type":"walk"},{"id":"3898869678","athlete_id":"30050927","datetime":"2020-08-11 18:57:53","distance":442000,"duration":"0:10:12","type":"swim"},{"id":"3898790807","athlete_id":"30050927","datetime":"2020-08-11 18:31:53","distance":0,"duration":"0:23:02","type":"workout"},{"id":"3895095945","athlete_id":"30050927","datetime":"2020-08-11 01:00:13","distance":1180,"duration":"0:14:00","type":"walk"},{"id":"3895095685","athlete_id":"30050927","datetime":"2020-08-11 00:23:33","distance":2680,"duration":"0:30:42","type":"walk"},{"id":"3895095502","athlete_id":"30050927","datetime":"2020-08-10 21:05:12","distance":2240,"duration":"0:25:06","type":"walk"},{"id":"3890647411","athlete_id":"30050927","datetime":"2020-08-10 02:25:29","distance":1510,"duration":"0:18:10","type":"walk"},{"id":"3889641619","athlete_id":"30050927","datetime":"2020-08-09 18:32:11","distance":28580,"duration":"0:52:21","type":"bike"},{"id":"3888497913","athlete_id":"30050927","datetime":"2020-08-09 14:59:26","distance":1850,"duration":"0:21:53","type":"walk"},{"id":"3888219219","athlete_id":"30050927","datetime":"2020-08-09 14:08:45","distance":1990,"duration":"0:21:01","type":"walk"},{"id":"3883945282","athlete_id":"30050927","datetime":"2020-08-08 17:21:51","distance":340000,"duration":"0:07:50","type":"swim"},{"id":"3883905115","athlete_id":"30050927","datetime":"2020-08-08 16:37:29","distance":0,"duration":"0:43:04","type":"workout"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":25700,"others":460240,"total_time":"6:07:45"},"can_participate":true},{"id":"34665862","name":"William-Jos\xe9 Simard-Touzet","activities":[{"id":"3932964172","athlete_id":"34665862","datetime":"2020-08-18 15:06:32","distance":3190,"duration":"0:59:17","type":"walk"},{"id":"3928249400","athlete_id":"34665862","datetime":"2020-08-17 18:45:21","distance":0,"duration":"2:15:00","type":"unknown"},{"id":"3923035816","athlete_id":"34665862","datetime":"2020-08-16 16:37:15","distance":6300,"duration":"1:17:00","type":"walk"},{"id":"3918586520","athlete_id":"34665862","datetime":"2020-08-15 15:03:30","distance":3830,"duration":"1:13:00","type":"walk"},{"id":"3894214568","athlete_id":"34665862","datetime":"2020-08-10 19:29:05","distance":16860,"duration":"0:58:28","type":"bike"},{"id":"3890704329","athlete_id":"34665862","datetime":"2020-08-10 02:00:27","distance":0,"duration":"0:15:00","type":"workout"},{"id":"3889802634","athlete_id":"34665862","datetime":"2020-08-09 19:48:34","distance":3450,"duration":"0:22:29","type":"run"},{"id":"3885382652","athlete_id":"34665862","datetime":"2020-08-09 00:14:19","distance":2570,"duration":"0:39:08","type":"walk"},{"id":"3885186096","athlete_id":"34665862","datetime":"2020-08-08 23:38:05","distance":2610,"duration":"0:28:25","type":"walk"},{"id":"3884439710","athlete_id":"34665862","datetime":"2020-08-08 17:59:08","distance":5410,"duration":"1:12:00","type":"walk"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":16860,"others":10130,"total_time":"3:43:28"},"can_participate":true},{"id":"54439103","name":"Julie Lortie-Pelletier","activities":[{"id":"3931703740","athlete_id":"54439103","datetime":"2020-08-18 16:17:51","distance":3600,"duration":"0:38:24","type":"walk"},{"id":"3928299175","athlete_id":"54439103","datetime":"2020-08-17 22:35:19","distance":2080,"duration":"0:25:03","type":"walk"},{"id":"3926798781","athlete_id":"54439103","datetime":"2020-08-17 16:20:13","distance":2210,"duration":"0:23:42","type":"walk"},{"id":"3918406329","athlete_id":"54439103","datetime":"2020-08-15 19:57:14","distance":2240,"duration":"0:28:34","type":"walk"},{"id":"3918163748","athlete_id":"54439103","datetime":"2020-08-15 18:53:48","distance":2130,"duration":"0:28:03","type":"walk"},{"id":"3894744712","athlete_id":"54439103","datetime":"2020-08-10 22:28:25","distance":3710,"duration":"0:47:13","type":"walk"},{"id":"3890490054","athlete_id":"54439103","datetime":"2020-08-09 23:49:46","distance":4810,"duration":"1:04:00","type":"walk"},{"id":"3883991593","athlete_id":"54439103","datetime":"2020-08-08 15:26:50","distance":5170,"duration":"1:34:00","type":"walk"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":0,"others":8080,"total_time":"1:43:50"},"can_participate":false},{"id":"8796776","name":"Catherine Sauzede","activities":[{"id":"3931304396","athlete_id":"8796776","datetime":"2020-08-18 14:10:47","distance":3240,"duration":"0:45:26","type":"walk"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false},{"id":"28702625","name":"Dave Lewis","activities":[{"id":"3930744115","athlete_id":"28702625","datetime":"2020-08-18 12:49:06","distance":2680,"duration":"0:26:32","type":"run"},{"id":"3913955787","athlete_id":"28702625","datetime":"2020-08-14 23:25:49","distance":17810,"duration":"1:11:00","type":"bike"},{"id":"3889828864","athlete_id":"28702625","datetime":"2020-08-09 18:00:38","distance":31480,"duration":"1:51:00","type":"bike"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":17810,"others":0,"total_time":"1:11:00"},"can_participate":false},{"id":"53862382","name":"Gabriel L\xe9tourneau","activities":[{"id":"3928922014","athlete_id":"53862382","datetime":"2020-08-18 02:50:20","distance":7020,"duration":"0:50:20","type":"run"},{"id":"3918478875","athlete_id":"53862382","datetime":"2020-08-15 18:18:51","distance":15390,"duration":"2:24:00","type":"run"},{"id":"3908829261","athlete_id":"53862382","datetime":"2020-08-13 19:29:36","distance":6450,"duration":"0:38:59","type":"run"},{"id":"3895246120","athlete_id":"53862382","datetime":"2020-08-11 01:36:47","distance":7470,"duration":"0:50:08","type":"run"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":29310,"bike":0,"others":0,"total_time":"3:53:07"},"can_participate":true},{"id":"41070425","name":"Francis-Olivier Couture","activities":[{"id":"3932981988","athlete_id":"41070425","datetime":"2020-08-17 23:35:33","distance":5010,"duration":"0:21:32","type":"run"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false},{"id":"59758738","name":"Carl de Billy","activities":[{"id":"3927879118","athlete_id":"59758738","datetime":"2020-08-17 19:47:56","distance":7740,"duration":"0:31:49","type":"bike"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false},{"id":"53744985","name":"Guillaume Fortin","activities":[{"id":"3924405347","athlete_id":"53744985","datetime":"2020-08-15 18:25:21","distance":19000,"duration":"0:52:00","type":"bike"},{"id":"3924413820","athlete_id":"53744985","datetime":"2020-08-15 03:38:37","distance":10000,"duration":"2:26:00","type":"walk"},{"id":"3904705193","athlete_id":"53744985","datetime":"2020-08-12 22:30:23","distance":22250,"duration":"0:59:35","type":"bike"},{"id":"3924408457","athlete_id":"53744985","datetime":"2020-08-12 02:35:11","distance":0,"duration":"1:00:00","type":"workout"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":41250,"others":10000,"total_time":"5:17:35"},"can_participate":true},{"id":"2127037","name":"David Hamel","activities":[{"id":"3923865457","athlete_id":"2127037","datetime":"2020-08-16 21:05:33","distance":10520,"duration":"0:42:39","type":"bike"},{"id":"3918487602","athlete_id":"2127037","datetime":"2020-08-15 19:48:48","distance":5400,"duration":"0:42:40","type":"bike"},{"id":"3898211215","athlete_id":"2127037","datetime":"2020-08-11 12:31:23","distance":1160,"duration":"0:17:52","type":"walk"},{"id":"3890460877","athlete_id":"2127037","datetime":"2020-08-09 23:41:41","distance":3710,"duration":"0:54:48","type":"walk"},{"id":"3888697576","athlete_id":"2127037","datetime":"2020-08-09 15:15:08","distance":18430,"duration":"0:47:27","type":"bike"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":15920,"others":1160,"total_time":"1:43:11"},"can_participate":false},{"id":"5493967","name":"Rene Charbonneau","activities":[{"id":"3918742675","athlete_id":"5493967","datetime":"2020-08-15 22:11:35","distance":0,"duration":"0:44:09","type":"workout"},{"id":"3918612608","athlete_id":"5493967","datetime":"2020-08-15 20:29:47","distance":0,"duration":"1:15:00","type":"workout"},{"id":"3918617711","athlete_id":"5493967","datetime":"2020-08-15 19:02:00","distance":0,"duration":"1:00:00","type":"bike"},{"id":"3912533508","athlete_id":"5493967","datetime":"2020-08-14 16:13:29","distance":0,"duration":"0:21:11","type":"unknown"},{"id":"3905134503","athlete_id":"5493967","datetime":"2020-08-13 01:38:07","distance":11590,"duration":"0:29:56","type":"bike"},{"id":"3904565542","athlete_id":"5493967","datetime":"2020-08-12 22:09:04","distance":14180,"duration":"0:34:02","type":"bike"},{"id":"3892749110","athlete_id":"5493967","datetime":"2020-08-10 13:37:00","distance":0,"duration":"0:17:00","type":"unknown"},{"id":"3887524365","athlete_id":"5493967","datetime":"2020-08-09 11:36:22","distance":7000,"duration":"0:40:53","type":"run"},{"id":"3883594632","athlete_id":"5493967","datetime":"2020-08-08 15:35:48","distance":0,"duration":"0:39:56","type":"unknown"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":25770,"others":0,"total_time":"4:41:18"},"can_participate":true},{"id":"55385678","name":"Quentin Auvray","activities":[{"id":"3918687973","athlete_id":"55385678","datetime":"2020-08-15 21:20:44","distance":0,"duration":"1:11:00","type":"workout"},{"id":"3913696586","athlete_id":"55385678","datetime":"2020-08-14 21:06:20","distance":0,"duration":"1:56:00","type":"workout"},{"id":"3904698537","athlete_id":"55385678","datetime":"2020-08-12 22:13:35","distance":0,"duration":"1:15:00","type":"workout"},{"id":"3885793048","athlete_id":"55385678","datetime":"2020-08-08 21:59:27","distance":5070,"duration":"1:05:00","type":"walk"},{"id":"3883973650","athlete_id":"55385678","datetime":"2020-08-08 17:02:30","distance":2220,"duration":"0:26:31","type":"walk"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":0,"others":0,"total_time":"4:22:00"},"can_participate":true},{"id":"62602861","name":"Patrice Patenaude","activities":[{"id":"3919250733","athlete_id":"62602861","datetime":"2020-08-15 13:00:33","distance":0,"duration":"4:00:00","type":"unknown"},{"id":"3890189709","athlete_id":"62602861","datetime":"2020-08-09 20:30:21","distance":0,"duration":"2:00:00","type":"walk"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":0,"others":0,"total_time":"4:00:00"},"can_participate":true},{"id":"14753279","name":"Bernard Chhun","activities":[{"id":"3913190061","athlete_id":"14753279","datetime":"2020-08-14 16:29:53","distance":2390,"duration":"0:19:53","type":"unknown"},{"id":"3909361142","athlete_id":"14753279","datetime":"2020-08-13 22:51:08","distance":1270,"duration":"0:07:38","type":"unknown"},{"id":"3909360843","athlete_id":"14753279","datetime":"2020-08-13 21:16:09","distance":0,"duration":"1:30:00","type":"unknown"},{"id":"3909359244","athlete_id":"14753279","datetime":"2020-08-13 20:58:47","distance":1360,"duration":"0:06:24","type":"unknown"},{"id":"3904873299","athlete_id":"14753279","datetime":"2020-08-12 23:24:45","distance":6760,"duration":"0:45:10","type":"unknown"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":0,"others":11780,"total_time":"2:49:05"},"can_participate":false},{"id":"53650739","name":"Benjamin Cartier","activities":[{"id":"3914362900","athlete_id":"53650739","datetime":"2020-08-14 14:07:04","distance":7700,"duration":"0:49:01","type":"unknown"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":0,"others":7700,"total_time":"0:49:01"},"can_participate":false},{"id":"54431710","name":"Maxim Tremblay","activities":[{"id":"3909604621","athlete_id":"54431710","datetime":"2020-08-13 23:29:05","distance":6090,"duration":"0:39:30","type":"bike"},{"id":"3904838533","athlete_id":"54431710","datetime":"2020-08-12 21:37:42","distance":18020,"duration":"2:04:00","type":"bike"},{"id":"3889951725","athlete_id":"54431710","datetime":"2020-08-09 19:59:41","distance":10090,"duration":"0:58:21","type":"bike"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":24110,"others":0,"total_time":"2:43:30"},"can_participate":false},{"id":"57495632","name":"Elisabeth Dupuis","activities":[{"id":"3899745944","athlete_id":"57495632","datetime":"2020-08-11 21:31:31","distance":3990,"duration":"0:38:20","type":"run"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":3990,"bike":0,"others":0,"total_time":"0:38:20"},"can_participate":false},{"id":"43834742","name":"Jeff Fogel","activities":[{"id":"3893474613","athlete_id":"43834742","datetime":"2020-08-08 22:00:00","distance":12000,"duration":"1:59:00","type":"run"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false},{"id":"42892218","name":"Aur\xe9lie Sa\xeez","activities":[{"id":"3883609368","athlete_id":"42892218","datetime":"2020-08-08 13:13:13","distance":46130,"duration":"2:08:00","type":"bike"}],"distance_this_week":{"monday":"2020-08-10","sunday":"2020-08-16","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false}],"last_updated":"2020-08-19 16:17:56.389635","date_from":"2020-08-10","date_to":"2020-08-16"}')}},[[11,1,2]]]);
//# sourceMappingURL=main.0c8c9cfc.chunk.js.map
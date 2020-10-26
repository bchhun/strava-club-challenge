(this["webpackJsonpstrava-club-challenge"]=this["webpackJsonpstrava-club-challenge"]||[]).push([[0],{11:function(t,e,a){t.exports=a(19)},16:function(t,e,a){},17:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var i,n=a(0),d=a.n(n),r=a(9),s=a.n(r),c=(a(16),a(10)),u=(a(17),a(4)),l=a(1),o=a(6);!function(t){t[t.ascending=0]="ascending",t[t.descending=1]="descending"}(i||(i={}));var m=function(t){var e=t.startOrder,a=t.onToggle,r=t.children,s=Object(n.useState)(e||i.descending),c=Object(o.a)(s,2),u=c[0],l=c[1];return d.a.createElement("span",{className:"table-header-filter",onClick:function(){a&&a(u);var t=u===i.ascending?i.descending:i.ascending;l(t)}},r," \u25be")},_=a(2),h=a.n(_),p=(a(8),function(t){var e=t.athletes;function a(t){return 0!==t?"".concat(t/1e3):""}return d.a.createElement(d.a.Fragment,null,e.map((function(t,e){return d.a.createElement("tr",{key:t.id},d.a.createElement("td",null,t.name),d.a.createElement("td",null,function(t){var e=t.split(":")[0],a=t.split(":")[1],i=t.split(":")[2];return h.a.duration({seconds:parseInt(i),minutes:parseInt(a),hours:parseInt(e)}).format("h[h] m[m] s[s]")}(t.distance_this_week.total_time)),d.a.createElement("td",null,a(t.distance_this_week.run)),d.a.createElement("td",null,a(t.distance_this_week.bike)),d.a.createElement("td",null,a(t.distance_this_week.others)),d.a.createElement("td",null,t.can_participate?d.a.createElement("span",{style:{color:"green"}},"\u2713"):"Not yet"))})))});function y(t){var e=t.athletes,a=Object(n.useState)(e),r=Object(o.a)(a,2),s=r[0],c=r[1],u=Object(n.useCallback)((function(t){var a=e.sort((function(e,a){var n=e.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase(),d=a.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();if(t===i.ascending){if(n>d)return 1;if(n<d)return-1}if(t===i.descending){if(n<d)return 1;if(n>d)return-1}return 0}));c(Object(l.a)(a))}),[e]);return Object(n.useEffect)((function(){u(i.ascending)}),[u]),d.a.createElement(d.a.Fragment,null,d.a.createElement("table",null,d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,d.a.createElement(m,{onToggle:u},"Name")),d.a.createElement("th",null,d.a.createElement(m,{onToggle:function(t){var a=e.sort((function(e,a){var n=e.distance_this_week.total_time,d=a.distance_this_week.total_time,r=n.split(":")[0],s=n.split(":")[1],c=n.split(":")[2],u=d.split(":")[0],l=d.split(":")[1],o=d.split(":")[2],m=h.a.duration({seconds:parseInt(c),minutes:parseInt(s),hours:parseInt(r)}),_=h.a.duration({seconds:parseInt(o),minutes:parseInt(l),hours:parseInt(u)});if(t===i.ascending){if(m>_)return 1;if(m<_)return-1}if(t===i.descending){if(m<_)return 1;if(m>_)return-1}return 0}));c(Object(l.a)(a))}},"Total time")),d.a.createElement("th",null,d.a.createElement(m,{onToggle:function(t){var a=e.sort((function(e,a){var n=e.distance_this_week.run,d=a.distance_this_week.run;if(t===i.ascending){if(n>d)return 1;if(n<d)return-1}if(t===i.descending){if(n<d)return 1;if(n>d)return-1}return 0}));c(Object(l.a)(a))}},"Run distance (km)")),d.a.createElement("th",null,d.a.createElement(m,{onToggle:function(t){var a=e.sort((function(e,a){var n=e.distance_this_week.bike,d=a.distance_this_week.bike;if(t===i.ascending){if(n>d)return 1;if(n<d)return-1}if(t===i.descending){if(n<d)return 1;if(n>d)return-1}return 0}));c(Object(l.a)(a))}},"Bike distance (km)")),d.a.createElement("th",null,d.a.createElement(m,{onToggle:function(t){var a=e.sort((function(e,a){var n=e.distance_this_week.others,d=a.distance_this_week.others;if(t===i.ascending){if(n>d)return 1;if(n<d)return-1}if(t===i.descending){if(n<d)return 1;if(n>d)return-1}return 0}));c(Object(l.a)(a))}},"Other distance (km)")),d.a.createElement("th",null,d.a.createElement(m,{startOrder:i.ascending,onToggle:function(t){var a=e.sort((function(e,a){if(t===i.ascending){if(e.can_participate)return-1;if(a.can_participate)return 1}if(t===i.descending){if(e.can_participate)return 1;if(a.can_participate)return-1}return 0}));c(Object(l.a)(a))}},"Is eligible?")))),d.a.createElement("tbody",null,d.a.createElement(p,{athletes:s}))))}var k=function(){var t=u.athletes,e=u.date_from,a=u.date_to,i=u.last_updated;return d.a.createElement("div",{className:"app container"},d.a.createElement("h5",{className:"header-last_updated"},"Last updated: ",i&&d.a.createElement(c.a,{datetime:i,locale:"fr_CA"})),d.a.createElement("h1",{className:"header-title"},"nventive Strava Challenge"),d.a.createElement("blockquote",null,d.a.createElement("p",null,d.a.createElement("em",null,"To be eligible for the weekly draw, a participant must, at least, do 3 hours and 30 min of physical activity."))),d.a.createElement("p",{style:{marginBottom:"1rem"}},d.a.createElement("b",null,e)," to ",d.a.createElement("b",null,a)),d.a.createElement("div",{className:"table"},d.a.createElement(y,{athletes:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(d.a.createElement(d.a.StrictMode,null,d.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},4:function(t){t.exports=JSON.parse('{"athletes":[{"id":"14753279","name":"Bernard Chhun","activities":[{"id":"4245617388","athlete_id":"14753279","datetime":"2020-10-26 11:54:59","distance":1610,"duration":"0:21:37","type":"unknown"},{"id":"4244149712","athlete_id":"14753279","datetime":"2020-10-25 22:41:21","distance":0,"duration":"0:17:25","type":"unknown"},{"id":"4243858320","athlete_id":"14753279","datetime":"2020-10-25 16:37:58","distance":1800,"duration":"0:25:27","type":"unknown"},{"id":"4237579128","athlete_id":"14753279","datetime":"2020-10-24 14:08:56","distance":0,"duration":"1:26:00","type":"unknown"},{"id":"4234611306","athlete_id":"14753279","datetime":"2020-10-23 23:25:45","distance":0,"duration":"0:27:11","type":"unknown"},{"id":"4233965660","athlete_id":"14753279","datetime":"2020-10-23 19:04:13","distance":1000,"duration":"0:13:40","type":"unknown"},{"id":"4233506201","athlete_id":"14753279","datetime":"2020-10-23 16:44:48","distance":3100,"duration":"0:17:03","type":"unknown"},{"id":"4233183643","athlete_id":"14753279","datetime":"2020-10-23 15:31:37","distance":2850,"duration":"0:15:15","type":"unknown"},{"id":"4232443931","athlete_id":"14753279","datetime":"2020-10-23 11:54:08","distance":1440,"duration":"0:19:03","type":"unknown"},{"id":"4230591532","athlete_id":"14753279","datetime":"2020-10-22 21:53:43","distance":4740,"duration":"0:29:21","type":"unknown"},{"id":"4228245229","athlete_id":"14753279","datetime":"2020-10-22 11:53:25","distance":1640,"duration":"0:21:03","type":"unknown"},{"id":"4223961800","athlete_id":"14753279","datetime":"2020-10-21 11:55:39","distance":850,"duration":"0:10:15","type":"unknown"},{"id":"4222442710","athlete_id":"14753279","datetime":"2020-10-20 23:34:38","distance":5480,"duration":"0:32:51","type":"unknown"},{"id":"4219666548","athlete_id":"14753279","datetime":"2020-10-20 11:53:25","distance":1420,"duration":"0:19:03","type":"unknown"},{"id":"4216896624","athlete_id":"14753279","datetime":"2020-10-19 16:34:42","distance":1390,"duration":"0:16:37","type":"unknown"},{"id":"4215512634","athlete_id":"14753279","datetime":"2020-10-19 11:55:42","distance":1690,"duration":"0:22:04","type":"unknown"},{"id":"4213266954","athlete_id":"14753279","datetime":"2020-10-18 18:31:30","distance":2080,"duration":"0:12:40","type":"unknown"},{"id":"4213266532","athlete_id":"14753279","datetime":"2020-10-18 18:20:37","distance":1620,"duration":"0:09:01","type":"unknown"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":27400,"total_time":"6:12:18"},"can_participate":true},{"id":"63991138","name":"Janet Fan","activities":[{"id":"4244300279","athlete_id":"63991138","datetime":"2020-10-25 18:26:04","distance":9730,"duration":"1:12:00","type":"walk"},{"id":"4243368107","athlete_id":"63991138","datetime":"2020-10-25 18:05:33","distance":0,"duration":"0:20:00","type":"walk"},{"id":"4238948960","athlete_id":"63991138","datetime":"2020-10-24 21:09:44","distance":2530,"duration":"0:40:18","type":"walk"},{"id":"4234631560","athlete_id":"63991138","datetime":"2020-10-23 23:26:58","distance":1390,"duration":"0:16:31","type":"walk"},{"id":"4234414135","athlete_id":"63991138","datetime":"2020-10-23 21:00:17","distance":4610,"duration":"0:57:32","type":"walk"},{"id":"4226546943","athlete_id":"63991138","datetime":"2020-10-21 20:15:57","distance":2740,"duration":"0:32:06","type":"walk"},{"id":"4222547158","athlete_id":"63991138","datetime":"2020-10-21 00:30:14","distance":1600,"duration":"0:19:00","type":"walk"},{"id":"4214352424","athlete_id":"63991138","datetime":"2020-10-19 03:02:37","distance":1370,"duration":"0:18:24","type":"walk"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":23970,"total_time":"4:35:51"},"can_participate":true},{"id":"53857703","name":"Yves Prince","activities":[{"id":"4244248325","athlete_id":"53857703","datetime":"2020-10-25 23:10:54","distance":1310,"duration":"0:14:14","type":"run"},{"id":"4238822348","athlete_id":"53857703","datetime":"2020-10-24 20:34:50","distance":2350,"duration":"0:26:49","type":"run"},{"id":"4234939393","athlete_id":"53857703","datetime":"2020-10-24 01:04:11","distance":2450,"duration":"0:26:41","type":"run"},{"id":"4230903350","athlete_id":"53857703","datetime":"2020-10-22 22:51:31","distance":2280,"duration":"0:24:49","type":"run"},{"id":"4226552028","athlete_id":"53857703","datetime":"2020-10-21 22:49:28","distance":2150,"duration":"0:24:42","type":"run"},{"id":"4222484059","athlete_id":"53857703","datetime":"2020-10-20 23:27:14","distance":2130,"duration":"0:23:59","type":"run"},{"id":"4218148889","athlete_id":"53857703","datetime":"2020-10-20 00:23:55","distance":1480,"duration":"0:16:18","type":"run"},{"id":"4214177414","athlete_id":"53857703","datetime":"2020-10-18 23:11:13","distance":2190,"duration":"0:24:54","type":"run"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":14150,"bike":0,"others":0,"total_time":"2:37:32"},"can_participate":false},{"id":"53741353","name":"Virginie jacques nadeau","activities":[{"id":"4243917218","athlete_id":"53741353","datetime":"2020-10-25 18:01:28","distance":7420,"duration":"1:34:00","type":"walk"},{"id":"4239188346","athlete_id":"53741353","datetime":"2020-10-24 19:47:58","distance":10130,"duration":"1:44:00","type":"walk"},{"id":"4234288997","athlete_id":"53741353","datetime":"2020-10-23 19:16:36","distance":8000,"duration":"1:50:00","type":"walk"},{"id":"4226446655","athlete_id":"53741353","datetime":"2020-10-21 20:28:33","distance":3900,"duration":"0:41:17","type":"run"},{"id":"4213599627","athlete_id":"53741353","datetime":"2020-10-18 19:48:08","distance":2740,"duration":"0:35:41","type":"bike"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":3900,"bike":0,"others":25550,"total_time":"5:49:17"},"can_participate":true},{"id":"53650739","name":"Benjamin Cartier","activities":[{"id":"4243860691","athlete_id":"53650739","datetime":"2020-10-25 19:58:22","distance":2610,"duration":"0:16:05","type":"unknown"},{"id":"4229397389","athlete_id":"53650739","datetime":"2020-10-22 15:48:16","distance":7680,"duration":"0:47:41","type":"unknown"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":10290,"total_time":"1:03:46"},"can_participate":false},{"id":"57677238","name":"Adam Hammes","activities":[{"id":"4243700198","athlete_id":"57677238","datetime":"2020-10-25 16:04:40","distance":8240,"duration":"2:10:00","type":"run"},{"id":"4238987029","athlete_id":"57677238","datetime":"2020-10-24 19:08:39","distance":6660,"duration":"1:44:00","type":"run"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":14900,"bike":0,"others":0,"total_time":"3:54:00"},"can_participate":true},{"id":"30050927","name":"David .","activities":[{"id":"4243627910","athlete_id":"30050927","datetime":"2020-10-25 19:15:31","distance":2840,"duration":"0:28:51","type":"walk"},{"id":"4242274897","athlete_id":"30050927","datetime":"2020-10-25 14:36:38","distance":1890,"duration":"0:17:52","type":"walk"},{"id":"4241993430","athlete_id":"30050927","datetime":"2020-10-25 13:47:03","distance":1870,"duration":"0:18:24","type":"walk"},{"id":"4235106892","athlete_id":"30050927","datetime":"2020-10-24 04:39:30","distance":320,"duration":"0:03:18","type":"run"},{"id":"4235106796","athlete_id":"30050927","datetime":"2020-10-24 04:26:16","distance":130,"duration":"0:01:23","type":"run"},{"id":"4235045894","athlete_id":"30050927","datetime":"2020-10-24 03:44:23","distance":500,"duration":"0:04:58","type":"run"},{"id":"4235037449","athlete_id":"30050927","datetime":"2020-10-24 03:38:55","distance":340,"duration":"0:02:58","type":"run"},{"id":"4233976958","athlete_id":"30050927","datetime":"2020-10-23 18:33:22","distance":25950,"duration":"0:50:11","type":"bike"},{"id":"4229380228","athlete_id":"30050927","datetime":"2020-10-22 15:14:17","distance":9420,"duration":"1:40:00","type":"walk"},{"id":"4225773186","athlete_id":"30050927","datetime":"2020-10-21 18:43:25","distance":4650,"duration":"0:48:16","type":"walk"},{"id":"4222219184","athlete_id":"30050927","datetime":"2020-10-20 18:39:30","distance":2320,"duration":"0:22:50","type":"walk"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":1290,"bike":25950,"others":22990,"total_time":"4:59:01"},"can_participate":true},{"id":"70596342","name":"F\xe9lix-Olivier Beauchamp","activities":[{"id":"4243624021","athlete_id":"70596342","datetime":"2020-10-25 19:25:06","distance":1290,"duration":"0:18:10","type":"walk"},{"id":"4238108702","athlete_id":"70596342","datetime":"2020-10-24 11:30:02","distance":0,"duration":"1:00:00","type":"swim"},{"id":"4233443544","athlete_id":"70596342","datetime":"2020-10-23 16:32:30","distance":1040,"duration":"0:15:50","type":"walk"},{"id":"4229440309","athlete_id":"70596342","datetime":"2020-10-22 16:45:50","distance":1380,"duration":"0:20:06","type":"walk"},{"id":"4227126622","athlete_id":"70596342","datetime":"2020-10-22 05:06:28","distance":0,"duration":"1:15:00","type":"unknown"},{"id":"4217772584","athlete_id":"70596342","datetime":"2020-10-19 22:09:46","distance":2730,"duration":"0:37:32","type":"walk"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":6440,"total_time":"3:46:38"},"can_participate":true},{"id":"55618908","name":"Jesse Sopel","activities":[{"id":"4243591851","athlete_id":"55618908","datetime":"2020-10-25 19:08:16","distance":1790,"duration":"0:22:22","type":"walk"},{"id":"4234271026","athlete_id":"55618908","datetime":"2020-10-23 21:19:09","distance":1310,"duration":"0:15:04","type":"walk"},{"id":"4234272588","athlete_id":"55618908","datetime":"2020-10-23 19:30:29","distance":0,"duration":"1:30:00","type":"unknown"},{"id":"4230423991","athlete_id":"55618908","datetime":"2020-10-22 21:03:50","distance":2130,"duration":"0:28:02","type":"walk"},{"id":"4226505712","athlete_id":"55618908","datetime":"2020-10-21 20:55:27","distance":0,"duration":"1:15:00","type":"unknown"},{"id":"4222295597","athlete_id":"55618908","datetime":"2020-10-20 21:00:02","distance":2000,"duration":"0:25:00","type":"walk"},{"id":"4213439209","athlete_id":"55618908","datetime":"2020-10-18 19:10:06","distance":2190,"duration":"0:26:22","type":"walk"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":7230,"total_time":"4:15:28"},"can_participate":true},{"id":"62603443","name":"Agnes Zitte","activities":[{"id":"4243730785","athlete_id":"62603443","datetime":"2020-10-25 18:36:35","distance":1910,"duration":"0:35:37","type":"unknown"},{"id":"4226815215","athlete_id":"62603443","datetime":"2020-10-22 01:11:37","distance":1010,"duration":"0:16:27","type":"walk"},{"id":"4226764737","athlete_id":"62603443","datetime":"2020-10-21 22:27:46","distance":3100,"duration":"1:14:00","type":"unknown"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":6020,"total_time":"2:06:04"},"can_participate":false},{"id":"5493967","name":"Rene Charbonneau","activities":[{"id":"4243078891","athlete_id":"5493967","datetime":"2020-10-25 16:17:02","distance":4270,"duration":"0:54:02","type":"walk"},{"id":"4232692691","athlete_id":"5493967","datetime":"2020-10-23 12:42:05","distance":7740,"duration":"0:49:15","type":"run"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":7740,"bike":0,"others":4270,"total_time":"1:43:17"},"can_participate":false},{"id":"54439103","name":"Julie Lortie-Pelletier","activities":[{"id":"4242594956","athlete_id":"54439103","datetime":"2020-10-25 14:34:55","distance":5320,"duration":"1:10:00","type":"walk"},{"id":"4241148189","athlete_id":"54439103","datetime":"2020-10-24 19:30:00","distance":0,"duration":"0:20:00","type":"walk"},{"id":"4237902664","athlete_id":"54439103","datetime":"2020-10-24 15:44:03","distance":3780,"duration":"0:49:56","type":"walk"},{"id":"4237908275","athlete_id":"54439103","datetime":"2020-10-23 13:00:00","distance":0,"duration":"0:40:00","type":"walk"},{"id":"4237906095","athlete_id":"54439103","datetime":"2020-10-22 20:30:00","distance":0,"duration":"0:30:00","type":"walk"},{"id":"4222397996","athlete_id":"54439103","datetime":"2020-10-20 23:10:21","distance":4560,"duration":"0:52:14","type":"walk"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":13660,"total_time":"4:22:10"},"can_participate":true},{"id":"53862382","name":"Gabriel L\xe9tourneau","activities":[{"id":"4239201242","athlete_id":"53862382","datetime":"2020-10-24 23:26:09","distance":6400,"duration":"0:40:03","type":"run"},{"id":"4230268277","athlete_id":"53862382","datetime":"2020-10-22 19:55:56","distance":7640,"duration":"0:44:13","type":"run"},{"id":"4221935063","athlete_id":"53862382","datetime":"2020-10-20 20:55:48","distance":8100,"duration":"0:46:35","type":"run"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":22140,"bike":0,"others":0,"total_time":"2:10:51"},"can_participate":false},{"id":"55385678","name":"Quentin Auvray","activities":[{"id":"4238966335","athlete_id":"55385678","datetime":"2020-10-24 20:27:52","distance":0,"duration":"1:52:00","type":"workout"},{"id":"4238611999","athlete_id":"55385678","datetime":"2020-10-24 18:05:52","distance":5550,"duration":"1:06:00","type":"walk"},{"id":"4234546118","athlete_id":"55385678","datetime":"2020-10-23 21:00:54","distance":0,"duration":"2:24:00","type":"workout"},{"id":"4234578198","athlete_id":"55385678","datetime":"2020-10-23 16:39:11","distance":0,"duration":"0:12:00","type":"walk"},{"id":"4226168459","athlete_id":"55385678","datetime":"2020-10-21 19:59:36","distance":0,"duration":"1:48:00","type":"workout"},{"id":"4226257719","athlete_id":"55385678","datetime":"2020-10-21 17:30:07","distance":0,"duration":"0:15:00","type":"walk"},{"id":"4218003531","athlete_id":"55385678","datetime":"2020-10-19 21:43:02","distance":0,"duration":"2:20:00","type":"workout"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":5550,"total_time":"9:57:00"},"can_participate":true},{"id":"34665862","name":"William-Jos\xe9 Simard-Touzet","activities":[{"id":"4238806106","athlete_id":"34665862","datetime":"2020-10-24 20:43:50","distance":0,"duration":"0:35:00","type":"walk"},{"id":"4222791333","athlete_id":"34665862","datetime":"2020-10-20 23:10:00","distance":0,"duration":"1:00:00","type":"walk"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":0,"total_time":"1:35:00"},"can_participate":false},{"id":"57495632","name":"Elisabeth Dupuis","activities":[{"id":"4238626444","athlete_id":"57495632","datetime":"2020-10-24 19:32:26","distance":2730,"duration":"0:25:28","type":"unknown"},{"id":"4238499521","athlete_id":"57495632","datetime":"2020-10-24 18:12:39","distance":2700,"duration":"0:59:03","type":"unknown"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":5430,"total_time":"1:24:31"},"can_participate":false},{"id":"6063898","name":"Max Cantin","activities":[{"id":"4238539497","athlete_id":"6063898","datetime":"2020-10-24 18:11:18","distance":39290,"duration":"1:19:00","type":"bike"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":39290,"others":0,"total_time":"1:19:00"},"can_participate":false},{"id":"33346446","name":"Laura C\xf4t\xe9","activities":[{"id":"4238342412","athlete_id":"33346446","datetime":"2020-10-24 17:23:37","distance":32180,"duration":"1:00:00","type":"unknown"},{"id":"4234319294","athlete_id":"33346446","datetime":"2020-10-23 20:58:47","distance":27920,"duration":"0:58:02","type":"unknown"},{"id":"4226132411","athlete_id":"33346446","datetime":"2020-10-21 20:35:56","distance":24800,"duration":"1:00:00","type":"unknown"},{"id":"4221865024","athlete_id":"33346446","datetime":"2020-10-20 20:25:49","distance":21080,"duration":"0:55:42","type":"unknown"},{"id":"4213187855","athlete_id":"33346446","datetime":"2020-10-18 17:20:11","distance":33840,"duration":"1:07:00","type":"unknown"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":105980,"total_time":"3:53:44"},"can_participate":true},{"id":"18551446","name":"JM L","activities":[{"id":"4236808532","athlete_id":"18551446","datetime":"2020-10-24 12:46:07","distance":10920,"duration":"0:26:09","type":"unknown"},{"id":"4229263024","athlete_id":"18551446","datetime":"2020-10-22 15:03:43","distance":45700,"duration":"1:30:00","type":"unknown"},{"id":"4221268849","athlete_id":"18551446","datetime":"2020-10-20 17:51:18","distance":16840,"duration":"0:35:10","type":"unknown"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":73460,"total_time":"2:31:19"},"can_participate":false},{"id":"53751402","name":"Julie Rose","activities":[{"id":"4234327049","athlete_id":"53751402","datetime":"2020-10-23 21:32:29","distance":2110,"duration":"0:27:18","type":"walk"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":2110,"total_time":"0:27:18"},"can_participate":false},{"id":"64307664","name":"Martin Gagnon","activities":[{"id":"4234286637","athlete_id":"64307664","datetime":"2020-10-23 21:25:57","distance":1320,"duration":"0:14:28","type":"run"},{"id":"4228052566","athlete_id":"64307664","datetime":"2020-10-22 11:05:00","distance":2200,"duration":"0:21:24","type":"run"},{"id":"4223944290","athlete_id":"64307664","datetime":"2020-10-21 11:43:46","distance":1500,"duration":"0:13:34","type":"run"},{"id":"4221516422","athlete_id":"64307664","datetime":"2020-10-20 19:05:20","distance":2210,"duration":"0:20:06","type":"run"},{"id":"4215188039","athlete_id":"64307664","datetime":"2020-10-19 10:34:01","distance":1460,"duration":"0:14:46","type":"run"},{"id":"4213894024","athlete_id":"64307664","datetime":"2020-10-18 22:05:59","distance":2480,"duration":"0:28:59","type":"run"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":8690,"bike":0,"others":0,"total_time":"1:24:18"},"can_participate":false},{"id":"42892218","name":"Aur\xe9lie Sa\xeez","activities":[{"id":"4234247702","athlete_id":"42892218","datetime":"2020-10-23 20:39:58","distance":5680,"duration":"0:31:22","type":"run"},{"id":"4230585103","athlete_id":"42892218","datetime":"2020-10-22 21:58:00","distance":5330,"duration":"0:28:16","type":"run"},{"id":"4221927269","athlete_id":"42892218","datetime":"2020-10-20 21:14:31","distance":5000,"duration":"0:26:29","type":"run"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":16010,"bike":0,"others":0,"total_time":"1:26:07"},"can_participate":false},{"id":"53663769","name":"Mathieu Tremblay","activities":[{"id":"4233953740","athlete_id":"53663769","datetime":"2020-10-24 01:00:35","distance":1670,"duration":"0:22:01","type":"unknown"},{"id":"4217471033","athlete_id":"53663769","datetime":"2020-10-20 02:49:32","distance":1220,"duration":"0:15:30","type":"unknown"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":2890,"total_time":"0:37:31"},"can_participate":false},{"id":"68910626","name":"Sasa Krsmanovic","activities":[{"id":"4230026747","athlete_id":"68910626","datetime":"2020-10-22 18:52:15","distance":1390,"duration":"0:11:14","type":"walk"},{"id":"4225738001","athlete_id":"68910626","datetime":"2020-10-21 18:51:09","distance":1160,"duration":"0:10:22","type":"walk"},{"id":"4221483969","athlete_id":"68910626","datetime":"2020-10-20 18:49:32","distance":1420,"duration":"0:13:01","type":"walk"},{"id":"4217097836","athlete_id":"68910626","datetime":"2020-10-19 03:13:33","distance":0,"duration":"0:45:00","type":"workout"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":3970,"total_time":"1:19:37"},"can_participate":false},{"id":"10155738","name":"Stewart Polsky","activities":[{"id":"4222436839","athlete_id":"10155738","datetime":"2020-10-20 23:22:14","distance":2930,"duration":"0:51:38","type":"walk"},{"id":"4214075522","athlete_id":"10155738","datetime":"2020-10-18 23:10:08","distance":2640,"duration":"0:48:05","type":"walk"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":2930,"total_time":"0:51:38"},"can_participate":false},{"id":"62602861","name":"Patrice Patenaude","activities":[{"id":"4213512476","athlete_id":"62602861","datetime":"2020-10-18 17:08:18","distance":9600,"duration":"2:04:00","type":"walk"}],"distance_this_week":{"monday":"2020-10-19","sunday":"2020-10-25","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false}],"last_updated":"2020-10-26 09:22:35.607293","date_from":"2020-10-19","date_to":"2020-10-25"}')}},[[11,1,2]]]);
//# sourceMappingURL=main.153511d1.chunk.js.map
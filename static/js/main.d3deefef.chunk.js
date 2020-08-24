(this["webpackJsonpstrava-club-challenge"]=this["webpackJsonpstrava-club-challenge"]||[]).push([[0],{11:function(e,t,i){e.exports=i(19)},16:function(e,t,i){},17:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a,n=i(0),d=i.n(n),r=i(9),s=i.n(r),u=(i(16),i(10)),c=(i(17),i(4)),l=i(1),o=i(6);!function(e){e[e.ascending=0]="ascending",e[e.descending=1]="descending"}(a||(a={}));var m=function(e){var t=e.startOrder,i=e.onToggle,r=e.children,s=Object(n.useState)(t||a.descending),u=Object(o.a)(s,2),c=u[0],l=u[1];return d.a.createElement("span",{className:"table-header-filter",onClick:function(){i&&i(c);var e=c===a.ascending?a.descending:a.ascending;l(e)}},r," \u25be")},_=i(2),h=i.n(_),p=(i(8),function(e){var t=e.athletes;function i(e){return 0!==e?"".concat(e/1e3):""}return d.a.createElement(d.a.Fragment,null,t.map((function(e,t){return d.a.createElement("tr",{key:e.id},d.a.createElement("td",null,e.name),d.a.createElement("td",null,function(e){var t=e.split(":")[0],i=e.split(":")[1],a=e.split(":")[2];return h.a.duration({seconds:parseInt(a),minutes:parseInt(i),hours:parseInt(t)}).format("h[h] m[m] s[s]")}(e.distance_this_week.total_time)),d.a.createElement("td",null,i(e.distance_this_week.run)),d.a.createElement("td",null,i(e.distance_this_week.bike)),d.a.createElement("td",null,i(e.distance_this_week.others)),d.a.createElement("td",null,e.can_participate?d.a.createElement("span",{style:{color:"green"}},"\u2713"):"Not yet"))})))});function y(e){var t=e.athletes,i=Object(n.useState)(t),r=Object(o.a)(i,2),s=r[0],u=r[1],c=Object(n.useCallback)((function(e){var i=t.sort((function(t,i){var n=t.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase(),d=i.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();if(e===a.ascending){if(n>d)return 1;if(n<d)return-1}if(e===a.descending){if(n<d)return 1;if(n>d)return-1}return 0}));u(Object(l.a)(i))}),[t]);return Object(n.useEffect)((function(){c(a.ascending)}),[c]),d.a.createElement(d.a.Fragment,null,d.a.createElement("table",null,d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,d.a.createElement(m,{onToggle:c},"Name")),d.a.createElement("th",null,d.a.createElement(m,{onToggle:function(e){var i=t.sort((function(t,i){var n=t.distance_this_week.total_time,d=i.distance_this_week.total_time,r=n.split(":")[0],s=n.split(":")[1],u=n.split(":")[2],c=d.split(":")[0],l=d.split(":")[1],o=d.split(":")[2],m=h.a.duration({seconds:parseInt(u),minutes:parseInt(s),hours:parseInt(r)}),_=h.a.duration({seconds:parseInt(o),minutes:parseInt(l),hours:parseInt(c)});if(e===a.ascending){if(m>_)return 1;if(m<_)return-1}if(e===a.descending){if(m<_)return 1;if(m>_)return-1}return 0}));u(Object(l.a)(i))}},"Total time")),d.a.createElement("th",null,d.a.createElement(m,{onToggle:function(e){var i=t.sort((function(t,i){var n=t.distance_this_week.run,d=i.distance_this_week.run;if(e===a.ascending){if(n>d)return 1;if(n<d)return-1}if(e===a.descending){if(n<d)return 1;if(n>d)return-1}return 0}));u(Object(l.a)(i))}},"Run distance (km)")),d.a.createElement("th",null,d.a.createElement(m,{onToggle:function(e){var i=t.sort((function(t,i){var n=t.distance_this_week.bike,d=i.distance_this_week.bike;if(e===a.ascending){if(n>d)return 1;if(n<d)return-1}if(e===a.descending){if(n<d)return 1;if(n>d)return-1}return 0}));u(Object(l.a)(i))}},"Bike distance (km)")),d.a.createElement("th",null,d.a.createElement(m,{onToggle:function(e){var i=t.sort((function(t,i){var n=t.distance_this_week.others,d=i.distance_this_week.others;if(e===a.ascending){if(n>d)return 1;if(n<d)return-1}if(e===a.descending){if(n<d)return 1;if(n>d)return-1}return 0}));u(Object(l.a)(i))}},"Other distance (km)")),d.a.createElement("th",null,d.a.createElement(m,{startOrder:a.ascending,onToggle:function(e){var i=t.sort((function(t,i){if(e===a.ascending){if(t.can_participate)return-1;if(i.can_participate)return 1}if(e===a.descending){if(t.can_participate)return 1;if(i.can_participate)return-1}return 0}));u(Object(l.a)(i))}},"Is eligible?")))),d.a.createElement("tbody",null,d.a.createElement(p,{athletes:s}))))}var k=function(){var e=c.athletes,t=c.date_from,i=c.date_to,a=c.last_updated;return d.a.createElement("div",{className:"app container"},d.a.createElement("h5",{className:"header-last_updated"},"Last updated: ",a&&d.a.createElement(u.a,{datetime:a,locale:"fr_CA"})),d.a.createElement("h1",{className:"header-title"},"nventive Strava Challenge"),d.a.createElement("blockquote",null,d.a.createElement("p",null,d.a.createElement("em",null,"To be eligible for the weekly draw, a participant must, at least, do 3 hours and 30 min of physical activity."))),d.a.createElement("p",{style:{marginBottom:"1rem"}},d.a.createElement("b",null,t)," to ",d.a.createElement("b",null,i)),d.a.createElement("div",{className:"table"},d.a.createElement(y,{athletes:e})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(d.a.createElement(d.a.StrictMode,null,d.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e){e.exports=JSON.parse('{"athletes":[{"id":"53744985","name":"Guillaume Fortin","activities":[{"id":"3958972335","athlete_id":"53744985","datetime":"2020-08-21 15:30:41","distance":0,"duration":"2:30:00","type":"run"},{"id":"3943149757","athlete_id":"53744985","datetime":"2020-08-20 23:40:08","distance":12830,"duration":"0:36:54","type":"bike"},{"id":"3938272221","athlete_id":"53744985","datetime":"2020-08-19 22:20:26","distance":25470,"duration":"1:16:00","type":"bike"},{"id":"3958974698","athlete_id":"53744985","datetime":"2020-08-18 22:30:10","distance":0,"duration":"1:00:00","type":"unknown"},{"id":"3924405347","athlete_id":"53744985","datetime":"2020-08-15 18:25:21","distance":19000,"duration":"0:52:00","type":"bike"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":0,"bike":38300,"others":0,"total_time":"5:22:54"},"can_participate":true},{"id":"43834742","name":"Jeff Fogel","activities":[{"id":"3958903278","athlete_id":"43834742","datetime":"2020-08-22 16:00:20","distance":0,"duration":"4:00:00","type":"workout"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":0,"bike":0,"others":0,"total_time":"4:00:00"},"can_participate":true},{"id":"34665862","name":"William-Jos\xe9 Simard-Touzet","activities":[{"id":"3957095553","athlete_id":"34665862","datetime":"2020-08-24 00:18:54","distance":1220,"duration":"0:13:13","type":"walk"},{"id":"3951439930","athlete_id":"34665862","datetime":"2020-08-22 19:20:32","distance":4280,"duration":"0:56:14","type":"walk"},{"id":"3947201026","athlete_id":"34665862","datetime":"2020-08-21 23:48:14","distance":3010,"duration":"0:38:39","type":"walk"},{"id":"3932964172","athlete_id":"34665862","datetime":"2020-08-18 15:06:32","distance":3190,"duration":"0:59:17","type":"walk"},{"id":"3928249400","athlete_id":"34665862","datetime":"2020-08-17 18:45:21","distance":0,"duration":"2:15:00","type":"unknown"},{"id":"3923035816","athlete_id":"34665862","datetime":"2020-08-16 16:37:15","distance":6300,"duration":"1:17:00","type":"walk"},{"id":"3918586520","athlete_id":"34665862","datetime":"2020-08-15 15:03:30","distance":3830,"duration":"1:13:00","type":"walk"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":0,"bike":0,"others":10480,"total_time":"4:49:10"},"can_participate":true},{"id":"18551446","name":"JM L","activities":[{"id":"3956725345","athlete_id":"18551446","datetime":"2020-08-23 20:19:36","distance":24750,"duration":"1:10:00","type":"unknown"},{"id":"3937856619","athlete_id":"18551446","datetime":"2020-08-19 20:48:41","distance":20010,"duration":"0:47:50","type":"unknown"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":0,"bike":0,"others":44760,"total_time":"1:57:50"},"can_participate":false},{"id":"53862382","name":"Gabriel L\xe9tourneau","activities":[{"id":"3956667427","athlete_id":"53862382","datetime":"2020-08-23 14:55:55","distance":29120,"duration":"4:44:00","type":"run"},{"id":"3928922014","athlete_id":"53862382","datetime":"2020-08-18 02:50:20","distance":7020,"duration":"0:50:20","type":"run"},{"id":"3918478875","athlete_id":"53862382","datetime":"2020-08-15 18:18:51","distance":15390,"duration":"2:24:00","type":"run"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":36140,"bike":0,"others":0,"total_time":"5:34:20"},"can_participate":true},{"id":"55618908","name":"Jesse Sopel","activities":[{"id":"3956595579","athlete_id":"55618908","datetime":"2020-08-23 20:00:11","distance":2000,"duration":"0:27:41","type":"walk"},{"id":"3955438126","athlete_id":"55618908","datetime":"2020-08-23 14:05:11","distance":0,"duration":"1:20:00","type":"unknown"},{"id":"3951255448","athlete_id":"55618908","datetime":"2020-08-22 19:26:37","distance":1870,"duration":"0:23:04","type":"walk"},{"id":"3946705852","athlete_id":"55618908","datetime":"2020-08-21 20:32:40","distance":1850,"duration":"0:23:38","type":"walk"},{"id":"3942710507","athlete_id":"55618908","datetime":"2020-08-20 21:23:25","distance":1800,"duration":"0:22:39","type":"walk"},{"id":"3942633232","athlete_id":"55618908","datetime":"2020-08-20 20:15:45","distance":0,"duration":"0:45:00","type":"unknown"},{"id":"3932875716","athlete_id":"55618908","datetime":"2020-08-18 20:19:29","distance":1240,"duration":"0:15:24","type":"walk"},{"id":"3928135359","athlete_id":"55618908","datetime":"2020-08-17 21:29:23","distance":1320,"duration":"0:18:58","type":"walk"},{"id":"3923718003","athlete_id":"55618908","datetime":"2020-08-16 20:38:18","distance":1800,"duration":"0:24:02","type":"walk"},{"id":"3922307505","athlete_id":"55618908","datetime":"2020-08-16 14:00:29","distance":0,"duration":"1:25:00","type":"unknown"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":0,"bike":0,"others":10080,"total_time":"4:16:24"},"can_participate":true},{"id":"57677238","name":"Adam Hammes","activities":[{"id":"3957189266","athlete_id":"57677238","datetime":"2020-08-23 18:44:55","distance":4300,"duration":"0:57:54","type":"run"},{"id":"3951533402","athlete_id":"57677238","datetime":"2020-08-22 15:33:19","distance":37050,"duration":"2:32:00","type":"bike"},{"id":"3949803676","athlete_id":"57677238","datetime":"2020-08-22 12:51:17","distance":1570,"duration":"0:16:04","type":"run"},{"id":"3947507072","athlete_id":"57677238","datetime":"2020-08-21 21:52:32","distance":3810,"duration":"0:52:24","type":"run"},{"id":"3938577604","athlete_id":"57677238","datetime":"2020-08-20 00:29:06","distance":3950,"duration":"0:54:56","type":"run"},{"id":"3933636830","athlete_id":"57677238","datetime":"2020-08-19 00:12:08","distance":1360,"duration":"0:15:22","type":"run"},{"id":"3928706642","athlete_id":"57677238","datetime":"2020-08-18 00:40:36","distance":3890,"duration":"0:43:14","type":"run"},{"id":"3923816792","athlete_id":"57677238","datetime":"2020-08-16 20:06:03","distance":4240,"duration":"0:58:34","type":"run"},{"id":"3918561249","athlete_id":"57677238","datetime":"2020-08-15 18:44:30","distance":4430,"duration":"1:38:00","type":"run"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":18880,"bike":37050,"others":0,"total_time":"6:31:54"},"can_participate":true},{"id":"6063898","name":"Max Cantin","activities":[{"id":"3956268335","athlete_id":"6063898","datetime":"2020-08-23 18:01:13","distance":10220,"duration":"0:48:45","type":"run"},{"id":"3950898375","athlete_id":"6063898","datetime":"2020-08-22 17:00:00","distance":79000,"duration":"2:20:00","type":"bike"},{"id":"3950030899","athlete_id":"6063898","datetime":"2020-08-21 19:13:36","distance":1500,"duration":"0:07:01","type":"run"},{"id":"3936415838","athlete_id":"6063898","datetime":"2020-08-19 15:43:48","distance":4690,"duration":"0:20:31","type":"run"},{"id":"3922574349","athlete_id":"6063898","datetime":"2020-08-16 14:08:36","distance":55180,"duration":"1:56:00","type":"bike"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":16410,"bike":79000,"others":0,"total_time":"3:36:17"},"can_participate":true},{"id":"63991138","name":"Janet Fan","activities":[{"id":"3956029374","athlete_id":"63991138","datetime":"2020-08-23 17:44:23","distance":1430,"duration":"0:14:24","type":"run"},{"id":"3951843517","athlete_id":"63991138","datetime":"2020-08-22 23:11:50","distance":1300,"duration":"0:39:30","type":"run"},{"id":"3950694095","athlete_id":"63991138","datetime":"2020-08-22 17:09:43","distance":920,"duration":"0:08:54","type":"run"},{"id":"3950252140","athlete_id":"63991138","datetime":"2020-08-22 15:06:23","distance":2450,"duration":"0:26:15","type":"run"},{"id":"3943189525","athlete_id":"63991138","datetime":"2020-08-21 00:17:24","distance":1220,"duration":"0:12:04","type":"run"},{"id":"3938158277","athlete_id":"63991138","datetime":"2020-08-19 22:01:04","distance":4680,"duration":"1:10:00","type":"run"},{"id":"3934053970","athlete_id":"63991138","datetime":"2020-08-19 03:54:09","distance":1030,"duration":"0:08:52","type":"run"},{"id":"3933447467","athlete_id":"63991138","datetime":"2020-08-18 22:04:41","distance":4940,"duration":"0:49:59","type":"run"},{"id":"3932304651","athlete_id":"63991138","datetime":"2020-08-18 18:26:16","distance":960,"duration":"0:08:52","type":"run"},{"id":"3928745947","athlete_id":"63991138","datetime":"2020-08-18 01:15:36","distance":1760,"duration":"0:15:11","type":"run"},{"id":"3923387470","athlete_id":"63991138","datetime":"2020-08-16 15:11:27","distance":10620,"duration":"1:54:00","type":"run"},{"id":"3918735974","athlete_id":"63991138","datetime":"2020-08-15 21:41:00","distance":1740,"duration":"0:17:18","type":"run"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":20690,"bike":0,"others":0,"total_time":"4:14:01"},"can_participate":true},{"id":"53741353","name":"Virginie jacques nadeau","activities":[{"id":"3955305656","athlete_id":"53741353","datetime":"2020-08-23 15:08:58","distance":2060,"duration":"0:21:06","type":"run"},{"id":"3952754907","athlete_id":"53741353","datetime":"2020-08-23 07:39:00","distance":1620,"duration":"0:14:48","type":"run"},{"id":"3952168424","athlete_id":"53741353","datetime":"2020-08-23 02:11:42","distance":1760,"duration":"0:17:07","type":"run"},{"id":"3951225460","athlete_id":"53741353","datetime":"2020-08-22 15:05:57","distance":7070,"duration":"2:27:00","type":"run"},{"id":"3947365143","athlete_id":"53741353","datetime":"2020-08-22 00:45:34","distance":3420,"duration":"0:33:40","type":"run"},{"id":"3946932464","athlete_id":"53741353","datetime":"2020-08-21 20:41:54","distance":6580,"duration":"1:02:00","type":"run"},{"id":"3942904384","athlete_id":"53741353","datetime":"2020-08-20 21:58:49","distance":3900,"duration":"0:34:14","type":"run"},{"id":"3938312927","athlete_id":"53741353","datetime":"2020-08-19 21:26:03","distance":5810,"duration":"0:56:08","type":"run"},{"id":"3936934908","athlete_id":"53741353","datetime":"2020-08-19 16:42:45","distance":3800,"duration":"0:37:17","type":"run"},{"id":"3933384157","athlete_id":"53741353","datetime":"2020-08-18 22:49:34","distance":2260,"duration":"0:21:46","type":"run"},{"id":"3933243054","athlete_id":"53741353","datetime":"2020-08-18 22:12:02","distance":1550,"duration":"0:15:09","type":"run"},{"id":"3923888344","athlete_id":"53741353","datetime":"2020-08-16 19:22:49","distance":8250,"duration":"1:17:00","type":"run"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":39830,"bike":0,"others":0,"total_time":"7:40:15"},"can_participate":true},{"id":"54439103","name":"Julie Lortie-Pelletier","activities":[{"id":"3955218116","athlete_id":"54439103","datetime":"2020-08-23 14:26:13","distance":4220,"duration":"0:58:16","type":"walk"},{"id":"3943218659","athlete_id":"54439103","datetime":"2020-08-20 23:21:42","distance":5380,"duration":"1:16:00","type":"walk"},{"id":"3941465137","athlete_id":"54439103","datetime":"2020-08-20 16:31:07","distance":2140,"duration":"0:25:09","type":"walk"},{"id":"3931703740","athlete_id":"54439103","datetime":"2020-08-18 16:17:51","distance":3600,"duration":"0:38:24","type":"walk"},{"id":"3928299175","athlete_id":"54439103","datetime":"2020-08-17 22:35:19","distance":2080,"duration":"0:25:03","type":"walk"},{"id":"3926798781","athlete_id":"54439103","datetime":"2020-08-17 16:20:13","distance":2210,"duration":"0:23:42","type":"walk"},{"id":"3918406329","athlete_id":"54439103","datetime":"2020-08-15 19:57:14","distance":2240,"duration":"0:28:34","type":"walk"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":0,"bike":0,"others":19630,"total_time":"4:06:34"},"can_participate":true},{"id":"30050927","name":"David .","activities":[{"id":"3952098662","athlete_id":"30050927","datetime":"2020-08-23 01:26:38","distance":1890,"duration":"0:20:30","type":"walk"},{"id":"3951132343","athlete_id":"30050927","datetime":"2020-08-22 16:48:06","distance":65300,"duration":"2:08:00","type":"bike"},{"id":"3942159750","athlete_id":"30050927","datetime":"2020-08-20 18:53:26","distance":340000,"duration":"0:07:43","type":"swim"},{"id":"3942098073","athlete_id":"30050927","datetime":"2020-08-20 18:16:54","distance":0,"duration":"0:33:23","type":"workout"},{"id":"3935532122","athlete_id":"30050927","datetime":"2020-08-18 19:26:40","distance":0,"duration":"0:34:02","type":"workout"},{"id":"3931409097","athlete_id":"30050927","datetime":"2020-08-18 14:56:01","distance":3680,"duration":"0:39:20","type":"walk"},{"id":"3923203542","athlete_id":"30050927","datetime":"2020-08-16 16:18:51","distance":8230,"duration":"1:48:00","type":"walk"},{"id":"3919446549","athlete_id":"30050927","datetime":"2020-08-16 01:19:21","distance":860,"duration":"0:10:16","type":"walk"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":0,"bike":65300,"others":345570,"total_time":"4:22:58"},"can_participate":true},{"id":"2127037","name":"David Hamel","activities":[{"id":"3952221335","athlete_id":"2127037","datetime":"2020-08-22 22:24:20","distance":32510,"duration":"1:19:00","type":"bike"},{"id":"3950042312","athlete_id":"2127037","datetime":"2020-08-22 13:51:31","distance":31090,"duration":"1:18:00","type":"bike"},{"id":"3923865457","athlete_id":"2127037","datetime":"2020-08-16 21:05:33","distance":10520,"duration":"0:42:39","type":"bike"},{"id":"3918487602","athlete_id":"2127037","datetime":"2020-08-15 19:48:48","distance":5400,"duration":"0:42:40","type":"bike"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":0,"bike":63600,"others":0,"total_time":"2:37:00"},"can_participate":false},{"id":"8796776","name":"Catherine Sauzede","activities":[{"id":"3951816606","athlete_id":"8796776","datetime":"2020-08-22 23:06:32","distance":810,"duration":"0:11:33","type":"walk"},{"id":"3941490045","athlete_id":"8796776","datetime":"2020-08-20 13:43:52","distance":3430,"duration":"0:49:51","type":"walk"},{"id":"3931304396","athlete_id":"8796776","datetime":"2020-08-18 14:10:47","distance":3240,"duration":"0:45:26","type":"walk"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":0,"bike":0,"others":7480,"total_time":"1:46:50"},"can_participate":false},{"id":"53857703","name":"Yves Prince","activities":[{"id":"3951781522","athlete_id":"53857703","datetime":"2020-08-22 22:54:46","distance":960,"duration":"0:10:48","type":"run"},{"id":"3947396460","athlete_id":"53857703","datetime":"2020-08-22 00:32:25","distance":1730,"duration":"0:20:09","type":"run"},{"id":"3943137718","athlete_id":"53857703","datetime":"2020-08-20 23:45:56","distance":840,"duration":"0:09:00","type":"run"},{"id":"3938543626","athlete_id":"53857703","datetime":"2020-08-20 00:11:54","distance":1000,"duration":"0:10:03","type":"run"},{"id":"3933757696","athlete_id":"53857703","datetime":"2020-08-18 23:29:41","distance":4500,"duration":"0:51:12","type":"run"},{"id":"3928630212","athlete_id":"53857703","datetime":"2020-08-18 00:34:22","distance":1000,"duration":"0:11:43","type":"run"},{"id":"3924048506","athlete_id":"53857703","datetime":"2020-08-16 23:21:56","distance":1020,"duration":"0:11:23","type":"run"},{"id":"3919031040","athlete_id":"53857703","datetime":"2020-08-16 00:37:58","distance":1030,"duration":"0:10:34","type":"run"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":10030,"bike":0,"others":0,"total_time":"1:52:55"},"can_participate":false},{"id":"56823873","name":"Josee Barrette","activities":[{"id":"3950234999","athlete_id":"56823873","datetime":"2020-08-22 14:14:49","distance":2970,"duration":"0:32:33","type":"run"},{"id":"3950234694","athlete_id":"56823873","datetime":"2020-08-21 21:45:10","distance":1620,"duration":"0:16:17","type":"run"},{"id":"3946251132","athlete_id":"56823873","datetime":"2020-08-21 15:37:40","distance":2130,"duration":"0:21:48","type":"run"},{"id":"3937948384","athlete_id":"56823873","datetime":"2020-08-19 19:41:24","distance":1060,"duration":"0:15:41","type":"run"},{"id":"3935505501","athlete_id":"56823873","datetime":"2020-08-19 11:47:30","distance":3200,"duration":"0:34:45","type":"run"},{"id":"3935269310","athlete_id":"56823873","datetime":"2020-08-18 20:12:01","distance":1690,"duration":"0:20:31","type":"run"},{"id":"3928547617","athlete_id":"56823873","datetime":"2020-08-17 11:53:43","distance":1490,"duration":"0:21:10","type":"run"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":14160,"bike":0,"others":0,"total_time":"2:42:45"},"can_participate":false},{"id":"14753279","name":"Bernard Chhun","activities":[{"id":"3949717813","athlete_id":"14753279","datetime":"2020-08-22 13:07:50","distance":0,"duration":"0:46:50","type":"unknown"},{"id":"3942896143","athlete_id":"14753279","datetime":"2020-08-20 22:42:59","distance":1360,"duration":"0:08:44","type":"unknown"},{"id":"3942895851","athlete_id":"14753279","datetime":"2020-08-20 21:37:01","distance":0,"duration":"1:01:00","type":"unknown"},{"id":"3942894708","athlete_id":"14753279","datetime":"2020-08-20 21:17:38","distance":1390,"duration":"0:08:12","type":"unknown"},{"id":"3942894419","athlete_id":"14753279","datetime":"2020-08-20 16:11:13","distance":810,"duration":"0:19:08","type":"unknown"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":0,"bike":0,"others":3560,"total_time":"2:23:54"},"can_participate":false},{"id":"42892218","name":"Aur\xe9lie Sa\xeez","activities":[{"id":"3943923082","athlete_id":"42892218","datetime":"2020-08-21 06:33:44","distance":5030,"duration":"0:24:20","type":"run"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":5030,"bike":0,"others":0,"total_time":"0:24:20"},"can_participate":false},{"id":"33346446","name":"Laura C\xf4t\xe9","activities":[{"id":"3941312525","athlete_id":"33346446","datetime":"2020-08-20 15:40:41","distance":9080,"duration":"0:41:50","type":"run"},{"id":"3932882607","athlete_id":"33346446","datetime":"2020-08-18 19:29:41","distance":32080,"duration":"1:09:00","type":"bike"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":9080,"bike":32080,"others":0,"total_time":"1:50:50"},"can_participate":false},{"id":"53751402","name":"Julie Rose","activities":[{"id":"3938050779","athlete_id":"53751402","datetime":"2020-08-19 22:10:10","distance":2450,"duration":"0:28:29","type":"walk"},{"id":"3933258553","athlete_id":"53751402","datetime":"2020-08-18 22:19:34","distance":1570,"duration":"0:19:43","type":"walk"},{"id":"3923184932","athlete_id":"53751402","datetime":"2020-08-16 18:10:25","distance":2560,"duration":"0:29:20","type":"walk"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":0,"bike":0,"others":4020,"total_time":"0:48:12"},"can_participate":false},{"id":"28702625","name":"Dave Lewis","activities":[{"id":"3930744115","athlete_id":"28702625","datetime":"2020-08-18 12:49:06","distance":2680,"duration":"0:26:32","type":"run"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":2680,"bike":0,"others":0,"total_time":"0:26:32"},"can_participate":false},{"id":"41070425","name":"Francis-Olivier Couture","activities":[{"id":"3932981988","athlete_id":"41070425","datetime":"2020-08-17 23:35:33","distance":5010,"duration":"0:21:32","type":"run"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":5010,"bike":0,"others":0,"total_time":"0:21:32"},"can_participate":false},{"id":"59758738","name":"Carl de Billy","activities":[{"id":"3927879118","athlete_id":"59758738","datetime":"2020-08-17 19:47:56","distance":7740,"duration":"0:31:49","type":"bike"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":0,"bike":7740,"others":0,"total_time":"0:31:49"},"can_participate":false},{"id":"5493967","name":"Rene Charbonneau","activities":[{"id":"3918742675","athlete_id":"5493967","datetime":"2020-08-15 22:11:35","distance":0,"duration":"0:44:09","type":"workout"},{"id":"3918612608","athlete_id":"5493967","datetime":"2020-08-15 20:29:47","distance":0,"duration":"1:15:00","type":"workout"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false},{"id":"55385678","name":"Quentin Auvray","activities":[{"id":"3918687973","athlete_id":"55385678","datetime":"2020-08-15 21:20:44","distance":0,"duration":"1:11:00","type":"workout"}],"distance_this_week":{"monday":"2020-08-17","sunday":"2020-08-23","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false}],"last_updated":"2020-08-24 10:08:08.188905","date_from":"2020-08-17","date_to":"2020-08-23"}')}},[[11,1,2]]]);
//# sourceMappingURL=main.d3deefef.chunk.js.map
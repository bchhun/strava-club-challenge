(this["webpackJsonpstrava-club-challenge"]=this["webpackJsonpstrava-club-challenge"]||[]).push([[0],{11:function(t,e,i){t.exports=i(19)},16:function(t,e,i){},17:function(t,e,i){},19:function(t,e,i){"use strict";i.r(e);var a,d=i(0),n=i.n(d),r=i(9),s=i.n(r),l=(i(16),i(10)),u=(i(17),i(4)),c=i(1),o=i(6);!function(t){t[t.ascending=0]="ascending",t[t.descending=1]="descending"}(a||(a={}));var m=function(t){var e=t.startOrder,i=t.onToggle,r=t.children,s=Object(d.useState)(e||a.descending),l=Object(o.a)(s,2),u=l[0],c=l[1];return n.a.createElement("span",{className:"table-header-filter",onClick:function(){i&&i(u);var t=u===a.ascending?a.descending:a.ascending;c(t)}},r," \u25be")},_=i(2),h=i.n(_),p=(i(8),function(t){var e=t.athletes;function i(t){return 0!==t?"".concat(t/1e3):""}return n.a.createElement(n.a.Fragment,null,e.map((function(t,e){return n.a.createElement("tr",{key:t.id},n.a.createElement("td",null,t.name),n.a.createElement("td",null,function(t){var e=t.split(":")[0],i=t.split(":")[1],a=t.split(":")[2];return h.a.duration({seconds:parseInt(a),minutes:parseInt(i),hours:parseInt(e)}).format("h[h] m[m] s[s]")}(t.distance_this_week.total_time)),n.a.createElement("td",null,i(t.distance_this_week.run)),n.a.createElement("td",null,i(t.distance_this_week.bike)),n.a.createElement("td",null,i(t.distance_this_week.others)),n.a.createElement("td",null,t.can_participate?n.a.createElement("span",{style:{color:"green"}},"\u2713"):"Not yet"))})))});function y(t){var e=t.athletes,i=Object(d.useState)(e),r=Object(o.a)(i,2),s=r[0],l=r[1],u=Object(d.useCallback)((function(t){var i=e.sort((function(e,i){var d=e.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase(),n=i.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();if(t===a.ascending){if(d>n)return 1;if(d<n)return-1}if(t===a.descending){if(d<n)return 1;if(d>n)return-1}return 0}));l(Object(c.a)(i))}),[e]);return Object(d.useEffect)((function(){u(a.ascending)}),[u]),n.a.createElement(n.a.Fragment,null,n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement(m,{onToggle:u},"Name")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var i=e.sort((function(e,i){var d=e.distance_this_week.total_time,n=i.distance_this_week.total_time,r=d.split(":")[0],s=d.split(":")[1],l=d.split(":")[2],u=n.split(":")[0],c=n.split(":")[1],o=n.split(":")[2],m=h.a.duration({seconds:parseInt(l),minutes:parseInt(s),hours:parseInt(r)}),_=h.a.duration({seconds:parseInt(o),minutes:parseInt(c),hours:parseInt(u)});if(t===a.ascending){if(m>_)return 1;if(m<_)return-1}if(t===a.descending){if(m<_)return 1;if(m>_)return-1}return 0}));l(Object(c.a)(i))}},"Total time")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var i=e.sort((function(e,i){var d=e.distance_this_week.run,n=i.distance_this_week.run;if(t===a.ascending){if(d>n)return 1;if(d<n)return-1}if(t===a.descending){if(d<n)return 1;if(d>n)return-1}return 0}));l(Object(c.a)(i))}},"Run distance (km)")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var i=e.sort((function(e,i){var d=e.distance_this_week.bike,n=i.distance_this_week.bike;if(t===a.ascending){if(d>n)return 1;if(d<n)return-1}if(t===a.descending){if(d<n)return 1;if(d>n)return-1}return 0}));l(Object(c.a)(i))}},"Bike distance (km)")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var i=e.sort((function(e,i){var d=e.distance_this_week.others,n=i.distance_this_week.others;if(t===a.ascending){if(d>n)return 1;if(d<n)return-1}if(t===a.descending){if(d<n)return 1;if(d>n)return-1}return 0}));l(Object(c.a)(i))}},"Other distance (km)")),n.a.createElement("th",null,n.a.createElement(m,{startOrder:a.ascending,onToggle:function(t){var i=e.sort((function(e,i){if(t===a.ascending){if(e.can_participate)return-1;if(i.can_participate)return 1}if(t===a.descending){if(e.can_participate)return 1;if(i.can_participate)return-1}return 0}));l(Object(c.a)(i))}},"Is eligible?")))),n.a.createElement("tbody",null,n.a.createElement(p,{athletes:s}))))}var k=function(){var t=u.athletes,e=u.date_from,i=u.date_to,a=u.last_updated;return n.a.createElement("div",{className:"app container"},n.a.createElement("h5",{className:"header-last_updated"},"Last updated: ",a&&n.a.createElement(l.a,{datetime:a,locale:"fr_CA"})),n.a.createElement("h1",{className:"header-title"},"nventive Strava Challenge"),n.a.createElement("blockquote",null,n.a.createElement("p",null,n.a.createElement("em",null,"To be eligible for the weekly draw, a participant must, at least, do 3 hours and 30 min of physical activity."))),n.a.createElement("p",{style:{marginBottom:"1rem"}},n.a.createElement("b",null,e)," to ",n.a.createElement("b",null,i)),n.a.createElement("div",{className:"table"},n.a.createElement(y,{athletes:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},4:function(t){t.exports=JSON.parse('{"athletes":[{"id":"70596342","name":"F\xe9lix-Olivier Beauchamp","activities":[{"id":"5080060940","athlete_id":"70596342","datetime":"2021-04-06 16:07:58","distance":2780,"duration":"0:33:05","type":"unknown"},{"id":"5074138639","athlete_id":"70596342","datetime":"2021-04-05 14:36:37","distance":880,"duration":"0:12:24","type":"unknown"},{"id":"5070480231","athlete_id":"70596342","datetime":"2021-04-04 14:30:18","distance":0,"duration":"3:00:00","type":"unknown"},{"id":"5063079702","athlete_id":"70596342","datetime":"2021-04-03 16:52:26","distance":7790,"duration":"0:27:19","type":"unknown"},{"id":"5055605319","athlete_id":"70596342","datetime":"2021-04-02 13:46:40","distance":1930,"duration":"0:23:28","type":"unknown"},{"id":"5044803992","athlete_id":"70596342","datetime":"2021-03-31 16:21:16","distance":2150,"duration":"0:25:03","type":"unknown"},{"id":"5039190304","athlete_id":"70596342","datetime":"2021-03-30 16:32:14","distance":2310,"duration":"0:25:13","type":"unknown"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":14180,"total_time":"4:41:03"},"can_participate":true},{"id":"8796776","name":"Catherine Sauzede","activities":[{"id":"5079096480","athlete_id":"8796776","datetime":"2021-04-06 12:27:49","distance":3020,"duration":"0:44:28","type":"walk"},{"id":"5063574466","athlete_id":"8796776","datetime":"2021-04-03 18:18:22","distance":3050,"duration":"0:45:00","type":"walk"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":3050,"total_time":"0:45:00"},"can_participate":false},{"id":"53867747","name":"-Caroline Sigouin","activities":[{"id":"5078731065","athlete_id":"53867747","datetime":"2021-04-06 11:29:49","distance":3040,"duration":"0:36:51","type":"walk"},{"id":"5073713663","athlete_id":"53867747","datetime":"2021-04-05 13:15:59","distance":0,"duration":"0:25:00","type":"walk"},{"id":"5073595901","athlete_id":"53867747","datetime":"2021-04-04 14:30:00","distance":0,"duration":"0:30:00","type":"walk"},{"id":"5063709674","athlete_id":"53867747","datetime":"2021-04-03 18:23:21","distance":3530,"duration":"1:07:00","type":"walk"},{"id":"5062028016","athlete_id":"53867747","datetime":"2021-04-03 14:36:16","distance":1910,"duration":"0:24:06","type":"walk"},{"id":"5049497491","athlete_id":"53867747","datetime":"2021-04-01 13:15:52","distance":2150,"duration":"0:23:51","type":"walk"},{"id":"5046765102","athlete_id":"53867747","datetime":"2021-03-31 22:56:26","distance":1470,"duration":"0:18:01","type":"walk"},{"id":"5044776419","athlete_id":"53867747","datetime":"2021-03-31 16:31:27","distance":1220,"duration":"0:14:41","type":"walk"},{"id":"5043171150","athlete_id":"53867747","datetime":"2021-03-31 11:42:15","distance":1150,"duration":"0:14:20","type":"walk"},{"id":"5040114616","athlete_id":"53867747","datetime":"2021-03-30 20:29:15","distance":2300,"duration":"0:31:56","type":"walk"},{"id":"5038667967","athlete_id":"53867747","datetime":"2021-03-30 17:02:51","distance":1230,"duration":"0:13:19","type":"walk"},{"id":"5036740039","athlete_id":"53867747","datetime":"2021-03-30 11:47:19","distance":2570,"duration":"0:29:02","type":"walk"},{"id":"5032205669","athlete_id":"53867747","datetime":"2021-03-29 16:33:33","distance":1210,"duration":"0:13:14","type":"walk"},{"id":"5030666180","athlete_id":"53867747","datetime":"2021-03-29 11:46:26","distance":1750,"duration":"0:19:13","type":"walk"},{"id":"5026856219","athlete_id":"53867747","datetime":"2021-03-28 15:13:52","distance":2260,"duration":"0:24:19","type":"walk"},{"id":"5021530276","athlete_id":"53867747","datetime":"2021-03-27 19:09:14","distance":4130,"duration":"0:47:15","type":"walk"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":20490,"total_time":"4:58:43"},"can_participate":true},{"id":"42892218","name":"Aur\xe9lie Sa\xeez","activities":[{"id":"5077630808","athlete_id":"42892218","datetime":"2021-04-06 07:03:58","distance":6470,"duration":"0:35:12","type":"run"},{"id":"5042290924","athlete_id":"42892218","datetime":"2021-03-31 09:04:53","distance":4050,"duration":"0:22:02","type":"run"},{"id":"5035630696","athlete_id":"42892218","datetime":"2021-03-30 07:26:45","distance":16290,"duration":"0:51:52","type":"bike"},{"id":"5032126924","athlete_id":"42892218","datetime":"2021-03-29 16:10:10","distance":5080,"duration":"0:27:51","type":"run"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":9130,"bike":16290,"others":0,"total_time":"1:41:45"},"can_participate":false},{"id":"63991138","name":"Janet Fan","activities":[{"id":"5078695867","athlete_id":"63991138","datetime":"2021-04-06 02:50:49","distance":0,"duration":"0:20:00","type":"walk"},{"id":"5078692023","athlete_id":"63991138","datetime":"2021-04-05 22:30:00","distance":0,"duration":"1:20:00","type":"walk"},{"id":"5076232469","athlete_id":"63991138","datetime":"2021-04-05 21:58:36","distance":0,"duration":"0:15:00","type":"walk"},{"id":"5068891428","athlete_id":"63991138","datetime":"2021-04-03 22:00:00","distance":0,"duration":"2:00:00","type":"walk"},{"id":"5057415933","athlete_id":"63991138","datetime":"2021-04-01 22:56:00","distance":0,"duration":"0:20:00","type":"walk"},{"id":"5057414633","athlete_id":"63991138","datetime":"2021-03-31 22:51:00","distance":0,"duration":"0:20:00","type":"walk"},{"id":"5034596252","athlete_id":"63991138","datetime":"2021-03-29 22:20:00","distance":0,"duration":"1:15:00","type":"walk"},{"id":"5022868010","athlete_id":"63991138","datetime":"2021-03-28 04:17:00","distance":0,"duration":"0:20:00","type":"walk"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":0,"total_time":"3:55:00"},"can_participate":true},{"id":"59758738","name":"Carl de Billy","activities":[{"id":"5076791184","athlete_id":"59758738","datetime":"2021-04-05 23:44:11","distance":3220,"duration":"0:43:45","type":"walk"},{"id":"5070637691","athlete_id":"59758738","datetime":"2021-04-04 19:10:59","distance":8800,"duration":"2:13:00","type":"walk"},{"id":"5066369038","athlete_id":"59758738","datetime":"2021-04-03 22:15:36","distance":10000,"duration":"2:10:00","type":"walk"},{"id":"5057483119","athlete_id":"59758738","datetime":"2021-04-02 18:30:57","distance":2920,"duration":"0:39:10","type":"walk"},{"id":"5044581588","athlete_id":"59758738","datetime":"2021-03-31 15:15:39","distance":5570,"duration":"1:04:00","type":"walk"},{"id":"5022227572","athlete_id":"59758738","datetime":"2021-03-27 22:14:10","distance":4500,"duration":"1:04:00","type":"walk"},{"id":"5021325573","athlete_id":"59758738","datetime":"2021-03-27 17:19:16","distance":2290,"duration":"0:30:19","type":"walk"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":27290,"total_time":"6:06:10"},"can_participate":true},{"id":"55385678","name":"Quentin Auvray","activities":[{"id":"5076606271","athlete_id":"55385678","datetime":"2021-04-05 20:43:51","distance":4260,"duration":"0:57:50","type":"walk"},{"id":"5070519512","athlete_id":"55385678","datetime":"2021-04-04 19:21:14","distance":4400,"duration":"1:02:00","type":"walk"},{"id":"5063564611","athlete_id":"55385678","datetime":"2021-04-03 17:56:40","distance":2320,"duration":"0:48:09","type":"walk"},{"id":"5057606488","athlete_id":"55385678","datetime":"2021-04-02 17:32:48","distance":4230,"duration":"0:59:08","type":"walk"},{"id":"5040416817","athlete_id":"55385678","datetime":"2021-03-30 20:42:47","distance":3400,"duration":"0:50:49","type":"walk"},{"id":"5038571649","athlete_id":"55385678","datetime":"2021-03-30 16:09:20","distance":2930,"duration":"0:40:31","type":"walk"},{"id":"5028858655","athlete_id":"55385678","datetime":"2021-03-28 21:36:42","distance":4740,"duration":"1:13:00","type":"walk"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":17280,"total_time":"4:20:37"},"can_participate":true},{"id":"53741353","name":"Virginie jacques nadeau","activities":[{"id":"5076579750","athlete_id":"53741353","datetime":"2021-04-05 21:36:44","distance":0,"duration":"2:00:00","type":"walk"},{"id":"5076578532","athlete_id":"53741353","datetime":"2021-04-04 18:21:50","distance":16010,"duration":"2:37:00","type":"walk"},{"id":"5076576793","athlete_id":"53741353","datetime":"2021-04-03 18:42:19","distance":15460,"duration":"3:18:00","type":"walk"},{"id":"5052012402","athlete_id":"53741353","datetime":"2021-04-01 20:26:12","distance":5070,"duration":"1:06:00","type":"walk"},{"id":"5046909062","athlete_id":"53741353","datetime":"2021-03-31 22:15:00","distance":6190,"duration":"1:26:00","type":"walk"},{"id":"5040825114","athlete_id":"53741353","datetime":"2021-03-30 20:27:22","distance":7990,"duration":"1:45:00","type":"walk"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":50720,"total_time":"10:12:00"},"can_participate":true},{"id":"30050927","name":"David .","activities":[{"id":"5076363517","athlete_id":"30050927","datetime":"2021-04-05 22:17:59","distance":2250,"duration":"0:25:24","type":"walk"},{"id":"5075780174","athlete_id":"30050927","datetime":"2021-04-05 18:53:25","distance":33880,"duration":"1:10:00","type":"bike"},{"id":"5070350089","athlete_id":"30050927","datetime":"2021-04-04 19:58:26","distance":20970,"duration":"0:49:53","type":"bike"},{"id":"5063255638","athlete_id":"30050927","datetime":"2021-04-03 13:09:14","distance":0,"duration":"0:45:13","type":"workout"},{"id":"5051894785","athlete_id":"30050927","datetime":"2021-04-01 17:19:39","distance":0,"duration":"0:42:07","type":"workout"},{"id":"5043500756","athlete_id":"30050927","datetime":"2021-03-31 12:26:38","distance":25480,"duration":"0:54:00","type":"bike"},{"id":"5040768244","athlete_id":"30050927","datetime":"2021-03-30 23:17:13","distance":1750,"duration":"0:18:03","type":"walk"},{"id":"5035321495","athlete_id":"30050927","datetime":"2021-03-29 20:25:29","distance":4370,"duration":"0:44:14","type":"walk"},{"id":"5029035107","athlete_id":"30050927","datetime":"2021-03-28 15:59:44","distance":4190,"duration":"0:43:46","type":"walk"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":46450,"others":6120,"total_time":"4:13:30"},"can_participate":true},{"id":"5493967","name":"Rene Charbonneau","activities":[{"id":"5076330433","athlete_id":"5493967","datetime":"2021-04-05 21:44:57","distance":9160,"duration":"0:50:47","type":"run"},{"id":"5064735381","athlete_id":"5493967","datetime":"2021-04-04 00:50:40","distance":5800,"duration":"0:30:12","type":"run"},{"id":"5064093312","athlete_id":"5493967","datetime":"2021-04-03 20:45:15","distance":4940,"duration":"0:39:24","type":"run"},{"id":"5063212820","athlete_id":"5493967","datetime":"2021-04-03 17:19:38","distance":1970,"duration":"0:27:16","type":"walk"},{"id":"5040486322","athlete_id":"5493967","datetime":"2021-03-30 21:38:44","distance":8550,"duration":"0:49:27","type":"run"},{"id":"5022036977","athlete_id":"5493967","datetime":"2021-03-27 21:34:34","distance":7490,"duration":"0:42:30","type":"run"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":19290,"bike":0,"others":1970,"total_time":"2:26:19"},"can_participate":false},{"id":"75744959","name":"Marilyne Eloi","activities":[{"id":"5076223734","athlete_id":"75744959","datetime":"2021-04-05 21:21:10","distance":3400,"duration":"0:45:28","type":"walk"},{"id":"5070368234","athlete_id":"75744959","datetime":"2021-04-04 19:37:44","distance":4910,"duration":"1:04:00","type":"walk"},{"id":"5064211475","athlete_id":"75744959","datetime":"2021-04-03 21:29:53","distance":0,"duration":"0:31:25","type":"unknown"},{"id":"5058153750","athlete_id":"75744959","datetime":"2021-04-02 22:18:35","distance":0,"duration":"0:31:41","type":"unknown"},{"id":"5052055507","athlete_id":"75744959","datetime":"2021-04-01 21:25:29","distance":0,"duration":"0:33:46","type":"unknown"},{"id":"5046506851","athlete_id":"75744959","datetime":"2021-03-31 21:16:02","distance":0,"duration":"0:44:49","type":"unknown"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":4910,"total_time":"3:25:41"},"can_participate":false},{"id":"53857703","name":"Yves Prince","activities":[{"id":"5076192529","athlete_id":"53857703","datetime":"2021-04-05 21:21:05","distance":2480,"duration":"0:25:39","type":"run"},{"id":"5068402514","athlete_id":"53857703","datetime":"2021-04-04 13:30:17","distance":3560,"duration":"0:37:31","type":"run"},{"id":"5064519771","athlete_id":"53857703","datetime":"2021-04-03 23:16:23","distance":1740,"duration":"0:17:54","type":"run"},{"id":"5061894910","athlete_id":"53857703","datetime":"2021-04-03 13:44:58","distance":3100,"duration":"0:30:43","type":"run"},{"id":"5058200205","athlete_id":"53857703","datetime":"2021-04-02 22:42:49","distance":1120,"duration":"0:11:27","type":"run"},{"id":"5055827351","athlete_id":"53857703","datetime":"2021-04-02 14:05:35","distance":3000,"duration":"0:29:16","type":"run"},{"id":"5052566461","athlete_id":"53857703","datetime":"2021-04-02 00:13:28","distance":1100,"duration":"0:10:16","type":"run"},{"id":"5049423949","athlete_id":"53857703","datetime":"2021-04-01 12:45:55","distance":2710,"duration":"0:26:14","type":"run"},{"id":"5046813072","athlete_id":"53857703","datetime":"2021-03-31 23:13:33","distance":650,"duration":"0:06:40","type":"run"},{"id":"5040430110","athlete_id":"53857703","datetime":"2021-03-30 21:40:24","distance":2500,"duration":"0:24:49","type":"run"},{"id":"5034141733","athlete_id":"53857703","datetime":"2021-03-29 21:25:25","distance":3250,"duration":"0:33:50","type":"run"},{"id":"5025741388","athlete_id":"53857703","datetime":"2021-03-28 12:53:25","distance":2130,"duration":"0:21:45","type":"run"},{"id":"5022281973","athlete_id":"53857703","datetime":"2021-03-27 23:06:54","distance":1770,"duration":"0:18:42","type":"run"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":22730,"bike":0,"others":0,"total_time":"3:48:40"},"can_participate":true},{"id":"57677238","name":"Adam Hammes","activities":[{"id":"5076244331","athlete_id":"57677238","datetime":"2021-04-05 18:58:04","distance":3040,"duration":"0:37:37","type":"walk"},{"id":"5069757309","athlete_id":"57677238","datetime":"2021-04-04 15:24:52","distance":7860,"duration":"1:42:00","type":"walk"},{"id":"5064032591","athlete_id":"57677238","datetime":"2021-04-03 18:21:39","distance":7080,"duration":"1:33:00","type":"walk"},{"id":"5056651832","athlete_id":"57677238","datetime":"2021-04-02 14:22:08","distance":19390,"duration":"2:02:00","type":"bike"},{"id":"5051641673","athlete_id":"57677238","datetime":"2021-04-01 19:37:50","distance":890,"duration":"0:11:54","type":"walk"},{"id":"5046354273","athlete_id":"57677238","datetime":"2021-03-31 19:44:44","distance":7040,"duration":"1:31:00","type":"walk"},{"id":"5040591891","athlete_id":"57677238","datetime":"2021-03-30 20:34:15","distance":7950,"duration":"1:40:00","type":"walk"},{"id":"5022527302","athlete_id":"57677238","datetime":"2021-03-27 20:41:43","distance":4280,"duration":"0:53:37","type":"walk"},{"id":"5021238815","athlete_id":"57677238","datetime":"2021-03-27 18:12:07","distance":2410,"duration":"0:31:27","type":"walk"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":19390,"others":30820,"total_time":"8:39:54"},"can_participate":true},{"id":"53650739","name":"Benjamin Cartier","activities":[{"id":"5075963443","athlete_id":"53650739","datetime":"2021-04-05 17:58:38","distance":4240,"duration":"1:15:00","type":"unknown"},{"id":"5074926295","athlete_id":"53650739","datetime":"2021-04-05 14:51:54","distance":15770,"duration":"1:31:00","type":"unknown"},{"id":"5046319767","athlete_id":"53650739","datetime":"2021-03-31 19:07:37","distance":18610,"duration":"1:39:00","type":"unknown"},{"id":"5039995699","athlete_id":"53650739","datetime":"2021-03-30 18:58:16","distance":13290,"duration":"1:02:00","type":"unknown"},{"id":"5028406689","athlete_id":"53650739","datetime":"2021-03-28 18:28:20","distance":21000,"duration":"2:01:00","type":"unknown"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":31900,"total_time":"2:41:00"},"can_participate":false},{"id":"53744985","name":"Guillaume Fortin","activities":[{"id":"5075053905","athlete_id":"53744985","datetime":"2021-04-05 16:07:36","distance":16230,"duration":"0:52:30","type":"bike"},{"id":"5070765477","athlete_id":"53744985","datetime":"2021-04-04 22:24:48","distance":9550,"duration":"0:31:11","type":"bike"},{"id":"5069778543","athlete_id":"53744985","datetime":"2021-04-04 17:59:53","distance":9150,"duration":"0:27:01","type":"bike"},{"id":"5063287005","athlete_id":"53744985","datetime":"2021-04-03 17:39:50","distance":7870,"duration":"0:22:33","type":"bike"},{"id":"5040748177","athlete_id":"53744985","datetime":"2021-03-30 22:29:09","distance":20840,"duration":"0:57:53","type":"bike"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":47410,"others":0,"total_time":"2:18:38"},"can_participate":false},{"id":"33346446","name":"Laura C\xf4t\xe9","activities":[{"id":"5074838418","athlete_id":"33346446","datetime":"2021-04-05 15:58:14","distance":26590,"duration":"0:44:55","type":"unknown"},{"id":"5069369975","athlete_id":"33346446","datetime":"2021-04-04 16:35:17","distance":7320,"duration":"0:37:48","type":"run"},{"id":"5050472834","athlete_id":"33346446","datetime":"2021-04-01 15:46:38","distance":21080,"duration":"0:45:54","type":"unknown"},{"id":"5044723936","athlete_id":"33346446","datetime":"2021-03-31 16:26:56","distance":7770,"duration":"0:15:09","type":"unknown"},{"id":"5044589755","athlete_id":"33346446","datetime":"2021-03-31 16:10:12","distance":7690,"duration":"0:13:18","type":"unknown"},{"id":"5031894845","athlete_id":"33346446","datetime":"2021-03-29 15:22:56","distance":23320,"duration":"0:40:09","type":"unknown"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":7320,"bike":0,"others":59860,"total_time":"2:32:18"},"can_participate":false},{"id":"71857741","name":"Gabrielle Garand","activities":[{"id":"5070791208","athlete_id":"71857741","datetime":"2021-04-04 22:42:37","distance":1650,"duration":"0:32:19","type":"walk"},{"id":"5069575995","athlete_id":"71857741","datetime":"2021-04-04 14:48:44","distance":5750,"duration":"1:52:00","type":"walk"},{"id":"5063526529","athlete_id":"71857741","datetime":"2021-04-03 17:01:59","distance":3590,"duration":"1:06:00","type":"walk"},{"id":"5064181318","athlete_id":"71857741","datetime":"2021-04-01 12:00:00","distance":0,"duration":"2:20:00","type":"walk"},{"id":"5045041989","athlete_id":"71857741","datetime":"2021-03-31 16:49:25","distance":2510,"duration":"0:29:28","type":"walk"},{"id":"5021135184","athlete_id":"71857741","datetime":"2021-03-27 16:42:45","distance":3900,"duration":"1:06:00","type":"walk"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":13500,"total_time":"6:19:47"},"can_participate":true},{"id":"16164937","name":"Florent Cima","activities":[{"id":"5070691637","athlete_id":"16164937","datetime":"2021-04-04 19:21:36","distance":3860,"duration":"0:51:27","type":"walk"},{"id":"5070691511","athlete_id":"16164937","datetime":"2021-04-04 18:19:13","distance":3800,"duration":"0:49:18","type":"walk"},{"id":"5070691350","athlete_id":"16164937","datetime":"2021-04-02 20:53:35","distance":0,"duration":"0:07:38","type":"workout"},{"id":"5070691190","athlete_id":"16164937","datetime":"2021-04-01 22:27:33","distance":0,"duration":"0:29:10","type":"workout"},{"id":"5070691125","athlete_id":"16164937","datetime":"2021-03-31 16:14:11","distance":2400,"duration":"0:27:04","type":"walk"},{"id":"5070691029","athlete_id":"16164937","datetime":"2021-03-30 22:13:34","distance":0,"duration":"0:11:02","type":"unknown"},{"id":"5070690968","athlete_id":"16164937","datetime":"2021-03-30 21:49:39","distance":0,"duration":"0:21:02","type":"bike"},{"id":"5070690955","athlete_id":"16164937","datetime":"2021-03-30 16:19:28","distance":2530,"duration":"0:30:23","type":"walk"},{"id":"5070690849","athlete_id":"16164937","datetime":"2021-03-29 23:25:47","distance":0,"duration":"0:21:04","type":"workout"},{"id":"5070690874","athlete_id":"16164937","datetime":"2021-03-29 16:38:21","distance":1840,"duration":"0:20:51","type":"walk"},{"id":"5037048894","athlete_id":"16164937","datetime":"2021-03-28 17:16:41","distance":0,"duration":"0:33:11","type":"workout"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":14430,"total_time":"4:28:59"},"can_participate":true},{"id":"81176825","name":"Jos\xe9e La Rochelle","activities":[{"id":"5070142954","athlete_id":"81176825","datetime":"2021-04-04 18:31:06","distance":1900,"duration":"1:27:00","type":"walk"},{"id":"5068886896","athlete_id":"81176825","datetime":"2021-04-04 15:31:56","distance":0,"duration":"0:31:00","type":"workout"},{"id":"5062671425","athlete_id":"81176825","datetime":"2021-04-03 15:49:17","distance":0,"duration":"0:34:00","type":"workout"},{"id":"5062199071","athlete_id":"81176825","datetime":"2021-04-03 15:05:22","distance":1400,"duration":"0:16:22","type":"workout"},{"id":"5046950374","athlete_id":"81176825","datetime":"2021-03-31 23:57:59","distance":970,"duration":"0:12:08","type":"walk"},{"id":"5040485636","athlete_id":"81176825","datetime":"2021-03-30 21:33:45","distance":1000,"duration":"0:12:58","type":"walk"},{"id":"5033981538","athlete_id":"81176825","datetime":"2021-03-29 21:46:14","distance":2130,"duration":"0:26:04","type":"walk"},{"id":"5027973664","athlete_id":"81176825","datetime":"2021-03-28 18:16:43","distance":2140,"duration":"0:33:23","type":"walk"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":7400,"total_time":"3:39:32"},"can_participate":true},{"id":"40623138","name":"Daniel Causer","activities":[{"id":"5069085024","athlete_id":"40623138","datetime":"2021-04-04 14:55:52","distance":16420,"duration":"1:32:00","type":"unknown"},{"id":"5063593819","athlete_id":"40623138","datetime":"2021-04-03 17:21:06","distance":5350,"duration":"0:28:52","type":"unknown"},{"id":"5063593744","athlete_id":"40623138","datetime":"2021-04-03 16:17:23","distance":3160,"duration":"0:44:54","type":"unknown"},{"id":"5063593745","athlete_id":"40623138","datetime":"2021-04-03 15:56:55","distance":3550,"duration":"0:20:15","type":"unknown"},{"id":"5063593640","athlete_id":"40623138","datetime":"2021-04-03 15:16:51","distance":2630,"duration":"0:36:23","type":"unknown"},{"id":"5056570145","athlete_id":"40623138","datetime":"2021-04-02 15:51:56","distance":6600,"duration":"0:38:02","type":"unknown"},{"id":"5056569653","athlete_id":"40623138","datetime":"2021-04-01 21:56:54","distance":940,"duration":"0:11:47","type":"unknown"},{"id":"5040343649","athlete_id":"40623138","datetime":"2021-03-30 21:27:07","distance":5080,"duration":"0:27:17","type":"unknown"},{"id":"5036106715","athlete_id":"40623138","datetime":"2021-03-29 22:25:11","distance":820,"duration":"0:10:22","type":"unknown"},{"id":"5028679471","athlete_id":"40623138","datetime":"2021-03-28 21:39:14","distance":4170,"duration":"0:24:38","type":"unknown"},{"id":"5021901274","athlete_id":"40623138","datetime":"2021-03-27 21:05:01","distance":2280,"duration":"0:24:29","type":"unknown"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":44550,"total_time":"5:09:52"},"can_participate":true},{"id":"6063898","name":"Max Cantin","activities":[{"id":"5068934687","athlete_id":"6063898","datetime":"2021-04-04 15:39:05","distance":5230,"duration":"0:22:25","type":"run"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":5230,"bike":0,"others":0,"total_time":"0:22:25"},"can_participate":false},{"id":"68910626","name":"Sasa Krsmanovic","activities":[{"id":"5063829937","athlete_id":"68910626","datetime":"2021-04-03 19:33:34","distance":6020,"duration":"0:34:16","type":"run"},{"id":"5025597546","athlete_id":"68910626","datetime":"2021-03-28 12:38:30","distance":5340,"duration":"0:25:59","type":"run"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":6020,"bike":0,"others":0,"total_time":"0:34:16"},"can_participate":false},{"id":"14753279","name":"Bernard Chhun","activities":[{"id":"5063554028","athlete_id":"14753279","datetime":"2021-04-03 17:24:56","distance":3670,"duration":"1:09:00","type":"unknown"},{"id":"5061759498","athlete_id":"14753279","datetime":"2021-04-03 13:24:55","distance":9160,"duration":"0:58:21","type":"unknown"},{"id":"5057505935","athlete_id":"14753279","datetime":"2021-04-02 19:17:09","distance":1540,"duration":"0:19:16","type":"unknown"},{"id":"5046559917","athlete_id":"14753279","datetime":"2021-03-31 21:21:59","distance":0,"duration":"0:53:47","type":"unknown"},{"id":"5044815242","athlete_id":"14753279","datetime":"2021-03-31 16:29:11","distance":1590,"duration":"0:18:58","type":"unknown"},{"id":"5040639211","athlete_id":"14753279","datetime":"2021-03-30 22:39:24","distance":1940,"duration":"0:24:25","type":"unknown"},{"id":"5034087514","athlete_id":"14753279","datetime":"2021-03-29 22:24:20","distance":1560,"duration":"0:18:55","type":"unknown"},{"id":"5032010572","athlete_id":"14753279","datetime":"2021-03-29 16:04:38","distance":3020,"duration":"0:16:10","type":"unknown"},{"id":"5021500444","athlete_id":"14753279","datetime":"2021-03-27 19:01:42","distance":5520,"duration":"0:41:09","type":"unknown"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":22480,"total_time":"4:38:52"},"can_participate":true},{"id":"73512333","name":"Marc-Antoine Therrien","activities":[{"id":"5057507233","athlete_id":"73512333","datetime":"2021-04-02 16:24:13","distance":9280,"duration":"2:16:00","type":"unknown"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":9280,"total_time":"2:16:00"},"can_participate":false},{"id":"66096596","name":"Alexandra-Maude Grenier","activities":[{"id":"5057095329","athlete_id":"66096596","datetime":"2021-04-02 15:55:20","distance":20090,"duration":"1:41:00","type":"unknown"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":20090,"total_time":"1:41:00"},"can_participate":false},{"id":"75727770","name":"Samia bensouici","activities":[{"id":"5080247309","athlete_id":"75727770","datetime":"2021-04-02 11:08:00","distance":0,"duration":"6:00:00","type":"bike"},{"id":"5037526409","athlete_id":"75727770","datetime":"2021-03-30 08:45:37","distance":0,"duration":"6:00:00","type":"workout"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":0,"total_time":"12:00:00"},"can_participate":true},{"id":"62602861","name":"Patrice Patenaude","activities":[{"id":"5046507043","athlete_id":"62602861","datetime":"2021-03-31 21:20:43","distance":2400,"duration":"0:33:40","type":"walk"},{"id":"5040633765","athlete_id":"62602861","datetime":"2021-03-30 20:57:41","distance":7720,"duration":"1:33:00","type":"walk"},{"id":"5034461299","athlete_id":"62602861","datetime":"2021-03-29 22:15:06","distance":1980,"duration":"0:31:32","type":"walk"},{"id":"5029133693","athlete_id":"62602861","datetime":"2021-03-28 15:30:23","distance":0,"duration":"0:45:00","type":"walk"},{"id":"5022138891","athlete_id":"62602861","datetime":"2021-03-27 18:30:32","distance":0,"duration":"1:35:00","type":"workout"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":12100,"total_time":"2:38:12"},"can_participate":false},{"id":"72821883","name":"Julie Lalonde","activities":[{"id":"5038306646","athlete_id":"72821883","datetime":"2021-03-30 16:17:32","distance":1880,"duration":"0:19:27","type":"walk"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":1880,"total_time":"0:19:27"},"can_participate":false},{"id":"55415946","name":"Mark Levasseur","activities":[{"id":"5021771781","athlete_id":"55415946","datetime":"2021-03-27 20:17:51","distance":1410,"duration":"0:17:07","type":"walk"}],"distance_this_week":{"monday":"2021-03-29","sunday":"2021-04-04","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false}],"last_updated":"2021-04-06 13:20:17.362646","date_from":"2021-03-29","date_to":"2021-04-04"}')}},[[11,1,2]]]);
//# sourceMappingURL=main.09fd6eea.chunk.js.map
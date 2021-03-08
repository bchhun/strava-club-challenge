(this["webpackJsonpstrava-club-challenge"]=this["webpackJsonpstrava-club-challenge"]||[]).push([[0],{11:function(t,e,a){t.exports=a(19)},16:function(t,e,a){},17:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var i,n=a(0),d=a.n(n),r=a(9),s=a.n(r),l=(a(16),a(10)),o=(a(17),a(4)),c=a(1),u=a(6);!function(t){t[t.ascending=0]="ascending",t[t.descending=1]="descending"}(i||(i={}));var m=function(t){var e=t.startOrder,a=t.onToggle,r=t.children,s=Object(n.useState)(e||i.descending),l=Object(u.a)(s,2),o=l[0],c=l[1];return d.a.createElement("span",{className:"table-header-filter",onClick:function(){a&&a(o);var t=o===i.ascending?i.descending:i.ascending;c(t)}},r," \u25be")},_=a(2),h=a.n(_),p=(a(8),function(t){var e=t.athletes;function a(t){return 0!==t?"".concat(t/1e3):""}return d.a.createElement(d.a.Fragment,null,e.map((function(t,e){return d.a.createElement("tr",{key:t.id},d.a.createElement("td",null,t.name),d.a.createElement("td",null,function(t){var e=t.split(":")[0],a=t.split(":")[1],i=t.split(":")[2];return h.a.duration({seconds:parseInt(i),minutes:parseInt(a),hours:parseInt(e)}).format("h[h] m[m] s[s]")}(t.distance_this_week.total_time)),d.a.createElement("td",null,a(t.distance_this_week.run)),d.a.createElement("td",null,a(t.distance_this_week.bike)),d.a.createElement("td",null,a(t.distance_this_week.others)),d.a.createElement("td",null,t.can_participate?d.a.createElement("span",{style:{color:"green"}},"\u2713"):"Not yet"))})))});function y(t){var e=t.athletes,a=Object(n.useState)(e),r=Object(u.a)(a,2),s=r[0],l=r[1],o=Object(n.useCallback)((function(t){var a=e.sort((function(e,a){var n=e.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase(),d=a.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();if(t===i.ascending){if(n>d)return 1;if(n<d)return-1}if(t===i.descending){if(n<d)return 1;if(n>d)return-1}return 0}));l(Object(c.a)(a))}),[e]);return Object(n.useEffect)((function(){o(i.ascending)}),[o]),d.a.createElement(d.a.Fragment,null,d.a.createElement("table",null,d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,d.a.createElement(m,{onToggle:o},"Name")),d.a.createElement("th",null,d.a.createElement(m,{onToggle:function(t){var a=e.sort((function(e,a){var n=e.distance_this_week.total_time,d=a.distance_this_week.total_time,r=n.split(":")[0],s=n.split(":")[1],l=n.split(":")[2],o=d.split(":")[0],c=d.split(":")[1],u=d.split(":")[2],m=h.a.duration({seconds:parseInt(l),minutes:parseInt(s),hours:parseInt(r)}),_=h.a.duration({seconds:parseInt(u),minutes:parseInt(c),hours:parseInt(o)});if(t===i.ascending){if(m>_)return 1;if(m<_)return-1}if(t===i.descending){if(m<_)return 1;if(m>_)return-1}return 0}));l(Object(c.a)(a))}},"Total time")),d.a.createElement("th",null,d.a.createElement(m,{onToggle:function(t){var a=e.sort((function(e,a){var n=e.distance_this_week.run,d=a.distance_this_week.run;if(t===i.ascending){if(n>d)return 1;if(n<d)return-1}if(t===i.descending){if(n<d)return 1;if(n>d)return-1}return 0}));l(Object(c.a)(a))}},"Run distance (km)")),d.a.createElement("th",null,d.a.createElement(m,{onToggle:function(t){var a=e.sort((function(e,a){var n=e.distance_this_week.bike,d=a.distance_this_week.bike;if(t===i.ascending){if(n>d)return 1;if(n<d)return-1}if(t===i.descending){if(n<d)return 1;if(n>d)return-1}return 0}));l(Object(c.a)(a))}},"Bike distance (km)")),d.a.createElement("th",null,d.a.createElement(m,{onToggle:function(t){var a=e.sort((function(e,a){var n=e.distance_this_week.others,d=a.distance_this_week.others;if(t===i.ascending){if(n>d)return 1;if(n<d)return-1}if(t===i.descending){if(n<d)return 1;if(n>d)return-1}return 0}));l(Object(c.a)(a))}},"Other distance (km)")),d.a.createElement("th",null,d.a.createElement(m,{startOrder:i.ascending,onToggle:function(t){var a=e.sort((function(e,a){if(t===i.ascending){if(e.can_participate)return-1;if(a.can_participate)return 1}if(t===i.descending){if(e.can_participate)return 1;if(a.can_participate)return-1}return 0}));l(Object(c.a)(a))}},"Is eligible?")))),d.a.createElement("tbody",null,d.a.createElement(p,{athletes:s}))))}var k=function(){var t=o.athletes,e=o.date_from,a=o.date_to,i=o.last_updated;return d.a.createElement("div",{className:"app container"},d.a.createElement("h5",{className:"header-last_updated"},"Last updated: ",i&&d.a.createElement(l.a,{datetime:i,locale:"fr_CA"})),d.a.createElement("h1",{className:"header-title"},"nventive Strava Challenge"),d.a.createElement("blockquote",null,d.a.createElement("p",null,d.a.createElement("em",null,"To be eligible for the weekly draw, a participant must, at least, do 3 hours and 30 min of physical activity."))),d.a.createElement("p",{style:{marginBottom:"1rem"}},d.a.createElement("b",null,e)," to ",d.a.createElement("b",null,a)),d.a.createElement("div",{className:"table"},d.a.createElement(y,{athletes:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(d.a.createElement(d.a.StrictMode,null,d.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},4:function(t){t.exports=JSON.parse('{"athletes":[{"id":"53741353","name":"Virginie jacques nadeau","activities":[{"id":"4909943939","athlete_id":"53741353","datetime":"2021-03-07 17:51:44","distance":16760,"duration":"3:44:00","type":"walk"},{"id":"4903045947","athlete_id":"53741353","datetime":"2021-03-06 19:05:24","distance":6480,"duration":"1:09:00","type":"walk"},{"id":"4896792485","athlete_id":"53741353","datetime":"2021-03-05 22:17:43","distance":4810,"duration":"1:05:00","type":"walk"},{"id":"4874241419","athlete_id":"53741353","datetime":"2021-03-01 21:28:53","distance":6070,"duration":"1:18:00","type":"walk"},{"id":"4873161670","athlete_id":"53741353","datetime":"2021-02-28 18:26:57","distance":12390,"duration":"2:54:00","type":"walk"},{"id":"4855697958","athlete_id":"53741353","datetime":"2021-02-26 21:27:24","distance":9500,"duration":"1:54:00","type":"walk"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":34120,"total_time":"7:16:00"},"can_participate":true},{"id":"59758738","name":"Carl de Billy","activities":[{"id":"4909936776","athlete_id":"59758738","datetime":"2021-03-07 21:29:04","distance":2970,"duration":"0:43:13","type":"walk"},{"id":"4902105462","athlete_id":"59758738","datetime":"2021-03-06 17:47:03","distance":2400,"duration":"0:45:33","type":"walk"},{"id":"4891448349","athlete_id":"59758738","datetime":"2021-03-04 21:23:39","distance":1730,"duration":"0:23:45","type":"walk"},{"id":"4885026587","athlete_id":"59758738","datetime":"2021-03-03 17:52:22","distance":2090,"duration":"0:31:41","type":"walk"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":9190,"total_time":"2:24:12"},"can_participate":false},{"id":"57677238","name":"Adam Hammes","activities":[{"id":"4909934955","athlete_id":"57677238","datetime":"2021-03-07 20:19:09","distance":7090,"duration":"1:35:00","type":"walk"},{"id":"4903228497","athlete_id":"57677238","datetime":"2021-03-06 23:32:17","distance":1610,"duration":"0:21:56","type":"walk"},{"id":"4885445772","athlete_id":"57677238","datetime":"2021-03-03 19:14:44","distance":0,"duration":"0:55:00","type":"swim"},{"id":"4885439656","athlete_id":"57677238","datetime":"2021-03-03 16:38:36","distance":3010,"duration":"0:35:55","type":"walk"},{"id":"4868876985","athlete_id":"57677238","datetime":"2021-02-28 21:50:20","distance":3110,"duration":"0:39:11","type":"walk"},{"id":"4855736635","athlete_id":"57677238","datetime":"2021-02-26 21:13:09","distance":8250,"duration":"1:49:00","type":"walk"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":11710,"total_time":"3:27:51"},"can_participate":false},{"id":"30050927","name":"David .","activities":[{"id":"4909869578","athlete_id":"30050927","datetime":"2021-03-07 20:27:14","distance":10680,"duration":"1:48:00","type":"walk"},{"id":"4903618040","athlete_id":"30050927","datetime":"2021-03-06 14:08:07","distance":0,"duration":"0:43:32","type":"workout"},{"id":"4896289201","athlete_id":"30050927","datetime":"2021-03-05 20:46:28","distance":2140,"duration":"0:22:12","type":"walk"},{"id":"4896126417","athlete_id":"30050927","datetime":"2021-03-05 19:47:33","distance":3460,"duration":"0:32:27","type":"walk"},{"id":"4891601946","athlete_id":"30050927","datetime":"2021-03-04 18:15:43","distance":0,"duration":"0:42:25","type":"workout"},{"id":"4885415806","athlete_id":"30050927","datetime":"2021-03-03 19:12:19","distance":5130,"duration":"0:50:41","type":"walk"},{"id":"4879118063","athlete_id":"30050927","datetime":"2021-03-02 18:19:54","distance":0,"duration":"0:42:03","type":"workout"},{"id":"4873723564","athlete_id":"30050927","datetime":"2021-03-01 20:28:48","distance":2280,"duration":"0:23:55","type":"walk"},{"id":"4873609414","athlete_id":"30050927","datetime":"2021-03-01 20:01:54","distance":2140,"duration":"0:21:58","type":"walk"},{"id":"4868464309","athlete_id":"30050927","datetime":"2021-02-28 19:23:45","distance":5410,"duration":"1:07:00","type":"walk"},{"id":"4861512162","athlete_id":"30050927","datetime":"2021-02-27 20:28:19","distance":2370,"duration":"0:30:13","type":"walk"},{"id":"4861510948","athlete_id":"30050927","datetime":"2021-02-27 19:36:18","distance":2720,"duration":"0:31:30","type":"walk"},{"id":"4859783028","athlete_id":"30050927","datetime":"2021-02-27 15:12:21","distance":0,"duration":"0:38:15","type":"workout"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":25830,"total_time":"6:27:13"},"can_participate":true},{"id":"62602861","name":"Patrice Patenaude","activities":[{"id":"4909716178","athlete_id":"62602861","datetime":"2021-03-07 20:56:25","distance":1910,"duration":"0:30:56","type":"walk"},{"id":"4909257054","athlete_id":"62602861","datetime":"2021-03-07 18:30:47","distance":0,"duration":"1:15:00","type":"walk"},{"id":"4880632682","athlete_id":"62602861","datetime":"2021-03-02 23:15:22","distance":0,"duration":"0:35:00","type":"workout"},{"id":"4868427828","athlete_id":"62602861","datetime":"2021-02-28 17:32:44","distance":10310,"duration":"2:14:00","type":"walk"},{"id":"4855477473","athlete_id":"62602861","datetime":"2021-02-26 21:25:25","distance":4500,"duration":"0:57:23","type":"walk"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":1910,"total_time":"2:20:56"},"can_participate":false},{"id":"70596342","name":"F\xe9lix-Olivier Beauchamp","activities":[{"id":"4909695579","athlete_id":"70596342","datetime":"2021-03-07 21:13:55","distance":1530,"duration":"0:19:21","type":"unknown"},{"id":"4900418448","athlete_id":"70596342","datetime":"2021-03-06 14:24:04","distance":620,"duration":"0:07:26","type":"unknown"},{"id":"4891497901","athlete_id":"70596342","datetime":"2021-03-04 22:09:44","distance":4380,"duration":"0:18:55","type":"unknown"},{"id":"4885979223","athlete_id":"70596342","datetime":"2021-03-03 20:40:00","distance":2200,"duration":"0:34:52","type":"unknown"},{"id":"4880141586","athlete_id":"70596342","datetime":"2021-03-02 22:10:11","distance":1140,"duration":"0:18:03","type":"unknown"},{"id":"4868011799","athlete_id":"70596342","datetime":"2021-02-28 18:23:42","distance":3220,"duration":"0:40:13","type":"unknown"},{"id":"4859978155","athlete_id":"70596342","datetime":"2021-02-27 14:35:40","distance":7510,"duration":"1:01:00","type":"unknown"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":9870,"total_time":"1:38:37"},"can_participate":false},{"id":"40623138","name":"Daniel Causer","activities":[{"id":"4910405839","athlete_id":"40623138","datetime":"2021-03-07 20:27:46","distance":3710,"duration":"0:37:22","type":"unknown"},{"id":"4908045587","athlete_id":"40623138","datetime":"2021-03-07 15:50:52","distance":5110,"duration":"0:33:48","type":"unknown"},{"id":"4902251701","athlete_id":"40623138","datetime":"2021-03-06 18:49:31","distance":5130,"duration":"0:27:24","type":"unknown"},{"id":"4894133176","athlete_id":"40623138","datetime":"2021-03-05 11:26:00","distance":5190,"duration":"0:28:42","type":"unknown"},{"id":"4886243157","athlete_id":"40623138","datetime":"2021-03-03 22:53:24","distance":3180,"duration":"0:22:02","type":"unknown"},{"id":"4868554723","athlete_id":"40623138","datetime":"2021-02-28 20:47:01","distance":3310,"duration":"0:22:52","type":"unknown"},{"id":"4860695710","athlete_id":"40623138","datetime":"2021-02-27 17:17:10","distance":5080,"duration":"0:28:53","type":"unknown"},{"id":"4855468142","athlete_id":"40623138","datetime":"2021-02-26 22:09:43","distance":3680,"duration":"0:19:58","type":"unknown"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":22320,"total_time":"2:29:18"},"can_participate":false},{"id":"33346446","name":"Laura C\xf4t\xe9","activities":[{"id":"4909617368","athlete_id":"33346446","datetime":"2021-03-07 20:28:37","distance":24340,"duration":"0:45:13","type":"unknown"},{"id":"4895047700","athlete_id":"33346446","datetime":"2021-03-05 16:11:48","distance":16770,"duration":"0:32:48","type":"unknown"},{"id":"4884450930","athlete_id":"33346446","datetime":"2021-03-03 16:56:45","distance":25410,"duration":"0:40:21","type":"unknown"},{"id":"4874162621","athlete_id":"33346446","datetime":"2021-03-01 22:07:17","distance":26600,"duration":"0:45:06","type":"unknown"},{"id":"4861608534","athlete_id":"33346446","datetime":"2021-02-27 20:26:27","distance":35440,"duration":"1:01:00","type":"unknown"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":93120,"total_time":"2:43:28"},"can_participate":false},{"id":"14753279","name":"Bernard Chhun","activities":[{"id":"4909317489","athlete_id":"14753279","datetime":"2021-03-07 18:41:18","distance":4960,"duration":"1:07:00","type":"unknown"},{"id":"4879744918","athlete_id":"14753279","datetime":"2021-03-02 20:14:28","distance":2810,"duration":"0:39:31","type":"unknown"},{"id":"4868461598","athlete_id":"14753279","datetime":"2021-02-28 19:15:37","distance":4850,"duration":"1:16:00","type":"unknown"},{"id":"4854576570","athlete_id":"14753279","datetime":"2021-02-26 17:38:04","distance":3580,"duration":"0:47:50","type":"unknown"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":7770,"total_time":"1:46:31"},"can_participate":false},{"id":"73512333","name":"Marc-Antoine Therrien","activities":[{"id":"4909220936","athlete_id":"73512333","datetime":"2021-03-07 16:31:23","distance":6610,"duration":"0:53:05","type":"unknown"},{"id":"4868075371","athlete_id":"73512333","datetime":"2021-02-28 16:56:16","distance":8800,"duration":"1:35:00","type":"unknown"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":6610,"total_time":"0:53:05"},"can_participate":false},{"id":"68910626","name":"Sasa Krsmanovic","activities":[{"id":"4908806797","athlete_id":"68910626","datetime":"2021-03-07 17:39:09","distance":4000,"duration":"0:26:45","type":"run"},{"id":"4901798766","athlete_id":"68910626","datetime":"2021-03-06 16:53:07","distance":0,"duration":"1:00:00","type":"unknown"},{"id":"4892273318","athlete_id":"68910626","datetime":"2021-03-05 02:24:31","distance":0,"duration":"0:35:00","type":"unknown"},{"id":"4880950454","athlete_id":"68910626","datetime":"2021-03-03 01:59:24","distance":0,"duration":"0:45:00","type":"unknown"},{"id":"4874854752","athlete_id":"68910626","datetime":"2021-03-02 02:27:24","distance":0,"duration":"0:30:00","type":"unknown"},{"id":"4861131494","athlete_id":"68910626","datetime":"2021-02-27 18:52:35","distance":5500,"duration":"0:25:00","type":"run"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":4000,"bike":0,"others":0,"total_time":"3:16:45"},"can_participate":false},{"id":"66096596","name":"Alexandra-Maude Grenier","activities":[{"id":"4908565903","athlete_id":"66096596","datetime":"2021-03-07 15:36:47","distance":5330,"duration":"1:56:00","type":"unknown"},{"id":"4885037648","athlete_id":"66096596","datetime":"2021-03-03 18:21:59","distance":7390,"duration":"0:34:29","type":"unknown"},{"id":"4867874543","athlete_id":"66096596","datetime":"2021-02-28 16:45:49","distance":15540,"duration":"1:34:00","type":"unknown"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":12720,"total_time":"2:30:29"},"can_participate":false},{"id":"53867747","name":"-Caroline Sigouin","activities":[{"id":"4908793859","athlete_id":"53867747","datetime":"2021-03-07 16:30:58","distance":0,"duration":"1:00:00","type":"unknown"},{"id":"4907437082","athlete_id":"53867747","datetime":"2021-03-07 15:00:34","distance":1140,"duration":"0:14:19","type":"walk"},{"id":"4901884802","athlete_id":"53867747","datetime":"2021-03-06 16:30:00","distance":0,"duration":"1:00:00","type":"walk"},{"id":"4901881826","athlete_id":"53867747","datetime":"2021-03-05 20:30:00","distance":0,"duration":"1:00:00","type":"walk"},{"id":"4896439653","athlete_id":"53867747","datetime":"2021-03-05 16:30:00","distance":0,"duration":"0:20:00","type":"walk"},{"id":"4891241309","athlete_id":"53867747","datetime":"2021-03-04 19:45:00","distance":0,"duration":"1:00:00","type":"unknown"},{"id":"4886578714","athlete_id":"53867747","datetime":"2021-03-04 00:32:18","distance":1970,"duration":"0:22:40","type":"walk"},{"id":"4873913861","athlete_id":"53867747","datetime":"2021-03-01 21:33:01","distance":910,"duration":"0:10:51","type":"walk"},{"id":"4873165064","athlete_id":"53867747","datetime":"2021-03-01 11:00:00","distance":0,"duration":"0:40:00","type":"unknown"},{"id":"4868283268","athlete_id":"53867747","datetime":"2021-02-28 19:44:09","distance":1590,"duration":"0:20:46","type":"walk"},{"id":"4856031471","athlete_id":"53867747","datetime":"2021-02-27 01:15:00","distance":0,"duration":"0:32:00","type":"unknown"},{"id":"4855153681","athlete_id":"53867747","datetime":"2021-02-26 20:35:35","distance":1750,"duration":"0:24:23","type":"walk"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":4020,"total_time":"5:47:50"},"can_participate":true},{"id":"53857703","name":"Yves Prince","activities":[{"id":"4908038562","athlete_id":"53857703","datetime":"2021-03-07 15:46:29","distance":2030,"duration":"0:22:47","type":"run"},{"id":"4903333569","athlete_id":"53857703","datetime":"2021-03-07 00:06:47","distance":1700,"duration":"0:17:24","type":"run"},{"id":"4901264408","athlete_id":"53857703","datetime":"2021-03-06 15:53:38","distance":2150,"duration":"0:22:03","type":"run"},{"id":"4895636344","athlete_id":"53857703","datetime":"2021-03-05 17:55:58","distance":2140,"duration":"0:17:21","type":"run"},{"id":"4890476799","athlete_id":"53857703","datetime":"2021-03-04 18:08:03","distance":2350,"duration":"0:23:46","type":"run"},{"id":"4885371181","athlete_id":"53857703","datetime":"2021-03-03 19:03:25","distance":2470,"duration":"0:25:40","type":"run"},{"id":"4879463318","athlete_id":"53857703","datetime":"2021-03-02 19:27:35","distance":2400,"duration":"0:23:41","type":"run"},{"id":"4874492076","athlete_id":"53857703","datetime":"2021-03-01 23:56:07","distance":690,"duration":"0:06:41","type":"run"},{"id":"4872108147","athlete_id":"53857703","datetime":"2021-03-01 15:08:20","distance":2560,"duration":"0:25:54","type":"run"},{"id":"4867824170","athlete_id":"53857703","datetime":"2021-02-28 17:45:12","distance":2090,"duration":"0:21:25","type":"run"},{"id":"4862160356","athlete_id":"53857703","datetime":"2021-02-27 23:58:00","distance":1110,"duration":"0:11:12","type":"run"},{"id":"4855941640","athlete_id":"53857703","datetime":"2021-02-27 00:47:12","distance":1770,"duration":"0:17:53","type":"run"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":18490,"bike":0,"others":0,"total_time":"3:05:17"},"can_participate":false},{"id":"71857741","name":"Gabrielle Garand","activities":[{"id":"4909563837","athlete_id":"71857741","datetime":"2021-03-07 15:00:00","distance":0,"duration":"1:00:00","type":"walk"},{"id":"4909574710","athlete_id":"71857741","datetime":"2021-03-05 13:22:00","distance":0,"duration":"0:40:00","type":"walk"},{"id":"4909572521","athlete_id":"71857741","datetime":"2021-03-04 13:02:00","distance":0,"duration":"0:40:00","type":"walk"},{"id":"4885963369","athlete_id":"71857741","datetime":"2021-03-03 21:26:42","distance":2700,"duration":"0:43:50","type":"walk"},{"id":"4885993802","athlete_id":"71857741","datetime":"2021-03-03 13:15:00","distance":0,"duration":"0:20:00","type":"walk"},{"id":"4885991535","athlete_id":"71857741","datetime":"2021-03-02 13:00:00","distance":0,"duration":"0:30:00","type":"walk"},{"id":"4872745428","athlete_id":"71857741","datetime":"2021-03-01 17:30:00","distance":0,"duration":"0:20:00","type":"unknown"},{"id":"4885989413","athlete_id":"71857741","datetime":"2021-03-01 13:00:00","distance":0,"duration":"0:30:00","type":"walk"},{"id":"4860894644","athlete_id":"71857741","datetime":"2021-02-27 15:15:51","distance":6350,"duration":"2:10:00","type":"walk"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":2700,"total_time":"4:43:50"},"can_participate":true},{"id":"55385678","name":"Quentin Auvray","activities":[{"id":"4903487730","athlete_id":"55385678","datetime":"2021-03-05 23:06:58","distance":0,"duration":"0:24:00","type":"walk"},{"id":"4889269361","athlete_id":"55385678","datetime":"2021-03-04 13:56:49","distance":3980,"duration":"0:53:50","type":"walk"},{"id":"4903485864","athlete_id":"55385678","datetime":"2021-03-04 01:18:02","distance":0,"duration":"0:12:00","type":"walk"},{"id":"4886381570","athlete_id":"55385678","datetime":"2021-03-03 22:52:58","distance":0,"duration":"1:05:00","type":"workout"},{"id":"4903484262","athlete_id":"55385678","datetime":"2021-03-02 17:13:21","distance":0,"duration":"0:10:00","type":"walk"},{"id":"4875041683","athlete_id":"55385678","datetime":"2021-03-01 17:13:10","distance":0,"duration":"0:31:00","type":"walk"},{"id":"4872462475","athlete_id":"55385678","datetime":"2021-02-28 22:47:29","distance":0,"duration":"0:36:00","type":"walk"},{"id":"4862712155","athlete_id":"55385678","datetime":"2021-02-27 17:42:20","distance":0,"duration":"0:38:00","type":"walk"},{"id":"4855608091","athlete_id":"55385678","datetime":"2021-02-26 21:40:12","distance":0,"duration":"1:39:00","type":"workout"},{"id":"4862539551","athlete_id":"55385678","datetime":"2021-02-26 22:50:31","distance":0,"duration":"0:17:00","type":"walk"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":3980,"total_time":"3:15:50"},"can_participate":false},{"id":"53650739","name":"Benjamin Cartier","activities":[{"id":"4902666552","athlete_id":"53650739","datetime":"2021-03-06 18:47:14","distance":23460,"duration":"2:21:00","type":"unknown"},{"id":"4890897714","athlete_id":"53650739","datetime":"2021-03-04 18:37:05","distance":10020,"duration":"1:00:00","type":"unknown"},{"id":"4885945174","athlete_id":"53650739","datetime":"2021-03-03 20:51:45","distance":10330,"duration":"0:55:13","type":"unknown"},{"id":"4878478061","athlete_id":"53650739","datetime":"2021-03-02 16:39:27","distance":10830,"duration":"0:58:32","type":"unknown"},{"id":"4873601439","athlete_id":"53650739","datetime":"2021-03-01 18:47:39","distance":10210,"duration":"0:55:47","type":"unknown"},{"id":"4867915228","athlete_id":"53650739","datetime":"2021-02-28 17:32:38","distance":13560,"duration":"1:08:00","type":"unknown"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":64850,"total_time":"6:10:32"},"can_participate":true},{"id":"53751402","name":"Julie Rose","activities":[{"id":"4902259524","athlete_id":"53751402","datetime":"2021-03-06 19:01:43","distance":1530,"duration":"0:22:54","type":"walk"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":1530,"total_time":"0:22:54"},"can_participate":false},{"id":"16164937","name":"Florent Cima","activities":[{"id":"4891744384","athlete_id":"16164937","datetime":"2021-03-04 23:19:03","distance":0,"duration":"0:20:47","type":"workout"},{"id":"4891743695","athlete_id":"16164937","datetime":"2021-03-03 23:47:41","distance":0,"duration":"0:10:54","type":"workout"},{"id":"4891743752","athlete_id":"16164937","datetime":"2021-03-03 17:21:47","distance":2470,"duration":"0:27:39","type":"walk"},{"id":"4891743629","athlete_id":"16164937","datetime":"2021-03-02 23:29:05","distance":0,"duration":"0:05:20","type":"unknown"},{"id":"4891743605","athlete_id":"16164937","datetime":"2021-03-02 23:17:49","distance":0,"duration":"0:10:14","type":"workout"},{"id":"4891743559","athlete_id":"16164937","datetime":"2021-03-01 23:44:58","distance":0,"duration":"0:08:30","type":"workout"},{"id":"4891743529","athlete_id":"16164937","datetime":"2021-03-01 23:22:48","distance":0,"duration":"0:20:53","type":"workout"},{"id":"4873143747","athlete_id":"16164937","datetime":"2021-03-01 17:14:43","distance":2330,"duration":"0:27:51","type":"walk"},{"id":"4868258258","athlete_id":"16164937","datetime":"2021-02-28 19:48:18","distance":0,"duration":"0:10:32","type":"workout"},{"id":"4868258259","athlete_id":"16164937","datetime":"2021-02-28 19:17:20","distance":0,"duration":"0:30:34","type":"workout"},{"id":"4855748509","athlete_id":"16164937","datetime":"2021-02-26 23:55:31","distance":0,"duration":"0:10:40","type":"workout"},{"id":"4855748490","athlete_id":"16164937","datetime":"2021-02-26 23:44:47","distance":0,"duration":"0:10:09","type":"workout"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":4800,"total_time":"2:12:08"},"can_participate":false},{"id":"43834742","name":"Jeff Fogel","activities":[{"id":"4886185329","athlete_id":"43834742","datetime":"2021-03-03 21:57:56","distance":4690,"duration":"0:54:43","type":"run"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":4690,"bike":0,"others":0,"total_time":"0:54:43"},"can_participate":false},{"id":"63991138","name":"Janet Fan","activities":[{"id":"4883029749","athlete_id":"63991138","datetime":"2021-03-03 03:20:00","distance":0,"duration":"0:25:00","type":"walk"},{"id":"4866599344","athlete_id":"63991138","datetime":"2021-02-27 19:00:00","distance":0,"duration":"1:10:00","type":"walk"},{"id":"4855427417","athlete_id":"63991138","datetime":"2021-02-26 19:22:07","distance":0,"duration":"3:00:00","type":"walk"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":0,"total_time":"0:25:00"},"can_participate":false},{"id":"75727770","name":"Samia bensouici","activities":[{"id":"4868513602","athlete_id":"75727770","datetime":"2021-02-28 19:22:29","distance":0,"duration":"1:40:00","type":"unknown"},{"id":"4868511519","athlete_id":"75727770","datetime":"2021-02-27 18:31:00","distance":0,"duration":"2:30:00","type":"walk"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false},{"id":"6063898","name":"Max Cantin","activities":[{"id":"4867857677","athlete_id":"6063898","datetime":"2021-02-28 18:05:34","distance":5110,"duration":"0:23:07","type":"run"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false},{"id":"5493967","name":"Rene Charbonneau","activities":[{"id":"4866959670","athlete_id":"5493967","datetime":"2021-02-28 15:56:25","distance":4700,"duration":"0:27:23","type":"run"},{"id":"4860958962","athlete_id":"5493967","datetime":"2021-02-27 17:48:14","distance":3150,"duration":"0:45:01","type":"walk"}],"distance_this_week":{"monday":"2021-03-01","sunday":"2021-03-07","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false}],"last_updated":"2021-03-08 09:02:54.511331","date_from":"2021-03-01","date_to":"2021-03-07"}')}},[[11,1,2]]]);
//# sourceMappingURL=main.8fa20b01.chunk.js.map
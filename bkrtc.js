!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/home/nguyenhoanganh/media/app/lib/js",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(1),i=o(r);!function(e){var t=n(33);e.bkrtc={peer:{},create:function(){var e=new t;return e},init:function(e,t,n){return"object"===("undefined"==typeof e?"undefined":(0,i["default"])(e))&&"object"===("undefined"==typeof n?"undefined":(0,i["default"])(n))?(this.peer=e.init(t,n),this.peer):null},stream_media:function(e){return this.peer.stream_media(e)},transfer_data:function(e){return this.peer.transfer_data(e)}}}(window)},function(e,t,n){"use strict";var o=n(2)["default"];t["default"]=function(e){return e&&e.constructor===o?"symbol":typeof e},t.__esModule=!0},function(e,t,n){e.exports={"default":n(3),__esModule:!0}},function(e,t,n){n(4),n(32),e.exports=n(11).Symbol},function(e,t,n){"use strict";var o=n(5),r=n(6),i=n(7),c=n(8),s=n(10),a=n(14),u=n(9),p=n(17),l=n(18),f=n(20),_=n(19),d=n(21),v=n(26),m=n(27),g=n(28),h=n(29),E=n(22),y=n(16),S=o.getDesc,R=o.setDesc,O=o.create,G=v.get,C=r.Symbol,w=r.JSON,I=w&&w.stringify,N=!1,k=_("_hidden"),b=o.isEnum,L=p("symbol-registry"),T=p("symbols"),A="function"==typeof C,M=Object.prototype,x=c&&u(function(){return 7!=O(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a})?function(e,t,n){var o=S(M,t);o&&delete M[t],R(e,t,n),o&&e!==M&&R(M,t,o)}:R,D=function(e){var t=T[e]=O(C.prototype);return t._k=e,c&&N&&x(M,e,{configurable:!0,set:function(t){i(this,k)&&i(this[k],e)&&(this[k][e]=!1),x(this,e,y(1,t))}}),t},P=function(e){return"symbol"==typeof e},F=function(e,t,n){return n&&i(T,t)?(n.enumerable?(i(e,k)&&e[k][t]&&(e[k][t]=!1),n=O(n,{enumerable:y(0,!1)})):(i(e,k)||R(e,k,y(1,{})),e[k][t]=!0),x(e,t,n)):R(e,t,n)},U=function(e,t){h(e);for(var n,o=m(t=E(t)),r=0,i=o.length;i>r;)F(e,n=o[r++],t[n]);return e},j=function(e,t){return void 0===t?O(e):U(O(e),t)},V=function(e){var t=b.call(this,e);return t||!i(this,e)||!i(T,e)||i(this,k)&&this[k][e]?t:!0},J=function(e,t){var n=S(e=E(e),t);return!n||!i(T,t)||i(e,k)&&e[k][t]||(n.enumerable=!0),n},W=function(e){for(var t,n=G(E(e)),o=[],r=0;n.length>r;)i(T,t=n[r++])||t==k||o.push(t);return o},z=function(e){for(var t,n=G(E(e)),o=[],r=0;n.length>r;)i(T,t=n[r++])&&o.push(T[t]);return o},B=function(e){if(void 0!==e&&!P(e)){for(var t,n,o=[e],r=1,i=arguments;i.length>r;)o.push(i[r++]);return t=o[1],"function"==typeof t&&(n=t),!n&&g(t)||(t=function(e,t){return n&&(t=n.call(this,e,t)),P(t)?void 0:t}),o[1]=t,I.apply(w,o)}},q=u(function(){var e=C();return"[null]"!=I([e])||"{}"!=I({a:e})||"{}"!=I(Object(e))});A||(C=function(){if(P(this))throw TypeError("Symbol is not a constructor");return D(f(arguments.length>0?arguments[0]:void 0))},a(C.prototype,"toString",function(){return this._k}),P=function(e){return e instanceof C},o.create=j,o.isEnum=V,o.getDesc=J,o.setDesc=F,o.setDescs=U,o.getNames=v.get=W,o.getSymbols=z,c&&!n(31)&&a(M,"propertyIsEnumerable",V,!0));var H={"for":function(e){return i(L,e+="")?L[e]:L[e]=C(e)},keyFor:function(e){return d(L,e)},useSetter:function(){N=!0},useSimple:function(){N=!1}};o.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(e){var t=_(e);H[e]=A?t:D(t)}),N=!0,s(s.G+s.W,{Symbol:C}),s(s.S,"Symbol",H),s(s.S+s.F*!A,"Object",{create:j,defineProperty:F,defineProperties:U,getOwnPropertyDescriptor:J,getOwnPropertyNames:W,getOwnPropertySymbols:z}),w&&s(s.S+s.F*(!A||q),"JSON",{stringify:B}),l(C,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(e,t){var n=Object;e.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){e.exports=!n(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t,n){var o=n(6),r=n(11),i=n(12),c="prototype",s=function(e,t,n){var a,u,p,l=e&s.F,f=e&s.G,_=e&s.S,d=e&s.P,v=e&s.B,m=e&s.W,g=f?r:r[t]||(r[t]={}),h=f?o:_?o[t]:(o[t]||{})[c];f&&(n=t);for(a in n)u=!l&&h&&a in h,u&&a in g||(p=u?h[a]:n[a],g[a]=f&&"function"!=typeof h[a]?n[a]:v&&u?i(p,o):m&&h[a]==p?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t[c]=e[c],t}(p):d&&"function"==typeof p?i(Function.call,p):p,d&&((g[c]||(g[c]={}))[a]=p))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,e.exports=s},function(e,t){var n=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(e,t,n){var o=n(13);e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){e.exports=n(15)},function(e,t,n){var o=n(5),r=n(16);e.exports=n(8)?function(e,t,n){return o.setDesc(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var o=n(6),r="__core-js_shared__",i=o[r]||(o[r]={});e.exports=function(e){return i[e]||(i[e]={})}},function(e,t,n){var o=n(5).setDesc,r=n(7),i=n(19)("toStringTag");e.exports=function(e,t,n){e&&!r(e=n?e:e.prototype,i)&&o(e,i,{configurable:!0,value:t})}},function(e,t,n){var o=n(17)("wks"),r=n(20),i=n(6).Symbol;e.exports=function(e){return o[e]||(o[e]=i&&i[e]||(i||r)("Symbol."+e))}},function(e,t){var n=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},function(e,t,n){var o=n(5),r=n(22);e.exports=function(e,t){for(var n,i=r(e),c=o.getKeys(i),s=c.length,a=0;s>a;)if(i[n=c[a++]]===t)return n}},function(e,t,n){var o=n(23),r=n(25);e.exports=function(e){return o(r(e))}},function(e,t,n){var o=n(24);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var o=n(22),r=n(5).getNames,i={}.toString,c="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return r(e)}catch(t){return c.slice()}};e.exports.get=function(e){return c&&"[object Window]"==i.call(e)?s(e):r(o(e))}},function(e,t,n){var o=n(5);e.exports=function(e){var t=o.getKeys(e),n=o.getSymbols;if(n)for(var r,i=n(e),c=o.isEnum,s=0;i.length>s;)c.call(e,r=i[s++])&&t.push(r);return t}},function(e,t,n){var o=n(24);e.exports=Array.isArray||function(e){return"Array"==o(e)}},function(e,t,n){var o=n(30);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=!0},function(e,t){},function(e,t,n){"use strict";function o(){var e={},t=this;t.config=c,e=this}var r=n(34),i=n(45),c=n(47);o.prototype.init=function(e,t){var n=this;return null===n.config.HOST||void 0===n.config.HOST||""===n.config.HOST||null===n.config.ICE_SERVERS||void 0===n.config.ICE_SERVERS||""===n.config.ICE_SERVERS?{status:"error",data:"Error configuration."}:(null===n.config.CONFIG_MOBILE_RTC||void 0===n.config.CONFIG_MOBILE_RTC||""===n.config.CONFIG_MOBILE_RTC?n.config.CONFIG_RTC=c.CONFIG_WEB_RTC:n.config.CONFIG_RTC=n.config.CONFIG_MOBILE_RTC,n.peer_controller=new r(n.config),n.peer_controller.initialize_controller(e,t),{status:"success",data:n})},o.prototype.stream_media=function(){var e=this;if(e.peer_controller){var t=e.peer_controller.stream_media();return t}return i.log("Service's not init"),null},o.prototype.transfer_data=function(e){var t=this;if(t.peer_controller){var n=t.peer_controller.transfer_data(e);return n}return i.log("Service's not init"),null},e.exports=o},function(e,t,n){"use strict";function o(e){var t=this;t.config=e}var r=n(35),i=n(50);o.prototype.initialize_controller=function(e,t){var n=this;n.socket_client=t,n.public_key=e},o.prototype.stream_media=function(){var e=this,t={public_key:e.public_key,socket_client:e.socket_client,host:e.config.HOST,ice_server:e.config.ICE_SERVERS,api_rtc:e.config.CONFIG_RTC};return e.stream_service=new r(t),e.stream_service},o.prototype.transfer_data=function(e){var t=this,n={public_key:t.public_key,ice_server:t.config.ICE_SERVERS};return t.channel_service=new i(n,t.web_socket,e),t.channel_service},e.exports=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=this;t.public_key=e.public_key,t.list_peer={},t.config=e,t.open=!1,t.stream=null,t.event=new p}var i=n(36),c=o(i),s=n(41),a=o(s),u=n(43),p=n(49),l=n(44),f=n(45);r.prototype.initialize_server_connection=function(){var e=this;e.socket=new l(e.config.host,e.config.socket_client),e.socket.connect(e.public_key),e._handle_message(),e._add_socket_listeners()},r.prototype.register=function(e){var t=this;t.user=e;var n={type:"INIT",message:{peer_name:t.user}};t.socket.send("INIT",n,function(e){f.log(e),t.event.emit("LOGGING",e)},function(e){f.log(e),t.event.emit("LOGGING",e)})},r.prototype._add_socket_listeners=function(){var e=this;e.socket.on("MESSAGE",function(t){f.log("*** RECEIVE MESSAGE FROM SOCKET SERVER WITH TYPE "+t.type+" ***"),e.event.emit(t.type,t)})},r.prototype._handle_message=function(){var e=this;e.event.on("GET_PEER",function(t){f.log("*** MESSAGE: - Get list peer from Room"),e.list_peer=t.message.list_peer}),e.event.on("INIT",function(t){var n="*** MESSAGE: - RESPONSE: "+t.message;f.log(n),e.event.emit("LOGGING",n),"ACCEPT"===t.message?(e.open=!0,e.event.emit("ACCEPT",!0)):"REFUSE"===t.message&&(e.open=!1,e.event.emit("ACCEPT",!1))}),e.event.on("JOIN_ROOM",function(t){var n="*** MESSAGE: - JOIN ROOM: SUCCESS";f.log(n),e.event.emit("LOGGING",n);var o={_type:"request"};e.set_peer(t.message.list_peer);var r={_event:e.event,_socket:e.socket,_ice_server:e.config.ice_server,_api_rtc:e.config.api_rtc};t.message.list_peer.length>0&&e._create_connections(t.message.list_peer,r,o)}),e.event.on("END_CALL",function(t){var n=t.message.peer,o="*** MESSAGE: - "+n.peer_id+" LEFT ROOM";f.log(o),e.event.emit("LOGGING",o);var r=e.list_peer[n.peer_id].connection;r.close(),delete e.list_peer[n.peer_id],e.event.emit("end_remote_stream",n.peer_id)}),e.event.on("REQUEST_CALL",function(t){var n=t.message.peer,o="*** MESSAGE: - "+n.peer_id+" CALL TO YOU";f.log(o),e.event.emit("LOGGING",o),e.event.emit("MAKE_CALL",t)}),e.event.on("RESPONSE_CALL",function(t){var n=t.message.peer,o="*** MESSAGE: - "+n.peer_id+" ACCPET TO CALL";f.log(o),e.event.emit("LOGGING",o),e.event.emit("ACCEPT_CALL",t.message.peer)}),e.event.on("PEER_CONNECT",function(t){var n=t.message.peer;e.list_peer[n.peer_id]={},e.list_peer[n.peer_id].peer=n,e.list_peer[n.peer_id].connection=null}),e.event.on("PEER_DISCONNECT",function(t){var n=t.message.peer,o="*** MESSAGE: - "+n.peer_id+" DISCONNECT";f.log(o),e.event.emit("LOGGING",o);var r=e.list_peer[n.peer_id].connection;r.close(),delete e.list_peer[n.peer_id],e.event.emit("end_remote_stream",n.peer_id)}),e.event.on("RECEIVE_CANDIDATE",function(t){f.log("*** MESSAGE: RECEIVE CANDIDATE");var n=t.message;e.event.emit(n.peer_id+"_receive_candidate",t)}),e.event.on("RECEIVE_OFFER",function(t){f.log("*** MESSAGE: RECEIVE OFFER"),e.event.emit("CALL",t)}),e.event.on("RECEIVE_ANSWER",function(t){f.log("*** MESSAGE: RECEIVE ANSWER");var n=t.message;e.event.emit(n.peer_id+"_receive_answer",t)}),e.event.on("CALL",function(t){var n={_type:"response"},o={_event:e.event,_socket:e.socket,_ice_server:e.config.ice_server,_messages:{title:t.message.peer_id+"_receive_offer",data:t},_api_rtc:e.config.api_rtc},r=new u(t.message.peer_id,t.message.peer_name,o,n);r.init_create_media_connection(e.stream),r.answer(),e.list_peer[r.connection_id].connection=r}),e.event.on("ACCEPT_CALL",function(t){var n={_type:"request"};e.list_peer[t.peer_id]={},e.list_peer[t.peer_id].peer=t,e.list_peer[t.peer_id].connection=null;var o={_event:e.event,_socket:e.socket,_ice_server:e.config.ice_server,_api_rtc:e.config.api_rtc};e._create_connection(t.peer_id,t.peer_name,o,n)}),e.event.on("ERROR",function(t){var n="*** "+t.type+": "+t.message;f.log(n),e.event.emit("LOGGING",n)})},r.prototype.get_user_media=function(e,t,n){var o=this;if(o.open){var r;t=t||function(){},n=n||function(){},r={video:e.video,audio:e.audio},o.config.api_rtc.getUserMedia?o.config.api_rtc.getUserMedia.call(window.navigator,r,function(e){o.stream=e,o.video_track=e.getVideoTracks(),o.audio_track=e.getAudioTracks();var n="*** MESSAGE: - GET USER MEDIA IN LOCAL",i='*** MESSAGE: - OPTIONS \n{"audio": '+r.audio+', "video":'+(0,a["default"])(r.video);o.event.emit("LOGGING",n),o.event.emit("LOGGING",i),o.video_track.length>0&&o.event.emit("LOGGING","Using video device: "+o.video_track[0].label),t(e)},function(e){onError(e)}):f.log("WebRTC's not support on this browser")}},r.prototype.call_room=function(e,t){var n=this;if(n.open){if(null===e||""===e||void 0===e){var o="*** ERROR: room_name's not valid";t(o)}n._join_room(e,function(e){f.log("*** SUCCESS: "+e)},function(e){f.log("*** ERROR: "+e)})}else{var r="You can't use call_room service, you must to register service";f.log("*** ERROR: "+r),n.event.emit("LOGGING",eror1)}},r.prototype.call_user=function(e,t){var n=this;if(n.open){if(null===e||""===e||void 0===e){var o="*** ERROR: user's not valid";t(o)}var r={type:"REQUEST_CALL",message:{peer_name:e}};n.socket.send("REQUEST_CALL",r,function(e){f.log("*** SUCCESS: "+e)},function(e){f.log("*** ERROR: "+e)})}else{var i="You can't use call_room service, you must to register service";f.log("*** ERROR: "+i),n.event.emit("LOGGING",eror1)}},r.prototype._join_room=function(e,t,n){var o=this,r={type:"JOIN_ROOM",message:{room_name:e}};o.socket.send("JOIN_ROOM",r,function(e){t(e)},function(e){n(e)})},r.prototype._create_connection=function(e,t,n,o){var r=this,i=new u(e,t,n,o);i.init_create_media_connection(r.stream),i.handle_message(),r.list_peer[e].connection=i},r.prototype._create_connections=function(e,t,n){var o=this;if(null===o.stream)return void f.log("*** ERROR: Stream's require");f.log("*** MESSAGE: Create peer connection with peers");for(var r=0;r<e.length;r++)o._create_connection(e[r].peer_id,e[r].peer_name,t,n)},r.prototype.set_peer=function(e){for(var t=this,n=0;n<e.length;n++){var o=e[n];t.list_peer[o.peer_id]={},t.list_peer[o.peer_id].peer=o,t.list_peer[o.peer_id].connection=null}},r.prototype.end_call=function(){var e=this;if(e.open){e.socket.send("LEFT_ROOM","",function(t){f.log(t),e.event.emit("LOGGING",t)},function(t){f.log(t),e.event.emit("LOGGING",t)});for(var t in e.list_peer){var n=e.list_peer[t].connection;n.close(),e.event.emit("end_remote_stream",t)}e.stream.getTracks().forEach(function(e){e.stop()}),e.stream=null,e.list_peer={}}else{var o="You can't use call_room service, you must to register service";f.log("*** ERROR: "+o),e.event.emit("LOGGING",eror1)}},r.prototype.accept_call=function(e){var t=this;if(t.open){var n={type:"RESPONSE_CALL",message:{peer:e.message.peer,room_name:e.message.room_name}};t.list_peer[e.message.peer.peer_id]={},t.list_peer[e.message.peer.peer_id].peer=e.message.peer,t.list_peer[e.message.peer.peer_id].connection=null,t.socket.send("RESPONSE_CALL",n,function(e){f.log(e),t.event.emit("LOGGING",e)},function(e){f.log(e),t.event.emit("LOGGING",e)})}else{var o="You can't use call_room service, you must to register service";f.log("*** ERROR: "+o),t.event.emit("LOGGING",eror1)}},r.prototype.get_statistics=function(){var e=this,t={};if((0,c["default"])(e.list_peer).length>0)for(var n in e.list_peer)null===n.connection?t[n.peer]=null:(n.timestampPrev=0,n.bytesPrev=0,setInterval(function(){n.connection.getRemoteStreams()[0]&&n.connection.getStats(null,function(e){(0,c["default"])(e).forEach(function(t){var o,r=e[t],i=r.timestampt;if("inboundrtp"===r.type&&"video"===r.mediaType)o=Math.floor(r.bitrateMean/1024);else if("ssrc"===r.type&&r.bytesReceived&&r.googFrameHeightReceived){var c=r.bytesReceived;n.timestampPrev&&(o=8*(c-n.bytesPrev)/(i-n.timestampPrev),o=Math.floor(o)),n.bytesPrev=c,n.timestampPrev=i}})})},1e3));else f.log("*** MESSAGE: get statistics not runned")},r.prototype.pause_video=function(){var e=this;if(null!==e.stream){var t=e.stream.getVideoTracks();t.length>0?e.stream.removeTrack(videotrack[0]):e.event.emit("LOGGING","Not turn off video")}else e.event.emit("LOGGING","Change permission for brower to using the media")},r.prototype.resume_video=function(){var e=this;null!==e.stream?e.stream.addTrack(e.video_track[0]):e.event.emit("LOGGING","Change permission for brower to using the media")},r.prototype.mute=function(){var e=this;if(null!==e.stream){var t=e.stream.getAudioTracks();t.length>0?e.stream.removeTrack(audiotrack[0]):e.event.emit("LOGGING","Not turn off audio")}else e.event.emit("LOGGING","Change permission for brower to using the media")},r.prototype.unmute=function(){var e=this;null!==e.stream?e.stream.addTrack(e.audio_track[0]):e.event.emit("LOGGING","Change permission for brower to using the media")},r.prototype.record=function(e){var t=this;if(null!==t.stream){var n={mimeType:"video/webm"};t.recorder=new MediaRecorder(t.stream,n),t.recorder.ondataavailable=function(e){console.log(e.data.size)},e()}else t.event.emit("LOGGING","Change permission for brower to using the media")},r.prototype.get_device_media=function(e){var t=this;return null===e.video_input_selector||void 0===e.video_input_selector||""===e.video_input_selector||null===e.audio_input_selector||void 0===e.audio_input_selector||""===e.audio_input_selector||null===e.audio_output_selector||void 0===e.audio_output_selector||""===e.audio_output_selector?void t.event.emit("LOGGING","Media selector in valid. It must has video input, audio input and audio output"):(t.media_selector={video_input_selector:e.video_input_selector,audio_input_selector:e.audio_input_selector,audio_output_selector:e.audio_output_selector},void window.navigator.mediaDevices.enumerateDevices().then(function(e){t.get_devices(e)})["catch"](function(e){t.event.emit("LOGGING","navigator.getUserMedia error: ",e)}))},r.prototype.get_devices=function(e){for(var t=this,n=0;n!==e.length;++n){var o=e[n],r=document.createElement("option");r.value=o.id,"videoinput"===o.kind?(r.text=o.label||"camera "+(t.media_selector.video_input_selector.length+1),t.media_selector.video_input_selector.appendChild(r)):"audioinput"===o.kind?(r.text=o.label||"microphone "+(t.media_selector.audio_input_selector.length+1),t.media_selector.audio_input_selector.appendChild(r)):"audiooutput"===o.kind?(r.text=o.label||"speaker "+(t.media_selector.audio_output_selector.length+1),t.media_selector.audio_output_selector.appendChild(r)):t.event.emit("LOGGING","Some other kind of source/device: ",o)}},r.prototype.setting_user_media=function(e,t,n){var o,r=this;t=t||function(){},n=n||function(){},o={video:e.video,audio:e.audio},r.config.api_rtc.getUserMedia?r.config.api_rtc.getUserMedia.call(window.navigator,o,function(e){r.stream=e,r.video_track=e.getVideoTracks(),r.audio_track=e.getAudioTracks();var n="*** MESSAGE: - GET USER MEDIA IN LOCAL",i='*** MESSAGE: - OPTIONS \n{"audio": '+o.audio+', "video":'+(0,a["default"])(o.video);r.event.emit("LOGGING",n),r.event.emit("LOGGING",i),r.video_track.length>0&&r.event.emit("LOGGING","Using video device: "+r.video_track[0].label),t(e)},function(e){n(e)}):f.log("WebRTC's not support on this browser")},e.exports=r},function(e,t,n){e.exports={"default":n(37),__esModule:!0}},function(e,t,n){n(38),e.exports=n(11).Object.keys},function(e,t,n){var o=n(39);n(40)("keys",function(e){return function(t){return e(o(t))}})},function(e,t,n){var o=n(25);e.exports=function(e){return Object(o(e))}},function(e,t,n){var o=n(10),r=n(11),i=n(9);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],c={};c[e]=t(n),o(o.S+o.F*i(function(){n(1)}),"Object",c)}},function(e,t,n){e.exports={"default":n(42),__esModule:!0}},function(e,t,n){var o=n(11);e.exports=function(e){return(o.JSON&&o.JSON.stringify||JSON.stringify).apply(JSON,arguments)}},function(e,t,n){"use strict";function o(e,t,n,o){var i=this;i.connection_id=e,i.connection_name=t,i.provider=n,i.event=n._event,i.socket=n._socket,i.options=o,i.type="media",i.sdpConstraints={mandatory:{OfferToReceiveAudio:!0,OfferToReceiveVideo:!0}},i.negotiator=new r(i.provider._api_rtc)}var r=(n(44),n(46)),i=n(45);o.prototype.init_create_media_connection=function(e){var t=this;t.options._stream=e,t.negotiator.start_peer_connection(t)},o.prototype.handle_message=function(){var e=this;e.event.on(e.connection_id+"_receive_candidate",function(t){var n=t.message,o="*** MESSAGE: - RECEIVE SDP CANDIDATE FROM: "+n.peer_id;i.log(o),e.event.emit("LOGGING",o);var r=JSON.parse(n.sdp).candidate,c=new e.provider._api_rtc.RTCIceCandidate(r);e.negotiator.peer_connections.media[n.peer_id].addIceCandidate(c)}),e.event.on(e.connection_id+"_receive_offer",function(t){var n=t.message,o="*** MESSAGE: - RECEIVE SDP OFFER FROM: "+n.peer_id;i.log(o),e.event.emit("LOGGING",o);var r=JSON.parse(n.sdp).offer;e.negotiator.receive_offer(e,r)}),e.event.on(e.connection_id+"_receive_answer",function(t){var n=t.message,o="*** MESSAGE : - RECEIVE SDP ANSWER FROM: "+n.peer_id;i.log(o),e.event.emit("LOGGING",o);var r=JSON.parse(n.sdp).answer;e.negotiator.receive_answer(e,r)})},o.prototype.add_stream=function(e,t){e.addStream(t)},o.prototype.answer=function(){var e=this;if(!e.options._stream){var t="*** MESSAGE: Local stream's require on this media connection";return i.log(t),void e.event.emit("LOGGING",t)}e.handle_message(),e.event.emit(e.provider._messages.title,e.provider._messages.data)},o.prototype.close=function(){var e=this,t=e.negotiator._get_peer_connection(e);if(null===t){var n="*** ERROR: Not found peer connection with "+e.connection_id;e.event.emit("LOGGING",n)}try{t.close()}catch(o){i.log(o)}},e.exports=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n=this;n.URL=e,n.socket_client=t}var i=n(41),c=o(i),s=n(45);r.prototype.connect=function(e){var t=this,n="key="+e;return null!==t.socket_client.path&&""!==t.socket_client.path&&void 0!==t.socket_client.path?t.socket=t.socket_client.socket.connect(t.URL,{path:t.socket_client.path,reconnect:!0,query:n,forceNew:!0}):t.socket=t.socket_client.socket.connect(t.URL,{reconnect:!0,query:n,forceNew:!0}),t.socket.on("connect",function(){s.log("*** MESSAGE: Connect to Socket Server successfully")}),t.socket.on("connect_error",function(e){s.log("*** MESSAGE: Failed to connect to server - "+e)}),t.socket.on("disconnect",function(){s.log("*** MESSAGE: Disconect to Socket Server")}),t.socket},r.prototype.send=function(e,t,n,o){var r=this;if(""===e||null===e)return console.log("*** ERROR: message_name's not null!"),void o("*** ERROR: message_name's not null!");var i=(0,c["default"])({data:t});r.socket.emit(e,i),n("*** SUCCESS: Send message successfully")},r.prototype.on=function(e,t){var n=this;n.socket.on(e,function(e){var n=JSON.parse(e).data;return t(n)})},e.exports=r},function(e,t){"use strict";var n={log:function(e){console.log(e)},remove_peer:function(e,t){for(var n=0;n<e.length;n++)if(t===e[n]){e.splice(n,1);break}return e}};e.exports=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=this;t.api_rtc=e,t.peer_connections={media:{},data:{}}}var i=n(41),c=o(i),s=(n(47),n(45));r.prototype.start_peer_connection=function(e){var t=this,n=t._get_peer_connection(e);return null===n&&(n=t.create_peer_connection(e)),"media"===e.type?e.add_stream(n,e.options._stream):"data"===e.type,"request"===e.options._type&&t._send_offer(n,e),n},r.prototype.create_peer_connection=function(e){var t=this,n={};"media"===e.type?n={optional:[{DtlsSrtpKeyAgreement:!0}]}:"data"===e.type&&(n={optional:[{RtpDataChannels:!0}]});var o={iceServers:e.provider._ice_server},r=new t.api_rtc.RTCPeerConnection(o);return t.peer_connections[e.type][e.connection_id]=r,t._add_listeners(e,r),r},r.prototype._get_peer_connection=function(e){var t=this;t.peer_connections[e.type]||s.log("*** ERROR: Type Connection's not valid");var n;if(n=t.peer_connections[e.type][e.connection_id],!n){n=null;var o="*** ERROR: Not found peer connection with "+e.connection_id;s.log(o)}return n},r.prototype._add_listeners=function(e,t){var n=e.socket,o=e.event;t.onicecandidate=function(t){if(t.candidate){var r={type:"SEND_CANDIDATE",message:{sdp:(0,c["default"])({candidate:t.candidate}),peer_id:e.connection_id}};n.send("SEND_CANDIDATE",r,function(e){s.log(e)},function(e){s.log(e)})}o.emit("candidate",t.candidate)},t.onopen=function(){o.emit("peer_connection_open"),s.log("*** MESSAGE: - Open peer_connection")},t.onaddstream=function(t){o.emit("remote_stream",t.stream,{id:e.connection_id,name:e.connection_name})},t.oniceconnectionstatechange=function(){var e=this.iceConnectionState;switch(s.log("*** MESSAGE: - ICE Of State: "+e),e){case"completed":s.log("*** MESSAGE: - Completed ICE");break;case"failed":s.log("*** MESSAGE: - Failed ICE");break;case"disconnected":s.log("*** MESSAGE: - Disconnected ICE");break;case"closed":s.log("*** MESSAGE: - Closed ICE")}},t.ondatachannel=function(e){s.log("*** MESSAGE: - Received data channel")}},r.prototype._check_support_datachannel=function(){var e=this;try{var t=new e.api_rtc.RTCPeerConnection(e.server(),e.dataChannelConfig),n=t.createDataChannel("supportCheck",{reliable:!1});return n.close(),!0}catch(o){return!1}},r.prototype._send_offer=function(e,t){var n=t.connection_id,o=t.socket;"media"===t.type?e.createOffer(function(t){e.setLocalDescription(t,function(){var e={type:"SEND_OFFER",message:{sdp:(0,c["default"])({offer:t}),peer_id:n}};o.send("SEND_OFFER",e,function(e){s.log(e)},function(e){s.log(e)})},function(e){s.log("*** ERROR: - Failed to setLocalDescription: "+e)})},function(e){s.log("*** ERROR: - Failed to createOffer: "+e)},t.sdpConstraints):"data"===t.type&&e.createOffer(function(t){e.setLocalDescription(t,function(){var e={type:"SEND_OFFER",message:{sdp:(0,c["default"])({offer:t}),peer_id:n}};o.send("SEND_OFFER",e,function(e){s.log(e)},function(e){s.log(e)})},function(e){s.log("*** ERROR: - Failed to setLocalDescription: "+e)})},function(e){s.log("*** ERROR: - Failed to createOffer: "+e)})},r.prototype._send_answer=function(e,t,n){var o=this,r=t.connection_id,i=t.socket;e.setRemoteDescription(new o.api_rtc.RTCSessionDescription(n),function(){e.createAnswer(function(t){e.setLocalDescription(t,function(){var e={type:"SEND_ANSWER",message:{sdp:(0,c["default"])({answer:t}),peer_id:r}};i.send("SEND_ANSWER",e,function(e){s.log(e)},function(e){s.log(e)})},function(e){s.log("*** ERROR: - Failed to setLocalDescription: "+e)})},function(e){s.log("*** ERROR: - Failed to createAnswer: "+e)})},function(e){s.log("*** ERROR: - Failed to setRemoteDescription: "+e)})},r.prototype.receive_offer=function(e,t){var n=this,o=n.peer_connections[e.type][e.connection_id];n._send_answer(o,e,t)},r.prototype.receive_answer=function(e,t){var n=this,o=n.peer_connections[e.type][e.connection_id];o.setRemoteDescription(new n.api_rtc.RTCSessionDescription(t))},e.exports=r},function(e,t,n){"use strict";e.exports.HOST="https://localhost:8111/test",e.exports.ICE_SERVERS=[{url:"stun:stun-turn.org:3478"},{url:"turn:103.56.157.166:3478",credential:"anhnh@A",username:"hoanganh-engineer"}];var o=n(48).RTCPeerConnection,r=n(48).RTCSessionDescription,i=n(48).RTCIceCandidate,c=n(48).getUserMedia;e.exports.CONFIG_WEB_RTC={RTCPeerConnection:o,RTCSessionDescription:r,RTCIceCandidate:i,getUserMedia:c},e.exports.CONFIG_MOBILE_RTC={}},function(e,t){"use strict";e.exports.RTCPeerConnection=window.RTCPeerConnection||window.webkitRTCPeerConnection||window.mozRTCPeerConnection,e.exports.RTCIceCandidate=window.RTCIceCandidate||window.mozRTCIceCandidate||window.webkitRTCIceCandidate,e.exports.RTCSessionDescription=window.RTCSessionDescription||window.mozRTCSessionDescription||window.webkitRTCSessionDescription,e.exports.URL=window.URL||window.mozURL||window.webkitURL,e.exports.getUserMedia=window.navigator.getUserMedia||window.navigator.webkitGetUserMedia||window.navigator.mozGetUserMedia},function(e,t,n){"use strict";function o(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function r(){}var i="function"!=typeof Object.create?"~":!1;r.prototype._events=void 0,r.prototype.listeners=function(e,t){var n=i?i+e:e,o=this._events&&this._events[n];if(t)return!!o;if(!o)return[];if(o.fn)return[o.fn];for(var r=0,c=o.length,s=new Array(c);c>r;r++)s[r]=o[r].fn;return s},r.prototype.emit=function(e,t,n,o,r,c){var s=i?i+e:e;if(!this._events||!this._events[s])return!1;var a,u,p=this._events[s],l=arguments.length;if("function"==typeof p.fn){switch(p.once&&this.removeListener(e,p.fn,void 0,!0),l){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,t),!0;case 3:return p.fn.call(p.context,t,n),!0;case 4:return p.fn.call(p.context,t,n,o),!0;case 5:return p.fn.call(p.context,t,n,o,r),!0;case 6:return p.fn.call(p.context,t,n,o,r,c),!0}for(u=1,a=new Array(l-1);l>u;u++)a[u-1]=arguments[u];p.fn.apply(p.context,a)}else{var f,_=p.length;for(u=0;_>u;u++)switch(p[u].once&&this.removeListener(e,p[u].fn,void 0,!0),l){case 1:p[u].fn.call(p[u].context);break;case 2:p[u].fn.call(p[u].context,t);break;case 3:p[u].fn.call(p[u].context,t,n);break;default:if(!a)for(f=1,a=new Array(l-1);l>f;f++)a[f-1]=arguments[f];p[u].fn.apply(p[u].context,a)}}return!0},r.prototype.on=function(e,t,n){var r=new o(t,n||this),c=i?i+e:e;return this._events||(this._events=i?{}:Object.create(null)),this._events[c]?this._events[c].fn?this._events[c]=[this._events[c],r]:this._events[c].push(r):this._events[c]=r,this},r.prototype.once=function(e,t,n){var r=new o(t,n||this,!0),c=i?i+e:e;return this._events||(this._events=i?{}:Object.create(null)),this._events[c]?this._events[c].fn?this._events[c]=[this._events[c],r]:this._events[c].push(r):this._events[c]=r,this},r.prototype.removeListener=function(e,t,n,o){var r=i?i+e:e;if(!this._events||!this._events[r])return this;var c=this._events[r],s=[];if(t)if(c.fn)(c.fn!==t||o&&!c.once||n&&c.context!==n)&&s.push(c);else for(var a=0,u=c.length;u>a;a++)(c[a].fn!==t||o&&!c[a].once||n&&c[a].context!==n)&&s.push(c[a]);return s.length?this._events[r]=1===s.length?s[0]:s:delete this._events[r],this},r.prototype.removeAllListeners=function(e){return this._events?(e?delete this._events[i?i+e:e]:this._events=i?{}:Object.create(null),this):this},r.prototype.off=r.prototype.removeListener,r.prototype.addListener=r.prototype.on,r.prototype.setMaxListeners=function(){return this},r.prefixed=i,e.exports=r},function(e,t,n){"use strict";function o(e,t,n){var o=this;o.public_key=e,o.socket=t,o.user=n}var r=n(51);o.create_connection=function(){var e=this;e.data_connection=new r(e.public_key,e.socket,e.user)},e.exports=o},function(e,t,n){"use strict";function o(e,t,n){var o=this;o.public_key=e,o.id=null,o.user=n,o.type="data",o.peer_connections={},o.socket=t,o.event=new r,o.add_listener()}var r=(n(44),n(49));o.prototype.add_listener=function(){var e=this;e.socket.on("message",function(t){e.event.emit(t.event_name,t)})},o.prototype.handle_message=function(){var e=this;e.event.on("receive_candidate",function(t){console.log("=== Nhan candidate tu "+t.socketId+"===========");
var n=JSON.parse(t.candidate).candidate;console.log(n);var o=new RTCIceCandidate(n);null===e.connection?(console.log(e.peerConnections[t.socketId]),e.peerConnections[t.socketId].addIceCandidate(o)):e.connection.addIceCandidate(o)}),e.event.on("receive_offer",function(t){console.log(t),console.log("=== Nhan offer tu "+t.socketId+"===============");var n=JSON.parse(t.offer).offer;console.log(n),e.receiveOffer(t.socketId,n)}),e.event.on("receive_answer",function(t){console.log("=== Nhan answer tu "+t.socketId+"==============");var n=JSON.parse(t.answer).answer;console.log(n),e.receiveAnswer(t.socketId,n)})},e.exports=o}]);
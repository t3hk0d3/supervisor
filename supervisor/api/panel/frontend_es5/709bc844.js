"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[5510],{35510:function(e,t,r){r.r(t);r(51187);var i,n,o,a,s,c,l=r(37500),u=r(63550),p=r(47181),d=(r(9381),r(98762),r(39710)),f=r(41682),h=r(60538),m=r(26765),y=r(11654);r(94758);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t,r,i,n,o,a){try{var s=e[o](a),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(i,n)}function k(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=x(e);if(t){var n=x(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return E(this,r)}}function E(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function D(){D=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!A(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=j(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:z(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=z(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function C(e){var t,r=j(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function S(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function A(e){return e.decorators&&e.decorators.length}function O(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function z(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function j(e){var t=function(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==v(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===v(t)?t:String(t)}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=D();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(O(o.descriptor)||O(n.descriptor)){if(A(o)||A(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(A(o)){if(A(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}S(o,n)}else t.push(o)}return t}(a.d.map(C)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,u.Mo)("dialog-hassio-create-backup")],(function(e,t){var r,v,E=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(i,t);var r=_(i);function i(){var t;g(this,i);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(P(t)),t}return i}(t);return{F:E,d:[{kind:"field",decorators:[(0,u.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,u.SB)()],key:"_creatingBackup",value:function(){return!1}},{kind:"field",decorators:[(0,u.IO)("supervisor-backup-content")],key:"_backupContent",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._dialogParams=e,this._creatingBackup=!1}},{kind:"method",key:"closeDialog",value:function(){this._dialogParams=void 0,this._creatingBackup=!1,this._error=void 0,(0,p.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._dialogParams?(0,l.dy)(n||(n=k(["\n      <ha-dialog\n        open\n        scrimClickAction\n        @closed=","\n        .heading=","\n      >\n        ","\n        ",'\n        <mwc-button slot="secondaryAction" @click=',">\n          ","\n        </mwc-button>\n        <mwc-button\n          .disabled=",'\n          slot="primaryAction"\n          @click=',"\n        >\n          ","\n        </mwc-button>\n      </ha-dialog>\n    "])),this.closeDialog,(0,d.i)(this.hass,this._dialogParams.supervisor.localize("backup.create_backup")),this._creatingBackup?(0,l.dy)(o||(o=k(["<ha-circular-progress active></ha-circular-progress>"]))):(0,l.dy)(a||(a=k(["<supervisor-backup-content\n              .hass=","\n              .supervisor=","\n              dialogInitialFocus\n            >\n            </supervisor-backup-content>"])),this.hass,this._dialogParams.supervisor),this._error?(0,l.dy)(s||(s=k(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",this.closeDialog,this._dialogParams.supervisor.localize("common.close"),this._creatingBackup,this._createBackup,this._dialogParams.supervisor.localize("backup.create")):(0,l.dy)(i||(i=k([""])))}},{kind:"method",key:"_createBackup",value:(r=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("running"===this._dialogParams.supervisor.info.state){e.next=3;break}return(0,m.Ys)(this,{title:this._dialogParams.supervisor.localize("backup.could_not_create"),text:this._dialogParams.supervisor.localize("backup.create_blocked_not_running","state",this._dialogParams.supervisor.info.state)}),e.abrupt("return");case 3:if(t=this._backupContent.backupDetails(),this._creatingBackup=!0,this._error="",!t.password||t.password.length){e.next=10;break}return this._error=this._dialogParams.supervisor.localize("backup.enter_password"),this._creatingBackup=!1,e.abrupt("return");case 10:if(!t.password||t.password===t.confirm_password){e.next=14;break}return this._error=this._dialogParams.supervisor.localize("backup.passwords_not_matching"),this._creatingBackup=!1,e.abrupt("return");case 14:if(delete t.confirm_password,e.prev=15,"full"!==this._backupContent.backupType){e.next=21;break}return e.next=19,(0,h.vU)(this.hass,t);case 19:e.next=23;break;case 21:return e.next=23,(0,h.zU)(this.hass,t);case 23:this._dialogParams.onCreate(),this.closeDialog(),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(15),this._error=(0,f.js)(e.t0);case 30:this._creatingBackup=!1;case 31:case"end":return e.stop()}}),e,this,[[15,27]])})),v=function(){var e=this,t=arguments;return new Promise((function(i,n){var o=r.apply(e,t);function a(e){b(o,i,n,a,s,"next",e)}function s(e){b(o,i,n,a,s,"throw",e)}a(void 0)}))},function(){return v.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[y.Qx,y.yu,(0,l.iv)(c||(c=k(["\n        ha-circular-progress {\n          display: block;\n          text-align: center;\n        }\n      "])))]}}]}}),l.oi)}}]);
export const id=5337;export const ids=[5337];export const modules={33984:(e,i,t)=>{t.d(i,{d:()=>a});const a=e=>{switch(e.language){case"cz":case"de":case"fi":case"fr":case"sk":case"sv":return" ";default:return""}}},77372:(e,i,t)=>{var a=t(36312),o=t(72606),l=t(50289),s=t(29818),r=t(49141);(0,a.A)([(0,s.EM)("ha-button")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[r.R,l.AH`::slotted([slot=icon]){margin-inline-start:0px;margin-inline-end:8px;direction:var(--direction);display:block}.mdc-button{height:var(--button-height,36px)}.trailing-icon{display:flex}.slot-container{overflow:var(--button-slot-container-overflow,visible)}`]}]}}),o.$)},58954:(e,i,t)=>{var a=t(36312),o=t(68689),l=(t(16891),t(23058),t(50289)),s=t(29818),r=t(85323),n=t(34897),d=(t(77372),t(4169),t(33984)),c=t(21863),h=t(88441);const u="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",p="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13.5,16V19H10.5V16H8L12,12L16,16H13.5M13,9V3.5L18.5,9H13Z";(0,a.A)([(0,s.EM)("ha-file-upload")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"accept",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"icon",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"secondary",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"supports",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Object})],key:"value",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"multiple",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"uploading",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Number})],key:"progress",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Boolean,attribute:"auto-open-file-dialog"})],key:"autoOpenFileDialog",value:()=>!1},{kind:"field",decorators:[(0,s.wk)()],key:"_drag",value:()=>!1},{kind:"field",decorators:[(0,s.P)("#input")],key:"_input",value:void 0},{kind:"method",key:"firstUpdated",value:function(e){(0,o.A)(t,"firstUpdated",this,3)([e]),this.autoOpenFileDialog&&this._openFilePicker()}},{kind:"method",key:"render",value:function(){return l.qy` ${this.uploading?l.qy`<div class="container"> <div class="row"> <span class="header">${this.value?this.hass?.localize("ui.components.file-upload.uploading_name",{name:this.value.toString()}):this.hass?.localize("ui.components.file-upload.uploading")}</span> ${this.progress?l.qy`<span class="progress">${this.progress}${(0,d.d)(this.hass.locale)}%</span>`:""} </div> <mwc-linear-progress .indeterminate="${!this.progress}" .progress="${this.progress?this.progress/100:void 0}"></mwc-linear-progress> </div>`:l.qy`<label for="${this.value?"":"input"}" class="container ${(0,r.H)({dragged:this._drag,multiple:this.multiple,value:Boolean(this.value)})}" @drop="${this._handleDrop}" @dragenter="${this._handleDragStart}" @dragover="${this._handleDragStart}" @dragleave="${this._handleDragEnd}" @dragend="${this._handleDragEnd}">${this.value?"string"==typeof this.value?l.qy`<div class="row"> <div class="value" @click="${this._openFilePicker}"> <ha-svg-icon .path="${this.icon||p}"></ha-svg-icon> ${this.value} </div> <ha-icon-button @click="${this._clearValue}" .label="${this.hass?.localize("ui.common.delete")||"Delete"}" .path="${u}"></ha-icon-button> </div>`:(this.value instanceof FileList?Array.from(this.value):(0,c.e)(this.value)).map((e=>l.qy`<div class="row"> <div class="value" @click="${this._openFilePicker}"> <ha-svg-icon .path="${this.icon||p}"></ha-svg-icon> ${e.name} - ${(0,h.A)(e.size)} </div> <ha-icon-button @click="${this._clearValue}" .label="${this.hass?.localize("ui.common.delete")||"Delete"}" .path="${u}"></ha-icon-button> </div>`)):l.qy`<ha-svg-icon class="big-icon" .path="${this.icon||p}"></ha-svg-icon> <ha-button unelevated @click="${this._openFilePicker}"> ${this.label||this.hass?.localize("ui.components.file-upload.label")} </ha-button> <span class="secondary">${this.secondary||this.hass?.localize("ui.components.file-upload.secondary")}</span> <span class="supports">${this.supports}</span>`} <input id="input" type="file" class="file" .accept="${this.accept}" .multiple="${this.multiple}" @change="${this._handleFilePicked}"></label>`} `}},{kind:"method",key:"_openFilePicker",value:function(){this._input?.click()}},{kind:"method",key:"_handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer?.files&&(0,n.r)(this,"file-picked",{files:this.multiple||1===e.dataTransfer.files.length?Array.from(e.dataTransfer.files):[e.dataTransfer.files[0]]}),this._drag=!1}},{kind:"method",key:"_handleDragStart",value:function(e){e.preventDefault(),e.stopPropagation(),this._drag=!0}},{kind:"method",key:"_handleDragEnd",value:function(e){e.preventDefault(),e.stopPropagation(),this._drag=!1}},{kind:"method",key:"_handleFilePicked",value:function(e){0!==e.target.files.length&&(this.value=e.target.files,(0,n.r)(this,"file-picked",{files:e.target.files}))}},{kind:"method",key:"_clearValue",value:function(e){e.preventDefault(),this._input.value="",this.value=void 0,(0,n.r)(this,"change")}},{kind:"get",static:!0,key:"styles",value:function(){return l.AH`:host{display:block;height:240px}:host([disabled]){pointer-events:none;color:var(--disabled-text-color)}.container{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;border:solid 1px var(--mdc-text-field-idle-line-color,rgba(0,0,0,.42));border-radius:var(--mdc-shape-small,4px);height:100%}label.container{border:dashed 1px var(--mdc-text-field-idle-line-color,rgba(0,0,0,.42));cursor:pointer}:host([disabled]) .container{border-color:var(--disabled-color)}label.dragged{border-color:var(--primary-color)}.dragged:before{position:absolute;top:0;right:0;bottom:0;left:0;background-color:var(--primary-color);content:"";opacity:var(--dark-divider-opacity);pointer-events:none;border-radius:var(--mdc-shape-small,4px)}label.value{cursor:default}label.value.multiple{justify-content:unset;overflow:auto}.highlight{color:var(--primary-color)}.row{display:flex;width:100%;align-items:center;justify-content:space-between;padding:0 16px;box-sizing:border-box}ha-button{margin-bottom:4px}.supports{color:var(--secondary-text-color);font-size:12px}:host([disabled]) .secondary{color:var(--disabled-text-color)}input.file{display:none}.value{cursor:pointer}.value ha-svg-icon{margin-right:8px;margin-inline-end:8px;margin-inline-start:initial}.big-icon{--mdc-icon-size:48px;margin-bottom:8px}ha-button{--mdc-button-outline-color:var(--primary-color);--mdc-icon-button-size:24px}mwc-linear-progress{width:100%;padding:16px;box-sizing:border-box}.header{font-weight:500}.progress{color:var(--secondary-text-color)}`}}]}}),l.WF)},98645:(e,i,t)=>{var a=t(36312),o=t(50289),l=t(29818),s=t(34897),r=t(55321),n=t(54867),d=t(6121);const c=()=>Promise.all([t.e(1060),t.e(963),t.e(9542),t.e(2438)]).then(t.bind(t,72438));t(77372),t(32885),t(58954);(0,a.A)([(0,l.EM)("ha-picture-upload")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"value",value:()=>null},{kind:"field",decorators:[(0,l.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"secondary",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"supports",value:void 0},{kind:"field",decorators:[(0,l.MZ)()],key:"currentImageAltText",value:void 0},{kind:"field",decorators:[(0,l.MZ)({type:Boolean})],key:"crop",value:()=>!1},{kind:"field",decorators:[(0,l.MZ)({attribute:!1})],key:"cropOptions",value:void 0},{kind:"field",decorators:[(0,l.MZ)({type:Boolean})],key:"original",value:()=>!1},{kind:"field",decorators:[(0,l.MZ)({type:Number})],key:"size",value:()=>512},{kind:"field",decorators:[(0,l.wk)()],key:"_uploading",value:()=>!1},{kind:"method",key:"render",value:function(){return this.value?o.qy`<div class="center-vertical"> <div class="value"> <img .src="${this.value}" alt="${this.currentImageAltText||this.hass.localize("ui.components.picture-upload.current_image_alt")}"> <div> <ha-button @click="${this._handleChangeClick}" .label="${this.hass.localize("ui.components.picture-upload.change_picture")}"> </ha-button> </div> </div> </div>`:o.qy` <ha-file-upload .hass="${this.hass}" .icon="${"M18 15V18H15V20H18V23H20V20H23V18H20V15H18M13.3 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V13.3C20.4 13.1 19.7 13 19 13C17.9 13 16.8 13.3 15.9 13.9L14.5 12L11 16.5L8.5 13.5L5 18H13.1C13 18.3 13 18.7 13 19C13 19.7 13.1 20.4 13.3 21Z"}" .label="${this.label||this.hass.localize("ui.components.picture-upload.label")}" .secondary="${this.secondary}" .supports="${this.supports||this.hass.localize("ui.components.picture-upload.supported_formats")}" .uploading="${this._uploading}" @file-picked="${this._handleFilePicked}" @change="${this._handleFileCleared}" accept="image/png, image/jpeg, image/gif"></ha-file-upload> `}},{kind:"method",key:"_handleChangeClick",value:function(){this.value=null,(0,s.r)(this,"change")}},{kind:"method",key:"_handleFilePicked",value:async function(e){const i=e.detail.files[0];this.crop?this._cropFile(i):this._uploadFile(i)}},{kind:"method",key:"_handleFileCleared",value:async function(){this.value=null}},{kind:"method",key:"_cropFile",value:async function(e){var i,t;["image/png","image/jpeg","image/gif"].includes(e.type)?(i=this,t={file:e,options:this.cropOptions||{round:!1,aspectRatio:NaN},croppedCallback:e=>{this._uploadFile(e)}},(0,s.r)(i,"show-dialog",{dialogTag:"image-cropper-dialog",dialogImport:c,dialogParams:t})):(0,d.K$)(this,{text:this.hass.localize("ui.components.picture-upload.unsupported_format")})}},{kind:"method",key:"_uploadFile",value:async function(e){if(["image/png","image/jpeg","image/gif"].includes(e.type)){this._uploading=!0;try{const i=await(0,n.mF)(this.hass,e);this.value=(0,n.Q0)(i.id,this.size,this.original),(0,s.r)(this,"change")}catch(e){(0,d.K$)(this,{text:e.toString()})}finally{this._uploading=!1}}else(0,d.K$)(this,{text:this.hass.localize("ui.components.picture-upload.unsupported_format")})}},{kind:"get",static:!0,key:"styles",value:function(){return[r.RF,o.AH`:host{display:block;height:240px}ha-file-upload{height:100%}.center-vertical{display:flex;align-items:center;height:100%}.value{width:100%;display:flex;flex-direction:column;align-items:center}img{max-width:100%;max-height:200px;margin-bottom:4px;border-radius:var(--file-upload-image-border-radius)}`]}}]}}),o.WF)},51513:(e,i,t)=>{var a=t(36312),o=t(16792),l=t(60130),s=t(50289),r=t(29818);(0,a.A)([(0,r.EM)("ha-radio")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[l.R,s.AH`:host{--mdc-theme-secondary:var(--primary-color)}`]}]}}),o.F)},55337:(e,i,t)=>{t.r(i),t.d(i,{HaImageSelector:()=>d});var a=t(36312),o=t(68689),l=t(50289),s=t(29818),r=t(34897),n=(t(4169),t(97822),t(90431),t(98645),t(51513),t(54867));let d=(0,a.A)([(0,s.EM)("ha-selector-image")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"name",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"selector",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"required",value:()=>!0},{kind:"field",decorators:[(0,s.wk)()],key:"showUpload",value:()=>!1},{kind:"method",key:"firstUpdated",value:function(e){(0,o.A)(t,"firstUpdated",this,3)([e]),this.value&&!this.value.startsWith(n.fO)||(this.showUpload=!0)}},{kind:"method",key:"render",value:function(){return l.qy` <div> <label> ${this.hass.localize("ui.components.selectors.image.select_image_with_label",{label:this.label||this.hass.localize("ui.components.selectors.image.image")})} <ha-formfield .label="${this.hass.localize("ui.components.selectors.image.upload")}"> <ha-radio name="mode" value="upload" .checked="${this.showUpload}" @change="${this._radioGroupPicked}"></ha-radio> </ha-formfield> <ha-formfield .label="${this.hass.localize("ui.components.selectors.image.url")}"> <ha-radio name="mode" value="url" .checked="${!this.showUpload}" @change="${this._radioGroupPicked}"></ha-radio> </ha-formfield> </label> ${this.showUpload?l.qy` <ha-picture-upload .hass="${this.hass}" .value="${this.value?.startsWith(n.fO)?this.value:null}" .original="${this.selector.image?.original}" .cropOptions="${this.selector.image?.crop}" @change="${this._pictureChanged}"></ha-picture-upload> `:l.qy` <ha-textfield .name="${this.name}" .value="${this.value||""}" .placeholder="${this.placeholder||""}" .helper="${this.helper}" helperPersistent .disabled="${this.disabled}" @input="${this._handleChange}" .label="${this.label||""}" .required="${this.required}"></ha-textfield> `} </div> `}},{kind:"method",key:"_radioGroupPicked",value:function(e){this.showUpload="upload"===e.target.value}},{kind:"method",key:"_pictureChanged",value:function(e){const i=e.target.value;(0,r.r)(this,"value-changed",{value:i??void 0})}},{kind:"method",key:"_handleChange",value:function(e){let i=e.target.value;this.value!==i&&(""!==i||this.required||(i=void 0),(0,r.r)(this,"value-changed",{value:i}))}},{kind:"get",static:!0,key:"styles",value:function(){return l.AH`:host{display:block;position:relative}div{display:flex;flex-direction:column}label{display:flex;flex-direction:column}ha-textarea,ha-textfield{width:100%}`}}]}}),l.WF)},97822:(e,i,t)=>{var a=t(36312),o=t(68689),l=t(17314),s=t(67449),r=t(25983),n=t(50289),d=t(29818);(0,a.A)([(0,d.EM)("ha-textarea")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"field",decorators:[(0,d.MZ)({type:Boolean,reflect:!0})],key:"autogrow",value:()=>!1},{kind:"method",key:"updated",value:function(e){(0,o.A)(t,"updated",this,3)([e]),this.autogrow&&e.has("value")&&(this.mdcRoot.dataset.value=this.value+'=​"')}},{kind:"field",static:!0,key:"styles",value:()=>[s.R,r.R,n.AH`:host([autogrow]) .mdc-text-field{position:relative;min-height:74px;min-width:178px;max-height:200px}:host([autogrow]) .mdc-text-field:after{content:attr(data-value);margin-top:23px;margin-bottom:9px;line-height:1.5rem;min-height:42px;padding:0px 32px 0 16px;letter-spacing:var(
          --mdc-typography-subtitle1-letter-spacing,
          .009375em
        );visibility:hidden;white-space:pre-wrap}:host([autogrow]) .mdc-text-field__input{position:absolute;height:calc(100% - 32px)}:host([autogrow]) .mdc-text-field.mdc-text-field--no-label:after{margin-top:16px;margin-bottom:16px}.mdc-floating-label{inset-inline-start:16px!important;inset-inline-end:initial!important;transform-origin:var(--float-start) top}`]}]}}),l.u)},54867:(e,i,t)=>{t.d(i,{Q0:()=>o,fO:()=>a,mF:()=>l});const a="/api/image/serve/",o=(e,i,t=!1)=>{if(!t&&!i)throw new Error("Size must be provided if original is false");return t?`/api/image/serve/${e}/original`:`/api/image/serve/${e}/${i}x${i}`},l=async(e,i)=>{const t=new FormData;t.append("file",i);const a=await e.fetchWithAuth("/api/image/upload",{method:"POST",body:t});if(413===a.status)throw new Error(`Uploaded image is too large (${i.name})`);if(200!==a.status)throw new Error("Unknown error");return a.json()}},88441:(e,i,t)=>{t.d(i,{A:()=>a});const a=(e=0,i=2)=>{if(0===e)return"0 Bytes";i=i<0?0:i;const t=Math.floor(Math.log(e)/Math.log(1024));return`${parseFloat((e/1024**t).toFixed(i))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`}}};
//# sourceMappingURL=5337.YCI_wer4OZ0.js.map
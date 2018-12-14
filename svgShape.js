define("svgShape",["lodash","utils","santa-components","coreUtils","componentsCore","skins","coreUtilsLib"],function(e,t,o,i,s,n,r){return function(e){var t={};function o(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(i,s,function(t){return e[t]}.bind(null,s));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1704)}({0:function(t,o){t.exports=e},1:function(e,o){e.exports=t},1704:function(e,t,o){var i,s;i=[o(1705),o(526),o(1706),o(6),o(527),o(1707),o(1708)],void 0===(s=function(e,t,o,i,s){"use strict";return i.skinsMap.addBatch(s),{popupCloseIconButton:e,svgShape:t,vectorImage:o}}.apply(t,i))||(e.exports=s)},1705:function(e,t,o){var i,s;i=[o(2),o(0),o(526),o(4)],void 0===(s=function(e,t,o,i){"use strict";var s=t.cloneDeep(o);return s.propTypes=t.defaults({closePopupPage:e.santaTypesDefinitions.popupPage.close},o.propTypes),s.displayName="PopupCloseIconButton",s.getSkinProperties=function(){var e=o.getSkinProperties.apply(this,arguments);return e[""].onClick=function(){this.props.closePopupPage()}.bind(this),e[""].style.cursor="pointer",e[""].role="button",e[""].onKeyDown=i.utils.accessibility.keyboardInteractions.activateBySpaceOrEnterButton,e[""].tabIndex="0",e[""].title="Back to site",e[""]["aria-label"]="Back to site",e},s}.apply(t,i))||(e.exports=s)},1706:function(e,t,o){var i,s;function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}i=[o(2),o(0),o(4)],void 0===(s=function(e,t,o){"use strict";return{displayName:"VectorImage",mixins:[o.mixins.skinBasedComp],propTypes:{id:e.santaTypesDefinitions.Component.id,styleId:e.santaTypesDefinitions.Component.styleId,style:e.santaTypesDefinitions.Component.style,svgId:e.santaTypesDefinitions.VectorImage.svgId,link:e.santaTypesDefinitions.VectorImage.link,compProp:e.santaTypesDefinitions.Component.compProp,theme:e.santaTypesDefinitions.Component.theme,svgString:e.santaTypesDefinitions.VectorImage.svgString,svgInfo:e.santaTypesDefinitions.VectorImage.svgInfo,svgType:e.santaTypesDefinitions.VectorImage.svgType,overrideColorsAsCss:e.santaTypesDefinitions.VectorImage.overrideColorsAsCss,shapeStyle:e.santaTypesDefinitions.VectorImage.shapeStyle,preserveViewBox:e.santaTypesDefinitions.VectorImage.preserveViewBox,shouldScaleStroke:e.santaTypesDefinitions.VectorImage.shouldScaleStroke},getSvgContent:function(e){var t;return{style:this.props.shapeStyle,className:this.classSet((t={},n(t,this.props.id,!0),n(t,"non-scaling-stroke",!this.props.shouldScaleStroke),t)),key:this.props.compProp.displayMode+(e?"_stroke":"_nostroke"),dangerouslySetInnerHTML:{__html:this.props.svgString}}},getSkinProperties:function(){var o,i,s,n,r,a=void 0,p=t.get(this.props.shapeStyle,"strokeWidth"),l=t.get(this.props.svgInfo,"viewBox",""),c={"":{"data-svg-id":this.props.svgId,"data-svg-type":this.props.svgType,"data-display-mode":this.props.compProp.displayMode,"data-strokewidth":p,"data-viewbox":l,"data-preserve-viewbox":this.props.preserveViewBox?"preserve":"ignore",style:this.props.style},link:(o=this.props.link,i=void 0,t.isEmpty(o)?i={parentConst:e.utils.createReactElement.bind(null,"div")}:(i=o).style={cursor:"pointer"},i),svg:this.getSvgContent(p)};if(!t.isEmpty(this.props.overrideColorsAsCss)){var u=(s=this.props.overrideColorsAsCss,n=this.props.styleId,r=this.props.id,t.reduce(s,function(e,t){return e+" ."+n+"_"+r+" "+t},""));a=e.utils.createReactElement("style",{dangerouslySetInnerHTML:{__html:u}}),c[""].addChildren=[a]}return c}}}.apply(t,i))||(e.exports=s)},1707:function(e,t,o){var i,s;i=[o(4),o(0),o(1),o(18)],void 0===(s=function(e,t,o,i){"use strict";function s(e,i,s){return t(s).without("skins.viewer.svgshape.SvgShapeDefaultSkin").map(t.partial(o.svg.createSvgFetchRequest,e,i,t)).compact().value()}function n(e,t){return s(e.serviceTopology.mediaRootUrl,e,t.skins)}return e.dataRequirementsCheckerRegistrar.registerCheckerForCompType("wysiwyg.viewer.components.svgshape.SvgShape",n),e.dataRequirementsCheckerRegistrar.registerCheckerForCompType("wysiwyg.viewer.components.PopupCloseIconButton",n),{requirementChecker:s,DEFAULT_SHAPE:i.svgUtils.EMPTY_SHAPE,SVG_ROOT:i.svgUtils.SVG_ROOT}}.apply(t,i))||(e.exports=s)},1708:function(e,t,o){var i,s;i=[o(0),o(4),o(1)],void 0===(s=function(e,t,o){"use strict";function i(t,i){return e.compact([o.svg.createSvgFetchRequest(t.serviceTopology.mediaRootUrl,t,e.get(i,["data","svgId"],e.get(i,["style","style","properties","svgId"])))])}return t.dataRequirementsCheckerRegistrar.registerCheckerForCompType("wysiwyg.viewer.components.VectorImage",i),{checkRequirements:i}}.apply(t,i))||(e.exports=s)},18:function(e,t){e.exports=r},2:function(e,t){e.exports=o},3:function(e,t){e.exports=i},4:function(e,t){e.exports=s},526:function(e,t,o){var i,s;i=[o(0),o(2),o(3),o(527)],void 0===(s=function(e,t,o,i){"use strict";var s=t.utils.skinsRenderer,n=function(t,o){var n,r,a,p=o.getStyleData,l=o.themeData,c=o.siteZoomRatio,u=o.invertedZoomRatio,f=o.orientationZoomFix,g=o.mobileZoom,d=o.scriptsLocationMap,v=p(t),y={siteZoomRatio:c,invertedZoomRatio:u,orientationZoomFix:f,mobileZoom:g},m={scriptsLocationMap:d},h=e.get(v,"style.properties",{}),k=i["skins.viewer.svgshape.SvgShapeDefaultSkin"],S={css:k.css,params:k.params,paramsDefaults:k.paramsDefaults};return n={},r=t,a=s.createSkinCss(S,h,l,t,y,m,function(e){return i[e]}),r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n},r={getStyleData:t.santaTypesDefinitions.Component.getStyleData,themeData:t.santaTypesDefinitions.Theme.THEME_DATA,siteZoomRatio:t.santaTypesDefinitions.Mobile.siteZoomRatio,invertedZoomRatio:t.santaTypesDefinitions.Mobile.invertedZoomRatio,orientationZoomFix:t.santaTypesDefinitions.Mobile.orientationZoomFix,mobileZoom:t.santaTypesDefinitions.Mobile.mobileZoom,scriptsLocationMap:t.santaTypesDefinitions.ServiceTopology.scriptsLocationMap};return n.cssTypes=r,{displayName:"SvgShape",mixins:[t.mixins.baseCompMixin],statics:{getCompCss:n},propTypes:{id:t.santaTypesDefinitions.Component.id,structure:t.santaTypesDefinitions.Component.structure,skin:t.santaTypesDefinitions.Component.skin,compData:t.santaTypesDefinitions.Component.compData.isRequired,compProp:t.santaTypesDefinitions.Component.compProp.isRequired,rootNavigationInfo:t.santaTypesDefinitions.Component.rootNavigationInfo,svgString:t.santaTypesDefinitions.VectorImage.legacySvgString.isRequired,svgInfo:t.santaTypesDefinitions.VectorImage.legacySvgInfo.isRequired,styleId:t.santaTypesDefinitions.Component.styleId,linkRenderInfo:t.santaTypesDefinitions.Link.renderInfo,setCustomClickOccurred:t.santaTypesDefinitions.setCustomClickOccurred,strokeWidth:t.santaTypesDefinitions.VectorImage.strokeWidth,isQAMode:t.santaTypesDefinitions.isQAMode,renderFixedPosition:t.santaTypesDefinitions.Component.renderFixedPosition},getSkinProperties:function(){var t=this.props.skin,i={"":{}},s=function(e,t){return"skins.viewer.svgshape.SvgShapeDefaultSkin"===t?'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376.654 376.654"><g><polygon points="298.185,264.061 149.092,352.082 0,264.061 0,88.021 149.092,0 298.185,88.021 "/></g></svg>':e||null}(this.props.svgString,t);if(s){var n=this.props.compData;if(n&&n.link){var r=o.linkRenderer.renderLink(n.link,this.props.linkRenderInfo,this.props.rootNavigationInfo);r.tabIndex="-1",s=function(t,o){var i="";return e.forOwn(o,function(e,t){i+=" "+t+'="'+e+'"'}),"<a"+i+">"+t+"</a>"}(s,r)}i[""]={"data-viewbox":this.props.svgInfo.viewBox,"data-strokewidth":this.props.strokeWidth,"data-svg-id":this.props.skin,"data-display-mode":this.props.compProp.maintainAspectRatio?"legacyFit":"stretch",key:!this.props.compProp.maintainAspectRatio&&this.props.strokeWidth?"stretchWithStroke":"noPoly",dangerouslySetInnerHTML:{__html:s||""},tabIndex:"0",role:"image",onKeyDown:function(t){if("Enter"===t.key||" "===t.key){var o=t.target.querySelector("a");e.invoke(o,"click")}}}}return this.updateRootRefDataStyles(i[""]),i},render:function(){var e=this.getSkinProperties();return s.renderSkinHTML(null,e,this.props.styleId,this.props.id,this.props.structure,this.props,this.state,this.props.isQAMode)}}}.apply(t,i))||(e.exports=s)},527:function(e,t,o){var i;void 0===(i=function(){"use strict";var e={"skins.viewer.svgshape.SvgShapeDefaultSkin":{react:[],params:{fillcolor:"COLOR","alpha-fillcolor":"ALPHA",stroke:"BORDER_COLOR_ALPHA",strokewidth:"BORDER_SIZE"},paramsDefaults:{fillcolor:"color_11","alpha-fillcolor":"1",stroke:"color_15",strokewidth:"1px"},css:{"% svg":"width:100%;height:100%;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;fill:[fillcolor];fill-opacity:[alpha-fillcolor];stroke:[stroke];stroke-width:[strokewidth];","% svg *":"vector-effect:non-scaling-stroke;","% a":"display:block;height:100%;"}},"skins.viewer.VectorImageShapeBasicSkin":{react:[["div","svg",[],{}],["a","link",[],{}]],params:{fillcolor:"BG_COLOR_ALPHA"},paramsDefaults:{fillcolor:"color_18"},css:{"% svg":"width:100%;height:100%;fill:[fillcolor];","% svg *":"vector-effect:non-scaling-stroke;"}},"skins.viewer.VectorImageSkin":{react:[["a","link",[],{},["div","svg",[],{}]]],css:{"%link,%svg":"position:absolute;top:0;right:0;bottom:0;left:0;","% svg":"position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;","%_non-scaling-stroke *":"vector-effect:non-scaling-stroke;"}}};return e}.apply(t,[]))||(e.exports=i)},6:function(e,t){e.exports=n}})});
//# sourceMappingURL=svgShape.min.js.map
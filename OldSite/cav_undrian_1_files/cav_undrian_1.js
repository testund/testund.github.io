// Created by iWeb 3.0.4 local-build-20121008

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="406" height="557" style="height: 557px; left: 294px; position: absolute; top: -21px; width: 406px; z-index: 1; "><param name="src" value="Media/unfoldingchair.mov" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="406" height="557" style="height: 557px; left: 294px; position: absolute; top: -21px; width: 406px; z-index: 1; "><param name="src" value="cav_undrian_1_files/unfoldingchair-1.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/unfoldingchair.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="406" height="557" data="Media/unfoldingchair.mov" style="height: 557px; left: 294px; position: absolute; top: -21px; width: 406px; z-index: 1; "><param name="src" value="Media/unfoldingchair.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('cav_undrian_1_files/cav_undrian_1Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}

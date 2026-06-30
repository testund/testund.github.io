// Created by iWeb 3.0.4 local-build-20121008

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="640" height="496" style="height: 480px; left: 180px; position: absolute; top: 32px; width: 640px; z-index: 1; "><param name="src" value="Media/patch%2010.mov" /><param name="controller" value="false" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="640" height="496" style="height: 480px; left: 180px; position: absolute; top: 32px; width: 640px; z-index: 1; "><param name="src" value="surf_patch_10_files/patch%2010-1.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/patch%2010.mov"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="640" height="496" data="Media/patch%2010.mov" style="height: 480px; left: 180px; position: absolute; top: 32px; width: 640px; z-index: 1; "><param name="src" value="Media/patch%2010.mov"/><param name="controller" value="false"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('surf_patch_10_files/surf_patch_10Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}

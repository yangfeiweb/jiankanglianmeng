
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"index{padding-bottom:",[0,1],"}\n.",[1],"uni-card{box-shadow:none}\n.",[1],"uni-list:after,.",[1],"uni-list:before{height:0}\n",],undefined,{path:"./pages/tabBar/myCenter/myCenter.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/tabBar/myCenter/myCenter.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      
if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const c=e=>a(e,n),f={module:{uri:n},exports:r,require:c};s[n]=Promise.all(d.map((e=>f[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-723ef4d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"b82f342e8a4c83cf77a3024483b61986"},{url:"archive/index.html",revision:"0b11a63aa25cd99e5e12ae8a5ffe6ca5"},{url:"assets/app.xX1tia84.js",revision:"6ce4567f8688d15afd6ccf7d022abf48"},{url:"assets/archive_index.md.rT7U9Ga0.js",revision:"44b93035cb22ab466237598e39d7c805"},{url:"assets/archive_index.md.rT7U9Ga0.lean.js",revision:"6fb5cea55d62d6b3d553770cc41d3824"},{url:"assets/backend_index.md.BQD_JR5K.js",revision:"224ac9520831bb66d72f524637e05438"},{url:"assets/backend_index.md.BQD_JR5K.lean.js",revision:"224ac9520831bb66d72f524637e05438"},{url:"assets/backend_koa_start.md.8nMWd6-F.js",revision:"d25acbb0603e10b8ddab5a73b5710db5"},{url:"assets/backend_koa_start.md.8nMWd6-F.lean.js",revision:"d25acbb0603e10b8ddab5a73b5710db5"},{url:"assets/backend_koa_use.md.dUk_9Bj1.js",revision:"0373350ef4fdf0833c952fdceb62d819"},{url:"assets/backend_koa_use.md.dUk_9Bj1.lean.js",revision:"0825b07f6093cb13fd31a8b98d0f3b44"},{url:"assets/backend_mysql_install.md.hZtsQ0BH.js",revision:"be532b287672210577cae3f606e2ab16"},{url:"assets/backend_mysql_install.md.hZtsQ0BH.lean.js",revision:"9fc6e5ca8799c7b5af92e7455e8cbe7d"},{url:"assets/backend_node_env.md.-xXlRHoE.js",revision:"fcb0a843ad9b7ab93d3b1952db708c5a"},{url:"assets/backend_node_env.md.-xXlRHoE.lean.js",revision:"fcb0a843ad9b7ab93d3b1952db708c5a"},{url:"assets/backend_node_process.md.cHcwDqW9.js",revision:"47336eab66946cd4ecaf6c53dbb98440"},{url:"assets/backend_node_process.md.cHcwDqW9.lean.js",revision:"47336eab66946cd4ecaf6c53dbb98440"},{url:"assets/backend_redis_install.md.e-aqwsjK.js",revision:"dd037ecf05e9d9505ae6db20f7db3084"},{url:"assets/backend_redis_install.md.e-aqwsjK.lean.js",revision:"3a849243537c34d5f6d7f18f0a6ee66f"},{url:"assets/backend_sqlite_recursion.md.MAi6ni_a.js",revision:"eb450e379ff031ae0fc5b6ed8d77dcd0"},{url:"assets/backend_sqlite_recursion.md.MAi6ni_a.lean.js",revision:"f160d034af36b8419b41e021a25c992d"},{url:"assets/chunks/base-80a1f760.4ViGjK9y.js",revision:null},{url:"assets/chunks/consoleHook-cdbe54ab.IN9-8GxC.js",revision:null},{url:"assets/chunks/DocShici.FxSX84Bc.js",revision:"98065c207276f0fa8c7b401fbad5b804"},{url:"assets/chunks/DocTag.T5w2B_VP.js",revision:"be5250c1793592449986b2fa23ba1336"},{url:"assets/chunks/framework.tCCUWFfl.js",revision:"a6f290a4ca079da03610769e8f277a5d"},{url:"assets/chunks/ImageLazyLoad.ArHE3Kmn.js",revision:"de03b63dbbd2c0df6d807f033e698cc0"},{url:"assets/chunks/index-292de3b8.RqzyprHz.js",revision:null},{url:"assets/chunks/index.TfNovbkC.js",revision:"bf1bc09976ca14f9e846b1d10b1a440c"},{url:"assets/chunks/index.UHfW0IC3.js",revision:"0fd10081503038345f7270818dac4a05"},{url:"assets/chunks/SvgIcon.F85Do-h3.js",revision:"34dcc549e880e9e30ae6ef40f1b54e5a"},{url:"assets/chunks/theme.Y5t6WcGy.js",revision:"a6b24e310fc0783904d94d98e57e6d14"},{url:"assets/chunks/VPAlgoliaSearchBox.3EUyzp3t.js",revision:"e2406b3b90c41cee850d76a987167024"},{url:"assets/chunks/WordCloud.kMLya_k-.js",revision:"ffbc9a6d615b13a02a74146d50d9b2d1"},{url:"assets/cli_git_cli.md.I3tWX_cH.js",revision:"3d798be92d0ec585b8e56c480aa75c2f"},{url:"assets/cli_git_cli.md.I3tWX_cH.lean.js",revision:"b2f40cfa01a68c31a9c661bc7b252205"},{url:"assets/cli_git_commitlint.md.-YmgSlw4.js",revision:"35b6046e0aac28ca821b153d4684be47"},{url:"assets/cli_git_commitlint.md.-YmgSlw4.lean.js",revision:"5b6edab4c6aa60d10beafb233f8ae606"},{url:"assets/cli_git_FAQ.md.aYCHJmlS.js",revision:"91043f38b09b176915b50a956b3362c1"},{url:"assets/cli_git_FAQ.md.aYCHJmlS.lean.js",revision:"54eabb078d9172cdd501781ae35681db"},{url:"assets/cli_git_hub.md.L41muiDX.js",revision:"7c3c1f8651560fa415e75d3f44107e23"},{url:"assets/cli_git_hub.md.L41muiDX.lean.js",revision:"57045db7fa47f04f019b7283832c49d5"},{url:"assets/cli_git_use.md.tlrUMin1.js",revision:"b5f2a4358fe3dde105ef56c1d974aa87"},{url:"assets/cli_git_use.md.tlrUMin1.lean.js",revision:"36078b5bfe7f52f48a28b64ab1c9128b"},{url:"assets/cli_index.md.tGr373tV.js",revision:"f8d3209bbc9c23827b47ddfa8bfb7c71"},{url:"assets/cli_index.md.tGr373tV.lean.js",revision:"f8d3209bbc9c23827b47ddfa8bfb7c71"},{url:"assets/cli_linux_cli.md.UBSGQcZc.js",revision:"c055acf7b4e73d2447f3db46621ecbd0"},{url:"assets/cli_linux_cli.md.UBSGQcZc.lean.js",revision:"d5c3fc770bc93309b6f459b6def1ef53"},{url:"assets/cli_linux_use.md.wb_Zbk3H.js",revision:"5f61761927ef58a2038746f9b57f6d6b"},{url:"assets/cli_linux_use.md.wb_Zbk3H.lean.js",revision:"bc510cf5a14714890e9baabb8ce9b101"},{url:"assets/cli_windows_cli.md.tWFzUhtx.js",revision:"e79155bf47f8e00f5bfe8dc1af49a80d"},{url:"assets/cli_windows_cli.md.tWFzUhtx.lean.js",revision:"00ed88aa13bc91428adb733384fb630b"},{url:"assets/cli_windows_FAQ.md.eUUfM98-.js",revision:"13238057131d7137c7fed6ca44a2a56b"},{url:"assets/cli_windows_FAQ.md.eUUfM98-.lean.js",revision:"57a96796079eed771b5474fa6bb89fdf"},{url:"assets/custom_img_1.hpB34BBw.png",revision:"0b090877b62d48ea052d5f001009036e"},{url:"assets/custom_img_10.ABjAENUX.png",revision:"c7d26bd1365e8bb51708cd196a763a4d"},{url:"assets/custom_img_2.jeW0FK_S.png",revision:"22ba122fc09b8a73a7534471eddd9181"},{url:"assets/custom_img_3.WVcC0W0S.png",revision:"27b99357b2fa986e3c2030f86c22571d"},{url:"assets/custom_img_4.miw9dwRv.png",revision:"5c5a2ed68e2d667c157048ad838929c2"},{url:"assets/custom_img_5.dpJp7a-v.png",revision:"3abe9553a5b37d3b6f651d2fbff35762"},{url:"assets/custom_img_6.6MebOUCL.png",revision:"070655de3c78aba308c8dd6d83fa773d"},{url:"assets/custom_img_7.9d3V64WJ.png",revision:"44ce702a9b3d5e2a9d8cf7e4b2043eef"},{url:"assets/custom_img_8.2fU1YXkY.png",revision:"522ed91f1aa752f21dff291f61d54184"},{url:"assets/custom_img_9.KPHymHz8.png",revision:"32765d4364fcf8367fdc93870d1bf613"},{url:"assets/download_img_1.GqKM4-en.png",revision:"4e99ff47674f1f06f9efb9280051af92"},{url:"assets/download_img_2.bq_1gjbC.png",revision:"307179c019409f3630e240dfa569bcd0"},{url:"assets/download_img.o4oSc4ka.png",revision:"ce995db6fdacaf921de99e78428f1b8c"},{url:"assets/frontend_browser_basics.md.tN3IYdrF.js",revision:"77744c85602ed914f1b10863ed49273e"},{url:"assets/frontend_browser_basics.md.tN3IYdrF.lean.js",revision:"11468067716211e30ffb172174d29d56"},{url:"assets/frontend_browser_cache.md.t4EcnkHe.js",revision:"d8cbd43a4dd63c6a70b6d45ba71ce53b"},{url:"assets/frontend_browser_cache.md.t4EcnkHe.lean.js",revision:"937655332e3c3da2d52a57a3d0125a31"},{url:"assets/frontend_browser_storage.md.MfeiK4yD.js",revision:"bed84ee616c5c82048e0c7f0d5070473"},{url:"assets/frontend_browser_storage.md.MfeiK4yD.lean.js",revision:"f0f31ced071fdb7a4fc5a87f98378a23"},{url:"assets/frontend_build_monorepo_quickstart.md.kPiDAdac.js",revision:"e391b0fefe9438d53a5801754283cd30"},{url:"assets/frontend_build_monorepo_quickstart.md.kPiDAdac.lean.js",revision:"8a313d041594e02246a06935a60e2e78"},{url:"assets/frontend_build_monorepo_turborepo.md.s4r6Htkd.js",revision:"a4ff9c419d77c2dd50a760f8ff7c7e7c"},{url:"assets/frontend_build_monorepo_turborepo.md.s4r6Htkd.lean.js",revision:"9bd0119ed5132304c006a3a814a797da"},{url:"assets/frontend_build_rollup_lib-js.md.-Upb-_xW.js",revision:"28be3c3b9f391ab8d57c3bf6b2c1bd44"},{url:"assets/frontend_build_rollup_lib-js.md.-Upb-_xW.lean.js",revision:"01da64b5e4ba88e8915387f97e9733cc"},{url:"assets/frontend_build_rollup_lib-ts.md.G3Sw3rH_.js",revision:"3e1ca26d227db29fb9c507af42549c3f"},{url:"assets/frontend_build_rollup_lib-ts.md.G3Sw3rH_.lean.js",revision:"00329846e3e0ee35eb6a171c638058a1"},{url:"assets/frontend_build_rollup_quickstart.md.oybgQJt8.js",revision:"26401bbffa421099d0432d67864d8424"},{url:"assets/frontend_build_rollup_quickstart.md.oybgQJt8.lean.js",revision:"2fc5e45c5b164e8d0f78ca45a61862c6"},{url:"assets/frontend_build_vite_ts.md.he84XPgt.js",revision:"da1d615ae20764f22dbb1cb09eb409d6"},{url:"assets/frontend_build_vite_ts.md.he84XPgt.lean.js",revision:"567314a7998bb726c4b72192ff8b0034"},{url:"assets/frontend_build_webpack_FAQ.md.ZaK8OFq6.js",revision:"c1f293569c6d17eb03f9b9f34f0b70bf"},{url:"assets/frontend_build_webpack_FAQ.md.ZaK8OFq6.lean.js",revision:"be70fbe5d53cdccc3ef9ef018784c7ad"},{url:"assets/frontend_build_webpack_lib-icon.md.519m7xAm.js",revision:"6653fe6a173904fb8e26ecdc41739953"},{url:"assets/frontend_build_webpack_lib-icon.md.519m7xAm.lean.js",revision:"07a420deaa7a7653cc45e9d32ed50257"},{url:"assets/frontend_code_debounce-throttle.md.78LT3CSy.js",revision:"3b88ee1f8535452e257ab6142c65b035"},{url:"assets/frontend_code_debounce-throttle.md.78LT3CSy.lean.js",revision:"8b100584ff0e3d8624adb62e61634a16"},{url:"assets/frontend_code_excel-json.md.XMzAbuyG.js",revision:"4bd0d95ebfc353e80d19274318c16e28"},{url:"assets/frontend_code_excel-json.md.XMzAbuyG.lean.js",revision:"93cc9d29f16c04f37dfe3a2aece382b5"},{url:"assets/frontend_code_image-lazy.md.Faz40gtm.js",revision:"777d8bdc2fb8c02122f828881e3b6fc4"},{url:"assets/frontend_code_image-lazy.md.Faz40gtm.lean.js",revision:"490ffb0efe38ffa58d0769c8f2b207a4"},{url:"assets/frontend_code_list-tree.md.N9zIrtrd.js",revision:"995c27c1086b117b748ba1c6262d5800"},{url:"assets/frontend_code_list-tree.md.N9zIrtrd.lean.js",revision:"7d2a7033e70fc5664e65267f8f6715a7"},{url:"assets/frontend_code_others.md.yeZtsfbF.js",revision:"5409bbb185019cb769f269c3f854b303"},{url:"assets/frontend_code_others.md.yeZtsfbF.lean.js",revision:"630d2e7f81866176795a663bcaed9b86"},{url:"assets/frontend_code_pretter.md.nRyTUsXY.js",revision:"190e8bd6d3d7e84fc9f07b68ebaf166d"},{url:"assets/frontend_code_pretter.md.nRyTUsXY.lean.js",revision:"a0150046e829826a37976ff53083aff2"},{url:"assets/frontend_css_selector.md.CSAjgXIf.js",revision:"302bbde2fdf8c2017dcd8055eff3ef03"},{url:"assets/frontend_css_selector.md.CSAjgXIf.lean.js",revision:"78715beffdb01f3c2df135145114be34"},{url:"assets/frontend_css_weight.md.NHxP3LIB.js",revision:"f875892d9662977917bf224fb763ad67"},{url:"assets/frontend_css_weight.md.NHxP3LIB.lean.js",revision:"e5f6ecf1eb4f1caee79f5a875ec23f8e"},{url:"assets/frontend_html_index.md.EZXGVfhf.js",revision:"f58c8e6717df37d26e2c1660621c579c"},{url:"assets/frontend_html_index.md.EZXGVfhf.lean.js",revision:"62779a8377f70e5b2e21e7ea3e4199f0"},{url:"assets/frontend_html_og.md.lTMT0uVx.js",revision:"7ca5aba21fcf648cff850b11090c6e17"},{url:"assets/frontend_html_og.md.lTMT0uVx.lean.js",revision:"09dba57d5a01dcd6bb3d5db90f459e31"},{url:"assets/frontend_index.md.XyP_1umE.js",revision:"1539a326c7a27009597492cc3c1d32cd"},{url:"assets/frontend_index.md.XyP_1umE.lean.js",revision:"5744663ce7e4fd1fb9721fbc4b5c7a4d"},{url:"assets/frontend_javascript_ajax.md.MCzyRgMn.js",revision:"aed9a1ae29680c5068680a010f24f7aa"},{url:"assets/frontend_javascript_ajax.md.MCzyRgMn.lean.js",revision:"b71be738975a630235836075fbc315db"},{url:"assets/frontend_javascript_array.md.-i_5Td7f.js",revision:"437f307928fc9f2fc840505bf2806921"},{url:"assets/frontend_javascript_array.md.-i_5Td7f.lean.js",revision:"3d0a3ee55faca1fb2af1939ed1f029ae"},{url:"assets/frontend_javascript_binary.md.y6UnN8XY.js",revision:"d741ffbb8b5b29c6d645c02fa1f0045a"},{url:"assets/frontend_javascript_binary.md.y6UnN8XY.lean.js",revision:"070c66654e24705d4a30a217f5468569"},{url:"assets/frontend_javascript_BOMObserver.md.o4itF5b3.js",revision:"8304070b2d37eb8d006e12b9ec9f202b"},{url:"assets/frontend_javascript_BOMObserver.md.o4itF5b3.lean.js",revision:"edcdb65f3cfedc15599444abab878ae0"},{url:"assets/frontend_javascript_CallStack.md.52Dp3iLc.js",revision:"c4de646e6c6b3e502cbb77a1db204296"},{url:"assets/frontend_javascript_CallStack.md.52Dp3iLc.lean.js",revision:"c6dd92fb0d23b424b70d813693d14a1f"},{url:"assets/frontend_javascript_dictionary.md.EG5gHlK9.js",revision:"efa9cddfbcd005fa5b4c6a1a3e706507"},{url:"assets/frontend_javascript_dictionary.md.EG5gHlK9.lean.js",revision:"efa9cddfbcd005fa5b4c6a1a3e706507"},{url:"assets/frontend_javascript_ElementPosition.md.Os9vE9Ba.js",revision:"54b714b6107ee4f3251ab6eb1dad022d"},{url:"assets/frontend_javascript_ElementPosition.md.Os9vE9Ba.lean.js",revision:"8bc45061ffa5eea397bdd514722b0dc7"},{url:"assets/frontend_javascript_ES6_.md.qVfUcCK8.js",revision:"73f08341b79fe21fdb50f06dd346f549"},{url:"assets/frontend_javascript_ES6_.md.qVfUcCK8.lean.js",revision:"c65bf6320973665fe7183adc296c67fd"},{url:"assets/frontend_javascript_EventLoop.md.JH6YNBMA.js",revision:"3f3144e1721ce18d8214e3289429c57d"},{url:"assets/frontend_javascript_EventLoop.md.JH6YNBMA.lean.js",revision:"04fd542defaf49ad912bb7c8a9ed13dd"},{url:"assets/frontend_javascript_fetch.md.fvaGY1FY.js",revision:"a3bee95b6dcf982a0e0d6f2a409165de"},{url:"assets/frontend_javascript_fetch.md.fvaGY1FY.lean.js",revision:"b2870141847e86e8c5f37c0d389f1c74"},{url:"assets/frontend_javascript_object.md.wEujHTgY.js",revision:"65fd559e4994ba52d084a05436d3c81a"},{url:"assets/frontend_javascript_object.md.wEujHTgY.lean.js",revision:"d2f9cccda316fddfaae3b6cbedab7156"},{url:"assets/frontend_javascript_promise.md.OwAbDFUo.js",revision:"8eacf1fbb7cc70fbd0e8d91a33137628"},{url:"assets/frontend_javascript_promise.md.OwAbDFUo.lean.js",revision:"5ecb31d03b1fd23449b508a0c8a36ea0"},{url:"assets/frontend_javascript_prototype.md.B_ZsUhgH.js",revision:"391f7a2229a34e802df76d0e66cc44a6"},{url:"assets/frontend_javascript_prototype.md.B_ZsUhgH.lean.js",revision:"0cc0e66b4c48d4808ad347675491b976"},{url:"assets/frontend_javascript_scope.md.TZQpcNsL.js",revision:"304af43e39a6c5bfe7f147c00db317ea"},{url:"assets/frontend_javascript_scope.md.TZQpcNsL.lean.js",revision:"9b991a0e36afb86b05f4ba97a5efe3eb"},{url:"assets/frontend_javascript_string.md.AvJoenub.js",revision:"7daee47b408f86ed60c086bba4bb68cb"},{url:"assets/frontend_javascript_string.md.AvJoenub.lean.js",revision:"13130c6b18bf94b349ecc55ddd38928b"},{url:"assets/frontend_network_cors.md._PAUgQFu.js",revision:"d8e48bd8c893306b6a7994642fd0f2fd"},{url:"assets/frontend_network_cors.md._PAUgQFu.lean.js",revision:"d179aea41d1f14289ca24ab1d1c0e177"},{url:"assets/frontend_network_encryption.md.ijBxaNLR.js",revision:"9961574e1a3d6a7842c62bd86e3d0c01"},{url:"assets/frontend_network_encryption.md.ijBxaNLR.lean.js",revision:"6130c14ab4ceb42c87d13e55d1aa511d"},{url:"assets/frontend_network_http.md.f2V_6mJh.js",revision:"1702d570cc0e35e7a55ef3e5a30ebecd"},{url:"assets/frontend_network_http.md.f2V_6mJh.lean.js",revision:"318e3b1fb869dede671b51828a5494a2"},{url:"assets/frontend_network_KeepAlive.md.fMNgyLxd.js",revision:"9fbe3f210997f1781c43462b38930455"},{url:"assets/frontend_network_KeepAlive.md.fMNgyLxd.lean.js",revision:"acbb96634315d3ecb22c55cadffc3185"},{url:"assets/frontend_network_request.md.7ZUrhGnK.js",revision:"da834019726ec148c473ded2dba39269"},{url:"assets/frontend_network_request.md.7ZUrhGnK.lean.js",revision:"be91c5b4b734d64e44a7bf37f26fec0e"},{url:"assets/frontend_network_security.md.Dc6LaeA9.js",revision:"c163b93f12a911ecdeb70e74791a2df8"},{url:"assets/frontend_network_security.md.Dc6LaeA9.lean.js",revision:"94ec8db37df4946a0e424b5148284590"},{url:"assets/frontend_network_tcp.md.418Jzifg.js",revision:"98f99c5e7c4083f65ec7419e03475563"},{url:"assets/frontend_network_tcp.md.418Jzifg.lean.js",revision:"6a9e8eddbfb9d832ff09f3d73dcc9958"},{url:"assets/frontend_npm_changesets.md.mJirAf08.js",revision:"dc277eb42b5a1625fa4e0a15c44c7ecc"},{url:"assets/frontend_npm_changesets.md.mJirAf08.lean.js",revision:"7d54548f89b20dbad7e76890d9caba54"},{url:"assets/frontend_npm_cli.md.WxP1k2Kc.js",revision:"075c422af65f200fa2cd699dba24d8cb"},{url:"assets/frontend_npm_cli.md.WxP1k2Kc.lean.js",revision:"075c422af65f200fa2cd699dba24d8cb"},{url:"assets/frontend_npm_FAQ.md.B4qEamX5.js",revision:"5958403414e3942882fdb8ae637ae66c"},{url:"assets/frontend_npm_FAQ.md.B4qEamX5.lean.js",revision:"e90493a1ec11c6770bb6bdb7197b4e67"},{url:"assets/frontend_npm_libs.md.xsUNzEYW.js",revision:"e16946a1c6e160acb43e8145e316a5ac"},{url:"assets/frontend_npm_libs.md.xsUNzEYW.lean.js",revision:"e16946a1c6e160acb43e8145e316a5ac"},{url:"assets/frontend_npm_license.md.-6QepD5d.js",revision:"36c8703ceab359c8e9b2d475eaaab404"},{url:"assets/frontend_npm_license.md.-6QepD5d.lean.js",revision:"c22669bb503f296c07104f17e4088ca9"},{url:"assets/frontend_npm_package-exports.md.802U2_yy.js",revision:"c6f52258d36fd2b67dfaec72ecf2ddc5"},{url:"assets/frontend_npm_package-exports.md.802U2_yy.lean.js",revision:"1032783d910418760cd3f30826ea769d"},{url:"assets/frontend_npm_package-json.md.qKStNktM.js",revision:"d97bed2ff9a9d115a5dbab059699eefd"},{url:"assets/frontend_npm_package-json.md.qKStNktM.lean.js",revision:"d97bed2ff9a9d115a5dbab059699eefd"},{url:"assets/frontend_npm_package-manager.md.MC846mMK.js",revision:"17df04ca1d72e9aaf5191cca98253c5d"},{url:"assets/frontend_npm_package-manager.md.MC846mMK.lean.js",revision:"80b2e591604ccb78a991cef69bf838d2"},{url:"assets/frontend_npm_package-patch.md.GDLqpVMe.js",revision:"465294f4082c4a49ce27653ec7d60746"},{url:"assets/frontend_npm_package-patch.md.GDLqpVMe.lean.js",revision:"ca849262ec7e78c1e88f0e11f31410c5"},{url:"assets/frontend_npm_release-it.md.NGd9IPq5.js",revision:"738c6de98a1f17ddb46b6bd8d66833dc"},{url:"assets/frontend_npm_release-it.md.NGd9IPq5.lean.js",revision:"6528f146b240081215bad5785e766190"},{url:"assets/frontend_npm_SemVer.md.xNhoiJ5Y.js",revision:"c8ec814870292561497864c5f6a7fe00"},{url:"assets/frontend_npm_SemVer.md.xNhoiJ5Y.lean.js",revision:"0023b896c232ef953ef1c209cee39733"},{url:"assets/frontend_regex_basics.md.j7DfUeSS.js",revision:"d011d9bef9e02fda0bae35193cda0ff0"},{url:"assets/frontend_regex_basics.md.j7DfUeSS.lean.js",revision:"a9878b4d4d53debf9029937dc79b7ae3"},{url:"assets/frontend_regex_use.md.UMPa5s69.js",revision:"dfdf5dde2435d7b91d493c0e6acc2c20"},{url:"assets/frontend_regex_use.md.UMPa5s69.lean.js",revision:"dfdf5dde2435d7b91d493c0e6acc2c20"},{url:"assets/frontend_vue_vue2-components.md.Wdv8LTxJ.js",revision:"c9f1667a591bb82843494f5e8b5df245"},{url:"assets/frontend_vue_vue2-components.md.Wdv8LTxJ.lean.js",revision:"84d973b859f5ab4fc991c24ec7561e95"},{url:"assets/img_1.4nC5hvSv.png",revision:"a71b0e4481d44c3f37c5947b08892eb6"},{url:"assets/img_1.kttBEduK.png",revision:"df62ecbbb2b5c6708ad5ecca07872ff4"},{url:"assets/img_1.QmyjIuf0.png",revision:"d03138f3c05d8340313bfc2b905d1413"},{url:"assets/img_1.Zdd447Qb.png",revision:"7ed81af443eb83c47ea388f9f6a0b017"},{url:"assets/img_10.TlAgjvLw.png",revision:"adc23b3cf73f19c43e99a6c33d97add7"},{url:"assets/img_2.bimNqkhu.png",revision:"15bb15cf891e0da900566f97f9f38bc2"},{url:"assets/img_2.mCeclxqc.png",revision:"79d546d5be24eab7ace1ce43d20f9563"},{url:"assets/img_2.NPvB9USy.png",revision:"201fdf65fca8ba104658b1011b88ad41"},{url:"assets/img_3.0hyQYiON.png",revision:"947259a93f408036aa4a3f9ee4b336cf"},{url:"assets/img_3.tBzNxZc5.png",revision:"99f3954a18b0b0ff49b6d2146f2c754c"},{url:"assets/img_4.sr2wfCEW.png",revision:"4f8bcfd9823af1ac6587e1aa4c40036c"},{url:"assets/img_4.usiY7Pzq.png",revision:"9835a8dae319ccbd5ae54091f572427a"},{url:"assets/img_5.67P-Zwuv.png",revision:"90ddcf6808cd26ed980f0401472ced67"},{url:"assets/img_5.yP9564LT.png",revision:"c60a7cd2bda4fa0309d970c224a7ee99"},{url:"assets/img_6.9i7siWEZ.png",revision:"b93dec3891c5c3e63e06b2acae26da86"},{url:"assets/img_6.JvznFnYA.png",revision:"d33c2ea36c872a82d04c4d3697fa60c7"},{url:"assets/img_7.Ii_yyPFO.png",revision:"745aa6673dd2d79ef9785024d2faf372"},{url:"assets/img_7.keUm3mB8.png",revision:"6389b93ef42bbea412b579dd731c2405"},{url:"assets/img_8.PMPz5SYS.png",revision:"19cba4824a7fb4c37a51d70fba2109f5"},{url:"assets/img_9.i8hcMZPA.png",revision:"963e18470e92ecfde63070fa82f72904"},{url:"assets/img.e7KaUX_a.png",revision:"4a30cfb1c345f8381f8c2e466d4538be"},{url:"assets/img.nzBJLmr5.png",revision:"35954264542a39edd494619c2097d41f"},{url:"assets/img.uoWrLoDv.png",revision:"71183a0d9f6130c106d4f1437dffa02e"},{url:"assets/img.xw7fM1wx.png",revision:"e847cde86a8bb8d0a543a950e49255de"},{url:"assets/img.YGaDiVf1.png",revision:"553b6c3e1afbcb8f5aee2cc9cb20953c"},{url:"assets/img.Zk-qpbWJ.png",revision:"6590e7c8bc84dd58a2aa4d5194789fe6"},{url:"assets/index.md.Tm9fbwtn.js",revision:"a4a591e3ab2fe31c1d42f97dec35b623"},{url:"assets/index.md.Tm9fbwtn.lean.js",revision:"a4a591e3ab2fe31c1d42f97dec35b623"},{url:"assets/install_img_0.0FUp6aHn.png",revision:"1fd76e5d0821706e3dc31a6fcfa02381"},{url:"assets/install_img_1.eav2zyPE.png",revision:"0779adb9a2acbf8b9aaef639fc5cdb7f"},{url:"assets/install_img_10.TbyQOTHi.png",revision:"c2013f63a4b63dad446c70f6483d4210"},{url:"assets/install_img_11.kNx6GWSA.png",revision:"1449c5d30997a3c703346cdd5e549539"},{url:"assets/install_img_12.holWaaEl.png",revision:"6c98de5cf94f7f1254f5ba437a704220"},{url:"assets/install_img_13.2_cUogBS.png",revision:"0b19c24e4e8462748f9af9191f4610ba"},{url:"assets/install_img_14.zRbrhCnh.png",revision:"d789b2ec9ca5ffb993640f7eb376b0c7"},{url:"assets/install_img_15.aHgSlEYs.png",revision:"7b936ef46108020fabf13c7023c8b252"},{url:"assets/install_img_16._k5QzOIW.png",revision:"eccabe48896ab2b0dc4bde9bc3a81f8a"},{url:"assets/install_img_17.IY8GTEDV.png",revision:"193a7f6a59b6282fdeef5bbea64ef306"},{url:"assets/install_img_18.ZrGEzpbv.png",revision:"90b75d7e44c1093c464f4d50de7e0227"},{url:"assets/install_img_19.u72MLxTc.png",revision:"49cf32b35b8642b55f6753f4707bbd5e"},{url:"assets/install_img_2.6e8lAtRd.png",revision:"d1df15cc6e44f9d34e1d233853f4b2bb"},{url:"assets/install_img_20.8SzA3HRX.png",revision:"df7786b1881fd5392b7f98ac6bed1b07"},{url:"assets/install_img_3.BfiW_iQE.png",revision:"f9db9f6321b00765f645b9061c67fe1e"},{url:"assets/install_img_4.u5HK4USv.png",revision:"dba1cb76403bb7b747774e3a8018ad6f"},{url:"assets/install_img_5.SJ8bZELJ.png",revision:"491f55392a7e151cb807f91309694de8"},{url:"assets/install_img_6.2AiTcLk1.png",revision:"3ac853aabb1fc07b295fca7526a9c939"},{url:"assets/install_img_7.o6vdkyUC.png",revision:"fdee137d9c99408d92c0bb206ece023e"},{url:"assets/install_img_8.3m1kR5K_.png",revision:"311d8d6e761d181538853aefdfa83fce"},{url:"assets/install_img_9.LHZ2R1pU.png",revision:"b55bff41ea618ad20a8d07730daebf69"},{url:"assets/install_img.EvuOlW2Q.png",revision:"e5a215034b31c32f08bd015272955093"},{url:"assets/inter-italic-cyrillic-ext.OVycGSDq.woff2",revision:"c34a4b273af8d28811f6c40141e64ce4"},{url:"assets/inter-italic-cyrillic.-nLMcIwj.woff2",revision:"1fcb37c55573855157fabd546d56f9df"},{url:"assets/inter-italic-greek-ext.hznxWNZO.woff2",revision:"4f0e339be115b8fefc6df107b4c6ea5a"},{url:"assets/inter-italic-greek.PSfer2Kc.woff2",revision:"929d4ea5f4d362cd34c1d389c0ff7ecc"},{url:"assets/inter-italic-latin-ext.RnFly65-.woff2",revision:"97f0862694a5a8489491ee93004813b4"},{url:"assets/inter-italic-latin.27E69YJn.woff2",revision:"f6f45d0dd1036d6b2dbcb03a0bb9469e"},{url:"assets/inter-italic-vietnamese.xzQHe1q1.woff2",revision:"6f7af14b73de1fbfa7d576382fd496f4"},{url:"assets/inter-roman-cyrillic-ext.8T9wMG5w.woff2",revision:"e2227fe65624f3bb8f581e7ef05d5038"},{url:"assets/inter-roman-cyrillic.jIZ9REo5.woff2",revision:"27e63f02d75f8c136f2f671fcc484c0f"},{url:"assets/inter-roman-greek-ext.9JiNzaSO.woff2",revision:"da7d4bd2834134dde92b2b36b7e61dde"},{url:"assets/inter-roman-greek.Cb5wWeGA.woff2",revision:"8d9d2649d31d7082c3f7b108fa895356"},{url:"assets/inter-roman-latin-ext.GZWE-KO4.woff2",revision:"35c420b0366d7799db82cb6917fba106"},{url:"assets/inter-roman-latin.bvIUbFQP.woff2",revision:"f9223d91e9ebc494fad9e270fa475f0c"},{url:"assets/inter-roman-vietnamese.paY3CzEB.woff2",revision:"8a9ec3091d7f5c613d6893b2b36535c7"},{url:"assets/navigation_index.md.PRnL0COA.js",revision:"274d4f6468dcd39d60c99967479675b5"},{url:"assets/navigation_index.md.PRnL0COA.lean.js",revision:"274d4f6468dcd39d60c99967479675b5"},{url:"assets/npm_license_img.ZXnC0Ned.png",revision:"e96f843e2bc41716cb15e5faee467751"},{url:"assets/origin_index.md.VVvtpBab.js",revision:"e990fa96bceee489befa11c3e9355526"},{url:"assets/origin_index.md.VVvtpBab.lean.js",revision:"829c039f24dcb3096496c826df9a171a"},{url:"assets/style.6POalgXm.css",revision:"c53bd486d15ccc97feeac4fe41e28fa1"},{url:"backend/index.html",revision:"14733bb5adb14f1fc3a0b5e442a240fd"},{url:"backend/koa/start.html",revision:"fc22652d8712276afac2a87182dbe693"},{url:"backend/koa/use.html",revision:"3b279c4e682535db7bfece55ad3eccc3"},{url:"backend/mysql/install.html",revision:"4663662e8dd950a9333deb2f28444320"},{url:"backend/node/env.html",revision:"6be6ce1c09db44f36b8d70017e354098"},{url:"backend/node/process.html",revision:"ceb523f88f6dc3167cbe4ffa11a85d91"},{url:"backend/redis/install.html",revision:"a922cd748f8dfe920be245d62269ab2e"},{url:"backend/sqlite/recursion.html",revision:"44cb9c2e8ca26244bd14aee8c89854fc"},{url:"cli/git/cli.html",revision:"a70f5a92b258e59abd049246b5a168d5"},{url:"cli/git/commitlint.html",revision:"3cc0163e3cb05ca32c3691e484ce99dc"},{url:"cli/git/FAQ.html",revision:"9e8b5034ef24bc4ccf45f761be8d3426"},{url:"cli/git/hub.html",revision:"7ef61aa186a138074d8f4837b01a6add"},{url:"cli/git/use.html",revision:"b9b94a09e22c40ca0f7305dcca7acd04"},{url:"cli/index.html",revision:"28a7728f6ea164b9333129e60ea04fcb"},{url:"cli/linux/cli.html",revision:"20668c20f766805ccdc58108b8c8bcb3"},{url:"cli/linux/use.html",revision:"97e3650719597b2122c1373306870bd6"},{url:"cli/windows/cli.html",revision:"4b2dd7066b3bb5ea0d93179e841970b5"},{url:"cli/windows/FAQ.html",revision:"fed1aa568bda05944abb2230595ba001"},{url:"favicon.ico",revision:"710702509c00e4fe7442447e555df1ff"},{url:"frontend/browser/basics.html",revision:"84e85a6f43c961d2220a4b2273319001"},{url:"frontend/browser/cache.html",revision:"87651fd42d4da64b703c85e112877976"},{url:"frontend/browser/storage.html",revision:"dda1ed6f89401c59e7c3d7aba712b011"},{url:"frontend/build/monorepo/quickstart.html",revision:"7f2dde455d704b63cacae7ddf617a0b0"},{url:"frontend/build/monorepo/turborepo.html",revision:"22b954fbd953002b44a3e0e92457b78f"},{url:"frontend/build/rollup/lib-js.html",revision:"b0577e779ca7097a5f0fa2e0fcbb9b91"},{url:"frontend/build/rollup/lib-ts.html",revision:"77d38a23a7330cc11b5a5faa0aca5dcb"},{url:"frontend/build/rollup/quickstart.html",revision:"d92ef3007077d52dd4d3dd2427049c3a"},{url:"frontend/build/vite/ts.html",revision:"8fc7f620dda207e9ef89dc89de561213"},{url:"frontend/build/webpack/FAQ.html",revision:"b9745a6c2ae4ec8268aea2b07b047300"},{url:"frontend/build/webpack/lib-icon.html",revision:"57e1c366a9aa13b44d11e7e8a9bb94a2"},{url:"frontend/code/debounce-throttle.html",revision:"8ea56c857cc2ace488bc456924515981"},{url:"frontend/code/excel-json.html",revision:"a3daee43037aa00339543874b82a2bd6"},{url:"frontend/code/image-lazy.html",revision:"bf95766d23d2080dbc570954d9e07dce"},{url:"frontend/code/list-tree.html",revision:"bade862c4072be0064bf10b9e42c4b78"},{url:"frontend/code/others.html",revision:"d5c03c9cf8f890577bd5eb5be5a03691"},{url:"frontend/code/pretter.html",revision:"940c8f1870d73988e8661b4a1e8c0851"},{url:"frontend/css/selector.html",revision:"d4af0a415cad8efd3d585d93868f69e3"},{url:"frontend/css/weight.html",revision:"edbc1cc347cfc28384de918f4b83a11c"},{url:"frontend/html/index.html",revision:"7ced2baaa76ed03ae371207643fbd435"},{url:"frontend/html/og.html",revision:"5763ef5be67df6ac149e25d1ac8d11d2"},{url:"frontend/index.html",revision:"bf60cbd5c51305a316d5ec33651a2227"},{url:"frontend/javascript/ajax.html",revision:"ac33506857dbbb94d1e39850d575f9b0"},{url:"frontend/javascript/array.html",revision:"4c06b19cacfeea8ac2d22bbebf107af1"},{url:"frontend/javascript/binary.html",revision:"1a0dee9e43b2a0f84b9bcc1f4c6e4538"},{url:"frontend/javascript/BOMObserver.html",revision:"1a8f819bf557d6ede3ada30860a9ae5c"},{url:"frontend/javascript/CallStack.html",revision:"46580450e8a0b68c2440556651de108a"},{url:"frontend/javascript/dictionary.html",revision:"2429ad1b68e203386c082e9a6038ced4"},{url:"frontend/javascript/ElementPosition.html",revision:"fe6433c0cdd3a2b7b6b41fa4364bc464"},{url:"frontend/javascript/ES6+.html",revision:"aa58504c4b177490519b05a308843071"},{url:"frontend/javascript/EventLoop.html",revision:"89f265fa59cd12309a35fbbd189a9a34"},{url:"frontend/javascript/fetch.html",revision:"330a801ec97006ad826247ca2cf7ae1a"},{url:"frontend/javascript/object.html",revision:"116a7db277e353be37e543ddf92eeb9e"},{url:"frontend/javascript/promise.html",revision:"6ac8ba2c6d4bfcf2c88cedb569f25e00"},{url:"frontend/javascript/prototype.html",revision:"53e45fb3ce5b69d72f727a9598ad5d06"},{url:"frontend/javascript/scope.html",revision:"6bf7dcd5f3f9ce61134b38515625638d"},{url:"frontend/javascript/string.html",revision:"58cf807c29c85f8744536da32a50cf1f"},{url:"frontend/network/cors.html",revision:"eee0836f421dd7bc275af438c0836040"},{url:"frontend/network/encryption.html",revision:"5e61bd0b34ea74374f720519a15b7440"},{url:"frontend/network/http.html",revision:"e3ab1041e1f59650bbd6ca4c5e2cf44c"},{url:"frontend/network/KeepAlive.html",revision:"086625a5c7a1ae747c0f42cedbafcd78"},{url:"frontend/network/request.html",revision:"de03f2ae4dab2388fbfeb7417a249423"},{url:"frontend/network/security.html",revision:"d6062fde77005619ae77d5917a24cbbb"},{url:"frontend/network/tcp.html",revision:"fa26cf81d4cac22d439dc64b71f5943e"},{url:"frontend/npm/changesets.html",revision:"f2b11e7e24a9bdcc8e7e831567b03a4f"},{url:"frontend/npm/cli.html",revision:"317ac4517bd7b98f846bf659e85483d0"},{url:"frontend/npm/FAQ.html",revision:"1149b45bc074c8c477894cc63b881bee"},{url:"frontend/npm/libs.html",revision:"73810d80aa8456912ee6e3fd8d1cdef6"},{url:"frontend/npm/license.html",revision:"0661628cb9469dee7c718a6a74e42ce0"},{url:"frontend/npm/package-exports.html",revision:"8934604d62d3968b3c5e0c827848b545"},{url:"frontend/npm/package-json.html",revision:"e2bb670ebc1875628b79253cebfcb180"},{url:"frontend/npm/package-manager.html",revision:"28959bb1c4bfca342583c92402814b71"},{url:"frontend/npm/package-patch.html",revision:"1f378caa039b89f6127d4ece0c3b156f"},{url:"frontend/npm/release-it.html",revision:"450717449c2c700c3efa677b60033103"},{url:"frontend/npm/SemVer.html",revision:"467f2d75ce0ea18b0482c99fcc2770f4"},{url:"frontend/regex/basics.html",revision:"f6910ecb8aeefd040fad07f836beb729"},{url:"frontend/regex/use.html",revision:"cf5e0e9a7902e4afcb916dd552045d58"},{url:"frontend/vue/vue2-components.html",revision:"91a20b0e94879c2f938e56b9cdeaf2c0"},{url:"giscus/noborder_dark.css",revision:"0381017c9f23173fc52539b760cbc7b3"},{url:"giscus/noborder_light.css",revision:"1514a7d3868ce0bc5faae416baaf6a56"},{url:"icons/create.svg",revision:"4596b23f730edc20645b66213f234a9d"},{url:"icons/tags.svg",revision:"a89835a6d5f3d0f6314cb20684bfd01c"},{url:"icons/update.svg",revision:"13a037f2fbd6ef84d88997aa4cc27339"},{url:"icons/zodiac/dog.svg",revision:"7f255c221ebc536ae168bd061ce4fcd4"},{url:"icons/zodiac/dragon.svg",revision:"a6811eb3e6ac9f931f8510604b35990e"},{url:"icons/zodiac/goat.svg",revision:"8d7e96e3d87b51fc866a9706747051c0"},{url:"icons/zodiac/horse.svg",revision:"f0d014be2cf1f15ef06214b1eb480062"},{url:"icons/zodiac/monkey.svg",revision:"1160fea5b17cd96f5df29508bd455586"},{url:"icons/zodiac/ox.svg",revision:"e62223d23b89c74e26812692e78754e9"},{url:"icons/zodiac/pig.svg",revision:"ab2396b4707b864301dbd5eda5732b12"},{url:"icons/zodiac/rabbit.svg",revision:"3a89782cda47e40f4a7732ff9ba0553f"},{url:"icons/zodiac/rat.svg",revision:"45e7451cea0ef25237e19ff13fedc7e0"},{url:"icons/zodiac/rooster.svg",revision:"15d1a5484eea17d9ecf87df3841996f1"},{url:"icons/zodiac/snake.svg",revision:"abbce3bed7859d23b33c1c86517f01e2"},{url:"icons/zodiac/tiger.svg",revision:"5e9bb5ee0924f9b96b2a86e9b645bc55"},{url:"index.html",revision:"76721e0eb636617c70c9e353837e02e3"},{url:"live2d/core/live2dCubismCore.min.js",revision:"1ae0f80720323fd164deb9c2af05848a"},{url:"live2d/models/hijiki/hijiki.2048/texture_00.png",revision:"0cc2f2880ef801c9bdcdcfddcdddafb3"},{url:"live2d/models/tororo/tororo.2048/texture_00.png",revision:"ee9c6155217d874a3825b07dd672a029"},{url:"logo.default.svg",revision:"c13222dbc0049bf4be184901a9a20949"},{url:"logo.png",revision:"276008f0fc30e3c90ae57daf41766cbb"},{url:"logo.svg",revision:"ac82ac1a2751f04c23460d2c6861c6a4"},{url:"navigation/index.html",revision:"e46b9230a9f0340735d7303c039cd237"},{url:"origin/index.html",revision:"0923582d401a8ce61db20c7a331d0e98"},{url:"pwa-192x192.svg",revision:"b0229250796c6572bb422e21ef82e933"},{url:"pwa-512x512.svg",revision:"aa97e375b04bcd0f65f015503c2acbf3"},{url:"logo.svg",revision:"ac82ac1a2751f04c23460d2c6861c6a4"},{url:"manifest.webmanifest",revision:"0d11bc0f310f0a653f1b9314aaf82311"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({sameOrigin:e,url:s})=>e&&["images","icons","svg"].some((e=>s.pathname.startsWith(`/assets/${e}/`)))),new e.StaleWhileRevalidate({cacheName:"assets-images-cache",plugins:[new e.ExpirationPlugin({purgeOnQuotaError:!0,maxEntries:256,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/^https:\/\/peiyanlu.github.io\/.*/i,new e.StaleWhileRevalidate({cacheName:"gh-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/someInterface/i,new e.StaleWhileRevalidate({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.StaleWhileRevalidate({cacheName:"image-cache",plugins:[]}),"GET")}));

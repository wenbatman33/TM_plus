$(function () {
  // 音量range 使用jquery-ui
  $('input[type=range]').on('input', function(e){
  var min = e.target.min,
      max = e.target.max,
      val = e.target.value;
  $(e.target).css({
    'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'});
  }).trigger('input');

  //
  // //表情符號
  // $(".chatEmoji").on("click", function (e) {
  //   if ($(".chatFuncLayer_1").is(":hidden")) {
  //     $(".chatFuncLayer_1").show();
  //   } else {
  //     $(".chatFuncLayer_1").hide();
  //   }
  //   $(document).one("click", function () {
  //     $(".chatFuncLayer_1").hide();
  //   });
  //   e.stopPropagation();
  // });
  // //chat 訊息
  // $(".chatMessage").on("click", function (e) {
  //   if ($(".chatFuncLayer_2").is(":hidden")) {
  //     $(".chatFuncLayer_2").show();
  //   } else {
  //     $(".chatFuncLayer_2").hide();
  //   }
  //   $(document).one("click", function () {
  //     $(".chatFuncLayer_2").hide();
  //   });
  //   e.stopPropagation();
  // });
  // //chat 禁言
  // $(".chatMute").on("click", function (e) {
  //   if ($(".chatFuncLayer_3").is(":hidden")) {
  //     $(".chatFuncLayer_3").show();
  //   } else {
  //     $(".chatFuncLayer_3").hide();
  //   }
  //   $(document).one("click", function () {
  //     $(".chatFuncLayer_3").hide();
  //   });
  //   e.stopPropagation();
  // });

  //多層次選單  使用jQuery UI
  // $('.menu').menu();
  //resizable  使用jQuery UI
  $("#MemberList").resizable({
		handles: 's',
    minHeight: 60,
    grid: [10000, 1],
    resize: function(event, ui) {
      var TutorMeetLeftHeight = $("#TutorMeetLeft").height();
      var memberListHeight = $("#MemberList").height();
      var videoWrapHeight = 210;
      var chatWrapHeight = 20;
      var memberWrapMAXHeight = TutorMeetLeftHeight-(videoWrapHeight+chatWrapHeight+75);
      if (memberListHeight>260) {
        $( "#MemberList" ).resizable( "option", "maxHeight", memberWrapMAXHeight );
      }
    },
    stop: function(event, ui) {}
  });
});
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
var TMP = TMP || {};
TMP._log = function(params) {
	if(navigator.appVersion.indexOf("MSIE") > -1) {
		return;
	}
	console.log.apply(console, params);
}
TMP.clog = function(msg, style) {
	var str = "";
	var key;
	for(var i in style) {
		key = i.replace(/([A-Z])/g, function(v) {return "-" + v.toLowerCase()});
		str += key + ":" + style[i] + ";";
	}
	var params = ["%c%s", str, msg];
	var args = [];
	for(var i in arguments) {
		args.push(arguments[i]);
	}
	params = params.concat(args.slice(2));
	TMP._log(params);
};
TMP.clog(
  "   ★ TutorMeetPlus ★   ",
  {lineHeight: "16px",
  fontSize:"14px",
  backgroundColor: "#F94F4F",
  color: "#FFFFFF",
  fontFamily: "PingFangSC-Regular,Microsoft JhengHei"
});

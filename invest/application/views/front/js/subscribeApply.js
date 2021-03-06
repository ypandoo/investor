﻿// 导航下标
var naviInd = "1";
var proId = "-1";
var forceList = null;
var currProDetail = null;
var currscheDetail = null;
var forceObj = null;
var bankList = null;
var topLimitVal = 0;
var downLimitVal = 0;

$(function(){
	initParams();
	initListeners();
	initPages();
});

function initParams(){
	proId = getReqParam("proId");
}

function initListeners(){
	// initHeaderListeners();

	$("#agreeCK").click(function(){
		$("#projectInfo").toggle();
	});


	$("#downLoadProtocal").click(function(){
		$.ajax({
			type:'post',//可选get
			url:'../ProjectBasicController/subscribeProtocalList.action',
			dataType:'Json',//服务器返回的数据类型 可选XML ,Json jsonp script html text等
			cache:false,
			data:{'projectId':proId},
			success:function(msg){
				if(msg.success){
					if(msg.dataDto){
						showProtocalList(msg.dataDto);
					}
				}else{
					alert(msg.error);
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				sessionTimeout(XMLHttpRequest, textStatus, errorThrown);
			}
		});
		
	});

	$("#submitBtn").click(function(){
		submitFunc(false);
	});
	$("#remissionSumbitBtn").click(function(){
		submitFunc(true);
	});

	$("#subMoneyInp").blur(function(){
		if(isForcePerson()){
			if($("#leverSel").val() == "4"){
				$("#levMoneyInp").val($(this).val()*4);
			}else{
				$("#levMoneyInp").val("0");
			}
		}
	});
	$("#leverSel").change(function(){
		if($(this).val() == "0"){
			$("#levMoneyInp").val("0");
			topLimitVal = topLimitVal*5;
			downLimitVal = downLimitVal*5;
		}else{
			$("#levMoneyInp").val($("#subMoneyInp").val()*4);
			topLimitVal = topLimitVal/5;
			downLimitVal = downLimitVal/5;
		}
		$("#upLimitInp").text(formatMillions(topLimitVal));
		$("#downLimitInp").text(formatMillions(downLimitVal));
	});

	$("#addBonusBtn").click(function(){
		$(this).attr("href","personalInfo.jsp?projectId="+proId);
	})
}

function showProtocalList(protocalList){
	//整个页面的宽高
	var pageWidth=document.body.scrollWidth;
	var pageHeight=document.body.scrollHeight;
	//获取页面的可视区域高度和宽度
	var viewHeight=document.documentElement.clientHeight;
	var viewWidth=document.documentElement.clientWidth;
	
	var maskDiv = document.createElement("div");
	maskDiv.id = "maskLayer";
	maskDiv.style.height = viewHeight + "px";
	maskDiv.style.width = pageWidth + "px";
	document.body.appendChild(maskDiv);
	
	var addPage = document.createElement("div");
	addPage.id = "addPage";
	addPage.innerHTML = generatePage(protocalList);
	document.body.appendChild(addPage);
	//获取新增页面的宽高
	var addPageHeight = addPage.offsetHeight;
	var addPageWidth = addPage.offsetWidth;
	addPage.style.left = pageWidth/2 - addPageWidth/2 + "px";
	//addPage.style.top = viewHeight/2 - addPageHeight/2 + "px";
	addPage.style.top = "350px";

	$("#protocalListCloseBtn").click(function(){
		closeProtocalListPage();
	});
}

function closeProtocalListPage(){
	$("#addPage").remove();
	$("#maskLayer").remove();
}

function generatePage(protocalList){
	var result = "<div id='protocalListBody'>" +
					"<div id='protocalListTitle'>协议下载</div>" +
					"<div id='protocalListCloseBtn'>关闭</div>" +
					"<ul>" + 
						generateProtocalList(protocalList);
					"</ul>" + 
				"</div";
	return result;
}

function generateProtocalList(protocalList){
	var result = "";
	if(protocalList && protocalList.length > 0){
		for(var i = 0; i < protocalList.length; i++){
			result = result + "<li>" + 
								"<a href='files/" + protocalList[i] + "'>" + (i + 1 + "、 ") + protocalList[i] + "</a>" +
						"</li>";
		}
	}else{
		result = "<li><a href='files/201_0.doc'>1、 201委托投资协议书（修订稿）141216.doc</a></li>" +
				"<li><a href='files/202_0.doc'>2、 202接受投资委托情况说明书及确认书（修订稿）141216.doc</a></li>" +
				"<li><a href='files/203_0.doc'>3、 203杠杆借款协议（修订稿）141216.doc</a></li>";
	}
	
	return result;
}

function initPages(){
	getProDetai();
	getProScheme();
}

function getProDetai(){
	$.ajax({
		type:'post',//可选get
		url:'../ProjectBasicController/getProjectById.action?time=' + new Date().getTime(),
		dataType:'Json',//服务器返回的数据类型 可选XML ,Json jsonp script html text等
		cache:false,
		data:{'projectId':proId},
		success:function(msg){
			if(msg.success){
				if(msg.baseModel){
					currProDetail = msg.baseModel;
				}
			}else{
				alert(msg.error);
			}
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			sessionTimeout(XMLHttpRequest, textStatus, errorThrown);
		}
	});
}

function getProScheme(){
	$.ajax({
		type:'post',//可选get
		url:'../FollowSchemeController/getSchemeByProjectId.action?time=' + new Date().getTime(),
		dataType:'Json',//服务器返回的数据类型 可选XML ,Json jsonp script html text等
		cache:false,
		data:{'projectId':proId},
		success:function(msg){
			getForceData();
			getBankData();
			if(msg.success){
				if(msg.baseModel){
					currscheDetail = msg.baseModel;
				}
			}else{
				alert(msg.error);
			}
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
        	// sessionTimeout(XMLHttpRequest, textStatus, errorThrown);
        }
	});
}

function getForceData(){
	$.ajax({
		type:'post',//可选get
		url:'../ForceFollowController/getForceByProjectId.action?time=' + new Date().getTime(),
		dataType:'Json',//服务器返回的数据类型 可选XML ,Json jsonp script html text等
		cache:false,
		data:{'projectId':proId,'forceType':''},
		success:function(msg){
			if(msg.success){
				forceList = msg.dataDto;
				loadLimitData();
			}else{
				alert(msg.error);
			}
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
        	sessionTimeout(XMLHttpRequest, textStatus, errorThrown);
        }
	})
}

function loadLimitData(){
	$("#proNameTd").text(currProDetail.projectName);
	// $("#proCompayTd").val(currProDetail);
	if(isForcePerson()){
		topLimitVal = parseInt(forceObj.toplimit);
		downLimitVal = parseInt(forceObj.downlimit);
		$("#leverSelRow").show();
		$("#leverageRow").show();
	}else{
		topLimitVal = (currscheDetail.maxamount);
		downLimitVal = (currscheDetail.minamount);
		$("#leverSelRow").hide();
		$("#leverageRow").hide();
	}
	$("#upLimitInp").text(formatMillions(topLimitVal));
	$("#downLimitInp").text(formatMillions(downLimitVal));
}

function getBankData(argument) {
	$.ajax({
		type:'post',//可选get
		url:'../BankController/getBankListByUserId.action?time=' + new Date().getTime(),
		dataType:'Json',//服务器返回的数据类型 可选XML ,Json jsonp script html text等
		cache:false,
		data:{},
		success:function(msg){
			if(msg.success){
				bankList = msg.dataDto;
				loadBankData();
				userInfo = msg.baseModel;
				loadRemissionInfo(msg.baseModel);
			}else{
				alert(msg.error);
			}
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
        	sessionTimeout(XMLHttpRequest, textStatus, errorThrown);
        }
	})
}

function loadRemissionInfo(userInfo){
	if((userInfo.remissionCount - userInfo.usedRemissionCount) > 0){
		$("#remissionCountTr").css("display", "table-row");
		$("#remissionCountTr #remissionCount").val(userInfo.remissionCount - userInfo.usedRemissionCount);
		$("#remissionSumbitBtn").css("display","inline-block");
	}
}

function loadBankData(){
	var tempHtml = "";
	if(bankList && bankList.length >0){
		$("#bonusIdInp").empty();
		$.each(bankList, function(ind, val){
			tempHtml +=
				'<option value="'+val.bankId+'">'+val.bankNo+'</option>';
		});
		$("#bonusIdInp").html(tempHtml);
	}else{
		tempHtml = '<option value=""></option>';
		$("#bonusIdInp").html(tempHtml);
	}
}

function isForcePerson(){
	var bool = false;
	$.each(forceList, function(ind, val){
		if(val.remark == currAccountName){
			forceObj = val;
			bool = true;
		}
	});
	return bool;
}

function submitFunc (isRemissionSubscribe) {
	var _subMoney = parseInt($("#subMoneyInp").val())*10000;
	var _levMoney = parseInt($("#levMoneyInp").val())*10000;
	var _bonusId = $("#bonusIdInp").val();
	var _bankNo = $("#bonusIdInp").val();
	if(isRemissionSubscribe){
		if(!window.confirm("您的总的可用豁免次数为：" + (userInfo.remissionCount - userInfo.usedRemissionCount) +"，您确认使用吗？")){
			return false;
		}
	}else{
		if(isForcePerson()){
			if($("#leverSel").val() == "4"){
				if(_subMoney > topLimitVal){
					alert("总认购金额超过上限!");
					return false;
				}else if(_subMoney < downLimitVal){
					alert("总认购金额低于下限!");
					return false;
				}
			}else{
				if(_subMoney < downLimitVal){
					alert("总认购金额低于下限!");
					return false;
				}else if(_subMoney > topLimitVal){
					alert("总认购金额超过上限!");
					return false;
				}
			}
		}else{
			if(_subMoney > topLimitVal){
				alert("总认购金额超过上限!");
				return false;
			}else if(_subMoney < downLimitVal){
				alert("总认购金额低于下限!");
				return false;			
			}
		}
		if(!_bankNo){
			alert("请选择银行帐号!");
			return false;	
		}
		if(_subMoney%50000 != 0){
			alert("认购金额只能输入5万的倍数!");
			return false;
		}
	}

	$.ajax({
		type:'get',
		url:'../subscribe/subscribeReq.action',
		contentType: "application/json; charset=utf-8", 
		dataType:'Json',//服务器返回的数据类型 可选XML ,Json jsonp script html text等
		cache:false,
		data:{
			"uid":currUser,
			"projectId":proId,//"024ec88b-188b-4ada-a807-1f79454eeea3",
			"contributiveAmount":_subMoney,
			"leverageAmount":(_levMoney||0),
			"bankNo":_bankNo,
			"isRemissionSubscribe":isRemissionSubscribe
		},
		success:function(msg){
			alert("认购成功！");
			//location.href = "personalCenter.jsp";
			history.go(-1);
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
        	sessionTimeout(XMLHttpRequest, textStatus, errorThrown);
        }
	});
}
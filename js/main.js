$(function () {
	EnableSubmit = function(val)
	{
		var sbmt = document.getElementById("accept");

		if (val.checked == true)
		{
			sbmt.disabled = false;
		}
		else
		{
			sbmt.disabled = true;
		}
	} 

	let toggle = (btn, close, open) => {
		$(btn).click(function(){
			$(close).hide();
			$(open).show();
		})
	}

	toggle('.firstNext', '.firstLvl', '.secondLvl');
	toggle('.secondNext', '.secondLvl', '.thirdLvl');
	toggle('.thirdNext, .appleBtn', '.thirdLvl', '.finish');
	toggle('.secondback', '.secondLvl', '.firstLvl');
	toggle('.thirdback', '.thirdLvl', '.secondLvl');
	toggle('.finishback', '.finish', '.thirdLvl');

	$(".label").click(function () {
		$('.personInfo').empty();
		$('.label .personImgBlock').eq($(this).index()).clone().appendTo('.personInfo');
		$('.label .personName').eq($(this).index()).clone().appendTo('.personInfo');		
	});

	$(".moneyLabel").click(function () {
		$('.money').empty();	
		$('.moneyLabel .moneyQty').eq($(this).index()).clone().appendTo('.money');			
	});

})

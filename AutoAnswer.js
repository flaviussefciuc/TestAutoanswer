
	function AutoAnswer(){
		var nrOfRows=-1
		var isSingleGrid=0
		var ranSingleGrid
		var cntPerRow=1
		var isMultiGrid=0
		var ranMultipleGrid
		
		
		/////Varianta 2:

		if ($('.GridProgressive').size()>0)
		{
			var countRaspunsuri=0;
			var nrRaspunsuriDate=0;
			var raspunsAles;
			countRaspunsuri=$('.prog-the-answer-container').size()-1;	

			var myTimer;
			myTimer = setInterval(giveAnswer, 1000);

			function giveAnswer(){

				if ( $('.mrNext').prop( "disabled"))
				{					
						nrRaspunsuriDate=$('.prog-the-answer-container').size()-1;
						for (var j = 1; j <= nrRaspunsuriDate; j++) {	
							raspunsAles=Math.floor((Math.random() * countRaspunsuri) + 1);
							$('.prog-the-answer-container:eq('+raspunsAles+')').click();
						}
						$('div.prog-control.prog-control-next').click();		
				}
				else{
					// stop timer
					clearInterval(myTimer);	
					$('.mrNext').click();
				}
			}
		}else	
		{
			//Grid Single
			$("tr").each(function() { 
			  isSingleGrid=0;	  	
				$(this).find(".mrSingle").each(function() { 
				  isSingleGrid=isSingleGrid+1;
				});
			  //console.log(isSingleGrid);		
			  nrOfRows=nrOfRows+1;

			  ranSingleGrid=Math.floor((Math.random() * isSingleGrid) + 1);
					$(this).find(".mrSingle").each(function() { 
						  //console.log(cntPerRow+"-"+ranSingleGrid);
						  if (cntPerRow==ranSingleGrid ){
						  $(this).prop("checked",true);
						  }
						  cntPerRow=cntPerRow+1;
					});
			  cntPerRow=1;				  	    	  
			});  	

			//Grid Multi	
			$("tr").each(function() { 
				isMultiGrid=0;	  	
				$(this).find(".mrMultiple").each(function() { 
				  isMultiGrid=isMultiGrid+1;
				});
				//console.log(isMultiGrid);		
				nrOfRows=nrOfRows+1;
				$(this).find(".mrMultiple").each(function() { 						
						ranMultipleGrid=Math.floor((Math.random() * 100) + 1);	
						if (ranMultiple>30 ){
							$( this ).prop("checked",true);
						}
				});			  	    	  
			}); 
			
			var isSingle =0
			var isMultiple =0

			$(".mrSingle").each(function() { 
			  isSingle=isSingle+1;
			});

			$(".mrMultiple").each(function() { 
			  isMultiple=isMultiple+1;
			});

			var ranSingle
			var cnt=1
			var ranMultiple
			var idnameCat
			var idnameOther
			
			//single
			if (isSingle>0 && nrOfRows==-1) {

				
				ranSingle=Math.floor((Math.random() * isSingle) + 1);
				try{
				$(".mrSingle").each(function() { 
				  idname=$( this ).attr('id');
				  idnameOther=idname.replace("C","O");
				  if (cnt==ranSingle ){
					$( this ).prop("checked",true);
					if($("#" + idnameOther).length > 0) {
						//console.log("Other found="+idnameOther);
						$("#"+idnameOther).val('Other text');
					}
				  }
				  cnt=cnt+1;
				});  
				}catch(err){
					console.log(err.message);
				}
			}
			

			//multi
			if (isMultiple>0 && isMultiGrid>0) {
				try{
				$(".mrMultiple").each(function() { 
				  idname=$( this ).attr('id');
				  idnameOther=idname.replace("C","O");
				  
				  ranMultiple=Math.floor((Math.random() * 100) + 1);	
				  if (ranMultiple>49 ){
					$( this ).prop("checked",true);
					if($("#" + idnameOther).length > 0) {
						//console.log("Other found="+idnameOther);
						$("#"+idnameOther).val('Other text');
					}
				  }
				});
				}catch(err){
					console.log(err.message);
				}			
			}
		} 
		///de la grid progresive

		//// TEXT:
		$('textarea:last').html('bla bla');

		//// TEXT LOOP:

		$('.mrEdit').val('bla bla bla');
		
		setTimeout("document.getElementsByTagName('form')[0].submit()",1000);
	}

	//Pentru incarcat jquery:
	//var jq = document.createElement('script');
	//jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
	//document.getElementsByTagName('head')[0].appendChild(jq);
	// ... give time for script to load, then type.
	//jQuery.noConflict();
	
$(function() {
	var r= $('<input type="button" value="Auto Answer" onclick="AutoAnswer()"/>');
	$('#nav-controls').prepend(r);

});

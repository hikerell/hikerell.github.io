curId = '1';
function InitPage(){
	document.getElementById('tab'+curId).className = "selected";
	document.getElementById('cnt'+curId).className = "tabcnt";
}
function BindNavOnClick(){

}
function Change(id){
	if(curId==id){
		return;
	}
	document.getElementById('tab'+curId).className = "btn";
	document.getElementById('cnt'+curId).className = "tabhidecnt";
	curId=id;
	document.getElementById('tab'+id).className = "selected";
	document.getElementById('cnt'+id).className = "tabcnt";
}
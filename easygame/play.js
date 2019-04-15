var s=0,a=1240938231,mod=998244353,k=1,op="";
var history=new Array(20);
function set()
{
	for(let item of document.getElementsByClassName("T"))
	{
		item.innerText="第"+k+"题:";
	}
}
function choose(v)
{
	if(v==-1)
	{
		if(k==1)
			return;
		k--;
		s=history[k];
		op+="-";
		set();
		return;
	}
	k++;
	s=s*a+v;
	history[k]=s;
	while(s>=mod)
		s=Math.floor(s/mod)+s%mod;
	op+=v;
	if(k<=20)
	{
		set();
	}
	else
	{
		alert("你的操作序列:"+op);
		if(s==245710592)
			window.location.href="accept.html"; 
		else
			window.location.href="wrong.html";
	}
}

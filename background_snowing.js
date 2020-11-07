<script language="javascript">
<!--
var snow_size=new Array();
var snow_color=new Array();
var num=50;//雪花数量
var smallest=5;//雪花最小尺寸
var largest=30;//雪花最大尺寸
var dx=new Array();//雪花左右振动幅度大小
var xp=new Array();//水平位置
var yp=new Array();//垂直位置
var am=new Array();
var stx=new Array();//水平位移
var sty=new Array();//垂直位移
var doc_width;
var doc_height;
function makeSize(){//定义每个雪花尺寸
	return smallest+Math.random()*largest;
	}
function makeColor1(){//定义白色雪花
	for(i=0;i<num;++i){
	   snow_color[i]='#ffffff';
	  }
	}
function makeColor2(){//定义彩色雪花
	for(i=0;i<num;++i){
		A=Math.ceil(Math.random()*255);
		B=Math.ceil(Math.random()*255);
		C=Math.ceil(Math.random()*255);
		snow_color[i]='rgb('+A+','+B+','+C+')';
		}
	}
function init(){//初始化
	doc_width=document.body.clientWidth;
	doc_height=document.body.clientHeight;
	makeColor1();  //白色雪花
	//makeColor2();  //彩色雪花
	for(i=0;i<num;++i){
		dx[i]=0;
		xp[i]=Math.random()*(doc_width-40);
		yp[i]=Math.random()*doc_height;
		am[i]=Math.random()*20;
		snow_size[i]=makeSize();
		stx[i]=0.02+Math.random()/10;
		sty[i]=0.7+Math.random();
		document.write("<div id='snow_"+i+"' style='position:absolute;z-index:eval(30"+i+");visibility:visible;top:15px;left:15px;font-size:"+snow_size[i]+";color:"+snow_color[i]+"'>*</div>");
		}
	}
function snow(){
	for(i=0;i<num;++i){
		yp[i]+=sty[i];
		if(yp[i]>doc_height-50){//如果雪花到达底部
			xp[i]=Math.random()*(doc_width-am[i]-20);
			yp[i]=0;//垂直位置重置为0
			stx[i]=0.02+Math.random()/10;
		    sty[i]=0.7+Math.random();
			}
			dx[i]+=stx[i];
			document.getElementById("snow_"+i).style.top=yp[i];
			document.getElementById("snow_"+i).style.left=xp[i]+am[i]*Math.sin(dx[i]);
		}
	setTimeout("snow()",10);//间隔10毫秒调用一次snow函数
	}
//-->
</script>
<body id="myBody" bgcolor="#bbbbbb">
</body>
<script language="javascript">
<!--
init();
snow();
//-->
</script>

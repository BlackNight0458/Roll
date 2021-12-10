var add = document.getElementsByClassName('add')[0],
btn = document.getElementsByClassName('btn')[0],
remove = document.getElementsByClassName('remove')[0],
ul = document.getElementsByClassName('list')[0],
txt = document.getElementsByClassName('txt')[0],
roll = document.getElementsByClassName('roll')[0],
numb = document.getElementsByClassName('numb')[0],
oLi = document.getElementsByTagName('li'),
timer=setInterval(fun1,time),
num,ram,j,people,_num=0,time=1,_ram,t_ram,s_ram,f_ram,lock=true,pp=0,prize;
btn.addEventListener('click',clickHandler);
function removeClass(){
    for(var j = 0; j < oLi.length; j ++){
        oLi[j].className = '';
    }
}
function play(){
    setInterval(() => {
        pp=parseInt(oLi.length);
        numb.textContent = pp;
    }, 100);
}
function clickHandler(e){
    play();
    if(e.target==add){//判断e的target
        if(txt.value==''){
            alert('请添加内容');
        }else{
            var li = document.createElement('li');
            document.getElementsByClassName('list')[0].appendChild(li);
            li.textContent = txt.value;
            txt.value = '';
        }
    }
    for(var i = 0; i < oLi.length; i ++){
        oLi[i].index = i;
        oLi[i].onclick = function(i){
            removeClass();
            num = this.index;
            oLi[num].classList.add('delete');  
        }//获取li下标
    }
    if(e.target==remove){
        oLi[num].remove();
        num = '' ; 
        for(var i = 0; i < oLi.length; i ++){
            oLi[i].index = i;
            oLi[i].onclick = function(i){
                pp=parseInt(oLi.length)-1;
                
                removeClass();
                num = this.index;
                oLi[num].classList.add('delete');  
            }//获取li下标
        }
        numb.textContent = pp;
    } 
}
var fun1=function(){
    removeClass();
        oLi[_num].classList.add('tw');
        _num ++;
        if(_num>=oLi.length){
            _num=0;
        }     
}
roll.onclick = function(){
    if(lock){
        lock=false;
        people = oLi.length*1000;  
        _ram =(Math.floor(Math.random()*people + 1000));
        clearInterval(_timer);
        clearInterval(timer);
        // console.log(_ram);
        oLi = document.getElementsByTagName('li');
        time=10;
        ram = Math.floor(Math.random()* oLi.length  );
        var _timer = setInterval(() => {
            clearInterval(timer);
            if(time>=100){time=100}else{
                time+=5;
            }
            timer=setInterval(fun1,time);
            // console.log(time);
        }, 900);
        setTimeout(() => {
            lock = true;
            clearInterval(_timer);
            clearInterval(timer);
            for(var sum = 0; sum < oLi.length; sum ++){
                if(oLi[sum].className == 'tw'){
                prize = sum;
                }
            }
            oLi[prize].classList.add('prize');
            setTimeout(() => {
                alert('摇到'+"["+"     "+oLi[prize].textContent+"     "+"]"+'摇人结束!!!!');
            }, 100);
        },_ram+people);
        
    }else{
        alert('请等待上次摇人结束');
    }
}
    
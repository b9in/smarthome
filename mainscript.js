function buttonToggle(x)
{
    var target = document.querySelector(x);

    if(target.value==='off'){
        target.style.position="relative";
        target.style.top='2px';
        target.style.boxShadow='1px 1px 1px rgba(0,0,0,.3)';
        target.style.background='rgba(0, 0, 0, 0.1)';
        target.value='on';
    }
    else{
        target.value='off';
        target.style.background='rgba(255, 255, 255, 0.4)';
        target.style.boxShadow='3px 3px 3px rgba(0,0,0,.3)';
        target.style.top='0px';
    }

    control(x, target.value);
}

function control(id, order)
{
    switch (id) {
        case "#lampBtn":
            ajax.setFlag('rgb', {"state":order});
            break;
        case "#curtainBtn":

            break;
    }
}

$(document).ready(function(){
    document.querySelector(".option_btn").style.cssText = "display : none";

    function today_date(){
        let today = new Date();   

        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜

        document.getElementById('date_area').innerHTML=year+"."+month+"."+date;
    }
    today_date();

    // 그래프 접기 펼치기

    function opengraph(){
        document.querySelector(".content").style.cssText = "grid-template-rows: 300px 80px 300px 200px 80px 80px";
        document.querySelector("#dust").style.cssText = "grid-row: 4 / 5";
        document.querySelector("#lamp").style.cssText = "grid-row: 5 / 6";
        document.querySelector("#curtain").style.cssText = "grid-row: 6 / 7";
    }

    function closegraph(){
        document.querySelector(".content").style.cssText = "grid-template-rows: 300px 80px 200px 80px 80px";
        document.querySelector("#dust").style.cssText = "grid-row: 3 / 4";
        document.querySelector("#lamp").style.cssText = "grid-row: 4 / 5";
        document.querySelector("#curtain").style.cssText = "grid-row: 5 / 6";
    }

    const items = document.querySelectorAll('.gbtn');

    function openCloseAnswer() {
        if(this.id=='btn-1'){
            answerId = this.id.replace('btn-1', 'grp-1');
        }
        else if(this.id=='btn-2'){
            answerId = this.id.replace('btn-2', 'grp-1');
        }


        if(btn_1.value=="off" && btn_2.value =="off"){
            document.getElementById(answerId).style.display = 'none';
            closegraph();
        } 
        else if(btn_1.value=="on" || btn_2.value =="on"){
            document.getElementById(answerId).style.display = 'block';
            opengraph();
        }
    }
    items.forEach(item => item.addEventListener('click', openCloseAnswer));
    

    $("#colortext").keyup(function(){
        if(document.querySelector("#colortext").value==="")
        document.querySelector("#colortext").value="#"
    });

    // 무드등 색상버튼
    $("#lampBtn").click(function(){
        if(document.querySelector("#lampBtn").value=="on")
            document.querySelector(".option_btn").style.cssText = "display : block";
        else if(document.querySelector("#lampBtn").value=="off")
            document.querySelector(".option_btn").style.cssText = "display : none";
    });

    // 팝업창 열기
    $(".option_btn").click(function(){
        document.querySelector(".popup").style.cssText = "display : block";
    });

    // 팝업창 닫기
    $(".btn_close").click(function(){
        document.querySelector(".popup").style.cssText = "display : none";
    });


    var pallet = ["#FF0000", "#FF5E00", "#FFBB00", "#FFE400", "#ABF200", "#1DDB16", "#00D8FF", "#0054FF", "#0100FF", "#5F00FF", "#FF00DD", "#FF007F", "#000000", "#FFFFFF"];
    var tag = "";
    for(i=0; i<pallet.length; i++){
        tag += "<div id="+pallet[i]+" class='colorBox' onclick='colorSet(this)'></div>";
    }
    document.getElementById("palletBox").innerHTML = tag;


    var colorBox = document.getElementsByClassName("colorBox");
    for(i=0; i<colorBox.length; i++){
        colorBox[i].style.background = colorBox[i].id;
    }

    /* 색 변경버튼 */
    $("#submit_btn").click(function(){
        ajax.setFlag('rgb', {"color": document.getElementById('colortext').value.split("#")[1]});
    });
});


function colorSet(colorPick){
    document.querySelector("#colortext").value=colorPick.id;
}
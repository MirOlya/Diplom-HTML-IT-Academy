function openNav() {
    document.getElementById("mySidepanel").style.width = "150px";
    document.getElementById("mySidepanel").style.zIndex = 111;
    document.getElementById("top").visibility = none;
    }        
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    }

function swa(fTag,numTag){
    var b = document.getElementById('overlay_menu');
    b.style.visibility = 'visible';
    b.style.opacity = '1';
    b.style.transition = 'all 0.7s ease-out 0s';


    let parent = document.querySelector('#'+fTag+''+numTag);
    let children = parent.childNodes;
    var ch = 0;

    for (let i of children) {
        if (i.tagName === 'DIV') {
            let children1 = i.childNodes;
            for (let i1 of children1) {
                if (i1.tagName === 'SPAN') {
                    document.getElementById('_'+(++ch)+'_modal').textContent = i1.textContent;
                }
            }
        }
        else if (i.tagName === 'IMG') {
            var imgMenu = document.getElementById('BreakFast_Lunch_Dinner_food_pict_modal');
            imgMenu.src = i.src;
        }
    }

}
function swa2(){
    var b = document.getElementById('overlay_menu');
    b.style.visibility = 'hidden';
    b.style.opacity = '0';
}
function oops(){
    window.location.href = 'main404.html';
}

function swa_orders(fTag,numTag){
    var b = document.getElementById('overlay_order');
    b.style.visibility = 'visible';
    b.style.opacity = '1';
    b.style.transition = 'all 0.7s ease-out 0s';


    let parent = document.querySelector('#'+fTag+''+numTag);
    let children = parent.childNodes;
    var ch = 0;

    for (let i of children) {
        if (i.tagName === 'DIV') {
            let children1 = i.childNodes;
            for (let i1 of children1) {
                if (i1.tagName === 'SPAN') {
                    document.getElementById('_'+(++ch)+'_modal').textContent = i1.textContent;
                }
            }
        }
        else if (i.tagName === 'IMG') {
            var imgMenu = document.getElementById('BreakFast_Lunch_Dinner_food_pict_modal');
            imgMenu.src = i.src;
        }
    }

}
function swa2_orders(){
    var b = document.getElementById('overlay_order');
    b.style.visibility = 'hidden';
    b.style.opacity = '0';
}


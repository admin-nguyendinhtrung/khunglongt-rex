const dino = document.getElementById("dino")
const castus = document.getElementById("cactus")
let lastleft = 1;




  // lấy local từ máy
const highScore = document.getElementById("high_score");
let  hpoint = parseInt(window.localStorage.getItem('highScore') || '0')
   console.log(hpoint);
   highScore.innerHTML = "High Score: " + hpoint;
   let point = 0;


function jump() {
    if (dino.classList != "jump") {


        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump")
        }, 800);
    }
}


let isAlive = setInterval(function (){
    // kiểm tra vị trí của khủng long nhảy theo chiều Y
    let  dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // kiểm tra vị trí của cây theo trục X
    let cactusleft = parseInt(window.getComputedStyle(castus).getPropertyValue("left"));

    //chech diem
    // cactusLeft toa do hien tai cua cay
    //doan nay se check neu lan dau tien toa do am thi +1 diem
    if(cactusleft*lastleft < 0){
        point +=1;
        document.getElementById('h2d').innerHTML = "Point: " + point
    }


    // kiểm tra va chạm
    if(cactusleft < 50 && cactusleft > 0 && dinotop >= 140){
        if(point>hpoint){
            window.localStorage.setItem('highScore',point);
            hpoint=point;
            highScore.innerHTML= "High Score: " + hpoint
        }
        point = 0;
        document.getElementById('h2d').innerHTML = "Point: " + point;
        alert("Game Over!");
        return;
    }
    // tọa độ cây của lần check điểm trc
    lastleft=cactusleft;

},10)
document.addEventListener("keydown",function (event){
    jump()
})
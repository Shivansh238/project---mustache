nosex = "  ";
nosey = "  ";
function preload() {
    clown_nose = loadImage("https://t4.ftcdn.net/jpg/05/30/20/27/360_F_530202726_UzdVE1t3PJhqp3KopWGsMobSG2Nhv7Yw.jpg");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide(); 

    poseNet = ml5.poseNet(video , modelloaded);
    poseNet.on('pose' , gotPoses);
}

function draw(){
    image( video,0,0,300,300)
    fill(255,0,0);
    // stroke(255,0,0);
    // circle(nosex,nosey,20);
    image(clown_nose,nosex,nosey,60,30);
}

function take_snapshot() {
save("The filtered image.png");

}

function modelloaded() {
    console.log("PoseNet is loaded")
}

function gotPoses(results) {
    
    if(results.length > 0){
console.log(results);
console.log("nose x =" + results[0].pose.nose.x);
console.log("nose y =" + results[0].pose.nose.y);
nosex = results[0].pose.nose.x -20;
nosey = results[0].pose.nose.y -10;
    }
}
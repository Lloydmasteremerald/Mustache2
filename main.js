function preload()
{
  
}

function draw()
{
   image(video,0,0,350,350);
}

function setup()
{
    Canvas = createCanvas(350, 350)   
    Canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded()
{
   console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function take_snapshot()
{
     save("Jay.png");
}

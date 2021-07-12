Webcam.set({

    width: 350,

    height:300,

    image_format: 'png',

    png_qaulity: 90 

}) ;

camara = document.getElementById("camara");

Webcam.attach('#camara');

function snapping() {

    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="snapped" src="'+data_url+'">'
    });
}

console.log("ml5 version = ", ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/idC3j1y3t/model.json',modeloaded);

function modeloaded() {

    console.log("modeloaded")
}

function checks() {

    img= document.getElementById("snapped");
    classifier.classify(img,snappe);
}

function snappe(error,result) {

    if (error) {
        console.error(error);
    }

    else{

        console.log(result);
        document.getElementById("objname").innerHTML=result[0].label;
        document.getElementById("objaccurate").innerHTML=result[0].confidence.toFixed(3);
        
    }
}



/*---------------------------Triangle part----------------------------*/ 
document.getElementById('btn-triangle').addEventListener('click', function(){
    const triangleField_1= document.getElementById('triangle-field-1');
    const triangleFieldOne= parseFloat(triangleField_1.value);
    triangleField_1.value= '';
    
    
    const triangleField_2= document.getElementById('triangle-field-2');
    const triangleFieldTwo= parseFloat(triangleField_2.value);
    triangleField_2.value= '';

    const triangleCalculation= 0.5* triangleFieldOne * triangleFieldTwo;
    
    // get id and output set
    const triangleOutput= document.getElementById('triangle-output');
    triangleOutput.innerText= triangleCalculation;
})
// convert to meter:
document.getElementById('btn-tri-convert').addEventListener('click', function(){
    console.log('btn-convert clicked')

    const triangleOutput= document.getElementById('triangle-output');
    const triangleOuputTotal= triangleOutput.innerText
    // console.log(triangleOuputTotal)
        const convertMeter= document.getElementById('convert-meter');
        convertMeter.innerText= parseFloat((triangleOuputTotal/100).toFixed(2));
        
    })

    /*---------------------------Rectange part----------------------------*/ 
    document.getElementById('btn-rectangle').addEventListener('click', function(){
        const rectangleField_1= document.getElementById('rectangle-field-1');
        const rectangleFieldOne= parseFloat(rectangleField_1.value);
        rectangleField_1.value= '';

        const rectangleField_2= document.getElementById('rectangle-field-2');
        const rectangleFieldTwo= parseFloat(rectangleField_2.value);
        rectangleField_2.value= '';

        const rectangleCalculation= rectangleFieldOne * rectangleFieldTwo;
       

        // get id and output set
        const rectangleOutput= document.getElementById('rectangle-output');
        rectangleOutput.innerText= rectangleCalculation;
    })

    // convert to meter
    document.getElementById('btn-rec-convert').addEventListener('click', function(){
        const rectangleOutput= document.getElementById('rectangle-output');
        const rectangleOutputTotal= rectangleOutput.innerText;

        // get id and output set
        const convert2Meter= document.getElementById('convert2-meter');
        convert2Meter.innerText= parseFloat((rectangleOutputTotal/100).toFixed(2))
    })

   /*---------------------------Parralelogram part----------------------------*/ 
    document.getElementById('btn-parallelogram').addEventListener('click', function(){
       const parallelogramField_1=  document.getElementById('parallelogram-field-1');
       const parallelogramFieldOne= parseFloat(parallelogramField_1.value);
       parallelogramField_1.value= '';

       const parallelogramField_2=  document.getElementById('parallelogram-field-2');
       const parallelogramFieldTwo= parseFloat(parallelogramField_2.value);
       parallelogramField_2.value= '';

     
      const parallelogramCalculation = parallelogramFieldOne * parallelogramFieldTwo;
        // get id and output set
        const parallelogramOutput= document.getElementById('parallelogram-output');
        parallelogramOutput.innerText= parallelogramCalculation;
    })

    // convert to meter
    document.getElementById('btn-para-convert').addEventListener('click', function(){
        const parallelogramOutput= document.getElementById('parallelogram-output');
        const parallelogramOutputTotal= parseFloat(parallelogramOutput.innerText)

       const convert3Meter= document.getElementById('convert3-meter')
       convert3Meter.innerText= parseFloat((parallelogramOutputTotal/100).toFixed(2))
    })

     /*---------------------------Rhombus part----------------------------*/ 
     document.getElementById('btn-rhombus').addEventListener('click', function(){
        const rhombusField_1= document.getElementById('rhombus-field-1');
        const rhombusFieldOne= parseFloat(rhombusField_1.value);
        rhombusField_1.value= '';

        const rhombusField_2= document.getElementById('rhombus-field-2');
        const rhombusFieldTwo= parseFloat(rhombusField_2.value);
        rhombusField_2.value= '';

        const rhombusCalculation= 0.5 * rhombusFieldOne * rhombusFieldTwo;
        
        // get id and set output
        const rhombusOutput= document.getElementById('rhombus-output');
        rhombusOutput.innerText= rhombusCalculation;
     })

// convert to meter
     document.getElementById('btn-rho-convert').addEventListener('click', function(){
        const rhombusOutput= document.getElementById('rhombus-output');
       const rhombusOutputTotal= rhombusOutput.innerText;
    //    get id and set output
const conver4Meter= document.getElementById('convert4-meter');
conver4Meter.innerText= parseFloat((rhombusOutputTotal/10).toFixed(2));
     })

    /*---------------------------Pentagon part----------------------------*/ 
     document.getElementById('btn-pentagon').addEventListener('click', function(){
        const pentagonField_1= document.getElementById('pentagon-field-1');
    const pentagonFieldOne= parseFloat(pentagonField_1.value);
    pentagonField_1.value= '';

    const pentagonField_2= document.getElementById('pentagon-field-2');
    const pentagonFieldTwo= parseFloat(pentagonField_2.value);
    pentagonField_2.value= '';

    const pentagonCalculation= 0.5 * pentagonFieldOne * pentagonFieldTwo;
    // get id and set output
    const pentagonOutput= document.getElementById('pentagon-output');
    pentagonOutput.innerText= pentagonCalculation;
     })
    // convert to meter
    document.getElementById('btn-pen-convert').addEventListener('click', function(){
        const pentagonOutput= document.getElementById('pentagon-output');
       const pentagonOutputTotal= pentagonOutput.innerText;
    //    get id and set output
const conver5Meter= document.getElementById('convert5-meter');
conver5Meter.innerText= parseFloat((pentagonOutputTotal/10).toFixed(2));
     })
/*---------------------------Ellipse part----------------------------*/ 
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const ellipseField_1= document.getElementById('ellipse-field-1');
    const ellipseFieldOne= parseFloat(ellipseField_1.value);
    ellipseField_1.value='';

    const ellipseField_2= document.getElementById('ellipse-field-2');
    const ellipseFieldTwo= parseFloat(ellipseField_2.value);
    ellipseField_2.value='';

    const ellipseCalculation= parseFloat((3.1416 * ellipseFieldOne * ellipseFieldTwo).toFixed(2));
    // get id and set output
    const ellipseOutput= document.getElementById('ellipse-output');
    ellipseOutput.innerText= ellipseCalculation;
})

 // convert to meter
 document.getElementById('btn-ell-convert').addEventListener('click', function(){
    const ellipseOutput= document.getElementById('ellipse-output');
   const ellipseOutputTotal= ellipseOutput.innerText;
//    get id and set output
const conver6Meter= document.getElementById('convert6-meter');
conver6Meter.innerText= parseFloat((ellipseOutputTotal/10).toFixed(2));
 })
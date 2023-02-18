
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
     
let lengthNumber = 100;
let minNumber = 1;
let maxNumber = 50;

numberRandom(lengthNumber, minNumber, maxNumber);

// function generate number random
function numberRandom(lengthNumber, minNumber, maxNumber)
{
    let numberArray = [];
    for(i=0; i < lengthNumber; i++)
    {
        numberArray[i] = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    }
    console.log(numberArray);
    console.log("================================================");

    // memanggil function ganjilgenap
    ganjilGenap(numberArray);
}

// function memisahkan ganjil dan genap
function ganjilGenap(nilaiArray)
{
    let genap = [];
    let ganjil = [];
    
    for(i = 0; i < nilaiArray.length; i++){
        if(nilaiArray[i] % 2 === 0)
        {
            genap.push(nilaiArray[i]);
        }else{
            ganjil.push(nilaiArray[i]);
        }
    }
    console.log("Nilai genap");
    console.log(genap);
    console.log("================================================");

    console.log("Nilai ganjil");
    console.log(ganjil);
    console.log("================================================");

    // memanggil function nilai minimal dari ganjil dan genap
    nilaiMin(genap, ganjil);

    // memanggil function nilai maksimal dari ganjil dan genap
    nilaiMax(genap, ganjil);

    // memanggil function total dari ganjil dan genap
    nilaiTotal(genap, ganjil);

    // memanggil function rata rata dari ganjil dan genap
    nilaiRataRata(genap, ganjil);
}

function nilaiMin(genap, ganjil)
{
    let minGenap = genap[0];
    let minGanjil = ganjil[0];
    // hitung nilai min genap;
    for(i=0; i < genap.length; i++)
    {
        if(minGenap > genap[i])
        {
            minGenap = genap[i];
        }
    }
    console.log("Nilai minimal genap");
    console.log(minGenap);
    console.log("================================================");


    // hitung max ganjil
    for(i=0; i < ganjil.length; i++)
    {
        if(minGanjil > ganjil[i])
        {
            minGanjil = ganjil[i];
        }
    }
    console.log("Nilai minimal ganjil");
    console.log(minGanjil);
    console.log("================================================");

    // membandingkan besar/kecil nilai min ganjil dan genap
    if(minGenap < minGanjil)
    {
        console.log("Nilai minimal genap lebih kecil dari ganjil");
        console.log("================================================");
    }else{
        console.log("Nilai minimal genap lebih besar dari ganjil");
        console.log("================================================");
    }
}

function nilaiMax(genap, ganjil)
{
    let maxGenap = 0;
    let maxGanjil = 0;

    // hitung nilai max genap;
    for(i=0; i < genap.length; i++)
    {
        if(maxGenap < genap[i])
        {
            maxGenap = genap[i];
        }
    }
    console.log("Nilai maksimal genap");
    console.log(maxGenap);
    console.log("================================================");

    // hitung max ganjil
    for(i=0; i < ganjil.length; i++)
    {
        if(maxGanjil < ganjil[i])
        {
            maxGanjil = ganjil[i];
        }
    }
    console.log("Nilai maksimal ganjil");
    console.log(maxGanjil);
    console.log("================================================");

    // membandingkan besar/kecil nilai max ganjil dan genap
    if(maxGenap < maxGanjil)
    {
        console.log("Nilai maksimal genap lebih kecil dari ganjil");
        console.log("================================================");
    }else{
        console.log("Nilai maksimal genap lebih besar dari ganjil");
        console.log("================================================");
    }
}

function nilaiTotal(genap, ganjil)
{
    // menghitung nilai total genap
    let nilaiTotalGenap = 0;
    for(let i = 0; i < genap.length; i++)
    {
        nilaiTotalGenap += genap[i];
    }
    console.log("Nilai total genap");
    console.log(nilaiTotalGenap);
    console.log("================================================");

    // menghitung nilai total ganjil
    let nilaiTotalGanjil = 0;
    for(let i = 0; i < ganjil.length; i++)
    {
        nilaiTotalGanjil += ganjil[i];
    }
    console.log("Nilai total ganjil");
    console.log(nilaiTotalGanjil);
    console.log("================================================");

    // membandingkan besar/kecil nilai total ganjil dan genap
    if(nilaiTotalGenap < nilaiTotalGanjil)
    {
        console.log("Nilai total genap lebih kecil dari ganjil");
        console.log("================================================");
    } else if(nilaiTotalGenap === nilaiTotalGanjil)
    {
        console.log("Nilai total genap sama dengan nilai total ganjil");
        console.log("================================================");
    }else{
        console.log("Nilai total genap lebih besar dari ganjil");
        console.log("================================================");
    }
}

function nilaiRataRata(genap, ganjil)
{
    // nilai rata rata genap
    let nilaiGenap = 0;
    let nilaiGanjil = 0;
    for(let i = 0; i < genap.length; i++)
    {
        nilaiGenap += genap[i];
    }
    nilaiGenap /= genap.length;
    console.log("Nilai rata rata genap");
    console.log(nilaiGenap);
    console.log("================================================");

    // nilai rata rata ganjil
    for(let i = 0; i < ganjil.length; i++)
    {
        nilaiGanjil += ganjil[i];
    }
    nilaiGanjil /= ganjil.length;
    console.log("Nilai rata rata ganjil");
    console.log(nilaiGanjil);
    console.log("================================================");

    // membandingkan besar/kecil nilai rata rata ganjil dan genap
    if(nilaiGenap < nilaiGanjil)
    {
        console.log("Nilai rata rata genap lebih kecil dari ganjil");
        console.log("================================================");
    }else{
        console.log("Nilai rata rata genap lebih besar dari ganjil");
        console.log("================================================");
    }
}
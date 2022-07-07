/* 
    **Masalaning sharti
    Input: a = "Hello how are you Contestant" b = 4
    Output: "Hello how are you"
    split(' ') --> massiv ga aylantirib beradi ' ' --> joy ochish muhim o'qishga tushunarli bo'ladi
    splice() --> qo'shadi yoki o'chiradi
    join(' ') --> String ko'rinishiga olib keladi ' ' --> joy ochish muhim o'qishga tushunarli bo'ladi
*/

function myTruncateSentenceFunc(a,b) {
    return a.split(' ').splice(0,b).join(' ')
}

console.log(myTruncateSentenceFunc("Hello how are you Contestant", 4));
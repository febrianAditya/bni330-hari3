// let username = "febrian"
// let greeting = "selamat pagi" 
// let adminUser = "arya"


// console.log(username, "===> INI YANG LINE 6");

// setTimeout(() => {
//     console.log(greeting, "==> INI LINE 7");
// }, 0)

// console.log(adminUser, "==> iNI LINE 8");



let belanja = (uang, hargaBarang) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (uang >= hargaBarang) {
                console.log("Berhasil belanja");
                let total = uang - hargaBarang
                // return total
                // cb(total)
                resolve(total)
            }else {
                reject("Maaf uang anda tidak cukup")
            }
        }, 2000)
    })
    
    
}

// let promiseKedua = () => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve("BERHASIL INI KEDUA")
//         }, 500)
        
//     })
// }
// promiseKedua()

// let promiseKetiga = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("BERHASIL INI KETIGA")
//         }, 500)        
//     })
// }

// Running Promise Sekaligus
Promise.all([promiseKedua(), promiseKetiga()])
    .then(hasil => {
        console.log(hasil); 
    })
    .catch(err => {
        console.log(err);
    })

belanja(100000, 50000)
    .then((result) => {
        console.log(result, "==> INI SISA UANG");
    
        return belanja(result, 30000)
    })
    .then((sisaUang2) => {
        console.log(sisaUang2, "===> INI SISA");      
    })
    .catch((err) => {
        console.log(err, "==> ERROR");
        
    })
    .finally(() => {
        console.log("aku selalu terpanggil");   
    })

// let cek = belanja(100000, 5000, function(total) {
//     // console.log(sisaUang, "==> INI UANG DARI FUNCTION BELANJA");
//     belanja(total, 50000, (sisaUang2) => {
//         console.log(sisaUang2);
        
//     })
// })ss
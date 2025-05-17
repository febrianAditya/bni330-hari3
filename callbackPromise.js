let userAdmin = {
    name: "febri",
    pass: "qwerty",
    role: "user"
}

function loginUser(user, pass) {
    return new Promise((resolve, reject) => {

        if(user === "febri" && pass === "qwerty") {
            resolve(userAdmin)
        }else {
            reject("gagal login")
        }

    })
}

function cekRole(dataUser) {
    return new Promise((resolve, reject) => {
        // console.log(dataUser, "==> INI LINE 21");
        if (dataUser.role === "admin") {
            resolve("Dashboard Admin")
        }else if(dataUser.role !== "admin") {
            resolve("Halaman Belanja")
        }
    })
}

loginUser("febri", "qwerty")
    .then(iniDataDariAtas => {
        console.log(iniDataDariAtas);
        
        cekRole(iniDataDariAtas)
            .then(aksesHalaman => {
                console.log(aksesHalaman, "==> AKSES HALAMAN");
                
            })
    })
    .catch(err => {
        console.log(err, "EROR");
        
    })
arr = []
hitungprima = []

function bilangan(x) {
    if (isNaN(x) == true) {
        arr.push("Tolong masukkan angka!")
    }
    if (x % 1 == 0) {
        arr.push("Bulat")
    }
    if (x >= 0) {
        arr.push("Cacah")
    }
    if (x < 0) {
        arr.push("Negatif")
    }
    if (x != 0 && x > 0) {
        arr.push("Asli")
    }
    if (x == 0) {
        arr.push("Nol")
    }
    if (x % 2 != 0 && x > 0) {
        arr.push("Ganjil")
    }
    if (x % 2 == 0) {
        arr.push("Genap")
    }

    // prima
    if (x == 2) {
        arr.push("Prima")
    }
    if (x == 3) {
        arr.push("Prima")
    }
    else if (x > 3) {
        for (y = 2; y < x; y++) {
            hitungprima.push(x % y)
        }
        if (hitungprima.includes(0) == true && x > 1) {
            arr.push("Komposit")

        }
        else {
            arr.push("Prima")
        }
    }
    return arr
}
console.log(bilangan(9))

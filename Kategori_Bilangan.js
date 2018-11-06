function bilangan(x) {
    z = x
    if (x%2==0 && x>=0 && x>0) {
        z=[ 'bulat', 'cacah', 'asli', 'genap']
    }
    else if (x%2!=0 &&x>=0 && x>0) {
        z=[ 'bulat', 'cacah', 'asli', 'ganjil']
    }
    else if (x==0) {
        z=[ 'bulat', 'cacah', 'nol']
    }
    else if (x<0 && x%2==0) {
        z=[ 'negatif', 'genap', 'bulat']
    }
    else if (x<0 && x%2!=0) {
        z=[ 'negatif', 'ganjil', 'bulat']
    }
    return z
    }
console.log(bilangan(-10))
var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    if (penumpang.length == 0){//PENUMPANG.LENGTH = MENGHITUNG ISI PANJANGNYA DATA
        penumpang.push(namaPenumpang);//PENUMPANG.PUSH = MENAMBAHKAN DATA KEDALAM ARRAY
        return penumpang;// UNTUK MENGULANG ISI ARRAY ATAU KELUAR DARI FUNCTION
    } else {
        for (i=0; i<penumpang.length; i++){//UNTUK MENCARI ULANG DATA YG SUDAH DI ISI/ MENSCAN ULANG DATA
            if (penumpang[i] == undefined){//JIKA ISI PENUMPANG KOSONG/UNDEFINED
                penumpang[i] = namaPenumpang;//MENAMBAHKAN ISI KURSI YANG KOSONG
                return penumpang;//UNTUK MENGULANG ISI ARRAY ATAU KELUAR DARI FUNCTION
            } else if (namaPenumpang == penumpang[i]){//UNTUK MENCARI DATA YANG SAMA  YANG TELAH DI INPUT DATANYA
                console.log(namaPenumpang + ' sudah ada didalam angkot');//MEMBERIKAN INFORMASI DATA YANG SAMA/SUDAH ADA
            } else if (i == penumpang.length - 1){//KARENA I NILAINYA 0, DAN PENUMPANG.LENGTH MEMPUNYAI NILAI 1. FUNSI -1 SETELAH PENUMPANG.LENGTH ADALAH UNTUK MENYAMAKAN NILAI I DAN PENUMPANG.LENGTH
                penumpang.push(namaPenumpang);
                return penumpang
            }
        }
    }
}



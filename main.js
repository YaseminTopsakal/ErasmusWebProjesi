



//Engellilik evetse a��klama inputunu g�r�n�r yap
document.addEventListener("click", engellilik);

function engellilik() {
    var engel = document.getElementById("bsvEngel");
    var engelDiv = document.getElementById("engelAciklamaDiv");
    if (engel != null && engel.value == 1) {
        engelDiv.hidden = '';
    }
    else {
        if (engelDiv != null ) {
        engelDiv.hidden = 'hidden';

        }
    }
}


//dosya se�ildi�inde inputlar� g�r�n�r yap


function fileSecim() {
    var ddlbsvDokumanAdi = document.getElementById("bsvDokumanAdi");
    if (ddlbsvDokumanAdi.value != 'undefined' && ddlbsvDokumanAdi.value != '') {

        switch (ddlbsvDokumanAdi.value) {
            case "1":
                document.getElementById("cvFile").style.display = "block";
                document.getElementById("pdfBilgi").style.display = "block";
                document.getElementById("nmFile").style.display = "none";
                document.getElementById("pasFile").style.display = "none";
                document.getElementById("ikaFile").style.display = "none";
                document.getElementById("dipFile").style.display = "none";
                document.getElementById("ingFile").style.display = "none";

                $('#btnEkle').show();
                break;
            case "2":
                document.getElementById("nmFile").style.display = "block";
                document.getElementById("pdfBilgi").style.display = "block";
                document.getElementById("cvFile").style.display = "none";
                document.getElementById("pasFile").style.display = "none";
                document.getElementById("ikaFile").style.display = "none";
                document.getElementById("dipFile").style.display = "none";
                document.getElementById("ingFile").style.display = "none";
                document.getElementById("btnEkle").style.display = "block";
                break;
            case "3":
                document.getElementById("pasFile").style.display = "block";
                document.getElementById("pdfBilgi").style.display = "block";
                document.getElementById("nmFile").style.display = "none";
                document.getElementById("cvFile").style.display = "none";
                document.getElementById("ikaFile").style.display = "none";
                document.getElementById("dipFile").style.display = "none";
                document.getElementById("ingFile").style.display = "none";
                document.getElementById("btnEkle").style.display = "block";
                break;
            case "4":
                document.getElementById("ikaFile").style.display = "block";
                document.getElementById("pdfBilgi").style.display = "block";
                document.getElementById("cvFile").style.display = "none";
                document.getElementById("nmFile").style.display = "none";
                document.getElementById("pasFile").style.display = "none";
                document.getElementById("dipFile").style.display = "none";
                document.getElementById("ingFile").style.display = "none";
                document.getElementById("btnEkle").style.display = "block";
                break;
            case "5":
                document.getElementById("dipFile").style.display = "block";
                document.getElementById("pdfBilgi").style.display = "block";
                document.getElementById("ikaFile").style.display = "none";
                document.getElementById("cvFile").style.display = "none";
                document.getElementById("nmFile").style.display = "none";
                document.getElementById("pasFile").style.display = "none";
                document.getElementById("ingFile").style.display = "none";
                document.getElementById("btnEkle").style.display = "block";
                break;
            case "6":
                document.getElementById("ingFile").style.display = "block";
                document.getElementById("pdfBilgi").style.display = "block";
                document.getElementById("dipFile").style.display = "none";
                document.getElementById("ikaFile").style.display = "none";
                document.getElementById("cvFile").style.display = "none";
                document.getElementById("nmFile").style.display = "none";
                document.getElementById("pasFile").style.display = "none";
                document.getElementById("btnEkle").style.display = "block";
                break;



        }
    }

}






// Dok�man sayfas�nda dok�man eklendik�e eklenen d�k�man�n ad� yan tarafta ��k�yor.


function dokumanTemizleme() {
    document.getElementById("dokumanCV").innerHTML = "";
    document.getElementById("dokumanNM").innerHTML = "";
    document.getElementById("dokumanPas").innerHTML = "";
    document.getElementById("dokumanIka").innerHTML = "";
    document.getElementById("dokumanDip").innerHTML = "";
    document.getElementById("dokumanIng").innerHTML = "";

}





function dokumanEkle() {
   

    dokumanTemizleme();


    var nmName = document.getElementById("nmFile").value.split("\\").slice(-1);
    var CvName = document.getElementById("cvFile").value.split("\\").slice(-1);
    var pasName = document.getElementById("pasFile").value.split("\\").slice(-1);
    var ikaName = document.getElementById("ikaFile").value.split("\\").slice(-1);
    var dipName = document.getElementById("dipFile").value.split("\\").slice(-1);
    var ingName = document.getElementById("ingFile").value.split("\\").slice(-1);

    
    var fileName = [nmName, CvName, pasName, ikaName, dipName, ingName]


   




    if (CvName != null) {
        document.getElementById("dokumanCV").innerHTML = CvName;      
        document.getElementById("cvDiv").hidden = "";
        document.getElementById("btnDokumanSil").style = "block";
       


    }
    
   
    if (nmName != null) {
        document.getElementById("dokumanNM").innerHTML = nmName;
        document.getElementById("nmDiv").hidden = "";
        document.getElementById("btnDokumanSil").style = "block";


    }
    
    if (pasName != null) {
        document.getElementById("dokumanPas").innerHTML = pasName;
        document.getElementById("pasDiv").hidden = "";
        document.getElementById("btnDokumanSil").style = "block";
        

    }
    
    if (ikaName != null) {
        document.getElementById("dokumanIka").innerHTML = ikaName;
        document.getElementById("ikaDiv").hidden = "";
        document.getElementById("btnDokumanSil").style = "block";

    }
   
    if (dipName != null) {
        document.getElementById("dokumanDip").innerHTML = dipName;
        document.getElementById("dipDiv").hidden = "";
        document.getElementById("btnDokumanSil").style = "block";

    }
    if (ingName != null) {
        document.getElementById("dokumanIng").innerHTML = ingName;
        document.getElementById("ingDiv").hidden = "";
        document.getElementById("btnDokumanSil").style = "block";




    }

   
 

}



//Eklenen d�k�manlar� silme

function dokumanSil() {

    
    if (document.getElementById("checkCV").checked == true) {
        var CvName = document.getElementById("cvFile").value = null;
        document.getElementById("checkCV").checked = false;

        



    
    }

    if (document.getElementById("checkNM").checked == true) {
        var nmName = document.getElementById("nmFile").value = null;
      document.getElementById("checkNM").checked = false;


    



    }
    if (document.getElementById("checkPas").checked == true) {
        var pasName = document.getElementById("pasFile").value = null;
      document.getElementById("checkPas").checked = false;



    }
    if (document.getElementById("checkIka").checked == true) {
        var ikaName = document.getElementById("ikaFile").value = null;
       document.getElementById("checkIka").checked = false;



    }
    if (document.getElementById("checkDip").checked == true) {
        var dipName = document.getElementById("dipFile").value = null;
        document.getElementById("checkDip").checked = false;


    

    }
    if (document.getElementById("checkIng").checked == true) {
        var ingName = document.getElementById("ingFile").value = null;
        document.getElementById("checkIng").checked = false;


   


    }
    dokumanEkle()

}
  







//Kay�t olurken ilk girilen �ifre ile ikinicisini kontrol eden fonksiyon

function kayitSifreKontrol() {
    var kullaniciBilgiListesi = [(document.getElementById("kayitKullaniciAdi").value), (document.getElementById("kayitPassword1").value)];

    var kullaniciAdi = kullaniciBilgiListesi[0];
    var KayitSifre2 = document.getElementById("kayitPassword2").value;
    var sifreText = document.getElementById("kayitSifreText");

    
    if (kullaniciAdi == null || kullaniciAdi == "" || kullaniciAdi ==undefined) {
        sifreText.innerHTML = "Kullanici adi bos gecilemez.";
        sifreText.style.color = "red";

    }
    else {

    
    if (kullaniciBilgiListesi[1].length < 6) {
        sifreText.innerHTML = "Sifreniz 6 karakterden az olamaz. ";
        sifreText.style.color = "red";

    }
    else { 

    if (kullaniciBilgiListesi[1] == KayitSifre2) {
        window.location.href = "giris.html";

        sifreText.style.color = "green";
        sessionStorage.setItem("user", kullaniciBilgiListesi);
    }
    
    else if (kullaniciBilgiListesi[1] != KayitSifre2) {
        sifreText.innerHTML = "Girilen sifreler ortusmuyor ";
        sifreText.style.color = "red";
    }

        }
    }
}



//Sisteme giri� yaparken girilen �ifre ve mail ile kay�tl� olan �ifre ve mail adresi �rt���yor mu kontrol eden fonksiyon.



function girisKullaniciBilgiKontrol() {
    var kullanici = sessionStorage.getItem("user");
    kullanici = kullanici.split(",");

    var isLogin = false;


    var girisKullaniciAdi = document.getElementById("girisKullaniciAdi").value;
    var girisSifre = document.getElementById("girisSifre").value;
    var girisText = document.getElementById("girisText");

    if (girisKullaniciAdi == kullanici[0] && girisSifre == kullanici[1]) {

        isLogin = true;
        sessionStorage.setItem("isLogin", isLogin);
        window.location.href = "index.html";


        

    }
    else {
        girisText.innerHTML = "Sifre ve/veya mail hatali giris yaptiniz."
        girisText.style.color = "red";
    }

}



//Giri� yap�lm��sa a�a��daki fonksiyon �al��arak giri� vekay�t ol butonlar�n� kald�racak. Yerine kullan�c� ad�n� koyacak. 


function checkLogin() {

    var kullanici = sessionStorage.getItem("user");
    kullanici = kullanici.split(",");

   
    var isLogin = sessionStorage.getItem("isLogin");


    if (isLogin == "true") {

        document.getElementById("btnGiris").style.display = "none";
        document.getElementById("btnKayit").style.display = "none";
        document.getElementById("kullaniciAdiSpan").innerHTML = '<i class="fa-solid fa-user"></i>'+" " + kullanici[0];
        document.getElementById("LogOutDiv").style.display = "block";
        document.getElementById("btnBasvur").style.display = "block";
    }
}


//��k�� tu�una bas�nca ��k�� yap�lmas�n� sa�layan fonksiyon


function Logout() {

    var isLogin = sessionStorage.getItem("isLogin");
    isLogin = false;
    sessionStorage.setItem("isLogin", isLogin);
    document.getElementById("girisDivBtnGirisKayit").style.display = "none";
    location.reload();
    window.location.href = "index.html";

}
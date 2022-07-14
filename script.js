// class'ı counter olan tüm nesnelere ulaş, counters değişkenine at. 
// counters artık bir nodeList şeklinde bir obje ve index uzunluğu 3 length.
const counters = document.querySelectorAll('.counter')

// burda counter bir parametre fakat foreach ile counters içindeki tüm counterların innerText'ini default olarak '0' yapıyoruz. 
counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
//getAttribute özelliğiyle 'data-target' olan attributü bir değişkene attık number değer olarak.
        const target = +counter.getAttribute('data-target')
//başındaki ('+') bunun bir number değer olacağını ifade eder. 
        const c = +counter.innerText //counterlerın text içeriği c değikeni bir number değer oldu.
        
// birbirinden farklı 'data-target' değerleri aynı anda increment işlemi yapması için bir formül
        const increment = target / 200

        if(c < target ) { // 0 targettan küçükse True dönecek;
            // math.ceil ondalıklı olan sayıyı yukarıya yuvarlar
            counter.innerText = `${Math.ceil(c + increment)}`
            // setTimeOut ile kodu işlevsel hale getiriyoruz
            setTimeout(updateCounter, 1)
        } else {
// Eğer False döndürürse herbir counter'ın text içeriği default olsun
            counter.innerText = target
        }
    }

    updateCounter()
})
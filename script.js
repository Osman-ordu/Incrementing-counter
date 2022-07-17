
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText //counterlerın text içeriği c değikeni bir number değer oldu.
        
        const increment = target / 200

        if(c < target ) { // 0 targettan küçükse True dönecek;
            // math.ceil ondalıklı olan sayıyı yukarıya yuvarlar
            counter.innerText = `${Math.ceil(c + increment)}`
            // setTimeOut ile kodu işlevsel hale getiriyoruz
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})

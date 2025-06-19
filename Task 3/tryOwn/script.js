const btn = document.getElementById('btn');
const tempUrl = 'https
const inp = document.getElementById('inp')
btn.addEventListener('click',()=>{
    const URL = tempUrl + inp.ariaValueMax;
    fetch(URL)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data.products){
            console.log(product);
            const productElem = document.createElement('div');

            const h2 = document.createElement('h2');
            h2.innertext = product.title;
            
            const img = document.createElement('img');
            img.setAttribute('src', product.images[0]);
            img.style.width= "200px";

            cosnt para = document.createElement('p');
            para.innerText = product.price

            productElem.append(h2);
            productElem.append(img);
            productElem.append(para);


            Container.append(productElem);

            
        }
    })

})
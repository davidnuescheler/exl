function classify(qs, cls, parent) {
    document.querySelectorAll(qs).forEach(($e) => {
        for (let p=parent;p>0;p--) {
            $e=$e.parentNode;
        }
        $e.classList.add(cls)    
    });
}

function decoratePage() {
    classify('main>div:first-of-type', 'title')
    classify('main>div h3', 'highlighted', 1)
    classify('main','appear');
    document.querySelectorAll('main>div').forEach(($e) => {
        if ($e.querySelector('img')) {
            const $textDiv=document.createElement('div');
            const $imgDiv=document.createElement('div');
            $imgDiv.className='image';
            $textDiv.className='text';
            Array.from($e.children).forEach(($el) => {
                if ($el.querySelector('img')) $imgDiv.appendChild($el);
                else $textDiv.appendChild($el);
            })
            $e.innerHTML='';
            $e.appendChild($imgDiv);
            $e.appendChild($textDiv);
            $e.classList.add('text-image');
        }
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    decoratePage();
});
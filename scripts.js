function classify(qs, cls, parent) {
    document.querySelectorAll(qs).forEach(($e) => {
        for (let p=parent;p>0;p--) {
            $e=$e.parentNode;
        }
        $e.classList.add(cls)    
    });
}

function decoratePage() {
    classify("main>div:first-of-type", "title")
    classify("main>div h3", "highlighted", 1)
    classify("main","appear");
}

window.addEventListener('DOMContentLoaded', (event) => {
    decoratePage();
});
class TxtType {
    constructor(el, words, wait) {
        this.el = el;
        this.words = words;
        this.wait = parseInt(wait, 10);
        this.txt = '';
        this.isDeleting = false;
        this.loopNum = 0;
        this.tick();
    }

    tick() {
        const fullTxt = this.words[this.loopNum];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="txt">'+this.txt+'</span>';

        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            if (this.loopNum >= this.words.length) {
                this.loopNum = 0;
            }
            delta = 500;
        }

        setTimeout(() => this.tick(), delta);
    }
}

window.onload = function() {
    const elements = document.getElementsByClassName('txt-type');
    for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        const words = JSON.parse(el.getAttribute('data-words'));
        const wait = el.getAttribute('data-wait');
        new TxtType(el, words, wait);
    }
};

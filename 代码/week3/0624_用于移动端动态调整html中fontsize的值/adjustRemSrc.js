window.addEventListener('load', function () {
    window.addEventListener('resize', function () {
        adjust();
    });
    adjust();

    function adjust() {
        let width = this.document.documentElement.clientWidth;
        // console.log(width);
        if (width > 750) {
            this.document.documentElement.style.fontSize = '100px';
        } else {
            this.document.documentElement.style.fontSize = (width / 750) * 100 + 'px';
        }
    }
});
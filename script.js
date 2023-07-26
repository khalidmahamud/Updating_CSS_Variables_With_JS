const controls = document.querySelectorAll('.controls input');

controls.forEach((control) => {
    control.addEventListener('change', function () {
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    });
});


export function setupTestsDiv() {
    const styles = [
        'https://unpkg.com/mocha/mocha.css',
        'https://freeuni-digital-technologies.github.io/webHwInterface/teststyles.css'
    ]
    styles
        .map(getStyleElement)
        .forEach(e => document.head.appendChild(e))
    const testsDiv = `
    <div id="tests" class="container">
        <div id="progress-bar"></div>
        <div id="mocha"></div>
        <div id="help">
            <div id="help-buttons"></div>
            <div id="instructions"></div>
        </div>
    </div>`

    document.body.insertAdjacentHTML('afterbegin', testsDiv)

}

export function getStyleElement(src, callback): HTMLLinkElement {
    let s = document.createElement('link');
    s.setAttribute('rel', 'stylesheet');
    s.setAttribute('href', src)
    return s
}

export function toggle(id: string) {
    const e = document.getElementById(id)!.style;
    e.display = e.display === 'none' ? '' : 'none';
}
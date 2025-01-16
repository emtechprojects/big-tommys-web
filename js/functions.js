export function sayHello(user) {
    return `Hello there ${user}`
}

export function doThis(container, payload) {
    const p = document.createElement('p')
    p.textContent = payload
    return container.appendChild(p)
}
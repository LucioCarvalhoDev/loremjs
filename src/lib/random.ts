export function chance(n = 0.5) {
    return Math.random() < n
}

export function pick<t>(arr: t[]) {
    return arr[Math.floor(Math.random() * arr.length)]
}
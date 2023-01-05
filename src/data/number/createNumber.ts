export default function createNumber(type?: string): string {
    switch (type) {
        case "decimal":
            return (Math.random()).toFixed(3);
        case "small":
            return Math.floor(Math.random() * 128 + 1) + "";
        case "money":
            return (Math.random() * 500).toFixed(2);
        case "large":
            return Math.floor(Math.random() * 99999999) + "";
        default:
            return 0 + "";
    }
}
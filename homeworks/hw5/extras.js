export function createServerConfig(CONFIG) {
    CONFIG.isStep = function(i) {
        return i > 2 && i < 8
    }
    return CONFIG
}

export function generateServerTests() {

}


export function getScore(test) {
    return 1
}


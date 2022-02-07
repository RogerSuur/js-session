// Create an object named circular that has a property named circular with itself as the value

const circular = {
    circular(circular)
}

function circular(circular) {
    return circular(circular)
}
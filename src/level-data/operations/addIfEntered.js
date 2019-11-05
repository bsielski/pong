function addIfEntered(status, a, b) {
    if (status == "entered") {
        return a + b;
    }
    return a;
}
export default addIfEntered;

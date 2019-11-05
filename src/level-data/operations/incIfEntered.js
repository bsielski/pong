function incIfEntered(status, a) {
    if (status == "entered") {
        return a + 1;
    }
    return a;
}
export default incIfEntered;

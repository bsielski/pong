function startTimerIfDelayIsPassed(bool, oldState) {
    if (bool) {
        return "running";
    }
    else {
        return oldState;
    }
}
export default startTimerIfDelayIsPassed;

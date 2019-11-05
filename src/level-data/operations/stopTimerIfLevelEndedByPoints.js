function stopTimerIfLevelEndedByPoints(bool, oldState) {
    if (bool) {
        return "stopped";
    }
    else {
        return oldState;
    }
}
export default stopTimerIfLevelEndedByPoints;

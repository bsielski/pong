function getKeyBinding() {
  /* modes:
    pressed - key can be hold pressed for constant effect, for example moving
    single - effect is only when key is pressed, like shooting from pistol
    switch - effect is like light sitch, each pressing is on or off
  */
  const keyBinding = {
    playerPaddleLeft: [{key: "leftArrow", mode: "pressed"}],
    playerPaddleRight: [{key: "rightArrow", mode: "pressed"}],
    confirm: [{key: "enter", mode: "single"}] // do to single
  }

  return JSON.parse(JSON.stringify(keyBinding));

}

export default getKeyBinding;

export function kayakAmination(event) {
  //event is triggered on scroll in home page, top level container
  //clientWidth is equal to inital width of the first screen (100vw)
  //scrollLeft is equal to the pixels moved from load of site
  //scrollWidth is equal to the total width of scollable area
  //all equations have been based off of clientWidth as the app will only...
  //...utilise 100vw in all components for linear scale

  const element = event.target;
  const scrolling = element.scrollLeft;
  const firstScreenWidth = element.clientWidth;
  // const totalAppWidth = element.scrollWidth;

  //Component One
  const kayakStartingPosition = scrolling === 0 || scrolling <= 5;
  const kayakStart = scrolling >= 10 || scrolling <= 40;
  const kayakFirstQuarter = firstScreenWidth / 10 - scrolling;

  //Component Two
  const kayakRaceOops = firstScreenWidth - scrolling;
  // const kayakRaceOoops = firstScreenWidth * 1.05;
  // const kayakRaceSpinSecondQuarter = firstScreenWidth * 1.08;
  // const kayakRaceStraightenSecondQuarter = firstScreenWidth * 1.75;

  //Component Three
  const kayakRaceDive = firstScreenWidth * 1.99;
  // const kayakRaceThirdQuarterSplash = firstScreenWidth * 1.83;
  // const kayakRaceThirdQuarterUnder = firstScreenWidth * 1.9;
  // const kayakRaceThirdQuarterBop = firstScreenWidth * 2.85;
  // const kayakRaceThirdQuarterSurfaced = firstScreenWidth * 2.92;

  //Component Four
  // const kayakSharpTurnUp = firstScreenWidth * 2.8;
  // const kayakRaceJump = firstScreenWidth * 2.96;
  // const kayakRaceFly = firstScreenWidth * 2.98;
  // const jumpToEnd = firstScreenWidth * 2.99;

  const jumpToEnd = firstScreenWidth * 3;

  //Component One
  if (kayakStartingPosition) {
    const getKayakerIDfromDOM = document.getElementById("kayaker");
    getKayakerIDfromDOM.className = "kayakStart";
  }

  if (kayakStart) {
    const getKayakerIDfromDOM = document.getElementById("kayaker");
    getKayakerIDfromDOM.className = "kayakBottomStraight";
  }

  if (kayakFirstQuarter <= 0) {
    const getKayakerIDfromDOM = document.getElementById("kayaker");
    getKayakerIDfromDOM.className = "kayakBottomStraight";
  }

  //Component Two

  if (kayakRaceOops <= 0) {
    const getKayakerIDfromDOM = document.getElementById("kayaker");
    getKayakerIDfromDOM.className = "kayakMiddleSpinOut";
  }

  // if (scrolling >= kayakRaceOoops) {
  //   const getKayakerIDfromDOM = document.getElementById("kayaker");
  //   getKayakerIDfromDOM.className = "kayakMovementDown";
  // }

  // if (scrolling >= kayakRaceSpinSecondQuarter) {
  //   const getKayakerIDfromDOM = document.getElementById("kayaker");
  //   getKayakerIDfromDOM.className = "kayakMiddleSpinOut";
  // }

  // if (scrolling >= kayakRaceStraightenSecondQuarter) {
  //   const getKayakerIDfromDOM = document.getElementById("kayaker");
  //   getKayakerIDfromDOM.className = "kayakMiddleStraight";
  // }

  //Component Three

  if (scrolling >= kayakRaceDive) {
    const getKayakerIDfromDOM = document.getElementById("kayaker");
    getKayakerIDfromDOM.className = "kayakMovementDive";
  }

  // if (scrolling >= kayakRaceThirdQuarterSplash) {
  //   const getKayakerIDfromDOM = document.getElementById("kayaker");
  //   getKayakerIDfromDOM.className = "kayakMovementBob";
  // }

  // if (scrolling >= kayakRaceThirdQuarterUnder) {
  //   const getKayakerIDfromDOM = document.getElementById("kayaker");
  //   getKayakerIDfromDOM.className = "kayakBottomUnderLogo";
  // }

  // if (scrolling >= kayakRaceThirdQuarterBop) {
  //   const getKayakerIDfromDOM = document.getElementById("kayaker");
  //   getKayakerIDfromDOM.className = "kayakMovementBop";
  // }

  // if (scrolling >= kayakRaceThirdQuarterSurfaced) {
  //   const getKayakerIDfromDOM = document.getElementById("kayaker");
  //   getKayakerIDfromDOM.className = "kayakMovementFloat";
  // }

  //Component Four

  // if (scrolling >= kayakRaceJump) {
  //   const getKayakerIDfromDOM = document.getElementById("kayaker");
  //   getKayakerIDfromDOM.className = "kayakJump";
  // }

  // if (scrolling >= kayakRaceFly) {
  //   const getKayakerIDfromDOM = document.getElementById("kayaker");
  //   getKayakerIDfromDOM.className = "kayakFly";
  // }

  if (scrolling >= jumpToEnd) {
    const getKayakerIDfromDOM = document.getElementById("kayaker");
    getKayakerIDfromDOM.className = "kayakEnd";
    document.getElementById("instructionFadeOut").style.display = "flex";
  }
}

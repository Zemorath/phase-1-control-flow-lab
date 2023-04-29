function scuberGreetingForFeet(lengthOfRide){
  // Write your code here!
  if (lengthOfRide <= 400) {
    return 'This one is on me!'
  } else if (lengthOfRide > 400 && lengthOfRide < 2000) {
    return 'That will be twenty bucks.'
  } else if (lengthOfRide > 2000 && lengthOfRide <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (lengthOfRide > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(cityName){
  // Write your code here!
  return cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tipReaction){
  // Write your code here!
  switch (tipReaction) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
      break;
  }
}
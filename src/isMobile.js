export default function isMobile() {
  if (navigator.userAgent.match(/Tablet|iPad/i)) {
    // do tablet stuff
    return true;
  } else if (
    navigator.userAgent.match(
      /Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i
    )
  ) {
    // do mobile stuff
    return true;
  } else {
    // do desktop stuff
    return false;
  }
}
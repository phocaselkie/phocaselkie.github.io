// code from: https://stackoverflow.com/a/39914235/14251221 with light modifications
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var str = 'are\u00A0you\u00A0lost?\u00A0🦭';
document.title = '';
async function typewriteTitle() {
  for (const char of str) {
  document.title += char;
  await sleep(200);
}
}
typewriteTitle();
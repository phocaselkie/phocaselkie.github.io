// code from: https://stackoverflow.com/a/39914235/14251221 with light modifications
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var str = '⊹\u00A0 ࣪ ˖\u00A0phocaselkie\'s\u00A0website\u00A0🦭';
document.title = '';
async function typewriteTitle() {
  for (const char of str) {
  document.title += char;
  await sleep(100);
}
}
typewriteTitle();
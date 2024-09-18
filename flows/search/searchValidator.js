class SearchValidator {
  isValidMD5(hash) {
    const md5Regex = /^[a-fA-F0-9]{32}$/;
    return typeof hash === "string" && hash.length === 32 && md5Regex.test(hash);
  }
  isValidSearch(str) {
    return typeof str === "string" && string.length >= 2 && string.length <= 64;
  }
}

module.exports = new SearchValidator();

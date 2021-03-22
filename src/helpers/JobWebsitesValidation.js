const isWebsiteValid = function(value, keyword) {
  const websiteRegEx = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
  return websiteRegEx.test(value) && value.includes(keyword);
};

export default isWebsiteValid;

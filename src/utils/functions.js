const getShortContent = (content, length = 60) => {
  if (content) {
    let shortedContent = content.substr(0, length);
    shortedContent = shortedContent.substr(0, Math.min(shortedContent.length,
      shortedContent.lastIndexOf(' ')));
    return `${shortedContent}...`;
  }
};

export default {
  getShortContent,
};

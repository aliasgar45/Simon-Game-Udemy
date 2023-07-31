const NEW_LINE_REGEX = /\n/g;
const LINK_REGEX =
  /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4})(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))/gi;

const regexMap = [
  { regex: LINK_REGEX, replaceWith: '<a target="_blank" href="$1">$1</a>' },
  { regex: NEW_LINE_REGEX, replaceWith: '<br />' }
];

const formatText = (text: string) => {
  return regexMap.reduce((acc, { regex, replaceWith }) => {
    return acc.replace(regex, replaceWith);
  }, text);
};

export function toSentenceCase(string: string) {
  if (!string) {
    return '';
  }
  return string[0].toUpperCase() + string.slice(1);
}

export default formatText;

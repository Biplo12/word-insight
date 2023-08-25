export function countWords(str: string): number {
  return str.split(" ").length;
}

export function timeToRead(str: string): number {
  return Math.ceil(countWords(str) / 200);
}

export function countSentences(str: string): number {
  return str.split(".").length;
}

export function countParagraphs(str: string): number {
  return str.split("\n").length;
}

export function countCharacters(str: string): number {
  return str.length;
}

export function countCharactersWithoutSpaces(str: string): number {
  return str.replace(/\s/g, "").length;
}

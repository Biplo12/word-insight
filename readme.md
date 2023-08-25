# word-insight

A Node.js package for analyzing text content and gaining insights about words, sentences, and characters.

## Installation

Install the package using npm:

```bash
npm install word-insight
```

### Or

```bash
yarn add word-insight
```

## Usage

```
import * as wordInsight from 'word-insight';


const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const wordCount = wordInsight.countWords(text);
console.log(`Word Count: ${wordCount}`);

const timeToRead = wordInsight.timeToRead(text);
console.log(`Time to Read: ${timeToRead} minutes`);

const sentenceCount = wordInsight.countSentences(text);
console.log(`Sentence Count: ${sentenceCount}`);

const paragraphCount = wordInsight.countParagraphs(text);
console.log(`Paragraph Count: ${paragraphCount}`);

const characterCount = wordInsight.countCharacters(text);
console.log(`Character Count: ${characterCount}`);

const characterCountWithoutSpaces = wordInsight.countCharactersWithoutSpaces(text);
console.log(`Character Count (without spaces): ${characterCountWithoutSpaces}`);
```

## Functions

countWords(str: string): number: Counts the number of words in the given text.

timeToRead(str: string): number: Estimates the time required to read the text (assuming an average reading speed of 200 words per minute).

countSentences(str: string): number: Counts the number of sentences in the given text.

countParagraphs(str: string): number: Counts the number of paragraphs in the given text.

countCharacters(str: string): number: Counts the total number of characters in the text.

countCharactersWithoutSpaces(str: string): number: Counts the total number of characters in the text, excluding spaces.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

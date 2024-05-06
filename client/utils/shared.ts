export default function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text; // Return the original text if it's already shorter than or equal to maxLength
  }

  let truncatedText = text.substr(0, maxLength); // Start with the first maxLength characters

  // Find the last space within the maxLength range
  const lastSpaceIndex = truncatedText.lastIndexOf(" ");

  if (lastSpaceIndex !== -1) {
    // If a space was found within the range, truncate at that space
    truncatedText = truncatedText.substr(0, lastSpaceIndex);
  }

  return truncatedText;
}

type FormattedMessageContentProps = {
  content: string;
  isUser?: boolean;
};

function cleanInlineMarkdown(value: string) {
  return value
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .trim();
}

function normalizeLine(line: string) {
  return cleanInlineMarkdown(line)
    .replace(/^\s*[-*]\s+/, "")
    .replace(/^\s*\d+\.\s+/, "")
    .trim();
}

export function FormattedMessageContent({ content, isUser = false }: FormattedMessageContentProps) {
  if (isUser) {
    return <span className="whitespace-pre-wrap">{cleanInlineMarkdown(content)}</span>;
  }

  const blocks = content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="space-y-3">
      {blocks.map((block, blockIndex) => {
        const lines = block
          .split("\n")
          .map(normalizeLine)
          .filter(Boolean);

        if (lines.length === 0) {
          return null;
        }

        if (lines.length === 1) {
          const [line] = lines;
          const looksLikeHeading = line.length <= 32 && /[:：]$/.test(line);

          return looksLikeHeading ? (
            <p key={`${line}-${blockIndex}`} className="text-[13px] font-bold tracking-[-0.01em]">
              {line.replace(/[:：]$/, "")}
            </p>
          ) : (
            <p key={`${line}-${blockIndex}`} className="whitespace-pre-wrap">
              {line}
            </p>
          );
        }

        return (
          <div key={`${lines[0]}-${blockIndex}`} className="space-y-1.5">
            {lines.map((line, lineIndex) => (
              <p key={`${line}-${lineIndex}`} className="whitespace-pre-wrap">
                {line}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
}

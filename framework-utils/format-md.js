import parse from "html-react-parser";

export function formatMd(content) {
  return parse(content.replaceAll("\n", "<br />"));
}

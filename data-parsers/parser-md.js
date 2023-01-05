import parse from "html-react-parser";

export default function parseMd(content) {
  return parse(content.replaceAll("\n", "<br />"));
}

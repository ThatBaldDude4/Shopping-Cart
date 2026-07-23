export default function CompilerTest({ count }) {
  "use memo";

  const doubled = count * 2;

  return <p>{doubled}</p>;
}
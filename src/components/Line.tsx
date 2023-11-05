interface LineProps {
  width?: string;
  height?: string;
}

export function Line({ width, height }: LineProps) {
  const lineStyle = {
    width,
    height,
  };

  return <div className={`block bg-black opacity-[0.3]`} style={lineStyle} />;
}

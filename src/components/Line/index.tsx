import { Svg } from "./styles";

interface LineProps {
  color: string;
}

export function Line({ color }: LineProps) {


  return (
    <Svg width="791" height="31" viewBox="0 0 791 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 15.5H775.5" stroke={color} strokeWidth="2" />
      <circle cx="15.5" cy="15.5" r="14.5" stroke="#0E8784" strokeWidth="2" />
      <circle cx="395.5" cy="15.5" r="14.5" stroke="#0E8784" strokeWidth="2" />
      <circle cx="775.5" cy="15.5" r="14.5" stroke="#0E8784" strokeWidth="2" />
    </Svg>

  )
}
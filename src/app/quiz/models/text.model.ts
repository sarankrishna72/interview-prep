export type TextSize = '3xs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'; 
export type TextWeight = 'light' | 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type TextColor = 'primary' | 'secondary' | 'accent' | 'error' | 'warning' | 'info' | 'success' ;
export interface CyborgTextProps {
  size?: TextSize;
  color?: TextColor;
  weight?: TextWeight;
  family?: 'orbitron' | 'inter';
}
import UseScrollTop from "../../hooks/useScroll";
import { Fab } from "./style";

export default function FabScrollTop(){
  const {scrollTop} = UseScrollTop();
  console.log(scrollTop);
  return(
    <Fab style={{
      transform: scrollTop > 100 ? "translateX(0)" : "translateX(100px)"
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
        <g filter="url(#filter0_i_159:5)">
          <path fill="#fff" fillRule="evenodd" d="M8.468 15.531a1.6 1.6 0 010-2.262l6.4-6.4a1.6 1.6 0 012.263 0l6.4 6.4a1.6 1.6 0 01-2.262 2.262l-3.67-3.669V24a1.6 1.6 0 11-3.2 0V11.862l-3.668 3.67a1.6 1.6 0 01-2.263 0z" clipRule="evenodd"/>
        </g>
        <defs>
          <filter id="filter0_i_159:5" width="15.98" height="20.2" x="8" y="6.4" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.42 0"/>
            <feBlend in2="shape" result="effect1_innerShadow_159:5"/>
          </filter>
        </defs>
      </svg>

    </Fab>
  );
}
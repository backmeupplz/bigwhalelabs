import classNamesToString from 'helpers/classNamesToString'
import classnames, { strokeWidth } from 'classnames/tailwind'
import useBreakpoints from 'hooks/useBreakpoints'

const mainStroke = classnames(strokeWidth('stroke-1.5'))

export default function () {
  const { lg } = useBreakpoints()
  return (
    <svg
      width={lg ? '471.6' : '262'}
      height={lg ? '343.8' : '191'}
      viewBox="0 0 262 191"
      fill="none"
      className={classNamesToString(lg ? '-my-12' : undefined)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57.3611 124.14L57.0148 131.407M57.3611 124.14L68.9541 122.929M57.3611 124.14L65.4933 131.234M57.0148 131.407L63.9357 140.751M57.0148 131.407L65.4933 131.234M63.9357 140.751L78.643 150.613M63.9357 140.751L65.4933 131.234M78.643 150.613L100.444 174.837L131.589 189.37M78.643 150.613L89.3711 142.653M131.589 189.37L154.948 187.812M131.589 189.37L121.9 168.261M154.948 187.812L189.036 172.758M154.948 187.812L121.9 168.261M154.948 187.812L162.908 161.165M154.948 187.812L170.002 173.104M189.036 172.758L216.893 187.118M189.036 172.758L170.002 173.104M189.036 172.758L200.802 173.103M189.036 172.758L182.288 147.668M216.893 187.118L234.542 188.156M216.893 187.118L200.802 173.103M234.542 188.156L261.189 178.811L235.235 168.084M234.542 188.156L200.802 173.103M234.542 188.156L218.278 166.355M234.542 188.156L235.235 168.084M235.235 168.084L218.278 166.355M218.278 166.355L204.609 157.184M204.609 157.184L211.531 120.156M204.609 157.184L200.802 173.103M204.609 157.184L182.288 147.668M211.531 120.156L209.282 97.8349M211.531 120.156L182.288 147.668M211.531 120.156L190.422 93.1636M209.282 97.8349L196.479 70.8426M209.282 97.8349L190.422 93.1636M196.479 70.8426L182.637 54.2321M196.479 70.8426L183.502 72.0542M182.637 54.2321L182.291 45.2345M182.637 54.2321L183.502 72.0542M182.637 54.2321L168.622 54.0595M182.291 45.2345L193.712 18.5875M182.291 45.2345L168.622 54.0595M182.291 45.2345L173.986 36.9293M193.712 18.5875L192.847 8.03274M193.712 18.5875L173.986 36.9293M192.847 8.03274L176.929 1.11201L168.969 24.6444M192.847 8.03274L168.969 24.6444M168.969 24.6444L167.93 48.1765M168.969 24.6444L173.986 36.9293M167.93 48.1765L165.507 48.5226M167.93 48.1765L168.622 54.0595M167.93 48.1765L173.986 36.9293M165.507 48.5226L149.243 32.2583M165.507 48.5226L162.219 59.7697M165.507 48.5226L157.202 47.8307M149.243 32.2583L141.284 21.5307M149.243 32.2583L157.202 47.8307M141.284 21.5307L126.403 38.142L139.034 43.6786M141.284 21.5307L139.034 43.6786M151.665 49.2152L162.219 59.7697M151.665 49.2152L157.202 47.8307M151.665 49.2152L139.034 43.6786M162.219 59.7697L162.046 71.3627M162.219 59.7697L183.502 72.0542M162.219 59.7697L168.622 54.0595M162.046 71.3627L164.295 87.1084M162.046 71.3627L173.292 86.762M162.046 71.3627L183.502 72.0542M164.295 87.1084L156.854 115.313M164.295 87.1084L173.292 86.762M156.854 115.313L139.031 133.135M156.854 115.313L182.288 147.668M156.854 115.313L190.422 93.1636M156.854 115.313L173.292 86.762M139.031 133.135L125.881 135.904M139.031 133.135L144.914 148.362M125.881 135.904L104.252 127.772M125.881 135.904L121.9 168.261M125.881 135.904L144.914 148.362M104.252 127.772L79.1629 121.717M104.252 127.772L89.3711 142.653M79.1629 121.717L73.453 119.814L68.9541 122.929M79.1629 121.717L78.1245 130.715M79.1629 121.717L89.3711 142.653M68.9541 122.929L78.1245 130.715M65.4933 131.234L78.1245 130.715M89.3711 142.653L121.9 168.261M121.9 168.261L100.098 175.183M121.9 168.261L144.914 148.362M144.914 148.362L162.908 161.165M162.908 161.165L170.002 173.104M162.908 161.165L182.288 147.668M190.422 93.1636L173.292 86.762M190.422 93.1636L183.502 72.0542M173.292 86.762L183.502 72.0542"
        stroke="url(#paint0_linear_33_22887)"
        className={mainStroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g filter="url(#filter0_d_33_22887)">
        <circle cx="34" cy="99" r="15" fill="#FED823" />
      </g>
      <defs>
        <filter
          id="filter0_d_33_22887"
          x="0"
          y="65"
          width="68"
          height="68"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="9.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.996078 0 0 0 0 0.847059 0 0 0 0 0.137255 0 0 0 1 0"
          />
          <feBlend
            mode="screen"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_33_22887"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_33_22887"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_33_22887"
          x1="58.9455"
          y1="126.47"
          x2="218.713"
          y2="138.692"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FED823" />
          <stop offset="1" stop-color="#15A1FC" />
        </linearGradient>
      </defs>
    </svg>
  )
}

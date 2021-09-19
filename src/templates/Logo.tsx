import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <div className="mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 192 192"
        >
          <defs>
            <linearGradient
              id="linearGradient-1"
              x1="50%"
              x2="50%"
              y1="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#A8D0FE"></stop>
              <stop offset="100%" stopColor="#90FFF1"></stop>
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <path
              fill="url(#linearGradient-1)"
              d="M126.21 68.629c11.482 0 20.79 9.308 20.79 20.79v72.791c0 11.482-9.308 20.79-20.79 20.79h-2.527c-11.482 0-20.79-9.308-20.79-20.79V89.419c0-11.482 9.308-20.79 20.79-20.79zM68.317 136.72c11.482 0 20.79 9.308 20.79 20.79v2.836c0 11.482-9.308 20.79-20.79 20.79H65.79c-11.482 0-20.79-9.308-20.79-20.79v-2.836c0-11.482 9.308-20.79 20.79-20.79h2.527zM68.707 11c11.482 0 20.79 9.308 20.79 20.79v72.236c0 11.482-9.308 20.79-20.79 20.79H66.18c-11.482 0-20.79-9.308-20.79-20.79V31.79C45.39 20.308 54.698 11 66.18 11h2.527zm57.308.164c11.482 0 20.79 9.308 20.79 20.79v2.836c0 11.482-9.308 20.79-20.79 20.79h-2.527c-11.482 0-20.79-9.308-20.79-20.79v-2.836c0-11.482 9.308-20.79 20.79-20.79z"
              transform="rotate(45 96 97)"
            ></path>
          </g>
        </svg>
      </div>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };

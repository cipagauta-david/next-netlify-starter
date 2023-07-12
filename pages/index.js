import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div id="root">
  <div class="h-screen flex overflow-hidden relative">
    <div
      class="w-56 relative flex-shrink-0 flex flex-col pb-4 bg-secondary-300 transition-all"
    >
      <div class="flex-shrink-0 px-4 pb-4 border-b border-secondary-100">
        <div class="h-20 grid place-items-center">
          <div class="cursor-pointer" role="button" tabindex="0">
            <img
              class="w-auto object-contain h-20"
              src="/static/media/Logo_tagline_DarkBkgnd.5886df7b506bb05818b6.png"
              alt="Workflow"
            />
          </div>
        </div>
        <div
          id="tour-step-1"
          class="flex flex-col bg-primary-300 px-3 py-2 rounded-md"
        >
          <article class="flex gap-2 items-center mb-2">
            <div class="self-center rounded-full bg-secondary-200 p-1.5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                class="w-6 h-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
                ></path>
              </svg>
            </div>
            <div class="text-left mx-auto">
              <p class="line-clamp-2 text-white font-medium text-sm">
                test2 rigor2
              </p>
              <p class="text-white text-xs line-clamp-1">Admin dealer</p>
            </div>
          </article>
          <div class="relative pt-1 border-t border-primary-200">
            <button
              id="headlessui-popover-button-1"
              type="button"
              class="inline-flex rounded-sm text-base px-4 py-1.5 border-transparent text-secondary-300 hover:text-opacity-80 transition-colors items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-primary-300"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                class="-ml-1 mr-3 h-5 w-5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"
                ></path></svg
              >Notifications
            </button>
          </div>
        </div>
        <span
          class="w-full flex justify-center items-center text-primary-300 mt-4 font-semibold text-sm"
          >v4.4.41</span
        >
      </div>
      <div class="mt-5 flex-1 h-0 overflow-y-auto overflow-x-hidden">
        <nav id="tour-step-2" class="space-y-2">
          <a
            id="tour-step-3"
            class="text-primary-300 hover:bg-black hover:bg-opacity-20 transition-colors flex items-center gap-x-3 px-4 py-2 text-sm font-medium"
            href="/applications"
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="flex-shrink-0 h-6 w-6"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
              ></path></svg
            >Home<span
              class="flex-shrink-0 h-5 w-auto px-0.5 grid place-items-center bg-primary-200 border border-primary-300 rounded font-bold text-xs text-secondary-300"
              >34</span
            ></a
          ><a
            id=""
            class="text-primary-300 hover:bg-black hover:bg-opacity-20 transition-colors flex items-center gap-x-3 px-4 py-2 text-sm font-medium"
            href="/ottomax"
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="flex-shrink-0 h-6 w-6"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 0 0-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 0 0-44-44zM184 352V232h64v207.6a91.99 91.99 0 0 1-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"
              ></path></svg
            >OTTOMOTOmax™<span
              class="flex-shrink-0 h-5 w-auto px-0.5 grid place-items-center bg-primary-200 border border-primary-300 rounded font-bold text-xs text-secondary-300"
              >1</span
            ></a
          ><a
            id=""
            class="text-primary-300 hover:bg-black hover:bg-opacity-20 transition-colors flex items-center gap-x-3 px-4 py-2 text-sm font-medium"
            href="/roles"
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="flex-shrink-0 h-6 w-6"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 0 0-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 0 0-11.3 0L266.3 586.7a8.03 8.03 0 0 0 0 11.3l39.5 39.7z"
              ></path></svg
            >Roles</a
          ><a
            id=""
            class="text-primary-300 hover:bg-black hover:bg-opacity-20 transition-colors flex items-center gap-x-3 px-4 py-2 text-sm font-medium"
            href="/company/U2FsdGVkX1%2B3K1n%2FLfz1gMzhmp%2BzdrBuVDdarwwMXBgh6SvuNA2BMt21hId9zfY8moleo0rmJBzRkARjcyQ56A%3D%3D"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="flex-shrink-0 h-6 w-6"
            >
              <path
                d="M13.0473833,2.08821958 C13.2052333,1.97288825 13.4189083,1.97042425 13.5794167,2.08208708 L16.2148333,3.91542042 C16.3380333,4.00110125 16.4114583,4.14163542 16.4114583,4.29166625 L16.4114583,10.7478412 L18.3268333,9.41542042 C18.4841333,9.30597042 18.69295,9.30597042 18.85025,9.41542042 L21.4856667,11.2487079 C21.6088667,11.3344162 21.6822917,11.4749412 21.6822917,11.6249996 L21.6822917,21.2499996 L22.5416667,21.2499996 C22.7947583,21.2499996 23,21.4552412 23,21.7083329 C23,21.9614246 22.7947583,22.1666662 22.5416667,22.1666662 L21.2239583,22.1666662 L18.5885417,22.1666662 L15.953125,22.1666662 L13.3177083,22.1666662 L8.92534417,22.1666662 L6.2899275,22.1666662 L2.77604167,22.1666662 L1.45833333,22.1666662 C1.20520317,22.1666662 1,21.9614246 1,21.7083329 C1,21.4552412 1.20520317,21.2499996 1.45833333,21.2499996 L2.31770833,21.2499996 L2.31770833,10.7083329 C2.31770833,10.5673496 2.3825625,10.4342496 2.49357083,10.3473496 L6.00745667,7.59739542 C6.1658475,7.47343458 6.38655333,7.46721958 6.5516725,7.58208708 L8.46701083,8.91449875 L8.46701083,5.66666625 C8.46701083,5.52036625 8.53686083,5.38284792 8.65500083,5.29655292 L13.0473833,2.08821958 Z M9.3836775,9.79818375 C9.3837325,9.79410458 9.3837325,9.79002542 9.3836775,9.78595542 L9.3836775,5.89946292 L12.859375,3.36069958 L12.859375,21.2499996 L9.3836775,21.2499996 L9.3836775,9.79818375 Z M8.46701083,10.0311546 L6.74826083,8.83550042 L6.74826083,21.2499996 L8.46701083,21.2499996 L8.46701083,10.0311546 Z M5.83159417,21.2499996 L5.83159417,8.89903458 L3.234375,10.9316329 L3.234375,21.2499996 L5.83159417,21.2499996 Z M13.7760417,21.2499996 L15.4947917,21.2499996 L15.4947917,11.6249996 L15.4947917,4.53115458 L13.7760417,3.33550042 L13.7760417,21.2499996 Z M16.4114583,21.2499996 L18.1302083,21.2499996 L18.1302083,10.6688246 L16.4114583,11.8645246 L16.4114583,21.2499996 Z M19.046875,10.6688246 L19.046875,21.2499996 L20.765625,21.2499996 L20.765625,11.8645246 L19.046875,10.6688246 Z"
                fill="currentColor"
              ></path></svg
            >Company</a
          ><a
            id=""
            class="text-primary-300 hover:bg-black hover:bg-opacity-20 transition-colors flex items-center gap-x-3 px-4 py-2 text-sm font-medium"
            href="/education"
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="flex-shrink-0 h-6 w-6"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3 6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5 48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z"
              ></path></svg
            >Education</a
          ><a
            id=""
            class="text-primary-300 hover:bg-black hover:bg-opacity-20 transition-colors flex items-center gap-x-3 px-4 py-2 text-sm font-medium"
            href="/relationships"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="flex-shrink-0 h-6 w-6"
            >
              <path
                d="M17,13 C18.3536818,13 19.4545455,14.1008636 19.4545455,15.4545455 C19.4545455,16.0878182 19.2115455,16.6642273 18.8159545,17.0999091 C20.3111818,17.1935909 21.5,18.4364091 21.5,19.9545455 L21.5,19.9545455 L21.5,21.5909091 C21.5,21.8171364 21.3171364,22 21.0909091,22 L21.0909091,22 L12.9090909,22 C12.6828636,22 12.5,21.8171364 12.5,21.5909091 L12.5,21.5909091 L12.5,19.9545455 C12.5,18.4364091 13.6888182,17.1935909 15.1840455,17.0999091 C14.7884545,16.6642273 14.5454545,16.0878182 14.5454545,15.4545455 C14.5454545,14.1008636 15.6463182,13 17,13 Z M3.29999,13 L3.29999,19.5195345 L9.13431707,19.5195345 L8.21712854,18.522915 L8.78272147,17.9083402 L10.3827015,19.6468827 C10.5390995,19.8168252 10.5390995,20.0915149 10.3827015,20.2614575 L10.3827015,20.2614575 L8.78272147,22 L8.21712854,21.3854252 L9.13431707,20.3888057 L2.899995,20.3888057 C2.67879777,20.3888057 2.5,20.1945236 2.5,19.9541701 L2.5,19.9541701 L2.5,13 L3.29999,13 Z M18.6363636,17.9090909 L15.3636364,17.9090909 C14.2357727,17.9090909 13.3181818,18.8266818 13.3181818,19.9545455 L13.3181818,19.9545455 L13.3181818,21.1818182 L20.6818182,21.1818182 L20.6818182,19.9545455 C20.6818182,18.8266818 19.7642273,17.9090909 18.6363636,17.9090909 L18.6363636,17.9090909 Z M17,13.8181818 C16.0975455,13.8181818 15.3636364,14.5520909 15.3636364,15.4545455 C15.3636364,16.357 16.0975455,17.0909091 17,17.0909091 C17.9024545,17.0909091 18.6363636,16.357 18.6363636,15.4545455 C18.6363636,14.5520909 17.9024545,13.8181818 17,13.8181818 Z M7,2 C8.35368182,2 9.45454545,3.10086364 9.45454545,4.45454545 C9.45454545,5.08781818 9.21154545,5.66422727 8.81595455,6.09990909 C10.3111818,6.19359091 11.5,7.43640909 11.5,8.95454545 L11.5,8.95454545 L11.5,10.5909091 C11.5,10.8171364 11.3171364,11 11.0909091,11 L11.0909091,11 L2.90909091,11 C2.68286364,11 2.5,10.8171364 2.5,10.5909091 L2.5,10.5909091 L2.5,8.95454545 C2.5,7.43640909 3.68881818,6.19359091 5.18404545,6.09990909 C4.78845455,5.66422727 4.54545455,5.08781818 4.54545455,4.45454545 C4.54545455,3.10086364 5.64631818,2 7,2 Z M15.2172785,2 L15.7828715,2.61457478 L14.8656829,3.61119428 L21.100005,3.61119428 C21.3212022,3.61119428 21.5,3.80547641 21.5,4.04582991 L21.5,4.04582991 L21.5,11 L20.70001,11 L20.70001,4.48046554 L14.8656829,4.48046554 L15.7828715,5.47708504 L15.2172785,6.09165983 L13.6172985,4.3531173 C13.4609005,4.18317477 13.4609005,3.90848505 13.6172985,3.73854252 L13.6172985,3.73854252 L15.2172785,2 Z M8.63636364,6.90909091 L5.36363636,6.90909091 C4.23577273,6.90909091 3.31818182,7.82668182 3.31818182,8.95454545 L3.31818182,8.95454545 L3.31818182,10.1818182 L10.6818182,10.1818182 L10.6818182,8.95454545 C10.6818182,7.82668182 9.76422727,6.90909091 8.63636364,6.90909091 L8.63636364,6.90909091 Z M7,2.81818182 C6.09754545,2.81818182 5.36363636,3.55209091 5.36363636,4.45454545 C5.36363636,5.357 6.09754545,6.09090909 7,6.09090909 C7.90245455,6.09090909 8.63636364,5.357 8.63636364,4.45454545 C8.63636364,3.55209091 7.90245455,2.81818182 7,2.81818182 Z"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0.3"
              ></path></svg
            >Relationships</a
          ><a
            id="tour-step-4"
            class="text-primary-300 hover:bg-black hover:bg-opacity-20 transition-colors flex items-center gap-x-3 px-4 py-2 text-sm font-medium"
            href="/profile"
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="flex-shrink-0 h-6 w-6"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
              ></path></svg
            >Profile</a
          ><a
            id=""
            class="text-primary-300 hover:bg-black hover:bg-opacity-20 transition-colors flex items-center gap-x-3 px-4 py-2 text-sm font-medium"
            href="/reports"
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="flex-shrink-0 h-6 w-6"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M864 518H506V160c0-4.4-3.6-8-8-8h-26a398.46 398.46 0 0 0-282.8 117.1 398.19 398.19 0 0 0-85.7 127.1A397.61 397.61 0 0 0 72 552a398.46 398.46 0 0 0 117.1 282.8c36.7 36.7 79.5 65.6 127.1 85.7A397.61 397.61 0 0 0 472 952a398.46 398.46 0 0 0 282.8-117.1c36.7-36.7 65.6-79.5 85.7-127.1A397.61 397.61 0 0 0 872 552v-26c0-4.4-3.6-8-8-8zM705.7 787.8A331.59 331.59 0 0 1 470.4 884c-88.1-.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552c0-88.7 34.5-172.1 97.2-234.8 54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8zM952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6A399.4 399.4 0 0 0 589 74.6L560.7 72c-4.7-.4-8.7 3.2-8.7 7.9V464c0 4.4 3.6 8 8 8l384-1c4.7 0 8.4-4 8-8.6zm-332.2-58.2V147.6a332.24 332.24 0 0 1 166.4 89.8c45.7 45.6 77 103.6 90 166.1l-256.4.7z"
              ></path></svg
            >Reports</a
          ><a
            id="tour-step-5"
            class="text-primary-300 hover:bg-black hover:bg-opacity-20 transition-colors flex items-center gap-x-3 px-4 py-2 text-sm font-medium"
            href="/logout"
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="flex-shrink-0 h-6 w-6"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"
              ></path></svg
            >Logout</a
          >
        </nav>
      </div>
      <button
        type="button"
        class="transition-colors w-full grid place-items-center px-4 py-2 text-sm font-medium text-primary-300 hover:bg-black hover:bg-opacity-20"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          class="mr-3 flex-shrink-0 h-6 w-6"
          aria-label="Collapse sidebar"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="flex-1 relative overflow-y-auto focus:outline-none">
      <main class="pt-20">
        <div class="pt-4">
          <header
            class="transition-all h-24 px-6 bg-secondary-300 fixed top-0 z-10 flex justify-between items-center lg:py-7 lg:px-8"
            style="width: calc(100% - 14rem)"
          >
            <div class="flex items-center gap-x-4">
              <h2 class="text-white text-xl font-medium">Edit Company</h2>
            </div>
          </header>
          <div class="m-5">
            <div
              class="relative shadow-lg rounded ring-1 ring-black ring-opacity-5 bg-gray-100"
            >
              <div class="py-6 px-4">
                <div
                  class="text-primary-300 transition-colors"
                  data-reach-tabs=""
                  data-orientation="horizontal"
                >
                  <div
                    role="tablist"
                    aria-orientation="horizontal"
                    class="mb-5 border-b-2 border-gray-200 bg-transparent flex overflow-x-auto overflow-y-hidden pb-3 sm:pb-0"
                    data-reach-tab-list=""
                  >
                    <button
                      aria-controls="tabs--2--panel--0"
                      aria-selected="true"
                      role="tab"
                      tabindex="0"
                      class="border-primary-300 text-black border-b-2 border-0 whitespace-nowrap font-medium py-2 px-2 text-xs select-none cursor-pointer transition-colors focus:outline-none active:bg-transparent"
                      data-reach-tab=""
                      data-orientation="horizontal"
                      id="tabs--2--tab--0"
                      type="button"
                      data-selected=""
                    >
                      General Information</button
                    ><button
                      aria-controls="tabs--2--panel--1"
                      aria-selected="false"
                      role="tab"
                      tabindex="-1"
                      class="border-secondary-100 text-secondary-200 hover:text-secondary-300 border-0 whitespace-nowrap font-medium py-2 px-2 text-xs select-none cursor-pointer transition-colors focus:outline-none active:bg-transparent"
                      data-reach-tab=""
                      data-orientation="horizontal"
                      id="tabs--2--tab--1"
                      type="button"
                    >
                      <div role="button" tabindex="0">
                        Configuration
                      </div></button
                    ><button
                      aria-controls="tabs--2--panel--2"
                      aria-selected="false"
                      role="tab"
                      tabindex="-1"
                      class="border-secondary-100 text-secondary-200 hover:text-secondary-300 border-0 whitespace-nowrap font-medium py-2 px-2 text-xs select-none cursor-pointer transition-colors focus:outline-none active:bg-transparent"
                      data-reach-tab=""
                      data-orientation="horizontal"
                      id="tabs--2--tab--2"
                      type="button"
                    >
                      Documents</button
                    ><button
                      aria-controls="tabs--2--panel--3"
                      aria-selected="false"
                      role="tab"
                      tabindex="-1"
                      class="border-secondary-100 text-secondary-200 hover:text-secondary-300 border-0 whitespace-nowrap font-medium py-2 px-2 text-xs select-none cursor-pointer transition-colors focus:outline-none active:bg-transparent"
                      data-reach-tab=""
                      data-orientation="horizontal"
                      id="tabs--2--tab--3"
                      type="button"
                    >
                      OTTOsign™
                    </button>
                  </div>
                  <div data-reach-tab-panels="">
                    <div
                      aria-labelledby="tabs--2--tab--0"
                      role="tabpanel"
                      tabindex="-1"
                      data-reach-tab-panel=""
                      id="tabs--2--panel--0"
                    >
                      <form
                        id="profile"
                        class="ant-form ant-form-vertical ant-form-hide-required-mark"
                      >
                        <div class="flex justify-between items-center">
                          <h3 class="font-bold text-primary-300">
                            Company details
                          </h3>
                          <div class="flex gap-x-6">
                            <button
                              id=""
                              type="submit"
                              class="inline-flex rounded-sm text-sm leading-4 px-3 py-1.5 border-transparent text-white bg-primary-300 shadow-sm hover:bg-primary-400 transition-colors items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-primary-300"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                        <p class="text-sm mt-3 md:mt-0">
                          Enter the necessary information for a system company.
                        </p>
                        <div
                          class="grid grid-cols-1 gap-x-6 mt-6 sm:grid-cols-2 md:grid-cols-4"
                        >
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_companyTypeId"
                                class="ant-form-item-required"
                                title="Type of company *"
                                >Type of company *</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <div
                                    class="ant-select ant-select-single ant-select-show-arrow ant-select-disabled"
                                  >
                                    <div class="ant-select-selector">
                                      <span class="ant-select-selection-search"
                                        ><input
                                          id="profile_companyTypeId"
                                          disabled=""
                                          autocomplete="off"
                                          type="search"
                                          class="ant-select-selection-search-input"
                                          role="combobox"
                                          aria-expanded="false"
                                          aria-haspopup="listbox"
                                          aria-owns="profile_companyTypeId_list"
                                          aria-autocomplete="list"
                                          aria-controls="profile_companyTypeId_list"
                                          aria-activedescendant="profile_companyTypeId_list_0"
                                          readonly=""
                                          unselectable="on"
                                          value=""
                                          style="opacity: 0" /></span
                                      ><span
                                        class="ant-select-selection-item"
                                        title="Dealer"
                                        >Dealer</span
                                      >
                                    </div>
                                    <span
                                      class="ant-select-arrow"
                                      unselectable="on"
                                      aria-hidden="true"
                                      style="user-select: none"
                                      ><span
                                        role="img"
                                        aria-label="down"
                                        class="anticon anticon-down ant-select-suffix"
                                        ><svg
                                          viewBox="64 64 896 896"
                                          focusable="false"
                                          data-icon="down"
                                          width="1em"
                                          height="1em"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                                          ></path></svg></span
                                    ></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_name"
                                class="ant-form-item-required"
                                title="Name *"
                                >Name *</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <input
                                    type="text"
                                    id="profile_name"
                                    class="ant-input"
                                    value="Neuville Inc"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_legalName"
                                class="ant-form-item-required"
                                title="Legal name *"
                                >Legal name *</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <input
                                    type="text"
                                    id="profile_legalName"
                                    class="ant-input"
                                    value="Neuville inc"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_accountingContactName"
                                class="ant-form-item-required"
                                title="Accounting contact name *"
                                >Accounting contact name *</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <input
                                    type="text"
                                    id="profile_accountingContactName"
                                    class="ant-input"
                                    value="Seth Groom"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_referenceNumber"
                                class=""
                                title="Reference number"
                                >Reference number</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <input
                                    type="text"
                                    id="profile_referenceNumber"
                                    class="ant-input"
                                    value=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_email"
                                class="ant-form-item-required"
                                title="Primary email address *"
                                >Primary email address *</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <input
                                    disabled=""
                                    type="text"
                                    id="profile_email"
                                    class="ant-input ant-input-disabled"
                                    value="ottotest125+neuville@gmail.com"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_phoneNumber"
                                class="ant-form-item-required"
                                title="Primary phone number *"
                                >Primary phone number *</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <input
                                    placeholder="(___) ___ ____"
                                    class="ant-input"
                                    id="profile_phoneNumber"
                                    type="text"
                                    value="5198798462"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_secundaryEmail"
                                class=""
                                title="Secondary email address"
                                >Secondary email address</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <input
                                    type="text"
                                    id="profile_secundaryEmail"
                                    class="ant-input"
                                    value=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_secundaryPhoneNumber"
                                class=""
                                title="Secondary phone number"
                                >Secondary phone number</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <input
                                    placeholder="(___) ___ ____"
                                    class="ant-input"
                                    id="profile_secundaryPhoneNumber"
                                    type="text"
                                    value=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_businessAddress"
                                class="ant-form-item-required"
                                title="Business address line 1*"
                                >Business address line 1*</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <input
                                    type="text"
                                    id="profile_businessAddress"
                                    class="ant-input"
                                    value="8925 Persisting Address"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_businessAddressLine2"
                                class=""
                                title="Business address line 2"
                                >Business address line 2</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <input
                                    type="text"
                                    id="profile_businessAddressLine2"
                                    class="ant-input"
                                    value=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_zipCode"
                                class="ant-form-item-required"
                                title="Zip code *"
                                >Zip code *</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <div class="flex">
                                    <input
                                      autocomplete="on"
                                      type="text"
                                      class="ant-input w-full"
                                      id="profile_zipCode"
                                      maxlength="10"
                                      value="85001"
                                    /><button
                                      type="button"
                                      aria-label="Search zipcode data"
                                      class="rounded-sm p-1.5 border-transparent text-white bg-primary-300 shadow-sm hover:bg-primary-400 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                    >
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 1024 1024"
                                        class="h-5 w-5"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                                        ></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_province"
                                class=""
                                title="County"
                                >County</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <input
                                    type="text"
                                    id="profile_province"
                                    class="ant-input"
                                    value="Maricopa"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_city"
                                class="ant-form-item-required"
                                title="City *"
                                >City *</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <input
                                    type="text"
                                    id="profile_city"
                                    class="ant-input"
                                    value="Phoenix"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_stateId"
                                class="ant-form-item-required"
                                title="State *"
                                >State *</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <div
                                    class="ant-select ant-select-single ant-select-show-arrow ant-select-show-search"
                                  >
                                    <div class="ant-select-selector">
                                      <span class="ant-select-selection-search"
                                        ><input
                                          id="profile_stateId"
                                          autocomplete="off"
                                          type="search"
                                          class="ant-select-selection-search-input"
                                          role="combobox"
                                          aria-haspopup="listbox"
                                          aria-owns="profile_stateId_list"
                                          aria-autocomplete="list"
                                          aria-controls="profile_stateId_list"
                                          aria-activedescendant="profile_stateId_list_0"
                                          value="" /></span
                                      ><span
                                        class="ant-select-selection-item"
                                        title="AZ"
                                        >AZ</span
                                      >
                                    </div>
                                    <span
                                      class="ant-select-arrow"
                                      unselectable="on"
                                      aria-hidden="true"
                                      style="user-select: none"
                                      ><span
                                        role="img"
                                        aria-label="down"
                                        class="anticon anticon-down ant-select-suffix"
                                        ><svg
                                          viewBox="64 64 896 896"
                                          focusable="false"
                                          data-icon="down"
                                          width="1em"
                                          height="1em"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                                          ></path></svg></span
                                    ></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_webSite"
                                class=""
                                title="Website"
                                >Website</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <input
                                    type="text"
                                    id="profile_webSite"
                                    class="ant-input"
                                    value="https://www.google.com/"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-row ant-form-item inline ant-form-item-has-success"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-label">
                              <label
                                for="profile_logoUrl"
                                class=""
                                title="Upload company's logo"
                                >Upload company's logo</label
                              >
                            </div>
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <span
                                    class="ant-upload-picture-card-wrapper overflow-hidden"
                                    ><div
                                      class="ant-upload ant-upload-select ant-upload-select-picture-card"
                                    >
                                      <span
                                        tabindex="0"
                                        class="ant-upload"
                                        role="button"
                                        ><input
                                          type="file"
                                          accept=""
                                          style="display: none"
                                        />
                                        <div
                                          class="h-full w-auto flex flex-col items-center justify-center"
                                        >
                                          <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            t="1551322312294"
                                            viewBox="0 0 1024 1024"
                                            version="1.1"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <defs></defs>
                                            <path
                                              d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"
                                            ></path>
                                            <path
                                              d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"
                                            ></path>
                                          </svg>
                                          <div class="mt-2">Upload</div>
                                        </div></span
                                      >
                                    </div></span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <hr class="border-t-2 border-gray-200 mb-4" />
                      <div class="sticky top-0 flex justify-start flex-col">
                        <h3 class="text-primary-300 text-base py-2">
                          Company Settings
                        </h3>
                        <div
                          class="text-primary-300 transition-colors"
                          data-reach-tabs=""
                          data-orientation="horizontal"
                        >
                          <div
                            role="tablist"
                            aria-orientation="horizontal"
                            class="border-b-2 border-gray-200 bg-transparent flex overflow-x-auto overflow-y-hidden pb-3 sm:pb-0"
                            data-reach-tab-list=""
                          >
                            <button
                              aria-controls="tabs--1--panel--0"
                              aria-selected="false"
                              role="tab"
                              tabindex="-1"
                              class="border-secondary-100 text-secondary-200 hover:text-secondary-300 border-0 whitespace-nowrap font-medium py-2 px-2 text-xs select-none cursor-pointer transition-colors focus:outline-none active:bg-transparent"
                              data-reach-tab=""
                              data-orientation="horizontal"
                              id="tabs--1--tab--0"
                              type="button"
                            >
                              Branches</button
                            ><button
                              aria-controls="tabs--1--panel--1"
                              aria-selected="false"
                              role="tab"
                              tabindex="-1"
                              class="border-secondary-100 text-secondary-200 hover:text-secondary-300 border-0 whitespace-nowrap font-medium py-2 px-2 text-xs select-none cursor-pointer transition-colors focus:outline-none active:bg-transparent"
                              data-reach-tab=""
                              data-orientation="horizontal"
                              id="tabs--1--tab--1"
                              type="button"
                            >
                              Store(s)</button
                            ><button
                              aria-controls="tabs--1--panel--2"
                              aria-selected="false"
                              role="tab"
                              tabindex="-1"
                              class="border-secondary-100 text-secondary-200 hover:text-secondary-300 border-0 whitespace-nowrap font-medium py-2 px-2 text-xs select-none cursor-pointer transition-colors focus:outline-none active:bg-transparent"
                              data-reach-tab=""
                              data-orientation="horizontal"
                              id="tabs--1--tab--2"
                              type="button"
                            >
                              Roles</button
                            ><button
                              aria-controls="tabs--1--panel--3"
                              aria-selected="true"
                              role="tab"
                              tabindex="0"
                              class="border-primary-300 text-black border-b-2 border-0 whitespace-nowrap font-medium py-2 px-2 text-xs select-none cursor-pointer transition-colors focus:outline-none active:bg-transparent"
                              data-reach-tab=""
                              data-orientation="horizontal"
                              id="tabs--1--tab--3"
                              type="button"
                              data-selected=""
                            >
                              Users
                            </button>
                          </div>
                          <div data-reach-tab-panels="">
                            <div
                              aria-labelledby="tabs--1--tab--0"
                              role="tabpanel"
                              tabindex="-1"
                              data-reach-tab-panel=""
                              id="tabs--1--panel--0"
                              hidden=""
                            >
                              <div class="space-y-4 py-4">
                                <form
                                  id="branchFilters"
                                  class="ant-form ant-form-inline grid grid-cols-12 items-center gap-x-4"
                                >
                                  <div
                                    class="ant-row ant-form-item col-span-12 mr-0 mb-3 md:col-span-9 md:mb-0 md:mr-4 lg:col-span-10"
                                    style="row-gap: 0px"
                                  >
                                    <div class="ant-col ant-form-item-control">
                                      <div class="ant-form-item-control-input">
                                        <div
                                          class="ant-form-item-control-input-content"
                                        >
                                          <span
                                            class="ant-input-group-wrapper ant-input-search"
                                            ><span
                                              class="ant-input-wrapper ant-input-group"
                                              ><span
                                                class="ant-input-affix-wrapper"
                                                ><input
                                                  placeholder="Search..."
                                                  id="branchFilters_search"
                                                  class="ant-input"
                                                  type="text"
                                                  value="" /><span
                                                  class="ant-input-suffix"
                                                  ><span
                                                    role="button"
                                                    aria-label="close-circle"
                                                    tabindex="-1"
                                                    class="anticon anticon-close-circle ant-input-clear-icon-hidden ant-input-clear-icon"
                                                    ><svg
                                                      viewBox="64 64 896 896"
                                                      focusable="false"
                                                      data-icon="close-circle"
                                                      width="1em"
                                                      height="1em"
                                                      fill="currentColor"
                                                      aria-hidden="true"
                                                    >
                                                      <path
                                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
                                                      ></path></svg></span></span></span
                                              ><span
                                                class="ant-input-group-addon"
                                                ><button
                                                  type="button"
                                                  class="ant-btn ant-btn-icon-only ant-input-search-button"
                                                >
                                                  <span
                                                    role="img"
                                                    aria-label="search"
                                                    class="anticon anticon-search"
                                                    ><svg
                                                      viewBox="64 64 896 896"
                                                      focusable="false"
                                                      data-icon="search"
                                                      width="1em"
                                                      height="1em"
                                                      fill="currentColor"
                                                      aria-hidden="true"
                                                    >
                                                      <path
                                                        d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                                                      ></path></svg
                                                  ></span></button></span></span
                                          ></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="col-span-12 md:col-span-3 lg:col-span-2"
                                  >
                                    <button
                                      id=""
                                      type="button"
                                      class="flex w-full rounded-sm text-sm leading-4 px-3 py-1.5 border-transparent text-white bg-primary-300 shadow-sm hover:bg-primary-400 transition-colors items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-primary-300"
                                    >
                                      Add new branch
                                    </button>
                                  </div>
                                </form>
                                <div class="ant-table-wrapper">
                                  <div class="ant-spin-nested-loading">
                                    <div class="ant-spin-container">
                                      <div
                                        class="ant-table ant-table-scroll-horizontal"
                                      >
                                        <div class="ant-table-container">
                                          <div
                                            class="ant-table-content"
                                            style="overflow: auto hidden"
                                          >
                                            <table
                                              style="
                                                width: 800px;
                                                min-width: 100%;
                                                table-layout: auto;
                                              "
                                            >
                                              <colgroup></colgroup>
                                              <thead class="ant-table-thead">
                                                <tr>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Branch name
                                                  </th>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    City
                                                  </th>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Date/time
                                                  </th>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Active users
                                                  </th>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Actions
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody class="ant-table-tbody">
                                                <tr
                                                  aria-hidden="true"
                                                  class="ant-table-measure-row"
                                                  style="
                                                    height: 0px;
                                                    font-size: 0px;
                                                  "
                                                >
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr
                                                  data-row-key="92058576-7472-43be-bac3-10243c0a5117"
                                                  class="ant-table-row ant-table-row-level-0"
                                                >
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Neuville
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Phoenix
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    05/16/2023, 3:30 pm
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    5
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    <div
                                                      class="flex items-center"
                                                    >
                                                      <span
                                                        ><button
                                                          type="button"
                                                          aria-label="Deactivate Branch"
                                                          class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            aria-hidden="true"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            ></path>
                                                            <path
                                                              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span
                                                        ><button
                                                          type="submit"
                                                          aria-label="Edit branch"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                                            ></path>
                                                          </svg></button
                                                      ></span>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr
                                                  data-row-key="d4273752-5552-4566-94c8-0c510ca2b43c"
                                                  class="ant-table-row ant-table-row-level-0"
                                                >
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Neuville
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Phoenix
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    05/18/2023, 4:20 pm
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    0
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    <div
                                                      class="flex items-center"
                                                    >
                                                      <span
                                                        ><button
                                                          type="button"
                                                          aria-label="Deactivate Branch"
                                                          class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            aria-hidden="true"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            ></path>
                                                            <path
                                                              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span
                                                        ><button
                                                          type="submit"
                                                          aria-label="Edit branch"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                                            ></path>
                                                          </svg></button
                                                      ></span>
                                                    </div>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                      <ul
                                        class="ant-pagination ant-table-pagination ant-table-pagination-right"
                                        unselectable="unselectable"
                                      >
                                        <li class="ant-pagination-total-text">
                                          Total records 2
                                        </li>
                                        <li
                                          title="Previous Page"
                                          class="ant-pagination-prev ant-pagination-disabled"
                                          aria-disabled="true"
                                        >
                                          <button
                                            class="ant-pagination-item-link"
                                            type="button"
                                            tabindex="-1"
                                            disabled=""
                                          >
                                            <span
                                              role="img"
                                              aria-label="left"
                                              class="anticon anticon-left"
                                              ><svg
                                                viewBox="64 64 896 896"
                                                focusable="false"
                                                data-icon="left"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                              >
                                                <path
                                                  d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                                                ></path></svg
                                            ></span>
                                          </button>
                                        </li>
                                        <li
                                          title="1"
                                          class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"
                                          tabindex="0"
                                        >
                                          <a rel="nofollow">1</a>
                                        </li>
                                        <li
                                          title="Next Page"
                                          class="ant-pagination-next ant-pagination-disabled"
                                          aria-disabled="true"
                                        >
                                          <button
                                            class="ant-pagination-item-link"
                                            type="button"
                                            tabindex="-1"
                                            disabled=""
                                          >
                                            <span
                                              role="img"
                                              aria-label="right"
                                              class="anticon anticon-right"
                                              ><svg
                                                viewBox="64 64 896 896"
                                                focusable="false"
                                                data-icon="right"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                              >
                                                <path
                                                  d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                                                ></path></svg
                                            ></span>
                                          </button>
                                        </li>
                                        <li class="ant-pagination-options">
                                          <div
                                            class="ant-select ant-pagination-options-size-changer ant-select-single ant-select-show-arrow"
                                            aria-label="Page Size"
                                          >
                                            <div class="ant-select-selector">
                                              <span
                                                class="ant-select-selection-search"
                                                ><input
                                                  autocomplete="off"
                                                  type="search"
                                                  class="ant-select-selection-search-input"
                                                  role="combobox"
                                                  aria-expanded="false"
                                                  aria-haspopup="listbox"
                                                  aria-owns="rc_select_12_list"
                                                  aria-autocomplete="list"
                                                  aria-controls="rc_select_12_list"
                                                  aria-activedescendant="rc_select_12_list_0"
                                                  aria-label="Page Size"
                                                  readonly=""
                                                  unselectable="on"
                                                  value=""
                                                  id="rc_select_12"
                                                  style="opacity: 0" /></span
                                              ><span
                                                class="ant-select-selection-item"
                                                title="10 / page"
                                                >10 / page</span
                                              >
                                            </div>
                                            <span
                                              class="ant-select-arrow"
                                              unselectable="on"
                                              aria-hidden="true"
                                              style="user-select: none"
                                              ><span
                                                role="img"
                                                aria-label="down"
                                                class="anticon anticon-down ant-select-suffix"
                                                ><svg
                                                  viewBox="64 64 896 896"
                                                  focusable="false"
                                                  data-icon="down"
                                                  width="1em"
                                                  height="1em"
                                                  fill="currentColor"
                                                  aria-hidden="true"
                                                >
                                                  <path
                                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                                                  ></path></svg></span
                                            ></span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              aria-labelledby="tabs--1--tab--1"
                              role="tabpanel"
                              tabindex="-1"
                              data-reach-tab-panel=""
                              id="tabs--1--panel--1"
                              hidden=""
                            >
                              <div class="space-y-4 py-4">
                                <form
                                  id="officeFilters"
                                  class="ant-form ant-form-inline grid grid-cols-12 items-center gap-x-4"
                                >
                                  <div
                                    class="ant-row ant-form-item col-span-12 mr-0 mb-3 md:col-span-9 md:mr-4 md:mb-0 lg:col-span-10"
                                    style="row-gap: 0px"
                                  >
                                    <div class="ant-col ant-form-item-control">
                                      <div class="ant-form-item-control-input">
                                        <div
                                          class="ant-form-item-control-input-content"
                                        >
                                          <span
                                            class="ant-input-group-wrapper ant-input-search"
                                            ><span
                                              class="ant-input-wrapper ant-input-group"
                                              ><span
                                                class="ant-input-affix-wrapper"
                                                ><input
                                                  placeholder="Search..."
                                                  id="officeFilters_search"
                                                  class="ant-input"
                                                  type="text"
                                                  value="" /><span
                                                  class="ant-input-suffix"
                                                  ><span
                                                    role="button"
                                                    aria-label="close-circle"
                                                    tabindex="-1"
                                                    class="anticon anticon-close-circle ant-input-clear-icon-hidden ant-input-clear-icon"
                                                    ><svg
                                                      viewBox="64 64 896 896"
                                                      focusable="false"
                                                      data-icon="close-circle"
                                                      width="1em"
                                                      height="1em"
                                                      fill="currentColor"
                                                      aria-hidden="true"
                                                    >
                                                      <path
                                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
                                                      ></path></svg></span></span></span
                                              ><span
                                                class="ant-input-group-addon"
                                                ><button
                                                  type="button"
                                                  class="ant-btn ant-btn-icon-only ant-input-search-button"
                                                >
                                                  <span
                                                    role="img"
                                                    aria-label="search"
                                                    class="anticon anticon-search"
                                                    ><svg
                                                      viewBox="64 64 896 896"
                                                      focusable="false"
                                                      data-icon="search"
                                                      width="1em"
                                                      height="1em"
                                                      fill="currentColor"
                                                      aria-hidden="true"
                                                    >
                                                      <path
                                                        d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                                                      ></path></svg
                                                  ></span></button></span></span
                                          ></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="col-span-12 md:col-span-3 lg:col-span-2"
                                  >
                                    <button
                                      id=""
                                      type="button"
                                      class="flex w-full rounded-sm text-sm leading-4 px-3 py-1.5 border-transparent text-white bg-primary-300 shadow-sm hover:bg-primary-400 transition-colors items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-primary-300"
                                    >
                                      Add new Store(s)
                                    </button>
                                  </div>
                                </form>
                                <div class="ant-table-wrapper">
                                  <div class="ant-spin-nested-loading">
                                    <div class="ant-spin-container">
                                      <div
                                        class="ant-table ant-table-scroll-horizontal"
                                      >
                                        <div class="ant-table-container">
                                          <div
                                            class="ant-table-content"
                                            style="overflow: auto hidden"
                                          >
                                            <table
                                              style="
                                                width: 800px;
                                                min-width: 100%;
                                                table-layout: auto;
                                              "
                                            >
                                              <colgroup></colgroup>
                                              <thead class="ant-table-thead">
                                                <tr>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Branch
                                                  </th>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Store(s) name
                                                  </th>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    City
                                                  </th>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Date/time
                                                  </th>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Active users
                                                  </th>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Actions
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody class="ant-table-tbody">
                                                <tr
                                                  aria-hidden="true"
                                                  class="ant-table-measure-row"
                                                  style="
                                                    height: 0px;
                                                    font-size: 0px;
                                                  "
                                                >
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr
                                                  data-row-key="6910ff7b-9f79-46b0-8294-525673a6cef4"
                                                  class="ant-table-row ant-table-row-level-0"
                                                >
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Neuville
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Neuville Store 2
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Phoenix
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    05/18/2023, 4:20 pm
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    0
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    <div
                                                      class="flex items-center"
                                                    >
                                                      <span
                                                        ><button
                                                          type="button"
                                                          aria-label="Deactivate Store(s)"
                                                          class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            aria-hidden="true"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            ></path>
                                                            <path
                                                              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span
                                                        ><button
                                                          type="submit"
                                                          aria-label="Edit office"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span class="ml-1"
                                                        ><button
                                                          type="submit"
                                                          aria-label="Subscriptions"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 24 24"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              fill="none"
                                                              d="M0 0h24v24H0z"
                                                            ></path>
                                                            <path
                                                              d="M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span class="ml-1"
                                                        ><button
                                                          type="submit"
                                                          aria-label="Change the office"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 0 1 0 33.9M694 864h64a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v688a8 8 0 0 0 8 8"
                                                            ></path>
                                                          </svg></button
                                                      ></span>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr
                                                  data-row-key="08fb00ee-0b15-49cf-8c6a-ddd8b4d59223"
                                                  class="ant-table-row ant-table-row-level-0"
                                                >
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Neuville
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Neuville Store 1
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Phoenix
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    05/16/2023, 3:30 pm
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    5
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    <div
                                                      class="flex items-center"
                                                    >
                                                      <span
                                                        ><button
                                                          type="button"
                                                          aria-label="Deactivate Store(s)"
                                                          class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            aria-hidden="true"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            ></path>
                                                            <path
                                                              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span
                                                        ><button
                                                          type="submit"
                                                          aria-label="Edit office"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span class="ml-1"
                                                        ><button
                                                          type="submit"
                                                          aria-label="Subscriptions"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 24 24"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              fill="none"
                                                              d="M0 0h24v24H0z"
                                                            ></path>
                                                            <path
                                                              d="M20 6H10v2h10v12H4V8h2v4h2V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span class="ml-1"
                                                        ><button
                                                          type="submit"
                                                          aria-label="Change the office"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 0 1 0 33.9M694 864h64a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v688a8 8 0 0 0 8 8"
                                                            ></path>
                                                          </svg></button
                                                      ></span>
                                                    </div>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                      <ul
                                        class="ant-pagination ant-table-pagination ant-table-pagination-right"
                                        unselectable="unselectable"
                                      >
                                        <li class="ant-pagination-total-text">
                                          Total records 2
                                        </li>
                                        <li
                                          title="Previous Page"
                                          class="ant-pagination-prev ant-pagination-disabled"
                                          aria-disabled="true"
                                        >
                                          <button
                                            class="ant-pagination-item-link"
                                            type="button"
                                            tabindex="-1"
                                            disabled=""
                                          >
                                            <span
                                              role="img"
                                              aria-label="left"
                                              class="anticon anticon-left"
                                              ><svg
                                                viewBox="64 64 896 896"
                                                focusable="false"
                                                data-icon="left"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                              >
                                                <path
                                                  d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                                                ></path></svg
                                            ></span>
                                          </button>
                                        </li>
                                        <li
                                          title="1"
                                          class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"
                                          tabindex="0"
                                        >
                                          <a rel="nofollow">1</a>
                                        </li>
                                        <li
                                          title="Next Page"
                                          class="ant-pagination-next ant-pagination-disabled"
                                          aria-disabled="true"
                                        >
                                          <button
                                            class="ant-pagination-item-link"
                                            type="button"
                                            tabindex="-1"
                                            disabled=""
                                          >
                                            <span
                                              role="img"
                                              aria-label="right"
                                              class="anticon anticon-right"
                                              ><svg
                                                viewBox="64 64 896 896"
                                                focusable="false"
                                                data-icon="right"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                              >
                                                <path
                                                  d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                                                ></path></svg
                                            ></span>
                                          </button>
                                        </li>
                                        <li class="ant-pagination-options">
                                          <div
                                            class="ant-select ant-pagination-options-size-changer ant-select-single ant-select-show-arrow"
                                            aria-label="Page Size"
                                          >
                                            <div class="ant-select-selector">
                                              <span
                                                class="ant-select-selection-search"
                                                ><input
                                                  autocomplete="off"
                                                  type="search"
                                                  class="ant-select-selection-search-input"
                                                  role="combobox"
                                                  aria-expanded="false"
                                                  aria-haspopup="listbox"
                                                  aria-owns="rc_select_16_list"
                                                  aria-autocomplete="list"
                                                  aria-controls="rc_select_16_list"
                                                  aria-activedescendant="rc_select_16_list_0"
                                                  aria-label="Page Size"
                                                  readonly=""
                                                  unselectable="on"
                                                  value=""
                                                  id="rc_select_16"
                                                  style="opacity: 0" /></span
                                              ><span
                                                class="ant-select-selection-item"
                                                title="10 / page"
                                                >10 / page</span
                                              >
                                            </div>
                                            <span
                                              class="ant-select-arrow"
                                              unselectable="on"
                                              aria-hidden="true"
                                              style="user-select: none"
                                              ><span
                                                role="img"
                                                aria-label="down"
                                                class="anticon anticon-down ant-select-suffix"
                                                ><svg
                                                  viewBox="64 64 896 896"
                                                  focusable="false"
                                                  data-icon="down"
                                                  width="1em"
                                                  height="1em"
                                                  fill="currentColor"
                                                  aria-hidden="true"
                                                >
                                                  <path
                                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                                                  ></path></svg></span
                                            ></span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              aria-labelledby="tabs--1--tab--2"
                              role="tabpanel"
                              tabindex="-1"
                              data-reach-tab-panel=""
                              id="tabs--1--panel--2"
                              hidden=""
                            >
                              <div>
                                <div class="space-y-4 pt-4">
                                  <form
                                    class="ant-form ant-form-inline w-full grid grid-cols-9 items-center gap-x-3 lg:grid-cols-12"
                                  >
                                    <div
                                      class="ant-row ant-form-item col-span-8 md:col-span-6 mr-0"
                                      style="row-gap: 0px"
                                    >
                                      <div
                                        class="ant-col ant-form-item-control"
                                      >
                                        <div
                                          class="ant-form-item-control-input"
                                        >
                                          <div
                                            class="ant-form-item-control-input-content"
                                          >
                                            <span
                                              class="ant-input-group-wrapper ant-input-search"
                                              ><span
                                                class="ant-input-wrapper ant-input-group"
                                                ><span
                                                  class="ant-input-affix-wrapper"
                                                  ><input
                                                    placeholder="Search..."
                                                    id="search"
                                                    class="ant-input"
                                                    type="text"
                                                    value="" /><span
                                                    class="ant-input-suffix"
                                                    ><span
                                                      role="button"
                                                      aria-label="close-circle"
                                                      tabindex="-1"
                                                      class="anticon anticon-close-circle ant-input-clear-icon-hidden ant-input-clear-icon"
                                                      ><svg
                                                        viewBox="64 64 896 896"
                                                        focusable="false"
                                                        data-icon="close-circle"
                                                        width="1em"
                                                        height="1em"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                      >
                                                        <path
                                                          d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
                                                        ></path></svg></span></span></span
                                                ><span
                                                  class="ant-input-group-addon"
                                                  ><button
                                                    type="button"
                                                    class="ant-btn ant-btn-icon-only ant-input-search-button"
                                                  >
                                                    <span
                                                      role="img"
                                                      aria-label="search"
                                                      class="anticon anticon-search"
                                                      ><svg
                                                        viewBox="64 64 896 896"
                                                        focusable="false"
                                                        data-icon="search"
                                                        width="1em"
                                                        height="1em"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                      >
                                                        <path
                                                          d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                                                        ></path></svg
                                                    ></span></button></span></span
                                            ></span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="ant-row ant-form-item col-span-2 md:col-span-3 mr-0"
                                      style="row-gap: 0px"
                                    >
                                      <div
                                        class="ant-col ant-form-item-control"
                                      >
                                        <div
                                          class="ant-form-item-control-input"
                                        >
                                          <div
                                            class="ant-form-item-control-input-content"
                                          >
                                            <div
                                              class="ant-select ant-select-single ant-select-allow-clear ant-select-show-arrow"
                                            >
                                              <div class="ant-select-selector">
                                                <span
                                                  class="ant-select-selection-search"
                                                  ><input
                                                    id="isActive"
                                                    autocomplete="off"
                                                    type="search"
                                                    class="ant-select-selection-search-input"
                                                    role="combobox"
                                                    aria-haspopup="listbox"
                                                    aria-owns="isActive_list"
                                                    aria-autocomplete="list"
                                                    aria-controls="isActive_list"
                                                    aria-activedescendant="isActive_list_0"
                                                    readonly=""
                                                    unselectable="on"
                                                    value=""
                                                    style="opacity: 0" /></span
                                                ><span
                                                  class="ant-select-selection-placeholder"
                                                  >Status</span
                                                >
                                              </div>
                                              <span
                                                class="ant-select-arrow"
                                                unselectable="on"
                                                aria-hidden="true"
                                                style="user-select: none"
                                                ><span
                                                  role="img"
                                                  aria-label="down"
                                                  class="anticon anticon-down ant-select-suffix"
                                                  ><svg
                                                    viewBox="64 64 896 896"
                                                    focusable="false"
                                                    data-icon="down"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                  >
                                                    <path
                                                      d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                                                    ></path></svg></span
                                              ></span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="justify-self-end mr-5">
                                      <button
                                        type="button"
                                        aria-label="reset fields"
                                        class="rounded-sm p-1 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                      >
                                        <svg
                                          stroke="currentColor"
                                          fill="currentColor"
                                          stroke-width="0"
                                          t="1569683368540"
                                          viewBox="0 0 1024 1024"
                                          version="1.1"
                                          class="h-5 w-5"
                                          height="1em"
                                          width="1em"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <defs></defs>
                                          <path
                                            d="M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-0.3 1.5-0.4 3-0.4 4.4 0 14.4 11.6 26 26 26h723c1.5 0 3-0.1 4.4-0.4 14.2-2.4 23.7-15.9 21.2-30zM204 390h272V182h72v208h272v104H204V390z m468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"
                                          ></path>
                                        </svg>
                                      </button>
                                    </div>
                                    <button
                                      id=""
                                      type="submit"
                                      class="flex w-full rounded-sm text-sm leading-4 px-3 py-1.5 border-transparent text-white bg-primary-300 shadow-sm hover:bg-primary-400 transition-colors items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-primary-300 justify-self-end col-span-9 md:col-span-2 mt-3 md:mt-0"
                                    >
                                      Add new Role
                                    </button>
                                  </form>
                                  <div class="ant-table-wrapper">
                                    <div class="ant-spin-nested-loading">
                                      <div class="ant-spin-container">
                                        <div
                                          class="ant-table ant-table-fixed-column ant-table-scroll-horizontal ant-table-has-fix-left"
                                        >
                                          <div class="ant-table-container">
                                            <div
                                              class="ant-table-content"
                                              style="overflow: auto hidden"
                                            >
                                              <table
                                                style="
                                                  width: auto;
                                                  min-width: 100%;
                                                  table-layout: fixed;
                                                "
                                              >
                                                <colgroup></colgroup>
                                                <thead class="ant-table-thead">
                                                  <tr>
                                                    <th
                                                      class="ant-table-cell w-40 ant-table-cell-fix-left ant-table-cell-fix-left-last"
                                                      style="
                                                        position: sticky;
                                                        left: 0px;
                                                      "
                                                    >
                                                      Role Name
                                                    </th>
                                                    <th class="ant-table-cell">
                                                      Role Type
                                                    </th>
                                                    <th class="ant-table-cell">
                                                      Date/time
                                                    </th>
                                                    <th class="ant-table-cell">
                                                      Actions
                                                    </th>
                                                  </tr>
                                                </thead>
                                                <tbody class="ant-table-tbody">
                                                  <tr
                                                    aria-hidden="true"
                                                    class="ant-table-measure-row"
                                                    style="
                                                      height: 0px;
                                                      font-size: 0px;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        padding: 0px;
                                                        border: 0px;
                                                        height: 0px;
                                                      "
                                                    >
                                                      <div
                                                        style="
                                                          height: 0px;
                                                          overflow: hidden;
                                                        "
                                                      >
                                                        &nbsp;
                                                      </div>
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0px;
                                                        border: 0px;
                                                        height: 0px;
                                                      "
                                                    >
                                                      <div
                                                        style="
                                                          height: 0px;
                                                          overflow: hidden;
                                                        "
                                                      >
                                                        &nbsp;
                                                      </div>
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0px;
                                                        border: 0px;
                                                        height: 0px;
                                                      "
                                                    >
                                                      <div
                                                        style="
                                                          height: 0px;
                                                          overflow: hidden;
                                                        "
                                                      >
                                                        &nbsp;
                                                      </div>
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0px;
                                                        border: 0px;
                                                        height: 0px;
                                                      "
                                                    >
                                                      <div
                                                        style="
                                                          height: 0px;
                                                          overflow: hidden;
                                                        "
                                                      >
                                                        &nbsp;
                                                      </div>
                                                    </td>
                                                  </tr>
                                                  <tr
                                                    data-row-key="60d5cf39-cee5-4993-9f8f-a6deb37721d6"
                                                    class="ant-table-row ant-table-row-level-0 text-secondary-100"
                                                  >
                                                    <td
                                                      class="ant-table-cell w-40 ant-table-cell-fix-left ant-table-cell-fix-left-last"
                                                      style="
                                                        position: sticky;
                                                        left: 0px;
                                                      "
                                                    >
                                                      test
                                                    </td>
                                                    <td class="ant-table-cell">
                                                      Dealer
                                                    </td>
                                                    <td class="ant-table-cell">
                                                      07/11/2023, 9:39 am
                                                    </td>
                                                    <td class="ant-table-cell">
                                                      <div
                                                        class="flex items-center gap-x-3"
                                                      >
                                                        <span
                                                          ><button
                                                            type="button"
                                                            aria-label="Activate Role"
                                                            class="text-red hover:bg-red p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                          >
                                                            <svg
                                                              stroke="currentColor"
                                                              fill="currentColor"
                                                              stroke-width="0"
                                                              viewBox="0 0 1024 1024"
                                                              aria-hidden="true"
                                                              class="h-5 w-5"
                                                              height="1em"
                                                              width="1em"
                                                              xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                              <path
                                                                d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
                                                              ></path>
                                                              <path
                                                                d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                                              ></path>
                                                            </svg></button></span
                                                        ><button
                                                          type="submit"
                                                          aria-label="Edit role"
                                                          class="rounded-sm p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                                            ></path>
                                                          </svg>
                                                        </button>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                  <tr
                                                    data-row-key="a075b0b5-0f8d-4079-8ec8-ab24ed875e6c"
                                                    class="ant-table-row ant-table-row-level-0"
                                                  >
                                                    <td
                                                      class="ant-table-cell w-40 ant-table-cell-fix-left ant-table-cell-fix-left-last"
                                                      style="
                                                        position: sticky;
                                                        left: 0px;
                                                      "
                                                    >
                                                      Admin dealer
                                                    </td>
                                                    <td class="ant-table-cell">
                                                      Admin dealer
                                                    </td>
                                                    <td class="ant-table-cell">
                                                      05/16/2023, 2:37 pm
                                                    </td>
                                                    <td class="ant-table-cell">
                                                      <div
                                                        class="flex items-center gap-x-3"
                                                      >
                                                        <span
                                                          ><button
                                                            type="button"
                                                            aria-label="Deactivate Role"
                                                            class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                          >
                                                            <svg
                                                              stroke="currentColor"
                                                              fill="currentColor"
                                                              stroke-width="0"
                                                              viewBox="0 0 1024 1024"
                                                              aria-hidden="true"
                                                              class="h-5 w-5"
                                                              height="1em"
                                                              width="1em"
                                                              xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                              <path
                                                                d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                              ></path>
                                                              <path
                                                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                                              ></path>
                                                            </svg></button></span
                                                        ><button
                                                          type="submit"
                                                          aria-label="Edit role"
                                                          class="rounded-sm p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                                            ></path>
                                                          </svg>
                                                        </button>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                        </div>
                                        <ul
                                          class="ant-pagination ant-table-pagination ant-table-pagination-right"
                                          unselectable="unselectable"
                                        >
                                          <li class="ant-pagination-total-text">
                                            Total records 2
                                          </li>
                                          <li
                                            title="Previous Page"
                                            class="ant-pagination-prev ant-pagination-disabled"
                                            aria-disabled="true"
                                          >
                                            <button
                                              class="ant-pagination-item-link"
                                              type="button"
                                              tabindex="-1"
                                              disabled=""
                                            >
                                              <span
                                                role="img"
                                                aria-label="left"
                                                class="anticon anticon-left"
                                                ><svg
                                                  viewBox="64 64 896 896"
                                                  focusable="false"
                                                  data-icon="left"
                                                  width="1em"
                                                  height="1em"
                                                  fill="currentColor"
                                                  aria-hidden="true"
                                                >
                                                  <path
                                                    d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                                                  ></path></svg
                                              ></span>
                                            </button>
                                          </li>
                                          <li
                                            title="1"
                                            class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"
                                            tabindex="0"
                                          >
                                            <a rel="nofollow">1</a>
                                          </li>
                                          <li
                                            title="Next Page"
                                            class="ant-pagination-next ant-pagination-disabled"
                                            aria-disabled="true"
                                          >
                                            <button
                                              class="ant-pagination-item-link"
                                              type="button"
                                              tabindex="-1"
                                              disabled=""
                                            >
                                              <span
                                                role="img"
                                                aria-label="right"
                                                class="anticon anticon-right"
                                                ><svg
                                                  viewBox="64 64 896 896"
                                                  focusable="false"
                                                  data-icon="right"
                                                  width="1em"
                                                  height="1em"
                                                  fill="currentColor"
                                                  aria-hidden="true"
                                                >
                                                  <path
                                                    d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                                                  ></path></svg
                                              ></span>
                                            </button>
                                          </li>
                                          <li class="ant-pagination-options">
                                            <div
                                              class="ant-select ant-pagination-options-size-changer ant-select-single ant-select-show-arrow"
                                              aria-label="Page Size"
                                            >
                                              <div class="ant-select-selector">
                                                <span
                                                  class="ant-select-selection-search"
                                                  ><input
                                                    autocomplete="off"
                                                    type="search"
                                                    class="ant-select-selection-search-input"
                                                    role="combobox"
                                                    aria-expanded="false"
                                                    aria-haspopup="listbox"
                                                    aria-owns="rc_select_15_list"
                                                    aria-autocomplete="list"
                                                    aria-controls="rc_select_15_list"
                                                    aria-activedescendant="rc_select_15_list_0"
                                                    aria-label="Page Size"
                                                    readonly=""
                                                    unselectable="on"
                                                    value=""
                                                    id="rc_select_15"
                                                    style="opacity: 0" /></span
                                                ><span
                                                  class="ant-select-selection-item"
                                                  title="10 / page"
                                                  >10 / page</span
                                                >
                                              </div>
                                              <span
                                                class="ant-select-arrow"
                                                unselectable="on"
                                                aria-hidden="true"
                                                style="user-select: none"
                                                ><span
                                                  role="img"
                                                  aria-label="down"
                                                  class="anticon anticon-down ant-select-suffix"
                                                  ><svg
                                                    viewBox="64 64 896 896"
                                                    focusable="false"
                                                    data-icon="down"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                  >
                                                    <path
                                                      d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                                                    ></path></svg></span
                                              ></span>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              aria-labelledby="tabs--1--tab--3"
                              role="tabpanel"
                              tabindex="-1"
                              data-reach-tab-panel=""
                              id="tabs--1--panel--3"
                            >
                              <div class="space-y-4 py-4">
                                <form
                                  id="userFilters"
                                  class="ant-form ant-form-inline grid grid-cols-12 items-center gap-x-4"
                                >
                                  <div
                                    class="ant-row ant-form-item col-span-12 mr-0 mb-3 md:col-span-9 md:mr-4 md:mb-0 lg:col-span-10"
                                    style="row-gap: 0px"
                                  >
                                    <div class="ant-col ant-form-item-control">
                                      <div class="ant-form-item-control-input">
                                        <div
                                          class="ant-form-item-control-input-content"
                                        >
                                          <span
                                            class="ant-input-group-wrapper ant-input-search"
                                            ><span
                                              class="ant-input-wrapper ant-input-group"
                                              ><span
                                                class="ant-input-affix-wrapper"
                                                ><input
                                                  placeholder="Search..."
                                                  id="userFilters_search"
                                                  class="ant-input"
                                                  type="text"
                                                  value="" /><span
                                                  class="ant-input-suffix"
                                                  ><span
                                                    role="button"
                                                    aria-label="close-circle"
                                                    tabindex="-1"
                                                    class="anticon anticon-close-circle ant-input-clear-icon-hidden ant-input-clear-icon"
                                                    ><svg
                                                      viewBox="64 64 896 896"
                                                      focusable="false"
                                                      data-icon="close-circle"
                                                      width="1em"
                                                      height="1em"
                                                      fill="currentColor"
                                                      aria-hidden="true"
                                                    >
                                                      <path
                                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
                                                      ></path></svg></span></span></span
                                              ><span
                                                class="ant-input-group-addon"
                                                ><button
                                                  type="button"
                                                  class="ant-btn ant-btn-icon-only ant-input-search-button"
                                                >
                                                  <span
                                                    role="img"
                                                    aria-label="search"
                                                    class="anticon anticon-search"
                                                    ><svg
                                                      viewBox="64 64 896 896"
                                                      focusable="false"
                                                      data-icon="search"
                                                      width="1em"
                                                      height="1em"
                                                      fill="currentColor"
                                                      aria-hidden="true"
                                                    >
                                                      <path
                                                        d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                                                      ></path></svg
                                                  ></span></button></span></span
                                          ></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="col-span-12 md:col-span-3 lg:col-span-2"
                                  >
                                    <button
                                      id=""
                                      type="button"
                                      class="flex w-full rounded-sm text-sm leading-4 px-3 py-1.5 border-transparent text-white bg-primary-300 shadow-sm hover:bg-primary-400 transition-colors items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-primary-300"
                                    >
                                      Add new user
                                    </button>
                                  </div>
                                </form>
                                <div class="ant-table-wrapper">
                                  <div class="ant-spin-nested-loading">
                                    <div class="ant-spin-container">
                                      <div
                                        class="ant-table ant-table-scroll-horizontal"
                                      >
                                        <div class="ant-table-container">
                                          <div
                                            class="ant-table-content"
                                            style="overflow: auto hidden"
                                          >
                                            <table
                                              style="
                                                width: 800px;
                                                min-width: 100%;
                                                table-layout: auto;
                                              "
                                            >
                                              <colgroup></colgroup>
                                              <thead class="ant-table-thead">
                                                <tr>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Last name
                                                  </th>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    First name
                                                  </th>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Role
                                                  </th>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Store(s)
                                                  </th>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Date/Time
                                                  </th>
                                                  <th
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Actions
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody class="ant-table-tbody">
                                                <tr
                                                  aria-hidden="true"
                                                  class="ant-table-measure-row"
                                                  style="
                                                    height: 0px;
                                                    font-size: 0px;
                                                  "
                                                >
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                  <td
                                                    style="
                                                      padding: 0px;
                                                      border: 0px;
                                                      height: 0px;
                                                    "
                                                  >
                                                    <div
                                                      style="
                                                        height: 0px;
                                                        overflow: hidden;
                                                      "
                                                    >
                                                      &nbsp;
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr
                                                  data-row-key="70aa57f5-ee38-4e17-b257-03d338841555"
                                                  class="ant-table-row ant-table-row-level-0"
                                                >
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Groom
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Seth
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Admin dealer
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Neuville Store 1
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    05/16/2023, 2:38 pm
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    <div
                                                      class="flex items-center gap-x-3"
                                                    >
                                                      <span
                                                        ><button
                                                          type="button"
                                                          aria-label="Deactivate User"
                                                          class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            aria-hidden="true"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            ></path>
                                                            <path
                                                              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span
                                                        ><button
                                                          type="button"
                                                          aria-label="Edit user"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span
                                                        ><button
                                                          type="button"
                                                          aria-label="Delete user permanently"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                                            ></path>
                                                          </svg></button
                                                      ></span>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr
                                                  data-row-key="63d2e431-6a89-47dd-9d7b-0ca07e9c344d"
                                                  class="ant-table-row ant-table-row-level-0"
                                                >
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Rigor
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Test
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Admin dealer
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Neuville Store 1
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    07/06/2023, 2:39 pm
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    <div
                                                      class="flex items-center gap-x-3"
                                                    >
                                                      <span
                                                        ><button
                                                          type="button"
                                                          aria-label="Deactivate User"
                                                          class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            aria-hidden="true"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            ></path>
                                                            <path
                                                              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span
                                                        ><button
                                                          type="button"
                                                          aria-label="Edit user"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span
                                                        ><button
                                                          type="button"
                                                          aria-label="Delete user permanently"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                                            ></path>
                                                          </svg></button
                                                      ></span>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr
                                                  data-row-key="d9a668b4-0c28-4432-8525-09d285621683"
                                                  class="ant-table-row ant-table-row-level-0"
                                                >
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    rigor2
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    test2
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Admin dealer
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Neuville Store 1
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    07/11/2023, 10:24 am
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    <div
                                                      class="flex items-center gap-x-3"
                                                    >
                                                      <span
                                                        ><button
                                                          type="button"
                                                          aria-label="Deactivate User"
                                                          class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            aria-hidden="true"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            ></path>
                                                            <path
                                                              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span
                                                        ><button
                                                          type="button"
                                                          aria-label="Edit user"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span
                                                        ><button
                                                          type="button"
                                                          aria-label="Delete user permanently"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                                            ></path>
                                                          </svg></button
                                                      ></span>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr
                                                  data-row-key="75190eea-2084-487a-bfca-fd97ba6d362f"
                                                  class="ant-table-row ant-table-row-level-0"
                                                >
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Rigor
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Test
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Admin dealer
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Neuville Store 1
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    07/12/2023, 11:40 am
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    <div
                                                      class="flex items-center gap-x-3"
                                                    >
                                                      <span
                                                        ><button
                                                          type="button"
                                                          aria-label="Deactivate User"
                                                          class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            aria-hidden="true"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            ></path>
                                                            <path
                                                              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span
                                                        ><button
                                                          type="button"
                                                          aria-label="Edit user"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span
                                                        ><button
                                                          type="button"
                                                          aria-label="Delete user permanently"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                                            ></path>
                                                          </svg></button
                                                      ></span>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr
                                                  data-row-key="1f91852b-4f24-414b-af90-33b494d45a0d"
                                                  class="ant-table-row ant-table-row-level-0"
                                                >
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Arbelaez
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Johan
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Neuville
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    Neuville Store 1
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    05/31/2023, 11:52 am
                                                  </td>
                                                  <td
                                                    class="ant-table-cell w-40"
                                                  >
                                                    <div
                                                      class="flex items-center gap-x-3"
                                                    >
                                                      <span
                                                        ><button
                                                          type="button"
                                                          aria-label="Deactivate User"
                                                          class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            aria-hidden="true"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            ></path>
                                                            <path
                                                              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span
                                                        ><button
                                                          type="button"
                                                          aria-label="Edit user"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                                            ></path>
                                                          </svg></button></span
                                                      ><span
                                                        ><button
                                                          type="button"
                                                          aria-label="Delete user permanently"
                                                          class="rounded-full p-1.5 border-primary-300 text-primary-300 hover:text-primary-400 hover:bg-primary-300 hover:bg-opacity-5 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                        >
                                                          <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            stroke-width="0"
                                                            viewBox="0 0 1024 1024"
                                                            class="h-5 w-5"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                          >
                                                            <path
                                                              d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                                            ></path>
                                                          </svg></button
                                                      ></span>
                                                    </div>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                      <ul
                                        class="ant-pagination ant-table-pagination ant-table-pagination-right"
                                        unselectable="unselectable"
                                      >
                                        <li class="ant-pagination-total-text">
                                          Total records 5
                                        </li>
                                        <li
                                          title="Previous Page"
                                          class="ant-pagination-prev ant-pagination-disabled"
                                          aria-disabled="true"
                                        >
                                          <button
                                            class="ant-pagination-item-link"
                                            type="button"
                                            tabindex="-1"
                                            disabled=""
                                          >
                                            <span
                                              role="img"
                                              aria-label="left"
                                              class="anticon anticon-left"
                                              ><svg
                                                viewBox="64 64 896 896"
                                                focusable="false"
                                                data-icon="left"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                              >
                                                <path
                                                  d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                                                ></path></svg
                                            ></span>
                                          </button>
                                        </li>
                                        <li
                                          title="1"
                                          class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"
                                          tabindex="0"
                                        >
                                          <a rel="nofollow">1</a>
                                        </li>
                                        <li
                                          title="Next Page"
                                          class="ant-pagination-next ant-pagination-disabled"
                                          aria-disabled="true"
                                        >
                                          <button
                                            class="ant-pagination-item-link"
                                            type="button"
                                            tabindex="-1"
                                            disabled=""
                                          >
                                            <span
                                              role="img"
                                              aria-label="right"
                                              class="anticon anticon-right"
                                              ><svg
                                                viewBox="64 64 896 896"
                                                focusable="false"
                                                data-icon="right"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                              >
                                                <path
                                                  d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                                                ></path></svg
                                            ></span>
                                          </button>
                                        </li>
                                        <li class="ant-pagination-options">
                                          <div
                                            class="ant-select ant-pagination-options-size-changer ant-select-single ant-select-show-arrow"
                                            aria-label="Page Size"
                                          >
                                            <div class="ant-select-selector">
                                              <span
                                                class="ant-select-selection-search"
                                                ><input
                                                  autocomplete="off"
                                                  type="search"
                                                  class="ant-select-selection-search-input"
                                                  role="combobox"
                                                  aria-expanded="false"
                                                  aria-haspopup="listbox"
                                                  aria-owns="rc_select_17_list"
                                                  aria-autocomplete="list"
                                                  aria-controls="rc_select_17_list"
                                                  aria-activedescendant="rc_select_17_list_0"
                                                  aria-label="Page Size"
                                                  readonly=""
                                                  unselectable="on"
                                                  value=""
                                                  id="rc_select_17"
                                                  style="opacity: 0" /></span
                                              ><span
                                                class="ant-select-selection-item"
                                                title="10 / page"
                                                >10 / page</span
                                              >
                                            </div>
                                            <span
                                              class="ant-select-arrow"
                                              unselectable="on"
                                              aria-hidden="true"
                                              style="user-select: none"
                                              ><span
                                                role="img"
                                                aria-label="down"
                                                class="anticon anticon-down ant-select-suffix"
                                                ><svg
                                                  viewBox="64 64 896 896"
                                                  focusable="false"
                                                  data-icon="down"
                                                  width="1em"
                                                  height="1em"
                                                  fill="currentColor"
                                                  aria-hidden="true"
                                                >
                                                  <path
                                                    d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                                                  ></path></svg></span
                                            ></span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-labelledby="tabs--2--tab--1"
                      role="tabpanel"
                      tabindex="-1"
                      data-reach-tab-panel=""
                      id="tabs--2--panel--1"
                      hidden=""
                    >
                      <div>
                        <div
                          class="ant-row"
                          style="
                            margin-left: -8px;
                            margin-right: -8px;
                            row-gap: 16px;
                          "
                        >
                          <div
                            class="ant-col w-full ant-col-xs-32 ant-col-sm-12 ant-col-md-6"
                            style="padding-left: 8px; padding-right: 8px"
                          >
                            <div
                              class="ant-card ant-card-bordered ant-card-hoverable h-full hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-t-2 hover:border-primary-300"
                            >
                              <div class="ant-card-head" style="padding: 0px">
                                <div class="ant-card-head-wrapper">
                                  <div class="ant-card-head-title">
                                    <div class="flex flex-col items-center">
                                      <svg
                                        width="42"
                                        height="42"
                                        viewBox="0 0 42 42"
                                        class="text-primary-300"
                                      >
                                        <g
                                          transform="translate(-261.000000, -209.000000)"
                                          fill="currentColor"
                                        >
                                          <g
                                            transform="translate(130.000000, 185.000000)"
                                          >
                                            <g
                                              transform="translate(127.500000, 24.000000)"
                                            >
                                              <g
                                                transform="translate(4.000000, 0.000000)"
                                              >
                                                <path
                                                  d="M23.6819866,16.8726522 C23.7738569,16.8696001 23.8626721,16.9040888 23.9282893,16.9684917 C24.0268713,17.0673785 24.0567811,17.2154117 24.0048976,17.3448177 C23.9527063,17.4742237 23.8284861,17.5602964 23.6890007,17.5633514 C23.5693615,17.5697609 23.4558168,17.5090239 23.395083,17.4061687 C23.2061543,17.1342223 22.8328834,17.066769 22.5609215,17.2556977 C22.2889751,17.4443217 22.2215218,17.8178973 22.4104505,18.0898593 C22.5807598,18.3340289 22.8182176,18.5241765 23.0941254,18.6367992 L23.0941254,18.8623494 C23.097788,19.1880131 23.3630167,19.4501849 23.6889851,19.4501849 C23.8467773,19.4483536 23.9972483,19.3839536 24.1074332,19.2713277 C24.2179229,19.1584002 24.2786567,19.0064056 24.2768284,18.8486056 L24.2768284,18.6502149 C24.7505174,18.4542697 25.0945036,18.0339933 25.1933435,17.5310195 C25.2922302,17.02803 25.1332168,16.5091794 24.7690978,16.1481209 C24.492268,15.8767839 24.1241852,15.7183823 23.7368658,15.7037321 L23.681928,15.7037321 C23.5192525,15.6710744 23.402051,15.52793 23.402051,15.3618947 C23.402051,15.1958593 23.5192525,15.0527173 23.681928,15.0200572 C23.7856982,15.0145634 23.8855069,15.0606503 23.9486863,15.1430562 C24.171494,15.3942423 24.5557506,15.4171356 24.8066007,15.1943318 C25.0577867,14.9715241 25.0806801,14.5875722 24.8578763,14.3364174 C24.6973338,14.1487154 24.4931455,14.0031278 24.2630166,13.9124764 L24.2630166,13.707374 C24.2630166,13.3789678 23.9968756,13.1125143 23.6684616,13.1125143 C23.5106694,13.1143455 23.3598937,13.1787456 23.2497087,13.2916762 C23.1395238,13.4046036 23.0784853,13.5565982 23.0803136,13.7143982 L23.0803136,13.9195007 C22.6405036,14.1017099 22.3111754,14.4789578 22.1897391,14.9392312 C22.0682637,15.399489 22.1689851,15.8902816 22.4619902,16.2657169 C22.754689,16.6408239 23.2060942,16.858131 23.6819007,16.8523334 L23.6819866,16.8726522 Z"
                                                ></path>
                                                <path
                                                  d="M23.7030829,21.9865408 C25.2151375,21.9865408 26.6654659,21.3855788 27.7346554,20.3164206 C28.8041574,19.2469186 29.4047756,17.7969026 29.4047756,16.2845355 C29.4047756,14.7721684 28.8041184,13.3221524 27.7346554,12.2526504 C26.6654659,11.1834609 25.2151375,10.5825302 23.7030829,10.5825302 C22.1907939,10.5825302 20.7403873,11.1834922 19.6711978,12.2526504 C18.6016958,13.3221524 18.0010776,14.7721684 18.0010776,16.2845355 C18.0029089,17.7962775 18.6041805,19.245434 19.6729949,20.3142328 C20.7418718,21.3834223 22.1912627,21.9846656 23.7030047,21.9865408 L23.7030829,21.9865408 Z M23.7030829,11.9025307 C24.8653303,11.9025307 25.9799939,12.3640074 26.8018884,13.1859644 C27.6235485,14.007937 28.0853221,15.1225225 28.0853221,16.2847699 C28.0853221,17.4470173 27.6235328,18.5616809 26.8018884,19.3835754 C25.9799158,20.205548 24.8653303,20.6670091 23.7030829,20.6670091 C22.5408355,20.6670091 21.4258593,20.2055324 20.6042774,19.3835754 C19.7823048,18.5616028 19.3205312,17.4470173 19.3205312,16.2847699 C19.3223624,15.1231476 19.7847582,14.0094216 20.6060745,13.188074 C21.4277345,12.3664139 22.541148,11.9043278 23.7030829,11.9025307 L23.7030829,11.9025307 Z"
                                                ></path>
                                                <path
                                                  d="M18.7532763,40.9997363 L38.4227997,40.9997363 C38.6040947,40.9997363 38.7780685,40.9277058 38.9062556,40.7995172 C39.0344427,40.6713285 39.1064747,40.4973563 39.1064747,40.3160613 L39.1064747,7.37699327 C39.1043382,7.20973903 39.0411591,7.04919653 38.9285395,6.9255881 L32.5703625,0.205102483 C32.4443085,0.076305937 32.2721708,0.00275032663 32.0917901,0 L8.983577,0 C8.60603216,0 8.29990206,0.306130106 8.29990206,0.683674942 L8.29990206,23.1152451 C8.24404855,23.3206523 8.28738807,23.540405 8.41649403,23.7098001 C8.54590002,23.8788905 8.74673637,23.978082 8.95976948,23.978082 C9.1728026,23.978082 9.37363895,23.8788905 9.50304494,23.7098001 C9.63214621,23.540405 9.67548729,23.3206523 9.61963691,23.1152451 L9.61963691,1.34703497 L31.4284769,1.34703497 L31.4284769,7.40423869 C31.4284769,7.58553366 31.5005073,7.75950745 31.628696,7.88769455 C31.7568831,8.01588164 31.9308569,8.08791364 32.1121518,8.08791364 L37.7866539,8.08791364 L37.7866539,39.6330661 L18.7531435,39.6330661 C18.4555613,39.7139508 18.2486304,39.9843657 18.2486304,40.2929336 C18.2486304,40.6011967 18.4555613,40.8716117 18.7531435,40.9524963 L18.7532763,40.9997363 Z M32.7408749,2.31076661 L36.8975405,6.72050906 L32.7408749,6.72050906 L32.7408749,2.31076661 Z"
                                                ></path>
                                                <path
                                                  d="M29.3498472,26.1635993 C29.6474295,26.0827147 29.8543603,25.8122998 29.8543603,25.5037319 C29.8543603,25.1954687 29.6474295,24.9250538 29.3498472,24.8441692 L18.0555372,24.8441692 C17.757955,24.9250538 17.5513289,25.1954687 17.5513289,25.5037319 C17.5513289,25.8122998 17.757955,26.0827226 18.0555372,26.1635993 L29.3498472,26.1635993 Z"
                                                ></path>
                                                <path
                                                  d="M20.8660272,28.6115463 C20.5681403,28.6924309 20.3615142,28.9628458 20.3615142,29.2714137 C20.3615142,29.5799816 20.5681403,29.8500918 20.8660272,29.9309764 L26.5405292,29.9309764 C26.8381114,29.8500918 27.0447375,29.5799816 27.0447375,29.2714137 C27.0447375,28.9628458 26.8381114,28.6924231 26.5405292,28.6115463 L20.8660272,28.6115463 Z"
                                                ></path>
                                                <path
                                                  d="M14.0222457,40.9997363 L15.7247135,40.9997363 C16.0454938,40.9997363 16.3534522,40.8721586 16.5802057,40.6453817 C16.8072796,40.4183078 16.934865,40.1106463 16.934865,39.7895769 L16.934865,38.3197149 L17.3108863,38.3197149 C17.4921812,38.3197149 17.6658503,38.2476844 17.7943421,38.1194958 C17.9225292,37.9913087 17.9945612,37.8173349 17.9945612,37.6360399 L17.9945612,33.6161094 C17.9896778,32.5659065 17.4412142,31.5931348 16.5450922,31.0456479 L17.4063663,30.3619729 C17.5824732,30.1107869 17.5696514,29.7735281 17.37554,29.5364061 C17.1814232,29.299253 16.853017,29.2202045 16.5722415,29.3432035 L15.7243283,30.0268785 L15.5054898,28.5023224 L15.505795,28.5023224 C15.485041,27.5189244 15.041568,26.5923299 14.2889317,25.9589735 C13.2566998,25.179459 11.554232,24.8171973 8.98377046,24.8171973 C6.41299641,24.8171973 4.71748255,25.2069545 3.68501619,25.9589735 C2.94365471,26.5929003 2.50839208,27.513455 2.4886241,28.4885708 L2.26978562,30.0131268 L1.42187242,29.3294519 L1.42217761,29.3294519 C1.14534786,29.2150008 0.826099008,29.2940477 0.634740345,29.5247876 C0.443373869,29.7552212 0.424449747,30.0836274 0.588042612,30.3344931 L1.44931677,31.0181681 L1.44962196,31.0181681 C0.543108057,31.5687725 -0.00742607371,32.5555381 7.56971518e-05,33.6161328 L7.56971518e-05,37.6565345 C7.56971518e-05,37.8378295 0.0721833806,38.0118033 0.200372042,38.1399904 C0.32855914,38.2681775 0.502532926,38.3402095 0.683827894,38.3402095 L1.05984911,38.3402095 L1.05984911,39.7692073 C1.05618657,40.0896829 1.17887887,40.3985555 1.40168658,40.6289969 C1.62449429,40.8594305 1.92909297,40.992501 2.24928724,40.99983 L3.95175505,40.99983 C4.27985652,41.0053238 4.59605813,40.8774405 4.82803099,40.6454754 C5.06000385,40.4135104 5.18787841,40.0973166 5.18238557,39.7691995 L5.18238557,38.3197305 L12.8053221,38.3197305 L12.8053221,39.7691995 C12.8016596,40.0942537 12.9283211,40.4074003 13.1569264,40.6384434 C13.3855316,40.8697911 13.6971546,40.9998144 14.0221854,40.9998144 L14.0222457,40.9997363 Z M1.31995594,37.0001988 L1.31995594,34.265499 L4.05465571,34.265499 C4.2860035,34.261226 4.49965387,34.1403592 4.6220434,33.9441093 C4.74412822,33.7325998 4.74412822,33.4719438 4.6220434,33.2604343 L3.84955323,31.9001165 L14.1046774,31.9001165 L13.3868187,33.3083307 C13.2912839,33.5137379 13.303801,33.7533288 13.4200867,33.9477503 C13.5366787,34.1421719 13.7417811,34.2663897 13.9679408,34.2792116 L16.7026406,34.2792116 L16.7026406,37.0139114 L1.31995594,37.0001988 Z M2.92655299,32.9597971 L1.44997138,32.9597971 C1.63767336,32.5221201 1.99934912,32.1824235 2.44798053,32.0231233 L2.92655299,32.9597971 Z M15.5608659,32.0231233 C15.9967067,32.1903776 16.3449434,32.5288631 16.5250429,32.9597971 L15.0551809,32.9597971 L15.5608659,32.0231233 Z M15.6225186,39.6323864 L14.1251532,39.6323864 L14.1251532,38.2650365 L15.6225186,38.2650365 L15.6225186,39.6323864 Z M3.81564764,28.6935873 C3.93193489,27.886929 4.02075012,27.4150761 4.49932258,27.0527674 C5.26510102,26.4716437 6.77592107,26.1777416 8.99782557,26.1777416 C11.2197301,26.1777416 12.7375666,26.4716594 13.5033606,27.0527674 C13.9886448,27.4150527 14.0777726,27.886929 14.1870356,28.6935873 L14.4672173,30.6011576 L3.52841821,30.6011576 L3.81564764,28.6935873 Z M3.84983138,39.6323864 L2.35246606,39.6323864 L2.35246606,38.2650365 L3.84983138,38.2650365 L3.84983138,39.6323864 Z"
                                                ></path>
                                                <path
                                                  d="M11.5610159,32.8432989 L6.41298266,32.8432989 C6.03543782,32.8432989 5.72930771,33.149429 5.72930771,33.5269738 L5.72930771,35.6738694 L5.72930771,35.6735642 C5.72930771,35.8548592 5.80133814,36.028833 5.9295268,36.1570201 C6.0577139,36.2852072 6.23168769,36.3572391 6.41298266,36.3572391 L11.5610159,36.3572391 C11.7423109,36.3572391 11.9162847,36.2852087 12.0444718,36.1570201 C12.1726589,36.028833 12.2446908,35.8548592 12.2446908,35.6735642 L12.2446908,33.4790848 C12.2196637,33.1204641 11.9208633,32.8424155 11.5610159,32.8432989 L11.5610159,32.8432989 Z M10.877341,34.9901945 L7.04876129,34.9901945 L7.04876129,34.1627524 L10.877341,34.1627524 L10.877341,34.9901945 Z"
                                                ></path>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                      <h1
                                        class="text-black font-medium text-xl text-center"
                                      >
                                        Loan
                                      </h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="ant-card-body">
                                Use this card to edit the default values you are
                                going to use for your company. Here you can
                                modify the Interest Rate default value, as well
                                as the fluctuation (will determine how much you
                                can go up or down the default value).
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-col w-full ant-col-xs-32 ant-col-sm-12 ant-col-md-6"
                            style="padding-left: 8px; padding-right: 8px"
                          >
                            <div
                              class="ant-card ant-card-bordered ant-card-hoverable h-full hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-t-2 hover:border-primary-300"
                            >
                              <div class="ant-card-head" style="padding: 0px">
                                <div class="ant-card-head-wrapper">
                                  <div class="ant-card-head-title">
                                    <div class="flex flex-col items-center">
                                      <svg
                                        width="42"
                                        height="42"
                                        viewBox="0 0 42 42"
                                        class="text-primary-300"
                                      >
                                        <g
                                          transform="translate(-584.000000, -209.000000)"
                                          fill="currentColor"
                                        >
                                          <g
                                            transform="translate(454.000000, 185.000000)"
                                          >
                                            <g
                                              transform="translate(123.000000, 24.000000)"
                                            >
                                              <g
                                                transform="translate(7.000000, 0.000000)"
                                              >
                                                <path
                                                  d="M32.4081404,34.38687 C31.3141727,34.38687 30.423987,35.276929 30.423987,36.370741 C30.423987,37.464553 31.3141727,38.354612 32.4081404,38.354612 C33.5021081,38.354612 34.3922937,37.464553 34.3922937,36.370741 C34.3922937,35.276929 33.5021081,34.38687 32.4081404,34.38687 Z M32.4081404,37.0320313 C32.0431998,37.0320313 31.7467559,36.7356297 31.7467559,36.370741 C31.7467559,36.0058524 32.0431998,35.7094507 32.4081404,35.7094507 C32.773081,35.7094507 33.0695248,36.0058524 33.0695248,36.370741 C33.0695248,36.7356297 32.773081,37.0320313 32.4081404,37.0320313 Z"
                                                ></path>
                                                <path
                                                  d="M16.5349136,34.38687 C15.4409459,34.38687 14.5507602,35.276929 14.5507602,36.370741 C14.5507602,37.464553 15.4409459,38.354612 16.5349136,38.354612 C17.6288813,38.354612 18.5190669,37.464553 18.5190669,36.370741 C18.5190669,35.276929 17.6288813,34.38687 16.5349136,34.38687 Z M16.5349136,37.0320313 C16.169973,37.0320313 15.8735291,36.7356297 15.8735291,36.370741 C15.8735291,36.0058524 16.169973,35.7094507 16.5349136,35.7094507 C16.8998542,35.7094507 17.196298,36.0058524 17.196298,36.370741 C17.196298,36.7356297 16.8998542,37.0320313 16.5349136,37.0320313 Z"
                                                ></path>
                                                <path
                                                  d="M39.2578157,23.7722157 L37.070485,21.5834581 C35.9467362,20.4583576 34.4515538,19.8387097 32.8606785,19.8387097 L27.7780713,19.8387097 L27.7780713,0 L7.00152917,0 L0,7.00053272 L0,35.7096018 L8.05830814,35.7096018 C8.33201548,36.4774544 9.05953081,37.0321825 9.92084233,37.0321825 L11.9578309,37.0321825 C12.2805487,39.2714249 14.2071427,40.9999244 16.5346868,40.9999244 C18.862231,40.9999244 20.7887872,39.2714249 21.1115428,37.0321825 L27.8310577,37.0321825 C28.1537755,39.2714249 30.0803695,40.9999244 32.4079136,40.9999244 C34.7354578,40.9999244 36.662014,39.2714249 36.9847696,37.0321825 L39.0120074,37.0321825 C40.1044634,37.0321825 40.9955561,36.1426525 40.9961608,35.0495207 L41,27.9816498 C41.0005897,26.3919078 40.3823114,24.8963336 39.2579503,23.7721401 L39.2578157,23.7722157 Z M39.6770886,27.9811207 L39.6770886,28.3395174 C38.5420768,28.0419368 37.6988305,27.0169368 37.6988305,25.7903377 C37.6988305,25.3114955 37.8343576,24.8571248 38.0711559,24.4550603 L38.3224215,24.7068796 C39.1969608,25.581899 39.6776928,26.7444852 39.6770886,27.9811359 L39.6770886,27.9811207 Z M36.1359979,22.5190138 L37.1115211,23.4950028 C36.6358534,24.1610166 36.3760238,24.9551318 36.3760238,25.7903226 C36.3760238,27.7503115 37.8059748,29.3784461 39.6764456,29.6972258 L39.6743788,33.0645161 L35.6411431,33.0645161 C35.4592661,32.8864968 35.2620299,32.7238345 35.0532819,32.5777006 L35.0532819,25.129002 C35.0532819,23.6703089 33.8666448,22.4838407 32.4077441,22.4838407 L23.3743663,22.4838407 C22.1939273,22.4838407 21.0825747,23.0043102 20.3261021,23.910943 L17.857135,26.8734481 L17.857135,31.9370426 C17.4378626,31.8112765 16.994085,31.7419053 16.5343661,31.7419053 C15.2765263,31.7419053 14.1362239,32.2479095 13.3009898,33.0645161 L9.25913717,33.0645161 L9.25913717,30.5574776 C9.25913717,29.6204859 9.8980799,28.8242168 10.8128237,28.6205394 L14.9213439,27.7074297 L18.7685606,22.898602 C19.6528505,21.7942094 20.9703283,21.1612601 22.3843305,21.1612601 L32.8606602,21.1612601 C34.0971845,21.1612601 35.2599362,21.6433521 36.1356848,22.5189836 L36.1359979,22.5190138 Z M33.7305238,26.4516129 L26.4552948,26.4516129 L26.4552948,23.8064516 L32.4077549,23.8064516 C33.1373413,23.8064516 33.7305238,24.3995497 33.7305238,25.1290323 L33.7305238,26.4516129 Z M25.1325259,26.4516129 L19.9306428,26.4516129 L21.3413947,24.7579539 C21.845997,24.1530509 22.5868383,23.8064516 23.3745283,23.8064516 L25.1325259,23.8064516 L25.1325259,26.4516129 Z M19.1800432,27.7741935 L25.1325259,27.7741935 L25.1325259,29.0967742 L22.4869882,29.0967742 L22.4869882,30.4193548 L25.1325259,30.4193548 L25.1325259,33.0645161 L19.7679044,33.0645161 C19.5860275,32.8864968 19.3887913,32.7238345 19.1800432,32.5777006 L19.1800432,27.7741935 Z M20.7113032,34.3870968 L28.2312822,34.3870968 C28.0349304,34.7983362 27.8985264,35.2429198 27.8312013,35.7096774 L21.1113841,35.7096774 C21.0437694,35.2429349 20.907655,34.798306 20.7113032,34.3870968 Z M29.1740007,33.0645161 L26.4549169,33.0645161 L26.4549169,27.7741935 L33.7301459,27.7741935 L33.7301459,29.0967742 L31.0846081,29.0967742 L31.0846081,30.4193548 L33.7301459,30.4193548 L33.7301459,31.9370728 C33.3108735,31.8113067 32.8670958,31.7419355 32.407377,31.7419355 C31.1495371,31.7419355 30.0092347,32.2479397 29.1740007,33.0645161 L29.1740007,33.0645161 Z M6.61361018,2.25745622 L6.61361018,6.61282765 L2.25761881,6.61282765 L6.61361018,2.25745622 Z M1.32253458,7.93540829 L7.93637908,7.93540829 L7.93637908,1.32250507 L26.4551437,1.32250507 L26.4551437,19.8386341 L22.3844169,19.8386341 C20.5661765,19.8386341 18.8716718,20.652588 17.7361314,22.0716793 L14.1799995,26.518271 L10.5264362,27.3295041 C9.00048997,27.6690068 7.93637908,28.9963336 7.93637908,30.5574323 L7.93637908,34.3870212 L1.32253458,34.3870212 L1.32253458,7.93540829 Z M9.25914798,35.0483115 L9.25914798,34.3870212 L12.3576018,34.3870212 C12.16125,34.7982606 12.0248461,35.2428442 11.9575209,35.7096018 L9.92053243,35.7096018 C9.55559183,35.7096018 9.25914798,35.4132002 9.25914798,35.0483115 L9.25914798,35.0483115 Z M16.5343769,39.6773438 C14.7108455,39.6773438 13.2274547,38.1941641 13.2274547,36.3708922 C13.2274547,34.5476203 14.7108455,33.0644406 16.5343769,33.0644406 C18.3579083,33.0644406 19.8412992,34.5476203 19.8412992,36.3708922 C19.8412992,38.1941641 18.3579083,39.6773438 16.5343769,39.6773438 Z M32.4076037,39.6773438 C30.5840723,39.6773438 29.1006815,38.1941641 29.1006815,36.3708922 C29.1006815,34.5476203 30.5840723,33.0644406 32.4076037,33.0644406 C34.2311351,33.0644406 35.714526,34.5476203 35.714526,36.3708922 C35.714526,38.1941641 34.2311351,39.6773438 32.4076037,39.6773438 Z M39.0113952,35.7096018 L36.9844597,35.7096018 C36.9171406,35.2428594 36.7807306,34.7982304 36.5843788,34.3870212 L39.6736867,34.3870212 L39.6730962,35.0483115 C39.6728009,35.4132002 39.3760628,35.7096018 39.0114169,35.7096018 L39.0113952,35.7096018 Z"
                                                ></path>
                                                <path
                                                  d="M25.1329114,2.64493456 L13.2279913,2.64493456 L13.2279913,13.2255797 L25.1329114,13.2255797 L25.1329114,2.64493456 Z M23.8101425,11.9029991 L14.5507602,11.9029991 L14.5507602,3.96751521 L23.8101425,3.96751521 L23.8101425,11.9029991 Z"
                                                ></path>
                                                <polygon
                                                  points="2.64584015 9.25783779 11.9052224 9.25783779 11.9052224 10.5804184 2.64584015 10.5804184"
                                                ></polygon>
                                                <polygon
                                                  points="2.64584015 11.9029991 11.9052224 11.9029991 11.9052224 13.2255797 2.64584015 13.2255797"
                                                ></polygon>
                                                <polygon
                                                  points="2.64584015 14.5481604 25.1329114 14.5481604 25.1329114 15.870741 2.64584015 15.870741"
                                                ></polygon>
                                                <polygon
                                                  points="23.8101425 17.1933217 25.1329114 17.1933217 25.1329114 18.5159023 23.8101425 18.5159023"
                                                ></polygon>
                                                <polygon
                                                  points="2.64584015 17.1933217 22.4873736 17.1933217 22.4873736 18.5159023 2.64584015 18.5159023"
                                                ></polygon>
                                                <path
                                                  d="M7.93691575,25.7900959 C7.93691575,24.6962839 7.04673007,23.8062249 5.9527624,23.8062249 C5.58782179,23.8062249 5.29137795,23.5098232 5.29137795,23.1449346 C5.29137795,22.7800459 5.58782179,22.4836442 5.9527624,22.4836442 C6.317703,22.4836442 6.61414685,22.7800459 6.61414685,23.1449346 L7.93691575,23.1449346 C7.93691575,22.2840479 7.38212379,21.5566286 6.61414685,21.2826654 L6.61414685,19.8384829 L5.29137795,19.8384829 L5.29137795,21.2826654 C4.52341612,21.5566286 3.96860905,22.2840479 3.96860905,23.1449346 C3.96860905,24.2387465 4.85879472,25.1288055 5.9527624,25.1288055 C6.317703,25.1288055 6.61414685,25.4252072 6.61414685,25.7900959 C6.61414685,26.1549845 6.317703,26.4513862 5.9527624,26.4513862 C5.58782179,26.4513862 5.29137795,26.1549845 5.29137795,25.7900959 L3.96860905,25.7900959 C3.96860905,26.6509825 4.523401,27.3784018 5.29137795,27.652365 L5.29137795,29.0965475 L6.61414685,29.0965475 L6.61414685,27.652365 C7.38210868,27.3784018 7.93691575,26.6509825 7.93691575,25.7900959 Z"
                                                ></path>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                      <h1
                                        class="text-black font-medium text-xl text-center"
                                      >
                                        Lease
                                      </h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="ant-card-body">
                                Use this card to edit the default values you are
                                going to use for your company. Here you can
                                modify the Default Rate value, as well as the
                                Rate Markup (will determine how much you can go
                                up or down the Default Rate value).
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-col w-full ant-col-xs-32 ant-col-sm-12 ant-col-md-6"
                            style="padding-left: 8px; padding-right: 8px"
                          >
                            <div
                              class="ant-card ant-card-bordered ant-card-hoverable h-full hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-t-2 hover:border-primary-300"
                            >
                              <div class="ant-card-head" style="padding: 0px">
                                <div class="ant-card-head-wrapper">
                                  <div class="ant-card-head-title">
                                    <div class="flex flex-col items-center">
                                      <svg
                                        width="42"
                                        height="42"
                                        viewBox="0 0 42 42"
                                        class="text-primary-300"
                                      >
                                        <g
                                          transform="translate(-907.000000, -448.000000)"
                                          fill="currentColor"
                                        >
                                          <g
                                            transform="translate(777.000000, 424.000000)"
                                          >
                                            <g
                                              transform="translate(103.000000, 24.000000)"
                                            >
                                              <path
                                                d="M47.9980368,7.4771055e-05 C47.6770922,0.00416832383 47.3712721,0.135568054 47.1477939,0.365438538 C46.924307,0.59564455 46.8019859,0.905155405 46.8076984,1.22576447 L46.8076984,19.2926089 L28.7408539,19.2926089 C28.7015345,19.2909285 28.662215,19.2909285 28.6232302,19.2926089 C27.9679027,19.3379774 27.4695331,19.898872 27.5014512,20.5548791 C27.533377,21.2108777 28.0841844,21.7203627 28.7408367,21.7015215 L46.8076812,21.7015215 L46.8076812,39.768366 C46.8002877,40.0926659 46.9239629,40.4058847 47.150805,40.6377254 C47.3773116,40.8692735 47.6878376,41 48.0121633,41 C48.3361276,41 48.6466537,40.8692735 48.8735216,40.6377254 C49.1000282,40.4058417 49.2237001,40.0926315 49.2166454,39.768366 L49.2166454,21.7015215 L67.2834899,21.7015215 C67.9381463,21.6870706 68.4613621,21.1520572 68.4613621,20.4970652 C68.4613621,19.8420733 67.9381119,19.3070624 67.2834899,19.2926089 L49.2166454,19.2926089 L49.2166454,1.22576447 C49.2223585,0.900458026 49.0960019,0.586232584 48.866467,0.355372725 C48.636932,0.124512865 48.3233862,-0.00354664892 47.998054,7.4771055e-05 L47.9980368,7.4771055e-05 Z M28.7405012,0.0166030446 C28.4205632,0.0172752173 28.1140807,0.144980879 27.8885807,0.371823017 C27.6630806,0.598665154 27.5370601,0.90582732 27.5383916,1.22576533 L27.5383916,12.8375844 C27.5383916,13.5033304 28.0781191,14.0434172 28.7438909,14.0434172 C29.4099724,14.0434172 29.9497237,13.5033648 29.9497237,12.8375844 L29.9497237,2.42591999 L40.3519245,2.42591999 C41.0065809,2.4114691 41.5297967,1.87645563 41.5297967,1.2214637 C41.5297967,0.566471758 41.0065465,0.0314608734 40.3519245,0.0170073978 L28.7405012,0.0166030446 Z M55.6712837,0.0166030446 C55.0162918,0.0310539392 54.4930674,0.566067405 54.4930674,1.22105934 C54.4930674,1.87605128 55.0163176,2.41106217 55.6712837,2.42551564 L66.0829481,2.42551564 L66.0829481,12.83718 C66.0527025,13.1739202 66.1652839,13.5079675 66.3934741,13.7576427 C66.6216584,14.0073351 66.9442806,14.1494954 67.282707,14.1494954 C67.6207893,14.1494954 67.9434115,14.0073437 68.1715957,13.7576427 C68.39978,13.5079503 68.5126978,13.1738944 68.4824573,12.83718 L68.4824573,1.22536097 C68.4848098,0.560286014 67.947782,0.0189259246 67.2827328,0.0161728817 L55.6712837,0.0166030446 Z M32.8124238,4.08868965 C32.1470133,4.08634525 31.6056446,4.62337308 31.6032357,5.28842223 L31.6032357,16.3401691 C31.6039079,16.6601071 31.7316136,16.9665896 31.9584557,17.1920896 C32.1852978,17.4175897 32.49246,17.5436102 32.812398,17.5422787 L43.8546813,17.5422787 C44.1742752,17.5436124 44.4817815,17.4175897 44.7082881,17.1920896 C44.9351302,16.9665896 45.0631725,16.6600985 45.0638436,16.3401691 L45.0638436,5.28842223 C45.0611551,4.62334727 44.5197562,4.08628881 43.8546555,4.08868965 L32.8124238,4.08868965 Z M52.1680365,4.08869772 C51.5053189,4.0900419 50.968312,4.6260659 50.9659031,5.28842223 L50.9659031,16.3401691 C50.9672473,17.0035578 51.5046134,17.540926 52.1680365,17.5423132 L63.2103198,17.5423132 C63.5299137,17.5436468 63.8370845,17.4176241 64.0639266,17.192124 C64.2907687,16.966624 64.418811,16.6601329 64.4194821,16.3402035 L64.4194821,5.28845664 C64.4167936,4.62338168 63.8753948,4.08632322 63.210294,4.08869772 L52.1680365,4.08869772 Z M34.0117182,6.49761032 L42.6545524,6.49761032 L42.6545524,15.130981 L34.0117182,15.130981 L34.0117182,6.49761032 Z M53.3767945,6.49761032 L62.0101651,6.49761032 L62.0101651,15.130981 L53.3767945,15.130981 L53.3767945,6.49761032 Z M32.8115635,23.4443045 C32.4902834,23.4433023 32.1821146,23.570331 31.954937,23.7971817 C31.7280948,24.0243594 31.6010591,24.3325367 31.6023907,24.6534727 L31.6023907,35.695756 C31.6030734,36.015694 31.7307791,36.3221765 31.9576212,36.5476765 C32.1844633,36.7731766 32.4916255,36.8991971 32.8115635,36.8978656 L43.8538468,36.8978656 C44.1734407,36.8991993 44.4809469,36.7731766 44.7074536,36.5476765 C44.9342957,36.3221765 45.062338,36.0156854 45.063015,35.695756 L45.063015,24.6534727 C45.0640173,24.3325281 44.9369885,24.0243594 44.7101378,23.7971817 C44.4829601,23.5703396 44.1747828,23.4433039 43.8538468,23.4443045 L32.8115635,23.4443045 Z M52.1671762,23.4443104 C51.8472382,23.4449826 51.5407557,23.5730238 51.3152557,23.7998659 C51.0897556,24.0267081 50.9637351,24.3338702 50.9650666,24.6534727 L50.9650666,35.695756 C50.9664214,36.3591447 51.5037875,36.8965129 52.1672106,36.8979001 L63.2094939,36.8979001 C63.5290878,36.8992337 63.8362585,36.773211 64.0631007,36.5477109 C64.2899428,36.3222109 64.4179851,36.0157198 64.4186621,35.6957904 L64.4186621,24.6535071 C64.4196643,24.3325625 64.2926356,24.0243938 64.0657849,23.7972161 C63.8386072,23.570374 63.5304299,23.4433383 63.2094939,23.4443104 L52.1671762,23.4443104 Z M34.0108578,25.853223 L42.6536921,25.853223 L42.6536921,34.4865937 L34.0108578,34.4865937 L34.0108578,25.853223 Z M53.3759341,25.853223 L62.0093048,25.853223 L62.0093048,34.4865937 L53.3759341,34.4865937 L53.3759341,25.853223 Z M28.7198534,26.9306092 C28.4002595,26.9363223 28.0961171,27.0687345 27.8743165,27.2985964 C27.6521803,27.5284669 27.5308571,27.8369712 27.5365697,28.1562381 L27.5365697,39.7680571 C27.537914,40.4314459 28.07528,40.968814 28.7387031,40.9701906 L40.3505222,40.9701906 C41.0162682,40.9701906 41.5560109,40.4304737 41.5560109,39.7647019 C41.5560109,39.0989301 41.016294,38.5588691 40.3505222,38.5588691 L29.9483214,38.5588691 L29.9483214,28.1566683 C29.9540345,27.8296756 29.8263272,27.514108 29.594779,27.2829213 C29.3632309,27.0517345 29.0473278,26.9246729 28.7203438,26.9310652 L28.7198534,26.9306092 Z M67.2624549,26.9306092 C66.598051,26.9437154 66.0697851,27.4921697 66.0814855,28.1562295 L66.0814855,38.5584303 L55.6698212,38.5584303 C55.0037396,38.5584303 54.4639883,39.0984827 54.4639883,39.7642631 C54.4639883,40.4300435 55.0037052,40.9697518 55.6698212,40.9697518 L67.2816402,40.9697518 C67.9440223,40.9673993 68.4800742,40.4303705 68.4813647,39.7676184 L68.4813647,28.1557993 C68.4870778,27.8304929 68.3607212,27.5162675 68.1311862,27.2854076 C67.9016513,27.0545305 67.5881055,26.9264882 67.2627732,26.9301096 L67.2624549,26.9306092 Z"
                                              ></path>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                      <h1
                                        class="text-black font-medium text-xl text-center"
                                      >
                                        Web Tools
                                      </h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="ant-card-body">
                                In this card, you can find tools that can be
                                used in your website. You will see a highlight
                                URL that can be added as a new button for your
                                applicants to create applications, or you can
                                download a QR Code of your own company for users
                                to scan it and create applications that will
                                reach your company.
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-col w-full ant-col-xs-32 ant-col-sm-12 ant-col-md-6"
                            style="padding-left: 8px; padding-right: 8px"
                          >
                            <div
                              class="ant-card ant-card-bordered ant-card-hoverable h-full hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-t-2 hover:border-primary-300"
                            >
                              <div class="ant-card-head" style="padding: 0px">
                                <div class="ant-card-head-wrapper">
                                  <div class="ant-card-head-title">
                                    <div class="flex flex-col items-center">
                                      <svg
                                        class="text-primary-300"
                                        width="48px"
                                        height="41px"
                                        viewBox="0 0 48 41"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <title>Group 38</title>
                                        <g
                                          id="*Companies-(Super-admin)"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <g
                                            id="03.1-Dealer---Edit-company---Configuration-list---Desktop-1440"
                                            transform="translate(-1227.000000, -209.000000)"
                                            fill="#F8A62D"
                                            fill-rule="nonzero"
                                          >
                                            <g
                                              id="Group-10-Copy-2"
                                              transform="translate(1101.000000, 185.000000)"
                                            >
                                              <g
                                                id="Group-5"
                                                transform="translate(50.000000, 24.000000)"
                                              >
                                                <g
                                                  id="Group-38"
                                                  transform="translate(76.000000, 0.000000)"
                                                >
                                                  <path
                                                    d="M9.80186844,20.4253975 C8.08098479,20.4253975 6.65946577,21.8469165 6.65946577,23.5678001 C6.65946577,25.2886838 8.08098479,26.6354278 9.80186844,26.6354278 C11.5227521,26.6354278 12.8694961,25.2139088 12.8694961,23.5678001 C12.8694961,21.7722296 11.5227521,20.4253975 9.80186844,20.4253975 Z M9.80186844,25.138781 C8.90386275,25.138781 8.15575982,24.3906428 8.15575982,23.5678001 C8.15575982,22.6697944 8.90389802,21.9216915 9.80186844,21.9216915 C10.6998741,21.9216915 11.3728493,22.6698297 11.3728493,23.5678001 C11.3728493,24.3906781 10.6994597,25.138781 9.80186844,25.138781 Z"
                                                    id="Shape"
                                                  ></path>
                                                  <path
                                                    d="M4.48913839,34.8654418 L4.48913839,38.2324341 C4.48913839,39.7287282 5.68606781,40.9260103 7.18271457,40.9260103 L8.97828506,40.9256659 C10.4745791,40.9256659 11.6718612,39.7287364 11.6718612,38.2320897 L11.6718612,34.8650974 L20.3508781,34.8650974 L20.3508781,38.830378 C20.3508781,40.0273075 21.3235707,41 22.5205001,41 L45.7139837,41 C46.9109131,41 47.8836057,40.0273075 47.8836057,38.830378 L47.8836057,4.26456589 C47.8836057,3.06763647 46.9105687,2.09494393 45.7136393,2.09494393 L41.523769,2.09494393 L41.523769,1.49629405 C41.523769,0.67341609 40.8503794,0 40.027475,0 L28.20632,0 C27.383442,0 26.7100259,0.673389637 26.7100259,1.49629405 L26.7100259,2.09494393 L22.5201557,2.09494393 C21.3232263,2.09494393 20.3505337,3.06763647 20.3505337,4.26456589 L20.3505337,6.13491141 L13.3924005,6.13491141 C12.1203433,6.13491141 10.9981889,7.0329171 10.6988243,8.30453336 L8.75343921,17.6567018 L5.98544072,17.6567018 C4.11509521,17.6567018 2.61844845,19.1529959 2.61844845,21.0236941 L2.61844845,27.6825509 C0.897917513,28.2061083 0,29.7023583 0,31.1986523 C0,33.2188124 1.64610863,34.8645683 3.66591601,34.8645683 L4.48913839,34.8654418 Z M10.1752145,38.3067682 C10.1752145,38.9801579 9.65165706,39.5036977 8.97828506,39.5036977 L7.25740141,39.5036977 C6.58401178,39.5036977 6.06047199,38.9801402 6.06047199,38.3067682 L6.06047199,34.939776 L10.2503422,34.939776 L10.2499977,38.3067682 L10.1752145,38.3067682 Z M20.3500845,23.2688764 L17.881098,23.2688764 L16.2349893,19.2289089 L20.4248596,19.2289089 L20.4248596,23.2688764 L20.3500845,23.2688764 Z M28.2058708,1.49682364 L40.1019772,1.49682364 L40.1019772,4.26517485 L28.2058708,4.26517485 L28.2058708,1.49682364 Z M22.5197947,3.59175876 L26.7096649,3.59175876 L26.7096649,4.19040865 C26.7096649,5.0132866 27.3830545,5.68670269 28.205959,5.68670269 L40.1020654,5.68670269 C40.9249433,5.68670269 41.5983594,5.01331306 41.5983594,4.19040865 L41.5983594,3.59175876 L45.7882297,3.59175876 C46.1622988,3.59175876 46.4616193,3.89107929 46.4616193,4.2651484 L46.4616193,38.8309605 C46.4616193,39.2050296 46.1622988,39.5043502 45.7882297,39.5043502 L22.5947461,39.5043502 C22.220677,39.5043502 21.9213564,39.2050296 21.9213564,38.8309605 L21.9213564,6.88403774 L21.9213564,4.26558929 C21.8466114,3.89152018 22.1459372,3.59219965 22.5200063,3.59219965 L22.5197947,3.59175876 Z M12.1950219,8.60450695 C12.3445102,8.00585706 12.7936718,7.63181441 13.3919513,7.63181441 L20.3500845,7.63181441 L20.3500845,17.6576635 L10.2492841,17.6576635 L12.1950219,8.60450695 Z M4.11464603,21.0243912 C4.11464603,19.9769237 4.93752398,19.1540457 5.98499154,19.1540457 L14.5888807,19.1540457 L16.6838158,24.2414808 C16.8333041,24.5408013 17.0578849,24.6902896 17.3572055,24.6902896 L20.3497936,24.6902896 L20.3497936,27.4586408 L4.11444322,27.4589852 L4.11464603,21.0243912 Z M1.49584487,31.1992613 C1.49584487,30.0023319 2.4685374,29.0296393 3.66546683,29.0296393 L20.3496437,29.0296393 L20.3496437,33.444011 L3.66546683,33.444011 C2.4685374,33.3689221 1.49584487,32.3965434 1.49584487,31.1992613 Z"
                                                    id="Shape"
                                                  ></path>
                                                  <polygon
                                                    id="Path"
                                                    points="4.7889439 30.4512465 17.5827033 30.4512465 17.5827033 31.9475406 4.7889439 31.9475406"
                                                  ></polygon>
                                                  <polygon
                                                    id="Path"
                                                    points="24.0170587 36.4367754 44.2177778 36.4367754 44.2177778 37.9330695 24.0170587 37.9330695"
                                                  ></polygon>
                                                  <polygon
                                                    id="Path"
                                                    points="24.0170587 31.797726 44.2177778 31.797726 44.2177778 33.2940201 24.0170587 33.2940201"
                                                  ></polygon>
                                                  <polygon
                                                    id="Path"
                                                    points="32.1717687 8.60424241 44.2177778 8.60424241 44.2177778 10.1005365 32.1717687 10.1005365"
                                                  ></polygon>
                                                  <polygon
                                                    id="Path"
                                                    points="32.1717687 11.3721527 38.1572094 11.3721527 38.1572094 12.8684468 32.1717687 12.8684468"
                                                  ></polygon>
                                                  <path
                                                    d="M24.0170587,13.2432918 L27.5335128,13.2432918 C27.9823217,13.2432918 28.281651,12.9439713 28.281651,12.4951536 L28.281651,8.9786995 C28.281651,8.52989064 27.9823305,8.23056129 27.5335128,8.23056129 L24.0170587,8.23056129 C23.5682498,8.23056129 23.2689205,8.52988183 23.2689205,8.9786995 L23.2689205,12.4951536 C23.2689205,12.8692227 23.6429896,13.2432918 24.0170587,13.2432918 Z M24.7651969,9.7268377 L26.785357,9.7268377 L26.785357,11.7469978 L24.7651969,11.7469978 L24.7651969,9.7268377 Z"
                                                    id="Shape"
                                                  ></path>
                                                  <polygon
                                                    id="Path"
                                                    points="32.1717687 16.6099314 44.2177778 16.6099314 44.2177778 18.1062255 32.1717687 18.1062255"
                                                  ></polygon>
                                                  <polygon
                                                    id="Path"
                                                    points="32.1717687 19.4527931 38.1572094 19.4527931 38.1572094 20.9490871 32.1717687 20.9490871"
                                                  ></polygon>
                                                  <path
                                                    d="M24.0170587,21.2480991 L27.5335128,21.2480991 C27.9823217,21.2480991 28.281651,20.9487785 28.281651,20.4999608 L28.281651,16.9835067 C28.281651,16.5346979 27.9823305,16.2353685 27.5335128,16.2353685 L24.0170587,16.2353685 C23.5682498,16.2353685 23.2689205,16.534689 23.2689205,16.9835067 L23.2689205,20.4999608 C23.2689205,20.9487697 23.6429896,21.2480991 24.0170587,21.2480991 Z M24.7651969,17.7316449 L26.785357,17.7316449 L26.785357,19.751805 L24.7651969,19.751805 L24.7651969,17.7316449 Z"
                                                    id="Shape"
                                                  ></path>
                                                  <polygon
                                                    id="Path"
                                                    points="32.1717687 24.6156204 44.2177778 24.6156204 44.2177778 26.1119144 32.1717687 26.1119144"
                                                  ></polygon>
                                                  <polygon
                                                    id="Path"
                                                    points="32.1717687 27.4584821 38.1572094 27.4584821 38.1572094 28.9547761 32.1717687 28.9547761"
                                                  ></polygon>
                                                  <path
                                                    d="M24.0170587,29.253788 L27.5335128,29.253788 C27.9823217,29.253788 28.281651,28.9544675 28.281651,28.5056498 L28.281651,24.9891957 C28.281651,24.5403868 27.9823305,24.2410575 27.5335128,24.2410575 L24.0170587,24.2410575 C23.5682498,24.2410575 23.2689205,24.540378 23.2689205,24.9891957 L23.2689205,28.5056498 C23.2689205,28.9544587 23.6429896,29.253788 24.0170587,29.253788 Z M24.7651969,25.8121089 L26.785357,25.8121089 L26.785357,27.832269 L24.7651969,27.832269 L24.7651969,25.8121089 Z"
                                                    id="Shape"
                                                  ></path>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                      <h1
                                        class="text-black font-medium text-xl text-center"
                                      >
                                        Transportation Modes
                                      </h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="ant-card-body">Coming soon....</div>
                            </div>
                          </div>
                          <div
                            class="ant-col w-full ant-col-xs-32 ant-col-sm-12 ant-col-md-6"
                            style="padding-left: 8px; padding-right: 8px"
                          >
                            <div
                              class="ant-card ant-card-bordered ant-card-hoverable h-full hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-t-2 hover:border-primary-300"
                            >
                              <div class="ant-card-head" style="padding: 0px">
                                <div class="ant-card-head-wrapper">
                                  <div class="ant-card-head-title">
                                    <div class="flex flex-col items-center">
                                      <svg
                                        width="57px"
                                        height="41px"
                                        viewBox="0 0 57 41"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="text-primary-300"
                                      >
                                        <title>Combined Shape</title>
                                        <g
                                          id="*Companies-(Super-admin)"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <g
                                            id="03.1-Dealer---Edit-company---Configuration-list---Desktop-1440"
                                            transform="translate(-251.000000, -496.000000)"
                                            fill="#F8A62D"
                                            fill-rule="nonzero"
                                          >
                                            <g
                                              id="Group-7"
                                              transform="translate(130.000000, 472.000000)"
                                            >
                                              <path
                                                d="M174.946481,24 C175.756115,24 176.533189,24.3240766 177.105738,24.9005383 C177.678287,25.4769999 178,26.2595282 178,27.0749502 L178,61.9250498 C178,62.7403664 177.678182,63.5228946 177.105738,64.0994617 C176.533294,64.6760288 175.75622,65 174.946481,65 L124.053519,65 C123.243885,65 122.466811,64.6759234 121.894262,64.0994617 C121.321713,63.5230001 121,62.7404718 121,61.9250498 L121,27.0749502 C121,26.2596336 121.321818,25.4771054 121.894262,24.9005383 C122.466706,24.3239712 123.24378,24 124.053519,24 Z M175.96434,32.2000234 L123.03566,32.2000234 L123.03566,61.9251084 C123.03566,62.4911443 123.491429,62.9501113 124.053519,62.9501113 L174.946481,62.9501113 C175.216394,62.9501113 175.475404,62.842117 175.666252,62.6499319 C175.8571,62.4577467 175.96434,62.1969157 175.96434,61.9251084 L175.96434,32.2000234 Z M143.392845,49.6250732 C144.742468,49.6250732 146.037068,50.1649745 146.991762,51.1259118 C147.945944,52.0874231 148.482141,53.3909925 148.482141,54.7500879 C148.482141,56.1091832 147.946002,57.4128698 146.991762,58.3742639 C146.036952,59.3351427 144.742468,59.8751025 143.392845,59.8751025 C142.043222,59.8751025 140.748621,59.3352012 139.793927,58.3742639 C138.839745,57.4127526 138.303549,56.1091832 138.303549,54.7500879 C138.303549,53.3909925 138.839687,52.087306 139.793927,51.1259118 C140.748737,50.165033 142.043222,49.6250732 143.392845,49.6250732 Z M159.678592,56.8000937 C160.240683,56.8000937 160.696451,57.2590607 160.696451,57.8250966 C160.696451,58.3911325 160.240683,58.8500996 159.678592,58.8500996 L151.535718,58.8500996 C150.973627,58.8500996 150.517859,58.3911325 150.517859,57.8250966 C150.517859,57.2590607 150.973627,56.8000937 151.535718,56.8000937 Z M143.392845,51.6751962 C142.58321,51.6751962 141.806136,51.9992729 141.233587,52.5757345 C140.661038,53.1521961 140.339325,53.9348298 140.339325,54.7501464 C140.339325,55.565463 140.661143,56.3479913 141.233587,56.9245584 C141.806031,57.5011254 142.583106,57.8250966 143.392845,57.8250966 C144.202479,57.8250966 144.979553,57.50102 145.552102,56.9245584 C146.124651,56.3480967 146.446364,55.565463 146.446364,54.7501464 C146.446364,53.9348298 146.124546,53.1523016 145.552102,52.5757345 C144.979658,51.9991674 144.202479,51.6751962 143.392845,51.6751962 Z M158.660733,53.7250849 C159.222824,53.7250849 159.678592,54.184052 159.678592,54.7500879 C159.678592,55.3161238 159.222824,55.7750908 158.660733,55.7750908 L151.535718,55.7750908 C150.973627,55.7750908 150.517859,55.3161238 150.517859,54.7500879 C150.517859,54.184052 150.973627,53.7250849 151.535718,53.7250849 Z M151.608055,35.2237444 L151.729263,35.2311152 C152.012809,35.265895 152.268182,35.4187318 152.434494,35.6521044 C152.600348,35.8854771 152.661693,36.1787919 152.603075,36.4597482 C152.544458,36.741173 152.370875,36.9841514 152.125495,37.1305804 L148.481629,39.7548456 L148.481629,44.5005506 C148.481629,44.7723579 148.374387,45.0331866 148.183542,45.2253741 C147.992696,45.4175615 147.733683,45.5255535 147.46377,45.5255535 L139.320896,45.5255535 C139.050983,45.5255535 138.791972,45.4175592 138.601124,45.2253741 C138.410276,45.033189 138.303037,44.7723579 138.303037,44.5005506 L138.303037,36.3005271 C138.303037,35.7344912 138.758805,35.2755242 139.320896,35.2755242 L147.46377,35.2755242 C147.733683,35.2755242 147.992694,35.3835185 148.183542,35.5757036 C148.37439,35.7678888 148.481629,36.0287198 148.481629,36.3005271 L148.481629,37.2330924 L150.944965,35.4704388 C151.161716,35.2832803 151.44617,35.1967958 151.729263,35.2311152 Z M159.678592,43.4750556 C160.240683,43.4750556 160.696451,43.9340227 160.696451,44.5000586 C160.696451,45.0660945 160.240683,45.5250615 159.678592,45.5250615 L151.535718,45.5250615 C150.973627,45.5250615 150.517859,45.0660945 150.517859,44.5000586 C150.517859,43.9340227 150.973627,43.4750556 151.535718,43.4750556 Z M146.445969,37.3255066 L140.338802,37.3255066 L140.338802,43.4755242 L146.445969,43.4755242 L146.445969,41.2305921 L145.000492,42.255595 C144.828736,42.3809792 144.62243,42.4491602 144.410227,42.450533 C144.13986,42.4519036 143.879486,42.3452798 143.687733,42.1530947 L141.652015,40.1030889 C141.252595,39.7013111 141.252595,39.0497021 141.652015,38.6479361 C142.050992,38.2457133 142.69806,38.2457133 143.097026,38.6479361 L144.522029,40.0829402 L146.445969,38.6992449 L146.445969,37.3255066 Z M158.660733,40.4000469 C159.222824,40.4000469 159.678592,40.8590139 159.678592,41.4250498 C159.678592,41.9910857 159.222824,42.4500527 158.660733,42.4500527 L151.535718,42.4500527 C151.265805,42.4500527 151.006795,42.3420584 150.815947,42.1498733 C150.625099,41.9576882 150.517859,41.6968571 150.517859,41.4250498 C150.517859,40.8590139 150.973627,40.4000469 151.535718,40.4000469 Z M174.946481,26.0500059 L124.053519,26.0500059 C123.491429,26.0500059 123.03566,26.5089729 123.03566,27.0750088 L123.03566,30.1500176 L175.96434,30.1500176 L175.96434,27.0750088 C175.96434,26.8032014 175.857098,26.5423727 175.666252,26.3501853 C175.475407,26.1579978 175.216394,26.0500059 174.946481,26.0500059 Z M172.910762,27.0750088 C173.472853,27.0750088 173.928621,27.5339758 173.928621,28.1000117 C173.928621,28.6660476 173.472853,29.1250146 172.910762,29.1250146 C172.348671,29.1250146 171.892903,28.6660476 171.892903,28.1000117 C171.892903,27.5339758 172.348671,27.0750088 172.910762,27.0750088 Z M168.839325,27.0750088 C169.401416,27.0750088 169.857184,27.5339758 169.857184,28.1000117 C169.857184,28.6660476 169.401416,29.1250146 168.839325,29.1250146 C168.277234,29.1250146 167.821466,28.6660476 167.821466,28.1000117 C167.821466,27.5339758 168.277234,27.0750088 168.839325,27.0750088 Z M164.767888,27.0750088 C165.329979,27.0750088 165.785748,27.5339758 165.785748,28.1000117 C165.785748,28.6660476 165.329979,29.1250146 164.767888,29.1250146 C164.205797,29.1250146 163.750029,28.6660476 163.750029,28.1000117 C163.750029,27.5339758 164.205797,27.0750088 164.767888,27.0750088 Z"
                                                id="Combined-Shape"
                                              ></path>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                      <h1
                                        class="text-black font-medium text-xl text-center"
                                      >
                                        Questionnaire
                                      </h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="ant-card-body">
                                Please fill out this questionnaire. The
                                information will help both OTTOMOTO® and Lenders
                                to better understand your process and objectives
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-col w-full ant-col-xs-32 ant-col-sm-12 ant-col-md-6"
                            style="padding-left: 8px; padding-right: 8px"
                          >
                            <div
                              class="ant-card ant-card-bordered ant-card-hoverable h-full hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-t-2 hover:border-primary-300"
                            >
                              <div class="ant-card-head" style="padding: 0px">
                                <div class="ant-card-head-wrapper">
                                  <div class="ant-card-head-title">
                                    <div class="flex flex-col items-center">
                                      <svg
                                        width="44px"
                                        height="43px"
                                        viewBox="0 0 44 43"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="text-primary-300"
                                      >
                                        <title>Group 23</title>
                                        <g
                                          id="*Companies-(Super-admin)"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <g
                                            id="03.1-Dealer---Edit-company---Configuration-list---Desktop-1440"
                                            transform="translate(-582.000000, -495.000000)"
                                          >
                                            <g
                                              id="Group-10-Copy-6"
                                              transform="translate(453.000000, 472.000000)"
                                            >
                                              <g
                                                id="Group"
                                                transform="translate(99.500000, 24.000000)"
                                              >
                                                <g
                                                  id="Group-23"
                                                  transform="translate(31.000000, 0.000000)"
                                                >
                                                  <path
                                                    d="M41,36.9505767 C41,39.186944 39.186944,41 36.9505767,41 L4.04942333,41 C1.81305602,41 0,39.186944 0,36.9505767 L0,4.04942333 C0,1.81305602 1.81305602,0 4.04942333,0 L36.9505767,0 C39.186944,0 41,1.81305602 41,4.04942333 L41,36.9505767 Z"
                                                    id="Path"
                                                    stroke="#F8A62D"
                                                    stroke-width="1.51851477"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                  ></path>
                                                  <line
                                                    x1="0.759358619"
                                                    y1="8.09879605"
                                                    x2="40.7469142"
                                                    y2="8.09879605"
                                                    id="Path"
                                                    stroke="#F8A62D"
                                                    stroke-width="1.51851477"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                  ></line>
                                                  <line
                                                    x1="4.80873134"
                                                    y1="4.04942333"
                                                    x2="10.8832966"
                                                    y2="4.04942333"
                                                    id="Path"
                                                    stroke="#F8A62D"
                                                    stroke-width="1.51851477"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                  ></line>
                                                  <path
                                                    d="M27.4273704,4.04942333 C27.4273704,4.73051336 26.8755078,5.28240309 26.1943906,5.28240309 C25.5132735,5.28240309 24.9614109,4.73054048 24.9614109,4.04942333 C24.9614109,3.36830619 25.5132735,2.81644357 26.1943906,2.81644357 C26.8755078,2.81644357 27.4273704,3.36830619 27.4273704,4.04942333"
                                                    id="Path"
                                                    fill="#F8A62D"
                                                    fill-rule="nonzero"
                                                  ></path>
                                                  <path
                                                    d="M32.4890863,4.04942333 C32.4890863,4.73051336 31.9372237,5.28240309 31.2561065,5.28240309 C30.5749894,5.28240309 30.0231268,4.73054048 30.0231268,4.04942333 C30.0231268,3.36830619 30.5749894,2.81644357 31.2561065,2.81644357 C31.9372237,2.81644357 32.4890863,3.36830619 32.4890863,4.04942333"
                                                    id="Path"
                                                    fill="#F8A62D"
                                                    fill-rule="nonzero"
                                                  ></path>
                                                  <path
                                                    d="M37.5508022,4.04942333 C37.5508022,4.73051336 36.9989396,5.28240309 36.3178224,5.28240309 C35.6367053,5.28240309 35.0848426,4.73054048 35.0848426,4.04942333 C35.0848426,3.36830619 35.6367053,2.81644357 36.3178224,2.81644357 C36.9989396,2.81644357 37.5508022,3.36830619 37.5508022,4.04942333"
                                                    id="Path"
                                                    fill="#F8A62D"
                                                    fill-rule="nonzero"
                                                  ></path>
                                                  <polyline
                                                    id="Path"
                                                    stroke="#F8A62D"
                                                    stroke-width="1.51851477"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    points="13.7153266 27.8308831 8.84393125 22.9594878 13.7153266 18.0880924"
                                                  ></polyline>
                                                  <polyline
                                                    id="Path"
                                                    stroke="#F8A62D"
                                                    stroke-width="1.51851477"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    points="27.2847746 27.8308831 32.15617 22.9594878 27.2847746 18.0880924"
                                                  ></polyline>
                                                  <line
                                                    x1="21.8191338"
                                                    y1="18.1321293"
                                                    x2="18.4267718"
                                                    y2="27.7873524"
                                                    id="Path"
                                                    stroke="#F8A62D"
                                                    stroke-width="1.51851477"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                  ></line>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                      <h1
                                        class="text-black font-medium text-xl text-center"
                                      >
                                        Developers
                                      </h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="ant-card-body">
                                In this section you will find different
                                development configurations that will make things
                                easier. For example, the webhook configuration.
                              </div>
                            </div>
                          </div>
                          <div
                            class="ant-col w-full ant-col-xs-32 ant-col-sm-12 ant-col-md-6"
                            style="padding-left: 8px; padding-right: 8px"
                          >
                            <div
                              class="ant-card ant-card-bordered ant-card-hoverable h-full hover:border-b-0 hover:border-r-0 hover:border-l-0 hover:border-t-2 hover:border-primary-300"
                            >
                              <div class="ant-card-head" style="padding: 0px">
                                <div class="ant-card-head-wrapper">
                                  <div class="ant-card-head-title">
                                    <div class="flex flex-col items-center">
                                      <svg
                                        width="42"
                                        height="42"
                                        viewBox="0 0 42 42"
                                        class="text-primary-300"
                                      >
                                        <g
                                          transform="translate(-907.000000, -448.000000)"
                                          fill="currentColor"
                                        >
                                          <g
                                            transform="translate(777.000000, 424.000000)"
                                          >
                                            <g
                                              transform="translate(103.000000, 24.000000)"
                                            >
                                              <path
                                                d="M47.9980368,7.4771055e-05 C47.6770922,0.00416832383 47.3712721,0.135568054 47.1477939,0.365438538 C46.924307,0.59564455 46.8019859,0.905155405 46.8076984,1.22576447 L46.8076984,19.2926089 L28.7408539,19.2926089 C28.7015345,19.2909285 28.662215,19.2909285 28.6232302,19.2926089 C27.9679027,19.3379774 27.4695331,19.898872 27.5014512,20.5548791 C27.533377,21.2108777 28.0841844,21.7203627 28.7408367,21.7015215 L46.8076812,21.7015215 L46.8076812,39.768366 C46.8002877,40.0926659 46.9239629,40.4058847 47.150805,40.6377254 C47.3773116,40.8692735 47.6878376,41 48.0121633,41 C48.3361276,41 48.6466537,40.8692735 48.8735216,40.6377254 C49.1000282,40.4058417 49.2237001,40.0926315 49.2166454,39.768366 L49.2166454,21.7015215 L67.2834899,21.7015215 C67.9381463,21.6870706 68.4613621,21.1520572 68.4613621,20.4970652 C68.4613621,19.8420733 67.9381119,19.3070624 67.2834899,19.2926089 L49.2166454,19.2926089 L49.2166454,1.22576447 C49.2223585,0.900458026 49.0960019,0.586232584 48.866467,0.355372725 C48.636932,0.124512865 48.3233862,-0.00354664892 47.998054,7.4771055e-05 L47.9980368,7.4771055e-05 Z M28.7405012,0.0166030446 C28.4205632,0.0172752173 28.1140807,0.144980879 27.8885807,0.371823017 C27.6630806,0.598665154 27.5370601,0.90582732 27.5383916,1.22576533 L27.5383916,12.8375844 C27.5383916,13.5033304 28.0781191,14.0434172 28.7438909,14.0434172 C29.4099724,14.0434172 29.9497237,13.5033648 29.9497237,12.8375844 L29.9497237,2.42591999 L40.3519245,2.42591999 C41.0065809,2.4114691 41.5297967,1.87645563 41.5297967,1.2214637 C41.5297967,0.566471758 41.0065465,0.0314608734 40.3519245,0.0170073978 L28.7405012,0.0166030446 Z M55.6712837,0.0166030446 C55.0162918,0.0310539392 54.4930674,0.566067405 54.4930674,1.22105934 C54.4930674,1.87605128 55.0163176,2.41106217 55.6712837,2.42551564 L66.0829481,2.42551564 L66.0829481,12.83718 C66.0527025,13.1739202 66.1652839,13.5079675 66.3934741,13.7576427 C66.6216584,14.0073351 66.9442806,14.1494954 67.282707,14.1494954 C67.6207893,14.1494954 67.9434115,14.0073437 68.1715957,13.7576427 C68.39978,13.5079503 68.5126978,13.1738944 68.4824573,12.83718 L68.4824573,1.22536097 C68.4848098,0.560286014 67.947782,0.0189259246 67.2827328,0.0161728817 L55.6712837,0.0166030446 Z M32.8124238,4.08868965 C32.1470133,4.08634525 31.6056446,4.62337308 31.6032357,5.28842223 L31.6032357,16.3401691 C31.6039079,16.6601071 31.7316136,16.9665896 31.9584557,17.1920896 C32.1852978,17.4175897 32.49246,17.5436102 32.812398,17.5422787 L43.8546813,17.5422787 C44.1742752,17.5436124 44.4817815,17.4175897 44.7082881,17.1920896 C44.9351302,16.9665896 45.0631725,16.6600985 45.0638436,16.3401691 L45.0638436,5.28842223 C45.0611551,4.62334727 44.5197562,4.08628881 43.8546555,4.08868965 L32.8124238,4.08868965 Z M52.1680365,4.08869772 C51.5053189,4.0900419 50.968312,4.6260659 50.9659031,5.28842223 L50.9659031,16.3401691 C50.9672473,17.0035578 51.5046134,17.540926 52.1680365,17.5423132 L63.2103198,17.5423132 C63.5299137,17.5436468 63.8370845,17.4176241 64.0639266,17.192124 C64.2907687,16.966624 64.418811,16.6601329 64.4194821,16.3402035 L64.4194821,5.28845664 C64.4167936,4.62338168 63.8753948,4.08632322 63.210294,4.08869772 L52.1680365,4.08869772 Z M34.0117182,6.49761032 L42.6545524,6.49761032 L42.6545524,15.130981 L34.0117182,15.130981 L34.0117182,6.49761032 Z M53.3767945,6.49761032 L62.0101651,6.49761032 L62.0101651,15.130981 L53.3767945,15.130981 L53.3767945,6.49761032 Z M32.8115635,23.4443045 C32.4902834,23.4433023 32.1821146,23.570331 31.954937,23.7971817 C31.7280948,24.0243594 31.6010591,24.3325367 31.6023907,24.6534727 L31.6023907,35.695756 C31.6030734,36.015694 31.7307791,36.3221765 31.9576212,36.5476765 C32.1844633,36.7731766 32.4916255,36.8991971 32.8115635,36.8978656 L43.8538468,36.8978656 C44.1734407,36.8991993 44.4809469,36.7731766 44.7074536,36.5476765 C44.9342957,36.3221765 45.062338,36.0156854 45.063015,35.695756 L45.063015,24.6534727 C45.0640173,24.3325281 44.9369885,24.0243594 44.7101378,23.7971817 C44.4829601,23.5703396 44.1747828,23.4433039 43.8538468,23.4443045 L32.8115635,23.4443045 Z M52.1671762,23.4443104 C51.8472382,23.4449826 51.5407557,23.5730238 51.3152557,23.7998659 C51.0897556,24.0267081 50.9637351,24.3338702 50.9650666,24.6534727 L50.9650666,35.695756 C50.9664214,36.3591447 51.5037875,36.8965129 52.1672106,36.8979001 L63.2094939,36.8979001 C63.5290878,36.8992337 63.8362585,36.773211 64.0631007,36.5477109 C64.2899428,36.3222109 64.4179851,36.0157198 64.4186621,35.6957904 L64.4186621,24.6535071 C64.4196643,24.3325625 64.2926356,24.0243938 64.0657849,23.7972161 C63.8386072,23.570374 63.5304299,23.4433383 63.2094939,23.4443104 L52.1671762,23.4443104 Z M34.0108578,25.853223 L42.6536921,25.853223 L42.6536921,34.4865937 L34.0108578,34.4865937 L34.0108578,25.853223 Z M53.3759341,25.853223 L62.0093048,25.853223 L62.0093048,34.4865937 L53.3759341,34.4865937 L53.3759341,25.853223 Z M28.7198534,26.9306092 C28.4002595,26.9363223 28.0961171,27.0687345 27.8743165,27.2985964 C27.6521803,27.5284669 27.5308571,27.8369712 27.5365697,28.1562381 L27.5365697,39.7680571 C27.537914,40.4314459 28.07528,40.968814 28.7387031,40.9701906 L40.3505222,40.9701906 C41.0162682,40.9701906 41.5560109,40.4304737 41.5560109,39.7647019 C41.5560109,39.0989301 41.016294,38.5588691 40.3505222,38.5588691 L29.9483214,38.5588691 L29.9483214,28.1566683 C29.9540345,27.8296756 29.8263272,27.514108 29.594779,27.2829213 C29.3632309,27.0517345 29.0473278,26.9246729 28.7203438,26.9310652 L28.7198534,26.9306092 Z M67.2624549,26.9306092 C66.598051,26.9437154 66.0697851,27.4921697 66.0814855,28.1562295 L66.0814855,38.5584303 L55.6698212,38.5584303 C55.0037396,38.5584303 54.4639883,39.0984827 54.4639883,39.7642631 C54.4639883,40.4300435 55.0037052,40.9697518 55.6698212,40.9697518 L67.2816402,40.9697518 C67.9440223,40.9673993 68.4800742,40.4303705 68.4813647,39.7676184 L68.4813647,28.1557993 C68.4870778,27.8304929 68.3607212,27.5162675 68.1311862,27.2854076 C67.9016513,27.0545305 67.5881055,26.9264882 67.2627732,26.9301096 L67.2624549,26.9306092 Z"
                                              ></path>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                      <h1
                                        class="text-black font-medium text-xl text-center"
                                      >
                                        Application Configurations
                                      </h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="ant-card-body">
                                Here you will be able to edit information
                                related to your Applications.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-labelledby="tabs--2--tab--2"
                      role="tabpanel"
                      tabindex="-1"
                      data-reach-tab-panel=""
                      id="tabs--2--panel--2"
                      hidden=""
                    >
                      <div>
                        <div class="flex justify-between">
                          <div>
                            <h3 class="font-bold text-primary-300">
                              Company Doc library
                            </h3>
                            <p class="text-black"></p>
                          </div>
                          <button
                            id=""
                            type="submit"
                            class="inline-flex rounded-sm text-sm leading-4 px-3 py-1.5 border-transparent text-white bg-primary-300 shadow-sm hover:bg-primary-400 transition-colors items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-primary-300"
                          >
                            Add new template
                          </button>
                        </div>
                        <div class="space-y-4 py-4">
                          <form
                            class="ant-form ant-form-inline items-center grid sm:grid-cols-7"
                          >
                            <div
                              class="ant-row ant-form-item inline sm:col-span-3"
                              style="row-gap: 0px"
                            >
                              <div class="ant-col ant-form-item-control">
                                <div class="ant-form-item-control-input">
                                  <div
                                    class="ant-form-item-control-input-content"
                                  >
                                    <span
                                      class="ant-input-group-wrapper ant-input-search"
                                      ><span
                                        class="ant-input-wrapper ant-input-group"
                                        ><span class="ant-input-affix-wrapper"
                                          ><input
                                            placeholder="Search by document name..."
                                            id="name"
                                            class="ant-input"
                                            type="text"
                                            value="" /><span
                                            class="ant-input-suffix"
                                            ><span
                                              role="button"
                                              aria-label="close-circle"
                                              tabindex="-1"
                                              class="anticon anticon-close-circle ant-input-clear-icon-hidden ant-input-clear-icon"
                                              ><svg
                                                viewBox="64 64 896 896"
                                                focusable="false"
                                                data-icon="close-circle"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                              >
                                                <path
                                                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
                                                ></path></svg></span></span></span
                                        ><span class="ant-input-group-addon"
                                          ><button
                                            type="button"
                                            class="ant-btn ant-btn-icon-only ant-input-search-button"
                                          >
                                            <span
                                              role="img"
                                              aria-label="search"
                                              class="anticon anticon-search"
                                              ><svg
                                                viewBox="64 64 896 896"
                                                focusable="false"
                                                data-icon="search"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                              >
                                                <path
                                                  d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                                                ></path></svg
                                            ></span></button></span></span
                                    ></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="ant-row ant-form-item inline sm:col-span-2"
                              style="row-gap: 0px"
                            >
                              <div class="ant-col ant-form-item-control">
                                <div class="ant-form-item-control-input">
                                  <div
                                    class="ant-form-item-control-input-content"
                                  >
                                    <div
                                      class="ant-select ant-select-single ant-select-allow-clear ant-select-show-arrow"
                                    >
                                      <div class="ant-select-selector">
                                        <span
                                          class="ant-select-selection-search"
                                          ><input
                                            id="officeId"
                                            autocomplete="off"
                                            type="search"
                                            class="ant-select-selection-search-input"
                                            role="combobox"
                                            aria-haspopup="listbox"
                                            aria-owns="officeId_list"
                                            aria-autocomplete="list"
                                            aria-controls="officeId_list"
                                            aria-activedescendant="officeId_list_0"
                                            readonly=""
                                            unselectable="on"
                                            value=""
                                            style="opacity: 0" /></span
                                        ><span
                                          class="ant-select-selection-placeholder"
                                          >Queue/Store</span
                                        >
                                      </div>
                                      <span
                                        class="ant-select-arrow"
                                        unselectable="on"
                                        aria-hidden="true"
                                        style="user-select: none"
                                        ><span
                                          role="img"
                                          aria-label="down"
                                          class="anticon anticon-down ant-select-suffix"
                                          ><svg
                                            viewBox="64 64 896 896"
                                            focusable="false"
                                            data-icon="down"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            aria-hidden="true"
                                          >
                                            <path
                                              d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                                            ></path></svg></span
                                      ></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="ant-row ant-form-item inline sm:col-span-2"
                              style="row-gap: 0px"
                            >
                              <div class="ant-col ant-form-item-control">
                                <div class="ant-form-item-control-input">
                                  <div
                                    class="ant-form-item-control-input-content"
                                  >
                                    <div
                                      class="ant-picker ant-picker-range w-full"
                                    >
                                      <div
                                        class="ant-picker-input ant-picker-input-active"
                                      >
                                        <input
                                          id="dateRange"
                                          readonly=""
                                          placeholder="Start date"
                                          size="12"
                                          autocomplete="off"
                                          value=""
                                        />
                                      </div>
                                      <div class="ant-picker-range-separator">
                                        <span
                                          aria-label="to"
                                          class="ant-picker-separator"
                                          ><span
                                            role="img"
                                            aria-label="swap-right"
                                            class="anticon anticon-swap-right"
                                            ><svg
                                              viewBox="0 0 1024 1024"
                                              focusable="false"
                                              data-icon="swap-right"
                                              width="1em"
                                              height="1em"
                                              fill="currentColor"
                                              aria-hidden="true"
                                            >
                                              <path
                                                d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z"
                                              ></path></svg></span
                                        ></span>
                                      </div>
                                      <div class="ant-picker-input">
                                        <input
                                          readonly=""
                                          placeholder="End date"
                                          size="12"
                                          autocomplete="off"
                                          value=""
                                        />
                                      </div>
                                      <div
                                        class="ant-picker-active-bar"
                                        style="
                                          left: 0px;
                                          width: 0px;
                                          position: absolute;
                                        "
                                      ></div>
                                      <span class="ant-picker-suffix"
                                        ><svg
                                          stroke="currentColor"
                                          fill="currentColor"
                                          stroke-width="0"
                                          viewBox="0 0 1024 1024"
                                          class="text-primary-300"
                                          height="1em"
                                          width="1em"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"
                                          ></path></svg
                                      ></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                          <div class="ant-table-wrapper">
                            <div class="ant-spin-nested-loading">
                              <div class="ant-spin-container">
                                <div
                                  class="ant-table ant-table-scroll-horizontal"
                                >
                                  <div class="ant-table-container">
                                    <div
                                      class="ant-table-content"
                                      style="overflow: auto hidden"
                                    >
                                      <table
                                        style="
                                          width: 800px;
                                          min-width: 100%;
                                          table-layout: auto;
                                        "
                                      >
                                        <colgroup></colgroup>
                                        <thead class="ant-table-thead">
                                          <tr>
                                            <th class="ant-table-cell">
                                              Document name
                                            </th>
                                            <th class="ant-table-cell">
                                              Number of assigned stores
                                            </th>
                                            <th class="ant-table-cell">
                                              Date/time
                                            </th>
                                            <th class="ant-table-cell">
                                              Actions
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody class="ant-table-tbody">
                                          <tr
                                            aria-hidden="true"
                                            class="ant-table-measure-row"
                                            style="height: 0px; font-size: 0px"
                                          >
                                            <td
                                              style="
                                                padding: 0px;
                                                border: 0px;
                                                height: 0px;
                                              "
                                            >
                                              <div
                                                style="
                                                  height: 0px;
                                                  overflow: hidden;
                                                "
                                              >
                                                &nbsp;
                                              </div>
                                            </td>
                                            <td
                                              style="
                                                padding: 0px;
                                                border: 0px;
                                                height: 0px;
                                              "
                                            >
                                              <div
                                                style="
                                                  height: 0px;
                                                  overflow: hidden;
                                                "
                                              >
                                                &nbsp;
                                              </div>
                                            </td>
                                            <td
                                              style="
                                                padding: 0px;
                                                border: 0px;
                                                height: 0px;
                                              "
                                            >
                                              <div
                                                style="
                                                  height: 0px;
                                                  overflow: hidden;
                                                "
                                              >
                                                &nbsp;
                                              </div>
                                            </td>
                                            <td
                                              style="
                                                padding: 0px;
                                                border: 0px;
                                                height: 0px;
                                              "
                                            >
                                              <div
                                                style="
                                                  height: 0px;
                                                  overflow: hidden;
                                                "
                                              >
                                                &nbsp;
                                              </div>
                                            </td>
                                          </tr>
                                          <tr
                                            data-row-key="30bdf887-8052-4faf-9e18-ae0205cddb45"
                                            class="ant-table-row ant-table-row-level-0"
                                          >
                                            <td class="ant-table-cell">
                                              <div class="flex items-center">
                                                <span title="nombre x"
                                                  >nombre x</span
                                                >
                                              </div>
                                            </td>
                                            <td class="ant-table-cell">1</td>
                                            <td class="ant-table-cell">
                                              07/06/2023, 4:52 pm
                                            </td>
                                            <td class="ant-table-cell">
                                              <div class="flex items-center">
                                                <span
                                                  ><button
                                                    type="button"
                                                    aria-label="Make invisible for applicants"
                                                    class="text-green hover:bg-green p-1 transition-colors inline-flex items-center border border-transparent rounded-full hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                  >
                                                    <svg
                                                      stroke="currentColor"
                                                      fill="currentColor"
                                                      stroke-width="0"
                                                      viewBox="0 0 1024 1024"
                                                      aria-hidden="true"
                                                      class="h-5 w-5"
                                                      height="1em"
                                                      width="1em"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                      <path
                                                        d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                      ></path>
                                                      <path
                                                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                                                      ></path>
                                                    </svg></button></span
                                                ><span
                                                  ><button
                                                    type="submit"
                                                    aria-label="Edit Document"
                                                    class="rounded-full p-1.5 border-transparent text-primary-300 hover:text-opacity-80 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                  >
                                                    <svg
                                                      stroke="currentColor"
                                                      fill="currentColor"
                                                      stroke-width="0"
                                                      viewBox="0 0 1024 1024"
                                                      class="h-5 w-5"
                                                      height="1em"
                                                      width="1em"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                      <path
                                                        d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                                                      ></path>
                                                    </svg></button></span
                                                ><span
                                                  ><button
                                                    type="submit"
                                                    aria-label="Delete Document"
                                                    class="rounded-full p-1.5 border-transparent text-primary-300 hover:text-opacity-80 transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300"
                                                  >
                                                    <svg
                                                      stroke="currentColor"
                                                      fill="currentColor"
                                                      stroke-width="0"
                                                      viewBox="0 0 1024 1024"
                                                      class="h-5 w-5"
                                                      height="1em"
                                                      width="1em"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                      <path
                                                        d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                                                      ></path>
                                                    </svg></button
                                                ></span>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                                <ul
                                  class="ant-pagination ant-table-pagination ant-table-pagination-right"
                                  unselectable="unselectable"
                                >
                                  <li class="ant-pagination-total-text">
                                    Total records 1
                                  </li>
                                  <li
                                    title="Previous Page"
                                    class="ant-pagination-prev ant-pagination-disabled"
                                    aria-disabled="true"
                                  >
                                    <button
                                      class="ant-pagination-item-link"
                                      type="button"
                                      tabindex="-1"
                                      disabled=""
                                    >
                                      <span
                                        role="img"
                                        aria-label="left"
                                        class="anticon anticon-left"
                                        ><svg
                                          viewBox="64 64 896 896"
                                          focusable="false"
                                          data-icon="left"
                                          width="1em"
                                          height="1em"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                                          ></path></svg
                                      ></span>
                                    </button>
                                  </li>
                                  <li
                                    title="1"
                                    class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"
                                    tabindex="0"
                                  >
                                    <a rel="nofollow">1</a>
                                  </li>
                                  <li
                                    title="Next Page"
                                    class="ant-pagination-next ant-pagination-disabled"
                                    aria-disabled="true"
                                  >
                                    <button
                                      class="ant-pagination-item-link"
                                      type="button"
                                      tabindex="-1"
                                      disabled=""
                                    >
                                      <span
                                        role="img"
                                        aria-label="right"
                                        class="anticon anticon-right"
                                        ><svg
                                          viewBox="64 64 896 896"
                                          focusable="false"
                                          data-icon="right"
                                          width="1em"
                                          height="1em"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                                          ></path></svg
                                      ></span>
                                    </button>
                                  </li>
                                  <li class="ant-pagination-options">
                                    <div
                                      class="ant-select ant-pagination-options-size-changer ant-select-single ant-select-show-arrow"
                                      aria-label="Page Size"
                                    >
                                      <div class="ant-select-selector">
                                        <span
                                          class="ant-select-selection-search"
                                          ><input
                                            autocomplete="off"
                                            type="search"
                                            class="ant-select-selection-search-input"
                                            role="combobox"
                                            aria-expanded="false"
                                            aria-haspopup="listbox"
                                            aria-owns="rc_select_11_list"
                                            aria-autocomplete="list"
                                            aria-controls="rc_select_11_list"
                                            aria-activedescendant="rc_select_11_list_0"
                                            aria-label="Page Size"
                                            readonly=""
                                            unselectable="on"
                                            value=""
                                            id="rc_select_11"
                                            style="opacity: 0" /></span
                                        ><span
                                          class="ant-select-selection-item"
                                          title="10 / page"
                                          >10 / page</span
                                        >
                                      </div>
                                      <span
                                        class="ant-select-arrow"
                                        unselectable="on"
                                        aria-hidden="true"
                                        style="user-select: none"
                                        ><span
                                          role="img"
                                          aria-label="down"
                                          class="anticon anticon-down ant-select-suffix"
                                          ><svg
                                            viewBox="64 64 896 896"
                                            focusable="false"
                                            data-icon="down"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            aria-hidden="true"
                                          >
                                            <path
                                              d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                                            ></path></svg></span
                                      ></span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-labelledby="tabs--2--tab--3"
                      role="tabpanel"
                      tabindex="-1"
                      data-reach-tab-panel=""
                      id="tabs--2--panel--3"
                      hidden=""
                    >
                      <div class="space-y-4">
                        <div class="flex justify-between items-center">
                          <h3 class="font-bold text-primary-300">OTTOsign™</h3>
                        </div>
                        <p class="text-black text-sm pb-4">
                          In this card, you can find tools that can be used in
                          your website. You will see a highlight URL that can be
                          added as a new button for your applicants to create
                          applications, or you can download a QR Code of your
                          own company for users to scan it and create
                          applications that will reach your company.
                        </p>
                        <form
                          id="documentsFilters"
                          class="ant-form ant-form-inline grid grid-cols-12 items-center gap-x-4"
                        >
                          <div
                            class="ant-row ant-form-item col-span-12 mr-0 mb-3 md:col-span-9 md:mb-0 md:mr-4 lg:col-span-10"
                            style="row-gap: 0px"
                          >
                            <div class="ant-col ant-form-item-control">
                              <div class="ant-form-item-control-input">
                                <div
                                  class="ant-form-item-control-input-content"
                                >
                                  <span
                                    class="ant-input-group-wrapper ant-input-search"
                                    ><span
                                      class="ant-input-wrapper ant-input-group"
                                      ><span class="ant-input-affix-wrapper"
                                        ><input
                                          placeholder="Search..."
                                          id="documentsFilters_search"
                                          class="ant-input"
                                          type="text"
                                          value="" /><span
                                          class="ant-input-suffix"
                                          ><span
                                            role="button"
                                            aria-label="close-circle"
                                            tabindex="-1"
                                            class="anticon anticon-close-circle ant-input-clear-icon-hidden ant-input-clear-icon"
                                            ><svg
                                              viewBox="64 64 896 896"
                                              focusable="false"
                                              data-icon="close-circle"
                                              width="1em"
                                              height="1em"
                                              fill="currentColor"
                                              aria-hidden="true"
                                            >
                                              <path
                                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
                                              ></path></svg></span></span></span
                                      ><span class="ant-input-group-addon"
                                        ><button
                                          type="button"
                                          class="ant-btn ant-btn-icon-only ant-input-search-button"
                                        >
                                          <span
                                            role="img"
                                            aria-label="search"
                                            class="anticon anticon-search"
                                            ><svg
                                              viewBox="64 64 896 896"
                                              focusable="false"
                                              data-icon="search"
                                              width="1em"
                                              height="1em"
                                              fill="currentColor"
                                              aria-hidden="true"
                                            >
                                              <path
                                                d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                                              ></path></svg
                                          ></span></button></span></span
                                  ></span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-span-12 md:col-span-3 lg:col-span-2">
                            <button
                              id=""
                              type="button"
                              disabled=""
                              class="flex w-full rounded-sm text-sm leading-4 px-3 py-1.5 border-transparent text-white bg-primary-300 shadow-sm opacity-50 cursor-not-allowed transition-colors items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-primary-300"
                            >
                              Apply selected documents
                            </button>
                          </div>
                        </form>
                        <div class="ant-table-wrapper">
                          <div class="ant-spin-nested-loading">
                            <div class="ant-spin-container">
                              <div
                                class="ant-table ant-table-scroll-horizontal"
                              >
                                <div class="ant-table-container">
                                  <div
                                    class="ant-table-content"
                                    style="overflow: auto hidden"
                                  >
                                    <table
                                      style="
                                        width: 800px;
                                        min-width: 100%;
                                        table-layout: auto;
                                      "
                                    >
                                      <colgroup>
                                        <col class="ant-table-selection-col" />
                                      </colgroup>
                                      <thead class="ant-table-thead">
                                        <tr>
                                          <th
                                            class="ant-table-cell ant-table-selection-column"
                                          >
                                            <div class="ant-table-selection">
                                              <label
                                                class="ant-checkbox-wrapper ant-checkbox-wrapper-checked ant-checkbox-wrapper-disabled"
                                                ><span
                                                  class="ant-checkbox ant-checkbox-checked ant-checkbox-disabled"
                                                  ><input
                                                    type="checkbox"
                                                    disabled=""
                                                    class="ant-checkbox-input"
                                                    value="" /><span
                                                    class="ant-checkbox-inner"
                                                  ></span></span
                                              ></label>
                                            </div>
                                          </th>
                                          <th class="ant-table-cell">
                                            Documents
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody class="ant-table-tbody">
                                        <tr
                                          aria-hidden="true"
                                          class="ant-table-measure-row"
                                          style="height: 0px; font-size: 0px"
                                        >
                                          <td
                                            style="
                                              padding: 0px;
                                              border: 0px;
                                              height: 0px;
                                            "
                                          >
                                            <div
                                              style="
                                                height: 0px;
                                                overflow: hidden;
                                              "
                                            >
                                              &nbsp;
                                            </div>
                                          </td>
                                          <td
                                            style="
                                              padding: 0px;
                                              border: 0px;
                                              height: 0px;
                                            "
                                          >
                                            <div
                                              style="
                                                height: 0px;
                                                overflow: hidden;
                                              "
                                            >
                                              &nbsp;
                                            </div>
                                          </td>
                                        </tr>
                                        <tr
                                          data-row-key="bcc5a8f1-28f9-4d2a-96ad-6bb98f41c1b8"
                                          class="ant-table-row ant-table-row-level-0 ant-table-row-selected"
                                        >
                                          <td
                                            class="ant-table-cell ant-table-selection-column"
                                          >
                                            <label
                                              class="ant-checkbox-wrapper ant-checkbox-wrapper-checked ant-checkbox-wrapper-disabled"
                                              ><span
                                                class="ant-checkbox ant-checkbox-checked ant-checkbox-disabled"
                                                ><input
                                                  type="checkbox"
                                                  disabled=""
                                                  class="ant-checkbox-input"
                                                  value=""
                                                  checked="" /><span
                                                  class="ant-checkbox-inner"
                                                ></span></span
                                            ></label>
                                          </td>
                                          <td class="ant-table-cell">
                                            Agreement to lease a vehicle
                                          </td>
                                        </tr>
                                        <tr
                                          data-row-key="66dccb47-f54f-477c-a02f-db96f09b044f"
                                          class="ant-table-row ant-table-row-level-0 ant-table-row-selected"
                                        >
                                          <td
                                            class="ant-table-cell ant-table-selection-column"
                                          >
                                            <label
                                              class="ant-checkbox-wrapper ant-checkbox-wrapper-checked ant-checkbox-wrapper-disabled"
                                              ><span
                                                class="ant-checkbox ant-checkbox-checked ant-checkbox-disabled"
                                                ><input
                                                  type="checkbox"
                                                  disabled=""
                                                  class="ant-checkbox-input"
                                                  value=""
                                                  checked="" /><span
                                                  class="ant-checkbox-inner"
                                                ></span></span
                                            ></label>
                                          </td>
                                          <td class="ant-table-cell">
                                            Agreement to Provide Insurance
                                          </td>
                                        </tr>
                                        <tr
                                          data-row-key="dc8bacd6-6499-4759-8042-e8241f0085fa"
                                          class="ant-table-row ant-table-row-level-0 ant-table-row-selected"
                                        >
                                          <td
                                            class="ant-table-cell ant-table-selection-column"
                                          >
                                            <label
                                              class="ant-checkbox-wrapper ant-checkbox-wrapper-checked ant-checkbox-wrapper-disabled"
                                              ><span
                                                class="ant-checkbox ant-checkbox-checked ant-checkbox-disabled"
                                                ><input
                                                  type="checkbox"
                                                  disabled=""
                                                  class="ant-checkbox-input"
                                                  value=""
                                                  checked="" /><span
                                                  class="ant-checkbox-inner"
                                                ></span></span
                                            ></label>
                                          </td>
                                          <td class="ant-table-cell">
                                            Arbitration Agreement
                                          </td>
                                        </tr>
                                        <tr
                                          data-row-key="2ed2382d-f0d0-42cf-8264-fe7cf9d53d0f"
                                          class="ant-table-row ant-table-row-level-0 ant-table-row-selected"
                                        >
                                          <td
                                            class="ant-table-cell ant-table-selection-column"
                                          >
                                            <label
                                              class="ant-checkbox-wrapper ant-checkbox-wrapper-checked ant-checkbox-wrapper-disabled"
                                              ><span
                                                class="ant-checkbox ant-checkbox-checked ant-checkbox-disabled"
                                                ><input
                                                  type="checkbox"
                                                  disabled=""
                                                  class="ant-checkbox-input"
                                                  value=""
                                                  checked="" /><span
                                                  class="ant-checkbox-inner"
                                                ></span></span
                                            ></label>
                                          </td>
                                          <td class="ant-table-cell">
                                            Bill of Sale (Buyers Order)
                                          </td>
                                        </tr>
                                        <tr
                                          data-row-key="80c6178f-d692-4972-9134-bd686c6c320a"
                                          class="ant-table-row ant-table-row-level-0 ant-table-row-selected"
                                        >
                                          <td
                                            class="ant-table-cell ant-table-selection-column"
                                          >
                                            <label
                                              class="ant-checkbox-wrapper ant-checkbox-wrapper-checked ant-checkbox-wrapper-disabled"
                                              ><span
                                                class="ant-checkbox ant-checkbox-checked ant-checkbox-disabled"
                                                ><input
                                                  type="checkbox"
                                                  disabled=""
                                                  class="ant-checkbox-input"
                                                  value=""
                                                  checked="" /><span
                                                  class="ant-checkbox-inner"
                                                ></span></span
                                            ></label>
                                          </td>
                                          <td class="ant-table-cell">
                                            Privacy Notice
                                          </td>
                                        </tr>
                                        <tr
                                          data-row-key="8df71051-08d9-4d69-b609-85dd1fa8c310"
                                          class="ant-table-row ant-table-row-level-0 ant-table-row-selected"
                                        >
                                          <td
                                            class="ant-table-cell ant-table-selection-column"
                                          >
                                            <label
                                              class="ant-checkbox-wrapper ant-checkbox-wrapper-checked ant-checkbox-wrapper-disabled"
                                              ><span
                                                class="ant-checkbox ant-checkbox-checked ant-checkbox-disabled"
                                                ><input
                                                  type="checkbox"
                                                  disabled=""
                                                  class="ant-checkbox-input"
                                                  value=""
                                                  checked="" /><span
                                                  class="ant-checkbox-inner"
                                                ></span></span
                                            ></label>
                                          </td>
                                          <td class="ant-table-cell">
                                            T-8 Limited POA (Buyer)
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <ul
                                class="ant-pagination ant-table-pagination ant-table-pagination-right"
                                unselectable="unselectable"
                              >
                                <li class="ant-pagination-total-text">
                                  Total records 6
                                </li>
                                <li
                                  title="Previous Page"
                                  class="ant-pagination-prev ant-pagination-disabled"
                                  aria-disabled="true"
                                >
                                  <button
                                    class="ant-pagination-item-link"
                                    type="button"
                                    tabindex="-1"
                                    disabled=""
                                  >
                                    <span
                                      role="img"
                                      aria-label="left"
                                      class="anticon anticon-left"
                                      ><svg
                                        viewBox="64 64 896 896"
                                        focusable="false"
                                        data-icon="left"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path
                                          d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                                        ></path></svg
                                    ></span>
                                  </button>
                                </li>
                                <li
                                  title="1"
                                  class="ant-pagination-item ant-pagination-item-1 ant-pagination-item-active"
                                  tabindex="0"
                                >
                                  <a rel="nofollow">1</a>
                                </li>
                                <li
                                  title="Next Page"
                                  class="ant-pagination-next ant-pagination-disabled"
                                  aria-disabled="true"
                                >
                                  <button
                                    class="ant-pagination-item-link"
                                    type="button"
                                    tabindex="-1"
                                    disabled=""
                                  >
                                    <span
                                      role="img"
                                      aria-label="right"
                                      class="anticon anticon-right"
                                      ><svg
                                        viewBox="64 64 896 896"
                                        focusable="false"
                                        data-icon="right"
                                        width="1em"
                                        height="1em"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path
                                          d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                                        ></path></svg
                                    ></span>
                                  </button>
                                </li>
                                <li class="ant-pagination-options">
                                  <div
                                    class="ant-select ant-pagination-options-size-changer ant-select-single ant-select-show-arrow"
                                    aria-label="Page Size"
                                  >
                                    <div class="ant-select-selector">
                                      <span class="ant-select-selection-search"
                                        ><input
                                          autocomplete="off"
                                          type="search"
                                          class="ant-select-selection-search-input"
                                          role="combobox"
                                          aria-expanded="false"
                                          aria-haspopup="listbox"
                                          aria-owns="rc_select_18_list"
                                          aria-autocomplete="list"
                                          aria-controls="rc_select_18_list"
                                          aria-activedescendant="rc_select_18_list_0"
                                          aria-label="Page Size"
                                          readonly=""
                                          unselectable="on"
                                          value=""
                                          id="rc_select_18"
                                          style="opacity: 0" /></span
                                      ><span
                                        class="ant-select-selection-item"
                                        title="10 / page"
                                        >10 / page</span
                                      >
                                    </div>
                                    <span
                                      class="ant-select-arrow"
                                      unselectable="on"
                                      aria-hidden="true"
                                      style="user-select: none"
                                      ><span
                                        role="img"
                                        aria-label="down"
                                        class="anticon anticon-down ant-select-suffix"
                                        ><svg
                                          viewBox="64 64 896 896"
                                          focusable="false"
                                          data-icon="down"
                                          width="1em"
                                          height="1em"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                                          ></path></svg></span
                                    ></span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    ;
  </div>
  <div
    style="position: fixed; z-index: 9999; inset: 16px; pointer-events: none"
  ></div>
</div>

  )
}

import React from 'react'

function Download() {
  return (
    <div className='max-w-[1600px] m-auto py-10 rounded-3xl px-3' id='app'><section id="download" aria-label="" className="hover:outline-blue-200 hover:outline-2 bg-[#aaaaff41] duration-500 shadow-lg shadow-[#0000008c] rounded-3xl ">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        className="relative -mx-4 overflow-hidden px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-26">
        <div className="relative mx-auto grid max-w-2xl gap-x-32 gap-y-2 text-center xl:max-w-none">
          <p className="mt-4 text-xl font-medium tracking-tight text-white/50 md:text-2xl lg:text-4xl">Now available to
            In App.
          </p>
          <h4 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-7xl">
            Lets start your journey
          </h4>
          <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-4">
            <div className="flex justify-center md:w-auto" >
              <a target="_blank" aria-label="Download on the iOS App Store"
                className="rounded-2xl p-2 px-4 md:p-4 md:px-6 flex items-center w-40 sm:w-48 md:w-56 bg-white text-gray-900 hover:bg-gray-50"
                href="">
                <svg width="100%" viewBox="0 0 132 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23.6933 20.6294C23.7069 19.575 23.987 18.5412 24.5075 17.6241C25.028 16.707 25.772 15.9365 26.6703 15.3842C26.0997 14.5692 25.3468 13.8984 24.4716 13.4252C23.5963 12.9521 22.6228 12.6895 21.6283 12.6584C19.507 12.4357 17.4504 13.9278 16.3694 13.9278C15.2674 13.9278 13.603 12.6805 11.8108 12.7174C10.6515 12.7548 9.52166 13.0919 8.53139 13.6959C7.54113 14.2998 6.72419 15.1499 6.16017 16.1635C3.71702 20.3935 5.53939 26.6102 7.87976 30.0295C9.05071 31.7038 10.4192 33.574 12.2099 33.5077C13.9621 33.435 14.6166 32.3904 16.7317 32.3904C18.8272 32.3904 19.4412 33.5077 21.2682 33.4656C23.1484 33.435 24.3331 31.7838 25.463 30.0936C26.3043 28.9006 26.9517 27.5821 27.3812 26.1869C26.2888 25.7249 25.3566 24.9515 24.7008 23.9632C24.045 22.975 23.6946 21.8155 23.6933 20.6294Z"
                    fill="black"></path>
                  <path
                    d="M20.2424 10.4097C21.2677 9.17897 21.7727 7.5971 21.6504 6C20.0842 6.16451 18.6374 6.91308 17.5983 8.09657C17.0903 8.67474 16.7012 9.34736 16.4533 10.076C16.2054 10.8046 16.1035 11.575 16.1535 12.343C16.9369 12.3511 17.7119 12.1813 18.4202 11.8464C19.1285 11.5115 19.7515 11.0203 20.2424 10.4097Z"
                    fill="black"></path>
                  <path
                    d="M44.7162 29.4369H38.9659L37.585 33.5144H35.1494L40.596 18.4287H43.1264L48.573 33.5144H46.0959L44.7162 29.4369ZM39.5615 27.5554H44.1195L41.8725 20.9379H41.8096L39.5615 27.5554Z"
                    fill="black"></path>
                  <path
                    d="M60.3355 28.016C60.3355 31.4339 58.5062 33.6298 55.7456 33.6298C55.0462 33.6664 54.3507 33.5053 53.7387 33.165C53.1267 32.8246 52.6229 32.3189 52.285 31.7055H52.2327V37.1532H49.9751V22.516H52.1604V24.3454H52.2019C52.5553 23.735 53.0677 23.2318 53.6844 22.8894C54.301 22.547 54.999 22.3782 55.704 22.401C58.4955 22.401 60.3355 24.6076 60.3355 28.016ZM58.015 28.016C58.015 25.7892 56.8643 24.3252 55.1085 24.3252C53.3835 24.3252 52.2233 25.82 52.2233 28.016C52.2233 30.2321 53.3835 31.7162 55.1085 31.7162C56.8643 31.7162 58.015 30.2629 58.015 28.016Z"
                    fill="black"></path>
                  <path
                    d="M72.4416 28.016C72.4416 31.4339 70.6117 33.6298 67.851 33.6298C67.1517 33.6664 66.4562 33.5053 65.8442 33.165C65.2322 32.8246 64.7284 32.3189 64.3904 31.7055H64.3382V37.1532H62.0806V22.516H64.2658V24.3454H64.3074C64.6608 23.735 65.1731 23.2318 65.7898 22.8894C66.4065 22.547 67.1045 22.3782 67.8095 22.401C70.601 22.401 72.4416 24.6076 72.4416 28.016ZM70.1205 28.016C70.1205 25.7892 68.9698 24.3252 67.214 24.3252C65.489 24.3252 64.3287 25.82 64.3287 28.016C64.3287 30.2321 65.489 31.7162 67.214 31.7162C68.9698 31.7162 70.1205 30.2629 70.1205 28.016Z"
                    fill="black"></path>
                  <path
                    d="M80.4414 29.3112C80.6087 30.8072 82.062 31.7895 84.048 31.7895C85.9509 31.7895 87.3199 30.8072 87.3199 29.4583C87.3199 28.2874 86.4942 27.5862 84.5391 27.1057L82.584 26.6348C79.8139 25.9657 78.5279 24.6702 78.5279 22.5679C78.5279 19.9651 80.7962 18.1772 84.0159 18.1772C87.2048 18.1772 89.3901 19.9651 89.4637 22.5679H87.1847C87.0482 21.0625 85.8037 20.1537 83.9851 20.1537C82.1664 20.1537 80.9219 21.0731 80.9219 22.4113C80.9219 23.4779 81.7168 24.1055 83.6612 24.5859L85.3233 24.994C88.4185 25.726 89.7033 26.9693 89.7033 29.1759C89.7033 31.9982 87.4563 33.7659 83.8806 33.7659C80.5351 33.7659 78.2763 32.0397 78.1304 29.3111L80.4414 29.3112Z"
                    fill="black"></path>
                  <path
                    d="M94.578 19.9131V22.5159H96.6695V24.3038H94.578V30.3672C94.578 31.3092 94.9967 31.7481 95.9162 31.7481C96.1645 31.7438 96.4124 31.7264 96.6588 31.6959V33.4731C96.2454 33.5503 95.8253 33.5853 95.4048 33.5775C93.1781 33.5775 92.3096 32.7411 92.3096 30.608V24.3038H90.7104V22.5159H92.3096V19.9131H94.578Z"
                    fill="black"></path>
                  <path
                    d="M97.8794 28.0155C97.8794 24.555 99.9175 22.3804 103.096 22.3804C106.285 22.3804 108.313 24.5549 108.313 28.0155C108.313 31.4856 106.295 33.6507 103.096 33.6507C99.8974 33.6507 97.8794 31.4856 97.8794 28.0155ZM106.013 28.0155C106.013 25.6417 104.925 24.2406 103.096 24.2406C101.266 24.2406 100.179 25.6523 100.179 28.0155C100.179 30.3989 101.266 31.7893 103.096 31.7893C104.925 31.7893 106.013 30.3989 106.013 28.0155Z"
                    fill="black"></path>
                  <path
                    d="M110.175 22.5159H112.328V24.388H112.38C112.526 23.8033 112.868 23.2866 113.35 22.9247C113.832 22.5628 114.424 22.3778 115.026 22.4008C115.286 22.3999 115.545 22.4282 115.799 22.4851V24.5968C115.471 24.4964 115.128 24.4503 114.785 24.4604C114.457 24.447 114.13 24.5049 113.827 24.6299C113.523 24.7549 113.25 24.944 113.027 25.1844C112.803 25.4249 112.634 25.7108 112.532 26.0226C112.429 26.3344 112.395 26.6647 112.432 26.9908V33.5146H110.175L110.175 22.5159Z"
                    fill="black"></path>
                  <path
                    d="M126.209 30.2839C125.905 32.2805 123.96 33.6507 121.473 33.6507C118.273 33.6507 116.287 31.507 116.287 28.0677C116.287 24.6178 118.284 22.3804 121.378 22.3804C124.421 22.3804 126.334 24.4707 126.334 27.8056V28.5791H118.566V28.7155C118.53 29.1203 118.581 29.528 118.715 29.9117C118.849 30.2954 119.063 30.6463 119.342 30.9409C119.622 31.2356 119.962 31.4673 120.338 31.6207C120.714 31.7742 121.119 31.8458 121.525 31.8308C122.058 31.8808 122.594 31.7573 123.051 31.4785C123.509 31.1998 123.864 30.7808 124.065 30.2838L126.209 30.2839ZM118.577 27.0012H124.076C124.096 26.6373 124.041 26.273 123.913 25.9314C123.786 25.5898 123.59 25.2782 123.337 25.016C123.083 24.7539 122.778 24.547 122.441 24.4082C122.104 24.2695 121.742 24.2019 121.378 24.2097C121.01 24.2075 120.646 24.2782 120.305 24.4176C119.965 24.557 119.656 24.7623 119.396 25.0219C119.135 25.2814 118.929 25.5899 118.788 25.9297C118.648 26.2694 118.576 26.6336 118.577 27.0012Z"
                    fill="black"></path>
                  <path
                    d="M39.2794 7.07317C39.7527 7.0392 40.2277 7.11071 40.67 7.28252C41.1123 7.45434 41.511 7.72218 41.8373 8.06674C42.1636 8.41129 42.4093 8.82397 42.5568 9.275C42.7043 9.72603 42.7499 10.2042 42.6902 10.6749C42.6902 12.9907 41.4386 14.3218 39.2794 14.3218H36.6611V7.07317H39.2794ZM37.787 13.2967H39.1537C39.4919 13.3169 39.8303 13.2615 40.1444 13.1344C40.4585 13.0073 40.7403 12.8118 40.9693 12.5621C41.1983 12.3123 41.3687 12.0147 41.4681 11.6908C41.5676 11.3669 41.5935 11.0249 41.5441 10.6897C41.59 10.3558 41.5613 10.016 41.4604 9.69443C41.3594 9.37291 41.1886 9.07771 40.9601 8.82997C40.7316 8.58223 40.4512 8.38809 40.1389 8.26146C39.8266 8.13483 39.4901 8.07885 39.1537 8.09752H37.787V13.2967Z"
                    fill="black"></path>
                  <path
                    d="M43.9619 11.5844C43.9275 11.2249 43.9686 10.8622 44.0826 10.5195C44.1966 10.1769 44.381 9.8618 44.6239 9.59456C44.8668 9.32732 45.1629 9.1138 45.4931 8.96768C45.8234 8.82157 46.1805 8.74609 46.5416 8.74609C46.9028 8.74609 47.2599 8.82157 47.5902 8.96768C47.9204 9.1138 48.2165 9.32732 48.4594 9.59456C48.7023 9.8618 48.8866 10.1769 49.0006 10.5195C49.1146 10.8622 49.1557 11.2249 49.1214 11.5844C49.1564 11.9442 49.1158 12.3075 49.0021 12.6507C48.8884 12.9939 48.7041 13.3095 48.4612 13.5773C48.2182 13.8451 47.9219 14.059 47.5913 14.2055C47.2608 14.3519 46.9032 14.4275 46.5416 14.4275C46.1801 14.4275 45.8225 14.3519 45.4919 14.2055C45.1613 14.059 44.8651 13.8451 44.6221 13.5773C44.3791 13.3095 44.1949 12.9939 44.0812 12.6507C43.9675 12.3075 43.9269 11.9442 43.9619 11.5844ZM48.0109 11.5844C48.0109 10.3986 47.4782 9.70521 46.5434 9.70521C45.605 9.70521 45.0771 10.3986 45.0771 11.5844C45.0771 12.7797 45.605 13.4677 46.5434 13.4677C47.4783 13.4677 48.0109 12.7749 48.0109 11.5844Z"
                    fill="black"></path>
                  <path
                    d="M55.9797 14.3218H54.8598L53.7292 10.293H53.6438L52.518 14.3218H51.4087L49.9009 8.85156H50.9959L51.9758 13.0257H52.0565L53.1812 8.85156H54.2168L55.3415 13.0257H55.4269L56.4021 8.85156H57.4817L55.9797 14.3218Z"
                    fill="black"></path>
                  <path
                    d="M58.75 8.8517H59.7892V9.7207H59.8699C60.0068 9.40859 60.2376 9.14695 60.5302 8.97225C60.8228 8.79755 61.1627 8.7185 61.5023 8.74611C61.7685 8.7261 62.0358 8.76623 62.2843 8.86353C62.5329 8.96083 62.7563 9.11281 62.9382 9.30821C63.12 9.50361 63.2556 9.73741 63.3348 9.99231C63.414 10.2472 63.4348 10.5167 63.3958 10.7807V14.3219H62.3162V11.0518C62.3162 10.1727 61.9342 9.73554 61.1358 9.73554C60.955 9.72712 60.7746 9.75788 60.6069 9.8257C60.4392 9.89352 60.2881 9.99681 60.1641 10.1285C60.04 10.2601 59.9459 10.4171 59.8882 10.5885C59.8304 10.76 59.8104 10.9419 59.8296 11.1218V14.322H58.75L58.75 8.8517Z"
                    fill="black"></path>
                  <path d="M65.1157 6.71631H66.1953V14.322H65.1157V6.71631Z" fill="black"></path>
                  <path
                    d="M67.6958 11.5845C67.6614 11.225 67.7026 10.8622 67.8166 10.5196C67.9306 10.1769 68.115 9.86182 68.3579 9.59458C68.6008 9.32733 68.8969 9.1138 69.2272 8.96769C69.5575 8.82157 69.9146 8.74609 70.2758 8.74609C70.6369 8.74609 70.9941 8.82157 71.3244 8.96769C71.6547 9.1138 71.9507 9.32733 72.1937 9.59458C72.4366 9.86182 72.621 10.1769 72.735 10.5196C72.849 10.8622 72.8902 11.225 72.8558 11.5845C72.8908 11.9444 72.8501 12.3076 72.7364 12.6508C72.6227 12.994 72.4384 13.3096 72.1954 13.5774C71.9524 13.8451 71.6561 14.0591 71.3255 14.2055C70.9949 14.352 70.6374 14.4276 70.2758 14.4276C69.9142 14.4276 69.5566 14.352 69.2261 14.2055C68.8955 14.0591 68.5991 13.8451 68.3562 13.5774C68.1132 13.3096 67.9289 12.994 67.8152 12.6508C67.7014 12.3076 67.6608 11.9444 67.6958 11.5845ZM71.7448 11.5845C71.7448 10.3987 71.2121 9.70531 70.2773 9.70531C69.3389 9.70531 68.811 10.3987 68.811 11.5845C68.811 12.7798 69.3389 13.4678 70.2773 13.4678C71.2121 13.4678 71.7448 12.775 71.7448 11.5845Z"
                    fill="black"></path>
                  <path
                    d="M73.9927 12.7749C73.9927 11.7903 74.7258 11.2226 76.0273 11.1419L77.509 11.0565V10.5843C77.509 10.0066 77.127 9.68034 76.3891 9.68034C75.7864 9.68034 75.3689 9.9016 75.249 10.2884H74.2038C74.3142 9.34876 75.198 8.74609 76.4389 8.74609C77.8104 8.74609 78.5839 9.42883 78.5839 10.5843V14.3219H77.5446V13.5532H77.4592C77.2858 13.8289 77.0424 14.0538 76.7537 14.2046C76.465 14.3555 76.1415 14.4271 75.8161 14.4121C75.5865 14.436 75.3544 14.4115 75.1348 14.3402C74.9152 14.2688 74.713 14.1523 74.5412 13.9981C74.3694 13.8438 74.2318 13.6553 74.1373 13.4446C74.0429 13.2339 73.9936 13.0058 73.9927 12.7749ZM77.509 12.3075V11.8502L76.1732 11.9356C75.4199 11.986 75.0782 12.2423 75.0782 12.7245C75.0782 13.2168 75.5053 13.5033 76.0926 13.5033C76.2646 13.5208 76.4384 13.5034 76.6037 13.4523C76.7689 13.4011 76.9221 13.3173 77.0543 13.2057C77.1865 13.0941 77.2948 12.9571 77.3729 12.8028C77.4511 12.6485 77.4973 12.4801 77.509 12.3075Z"
                    fill="black"></path>
                  <path
                    d="M80.0029 11.5845C80.0029 9.85601 80.8915 8.76101 82.2736 8.76101C82.6155 8.74525 82.9548 8.82714 83.2518 8.99708C83.5489 9.16703 83.7914 9.41802 83.9511 9.72072H84.0318V6.71631H85.1114V14.322H84.0769V13.4578H83.9915C83.8194 13.7584 83.5684 14.0063 83.2656 14.1745C82.9628 14.3427 82.6198 14.4249 82.2736 14.4122C80.882 14.4122 80.0029 13.3172 80.0029 11.5845ZM81.1181 11.5845C81.1181 12.7448 81.6651 13.443 82.5797 13.443C83.4896 13.443 84.052 12.7347 84.052 11.5893C84.052 10.4492 83.4837 9.73085 82.5797 9.73085C81.6709 9.73085 81.1181 10.4338 81.1181 11.5845Z"
                    fill="black"></path>
                  <path
                    d="M89.5776 11.5844C89.5432 11.2249 89.5844 10.8622 89.6984 10.5195C89.8124 10.1769 89.9967 9.8618 90.2396 9.59456C90.4825 9.32732 90.7786 9.1138 91.1088 8.96768C91.4391 8.82157 91.7962 8.74609 92.1574 8.74609C92.5185 8.74609 92.8756 8.82157 93.2059 8.96768C93.5361 9.1138 93.8322 9.32732 94.0751 9.59456C94.318 9.8618 94.5023 10.1769 94.6163 10.5195C94.7303 10.8622 94.7715 11.2249 94.7371 11.5844C94.7721 11.9442 94.7315 12.3075 94.6178 12.6507C94.5041 12.9939 94.3198 13.3095 94.0769 13.5773C93.8339 13.8451 93.5376 14.059 93.2071 14.2055C92.8765 14.3519 92.5189 14.4275 92.1574 14.4275C91.7958 14.4275 91.4382 14.3519 91.1076 14.2055C90.7771 14.059 90.4808 13.8451 90.2378 13.5773C89.9949 13.3095 89.8106 12.9939 89.6969 12.6507C89.5832 12.3075 89.5426 11.9442 89.5776 11.5844ZM93.6266 11.5844C93.6266 10.3986 93.094 9.70521 92.1591 9.70521C91.2207 9.70521 90.6928 10.3986 90.6928 11.5844C90.6928 12.7797 91.2208 13.4677 92.1591 13.4677C93.094 13.4677 93.6266 12.7749 93.6266 11.5844Z"
                    fill="black"></path>
                  <path
                    d="M96.186 8.8517H97.2253V9.7207H97.306C97.4428 9.40859 97.6736 9.14695 97.9663 8.97225C98.2589 8.79755 98.5987 8.7185 98.9384 8.74611C99.2045 8.7261 99.4718 8.76623 99.7204 8.86353C99.9689 8.96083 100.192 9.11281 100.374 9.30821C100.556 9.50361 100.692 9.73741 100.771 9.99231C100.85 10.2472 100.871 10.5167 100.832 10.7807V14.3219H99.7522V11.0518C99.7522 10.1727 99.3702 9.73554 98.5718 9.73554C98.3911 9.72712 98.2107 9.75788 98.043 9.8257C97.8752 9.89352 97.7242 9.99681 97.6001 10.1285C97.4761 10.2601 97.3819 10.4171 97.3242 10.5885C97.2665 10.76 97.2465 10.9419 97.2656 11.1218V14.322H96.186V8.8517Z"
                    fill="black"></path>
                  <path
                    d="M106.932 7.48975V8.87659H108.117V9.78594H106.932V12.5988C106.932 13.1718 107.168 13.4227 107.705 13.4227C107.843 13.4223 107.98 13.4139 108.117 13.3978V14.297C107.923 14.3317 107.726 14.3502 107.53 14.3522C106.329 14.3522 105.851 13.9299 105.851 12.8752V9.78589H104.982V8.87654H105.851V7.48975H106.932Z"
                    fill="black"></path>
                  <path
                    d="M109.592 6.71631H110.662V9.73084H110.747C110.891 9.41581 111.128 9.15269 111.426 8.97733C111.725 8.80197 112.07 8.72291 112.415 8.75091C112.68 8.7365 112.945 8.78071 113.19 8.88038C113.436 8.98004 113.657 9.13271 113.837 9.32749C114.017 9.52228 114.152 9.75437 114.231 10.0072C114.311 10.2601 114.334 10.5274 114.299 10.7902V14.322H113.219V11.0566C113.219 10.1828 112.812 9.74031 112.049 9.74031C111.863 9.7251 111.677 9.7506 111.502 9.81505C111.327 9.87951 111.169 9.98134 111.038 10.1134C110.906 10.2455 110.806 10.4047 110.742 10.5798C110.679 10.7549 110.655 10.9417 110.671 11.1272V14.322H109.592L109.592 6.71631Z"
                    fill="black"></path>
                  <path
                    d="M120.594 12.845C120.447 13.345 120.129 13.7774 119.696 14.0667C119.263 14.3561 118.742 14.4838 118.224 14.4276C117.863 14.4371 117.505 14.3681 117.174 14.2253C116.843 14.0826 116.547 13.8694 116.307 13.6008C116.066 13.3322 115.887 13.0144 115.782 12.6696C115.676 12.3248 115.647 11.9612 115.697 11.6041C115.649 11.2459 115.678 10.8815 115.783 10.5357C115.888 10.1899 116.066 9.87064 116.306 9.59964C116.545 9.32865 116.839 9.1122 117.169 8.96496C117.5 8.81771 117.857 8.7431 118.219 8.74619C119.741 8.74619 120.659 9.78608 120.659 11.5038V11.8805H116.796V11.941C116.78 12.1418 116.805 12.3438 116.87 12.5343C116.936 12.7247 117.041 12.8993 117.178 13.0468C117.315 13.1944 117.482 13.3116 117.667 13.3911C117.852 13.4705 118.052 13.5104 118.253 13.5082C118.511 13.5392 118.773 13.4927 119.005 13.3746C119.237 13.2565 119.428 13.0721 119.555 12.845L120.594 12.845ZM116.796 11.0821H119.559C119.573 10.8985 119.548 10.7141 119.486 10.5407C119.424 10.3674 119.327 10.2088 119.2 10.0754C119.073 9.94193 118.92 9.83647 118.75 9.7658C118.58 9.69513 118.397 9.6608 118.213 9.66502C118.026 9.66267 117.841 9.69773 117.668 9.76812C117.495 9.83851 117.338 9.94282 117.206 10.0749C117.074 10.207 116.97 10.3641 116.899 10.5371C116.829 10.7101 116.794 10.8954 116.796 11.0821Z"
                    fill="black"></path>
                </svg></a>
            </div>
            <div className="flex justify-center md:w-auto" >
              <a target="_blank" aria-label="Download on the Google Play Store"
                className="rounded-2xl p-2 flex items-center w-40 sm:w-48 md:w-56 bg-white text-gray-900 hover:bg-gray-50"
                href=""><svg width="100%" viewBox="0 0 132 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M107.104 31.6918H109.041V18.4767H107.104V31.6918ZM124.55 23.2375L122.33 28.9665H122.263L119.959 23.2375H117.873L121.329 31.2447L119.358 35.699H121.378L126.704 23.2378L124.55 23.2375ZM113.565 30.1908C112.932 30.1908 112.046 29.8674 112.046 29.0685C112.046 28.0485 113.149 27.6575 114.099 27.6575C114.951 27.6575 115.352 27.8442 115.869 28.0994C115.719 29.3236 114.684 30.1908 113.565 30.1908ZM113.799 22.9484C112.397 22.9484 110.945 23.5776 110.344 24.9717L112.063 25.7025C112.43 24.9717 113.114 24.7339 113.833 24.7339C114.834 24.7339 115.853 25.3454 115.869 26.4338V26.5696C115.518 26.3656 114.767 26.0597 113.849 26.0597C111.995 26.0597 110.109 27.0965 110.109 29.0346C110.109 30.8027 111.629 31.9419 113.331 31.9419C114.633 31.9419 115.352 31.3468 115.802 30.6495H115.869V31.6702H117.74V26.6034C117.74 24.2573 116.019 22.9484 113.799 22.9484ZM101.829 24.8461H99.0737V20.3166H101.829C103.277 20.3166 104.099 21.5372 104.099 22.5813C104.099 23.6054 103.277 24.8461 101.829 24.8461ZM101.779 18.477H97.1377V31.6922H99.0738V26.6857H101.779C103.926 26.6857 106.036 25.1035 106.036 22.5818C106.036 20.0606 103.926 18.477 101.779 18.477ZM76.4709 30.193C75.1328 30.193 74.0128 29.0517 74.0128 27.4856C74.0128 25.9012 75.1328 24.7438 76.4709 24.7438C77.792 24.7438 78.8288 25.9013 78.8288 27.4856C78.8288 29.0517 77.792 30.193 76.4709 30.193ZM78.695 23.9772H78.628C78.1934 23.4494 77.3568 22.9726 76.3038 22.9726C74.096 22.9726 72.0726 24.9483 72.0726 27.4856C72.0726 30.0056 74.096 31.9639 76.3038 31.9639C77.3568 31.9639 78.1933 31.487 78.628 30.9424H78.695V31.589C78.695 33.3096 77.792 34.2287 76.3371 34.2287C75.1502 34.2287 74.4143 33.3603 74.113 32.6282L72.4243 33.3433C72.9088 34.5349 74.1962 36 76.3372 36C78.6119 36 80.535 34.6373 80.535 31.3164V23.2449H78.695L78.695 23.9772ZM81.8731 31.6914H83.8121V18.4763H81.8731V31.6914ZM86.672 27.332C86.6221 25.5949 87.9938 24.7096 88.98 24.7096C89.7496 24.7096 90.4011 25.1014 90.6194 25.663L86.672 27.332ZM92.6921 25.8331C92.3244 24.829 91.204 22.9726 88.913 22.9726C86.6383 22.9726 84.7488 24.7947 84.7488 27.4683C84.7488 29.9887 86.6221 31.964 89.13 31.964C91.1534 31.964 92.3244 30.7042 92.8097 29.9717L91.3045 28.9498C90.8027 29.6992 90.1174 30.1931 89.13 30.1931C88.1439 30.1931 87.4412 29.7331 86.9904 28.8306L92.8928 26.3444L92.6921 25.8331ZM45.6614 24.352V26.2593H50.1431C50.0093 27.3321 49.6581 28.1153 49.1229 28.6603C48.4705 29.3243 47.4504 30.0568 45.6614 30.0568C42.902 30.0568 40.7449 27.792 40.7449 24.9822C40.7449 22.1723 42.902 19.9072 45.6614 19.9072C47.1498 19.9072 48.2365 20.5034 49.0393 21.2697L50.3608 19.9241C49.24 18.8344 47.7519 18 45.6614 18C41.8814 18 38.7041 21.1334 38.7041 24.9822C38.7041 28.8305 41.8814 31.964 45.6614 31.964C47.7013 31.964 49.2401 31.2827 50.4439 30.0056C51.6815 28.7454 52.0662 26.9745 52.0662 25.5438C52.0662 25.1015 52.0325 24.6928 51.9656 24.352H45.6614ZM57.162 30.193C55.8238 30.193 54.6699 29.069 54.6699 27.4683C54.6699 25.8505 55.8238 24.7439 57.162 24.7439C58.4996 24.7439 59.6536 25.8505 59.6536 27.4683C59.6536 29.069 58.4996 30.193 57.162 30.193ZM57.162 22.9726C54.7197 22.9726 52.73 24.8628 52.73 27.4683C52.73 30.0568 54.7197 31.964 57.162 31.964C59.6033 31.964 61.5934 30.0568 61.5934 27.4683C61.5934 24.8628 59.6033 22.9726 57.162 22.9726ZM66.8291 30.193C65.4919 30.193 64.3375 29.069 64.3375 27.4683C64.3375 25.8505 65.492 24.7439 66.8291 24.7439C68.1673 24.7439 69.3208 25.8505 69.3208 27.4683C69.3208 29.069 68.1673 30.193 66.8291 30.193ZM66.8291 22.9726C64.3878 22.9726 62.3981 24.8628 62.3981 27.4683C62.3981 30.0568 64.3878 31.964 66.8291 31.964C69.2714 31.964 71.2611 30.0568 71.2611 27.4683C71.2611 24.8628 69.2714 22.9726 66.8291 22.9726Z"
                    fill="black"></path>
                  <path
                    d="M17.1955 20.2345L6.10352 32.008C6.10393 32.0104 6.10477 32.0124 6.10516 32.0149C6.44534 33.2934 7.61306 34.2347 8.9989 34.2347C9.55289 34.2347 10.073 34.085 10.5191 33.822L10.5545 33.8013L23.0406 26.5962L17.1955 20.2345Z"
                    fill="#EB3131"></path>
                  <path
                    d="M28.4174 18.23L28.4068 18.2227L23.0161 15.0977L16.9429 20.5019L23.0372 26.5955L28.3994 23.5015C29.3395 22.994 29.9778 22.0029 29.9778 20.8601C29.9778 19.7254 29.3482 18.7392 28.4174 18.23Z"
                    fill="#F6B60B"></path>
                  <path
                    d="M6.10173 9.66211C6.03505 9.908 6 10.1656 6 10.433V31.2378C6 31.5048 6.03463 31.7632 6.10215 32.0082L17.5771 20.5356L6.10173 9.66211Z"
                    fill="#5778C5"></path>
                  <path
                    d="M17.2769 20.8353L23.0186 15.0954L10.5465 7.86427C10.0931 7.59274 9.56402 7.43604 8.99785 7.43604C7.61201 7.43604 6.44272 8.3791 6.10247 9.65905C6.10205 9.6603 6.10205 9.66116 6.10205 9.66225L17.2769 20.8353Z"
                    fill="#3BAD49"></path>
                  <path
                    d="M44.9244 10.2667H41.922V11.0704H44.1719C44.1107 11.7263 43.8695 12.2412 43.4626 12.6152C43.0558 12.9892 42.5363 13.177 41.922 13.177C41.2482 13.177 40.6773 12.9231 40.2094 12.4187C39.751 11.9038 39.5179 11.267 39.5179 10.4999C39.5179 9.73287 39.751 9.09613 40.2094 8.58127C40.6773 8.07684 41.2482 7.82457 41.922 7.82457C42.2678 7.82457 42.5975 7.88892 42.8997 8.02986C43.2021 8.17069 43.4449 8.3673 43.6347 8.61958L44.2056 8.00203C43.9467 7.68363 43.6186 7.44014 43.2117 7.26269C42.8048 7.08523 42.3803 7.00006 41.9219 7.00006C41.023 7.00006 40.2608 7.3375 39.6384 8.01074C39.0161 8.68562 38.7041 9.51716 38.7041 10.4999C38.7041 11.4827 39.0161 12.3161 39.6384 12.9893C40.2608 13.6624 41.023 14 41.9219 14C42.8659 14 43.6186 13.6729 44.1975 13.0084C44.7073 12.4553 44.9678 11.7073 44.9678 10.7714C44.9678 10.6131 44.9501 10.4442 44.9244 10.2667ZM46.0875 7.14951V13.8503H49.7042V13.0274H46.8836V10.9018H49.4277V10.0981H46.8836V7.97411H49.7042V7.14949L46.0875 7.14951ZM54.7755 7.97414V7.14951H50.5188V7.97414H52.2492V13.8503H53.0452V7.97414H54.7755ZM58.6294 7.14951H57.8334V13.8503H58.6294V7.14951ZM63.8836 7.97414V7.14951H59.6269V7.97414H61.3571V13.8503H62.1531V7.97414H63.8836ZM71.9162 8.02112C71.3019 7.33745 70.5493 7 69.6503 7C68.7498 7 67.9972 7.33744 67.3828 8.01068C66.7685 8.67521 66.4663 9.50841 66.4663 10.4999C66.4663 11.4914 66.7685 12.3247 67.3828 12.9893C67.9972 13.6624 68.7498 13.9999 69.6503 13.9999C70.5412 13.9999 71.3018 13.6624 71.9162 12.9893C72.5305 12.3247 72.8328 11.4914 72.8328 10.4999C72.8328 9.5171 72.5305 8.68552 71.9162 8.02112ZM67.9538 8.58122C68.4121 8.07678 68.9749 7.82451 69.6503 7.82451C70.3241 7.82451 70.887 8.07679 71.3372 8.58122C71.7956 9.07697 72.0206 9.72399 72.0206 10.4999C72.0206 11.2775 71.7956 11.9228 71.3372 12.4186C70.887 12.923 70.3241 13.177 69.6503 13.177C68.9749 13.177 68.412 12.923 67.9538 12.4186C67.505 11.9124 67.2799 11.2775 67.2799 10.4999C67.2799 9.72401 67.505 9.08739 67.9538 8.58122ZM74.724 9.67715L74.6903 8.38457H74.724L77.8727 13.8502H78.7041V7.14945H77.9081V11.0703L77.9418 12.3629H77.9081L74.8977 7.14945H73.928V13.8502H74.724V9.67715Z"
                    fill="black" stroke="black"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Download
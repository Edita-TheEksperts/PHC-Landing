import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="bg-[#F1F1F1] p-4">
          {/* Main Section with Image Background */}
          <section className="relative max-w-[1300px] h-[800px] mx-auto mt-2 md:mt-[34px]">
            {/* Logo Positioned on Top Left */}
            <div className="absolute top-[5px] left-[5px] md:top-[20px] md:left-[67px] z-10">
              <Image src="/images/logo.png" alt="PHC Logo" width={131} height={60} />
            </div>

            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="/images/Background (7).png"
              alt="Hero Image"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-[#F1F1F1]">
          <div className="md:w-[1069px] text-center font-family-[Metropolis]">
            <p className=" mb-[20px] flex justify-center items-center w-[269px] p-[4px_10px_4px_10px] text-[#F1F1F1] font-inter text-[16px] font-[400] leading-[25.6px] border-[1px] border-transparent rounded-[20px] bg-[linear-gradient(93deg,_#000_0%,_rgba(0,_0,_0,_0.30)_100%)] mx-auto">
              Ab Frühsommer 2025 bringt die
            </p>

            <h2 className="md:block hidden mb-[20px] text-[24px] lg:text-[48px] font-[600] lg:leading-[52px]">
              Prime Home Care AG eine neue Möglichkeit der stündlichen Betreuung bei Ihnen zu Hause an.
            </h2>
            <h2 className="md:hidden block mb-[20px] text-[24px] lg:text-[48px] font-[600] lg:leading-[52px]">
              Prime Home Care AG eine <br></br>neue Möglichkeit der <br></br>stündlichen Betreuung bei <br></br> Ihnen zu Hause an.
            </h2>

            <p className="md:block hidden text-[16px] font-[400] leading-[25.6px]">
              Egal, ob Sie selbst Unterstützung benötigen oder für einen Angehörigen suchen – unsere Dienstleistung bietet Ihnen Sicherheit, Entlastung und Flexibilität.
            </p>
            <p className="md:hidden block text-[12px] font-[400] leading-[25.6px]">
              Egal, ob Sie selbst Unterstützung benötigen<br></br> oder für einen Angehörigen suchen – <br></br>unsere Dienstleistung bietet Ihnen Sicherheit, Entlastung und Flexibilität.
            </p>
          </div>
        </div>

          </section>

      <h2 className="text-center text-[#1C1B1D] font-[Metropolis] text-[55px] font-semibold leading-[71.5px] mb-10 mt-[100px] md:mt-[200px]">
        Warum die Prime Home Care AG wählen?
      </h2>
      <section className="max-w-[1280px] mx-auto flex justify-center items-center mb-[100px] md:mb-[200px]">
      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="flex flex-col items-start justify-start bg-white p-6 rounded-[20px]">
          {/* Image and Heading Container (same row) */}
          <div className="flex items-center justify-start w-full mb-4 space-x-4">
            {/* Image Container */}
            <div className="flex items-center justify-center h-[100px] w-[100px] mr-4">
              <Image src="/images/Background (2).png" alt="Icon" width={100} height={100} />
            </div>
            {/* Heading */}
            <h3 className="text-[#1C1B1D] text-[28px] font-semibold leading-[33.6px]">
            Betreuung nach Mass             
            </h3>
          </div>

          {/* Paragraph below the heading */}
          <p className="text-[#1C1B1D] text-[16px] leading-[25.6px] font-[400] max-w-[511px]">
          Jeder Mensch ist einzigartig, und das gilt auch für seine Bedürfnisse. Unsere Betreuung wird individuell auf Ihre Wünsche und Anforderungen abgestimmt – von Gesellschaft über Unterstützung im Alltag bis hin zu kleineren Haushaltsaufgaben.  </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start justify-start bg-white p-6 rounded-[20px]">
          {/* Image and Heading Container (same row) */}
          <div className="flex items-center justify-start w-full mb-4 space-x-4">
            {/* Image Container */}
            <div className="flex items-center justify-center h-[100px] w-[100px] mr-4">
              <Image src="/images/Background (2).png" alt="Icon" width={100} height={100} />
            </div>
            {/* Heading */}
            <h3 className="text-[#1C1B1D] text-[28px] font-semibold leading-[33.6px]">
            Verlässliche und qualifizierte Betreuungskräfte 
            </h3>
          </div>

          {/* Paragraph below the heading */}
          <p className="text-[#1C1B1D] text-[16px] leading-[25.6px] font-[400] max-w-[511px]">
          Unser Team besteht aus erfahrenen, einfühlsamen Fachkräften, die <br></br> mit Herz und Kompetenz für Sie da sind.           </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start justify-start bg-white p-6 rounded-[20px]">
          {/* Image and Heading Container (same row) */}
          <div className="flex items-center justify-start w-full mb-4 space-x-4">
            {/* Image Container */}
            <div className="flex items-center justify-center h-[100px] w-[100px] mr-4">
              <Image src="/images/Background (2).png" alt="Icon" width={100} height={100} />
            </div>
            {/* Heading */}
            <h3 className="text-[#1C1B1D] text-[28px] font-semibold leading-[33.6px]">
            Digital und einfach organisiert            </h3>
          </div>

          {/* Paragraph below the heading */}
          <p className="text-[#1C1B1D] text-[16px] leading-[25.6px] font-[400] max-w-[511px]">
          Über unsere benutzerfreundliche Online-Plattform können Sie die Betreuung vollständig digital organisieren. Von der Buchung <br></br> einzelner Stunden bis zur Verwaltung Ihrer persönlichen <br></br> Betreuungseinstellungen – alles ist bequem und flexibel online <br></br> möglich. </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-start justify-start bg-white p-6 rounded-[20px] ">
          {/* Image and Heading Container (same row) */}
          <div className="flex items-center justify-start w-full mb-4 space-x-4">
            {/* Image Container */}
            <div className="flex items-center justify-center h-[100px] w-[100px] mr-4">
              <Image src="/images/Background (2).png" alt="Icon" width={100} height={100} />
            </div>
            {/* Heading */}
            <h3 className="text-[#1C1B1D] text-[28px] font-semibold leading-[33.6px]">
            Verlässliche und qualifizierte Betreuungskräfte 
            </h3>
          </div>

          {/* Paragraph below the heading */}
          <p className="text-[#1C1B1D] text-[16px] leading-[25.6px] font-[400] max-w-[511px]">
          Ganz gleich, ob Sie nur ein paar Stunden pro Woche oder <br></br> regelmässige Unterstützung benötigen – unser Service passt sich <br></br> Ihrem Lebensstil an. </p>
        </div>
      </div>
    </section>

    <section className="flex flex-col justify-center items-center gap-8 p-4 max-w-[900px] mx-auto mb-[100px] md:mb-[200px]">
      {/* Section Heading */}
      <h2 className="text-center text-[#1C1B1D] leading-[71px] text-[55px] font-[600] mb-6">
        Unser Angebot im Überblick
      </h2>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full">
        {/* Card 1 */}
        <div className="flex flex-row items-center justify-center px-2 space-x-6">
          <div className="flex items-center justify-center bg-black rounded-full h-[80px] w-[80px]">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="fi_3079188">
            <path id="Vector" d="M44.9217 19.8919L45.9696 20.6035C46.1027 20.6936 46.2581 20.7414 46.4174 20.7414C46.4668 20.7414 46.5178 20.7366 46.5673 20.727C46.7744 20.6872 46.9577 20.5669 47.0765 20.3915L48.8662 17.7531C49.1141 17.3889 49.0184 16.8933 48.6543 16.6462L25.4477 0.89918C25.1767 0.715898 24.8237 0.715898 24.5528 0.89918L1.3446 16.647C0.980428 16.8941 0.8856 17.3897 1.13263 17.7539L2.92241 20.3923C3.04035 20.5676 3.22443 20.688 3.43162 20.7278C3.6404 20.7677 3.85476 20.7222 4.02927 20.6043L5.07796 19.8919V27.8646C4.61099 28.0686 4.22929 28.4456 4.02927 28.9412C2.68972 32.253 1.09358 36.6056 1.09358 38.5467C1.09358 41.4075 2.75905 43.6292 5.07796 44.0476V47.3124H1.09358V48.9061H48.9061V47.3124H44.9217V19.8919ZM3.79419 18.8376L2.8993 17.5172L24.9998 2.52082L47.1004 17.5172L46.2055 18.8368L25.4477 4.75127C25.3122 4.65963 25.156 4.61341 24.9998 4.61341C24.8436 4.61341 24.6875 4.65963 24.552 4.75127L3.79419 18.8376ZM2.68733 38.5467C2.68733 37.2518 3.71451 33.9687 5.50588 29.5389C5.59752 29.3134 5.79435 29.2894 5.87483 29.2894C5.95532 29.2894 6.15215 29.3134 6.24379 29.5389C8.03516 33.9687 9.06233 37.2518 9.06233 38.5467C9.06233 40.8553 7.72119 42.5311 5.87483 42.5311C4.02848 42.5311 2.68733 40.8553 2.68733 38.5467ZM6.67171 44.0476C8.99062 43.6292 10.6561 41.4075 10.6561 38.5467C10.6561 36.6056 9.05994 32.253 7.7204 28.9412C7.52038 28.4456 7.13868 28.0686 6.67171 27.8646V18.8105L24.9998 6.37371L43.328 18.8105V34.3217L43.1941 34.1209C42.8984 33.677 42.1637 33.677 41.8681 34.1209L40.2743 36.5115C40.1875 36.6414 40.1405 36.796 40.1405 36.953V38.5467H38.5467V36.953C38.5467 36.796 38.4997 36.6414 38.4128 36.5107L36.8191 34.1201C36.5234 33.6762 35.7887 33.6762 35.4931 34.1201L33.8993 36.5107C33.8125 36.6414 33.7655 36.796 33.7655 36.953V38.5467H32.1717V36.953C32.1717 36.796 32.1247 36.6414 32.0378 36.5107L30.4441 34.1201C30.1484 33.6762 29.4137 33.6762 29.1181 34.1201L27.5243 36.5107C27.4375 36.6414 27.3905 36.796 27.3905 36.953V47.3124H22.6092V32.1717C22.6092 31.7311 22.253 31.3749 21.8123 31.3749H13.0467C12.606 31.3749 12.2498 31.7311 12.2498 32.1717V47.3124H6.67171V44.0476ZM30.578 47.3124H28.9842V37.1944L29.7811 35.9991L30.578 37.1944V47.3124ZM32.1717 40.1405H33.7655V41.7342H32.1717V40.1405ZM32.1717 43.328H33.7655V47.3124H32.1717V43.328ZM36.953 47.3124H35.3592V37.1944L36.1561 35.9991L36.953 37.1944V47.3124ZM38.5467 40.1405H40.1405V41.7342H38.5467V40.1405ZM38.5467 43.328H40.1405V47.3124H38.5467V43.328ZM21.0155 47.3124H13.8436V32.9686H21.0155V47.3124ZM41.7342 47.3124V37.1944L42.5311 35.9991L43.328 37.1944V47.3124H41.7342Z" fill="white"/>
            <path id="Vector_2" d="M22.6094 25.7969H27.3906C29.1485 25.7969 30.5781 24.3673 30.5781 22.6094V17.8281C30.5781 16.0702 29.1485 14.6406 27.3906 14.6406H22.6094C20.8515 14.6406 19.4219 16.0702 19.4219 17.8281V22.6094C19.4219 24.3673 20.8515 25.7969 22.6094 25.7969ZM21.0156 22.6094V21.0156H24.2031V24.2031H22.6094C21.7304 24.2031 21.0156 23.4883 21.0156 22.6094ZM27.3906 24.2031H25.7969V21.0156H28.9844V22.6094C28.9844 23.4883 28.2696 24.2031 27.3906 24.2031ZM28.9844 17.8281V19.4219H25.7969V16.2344H27.3906C28.2696 16.2344 28.9844 16.9492 28.9844 17.8281ZM22.6094 16.2344H24.2031V19.4219H21.0156V17.8281C21.0156 16.9492 21.7304 16.2344 22.6094 16.2344Z" fill="white"/>
            <path id="Vector_3" d="M17.8281 39.3438H19.4219V40.9375H17.8281V39.3438Z" fill="white"/>
            </g>
            </svg>
          </div>
          <h3 className="text-[#1C1B1D] text-[28px] font-[600] leading-[33px]">
            Gesellschaft und <br></br> Begleitung bei<br></br> Freizeitaktivitäten
          </h3>
        
        </div>

        {/* Card 2 */}
        <div className="flex flex-row items-center justify-center px-2 space-x-6">
          <div className="flex items-center justify-center bg-black rounded-full h-[80px] w-[80px]">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="fi_3079188">
            <path id="Vector" d="M44.9217 19.8919L45.9696 20.6035C46.1027 20.6936 46.2581 20.7414 46.4174 20.7414C46.4668 20.7414 46.5178 20.7366 46.5673 20.727C46.7744 20.6872 46.9577 20.5669 47.0765 20.3915L48.8662 17.7531C49.1141 17.3889 49.0184 16.8933 48.6543 16.6462L25.4477 0.89918C25.1767 0.715898 24.8237 0.715898 24.5528 0.89918L1.3446 16.647C0.980428 16.8941 0.8856 17.3897 1.13263 17.7539L2.92241 20.3923C3.04035 20.5676 3.22443 20.688 3.43162 20.7278C3.6404 20.7677 3.85476 20.7222 4.02927 20.6043L5.07796 19.8919V27.8646C4.61099 28.0686 4.22929 28.4456 4.02927 28.9412C2.68972 32.253 1.09358 36.6056 1.09358 38.5467C1.09358 41.4075 2.75905 43.6292 5.07796 44.0476V47.3124H1.09358V48.9061H48.9061V47.3124H44.9217V19.8919ZM3.79419 18.8376L2.8993 17.5172L24.9998 2.52082L47.1004 17.5172L46.2055 18.8368L25.4477 4.75127C25.3122 4.65963 25.156 4.61341 24.9998 4.61341C24.8436 4.61341 24.6875 4.65963 24.552 4.75127L3.79419 18.8376ZM2.68733 38.5467C2.68733 37.2518 3.71451 33.9687 5.50588 29.5389C5.59752 29.3134 5.79435 29.2894 5.87483 29.2894C5.95532 29.2894 6.15215 29.3134 6.24379 29.5389C8.03516 33.9687 9.06233 37.2518 9.06233 38.5467C9.06233 40.8553 7.72119 42.5311 5.87483 42.5311C4.02848 42.5311 2.68733 40.8553 2.68733 38.5467ZM6.67171 44.0476C8.99062 43.6292 10.6561 41.4075 10.6561 38.5467C10.6561 36.6056 9.05994 32.253 7.7204 28.9412C7.52038 28.4456 7.13868 28.0686 6.67171 27.8646V18.8105L24.9998 6.37371L43.328 18.8105V34.3217L43.1941 34.1209C42.8984 33.677 42.1637 33.677 41.8681 34.1209L40.2743 36.5115C40.1875 36.6414 40.1405 36.796 40.1405 36.953V38.5467H38.5467V36.953C38.5467 36.796 38.4997 36.6414 38.4128 36.5107L36.8191 34.1201C36.5234 33.6762 35.7887 33.6762 35.4931 34.1201L33.8993 36.5107C33.8125 36.6414 33.7655 36.796 33.7655 36.953V38.5467H32.1717V36.953C32.1717 36.796 32.1247 36.6414 32.0378 36.5107L30.4441 34.1201C30.1484 33.6762 29.4137 33.6762 29.1181 34.1201L27.5243 36.5107C27.4375 36.6414 27.3905 36.796 27.3905 36.953V47.3124H22.6092V32.1717C22.6092 31.7311 22.253 31.3749 21.8123 31.3749H13.0467C12.606 31.3749 12.2498 31.7311 12.2498 32.1717V47.3124H6.67171V44.0476ZM30.578 47.3124H28.9842V37.1944L29.7811 35.9991L30.578 37.1944V47.3124ZM32.1717 40.1405H33.7655V41.7342H32.1717V40.1405ZM32.1717 43.328H33.7655V47.3124H32.1717V43.328ZM36.953 47.3124H35.3592V37.1944L36.1561 35.9991L36.953 37.1944V47.3124ZM38.5467 40.1405H40.1405V41.7342H38.5467V40.1405ZM38.5467 43.328H40.1405V47.3124H38.5467V43.328ZM21.0155 47.3124H13.8436V32.9686H21.0155V47.3124ZM41.7342 47.3124V37.1944L42.5311 35.9991L43.328 37.1944V47.3124H41.7342Z" fill="white"/>
            <path id="Vector_2" d="M22.6094 25.7969H27.3906C29.1485 25.7969 30.5781 24.3673 30.5781 22.6094V17.8281C30.5781 16.0702 29.1485 14.6406 27.3906 14.6406H22.6094C20.8515 14.6406 19.4219 16.0702 19.4219 17.8281V22.6094C19.4219 24.3673 20.8515 25.7969 22.6094 25.7969ZM21.0156 22.6094V21.0156H24.2031V24.2031H22.6094C21.7304 24.2031 21.0156 23.4883 21.0156 22.6094ZM27.3906 24.2031H25.7969V21.0156H28.9844V22.6094C28.9844 23.4883 28.2696 24.2031 27.3906 24.2031ZM28.9844 17.8281V19.4219H25.7969V16.2344H27.3906C28.2696 16.2344 28.9844 16.9492 28.9844 17.8281ZM22.6094 16.2344H24.2031V19.4219H21.0156V17.8281C21.0156 16.9492 21.7304 16.2344 22.6094 16.2344Z" fill="white"/>
            <path id="Vector_3" d="M17.8281 39.3438H19.4219V40.9375H17.8281V39.3438Z" fill="white"/>
            </g>
            </svg>
          </div>
          <h3 className="text-[#1C1B1D] text-[28px] font-[600] leading-[33px]">
            Gesellschaft und <br></br> Begleitung bei<br></br> Freizeitaktivitäten
          </h3>
        
        </div>

        {/* Card 3 */}
        <div className="flex flex-row items-center justify-center px-2 space-x-6">
          <div className="flex items-center justify-center bg-black rounded-full h-[80px] w-[80px]">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="fi_3079188">
            <path id="Vector" d="M44.9217 19.8919L45.9696 20.6035C46.1027 20.6936 46.2581 20.7414 46.4174 20.7414C46.4668 20.7414 46.5178 20.7366 46.5673 20.727C46.7744 20.6872 46.9577 20.5669 47.0765 20.3915L48.8662 17.7531C49.1141 17.3889 49.0184 16.8933 48.6543 16.6462L25.4477 0.89918C25.1767 0.715898 24.8237 0.715898 24.5528 0.89918L1.3446 16.647C0.980428 16.8941 0.8856 17.3897 1.13263 17.7539L2.92241 20.3923C3.04035 20.5676 3.22443 20.688 3.43162 20.7278C3.6404 20.7677 3.85476 20.7222 4.02927 20.6043L5.07796 19.8919V27.8646C4.61099 28.0686 4.22929 28.4456 4.02927 28.9412C2.68972 32.253 1.09358 36.6056 1.09358 38.5467C1.09358 41.4075 2.75905 43.6292 5.07796 44.0476V47.3124H1.09358V48.9061H48.9061V47.3124H44.9217V19.8919ZM3.79419 18.8376L2.8993 17.5172L24.9998 2.52082L47.1004 17.5172L46.2055 18.8368L25.4477 4.75127C25.3122 4.65963 25.156 4.61341 24.9998 4.61341C24.8436 4.61341 24.6875 4.65963 24.552 4.75127L3.79419 18.8376ZM2.68733 38.5467C2.68733 37.2518 3.71451 33.9687 5.50588 29.5389C5.59752 29.3134 5.79435 29.2894 5.87483 29.2894C5.95532 29.2894 6.15215 29.3134 6.24379 29.5389C8.03516 33.9687 9.06233 37.2518 9.06233 38.5467C9.06233 40.8553 7.72119 42.5311 5.87483 42.5311C4.02848 42.5311 2.68733 40.8553 2.68733 38.5467ZM6.67171 44.0476C8.99062 43.6292 10.6561 41.4075 10.6561 38.5467C10.6561 36.6056 9.05994 32.253 7.7204 28.9412C7.52038 28.4456 7.13868 28.0686 6.67171 27.8646V18.8105L24.9998 6.37371L43.328 18.8105V34.3217L43.1941 34.1209C42.8984 33.677 42.1637 33.677 41.8681 34.1209L40.2743 36.5115C40.1875 36.6414 40.1405 36.796 40.1405 36.953V38.5467H38.5467V36.953C38.5467 36.796 38.4997 36.6414 38.4128 36.5107L36.8191 34.1201C36.5234 33.6762 35.7887 33.6762 35.4931 34.1201L33.8993 36.5107C33.8125 36.6414 33.7655 36.796 33.7655 36.953V38.5467H32.1717V36.953C32.1717 36.796 32.1247 36.6414 32.0378 36.5107L30.4441 34.1201C30.1484 33.6762 29.4137 33.6762 29.1181 34.1201L27.5243 36.5107C27.4375 36.6414 27.3905 36.796 27.3905 36.953V47.3124H22.6092V32.1717C22.6092 31.7311 22.253 31.3749 21.8123 31.3749H13.0467C12.606 31.3749 12.2498 31.7311 12.2498 32.1717V47.3124H6.67171V44.0476ZM30.578 47.3124H28.9842V37.1944L29.7811 35.9991L30.578 37.1944V47.3124ZM32.1717 40.1405H33.7655V41.7342H32.1717V40.1405ZM32.1717 43.328H33.7655V47.3124H32.1717V43.328ZM36.953 47.3124H35.3592V37.1944L36.1561 35.9991L36.953 37.1944V47.3124ZM38.5467 40.1405H40.1405V41.7342H38.5467V40.1405ZM38.5467 43.328H40.1405V47.3124H38.5467V43.328ZM21.0155 47.3124H13.8436V32.9686H21.0155V47.3124ZM41.7342 47.3124V37.1944L42.5311 35.9991L43.328 37.1944V47.3124H41.7342Z" fill="white"/>
            <path id="Vector_2" d="M22.6094 25.7969H27.3906C29.1485 25.7969 30.5781 24.3673 30.5781 22.6094V17.8281C30.5781 16.0702 29.1485 14.6406 27.3906 14.6406H22.6094C20.8515 14.6406 19.4219 16.0702 19.4219 17.8281V22.6094C19.4219 24.3673 20.8515 25.7969 22.6094 25.7969ZM21.0156 22.6094V21.0156H24.2031V24.2031H22.6094C21.7304 24.2031 21.0156 23.4883 21.0156 22.6094ZM27.3906 24.2031H25.7969V21.0156H28.9844V22.6094C28.9844 23.4883 28.2696 24.2031 27.3906 24.2031ZM28.9844 17.8281V19.4219H25.7969V16.2344H27.3906C28.2696 16.2344 28.9844 16.9492 28.9844 17.8281ZM22.6094 16.2344H24.2031V19.4219H21.0156V17.8281C21.0156 16.9492 21.7304 16.2344 22.6094 16.2344Z" fill="white"/>
            <path id="Vector_3" d="M17.8281 39.3438H19.4219V40.9375H17.8281V39.3438Z" fill="white"/>
            </g>
            </svg>
          </div>
          <h3 className="text-[#1C1B1D] text-[28px] font-[600] leading-[33px]">
            Gesellschaft und <br></br> Begleitung bei<br></br> Freizeitaktivitäten
          </h3>
        
        </div>

        {/* Card 4 */}
        <div className="flex flex-row items-center justify-center px-2 space-x-6">
          <div className="flex items-center justify-center bg-black rounded-full h-[80px] w-[80px]">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="fi_3079188">
            <path id="Vector" d="M44.9217 19.8919L45.9696 20.6035C46.1027 20.6936 46.2581 20.7414 46.4174 20.7414C46.4668 20.7414 46.5178 20.7366 46.5673 20.727C46.7744 20.6872 46.9577 20.5669 47.0765 20.3915L48.8662 17.7531C49.1141 17.3889 49.0184 16.8933 48.6543 16.6462L25.4477 0.89918C25.1767 0.715898 24.8237 0.715898 24.5528 0.89918L1.3446 16.647C0.980428 16.8941 0.8856 17.3897 1.13263 17.7539L2.92241 20.3923C3.04035 20.5676 3.22443 20.688 3.43162 20.7278C3.6404 20.7677 3.85476 20.7222 4.02927 20.6043L5.07796 19.8919V27.8646C4.61099 28.0686 4.22929 28.4456 4.02927 28.9412C2.68972 32.253 1.09358 36.6056 1.09358 38.5467C1.09358 41.4075 2.75905 43.6292 5.07796 44.0476V47.3124H1.09358V48.9061H48.9061V47.3124H44.9217V19.8919ZM3.79419 18.8376L2.8993 17.5172L24.9998 2.52082L47.1004 17.5172L46.2055 18.8368L25.4477 4.75127C25.3122 4.65963 25.156 4.61341 24.9998 4.61341C24.8436 4.61341 24.6875 4.65963 24.552 4.75127L3.79419 18.8376ZM2.68733 38.5467C2.68733 37.2518 3.71451 33.9687 5.50588 29.5389C5.59752 29.3134 5.79435 29.2894 5.87483 29.2894C5.95532 29.2894 6.15215 29.3134 6.24379 29.5389C8.03516 33.9687 9.06233 37.2518 9.06233 38.5467C9.06233 40.8553 7.72119 42.5311 5.87483 42.5311C4.02848 42.5311 2.68733 40.8553 2.68733 38.5467ZM6.67171 44.0476C8.99062 43.6292 10.6561 41.4075 10.6561 38.5467C10.6561 36.6056 9.05994 32.253 7.7204 28.9412C7.52038 28.4456 7.13868 28.0686 6.67171 27.8646V18.8105L24.9998 6.37371L43.328 18.8105V34.3217L43.1941 34.1209C42.8984 33.677 42.1637 33.677 41.8681 34.1209L40.2743 36.5115C40.1875 36.6414 40.1405 36.796 40.1405 36.953V38.5467H38.5467V36.953C38.5467 36.796 38.4997 36.6414 38.4128 36.5107L36.8191 34.1201C36.5234 33.6762 35.7887 33.6762 35.4931 34.1201L33.8993 36.5107C33.8125 36.6414 33.7655 36.796 33.7655 36.953V38.5467H32.1717V36.953C32.1717 36.796 32.1247 36.6414 32.0378 36.5107L30.4441 34.1201C30.1484 33.6762 29.4137 33.6762 29.1181 34.1201L27.5243 36.5107C27.4375 36.6414 27.3905 36.796 27.3905 36.953V47.3124H22.6092V32.1717C22.6092 31.7311 22.253 31.3749 21.8123 31.3749H13.0467C12.606 31.3749 12.2498 31.7311 12.2498 32.1717V47.3124H6.67171V44.0476ZM30.578 47.3124H28.9842V37.1944L29.7811 35.9991L30.578 37.1944V47.3124ZM32.1717 40.1405H33.7655V41.7342H32.1717V40.1405ZM32.1717 43.328H33.7655V47.3124H32.1717V43.328ZM36.953 47.3124H35.3592V37.1944L36.1561 35.9991L36.953 37.1944V47.3124ZM38.5467 40.1405H40.1405V41.7342H38.5467V40.1405ZM38.5467 43.328H40.1405V47.3124H38.5467V43.328ZM21.0155 47.3124H13.8436V32.9686H21.0155V47.3124ZM41.7342 47.3124V37.1944L42.5311 35.9991L43.328 37.1944V47.3124H41.7342Z" fill="white"/>
            <path id="Vector_2" d="M22.6094 25.7969H27.3906C29.1485 25.7969 30.5781 24.3673 30.5781 22.6094V17.8281C30.5781 16.0702 29.1485 14.6406 27.3906 14.6406H22.6094C20.8515 14.6406 19.4219 16.0702 19.4219 17.8281V22.6094C19.4219 24.3673 20.8515 25.7969 22.6094 25.7969ZM21.0156 22.6094V21.0156H24.2031V24.2031H22.6094C21.7304 24.2031 21.0156 23.4883 21.0156 22.6094ZM27.3906 24.2031H25.7969V21.0156H28.9844V22.6094C28.9844 23.4883 28.2696 24.2031 27.3906 24.2031ZM28.9844 17.8281V19.4219H25.7969V16.2344H27.3906C28.2696 16.2344 28.9844 16.9492 28.9844 17.8281ZM22.6094 16.2344H24.2031V19.4219H21.0156V17.8281C21.0156 16.9492 21.7304 16.2344 22.6094 16.2344Z" fill="white"/>
            <path id="Vector_3" d="M17.8281 39.3438H19.4219V40.9375H17.8281V39.3438Z" fill="white"/>
            </g>
            </svg>
          </div>
          <h3 className="text-[#1C1B1D] text-[28px] font-[600] leading-[33px]">
            Gesellschaft und <br></br> Begleitung bei<br></br> Freizeitaktivitäten
          </h3>
        
        </div>
      </div>

      {/* Section Footer */}
      <p className="text-center text-[#1C1B1D] text-[24px] leading-[40px] font-[400] mt-4">
        Finde deine Balance zwischen Arbeit und Leben – mit Prime Home Care.
      </p>
    </section>

    <section className="relative flex flex-col items-center justify-center py-[50px] bg-white md:rounded-tl-[170px] rounded-tl-[40px] rounded-br-[40px] md:rounded-br-[170px] mb-[100px] md:mb-[200px]"
    >
        <h2 className="text-center text-black text-[24px] lg:text-[44px] font-[600] mb-[10px] md:w-[854px]">
          Starten Sie mit der Prime Home Care AG in eine sorgenfreie Zukunft
        </h2>
        <p className="text-center text-black text-[16px] font-normal md:mb-[40px]">
          Ab Frühsommer 2025 sind wir für Sie da!
        </p>

        {/* Button Section */}
        <div className="flex flex-col items-center justify-center p-4">
          <button className="md:py-[12px] md:px-[30px] text-[14px] lg:text-[18px] font-[500] text-white bg-black rounded-[50px] md:mb-[16px] p-2">
            Lassen Sie sich bereits jetzt unverbindlich beraten oder <br /> registrieren Sie sich, um mehr über unser Angebot zu erfahren
          </button>
        </div>
      </section>

    <section className="max-w-[1280px] mx-auto px-4">
      {/* Heading Section */}
      <h2 className="text-[#1C1B1D] text-center text-[55px] font-semibold leading-[71.5px] mb-8">
        Starten Sie mit der Prime Home Care AG in eine sorgenfreie Zukunft
      </h2>

      {/* Button Section */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* First Button */}
        <div className="flex flex-col justify-center items-start bg-[#04436F] text-white md:w-[608px] md:h-[209px] rounded-[37px] px-[40px] py-[52px] gap-4">
          <p className="text-[36px] font-[600] leading-[52px]">
            Stundenweise Betreuung durch Prime Home Care AG
          </p>
          <Link href="/landingpage1">
      <button className="bg-white text-[#04436F] rounded-[50px] py-[10px] px-[20px]">
        weiter
      </button>
    </Link>
        </div>

        {/* Second Button */}
        <div className="flex flex-col justify-center items-start bg-[#B99B5F] text-white md:w-[608px] md:h-[209px] rounded-[37px] px-[40px] py-[52px] gap-4">
          <p className="text-[36px] font-[600] leading-[52px]">
            Stundenweise Betreuung durch Prime Home Care AG
          </p>
          <button className="bg-white text-[#04436F] rounded-[50px] py-[10px] px-[20px]">
            weiter
          </button>
        </div>
      </div>
    </section>
     <section className='md:mt-[200px] mt-[100px]'>

     </section>
    </div>
  );
}

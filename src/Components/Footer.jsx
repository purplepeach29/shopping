import { faFacebook, faSquareInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Support", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

export  default function Footer() {
  return (
    <footer className="relative w-full pt-8 text-black ">
      <div className="mx-auto w-full max-w-7xl px-8 pb-4">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <h5 className="mb-6">Polyjuice potion available</h5>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <li>
                  <h6 className="mb-3 font-medium opacity-40">{title}</h6>
                </li>
                {items.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="py-1.5 font-normal hover:text-orange-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-around">
          <p className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            &copy; {currentYear} <a href="https://material-tailwind.com/">Prachi Raghav </a>. All
            Rights Reserved.
          </p>
            <div className="flex gap-5">
            <FontAwesomeIcon icon={faXTwitter} style={{color: "blue",}} />
            <FontAwesomeIcon icon={faSquareInstagram} style={{color: "blue",}} />
            <FontAwesomeIcon icon={faFacebook} style={{color: "blue",}} />
            <FontAwesomeIcon icon={faYoutube} style={{color: "blue",}} />
            </div>
        </div>
      </div>
    </footer>
  );
}
import { footerLinks, socialLinks } from "../constant";
import styles, { layout } from "../style";
import Button from "../components/Button";

export default function Footer() {
  return (
    <div className="bg-dimGreen py-24">
      <div className={`${styles.container}  flex flex-wrap gap-10`}>
        <div className={`${layout.sectionInfo}   gap-y-5`}>
          <h2 className={`${styles.heading2} text-primary`}> practice </h2>
          <div>
            <h3> contact us </h3>
            <p> Call : +123 400 123 </p>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
            debitis.
          </p>
          <p>Email: example@mail.com</p>

          <ul className="flex gap-5 text-4xl">
            {socialLinks.map((el) => (
              <div
                key={crypto.randomUUID()}
                className={`p-3  ${styles.flexCenter} rounded-2xl bg-green-200 text-primary hover:bg-green-300`}
              >
                <a href="#0">{el}</a>
              </div>
            ))}
          </ul>
        </div>

        {/*  */}
        <div className="flex flex-1 gap-6 px-10">
          {footerLinks.map((link) => (
            <div key={link.title} className="flex-1">
              <h2 className="font-poppins text-lg font-semibold">
                {" "}
                {link.title}{" "}
              </h2>
              <ul key={link.title} className=" mt-4  list-none">
                {link.links.map((el) => (
                  <li key={el}>
                    {" "}
                    <a href="#0" className="p-2 text-slate-600">
                      {" "}
                      {el}{" "}
                    </a>{" "}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/*  */}

        <div className={`${layout.sectionInfo} justify-between gap-y-4 px-5`}>
          <h3 className="text-lg font-semibold ">Subscribe</h3>
          <p className={`${styles.sectionParagraph}`}>
            Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
            auctor felis.
          </p>
          <input
            className="block w-full rounded-lg border bg-slate-50 p-3  px-2 outline-none focus:border-primary"
            type="email"
            placeholder="Email Here"
          />
          <Button styles={"text-white "} text="subscribe now " />
        </div>
      </div>
    </div>
  );
}

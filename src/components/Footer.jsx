import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-stone-900 text-white border-gray-300 pt-10">
      <div className="md:w-11/12 mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-8 justify-between my-5">
          <div className="md:w-5/12 space-y-3">
            <a href="#">
              <Image
                width={150}
                height={60}
                src={"/logo.png"}
                alt="logo"
              ></Image>
            </a>
            <p>
              we5ive is your one-stop online store, offering a wide range of
              products to meet your daily needs. We are committed to delivering
              quality, convenience, and an exceptional shopping experience for
              our valued customers.
            </p>
          </div>
          <div className="md:w-5/12 space-y-3">
            <h2 className="text-2xl lg:3xl">Sign Up For Our Newsletter!</h2>
            <p>
              Get notified about updates and be the first to get early access to
              new Product.
            </p>
            <label className="input input-bordered flex justify-between pl-2 p-0">
              <input type="text" placeholder="Your email address" />
              <span className="btn text-white border-0 bg-primary rounded-l-none">
                Subscribe
              </span>
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-between my-6">
          <div className="flex flex-col gap-2">
            <a href="#">Get support</a>
            <p>support@We5ive.com</p>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#">Privacy policy</a>
            <a href="#">terms & Condition</a>
          </div>
          <div className="flex flex-col gap-2">
            <h2>Social Link</h2>
            <p className="flex gap-5">
              <a
                href="#"
                className="hover:text-stone-800 rounded-full border p-1 transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="hover:text-stone-800 rounded-full border p-1 transition duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="hover:text-stone-800 rounded-full border p-1 transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full py-4 bg-primary">
        <p className="text-center">&copy; 2024 We5ive.</p>{" "}
      </div>
    </footer>
  );
};

export default Footer;

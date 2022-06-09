import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconBubble from "../ui/IconBubble";
import ResponsiveRow from "../ui/ResponsiveRow";
import { faBlog, faCloud, faUserAlt } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  
  return (
    <section className={"center section"}>
      <p className={"text-grey"}>Nisi ut aliquip ex ea commodo</p>
      <h2 className="heading h2">
        Share The Features That Help Your Customers
      </h2>
      <p className={"text-grey"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </p>
      <ResponsiveRow>
        <div className={"flex-center flex-col-3"}  data-aos="zoom-in">
          <IconBubble>
            <FontAwesomeIcon icon={faCloud} />
          </IconBubble>
          <h4 className={"heading"}>Documentation</h4>
          <p className={"text-grey"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div className={"flex-center flex-col-3"}  data-aos="zoom-in" data-aos-delay="300">
          <IconBubble>
            <FontAwesomeIcon icon={faUserAlt} />
          </IconBubble>
          <h4 className={"heading"}>Customers</h4>
          <p className={"text-grey"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>
        <div className={"flex-center flex-col-3"}  data-aos="zoom-in" data-aos-delay="600">
          <IconBubble>
            <FontAwesomeIcon icon={faBlog} />
          </IconBubble>
          <h4 className={"heading"}>Blog</h4>
          <p className={"text-grey"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
      </ResponsiveRow>
    </section>
  );
};

export default Features;

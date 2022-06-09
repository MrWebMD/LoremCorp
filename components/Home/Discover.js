import Card from "../ui/Card";
import ResponsiveRow from "../ui/ResponsiveRow";
import TextBlock from "../ui/TextBlock";

const Discover = () => {

  return (
    <section className={"center section"}>
      <h2 className="heading h2" data-aos="fade-up">Etiam Nulla Lectus Amet</h2>
      <p className={"text-grey"} data-aos="fade-up" data-aos-delay="100">Neque, pulvinar vestibulum non aliquam.</p>
      <ResponsiveRow>
        <TextBlock>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/collaboration2.png"
            width="100%"
            alt="employees working around table"
            data-aos="fade-up"
          />
        </TextBlock>
        <TextBlock>
          <Card data-aos="fade-up" data-aos-delay="300">
            <h3 className="heading h3">
              Discover The Power Of Creative Freedom with Align
            </h3>
            <p className={"text-grey"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Card>
        </TextBlock>
      </ResponsiveRow>
      <ResponsiveRow>
        <TextBlock>
          <Card data-aos="fade-right">
            <h3 className="heading h3">
              Discover The Power Of Creative Freedom with Align
            </h3>
            <p className={"text-grey"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Card>
        </TextBlock>
        <TextBlock>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/office.png"
            width="100%"
            alt="employees in an office"
            data-aos="fade-left" data-aos-delay="300"
          />
        </TextBlock>
      </ResponsiveRow>
    </section>
  );
};

export default Discover;

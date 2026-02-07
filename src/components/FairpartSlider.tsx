import landscapeImg from "@/assets/images/fairpart-landscape.jpg";
import portraitImg from "@/assets/images/fairpart-portrait.jpg";

const FairpartSlider = () => {
  return (
    <section className="w-full flex flex-col items-center px-4 pt-6 pb-2">
      <div className="fairpart-slider w-full max-w-2xl aspect-[4/3] sm:aspect-[16/10]">
        <img
          src={landscapeImg}
          alt="Faire-part paysage — Anne et Alain-Gray"
          className="fairpart-img"
          loading="eager"
        />
        <img
          src={portraitImg}
          alt="Faire-part portrait — Anne et Alain-Gray"
          className="fairpart-img"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default FairpartSlider;

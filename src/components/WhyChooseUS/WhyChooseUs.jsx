import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "♙",
      title: "Experienced",
      subtitle: "Doctors",
    },
    {
      icon: "▦",
      title: "Modern",
      subtitle: "Equipment",
    },
    {
      icon: "◷",
      title: "Affordable",
      subtitle: "Treatment",
    },
    {
      icon: "✥",
      title: "Patient-Centered",
      subtitle: "Care",
    },
  ];

  return (
    <section className="why-choose">

      <div className="why-container">

        {/* Heading */}
        <div className="why-title">
          <h3>Why Choose Us?</h3>
        </div>

        {/* Features */}
        <div className="why-features">

          {features.map((feature, index) => (
            <div className="why-feature" key={index}>

              <div className="why-icon">
                {feature.icon}
              </div>

              <h4>{feature.title}</h4>
              <p>{feature.subtitle}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;
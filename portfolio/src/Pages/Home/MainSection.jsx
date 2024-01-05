export default function MainSection() {
  return (
    <section id="mainSection" className="main--section">
      <div className="main--section--content--box">
        <div className="main--section--content">
          <p className="section--title">Hello, I am Mokhtar Chennouf </p>
          <h1 className="main--section--title">
            <span className="main--section-title--color"> Welcome to</span>{" "}
            <br />
            my portfolio
          </h1>
          <p className="main--section-description">
          I m computer science student at university of constantine 2
            <br /> Now i m studying Information and Communication Science 
             and Technology  the first year of master degree .
             I m a junior front-end  web developer and a web designer.
            <br />you can scroll down to see my skills and my projects .
          </p>
        </div>
      </div>
      <div className="main--section--img">
        <img src="./img/logo.png" alt="Main Section" />
      </div>
    </section>
  );
}

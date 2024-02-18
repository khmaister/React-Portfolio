export default function AboutPage() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="m-5 p-30">About Me</h1>
              <p className="m-5 p-10">Hello! My name is <b>Vandarady (Van) Khin.</b> I am a student of knowledge and Full-Stack Development is the next chapter that I'm studying. After 6 months of Coding Bootcamp, I have learned skills of both Front-end web design and Back-end behavior such as database management and API calls. This is only the beginning of my Full-Stack journey as I will continue to practice and hone my skills in web development. </p>
              <p className="m-5 p-10">My passion is learning how things work and function. I have spent 3 years in Aerospace Manufacturing, 3 years in Electrical Control Manufacturing, and 5 years in Automtive Manufacturing. With this experirence, I have gained skills in leadership, project management and hands-on problem-solving, just to name a few.</p>
              <p className="m-5 p-10">My hobbies include, but aren't limited to, PC gaming, cars, 3D printing, and DJing.</p>
            </div>
            <div className="col-md-4 ml-auto d-flex justify-content-end">
              <div className="embed-responsive embed-responsive-1by1" id="me">
                <img src="../src/assets/profilePic.jpg" id="pic" className="embed-responsive-item img-fluid m-20 p-20" alt="Responsive image" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
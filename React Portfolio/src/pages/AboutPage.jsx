export default function AboutPage() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="m-5 p-30">About Me</h1>
              <p className="m-5 p-10">Hello! My name is <b>Vandarady (Van) Khin</b> </p>
            </div>
            <div className="col-md-4 ml-auto d-flex justify-content-end">
              <div className="embed-responsive embed-responsive-1by1" id="me">
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
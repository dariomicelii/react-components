export default function () {
  return (
    <main>
      <div className="container d-flex justify-content-center my-5">
        {/* <div className="card">
          <img
            src="http://ecotope.com/wp-content/uploads/2016/11/600x400-placeholder.png"
            className="img-fluid w-50"
            alt=""
          />
          <div className="card-content p-2">
            <h5>Titolo del post</h5>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="btn btn-primary">Leggi di più</div>
          </div>
        </div> */}

        <div className="card">
          <img
            src="http://ecotope.com/wp-content/uploads/2016/11/600x400-placeholder.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

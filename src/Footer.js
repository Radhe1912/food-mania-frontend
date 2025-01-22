const Footer = () => {
    return (
        <div>
            <div>

                <footer className="text-white text-center text-lg-start" style={{backgroundColor: "#000000"}}>
                    <div className="p-4">
                        <div className="row mt-4">
                            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4" style={{textAlign:"center"}}>About FoodMania</h5>

                                <p>
                                    At Food Mania, we believe in providing our guests with an unparalleled experience that combines luxury, comfort, and delicious culinary delights. Nestled in the heart of the city. 
                                </p>

                                <p>
                                    our hotel offers a perfect retreat for travelers seeking relaxation and adventure.
                                </p>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0" style={{textAlign:"center"}}>
                                <div className="mt-2 mb-3">
                                    <a type="button" className="btn btn-floating btn-light btn-lg m-1"><i className="fab fa-facebook-f"></i></a>
                                    <a type="button" className="btn btn-floating btn-light btn-lg m-1"><i className="fab fa-dribbble"></i></a>
                                    <a type="button" className="btn btn-floating btn-light btn-lg m-1"><i className="fab fa-twitter"></i></a>
                                    <a type="button" className="btn btn-floating btn-light btn-lg m-1"><i className="fab fa-google-plus-g"></i></a>
                                </div>

                                <ul className="fa-ul" style={{marginLeft: "1.65em;"}}>
                                    <li className="mb-3">
                                        <span className="fa-li"><i style={{display:"flex", marginLeft:"100%"}} className="fas fa-home"></i></span><span className="ms-2">Warsaw, 00-967, Poland</span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fa-li"><i style={{display:"flex", marginLeft:"100%"}} className="fas fa-envelope"></i></span><span className="ms-2"><a href="mailto:info@foodmania.com" className="ms-2 text-white" style={{textDecoration:"none"}}>info@foodmania.com</a></span>
                                    </li>
                                    <li className="mb-3">
                                        <span className="fa-li"><i style={{display:"flex", marginLeft:"100%"}} className="fas fa-phone"></i></span><span className="ms-2"><a href="tel:+4823456788" className="ms-2 text-white" style={{textDecoration:"none"}}>+48 234 567 88</a></span>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase mb-4" style={{textAlign:"center"}}>Opening hours</h5>

                                <table className="table text-center text-white">
                                    <tbody className="fw-normal">
                                        <tr>
                                            <td>Mon - Wed:</td>
                                            <td>8am - 10pm</td>
                                        </tr>
                                        <tr>
                                            <td>Thu - Fri:</td>
                                            <td>8am - 11pm</td>
                                        </tr>
                                        <tr>
                                            <td>Sat-Sun:</td>
                                            <td>9am - 12am</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}>
                        © 2024 Copyright:
                        <a className="text-white" href="/">foodmania.com</a>
                    </div>
                </footer>

            </div>
        </div>
    );
}
export default Footer;

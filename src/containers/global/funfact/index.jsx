import Funfact from "../../../components/funfact";
import HomeData from "../../../data/home.json";

const FunfactContainer = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="counter-section">
                    <div
                        className="row row-cols-sm-3 row-cols-1"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        {HomeData[3].funfact &&
                            HomeData[3].funfact.map((single, i) => {
                                return (
                                    <div key={i} className="col">
                                        <Funfact data={single} />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FunfactContainer;

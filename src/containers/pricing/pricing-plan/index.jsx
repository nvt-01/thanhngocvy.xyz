import HomeData from "../../../data/home.json";
import Pricing from "../../../components/pricing";

const PricingContainer = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="pricing-table-wrapper">
                    <div
                        className="row row-cols-md-3 gx-0"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        {HomeData[5].pricing &&
                            HomeData[5].pricing.map((single, i) => {
                                return (
                                    <div key={i} className="col">
                                        <Pricing key={i} data={single} />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingContainer;

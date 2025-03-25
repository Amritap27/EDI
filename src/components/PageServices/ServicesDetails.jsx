import { useState } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';
import ServiceDetailsImage1 from '../../assets/images/edi-imgs/services/Building-Services.jpg';
import ServiceDetailsImage2 from '../../assets/images/edi-imgs/services/Interior-Design.jpg';
import ServiceDetailsImage3 from '../../assets/images/edi-imgs/services/Energy-Efficient-Building-Design.jpg';
import ServiceDetailsImage4 from '../../assets/images/edi-imgs/services/Interior-Design.jpg';
import ServiceDetailsImage5 from '../../assets/images/edi-imgs/services/Landscape-Design.jpg';
import ServiceDetailsImage6 from '../../assets/images/edi-imgs/services/Renovation-and-Remodelling.jpg';
import ServiceDetailsImage7 from '../../assets/images/edi-imgs/services/Interior-Design.jpg';
import ServiceDetailsImage8 from '../../assets/images/edi-imgs/services/Interior-Design.jpg';

function ServicesDetails() {
  const [showQues, setQues] = useState(1);
  const openQuestion = (value) => {
    setQues(value);
  };
  const [selectedService, setSelectedService] = useState('Building Design');

  const services = [
    'Building Design',
    'Interior Design',
    'Energy Efficient Building Design',
    'Façade Beautification',
    'Landscape Design',
    'Renovation & Re-modelling',
    'Construction Services',
    'Property Valuation',
  ];

  return (
    <>
      <InnerPageHeader />
      <PageTitle
        title="Services Details"
        breadcrumb={[
          { link: '/', title: 'Home' },
          { li: '/service-details', title: 'Services Details' },
        ]}
      />

      <section className="services-details position-relative overflow-hidden pt-120 pb-120">
        <div className="container">
          <div className="offer__wrp">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="service-sidebar">
                  <div className="sidebar-widget service-sidebar-single">
                    <div className="sidebar-service-list">
                      {/* <ul>
                        <li>
                          <Link to="/page-service-details" className="current">
                            <i className="fas fa-angle-right"></i>
                            <span>Building Design</span>
                          </Link>
                        </li>
                        <li className="current">
                          <Link to="/page-service-details">
                            <i className="fas fa-angle-right"></i>
                            <span>Interior Design</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/page-service-details">
                            <i className="fas fa-angle-right"></i>
                            <span>Energy Efficient Building Design</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/page-service-details">
                            <i className="fas fa-angle-right"></i>
                            <span>Façade Beautification</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/page-service-details">
                            <i className="fas fa-angle-right"></i>
                            <span>Landscape Design</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/page-service-details">
                            <i className="fas fa-angle-right"></i>
                            <span>Renovation and Re-modelling</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/page-service-details">
                            <i className="fas fa-angle-right"></i>
                            <span>Construction Services</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/page-service-details">
                            <i className="fas fa-angle-right"></i>
                            <span>Property Valuation</span>
                          </Link>
                        </li>
                      </ul> */}
                      <ul>
                        {services.map((service) => (
                          <li
                            key={service}
                            className={
                              selectedService === service ? 'current' : ''
                            }
                          >
                            <Link
                              to="#"
                              onClick={() => setSelectedService(service)}
                              className={
                                selectedService === service ? 'current' : ''
                              }
                            >
                              <i className="fas fa-angle-right"></i>
                              <span>{service}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-details-help">
                      <div className="help-shape-1"></div>
                      <div className="help-shape-2"></div>
                      <h2 className="help-title">
                        Contact with <br /> us for any <br /> advice
                      </h2>
                      <div className="help-icon">
                        <span className="fa-regular fa-headset"></span>
                      </div>
                      <div className="help-contact">
                        <p>Need help? Talk to an expert</p>
                        <Link to="/tel:12463330079">
                          +892 ( 123 ) 112 - 9999
                        </Link>
                      </div>
                    </div>

                    <div className="sidebar-widget service-sidebar-single mt-4">
                      <div
                        className="service-sidebar-single-btn wow fadeInUp"
                        data-wow-delay="0.5s"
                        data-wow-duration="1200m"
                      >
                        <Link to="#" className="theme-btn btn-two d-grid">
                          <span className="btn-title text-white">
                            <span className="fas fa-file-pdf"></span> download
                            pdf file
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-8 col-lg-8">
                <div className="services-details__content position-relative overflow-hidden px-3">
                  {selectedService === 'Building Design' && (
                    <div className="building-design-section">
                      <img
                        className="w-100"
                        src={ServiceDetailsImage1}
                        alt="Image"
                      />
                      <h3 className="mt-4">Building Design</h3>
                      <p>
                        With EDI , we have the breathtaking designs for
                        buildings and the perfect team of Architects and
                        Engineers that convert thoughts into reality.
                      </p>
                      <p>
                        We at EDI , welcome you to the designing experience that
                        will definitely radiate the energy of your vision in
                        your design. We design all kinds and categories of
                        buildings that one can imagine of , including
                        residential , commercial as well public buildings.
                      </p>
                      <p>
                        The design process is iterative, with the client’s needs
                        being clarified, possibilities being analyzed, designs
                        being generated, designs being reviewed, progress being
                        approved, and a decision to move on to the next stage
                        being made.
                      </p>
                    </div>
                  )}
                  {selectedService === 'Interior Design' && (
                    <div className="interior-design-section">
                      <img
                        className="w-100"
                        src={ServiceDetailsImage2}
                        alt="Image"
                      />
                      <h3 className="mt-4">Interior Design</h3>
                      <p>
                        Interior Designs with EDI is a speciality that we offer
                        with minute details that we put in the designs which
                        adds to the beauty of your building interiors. EDI takes
                        care of design along with sustainability and performance
                        of the building.
                      </p>
                      <p>
                        Interior design is all about how we interact with our
                        surroundings. It’s a vital component of our daily life
                        that influences how we live, work, play, and even
                        recover. Interior design at work creates comfortable
                        homes, effective workplaces, and stunning public areas.
                        The best structures and interiors are those in which
                        there is no visible contrast between the various pieces
                        that make up the whole. The structural characteristics
                        of a building, site planning, landscaping, furnishings,
                        architectural graphics (signs), and interior
                        embellishments are all examples of these elements.
                      </p>
                      <p>
                        The question of whether a design “works” or serves for
                        its intended purpose must be one of the most important
                        concerns in any design. EDI assures you of this
                        important aspect and designs your project addressing all
                        the intended purposes.
                      </p>
                    </div>
                  )}
                  {selectedService === 'Energy Efficient Building Design' && (
                    <div className="energy-efficient-building-design-section">
                      <img
                        className="w-100"
                        src={ServiceDetailsImage3}
                        alt="Image"
                      />
                      <h3 className="mt-4">Energy Efficient Building Design</h3>
                      <p>
                        The world needs designers who take care of nature and
                        protect the environment as a part of the process of
                        giving it back to nature. We at EDI are proud to
                        announce the Energy Efficient Designs in Nepal for the
                        first time at a level and detail which you have never
                        seen before. These buildings will not only be buildings
                        to live or work in but a beautiful experience of
                        aesthetics along with a great thermal , acoustic and
                        noise insulation performance.
                      </p>
                      <p>
                        In the architectural design of buildings, energy
                        conservation has become a significant emphasis. As a
                        result, selecting the proper Architectural Design
                        Features early in the design process provides a
                        substantial chance to manage heat flow, avoid excessive
                        energy use, and keep occupants at a suitable
                        temperature.
                      </p>
                      <p>
                        Sustainable construction seeks to provide residents with
                        comfort and health by using high-quality sanitary and
                        environmental materials for both the actual construction
                        and the insulation. EDI believes in sustainable
                        architecture which is represented in a variety of
                        methods aimed at reducing a building’s negative impact
                        on the environment while also considering the quality of
                        life of its users and surrounding communities.
                      </p>
                      <p>
                        Our architects and engineers are both involved in the
                        creation of environmental designs that adequately
                        reflect high performance in new buildings through
                        sustainability and energy efficiency.
                      </p>
                    </div>
                  )}
                  {selectedService === 'Façade Beautification' && (
                    <div className="beautification-section">
                      <img
                        className="w-100"
                        src={ServiceDetailsImage4}
                        alt="Image"
                      />
                      <h3 className="mt-4">Façade Beautification</h3>
                      <p>
                        With the trend of modern urbanization taking place with
                        quite a pace that we can’t take care of , the thing we
                        can certainly take care of is the beauty of the
                        buildings which have already been built in the past but
                        require a Façade Beautification with moving modern times
                        when you see the other modern buildings look up to date.
                      </p>
                      <p>
                        In buildings, cladding systems play a significant role
                        in façade beautification. They can provide thermal
                        insulation, weather protection, and - perhaps most
                        importantly - give the structure a “face,” increasing
                        its look and clearly distinguishing the architectural
                        feature. It is an important feature in building design
                        and giving it a beautiful aesthetically pleasing look.
                      </p>
                      <p>
                        EDI gives you an opportunity to redesign your building
                        from the front so that you can awe the people back again
                        like you used to.
                      </p>
                    </div>
                  )}
                  {selectedService === 'Landscape Design' && (
                    <div className="landscape-design-section">
                      <img
                        className="w-100"
                        src={ServiceDetailsImage5}
                        alt="Image"
                      />
                      <h3 className="mt-4">Landscape Design</h3>
                      <p>
                        EDI gives you an opportunity to redesign your building
                        from the front so that you can awe the people back again
                        like you used to.
                      </p>
                      <p>
                        Landscape architecture is the creation of outdoor public
                        spaces, landmarks, and structures with the goal of
                        achieving environmental, social-behavioral, and
                        aesthetic goals. It entails a thorough examination of
                        the landscape’s current social, biological, and
                        geological circumstances and processes, as well as the
                        creation of interventions that will achieve the intended
                        result. With EDI, one can incorporate all these
                        landscaping features in their property. Our designers
                        start with the natural landscape, enhancing, recreating,
                        or altering existing landforms.
                      </p>
                      <p>
                        Landscape Design also includes all the park designs ,
                        amusement parks , children’s park etc along with the
                        residential landscaping , green roofs , terrace
                        gardening etc all at one place at EDI.
                      </p>
                    </div>
                  )}
                  {selectedService === 'Renovation and Re-modelling' && (
                    <div className="renovation-section">
                      <img
                        className="w-100"
                        src={ServiceDetailsImage6}
                        alt="Image"
                      />
                      <h3 className="mt-4">Renovation & Re-modelling</h3>
                      <p>
                        Renovation and Remodeling are the components that we can
                        never be sure of , but at EDI , we assure you that the
                        renovation and remodeling works that we recommend and do
                        will meet your expectations in the best way possible.
                      </p>
                      <p>
                        Renovation is the alteration to an existing structure,
                        or a component of a structure, that causes paint to be
                        disturbed. You can redesign your property according to
                        your needs and requirements. EDI assures of meeting all
                        your expectations of remodeling and renovating your
                        property.
                      </p>
                    </div>
                  )}
                  {selectedService === 'Construction Services' && (
                    <div className="construction-service-section">
                      <img
                        className="w-100"
                        src={ServiceDetailsImage7}
                        alt="Image"
                      />
                      <h3 className="mt-4">Construction Services</h3>
                      <p>
                        At EDI , we provide the best construction facilities for
                        all the civil works , interior works , renovation and
                        retrofitting works , beautification works , landscape
                        designs etc all under one hood.
                      </p>
                      <p>
                        We assure you that you will be in the driver’s seat
                        while looking at your design turn into reality. EDI
                        promises you Client’s First Policy , which ensures that
                        you will be the one that chooses the final details
                        before we start the construction project.
                      </p>
                      <p>
                        Design, construction and operation are the three primary
                        steps of a typical building construction process. EDI
                        thoroughly examines and analyses these processes and
                        makes an effective implementation. Our team focuses on
                        managing the three main aspects in construction
                        management, i.e time, cost and quality. These three must
                        go together for a successful project operation and
                        completion.
                      </p>
                    </div>
                  )}
                  {selectedService === 'Property Valuation' && (
                    <div className="valuation-section">
                      <img
                        className="w-100"
                        src={ServiceDetailsImage8}
                        alt="Image"
                      />
                      <h3 className="mt-4">Property Valuation</h3>
                      <p>
                        The first hurdle in selling real estate is finding its
                        true and market value. Real estate valuation services
                        can greatly help owners estimate and determine the
                        correct value of the property they are trying to sell or
                        rent. Real estate valuation services help real estate
                        owners determine the fair and competitive value of real
                        estate to avoid losses and mistakes.
                      </p>
                      <p>
                        To begin this process, a real estate appraiser inspects
                        the property, assesses its condition, equipment and
                        attractiveness, and determines its market value. The
                        property valuation process has five major steps. Lists
                        the step-by-step process of the real estate appraisal
                        process, including:
                      </p>
                      <ol>
                        <li>
                          <h6>Submission of real estate documents</h6>
                          <p>
                            In order to initiate the real estate valuation
                            process, the owner must provide the valuator with
                            real estate related legal documents for proper
                            appraisal. These documents include sales
                            certificates, ownership certificates, building plans
                            / layouts, property tax receipts, land permits (if
                            any), and more.
                          </p>
                        </li>
                        <li>
                          <h6>Real estate inspection</h6>
                          <p>
                            The next steps in a real estate valuation include a
                            physical inspection by a certified valuator or
                            engineer who performs a thorough internal and
                            external inspection. A valuator is an experienced
                            certified personnel who makes a physical appraisal
                            of the property and prepares a final report based on
                            the results. The valuator can examine the
                            architectural style, layout, size, condition, and
                            building quality of the property.
                          </p>
                        </li>
                        <li>
                          <h6>Property Measurement and Attestation</h6>
                          <p>
                            To assess the accurate property value the valuator
                            will measure the property, cross verify with legal
                            documents, click necessary images with a date stamp,
                            and analyze the actual health of the property. The
                            valuator will note down all the relevant information
                            about the physical health of the property, legal
                            approvals, and evaluate the property as a whole
                            unit.
                          </p>
                        </li>
                        <li>
                          <h6>Property Location Assessment</h6>
                          <p>
                            Post evaluating the internal and external features
                            of the property, the property valuator assesses
                            mileages that the property enjoys due to its
                            location. These aspects contribute significantly to
                            the value of the property. Some of the major
                            elements are the locality of the property, demand of
                            real estate in the locality, public infrastructure,
                            civil transport and amenities, shops, malls,
                            offices, hospitals, and such.
                          </p>
                        </li>
                        <li>
                          <h6>Final Report of properties</h6>
                          <p>
                            Finally, the valuator prepares the final report.
                            This report describes various aspects of the
                            property. The final report will include a location
                            description, title details, location description,
                            plans, comparable sales, valuations, property
                            photos, and disclaimers.
                          </p>
                        </li>
                      </ol>
                      <div>
                        <h4>Benefits of Property Valuation service</h4>
                        <p>
                          Why Should Buyers or Sellers Choose Property Valuation
                          Services? This service has many benefits. Property
                          Valuation services assist sellers or buyers in the
                          following ways:
                        </p>
                        <ol>
                          <li>
                            Estimate the actual market price of real estate.
                          </li>
                          <li>Create a comprehensive report on properties.</li>
                          <li>Highlights a property asset.</li>
                          <li>Real Estate Emphasizing Locational Benefits.</li>
                          <li>
                            Assessing the Feasibility of Potential Future
                            Development Projects.
                          </li>
                          <li>
                            Assessing Real Estate Profitability and
                            Profitability
                          </li>
                        </ol>
                      </div>
                      <div>
                        <h4>Methods of Valuation</h4>
                        <p>
                          A property valuator may adopt different types of
                          valuation methods while conducting property valuation.
                          In the majority of cases, the property valuator uses
                          the comparative method, investment method and profits
                          method to land up at the valuation figure. But some
                          properties may demand for a refined analysis to add
                          extra leeway to the devalue of the property. Below
                          mentioned are the five methods of valuation of
                          property:
                        </p>
                        <ol>
                          <li>
                            <h6>Comparative Method</h6>
                            <p>
                              Also known as Inferred Analysis of property value,
                              this methodology involves comparing the prices of
                              the property in the same area. The final value of
                              the property is derived based on the value of the
                              neighboring properties. Under this method a close
                              examination of similar buildings/ property having
                              matching characteristics and dimensions. Commonly
                              used, the comparative method is usually utilized
                              while assessing the market value of a residential
                              property.
                            </p>
                          </li>
                          <li>
                            <h6>Profit Method</h6>
                            <p>
                              Profits Method is commonly applied while
                              conducting a property valuation of business
                              property. With the help of this method market
                              value of properties like restaurants, rental
                              office space, mall, hotel, etc., are assessed. The
                              valuator calculates the market value of the
                              property by taking the consecutive three years
                              average operating income of the business. This
                              number is secured with the help of the profit and
                              loss statement of the business.
                            </p>
                          </li>
                          <li>
                            <h6>Residual method</h6>
                            <p>
                              This valuation method comes in handy when an
                              investor, developer or owner is evaluating the
                              property value for future development. The
                              Residual Method helps in assessing the viability
                              of the property, whether it holds potential for a
                              development project, redevelopment project or
                              rental purposes. Under this method, gross
                              development cost, building cost, property builder/
                              developers profit, and fees are all considered
                              while calculating the property value.
                            </p>
                          </li>
                          <li>
                            <h6>Contractor`s Method</h6>
                            <p>
                              The Contractor`s Method or Cost Method utilizes
                              the replacement value of the property technique.
                              Where Comparative Method and Profit Method fail to
                              provide an accurate estimate of the property, then
                              this method is employed. In this method, each
                              component of construction, cost of each
                              construction, up-to-date construction techniques,
                              the value of land, and reconstruction cost are
                              added up together. Further to arrive at the market
                              value of the property a representative
                              depreciation figure is deducted from the previous
                              number to arrive at the final estimate.
                            </p>
                          </li>
                          <li>
                            <h6>Investment Method</h6>
                            <p>
                              The Investment Method is a practical method of
                              assessment effectively used to fix the market
                              value of commercial properties. The market value
                              of the property is directly related to its income
                              generating potential. This method provides a fair
                              overview of converting income from an asset (both
                              current and future) into near principal. The
                              appraiser now applies the discounted cash flow
                              method to take into account future cash flows
                              generated by the property owner from the property.
                            </p>
                          </li>
                        </ol>
                      </div>
                      <div>
                        <h4>Purpose of Property Valuation</h4>
                        <p>
                          Property valuation services can be availed for
                          different types of purposes as mentioned below:
                        </p>
                        <ol>
                          <li>
                            <h6>For Selling or Buying Property</h6>
                            <p>
                              Before hanging the `On Sale` or `For Rent` board
                              on the property, it is essential to get it
                              assessed and valued. The process helps to fetch
                              the fair market price of the property and get a
                              better understanding of the real estate market. A
                              certified valuer will inspect, evaluate, and share
                              the final market value considering all the factors
                              associated with the property.
                            </p>
                          </li>
                          <li>
                            <h6>For Renting Purposes</h6>
                            <p>
                              If a property owner is looking to rent out his/her
                              property, then property valuation services help in
                              determining reasonable and competitive rent. Post
                              receiving the final evaluation report of the
                              property, the owner can fix the rent between 6-10%
                              of the total market value of the property.
                            </p>
                          </li>
                          <li>
                            <h6>For Mortgage Purposes</h6>
                            <p>
                              When a buyer rents a property with a mortgage for
                              the purpose of a mortgage, the valuation of the
                              property is very important. The amount of the loan
                              is directly related to the final valuation of the
                              property. Various loan terms are affected by the
                              final valuation and value of the property.
                            </p>
                          </li>
                          <li>
                            <h6>For Taxation Purposes</h6>
                            <p>
                              Taxes Various types of taxes are levied on real
                              estate, including housing, commercial facilities,
                              and land. Taxes related to such real estate
                              include wealth tax, property tax and council tax.
                              To pay these taxes to the government the actual
                              worth of the property needs to be assessed to
                              serve as a basis for tax calculation.
                            </p>
                          </li>
                          <li>
                            <h6>For Transfer of Property Title</h6>
                            <p>
                              In several cases, the title of the property is
                              transferred to another person, say, a relative or
                              legal heir. To initiate the process for transfer
                              of property title property evaluation becomes
                              imperative as the stamp duty is calculated as per
                              the estimated value of the property. Hence, first,
                              the property value is estimated and then the stamp
                              duty is calculated to complete the transfer of
                              property title.
                            </p>
                          </li>
                          <li>
                            <h6>Acquisition</h6>
                            <p>
                              Acquisition and merger cases are often heard and
                              seen in the news, where sometimes one company
                              takes over another company or property. In such
                              cases, the property will be pre-assessed and the
                              final market cost will be determined. This helps
                              bidders or buyers create acquisition plans and
                              track funding resources. Therefore, real estate
                              appraisal services are not only important when
                              buying and selling real estate, but also help
                              determine market value for a variety of purposes.
                            </p>
                          </li>
                        </ol>
                      </div>
                    </div>
                  )}
                  <div className="innerpage mt-25">
                    <h3>Frequently Asked Question</h3>
                    <p>
                      Lorem ipsum is simply free text used by copytyping
                      refreshing. Neque porro est qui dolorem ipsum quia quaed
                      inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo.
                    </p>
                    <ul className="accordion-box mt-30 wow fadeInRight">
                      <li
                        onClick={() => openQuestion(1)}
                        className={`accordion block ${
                          showQues === 1 ? 'active-block' : ''
                        }`}
                      >
                        <div
                          className={`acc-btn ${
                            showQues === 1 ? 'active' : ''
                          }`}
                        >
                          Where do I usually find FAQs in a page?
                          <div className="icon fa fa-angle-down"></div>
                        </div>
                        <div
                          className={`acc-content ${
                            showQues === 1 ? 'current' : ''
                          }`}
                        >
                          <div className="content">
                            <div className="text">
                              Suspendisse finibus urna mauris, vitae consequat
                              quam vel. Vestibulum leo ligula, vit commodo nisl
                              Sed luctus venenatis pellentesque.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        onClick={() => openQuestion(2)}
                        className={`accordion block ${
                          showQues === 2 ? 'active-block' : ''
                        }`}
                      >
                        <div
                          className={`acc-btn ${
                            showQues === 2 ? 'active' : ''
                          }`}
                        >
                          How to turn visitors into contributors?
                          <div className="icon fa fa-angle-down"></div>
                        </div>
                        <div
                          className={`acc-content ${
                            showQues === 2 ? 'current' : ''
                          }`}
                        >
                          <div className="content">
                            <div className="text">
                              There are many variations of passages the majority
                              have suffered alteration in some fo injected
                              humour, or randomised words believable.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        onClick={() => openQuestion(3)}
                        className={`accordion block ${
                          showQues === 3 ? 'active-block' : ''
                        }`}
                      >
                        <div
                          className={`acc-btn ${
                            showQues === 3 ? 'active' : ''
                          }`}
                        >
                          How can I find my solutions?
                          <div className="icon fa fa-angle-down"></div>
                        </div>
                        <div
                          className={`acc-content ${
                            showQues === 3 ? 'current' : ''
                          }`}
                        >
                          <div className="content">
                            <div className="text">
                              There are many variations of passages the majority
                              have suffered alteration in some fo injected
                              humour, or randomised words believable.
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterHomeThree />
      <BackToTop />
    </>
  );
}

export default ServicesDetails;

import React from "react";


const SecondContentSmallScreen = () => {
    return (
        <div className="container-fluid">
            <div className="mx-auto py-2 d-block d-md-none" style={{ maxWidth: '100%', width: '90%' }}>
                <div className="text-center mb-4">
                    <h3>ElimuFiti Learning Solutions</h3>
                    <p>Empowering education and career growth, together, for a brighter future and limitless possibilities</p>
                </div>

                {/* Content visible only on small screens */}
                <div className="animated-container">
  <div className="animated-content">
    <div className="d-flex overflow-auto hide-scrollbar">
      {/* Cards arranged horizontally */}
      <div className="d-flex flex-nowrap">
        <div className="card-wrapper flex-shrink-0">
          <h2 className="text-primary">School Resources</h2>
        </div>
        <div className="card-wrapper flex-shrink-0">
          <h2 className="text-primary">Job Opportunities</h2>
        </div>
        <div className="card-wrapper flex-shrink-0">
          <p className="text-primary">Learn More</p>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
        </div>
    );
}

export default SecondContentSmallScreen;

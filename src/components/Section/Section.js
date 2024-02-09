import './Section.css';
import Filter from '../Filter/Filter';
import Card from '../Card/Card';
import Product from '../../Data/Product.js';
import imgSection from '../../imgSection.jpg';

function Section() {
  return (
    <>
      <div className="Section">
        <div className="SectionContent1">
          <div className="SectionImage">
            <img src={imgSection} alt='imgSection'/>
            <p>bienvenue dans votre <br></br> monde imaginaire</p>
          </div>
          <div className="SectionFiltre">
            <Filter></Filter>
          </div>
        </div>
        <div className="SectionContent2">
          <div className="SectionTitle">
            <h2>liste terrains</h2>
          </div>
          <div className="SectionCardFiltre">
            <div className="SectionCard">
              {Product.map((product) => (
                <Card
                  key={product.name} 
                  imageSource={product.imageSource}
                  description={product.description}
                />
              ))}
            </div>
            <div className="SectionFiltre">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;

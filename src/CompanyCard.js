import "./CompanyCard.css";
import { Link } from 'react-router-dom';

/** CompanyCard
 *
 * Card displaying details on a single company.
 *
 * Props:
 * - company:
 *   {
 *     "handle": "anderson-arias-morrow",
 *     "name": "Anderson, Arias and Morrow",
 *     "description": "Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.",
 *     "numEmployees": 245,
 *     "logoUrl": "/logos/logo3.png",
 *   }
 *
 * State: N/A
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {

  return (
    <div className="CompanyCard"  >
      <Link to={`/companies/${company.handle}`}>
        {company.logoUrl &&
          <img
            className="CompanyCard-logo"
            src={company.logoUrl}
            alt={`${company.name} logo`} />
        }
        <h3 className="CompanyCard-name">{company.name}</h3>
        <p>{company.description}</p>
      </Link>
    </div>
  );
}

export default CompanyCard;
import "./CompanyCard.css";

/** CompanyCard for details on a single company
 *
 * Props:
 * -company {
			"handle": "anderson-arias-morrow",
			"name": "Anderson, Arias and Morrow",
			"description": "Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.",
			"numEmployees": 245,
			"logoUrl": "/logos/logo3.png",
		}
 *
 * State: N/A
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {

	return (
		<div className="CompanyCard">
			{company.logoUrl &&
				<img className="CompanyCard-logo" src={company.logoUrl} alt={`${company.name} logo`} />
			}
			<h6 className="CompanyCard-name">{company.name}</h6>
			<p>{company.description}</p>
		</div>
	);
}

export default CompanyCard;

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

function CompanyCard({company}) {


  return (
    <div className="CompanyCard">
      I am a company {company}
    </div>
  )
}

export default CompanyCard;
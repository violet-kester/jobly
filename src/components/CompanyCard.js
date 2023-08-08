import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia } from '@mui/material';
import GlassBox from './Box/Box';
import StyledTypography from './Typography/Typography';

/** CompanyCard component
 *
 * Card displaying details on a single company.
 *
 * Props:
 * - company:
 *   {
 *     "handle": "anderson-arias-morrow",
 *     "name": "Anderson, Arias and Morrow",
 *     "description": "Somebody program how I...",
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
    <GlassBox>

      <Link to={`/companies/${company.handle}`}>
        <Card elevation= {0} sx={{
          width: '100%',
        }}>
          {company.logoUrl &&
            <CardMedia
              component="img"
              image={company.logoUrl}
              sx={{
                height: 50,
                marginTop: '20px',
                objectFit: 'contain',
              }}
            />
          }
          <CardContent sx={{
            padding: '24px',
          }}>
            <StyledTypography variant="h5" gutterBottom>
              {company.name}
            </StyledTypography>
            <StyledTypography variant="body1">
              {company.description}
            </StyledTypography>
          </CardContent>
        </Card>
      </Link>

    </GlassBox>
  );
}

export default CompanyCard;